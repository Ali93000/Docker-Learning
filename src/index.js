const express = require('express');

// init app
const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send(`<h1> Hello from docker-compose ${process.env.Environment}</h1>`));

app.listen(PORT, () => console.log(`app is up and runnig on port: ${PORT}`));