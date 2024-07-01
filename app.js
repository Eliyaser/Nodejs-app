const express = require('express');
const app = express();

// Corrected method and added spacing for readability
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Corrected port to a constant variable and improved logging message
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
