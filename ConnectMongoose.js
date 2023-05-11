const mongoose = require("mongoose")

//Configurando o Mongoose

    mongoose.Promise = global.Promise;
    // Conexão: após /localhost/ terá a conexão com o danco de dados, caso ele não exista, será criado esse banco de dados
    mongoose.connect("mongodb://127.0.0.1:27017/aprendendo").then(() => {
        console.log("MongoDB Conectado...")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB: " + err)
    })

// Model - Usuário

const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

// Collection

    mongoose.model('usuarios', UsuarioSchema )

    const User = mongoose.model('usuarios')

    new User({
        nome: "John",
        sobrenome: "Doe",
        idade: 34,
        email: "john@email.com",
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuário: " +err)
    })
