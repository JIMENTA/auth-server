const { response } = require("express");
const jwt = require('jsonwebtoken')


validateJWT = (req, res = response, next) => {

    const token = req.header('x-token');

    if (!token) res.status(401).json({
        ok: false,
        msg: 'Token error'
    });

    try {
        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.name = name
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token error'
        })
    };

    next();
}

module.exports = {
    validateJWT
}