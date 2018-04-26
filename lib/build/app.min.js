var hmq =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/src/js/app.js":
/*!***************************!*\
  !*** ./lib/src/js/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./lib/src/js/modules/index.js\");\n\n\nclass App {\n  constructor() {\n    this.menu = new _modules__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]();\n    this.parallax = new _modules__WEBPACK_IMPORTED_MODULE_0__[\"Parallax\"](this.menu);\n  }\n}\n\nwindow.onload = () => {\n  var app = new App();\n};\n\n//# sourceURL=webpack://hmq/./lib/src/js/app.js?");

/***/ }),

/***/ "./lib/src/js/modules/index.js":
/*!*************************************!*\
  !*** ./lib/src/js/modules/index.js ***!
  \*************************************/
/*! exports provided: Menu, Parallax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./lib/src/js/modules/menu.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return _menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]; });\n\n/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallax */ \"./lib/src/js/modules/parallax.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Parallax\", function() { return _parallax__WEBPACK_IMPORTED_MODULE_1__[\"Parallax\"]; });\n\n\n\n\n//# sourceURL=webpack://hmq/./lib/src/js/modules/index.js?");

/***/ }),

/***/ "./lib/src/js/modules/menu.js":
/*!************************************!*\
  !*** ./lib/src/js/modules/menu.js ***!
  \************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\nclass Menu {\n  constructor() {\n    // menu & sceens\n    this.flicker = true;\n    this.flickerTarget = $('.parallax-flicker');\n    this.startFlicker(100);\n    this.setup();\n  }\n\n  setup() {\n    // rm loading\n    $('.pre').removeClass('pre');\n    $('.loading-screen').css({ pointerEvents: 'none' });\n    $('.loading-screen').fadeOut(1000);\n\n    // events, navigation\n    $('.prompt, .title-prompt').on('click', () => {\n      $('html, body').animate({\n        scrollTop: window.innerHeight + 'px'\n      }, 1250);\n    });\n\n    $('.nav-item').on('click', e => {\n      var target = $(e.currentTarget).data('target');\n      this.toggleMenu($(e.currentTarget), target);\n    });\n\n    $('.close-menu').on('click', () => {\n      this.closeMenu();\n    });\n\n    $('.chapter-item').on('click', e => {\n      var $e = $(e.currentTarget);\n      var selector = $e.data('target');\n      this.closeMenu();\n\n      var y = $(selector).offset().top;\n      $('html, body').scrollTop(y);\n    });\n  }\n\n  resumeFlicker() {\n    if (!this.flicker) {\n      this.flicker = true;\n      this.startFlicker(100);\n    }\n  }\n\n  disableFlicker() {\n    this.flicker = false;\n  }\n\n  startFlicker(time) {\n    setTimeout(() => {\n      if (this.flicker) {\n        const t = Math.random() * 300 + 200;\n        var op;\n\n        if (parseFloat(this.flickerTarget.css(\"opacity\")) < 0.6) {\n          op = 0.6 + Math.random() * 0.4;\n        } else {\n          op = 0.6 - Math.random() * 0.3;\n        }\n\n        this.flickerTarget.css({ opacity: op });\n        this.startFlicker(t);\n      }\n    }, time);\n  }\n\n  toggleMenu($trigger, target) {\n    if ($(target).hasClass('active')) {\n      this.closeMenu();\n    } else {\n      this.closeMenu();\n      $(target).addClass('active');\n      $(target).find('.menu-row').each(function (i, e) {\n        var $e = $(e);\n        setTimeout(function () {\n          $e.addClass('active');\n        }, i * 100);\n      });\n      $trigger.addClass('active');\n    }\n  }\n\n  closeMenu() {\n    $('.menu, .nav-item, .menu-row').removeClass('active');\n  }\n}\n\n\n\n//# sourceURL=webpack://hmq/./lib/src/js/modules/menu.js?");

/***/ }),

