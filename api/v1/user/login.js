import Joi from 'joi';
import { loginUser } from '../../../controllers/user';

export default {
  method: 'POST',
  path: '/api/v1/user/login',
  config: {
    auth: false,
    description: 'Api service used to login user.',
    notes:
      '<br/>The request object should contain following fields in its <b>Payload/Body</b> object<br/>&bull;<b> Email</b>: Should be a valid email or valid phone number (10 digit with max 4 digit country code). <br/>&bull;<b> Password</b>: Containing atleast one alphabet and one number, 6 - 8 characters.',
    tags: ['api', 'user'],
    validate: {
      payload: {
        email: Joi.string()
          .trim()
          .lowercase()
          .required()
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
          .label('Password')
      }
    }
  },
  handler: loginUser
};
