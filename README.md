# internet-connection-logger
Monitor your internet uptime and push the resulting data to thingspeak.com

# Installing

**npm**
```bash
$ npm install internet-connection-logger
```

**Source**
```bash
$ git clone git@github.com:ianmaddox/internet-connection-logger.git
$ cd internet-connection-logger
$ npm install
```

# Setup
1. Go to thingspeak.com
1. Login or create an account
1. Create a new channel
1. Add a name and description to your channel
1. Add a name for field 1, but don't check off any other field boxes
1. Determine if you want to make the channel public or not and tick the box as appropriate
1. Save the channel
1. Click the API Keys tab and copy the "Write API Key"
1. In the folder where you saved the code, find the file conf.json.default
1. Copy conf.json.default to conf.json
1. Save the API key in the apiKey field where directed
1. Alter the check frequency and publish frequencies as desired

# Running
```bash
$ node index.js
```
