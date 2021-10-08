const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header("auth-token");
    console.log(token)
    if (!token) {
        return res.status(401).json({message: "Access denied"});
    }

    try {
        const validToken = jwt.verify(token, process.env.TOKEN_SECRETE);
        req.validUsers = validToken;
        next();
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
    }