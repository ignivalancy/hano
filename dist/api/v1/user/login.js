'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _user = require('../../../controllers/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  method: 'POST',
  path: '/api/v1/user/login',
  config: {
    auth: false,
    description: 'Api service used to login user.',
    notes: '<br/>The request object should contain following fields in its <b>Payload/Body</b> object<br/>&bull;<b> Email</b>: Should be a valid email or valid phone number (10 digit with max 4 digit country code). <br/>&bull;<b> Password</b>: Containing atleast one alphabet and one number, 6 - 8 characters.',
    tags: ['api', 'user'],
    validate: {
      payload: {
        email: _joi2.default.string().trim().lowercase().required().label('Email'),
        password: _joi2.default.string().trim().regex(/^([a-zA-Z0-9_-]){6,8}$/).options({
          language: {
            string: {
              regex: {
                base: 'must be alphanumeric with 6 and 8 as min & max characters respectively'
              }
            }
          }
        }).required().label('Password')
      }
    }
  },
  handler: _user.loginUser
};