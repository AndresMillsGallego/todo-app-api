'use strict';

require('dotenv').config();

const { authDb } = require('./src/auth/models/index');
const server = require('./src/server');

const PORT = process.env.PORT || 3001;

authDb.sync()
  .then(() => {
    server.start(PORT);
  })
  .catch(console.log);