/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/form-elements/form-elements.js":
/*!**********************************************!*\
  !*** ./pages/form-elements/form-elements.js ***!
  \**********************************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar counterDecrements = document.getElementsByClassName(\"counter__decrement\");\nvar _iterator = _createForOfIteratorHelper(counterDecrements),\n  _step;\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    button = _step.value;\n    button.addEventListener('click', decrement);\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n;\nvar counterIncrements = document.getElementsByClassName(\"counter__increment\");\nvar _iterator2 = _createForOfIteratorHelper(counterIncrements),\n  _step2;\ntry {\n  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n    button = _step2.value;\n    button.addEventListener('click', increment);\n  }\n} catch (err) {\n  _iterator2.e(err);\n} finally {\n  _iterator2.f();\n}\n;\nvar dropdownButtons = document.getElementsByClassName(\"dropdown__button\");\nvar _iterator3 = _createForOfIteratorHelper(dropdownButtons),\n  _step3;\ntry {\n  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n    button = _step3.value;\n    button.addEventListener('click', showContent);\n  }\n} catch (err) {\n  _iterator3.e(err);\n} finally {\n  _iterator3.f();\n}\n;\nfunction decrement(e) {\n  if (e.target.nextElementSibling.value != 0) {\n    e.target.nextElementSibling.value--;\n    if (e.target.nextElementSibling.value <= 0) e.target.setAttribute('disabled', '');\n  }\n}\n;\nfunction increment(e) {\n  e.target.previousElementSibling.value++;\n  e.target.previousElementSibling.previousElementSibling.removeAttribute('disabled');\n}\n;\nfunction showContent(e) {\n  e.target.classList.toggle('expanded');\n  e.target.nextElementSibling.classList.toggle('show');\n}\n;\n\n//# sourceURL=webpack:///./pages/form-elements/form-elements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./pages/form-elements/form-elements.js"]();
/******/ 	
/******/ })()
;