import Joi from 'joi';
import { registerUser } from '../../../controllers/user';

export default {
  method: 'POST',
  path: '/api/v1/user/register',
  config: {
    auth: false,
    description: 'Api service used to register a new user.',
    notes:
      '<br/>The request object should contain following fields in its <b>Payload/Body</b> object<br/>&bull; <b>Full Name</b>: Should carry the Full name of the user. This is a required field.<br/>&bull;<b> Email</b>: Should be a valid email.<br/>&bull;<b> Password</b>: Containing atleast one alphabet and one number, 6 - 8 characters.<br/>&bull;<b> Role</b>: Should contains user role like business,user,admin.',
    tags: ['api', 'user'],
    validate: {
      payload: {
        fullName: Joi.string()
          .trim()
          .min(2)
          .max(20)
          .label('Full Name'),
        email: Joi.string()
          .required()
          .email()
          .trim()
          .lowercase()
          .label('Email'),
        password: Joi.string()
          .trim()
          .regex(/^([a-zA-Z0-9_-]){6,8}$/)
          .options({
            language: {
              string: {
                regex: {
                  base: 'must be alphanumeric with 6 and 8 as min & max characters respectively'
                }
              }
            }
          })
          .required()
          .label('Password'),
        role: Joi.string()
          .required()
          .trim()
          .label('Role')
          .valid('user', 'business')
      }
    }
  },
  handler: registerUser
};
