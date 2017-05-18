var bcrypt = require('bcrypt');

var _bcrypt = (__password) => new Promise((resolve, reject)=>{
    bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash(__password, salt, function(err, hash) {
            resolve(hash)
        });
    });
})


var _password = '12345'
_bcrypt(_password).then( 
    (result)=> console.log(result)
)