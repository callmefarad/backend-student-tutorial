const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // get the token from the request head.
    const token = req.header("auth-token");
    // show the token on the console
    console.log(`auth-token: ${token}`)
    // validate the token
    if (!token) {
        res.status(401).json({message: "Access denied: You are not allowed to access this page because you do not have a token."});
    }

    try {
        // verify the token sent by the user to the TOKEN_SECRETE
        const validToken = jwt.verify(token, process.env.TOKEN_SECRETE);
        // pass the valid token to the request method
        req.validUsers = validToken;
        next();
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
    }