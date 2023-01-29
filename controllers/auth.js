const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt')


const newUser = async(req, res = response) => {
    const { email, name, password } = req.body

    try {
        //Verificar el mail
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe registro de ese email'
            })
        }

        //Crear user con el modelo
        const dbUser = new User(req.body);

        //Hash de la contraseña
        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(salt);

        // Generar JWT
        const token = await generateJWT(dbUser.id, name);

        // Crear user de DB
        await dbUser.save();

        //Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            ok: false,
            msg: 'Algo salio mal'
        })
    }

};

const loginUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        const dbUser = await User.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no es valido' //*No dar informacion directa del error
            })
        }

        const passwordOk = bcrypt.compareSync(password, dbUser.password);

        if (passwordOk) { //ERROR AQUI tendria que ser false!
            return res.status(400).json({
                ok: false,
                msg: ' la contraseña no es valida'
            })
        }

        const token = await generateJWT(dbUser.id, dbUser.name);

        res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno'
        })

    }

}


const validateToken = async(req, res = response) => {

    const { uid, name } = req;

    const token = await generateJWT(uid, name);

    return res.json({
        ok: true,
        uid,
        name
    })
};


module.exports = {
    newUser,
    loginUser,
    validateToken
}