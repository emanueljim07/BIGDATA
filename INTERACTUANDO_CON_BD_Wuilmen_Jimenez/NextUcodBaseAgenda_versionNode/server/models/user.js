'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = function(db) {

    const Users = db.collection('user');

    this.verificaUsuario = (reg, callback) => {
        let where = {username: reg.user};

        Users.findOne(where, (err, doc) => {
            if (err) 
                callback(err);
            else if (bcrypt.compareSync(reg.pass, doc.contrasenia))
                callback(null, doc);
            else
                callback(null, false);
        });
    };
};
