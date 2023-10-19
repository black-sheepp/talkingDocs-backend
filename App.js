const express = require('express');
const App = express();
const env = require('dotenv').config()
const port = process.env.PORT;

App.use(express.static('./Public'))



App.use('/', require('./Routes/index'))
App.listen(port,() => console.log("TalkingDocs listening on port: " + port));