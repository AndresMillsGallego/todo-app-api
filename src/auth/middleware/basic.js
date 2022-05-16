'use strict';

const base64 = require('base-64');
const { users } = require('../models');

module.exports = async (request, response, next) => {

  if (!request.headers.authorization) {return _authError();}

  let basic = request.headers.authorization.split(' ').pop();
  let [user, pass] = base64.decode(basic).split(':');

  try {
    request.user = await users.authenticationBasic(user, pass);
    next();
  } catch (error) {
    _authError();
  }
  
  function _authError() {
    response.status(403).send('Invalid Login');
  }
};