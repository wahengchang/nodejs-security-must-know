
var bcrypt = require('bcrypt');

var _check = (__password, __hash) => new Promise((resolve, reject)=>{
    bcrypt.compare(__password, __hash, function(err, res) {
    // res == true for correct password
    // res == false for wrong password            
        resolve(res)
    });
})


var _password = '12345'
var _hash = '$2a$12$G/YjgNictiQ9ueS7fkUgw.ToQ5T.f4wLXXXBZ.lmhY.9v4IpfUcYO'

_check(_password, _hash).then( 
    (result)=> console.log(result)
)
