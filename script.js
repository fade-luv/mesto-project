/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sj": () => (/* binding */ fillUserInfo),
  "rA": () => (/* binding */ handleEscape)
});

// UNUSED EXPORTS: disableButton, handleAddCard

;// CONCATENATED MODULE: ./src/components/api.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getUserInfo(params) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/users/me ", {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (result) {
    document.querySelector(".profile__title").textContent = result.name;
    document.querySelector(".profile__subtitle").textContent = result.about;
    document.querySelector(".profile__avatar").src = result.avatar;
  });
}

function getCards(_x) {
  return _getCards.apply(this, arguments);
}

function _getCards() {
  _getCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
    var response, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://nomoreparties.co/v1/plus-cohort-12/cards", {
              headers: {
                authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3"
              }
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            result = _context.sent;
            renderCards(result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCards.apply(this, arguments);
}

var updateUser = function updateUser(name, about) {
  fetch("https://nomoreparties.co/v1/plus-cohort-12/users/me", {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json"
    },
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: about
    })
  });
};

var loadNewCard = function loadNewCard(name, link) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/cards", {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link
    })
  });
};

var deleteCardFromServer = function deleteCardFromServer(cardID) {
  fetch("https://nomoreparties.co/v1/plus-cohort-12/cards/".concat(cardID), {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json"
    },
    method: "DELETE"
  });
};

var addLikeToCard = function addLikeToCard(cardID, cardLikes) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/cards/likes/".concat(cardID), {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json"
    },
    method: "PUT"
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    cardLikes.textContent = res.likes.length;
  });
};

var loadNewAvatar = function loadNewAvatar(link) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/users/me/avatar", {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json"
    },
    method: "PATCH",
    body: JSON.stringify({
      avatar: link
    })
  });
};

var deleteLikefromCard = function deleteLikefromCard(cardID, cardLikes) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/cards/likes/".concat(cardID), {
    headers: {
      authorization: "cfcc3259-64f6-4e2d-ac0b-4516db4724d3",
      "Content-Type": "application/json"
    },
    method: "DELETE"
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    cardLikes.textContent = res.likes.length;
  });
};


;// CONCATENATED MODULE: ./src/components/popup.js


var profilePopup = document.querySelector(".profile-popup");
var popupEditButton = document.querySelector(".profile__edit-button");
var addCardButon = document.querySelector(".profile__button");
var popupOpenImage = document.querySelector(".popupGelery");
var popupAddNewCard = document.querySelector(".popup_new-card");
var popupImg = document.querySelector(".popup__img");
var popupGeleryText = document.querySelector(".popupGelery__text");
var popupEditAvatarButton = document.querySelector(".profile__edit-avatar");
var popupEditAvatar = document.querySelector(".popup_new-avatar");
var newAvatarButton = document.querySelector(".button__new-avatar");
var popupInputLinkAvatar = document.querySelector(".popup__input-link-avatar");
var profileAvatar = document.querySelector(".profile__avatar");

var renderLoading = function renderLoading(isLoading, button1) {
  if (isLoading) {
    button1.textContent = "Сохранение...";
    console.log(button1);
  } else {
    button1.textContent = "Сохранить";
    console.log(button1);
  }
};

function loadNewAvatarLocal() {
  renderLoading(true, newAvatarButton);
  profileAvatar.src = popupInputLinkAvatar.value;
  loadNewAvatar(popupInputLinkAvatar.value);
  setTimeout(function () {
    renderLoading(false, newAvatarButton);
  }, 500);
  setTimeout(function () {
    closePopup(popupEditAvatar);
  }, 500);
}

newAvatarButton.addEventListener("click", loadNewAvatarLocal);

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscape);
}

popupEditButton.addEventListener("click", function () {
  openPopup(profilePopup);
  fillUserInfo();
});
addCardButon.addEventListener("click", function () {
  openPopup(popupAddNewCard);
});
popupEditAvatarButton.addEventListener("click", function () {
  openPopup(popupEditAvatar);
});

