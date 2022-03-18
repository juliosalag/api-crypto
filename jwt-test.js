'use strict'

const TokenService = require('./services/token.service');
const moment = require('moment');

// Datos para la simulacion
const mypass = "micontraseña";
const usuario = {
    _id: '123456789',
    email: 'paco@gmail.com',
    displayName: 'Paco',
    password: mypass,
    signUpDate: moment().unix(),
    lastLogin: moment().unix()
};

console.log(usuario);

// Creamos un token
const token = TokenService.creaToken(usuario);

// Decodificar un token 
TokenService.decodificaToken(token)
    .then(userId => {
        return console.log(`ID1: ${userId}`);
    })
    .catch(err => console.log(err));

// Decodificar un token erroneo
const badtoken = 'tokenmalo';
TokenService.decodificaToken(badtoken)
    .then(userId => {
        return console.log(`ID2: ${userId}`);
    })
    .catch(err => console.log(err));