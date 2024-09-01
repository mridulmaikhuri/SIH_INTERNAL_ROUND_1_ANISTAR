import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import bodyParser from "body-parser";
import Patient from "./models/patient.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
config({ path: "./config/config.env" });
app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

await dbConnection();

app.post("/patient/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Check if the user already exists
        let user = await Patient.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new Patient({
            firstname: firstName,
            lastname:lastName,
            email,
            password
        });

        await user.save();

        res.status(201).json({ msg: 'User registered successfully', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/patient/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Patient.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = password === user.password;
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid password' });
        }

        res.status(200).json({ msg: 'Login successful', userId: user._id });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


export default app;
