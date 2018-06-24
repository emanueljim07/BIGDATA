'use strict';

const express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient;

const PORT = process.env.PORT || 3010;
const config = {
    rootPath : __dirname
};

MongoClient.connect('mongodb://localhost/agenda_db', (err, db) => {
    if (err) throw err;
    console.log('Base de Datos AGENDA_DB iniciada correctamente...');

    require('./server/config/express')(app, config);
    require('./server/config/routes')(app, db);

    app.listen(PORT, () => { console.log(`Servidor funcionando en el puerto ${PORT}`); });
});
