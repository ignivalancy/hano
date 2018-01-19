'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _events = require('../../utilities/events');

var _events2 = _interopRequireDefault(_events);

var _logger = require('../../utilities/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import * as socketHandler from './handler';

// import _ from 'underscore';
exports.default = {
  name: 'Socket',
  version: '1.0.0',
  register: function register(server, options) {
    // Opening the socket connection

    var io = _socket2.default.listen(server.listener),
        users = {},
        sockets = {};

    io.on('connection', function (socket) {
      var socketId = socket.id;
      _logger2.default.info('connection', socketId);
      /** ******** on authenticate event registering user's socket id in user object and currently running instance *******/
      socket.on('authenticate', function (query, callback) {
        // let request = {
        //     token: query['x-logintoken']
        // };
        var userId = 'user._id';
        // Socket local object instance contains user ids corresponding to socket ids
        sockets[socketId] = { userId: userId };
        // User local object instance contains socket ids corresponding to user ids and sorties
        users[userId] = { socketId: socketId };

        callback(null, _events2.default.userAuthenticated);
      });

      /** *** on Disconnect event delete the current user socket id from user's object and delete the user's key/Value pair from the socket object *****/
      socket.on('disconnect', function () {
        _logger2.default.info('disconnect', socketId);
        if (sockets[socketId]) {
          delete users[sockets[socketId].userId];
          delete sockets[socketId];
          socket.disconnect('Disconnected');
        } else {
          socket.disconnect(_events2.default.tokenExpired);
        }
      });
    });

    // event handler which will happen in other part of the app
    // eventEmitter.on('someevent', function(data) {
    //     // Data Handler
    // });
  }
};
// import eventEmitter from '../../utilities/events';
/* -----------------------------------------------------------------------
   * @ description : This file defines socket handlers.
----------------------------------------------------------------------- */