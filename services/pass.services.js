'use strict'

const bcrypt = require('bcrypt');

// encriptaPassword
//
// $2b$10$hsl.XqeA4J8/qi0xKvtvnu2qwIgR2a/EBAJHYVevH3KSM/qGWk8fK
//  ** -- **********************+++++++++++++++++++++++++++++++
// Alg Cost        Salt                    Contraseña
//
function encriptaPassword(password) {
    return bcrypt.hash(password, 10);
}

// comparaPassword
//
// devuelve verdadero o falso si coinciden o no el el hash
//
function comparaPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

module.exports = {
    encriptaPassword,
    comparaPassword
};