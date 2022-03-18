'use strict'

// Formato del hash:
//
// $2b$10$hsl.XqeA4J8/qi0xKvtvnu2qwIgR2a/EBAJHYVevH3KSM/qGWk8fK
//  ** -- **********************+++++++++++++++++++++++++++++++
// Alg Cost        Salt                    Contraseña

const bcrypt = require('bcrypt');

// Datos para simulación
const mypass = "micontraseña";
const badpass = "miotracontraseña";

// Creamos el salt
bcrypt.genSalt(10, (err, salt) => {
    console.log(`Salt 1: ${salt}`);

    // Utilizamos el salt para generar el hash
    bcrypt.hash(mypass, salt, (err, hash) => {
        if (err)
            console.log(err);
        else
            console.log(`Hash 1: ${hash}`);
    });
});

// Creamos el hash directamente
bcrypt.hash(mypass, 10, (err, hash) => {
    if (err)
        console.log(err);
    else {
        console.log(`Hash 2: ${hash}`);

        // Comprobamos con la contraseña correcta
        bcrypt.compare(mypass, hash, (err, result) => {
            console.log(`Result 2.1: ${result}`);
        });

        // Comprobamos con la contraseña incorrecta
        bcrypt.compare(badpass, hash, (err, result) => {
            console.log(`Result 2.2: ${result}`);
        });

    }
});