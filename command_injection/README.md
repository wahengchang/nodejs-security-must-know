# Command Injection
This is a note from the book of __*Securing Node Applications*__



## Express server
An injection vulnerability manifests when application code sends untrusted user input to an interpreter as part of a command or query.
```js

...
app.get('/', function (req, res) {
  child_process.exec(
    'gzip ' + req.query.file_path,
    function (err, data) {
      console.log('err: ', err)
      console.log('data: ', data);
    });
  res.send('Hello World!')
})
...

```

## Execute a malicious

Open the page on browser, with __file_path__ as parameter
```
http://localhost:3000/?file_path=app.js
```
<img width="581" alt="screen shot 2017-05-09 at 2 31 58 pm" src="https://cloud.githubusercontent.com/assets/5538753/25838624/a5ad81d8-34c6-11e7-8f24-7e309b1ac1f5.png">



#### Injection vulnerability
To exploit the injection vulnerability in the preceding code, an attacker can append

![screen shot 2017-05-09 at 2 32 28 pm](https://cloud.githubusercontent.com/assets/5538753/25838187/776ebcbc-34c4-11e7-88cd-283e727eab74.jpg)



## Preventing Command Injection
 - USE EXECFILE OR SPAWN INSTEAD OF EXEC
    - spawn and execFile method signatures force developers to separate the command and its arguments
 - INPUT VALIDATION
