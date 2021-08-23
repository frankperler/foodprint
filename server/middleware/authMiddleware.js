const JWT = require('jsonwebtoken')

export const verifyToken = (req, res, next) => {
    const header = req.headers['Authorization'];
    const token = header && header.split(' ')[1];
    if(!token) return res.sendStatus(401);
    const {id} = JWT.verify(token, process.env.TOKEN_SECRET);
    if(id) next()
    else res.sendStatus(401).end();
}