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
Go to thingspeak.com
Login or create an account
Create a new channel
Add a name and description to your channel
Add a name for field 1, but don't check off any other field boxes
Determine if you want to make the channel public or not and tick the box as appropriate
Save the channel
Click the API Keys tab and copy the "Write API Key"
In the folder where you saved the code, find the file conf.json.default
Copy conf.json.default to conf.json
Save the API key in the apiKey field where directed
Alter the check frequency and publish frequencies as desired

# Running
```bash
$ node index.js
```
