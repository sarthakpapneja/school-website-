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
    fs.writeFileSync(DB_PATH, JSON.stringify({ applications: [], newsletter: [], contact: [] }, null, 2));
}

// Routes
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
