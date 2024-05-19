'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
res.send('Hello World by Joeljk. This was somehow deployed using Docker and Jenkins! Now even with linked Jenkins Jobs!');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);