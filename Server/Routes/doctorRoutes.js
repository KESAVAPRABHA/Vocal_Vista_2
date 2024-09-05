const express = require('express');
const { registerDoctor, loginDoctor } = require('../Controller/doctorAuth');
const doctorrouter = express.Router();

doctorrouter.post('/register', registerDoctor);
doctorrouter.post('/login', loginDoctor);

module.exports = doctorrouter;
