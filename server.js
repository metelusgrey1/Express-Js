const express = require('express');
const path = require('path');

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:${PORT}');
});