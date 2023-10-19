const express = require('express');
const App = express();
const env = require('dotenv').config()
const port = process.env.PORT;


App.listen(port,() => console.log("TalkingDocs listening on port: " + port));