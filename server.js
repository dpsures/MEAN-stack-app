const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname + '/dist')));

// API location
app.use('/api', api);

// angular use PathLocationStrategy
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.set('port', (process.env.PORT || 5000));

const port = app.get('port');

const server = http.createServer(app);

server.listen(port, () => console.log('Server Running on port :', port));

/*app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });*/