'use strict'

const PassSservice = require("./services/pass.services");
const moment = require("moment");

// Datos para la simulacion
const mypass = "micontraseña";
const badpass = "miotracontraseña";
const usuario = {
    _id: '123456789',
    email: 'paco@gmail.com',
    displayName: 'Paco',
    password: mypass,
    signUpDate: moment().unix(),
    lastLogin: moment().unix()
};

console.log(usuario);

// Encriptamos la password
PassSservice.encriptaPassword(usuario.password)
    .then(hash => {
        usuario.password = hash;
        console.log(usuario);

        // Verificamos la password
        PassSservice.comparaPassword(mypass, usuario.password)
            .then(isOk => {
                if (isOk) {
                    console.log('p1: el password es correcto')
                } else {
                    console.log('p1: el password no es correcto')
                }
            })
            .catch(err => console.log(err));

        // Verificamos la password incorrecta
        PassSservice.comparaPassword(badpass, usuario.password)
            .then(isOk => {
                if (isOk) {
                    console.log('p2: el password es correcto')
                } else {
                    console.log('p2: el password no es correcto')
                }
            })
            .catch(err => console.log(err));
    });