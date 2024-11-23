const express = require('express');
const mongoose = require("mongoose");
const redis = require('redis');

// init app
const PORT = 4000;
const app = express();


// connect to redis
const Redis_PORT = 6379;
const Redis_Host = 'redis';

const redisClient = redis.createClient({
    url: `redis://${Redis_Host}:${Redis_PORT}`
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to Redis ....'));
redisClient.connect();

// connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo'; //'172.19.0.3';

const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URL)
.then(() => console.log('connected to DB'))
.catch((err) => console.log('failed to connect to DB:', err));


app.get('/', (req, res) => res.send(`<h1> Hello from docker-compose ${process.env.Environment}</h1>`));

app.listen(PORT, () => console.log(`app is up and runnig on port: ${PORT}`));