const jwt = require('jsonwebtoken');
const secretKey = 'your-256-bit-secret';

const verifyToken = (req, res, next) => {
    const token = req.headers['x-acess-token'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided'})
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token'})
        }
            req.userId = decoded.id;
            next()      
    });
};

module.exports = verifyToken;