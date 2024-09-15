import express, { json } from 'express';
import { connect } from 'mongoose';
import fs from 'fs';
import cors from 'cors'

import Event from './models/events.js';
import Organizer from './models/orgs.js';
import User from './models/users.js';

const app = express();

app.use(cors());
app.use(express.json());

let eventsObject;
let orgsObject;
let usersObject;

fs.readFile('./src/data/events.json', 'utf8', (err, data) => {
    if (err) console.log(err.message);
    else eventsObject = JSON.parse(data);
});

fs.readFile('./src/data/orgs.json', 'utf8', (err, data) => {
    if (err) console.log(err.message);
    else orgsObject = JSON.parse(data);
});

fs.readFile('./src/data/users.json', 'utf8', (err, data) => {
    if (err) console.log(err.message);
    else usersObject = JSON.parse(data);
});

app.get('/api/events', async (req, res) => {
    try {
        // const events = await Event.find();
        const events = eventsObject;
        res.json(events);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// app.put('/api/events', async (req, res) => {
//     req.body.data
// })

app.get('/api/orgs', async (req, res) => {
    try {
        // const orgs = await Organizer.find();
        const orgs = orgsObject;
        res.json(orgs);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

app.get('/api/users', async (req, res) => {
    try {
        // const users = await User.find();
        const users = usersObject;
        res.json(users);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

connect('mongodb://127.0.0.1:27017')
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('error');
    });

app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
});
