const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Mock DB Paths
const DB_PATH = path.join(__dirname, 'submissions.json');

// Initialize DB if not exists
if (!fs.existsSync(DB_PATH)) {
    const initialData = {
        applications: [],
        newsletter: [],
        contact: [],
        students: [
            {
                id: "ATH2024001",
                key: "wisdom789",
                name: "A. Papneja",
                class: "XII",
                stream: "Science",
                stats: {
                    attendance: "98%",
                    result: "96.4%",
                    rank: "#12"
                },
                schedule: [
                    { time: '08:00 AM', subject: 'Physics (Electrodynamics)', location: 'Lab 1' },
                    { time: '09:45 AM', subject: 'Mathematics (Calculus)', location: 'Room 204' },
                    { time: '11:15 AM', subject: 'English Core', location: 'Lecture Hall' },
                    { time: '01:30 PM', subject: 'Computer Science (Python)', location: 'IT Wing' }
                ]
            }
        ]
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
}

// Routes
app.post('/api/portal/login', (req, res) => {
    const { id, key } = req.body;
    const db = JSON.parse(fs.readFileSync(DB_PATH));
    const student = db.students.find(s => s.id === id && s.key === key);

    if (student) {
        console.log(`[Backend] Portal Login Successful: ${id}`);
        const { key: _, ...safeStudent } = student;
        res.status(200).json({ success: true, student: safeStudent });
    } else {
        console.log(`[Backend] Portal Login Failed: ${id}`);
        res.status(401).json({ success: false, error: 'Invalid Credentials' });
    }
});

app.get('/api/portal/student/:id', (req, res) => {
    const { id } = req.params;
    const db = JSON.parse(fs.readFileSync(DB_PATH));
    const student = db.students.find(s => s.id === id);

    if (student) {
        const { key: _, ...safeStudent } = student;
        res.status(200).json(safeStudent);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});
app.post('/api/apply', (req, res) => {
    const { name, email, phone, grade, message } = req.body;

    if (!name || !email || !phone || !grade) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const db = JSON.parse(fs.readFileSync(DB_PATH));
    const newApp = { id: Date.now(), name, email, phone, grade, message, date: new Date().toISOString() };
    db.applications.push(newApp);
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));

    console.log(`[Backend] New Application received: ${name} for Grade ${grade}`);
    res.status(201).json({ message: 'Application submitted successfully!', id: newApp.id });
});

app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const db = JSON.parse(fs.readFileSync(DB_PATH));
    if (db.newsletter.some(sub => sub.email === email)) {
        return res.status(400).json({ error: 'Email already subscribed' });
    }

    db.newsletter.push({ email, date: new Date().toISOString() });
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));

    console.log(`[Backend] New Newsletter subscription: ${email}`);
    res.status(201).json({ message: 'Subscribed successfully!' });
});

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });

    const db = JSON.parse(fs.readFileSync(DB_PATH));
    db.contact.push({ name, email, subject, message, date: new Date().toISOString() });
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));

    console.log(`[Backend] New Contact Message: From ${name}`);
    res.status(201).json({ message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
    console.log(`Athenia Backend running on http://localhost:${PORT}`);
});
