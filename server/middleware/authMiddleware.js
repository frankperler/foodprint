const JWT = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];
    console.log('token from middleware---', token)
    if (!token) return res.sendStatus(401);
    const {id} = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (id) {
        console.log("verification successful")
        next() 
    }
    else res.sendStatus(401).end();
} 