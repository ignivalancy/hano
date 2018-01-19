'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _vision = require('vision');

var _vision2 = _interopRequireDefault(_vision);

var _hapiSwaggered = require('hapi-swaggered');

var _hapiSwaggered2 = _interopRequireDefault(_hapiSwaggered);

var _hapiSwaggeredUi = require('hapi-swaggered-ui');

var _hapiSwaggeredUi2 = _interopRequireDefault(_hapiSwaggeredUi);

var _good = require('good');

var _good2 = _interopRequireDefault(_good);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _rest = require('./rest');

var _rest2 = _interopRequireDefault(_rest);

var _socket = require('./socket');

var _socket2 = _interopRequireDefault(_socket);

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * exports array of plugins with configuration.
 * @type {Array}
 */
/* ----------------------------------------------------------------------
   * @ description : Here config all hapi plugIns and custom plugIns.
----------------------------------------------------------------------- */

exports.default = [
/* -----------------------
      Register inert
    ------------------------ */
{
  plugin: _inert2.default,
  options: {}
},

/* -----------------------
      Register vision
    ------------------------ */
{
  plugin: _vision2.default,
  options: {}
},

/* -----------------------
      Register Swagger
    ------------------------ */

{
  plugin: _hapiSwaggered2.default,
  options: {
    info: {
      title: _package2.default.name,
      description: _package2.default.description,
      version: _package2.default.version,
      contact: {
        name: _package2.default.author,
        url: _package2.default.url,
        email: _package2.default.author + ' <' + _package2.default.email + '>'
      },
      license: {
        name: _package2.default.license,
        url: _package2.default.homepage
      }
    },
    tagging: {
      mode: 'tags',
      stripRequiredTags: true
    },
    tags: {
      // api: Pack.description,
      user: 'user rest endpoints',
      util: 'util endpoints'
    }
  }
},

/* -----------------------
      Register SwaggerUI
    ------------------------ */

{
  plugin: _hapiSwaggeredUi2.default,
  options: {
    title: _package2.default.name,
    path: '/api/docs',
    authorization: {
      field: 'authorization',
      scope: 'header' // header works as well
      // valuePrefix: 'bearer '// prefix incase
      // defaultValue: 'token',
      // placeholder: 'Enter your authorization token here'
    },
    swaggerOptions: {
      // docExpansion: 'list'
    }
  }
},

/* ------------------
      Register good
    ------------------ */

{
  plugin: _good2.default,
  options: {
    ops: {
      interval: 1000
    },
    reporters: {
      myConsoleReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      }, {
        module: 'good-console'
      }, 'stdout']
    }
  }
},

/* ---------------------------
        Setting up the jwt authentication.
      ---------------------------- */
{
  plugin: _auth2.default,
  options: {}
},

/* ---------------------------
      Setting up the web-socket connection.
    ---------------------------- */
{
  plugin: _socket2.default,
  options: {}
},

/* ---------------------------
      Restfull Api's.
    ---------------------------- */
{
  plugin: _rest2.default,
  options: {}
},

/* ---------------------------
      Init the index route.
    ---------------------------- */
{
  plugin: _main2.default,
  options: {}
}];