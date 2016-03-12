var isOnline = require("is-online")
var moment = require("moment-timezone");
var timr = require("timr");
var rest = require("rest");
var fs = require('fs');
var scheduler = timr();
var backlog = [];

try {
  var conf = JSON.parse(fs.readFileSync('./conf.json', 'utf8'));
  const API_KEY = conf.apiKey;
  const PING_INTERVAL = conf.checkFrequencySeconds;
  const PUSH_FREQ = conf.publishFrequencySeconds;
} catch(e) {
  console.log("Please copy the file conf.json.default to conf.json. Place your thingspeak.com API key in the appropriate location within the file.");
  process.exit();
}

console.log("Starting internet connection monitor.\nChecking every " + PING_INTERVAL + " seconds.\nUploading that data to thingspeak.com every " + PUSH_FREQ + " seconds.");

const URL = 'https://api.thingspeak.com/update?api_key={apikey}&created_at={stamp}&field1={isOnline}'

var ping = function() {isOnline(function(err, online) {
    var check = {stamp: moment().tz('GMT').format(), online:online};
    backlog.push(check);
    if(online && backlog.length >= (PUSH_FREQ/PING_INTERVAL)) {
        while(event = backlog.shift()) {
            pushToAPI(event.stamp, event.online);
        }
    }
})};

function pushToAPI(stamp, status) {
    var api = URL
      .replace('{isOnline}', status+0)
      .replace('{stamp}', encodeURIComponent(stamp))
      .replace('{apikey}', API_KEY);
    rest(api)
    .then(o => {
      if(o.status == 400) {
        "Recieved a 400 error from the server. Check your thingspeak.com API key in conf.json";
      }
      console.log(stamp,status?'Online':'Offline',o.status);
    });
}

scheduler().every(PING_INTERVAL).seconds().run(ping);
