'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.failActionJoi = exports.failAction = exports.successAction = exports.authorization = undefined;

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../collections/user');

var _user2 = _interopRequireDefault(_user);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* -----------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @ description : Here defines all rest functions.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ----------------------------------------------------------------------- */

var _config$get = _config2.default.get('app'),
    jwtKey = _config$get.jwtKey;

var authorization = exports.authorization = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, h) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = request.headers['authorization'];
            decoded = {};
            _context.prev = 2;

            decoded = _jsonwebtoken2.default.verify(token, jwtKey);
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](2);
            throw _boom2.default.unauthorized(_messages2.default.tokenExpired);

          case 9:
            _logger2.default.info('authorization', decoded);
            _context.next = 12;
            return _user2.default.checkToken(token);

          case 12:
            user = _context.sent;

            if (!user) {
              _context.next = 17;
              break;
            }

            return _context.abrupt('return', h.authenticated({ credentials: { user: user, token: token } }));

          case 17:
            throw _boom2.default.unauthorized(_messages2.default.unauthorizedUser);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 6]]);
  }));

  return function authorization(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var successAction = exports.successAction = function successAction(data) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'OK';
  return {
    statusCode: 200,
    message: message,
    data: data ? data : undefined
  };
};

var failAction = exports.failAction = function failAction(errorMessage) {
  throw _boom2.default.badRequest(errorMessage);
};

var failActionJoi = exports.failActionJoi = function failActionJoi(request, h, error) {
  var errorMessage = '';
  if (error.output.payload.message.indexOf('[') > -1) {
    errorMessage = error.output.payload.message.substr(error.output.payload.message.indexOf('['));
  } else {
    errorMessage = error.output.payload.message;
  }
  errorMessage = errorMessage.replace(/"/g, '');
  errorMessage = errorMessage.replace('[', '');
  errorMessage = errorMessage.replace(']', '');
  error.output.payload.message = errorMessage;
  delete error.output.payload.validation;
  throw _boom2.default.badRequest(errorMessage);
};