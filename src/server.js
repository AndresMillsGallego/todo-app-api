'use strict';

const express = require('express');
const cors = require('cors');

// const authRoutes = require('./auth/routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response, next) => {
  response.send('King Snorlax Welcomes You To His Server');
});

// app.use(authRoutes);

module.exports = {
  server: app,
  start: (PORT) => {
    if (!PORT) {throw new Error('Missing Port!');}
    app.listen(PORT, () => console.log(`Jigglypuff is listening on port: ${PORT}`));
  },
};