/***/ "./lib/src/js/modules/parallax.js":
/*!****************************************!*\
  !*** ./lib/src/js/modules/parallax.js ***!
  \****************************************/
/*! exports provided: Parallax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Parallax\", function() { return Parallax; });\nclass Parallax {\n  constructor(target) {\n    // scroll & parallax\n    this.target = target;\n    this.pages = $('.page');\n    this.pageNo = '';\n    this.parallaxMax = 0.175;\n\n    // init\n    this.setSize();\n\n    // events\n    $(document).on('scroll', () => {\n      this.onScroll();\n    });\n    $(window).resize(() => {\n      this.setSize();\n    });\n  }\n\n  setSize() {\n    $('.parallax').each(function (i, e) {\n      var $sib = $(e).siblings('img');\n      var $img = $(e).find('img');\n      $img.css({\n        width: $img[0].naturalWidth / $sib[0].naturalWidth * $sib.width() + 'px'\n      });\n    });\n  }\n\n  doParallax(y, limit) {\n    // apply parallax effects\n    const y0 = y - window.innerHeight * 1.5;\n    const y1 = limit + window.innerHeight * 1.5;\n\n    $('.parallax').each(function (i, e) {\n      const $e = $(e);\n      const top = $e.offset().top + $e.height() / 2;\n\n      if (top > y0 && top < y1) {\n        const newY = (y - top) / (window.innerHeight / 2) * (this.parallaxMax * window.innerHeight);\n        $e.css({ transform: `translateY(${newY}px)` });\n      }\n    });\n  }\n\n  onScroll() {\n    const y = $(document).scrollTop();\n    const h = window.innerHeight;\n    const limit = y + h;\n\n    // parallax\n    this.doParallax(y, limit);\n\n    // close open menus\n    if ($('.menu').hasClass('active')) {\n      this.target.closeMenu();\n    }\n\n    // very top\n    if (y < h / 2) {\n      // show prompt, hide status\n      if ($('.prompt').hasClass('active')) {\n        $('.prompt').removeClass('active');\n      }\n      if ($('.status').hasClass('active')) {\n        $('.status').removeClass('active');\n      }\n    } else {\n      // remove prompt, show status bar\n      if (!$('.prompt').hasClass('active')) {\n        $('.prompt').addClass('active');\n      }\n      if (!$('.status').hasClass('active')) {\n        $('.status').addClass('active');\n      }\n    }\n\n    // title page\n    if (y < h) {\n      // resume flicker, hide background\n      this.target.resumeFlicker();\n\n      if ($('.background-gradient').hasClass('active')) {\n        $('.background-gradient').removeClass('active');\n      }\n    } else {\n      // regular content\n      this.target.disableFlicker();\n\n      // show background\n      if (!$('.background-gradient').hasClass('active')) {\n        $('.background-gradient').addClass('active');\n      }\n    }\n\n    // footer, hide status bar\n    if (limit > $('.footer').offset().top) {\n      if ($('.status').hasClass('active')) {\n        $('.status').removeClass('active');\n      }\n    }\n\n    // get page number\n    for (var i = 0, len = this.pages.length; i < len; ++i) {\n      var $page = $(this.pages[i]);\n      const top = $page.offset().top;\n\n      // get current page or previous\n      if (top > y && top < limit) {\n        this.pageNo = $page.data('number');\n        var num = $('#page-no').html();\n        if (num != this.pageNo) {\n          $('#page-no').html(this.pageNo);\n        }\n        break;\n      } else if (top > limit && i > 0) {\n        $page = $(this.pages[i - 1]);\n        this.pageNo = $page.data('number');\n        var num = $('#page-no').html();\n        if (num != this.pageNo) {\n          $('#page-no').html(this.pageNo);\n        }\n        break;\n      }\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://hmq/./lib/src/js/modules/parallax.js?");

/***/ })

/******/ });