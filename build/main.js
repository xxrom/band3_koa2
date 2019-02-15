require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-morgan */ "koa-morgan");
/* harmony import */ var koa_morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_morgan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-cors */ "koa-cors");
/* harmony import */ var koa_cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/router.js");






dotenv__WEBPACK_IMPORTED_MODULE_2___default.a.config();
const port = process.env.PORT;
const server = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();
server.use(koa_morgan__WEBPACK_IMPORTED_MODULE_1___default()('tiny')).use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_4___default()()).use(koa_cors__WEBPACK_IMPORTED_MODULE_3___default()()).use(_router__WEBPACK_IMPORTED_MODULE_5__["default"].routes()).use(_router__WEBPACK_IMPORTED_MODULE_5__["default"].allowedMethods()).listen(port, () => console.log(`started on port ${port}! =)`));

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__);

 // import Email from 'email-templates';

const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer"); // const nodemailerSendgrid = require('nodemailer-sendgrid');


const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a(); // async..await is not allowed in global scope, must use a wrapper

async function main(mailObject) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //   let account = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 587,
    secure: false,
    // true for 465, false for other ports
    auth: {
      //   user: account.user, // generated ethereal user
      //   pass: account.pass, // generated ethereal password
      user: 'xpom66nikita004@mail.ru',
      // generated ethereal user
      pass: '1qazxsw2' // generated ethereal password

    }
  }); // setup email data with unicode symbols

  let mailOptions = {
    from: '"Fred Foo 👻" <xpom66nikita004@mail.ru>',
    // sender address
    to: 'xpom5566@mail.ru',
    // list of receivers
    subject: `Hello ✔ ${mailObject.number}`,
    // Subject line
    text: `Hello world? ${mailObject.number}`,
    // plain text body
    html: `<b>Hello world?${JSON.stringify(mailObject)}</b>` // html body

  }; // send mail with defined transport object

  let info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId); // Preview only available when sending through an Ethereal account

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
} // curl -H "Content-Type: application/json" -X POST --data '{"value": "30"}' http://localhost:3334


router.post('/', koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default()(), async ctx => {
  console.log('asdfl alskdfj laskjdf test');
  const {
    body
  } = ctx.request; //   sendEmail();

  main(body).catch(console.error);
  console.log('request', body);
  const data = {
    allGood: true
  };
  ctx.status = 200;
  ctx.body = JSON.stringify({
    data
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikita/Desktop/js/tests/band3_koa2/src/index.js */"./src/index.js");


/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-cors":
/*!***************************!*\
  !*** external "koa-cors" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-cors");

/***/ }),

/***/ "koa-morgan":
/*!*****************************!*\
  !*** external "koa-morgan" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-morgan");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ })

/******/ });
//# sourceMappingURL=main.map