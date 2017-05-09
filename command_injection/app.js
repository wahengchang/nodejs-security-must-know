var express = require('express')
var app = express()
const child_process = require('child_process');


app.get('/', function (req, res) {
  child_process.exec(
    'gzip ' + req.query.file_path,
    function (err, data) {
      console.log('err: ', err)
      console.log('data: ', data);
    });
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
