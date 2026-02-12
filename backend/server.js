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
                ],
                fullSchedule: {
                    Monday: [
                        { time: '08:00 - 09:30', subject: 'Physics', teacher: 'Dr. Sharma' },
                        { time: '09:45 - 11:15', subject: 'Mathematics', teacher: 'Mrs. Gupta' },
                        { time: '11:30 - 13:00', subject: 'Chemistry', teacher: 'Mr. Verma' }
                    ],
                    Tuesday: [
                        { time: '08:00 - 09:30', subject: 'English', teacher: 'Ms. Wilson' },
                        { time: '09:45 - 11:15', subject: 'Computer Science', teacher: 'Mr. Khan' },
                        { time: '11:30 - 13:00', subject: 'Physics Lab', teacher: 'Dr. Sharma' }
                    ],
                    Wednesday: [
                        { time: '08:00 - 09:30', subject: 'Mathematics', teacher: 'Mrs. Gupta' },
                        { time: '09:45 - 11:15', subject: 'Chemistry Lab', teacher: 'Mr. Verma' },
                        { time: '11:30 - 13:00', subject: 'Physical Education', teacher: 'Coach Singh' }
                    ],
                    Thursday: [
                        { time: '08:00 - 09:30', subject: 'Physics', teacher: 'Dr. Sharma' },
                        { time: '09:45 - 11:15', subject: 'Mathematics', teacher: 'Mrs. Gupta' },
                        { time: '11:30 - 13:00', subject: 'English', teacher: 'Ms. Wilson' }
                    ],
                    Friday: [
                        { time: '08:00 - 09:30', subject: 'Computer Science', teacher: 'Mr. Khan' },
                        { time: '09:45 - 11:15', subject: 'Chemistry', teacher: 'Mr. Verma' },
                        { time: '11:30 - 13:00', subject: 'Self Study / Library', teacher: 'Librarian' }
                    ]
                },
                academicRecords: [
                    { subject: 'Physics', unitTest: 23, halfYearly: 74, predicted: 95 },
                    { subject: 'Mathematics', unitTest: 25, halfYearly: 78, predicted: 98 },
                    { subject: 'Chemistry', unitTest: 22, halfYearly: 72, predicted: 94 },
                    { subject: 'English', unitTest: 24, halfYearly: 76, predicted: 96 },
                    { subject: 'Computer Science', unitTest: 25, halfYearly: 79, predicted: 99 }
                ],
                feeStatus: {
                    pending: 12500,
                    lastPayment: { amount: 45000, date: '2024-01-15' },
                    history: [
                        { quarter: 'Q1 (Apr-Jun)', amount: 45000, status: 'Paid', date: '2024-04-10' },
                        { quarter: 'Q2 (Jul-Sep)', amount: 45000, status: 'Paid', date: '2024-07-05' },
                        { quarter: 'Q3 (Oct-Dec)', amount: 45000, status: 'Paid', date: '2024-10-12' },
                        { quarter: 'Q4 (Jan-Mar)', amount: 45000, status: 'Pending', date: '-' }
                    ]
                },
                circulars: [
                    { id: 1, title: 'Annual Sports Day 2024', date: '2024-02-10', highlight: true },
                    { id: 2, title: 'Summer Internship Registrations Open', date: '2024-02-05', highlight: false },
                    { id: 3, title: 'Parent-Teacher Meeting Schedule', date: '2024-02-01', highlight: false },
                    { id: 4, title: 'Inter-School Science Fair Results', date: '2024-01-25', highlight: true }
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