function openImagePopup(name, link) {
  openPopup(popupOpenImage);
  popupImg.src = link;
  popupImg.alt = name;
  popupGeleryText.textContent = name;
}

popupOpenImage.addEventListener("click", function (event) {
  if (event.target == popupOpenImage) {
    closePopup(popupOpenImage);
  }
});
profilePopup.addEventListener("click", function (event) {
  if (event.target == profilePopup) {
    closePopup(profilePopup);
  }
});
popupAddNewCard.addEventListener("click", function (event) {
  if (event.target == popupAddNewCard) {
    closePopup(popupAddNewCard);
  }
});

function hendleClosePopup() {
  var closeButtons = document.querySelectorAll(".popup__close-btn");
  closeButtons.forEach(function (button) {
    // находим 1 раз ближайший к крестику попап
    var popup = button.closest(".popup"); // устанавливаем обработчик закрытия на крестик

    button.addEventListener("click", function () {
      return closePopup(popup);
    });
  });
}


;// CONCATENATED MODULE: ./src/components/card.js
function card_typeof(obj) { "@babel/helpers - typeof"; return card_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, card_typeof(obj); }

function card_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ card_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == card_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function card_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function card_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { card_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { card_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var newCardName = document.querySelector(".popup_new-card .popup__place");
var newCardSubName = document.querySelector(".popup_new-card .popup__link");
var cardContainer = document.querySelector(".elements");
var cardTemplate = document.querySelector(".element-template").content; // Достаём информацию из Template

var likeCard = function likeCard(likeButton, cardID, likes) {
  console.log(likeButton);
  likeButton.classList.add("element__like-button_active");
  addLikeToCard(cardID, likes);
};

var dislikeCard = function dislikeCard(likeButton, cardID, likes) {
  likeButton.classList.remove("element__like-button_active");
  console.log(likes);
  deleteLikefromCard(cardID, likes);
};

var checkLike = function checkLike(card, cardID, likes) {
  return function (evt) {
    var likeButton = card.querySelector(".element__like-button");

    if (likeButton.classList.contains("element__like-button_active")) {
      dislikeCard(likeButton, cardID, likes);
    } else {
      likeCard(likeButton, cardID, likes);
    }
  };
};

var deleteCard = function deleteCard(card) {
  return function (evt) {
    evt.target.closest(".element").remove();
    deleteCardFromServer(card);
  };
};

function createCard(name, link, likes, owner, cardID) {
  var MyID = "21d278660190bbbb6648dbe8";
  var ownerID = owner;
  var cardClone = cardTemplate.querySelector(".element").cloneNode(true);
  var cardImage = cardClone.querySelector(".element__image");
  var cardLikes = cardClone.querySelector(".element__likes");
  var likeButton = cardClone.querySelector(".element__like-button");
  cardImage.src = link;
  cardImage.alt = name;
  cardClone.querySelector(".element__name").textContent = name;
  cardLikes.textContent = likes.length;
  cardClone.querySelector(".element__like-button").addEventListener("click", checkLike(cardClone, cardID, cardLikes));

  if (MyID === ownerID) {
    cardClone.querySelector(".element__delete-button").addEventListener("click", deleteCard(cardID));
  } else {
    cardClone.querySelector(".element__delete-button").classList.add("element__delete-button_hide");
  }

  if (likes.find(function (item) {
    return item._id === "21d278660190bbbb6648dbe8";
  })) {
    likeButton.classList.add("element__like-button_active");
  }

  cardImage.addEventListener("click", function () {
    return openImagePopup(cardImage.alt, cardImage.src);
  });
  return cardClone;
}

function renderCards(massive) {
  massive.forEach(function (element) {
    cardContainer.append(createCard(element.name, element.link, element.likes, element.owner._id, element._id));
  });
}

var handleAddCard = /*#__PURE__*/function () {
  var _ref = card_asyncToGenerator( /*#__PURE__*/card_regeneratorRuntime().mark(function _callee(evt) {
    var submitButton, placeName, placeLink, card, response;
    return card_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            submitButton = document.querySelector(".popup__btn-new-card");
            renderLoading(true, submitButton);
            evt.preventDefault();
            placeName = newCardName.value;
            placeLink = newCardSubName.value;
            _context.next = 7;
            return loadNewCard(placeName, placeLink);

          case 7:
            card = _context.sent;
            _context.next = 10;
            return card.json();

          case 10:
            response = _context.sent;
            cardContainer.prepend(createCard(placeName, placeLink, response.likes, response.owner._id, response._id));
            submitButton.classList.add("popup__btn_disabled");
            submitButton.setAttribute("disabled", true);
            setTimeout(function () {
              renderLoading(false, submitButton);
            }, 500);
            setTimeout(function () {
              closePopup(evt.target.closest(".popup_opened"));
            }, 500);
            evt.target.reset();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleAddCard(_x) {
    return _ref.apply(this, arguments);
  };
}();

getCards();

;// CONCATENATED MODULE: ./src/components/validate.js
var showError = function showError(formElement, inputElement, errorMessage, config) {
  var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorMessage);
};

var hideError = function hideError(formElement, inputElement, config) {
  var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
  inputElement.classList.remove(config.inputErrorMessage);
  errorElement.classList.remove(config.errorMessage);
  errorElement.textContent = "";
};

var checkInputValidity = function checkInputValidity(popupForm, inputElement, config) {
  if (!inputElement.validity.valid) {
    showError(popupForm, inputElement, inputElement.validationMessage, config);
  } else {
    hideError(popupForm, inputElement, config);
  }
};

var hasInvalidInput = function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
};

var toggleButtonState = function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

var setEventListeners = function setEventListeners(popupForm, config) {
  var inputList = Array.from(popupForm.querySelectorAll(config.inputSelector));
  var buttonElement = popupForm.querySelector(config.popupSubmitButton);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      checkInputValidity(popupForm, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

function enableValidation(config) {
  var formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function (popupForm) {
    popupForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(popupForm, config);
  });
}

var validationConfig = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  popupSubmitButton: ".popup__btn",
  errorMessage: "popup__input_error_active",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorMessage: "popup__text_invalid"
};

;// CONCATENATED MODULE: ./src/components/script.js





var profileName = document.querySelector(".profile__title"); // Получаем имя пользователя профиля

var popupInputName = document.querySelector(".popup__name");
var profileJobName = document.querySelector(".profile__subtitle"); // Получаем род деятельности пользователя

var popupInputSubname = document.querySelector(".popup__subname");
var editProfileformElement = document.querySelector(".popup form"); //получаем форму редактирования профиля

var formElementNew = document.querySelector(".popup_new-card form");
var profileEditButton = document.querySelector(".popup__btn-edit-profile");

function disableButton(button) {
  button.setAttribute("disabled", true);
  button.classList.add(".popup__btn_disabled");
}

function fillUserInfo(params) {
  popupInputName.value = profileName.textContent;
  popupInputSubname.value = profileJobName.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, profileEditButton);
  var nameValue = popupInputName.value;
  var subNameValue = popupInputSubname.value;
  profileName.textContent = nameValue;
  profileJobName.textContent = subNameValue;
  updateUser(profileName.textContent, profileJobName.textContent);
  setTimeout(function () {
    renderLoading(false, profileEditButton);
  }, 500);
  setTimeout(function () {
    closePopup(profilePopup);
  }, 500);
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    var openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

enableValidation(validationConfig);
hendleClosePopup();
formElementNew.addEventListener("submit", handleAddCard);
editProfileformElement.addEventListener("submit", handleProfileFormSubmit);
getUserInfo();

/******/ })()
;