let methods = {}
const jwt = require('jsonwebtoken')
const env = require('env')

methods.check_token = (req, res, next) => {
    let x = req.headers.token
    if (x === token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.status(403).send({
                    success: false,
                    message: "Failed to authenticate user."
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        res.status(403).send({
            success: false,
            message: "No Token Provided."
        })
    }
}

module.exports = methods