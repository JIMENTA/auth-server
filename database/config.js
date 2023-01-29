const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnection = async() => {
    try {

        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('db online')

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la base de datos')
    }
}


module.exports = {
    dbConnection
}