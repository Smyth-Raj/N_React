// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json()); // Middleware to parse JSON requests

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.post('/api/greet', (req, res) => {
    const { name } = req.body;
    console.log('Received data:', req.body);
    const greeting = `Hello, ${name}! Welcome to the API.`;
    res.json({ message: greeting });
});

// Serve React app from the 'client/build' directory in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
