var encrypt = require('./encryptModule.js').encrypt;
var compare = require('./encryptModule.js').compare;

var password = '123456';

encrypt(password)
    .then((hash)=> {
        console.log('hash result: ', hash)
        return compare(password, hash)
    })
    .then((res)=> {
        console.log('Compare hash and password: ', res)
    })