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
  path: '/api/v1/user/register',
  config: {
    auth: false,
    description: 'Api service used to register a new user.',
    notes: '<br/>The request object should contain following fields in its <b>Payload/Body</b> object<br/>&bull; <b>Full Name</b>: Should carry the Full name of the user. This is a required field.<br/>&bull;<b> Email</b>: Should be a valid email.<br/>&bull;<b> Password</b>: Containing atleast one alphabet and one number, 6 - 8 characters.<br/>&bull;<b> Role</b>: Should contains user role like business,user,admin.',
    tags: ['api', 'user'],
    validate: {
      payload: {
        fullName: _joi2.default.string().trim().min(2).max(20).label('Full Name'),
        email: _joi2.default.string().required().email().trim().lowercase().label('Email'),
        password: _joi2.default.string().trim().regex(/^([a-zA-Z0-9_-]){6,8}$/).options({
          language: {
            string: {
              regex: {
                base: 'must be alphanumeric with 6 and 8 as min & max characters respectively'
              }
            }
          }
        }).required().label('Password'),
        role: _joi2.default.string().required().trim().label('Role').valid('user', 'business')
      }
    }
  },
  handler: _user.registerUser
};