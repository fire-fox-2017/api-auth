const jwt = require('jsonwebtoken');

module.exports= {
    isAdmin: function(req,res,next){

        jwt.verify(req.headers.token, 'secret', function(error, decoded){
            if(decoded) {
                if(decoded.role === 'Admin'){
                    next();
                } else {
                    res.json({message : 'Anda tidak dapat menggunakan fitur ini'})
                }
            } else {
                res.json({message: error})
            }
        })
    },
    auth: function(data){
        let token = jwt.sign(data, 'secret', { expiresIn: '1h' })
        return token;
    }
}
