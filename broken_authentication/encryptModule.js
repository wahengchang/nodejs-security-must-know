var bcrypt = require('bcrypt')
var crypto = require('crypto')

var _hashFunction = (_password) => crypto.createHash('sha384')
                                        .update(_password)
                                        .digest()
                                        .toString('base64')

module.exports = {
        encrypt : (_password) => {
                const password = _hashFunction(_password)
                return bcrypt.hash(password, 12)
        },
        compare : (_password, _hash) => {
                const password = _hashFunction(_password)
                return bcrypt.compare(password, _hash)
        }
}

// when using bcrypt.hash, 
// you also should be using bcrypt.compare 
// rather than rehashing and checking string equality.