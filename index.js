const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve ALL files in current directory
app.use(express.static(__dirname));

// Route for "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});