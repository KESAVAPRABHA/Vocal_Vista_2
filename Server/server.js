const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const router = require('./Routes/patientRoutes');
const doctorrouter = require('./Routes/doctorRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/auth', router);

app.use('/doctor/auth',doctorrouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
