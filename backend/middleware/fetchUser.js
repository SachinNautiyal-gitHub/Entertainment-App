
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.Jwt_Secret;

const fetchuser = async(req, res, next)=>{
    const token = req.header('auth-token');
    if(!token){
       return res.status(401).send({error: "Access denied"});
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Invalid Token"});
    }
}

module.exports = fetchuser;