'use strict';

// require('dotenv').config();
const express = require('express');
const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.get('/hello', (request, response) => {
  response.send('you are doing great!!');
});

server.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
  };
  response.status(200).json(airplanes);
});

server.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

server.listen(PORT,() => console.log(`Listening on port ${PORT}`));
