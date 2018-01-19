'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _user = require('../../../controllers/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  method: 'PUT',
  path: '/api/v1/user/logout',
  config: {
    auth: 'jwt',
    description: 'Api service used for logging the user out of the application.',
    notes: 'The request object should contain following fields in its <b>Headers</b> object<br/>&bull; <b>x-logintoken</b>: The token assigned to the user after successful login',
    tags: ['api', 'user'],
    validate: {
      headers: _joi2.default.object({
        authorization: _joi2.default.string().trim().required()
      }).options({ allowUnknown: true })
    }
  },
  handler: _user.logoutUser
};