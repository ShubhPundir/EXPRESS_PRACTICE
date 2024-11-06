const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method} - URL: ${req.url}`);
    next();
});

// Static files middleware
app.use('/public', express.static('public'));

// Path-specific middleware
app.use('/user', (req, res, next) => {
    console.log('User section');
    res.send('User Section')
    next();
});

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/route-that-fails', (req, res, next) => {
    try {
        // Some code that throws an error
        throw new Error("Oops! Something went wrong.");
    } catch(err) {
        console.log('Error is caught');
        next(err); // Passes the error to the error-handling middleware
    }
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
