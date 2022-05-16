'use strict';

const express = require('express');
const authRouter = express.Router();

const { users } = require('./models');
const basicAuth = require('./middleware/basic');
// const bearerAuth = require('./middleware/bearer');
// const permissions = require('./middelware/acl');

authRouter.post('/signup', async (request, response, next) => {
  try {
    let userRecord = await users.create(request.body);
    const output = {
      user: userRecord,
      token: userRecord.token,
    };
    response.status(201).json(output);
  } catch (error) {
    next(error.message);
  }
});

authRouter.post('/signin', basicAuth, (request, response, next) => {
  try {
    const user = {
      user: request.user,
      token: request.user.token,
    };
    response.status(200).json(user);
  } catch (error) {
    next(error.message);
  }
});

module.exports = authRouter;