const jwt = require('jsonwebtoken');
const Receptionist = require('../models/receptionistSchema');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

exports.registerReceptionist = async (req, res) => {
    const { name,ReceptionistId, password } = req.body;

    try {
        const receptionist = await Doctor.create({ ReceptionistId, password });

        res.status(201).json({
            _id: receptionist._id,
            name: receptionist.name,
            ReceptionistId: receptionist.ReceptionistId,
            token: generateToken(receptionist._id),
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.loginReceptionist = async (req, res) => {
    const { name, ReceptionistId, password } = req.body;

    try {
        const receptionist = await Receptionist.findOne({ ReceptionistId });
        console.log(receptionist.name);

        if (receptionist && (await receptionist.matchPassword(password))) {
            res.json({
                _id: receptionist._id,
                name: receptionist.name,
                ReceptionistId: receptionist.ReceptionistId,
                token: generateToken(receptionist._id),   
            });
        } else {
            res.status(401).json({ message: 'Invalid Receptionist ID or Password' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
