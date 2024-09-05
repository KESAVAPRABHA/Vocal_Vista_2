const jwt = require('jsonwebtoken');
const Patient = require('../models/patientSchema');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

exports.registerPatient = async (req, res) => {
    const { name, patientId, password } = req.body;

    try {
        const patient = await Patient.create({ name, patientId, password });

        res.status(201).json({
            _id: patient._id,
            name: patient.name,
            patientId: patient.patientId,
            token: generateToken(patient._id),
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.loginPatient = async (req, res) => {
    const { name, patientId, password } = req.body;

    try {
        const patient = await Patient.findOne({ patientId });

        if (patient && (await patient.matchPassword(password))) {
            res.json({
                _id: patient._id,
                name: patient.name,
                patientId: patient.patientId,
                token: generateToken(patient._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid Patient ID or Password' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
