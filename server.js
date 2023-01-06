const express = require('express');
const PORT = 3000;
let app = express();

app.use(express.static('src'));

app.listen(PORT);