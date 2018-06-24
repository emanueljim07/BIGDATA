'use strict';

let MongoClient = require('mongodb').MongoClient,
    bcrypt = require('bcrypt-nodejs');

const url = 'mongodb://localhost/agenda_db';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log('Base de Datos AGENDA_DB iniciada correctamente...');

    const Usuarios = db.collection('user');

    Usuarios.findOne({username: 'root'}, (err, doc) => {
        if (err) throw err;

        if (doc) {
            console.log('Usuario registrado anteriormente');
        }
        else {
            let salt = bcrypt.genSaltSync();
            let password_hash = bcrypt.hashSync('admin', salt);
            Usuarios.insertOne({username: 'root', contrasenia: password_hash,email:'emanueljim07@hotmail.com',fecha_nacimiento:'1980-12-10'}, (err, doc) => {
                if (err) throw err;
                console.log('usuario registrado correctamente...', JSON.stringify(doc));
            });
        }
        db.close();
    });
});
