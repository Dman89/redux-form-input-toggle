const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const app = express();
app.use(morgan('combined'));
app.use(express.static("public"))
app.use("/", express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server Listening on localhost:' + port);
});

module.exports = app;
