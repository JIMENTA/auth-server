const { Router } = require('express');
const { check } = require('express-validator');
const { newUser, loginUser, validateToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-field');
const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El mail es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({ min: 6 }),
    validateFields
], newUser);

router.post('/', [
    check('email', 'El mail es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({ min: 6 }),
    validateFields
], loginUser);

router.get('/renew', validateJWT, validateToken);




module.exports = router;