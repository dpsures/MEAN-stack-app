const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
  
// angular use PathLocationStrategy
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});