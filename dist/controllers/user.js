'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.loginUser = exports.registerUser = undefined;

var _user = require('../services/user');

var _rest = require('../utilities/rest');

var _messages = require('../utilities/messages');

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* -----------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @ description : This is the user controller layer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ----------------------------------------------------------------------- */

// import logger from '../utilities/logger';

var registerUser = exports.registerUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, h) {
    var payload, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            payload = request.payload;
            _context.prev = 1;
            _context.next = 4;
            return (0, _user.register)(payload);

          case 4:
            data = _context.sent;
            return _context.abrupt('return', (0, _rest.successAction)(data, _messages2.default.registerSuccess));

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            (0, _rest.failAction)(_context.t0.message);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 8]]);
  }));

  return function registerUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var loginUser = exports.loginUser = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, h) {
    var payload, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            payload = request.payload;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _user.login)(payload);

          case 4:
            data = _context2.sent;
            return _context2.abrupt('return', (0, _rest.successAction)(data, _messages2.default.loginSuccessfull));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);

            (0, _rest.failAction)(_context2.t0.message);

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[1, 8]]);
  }));

  return function loginUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var logoutUser = exports.logoutUser = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, h) {
    var _request$auth$credent, user, token;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _request$auth$credent = request.auth.credentials, user = _request$auth$credent.user, token = _request$auth$credent.token;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _user.logout)({ user: user, token: token });

          case 4:
            return _context3.abrupt('return', (0, _rest.successAction)(null, _messages2.default.logoutSuccessfull));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](1);

            (0, _rest.failAction)(_context3.t0.message);

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[1, 7]]);
  }));

  return function logoutUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();