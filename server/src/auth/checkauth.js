import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    const secretKey = 'daylamotdongmahavodich';

    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({
            codeStatus: 401,
            message: 'Unauthorized'
        });
    }
};

export default authenticateJWT;