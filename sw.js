/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/Deferred.js":
/*!*********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/Deferred.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js":
/*!*************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/assert.js":
/*!*******************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/assert.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!***********************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheNames.js":
/*!***********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheNames.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!***************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!***************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js":
/*!*******************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/timeout.js":
/*!********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/timeout.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/waitUntil.js":
/*!**********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/waitUntil.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js":
/*!************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js ***!
  \************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/copyResponse.js":
/*!****************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/copyResponse.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/messages/messages.js":
/*!****************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/messages/messages.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!******************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheController.js":
/*!**********************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheController.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!**************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheRoute.js":
/*!*****************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheStrategy.js":
/*!********************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            response = await handler.fetch(new Request(request, {
                integrity: integrityInRequest || integrityInManifest,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            if (integrityInManifest && noIntegrityConflict) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_types.js":
/*!**********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_types.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js":
/*!************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js ***!
  \************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/addPlugins.js":
/*!**************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/addPlugins.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/addRoute.js":
/*!************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/addRoute.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!*************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!***************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!*********************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/index.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/matchPrecache.js":
/*!*****************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/matchPrecache.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precache.js":
/*!************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precache.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precacheAndRoute.js":
/*!********************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!********************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/createCacheKey.js":
/*!************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!******************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/RegExpRoute.js":
/*!*********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/RegExpRoute.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Route.js":
/*!***************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Route.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Router.js":
/*!****************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Router.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js ***!
  \******************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/registerRoute.js":
/*!***********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/registerRoute.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/constants.js":
/*!*************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/constants.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!****************************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/normalizeHandler.js":
/*!********************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/Strategy.js":
/*!************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/Strategy.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/StrategyHandler.js":
/*!*******************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/StrategyHandler.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/_version.js":
/*!************************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/_version.js ***!
  \************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/index.mjs":
/*!**********************************************************************************************************************!*\
  !*** ./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/index.mjs ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/@docusaurus-plugin-pwa-virtual-e0d5244935/0/cache/@docusaurus-plugin-pwa-npm-2.0.0-beta.21-d3283db074-8666e5f06e.zip/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \**********************************************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"b9ff24b6d084433a0bc6244f5cb9fc92","url":"404.html"},{"revision":"ba2a77b1dce249221d5339a7817fc4b3","url":"about/index.html"},{"revision":"8624199ba36b7884bc6462959ff0a5e1","url":"assets/css/styles.3ac55fd5.css"},{"revision":"5598dcd718ff770cb9d35ba53981dc51","url":"assets/js/00b62936.8f5ba507.js"},{"revision":"7fbb33d5ce2a5f4e36f8aa49056d5e99","url":"assets/js/01a85c17.8cf657d2.js"},{"revision":"96dd3726c765070e5385712ea51f1216","url":"assets/js/0375034f.f14afefb.js"},{"revision":"0b8a72d70f7131c039c3f6f9a8356439","url":"assets/js/050cf89e.6bd5418d.js"},{"revision":"ada63e48b25d3373ddf8a78f2e09f209","url":"assets/js/0b8a4d91.a204f34b.js"},{"revision":"9094acf7488d57acacf85808c8cffaff","url":"assets/js/0ba85678.74c99333.js"},{"revision":"59b615bd5f17db69f672bdb178620cbe","url":"assets/js/0f879e68.8d9b0910.js"},{"revision":"f9fa7c39b413bfd398bb4f2590a77cfb","url":"assets/js/128a5f34.83ab2c13.js"},{"revision":"05d9faa07749548ba5dfaf76db35ed84","url":"assets/js/15910009.890eac05.js"},{"revision":"ed972c3d6feda5f8fdb1592264730a67","url":"assets/js/17896441.7037d613.js"},{"revision":"cbd25b6d7aac89dd51e842aafec5c4fd","url":"assets/js/1853.3f6f3fef.js"},{"revision":"0c46953497e85ad09a18a3d88036e24b","url":"assets/js/18f59390.fdc2d5b6.js"},{"revision":"a84a7689d8931c61e82d8dcf6b0d63b8","url":"assets/js/1a2ca38f.81fb49cf.js"},{"revision":"b705bbb3a5ffd3d8af6c19d01a32f7c9","url":"assets/js/1a4e3797.0d795c88.js"},{"revision":"e42ab15f3c3ecad6a6a40b7982528d74","url":"assets/js/1be78505.d905fea6.js"},{"revision":"aed68a776888abde02adc0497514a837","url":"assets/js/1cbc9cf3.3b510dd0.js"},{"revision":"36ab085290503f4e73b47dad22211941","url":"assets/js/1df93b7f.58eb73b0.js"},{"revision":"c380b64dc2a75a8f4d4a160c5896c5d9","url":"assets/js/1eecc98a.c370e4e9.js"},{"revision":"d9829b3c0c48e42bf6f1cfb4f3f54edb","url":"assets/js/288f994b.7273f6b5.js"},{"revision":"06ac27c2d363c3d0867752a010146d41","url":"assets/js/2b061acd.7218017a.js"},{"revision":"017ec2a4b2853a4ae1202a512d793c6a","url":"assets/js/2f169d55.99cce53c.js"},{"revision":"15fdad03a5b1fcac831323d4c1c278d1","url":"assets/js/2fc720b0.621f55ed.js"},{"revision":"cd959c7d84298fa8a08a0865c34d6fde","url":"assets/js/3230.6827496d.js"},{"revision":"97b103060b0ce3487cdcdbbd43d1dc7e","url":"assets/js/3439.3c0454cf.js"},{"revision":"fe7484b8f366dd2ac753b3810dc3e3a8","url":"assets/js/365a10b6.0fb65f12.js"},{"revision":"750eb3d46525f07971058d9382436ef2","url":"assets/js/3720c009.dbc32a09.js"},{"revision":"b31803686f059e1ef127069b6bc8603c","url":"assets/js/38080d27.6c92efec.js"},{"revision":"d56922a4f2f781e9d38e97686a82ef02","url":"assets/js/3991eb91.6dacb890.js"},{"revision":"4276985dc79fc8be340c02cc9476dbbe","url":"assets/js/3b172cba.fae78003.js"},{"revision":"d4e38db1fb1acaa02c41f580971d19b9","url":"assets/js/3f3a03c1.ddb3167a.js"},{"revision":"767971cd561f10438ce97fe7a6f6abb0","url":"assets/js/3f3aeb9c.fde5b730.js"},{"revision":"1847c10599c697e25f92c13c869b4333","url":"assets/js/401c6634.b4121fbf.js"},{"revision":"576e06fe9c943404db3579d6318d3587","url":"assets/js/458e4887.dc69e5d8.js"},{"revision":"99611b011bf28e67ddb157b2ec8b1f32","url":"assets/js/4750.d8018244.js"},{"revision":"41a898d97554a6f9cec20ec5f8eba3b1","url":"assets/js/4f04ead0.83012475.js"},{"revision":"c70f2f675ba8d825bacc2e52b108d52f","url":"assets/js/5254.ce02ba4a.js"},{"revision":"c75335b93d6d9afe8002ea7e400e27fc","url":"assets/js/5396.370bff20.js"},{"revision":"40c064a183db9429a4d2bca9ed7f3410","url":"assets/js/53ec3982.cd896c0e.js"},{"revision":"a03a062a72bbed7e4350294bf92bd285","url":"assets/js/5511.4b40c502.js"},{"revision":"94e05bc1c194086d063f72ef10d9305e","url":"assets/js/55960ee5.ab43419b.js"},{"revision":"3a4622dc86a3ed3f13e2e7cc945b4394","url":"assets/js/55dd03bc.8b2b1734.js"},{"revision":"dde6b244e20cfefca0cca4f2be3898c9","url":"assets/js/560d5493.e6025e32.js"},{"revision":"4aa8643318c7ed93679342778a7f7029","url":"assets/js/569.ae0cc6a6.js"},{"revision":"a5d3ae2238ca2143828d6c89d929c116","url":"assets/js/5980afbc.22fd1653.js"},{"revision":"7fc1361fa076634f3d75e8d6feac880e","url":"assets/js/5de85630.c72f986f.js"},{"revision":"5b67878bfe956d761704085829b271c1","url":"assets/js/6165c097.e7c65739.js"},{"revision":"43d3f2f27cf9c7623b5ce8302a66dc5f","url":"assets/js/631037e5.6972dc56.js"},{"revision":"9d62a9590cd849b26bb3a6dd6ae567c2","url":"assets/js/6385.62b8f400.js"},{"revision":"f14fc74ec7493d8674d9cc8b69197633","url":"assets/js/65022fd3.d37259a8.js"},{"revision":"48db8c00b828b669aaad3eb6776e7e41","url":"assets/js/66ba13d2.3a49a4db.js"},{"revision":"62b87c727e0545a1ddf634fece9db810","url":"assets/js/68005566.d3324ca3.js"},{"revision":"28ecd3c8e124e84a218cfc614fcd35bb","url":"assets/js/6875c492.4bf7e40c.js"},{"revision":"a9d8c24be0b114bf39cd0587e1b2df00","url":"assets/js/69094718.4666d6f1.js"},{"revision":"f1e7f0069fb7880ee190836ce5278b5d","url":"assets/js/6be3ea95.2a6aba95.js"},{"revision":"65f49cfda26d3c93765954bd5cb9d379","url":"assets/js/6e376d57.0f457873.js"},{"revision":"502f84bd66a1ac1edeaffbee0df9fb13","url":"assets/js/6f96539c.ec84642a.js"},{"revision":"d38897334202f1ab0f4450b3eb1e6f62","url":"assets/js/70adae3e.b55ac7fe.js"},{"revision":"3bbf5824304950a7604cdbac9d07fa66","url":"assets/js/7172ca13.3bcd8c26.js"},{"revision":"147448f3cebc3950992ec738f66ec49f","url":"assets/js/7194.b94c82b9.js"},{"revision":"5a906b23569b14fb1a3aeebd9f0dc878","url":"assets/js/77e3632f.786ee94f.js"},{"revision":"e9c0fb22cb7889a755ce19d3a2c8fc84","url":"assets/js/7da708dc.b7d06e65.js"},{"revision":"9a7aacfd145c5f6a6f1fb3f6d3453d66","url":"assets/js/814f3328.0aa7e836.js"},{"revision":"806c97c99d0720bac74205e12b172b70","url":"assets/js/8498c9bc.977785ab.js"},{"revision":"3fe101d55a7fb539977aa1b05315e0a1","url":"assets/js/8dc5e242.a7b9116d.js"},{"revision":"43b69631557d6d28ba7ee3a3a06f22e3","url":"assets/js/9097.dd888e71.js"},{"revision":"47ecd79dce3439a1e4813317703acbaa","url":"assets/js/935f2afb.a826044e.js"},{"revision":"94489881e602c9479076595e60595ee7","url":"assets/js/9467.caaac0c1.js"},{"revision":"2146eb3e9f04d1112b9045b767d1f137","url":"assets/js/9a46388f.2e6af3c2.js"},{"revision":"934eb644a205b40e95a231911a45eb42","url":"assets/js/9e4087bc.9dddb60d.js"},{"revision":"e959bc2d3f957728463254a738395063","url":"assets/js/9ece7251.7cfeb2ab.js"},{"revision":"25acce6ae9d8fe5b794f5755193468df","url":"assets/js/9f821037.51b30827.js"},{"revision":"c66fa13988e47f7fccc7590b37825132","url":"assets/js/a4cc42e0.826decd1.js"},{"revision":"ca2c4cfdc7bd5191ee0ed2c355937ac9","url":"assets/js/a6aa9e1f.d5a0c0bf.js"},{"revision":"552d296ff9a41d99eca6f579be851027","url":"assets/js/a7023ddc.b74cd535.js"},{"revision":"f4db23df6cf7c1211378d6de8b953ed3","url":"assets/js/a7c0e23a.ab5844d1.js"},{"revision":"bddd7d7661cf91aef203fb7bfc5a3265","url":"assets/js/ab6a49eb.425a11c2.js"},{"revision":"8ab720d54fbf98c907a3af6b80041335","url":"assets/js/b0291f37.6a616cfc.js"},{"revision":"1d926ea16e0d015a167d2d8d07e95e35","url":"assets/js/b2b675dd.b750e828.js"},{"revision":"f1aeba035e67929640cc66dbcf0e1c9a","url":"assets/js/b2f554cd.2ab3d7e5.js"},{"revision":"b5ba4e59291eea220f050d722b75cb88","url":"assets/js/b455e532.7c903c85.js"},{"revision":"dd7bb34e319f2642ee3390dec2de0198","url":"assets/js/b6400cf9.0007725f.js"},{"revision":"a0aba824d79b5a0fa06cb5c02fc5183f","url":"assets/js/bb86fac5.9ff84bbd.js"},{"revision":"84d963a9b68389a38906214f382ffcf4","url":"assets/js/bee4d775.8d5fac17.js"},{"revision":"a8d0cb18dcf3de623a444e11f9c8ceee","url":"assets/js/c37c6272.d387a5bf.js"},{"revision":"d91356ba4a000ea6c7d82373f441c2b3","url":"assets/js/c414b1f9.e57212c6.js"},{"revision":"5ef033a1ae602e482ce891b68ff23a5f","url":"assets/js/c9fb2f05.f50de3e4.js"},{"revision":"d321b5bb8fbee28d224946fce3a44fa3","url":"assets/js/cc5765fc.e47987bb.js"},{"revision":"8ee3267545b1b02cd30ef48a5a2ef883","url":"assets/js/ccc49370.f86266f8.js"},{"revision":"d1dddda830883768460827c7eea7266f","url":"assets/js/ccfb8346.b0cef46c.js"},{"revision":"d67fdf46a3552e6f06c310e915ae8b44","url":"assets/js/ce35b10a.c763446a.js"},{"revision":"f6b039f7b1cbf65060d5a6362b7e1827","url":"assets/js/ced3392a.142a3c0f.js"},{"revision":"59f1354a869317051e1366ef8e46ec9e","url":"assets/js/d0cf3727.ca792d44.js"},{"revision":"46c7f4cc32d1c79a84a594cbd21034c3","url":"assets/js/d30eeb68.8b41d48a.js"},{"revision":"b68a8988a905d09188c8a4bd8de59aad","url":"assets/js/d5d092c0.1846f45b.js"},{"revision":"a125b5a9eaf4e9d34f796e8afa92fa9f","url":"assets/js/d675395f.e11a1ba6.js"},{"revision":"7b0cc244fa5567fd16e07c6ec7d45c19","url":"assets/js/d732aeea.5e20c27f.js"},{"revision":"c99dd3c9e6fa26a66dd17fa5182766d7","url":"assets/js/d82ee6cf.612bc1ed.js"},{"revision":"f7db1521e210126ad1370f1bd3ebb146","url":"assets/js/d8c9d474.4adb1ccc.js"},{"revision":"873ee9a3969ef1596e9a1bb2eaef116f","url":"assets/js/da5526be.921d7f08.js"},{"revision":"8bc1726194d2e67e35d75402ff4c095b","url":"assets/js/df203c0f.775123bf.js"},{"revision":"239e4743ed5058315d8a19f756a092dc","url":"assets/js/e68bc935.0df95f5d.js"},{"revision":"cceaaaf6a7df82f98011e21502324148","url":"assets/js/eb1ae349.91d81e59.js"},{"revision":"8ce0a2cd6f6e64133eeb840a537e43e0","url":"assets/js/ecba4487.17fdcc5e.js"},{"revision":"75427078ccfdd0ffc288dbd3ba4facaf","url":"assets/js/f0ffdfdc.81aa8fe5.js"},{"revision":"17f4bd42c45699816280ec121e28f449","url":"assets/js/f13c7c37.f78e2a61.js"},{"revision":"26d2b3c0d12bcf22f60871d2813b6cf6","url":"assets/js/f162eb70.c14c0793.js"},{"revision":"8ffdc25bc8d651d5ea41fcc308b3c845","url":"assets/js/f401c913.9c00b5f7.js"},{"revision":"4b340e875b76f4afdea81bdf087ed89e","url":"assets/js/f7a67f91.9e0aee08.js"},{"revision":"5ac962ba8c8d963a1f5c7880e21d951a","url":"assets/js/fbf7b0d1.9e7dc0f8.js"},{"revision":"aa24fa5cdec62e3a43663632cbac59f0","url":"assets/js/main.48c76bb7.js"},{"revision":"66a77b03c70686a5534e2f4287831932","url":"assets/js/runtime~main.b0b1cdba.js"},{"revision":"27786a978bf18ad9ce17f132d7418bb4","url":"azure/how-is-k8s-external-ip-handled-in-azure/index.html"},{"revision":"18fb09d99a13188e10194eb402fa7c75","url":"blog/2021/05/06/2020-retrospective/index.html"},{"revision":"4c0617fa759c5f96cc97cc0fff46bd5f","url":"blog/2021/05/06/using-recoil-in-nextjs/index.html"},{"revision":"fe99553959ddb82316f4d045f05836de","url":"blog/2021/05/06/why-start-github-blog/index.html"},{"revision":"673183f4a8ed3727f3ca7e03e09dba67","url":"blog/2021/09/07/lets-properly-understand-and-use-the-ssg-of-nextjs/index.html"},{"revision":"a64d134da9d9ed2e1f767387872f5eb6","url":"blog/2021/09/13/share-react-boilerplate-with-gin/index.html"},{"revision":"0f51b84c14a77482439483327e1c1ba3","url":"blog/2021/11/17/lets-create-an-http-cache-server-with-golang/index.html"},{"revision":"cba760dbfc2baa863aeeeb453a1906f1","url":"blog/2021/12/06/how-is-k8s-external-ip-handled-in-azure/index.html"},{"revision":"d88183f3cc7aa14101d6a0a6f1dd6cb0","url":"blog/2021/12/26/belf-project-retrospective/index.html"},{"revision":"dbc017a29114f0c1be8c86b745620892","url":"blog/2022/01/12/2021-retrospective/index.html"},{"revision":"8f107268ad3c671af2917900edbe06cf","url":"blog/2022/04/24/why-is-software-development-capability-difficult-to-quantitatively-measure/index.html"},{"revision":"6aee83b32072eee3de55e9796ce13675","url":"blog/archive/index.html"},{"revision":"43e6f866c8fbea13e4a44f15cf64f898","url":"blog/index.html"},{"revision":"c3dd5b13d074aa08c43579b46cce6963","url":"blog/tags/aks/index.html"},{"revision":"df7b2202b4e2ed8af844a20e8a4888d8","url":"blog/tags/azure/index.html"},{"revision":"54ec84ec5845a5323c107ae9d2e90f14","url":"blog/tags/blog/index.html"},{"revision":"53d3cb7bbf91eef6c6a73327bc5254c6","url":"blog/tags/boilerplate/index.html"},{"revision":"9e3de672f22be138b0f41aabc11c1568","url":"blog/tags/cache/index.html"},{"revision":"dd5b1718b34ed58e0b6f79c0b0664dbc","url":"blog/tags/golang/index.html"},{"revision":"be92dc20019c260afa1899da4d644144","url":"blog/tags/http/index.html"},{"revision":"d863ecf6de249857204b0870d6742c14","url":"blog/tags/index.html"},{"revision":"d2cb074d76b917f1b5cf7f8ff63e2910","url":"blog/tags/k-8-s/index.html"},{"revision":"ec822f7f888a86476632c98b635da5df","url":"blog/tags/msa/index.html"},{"revision":"c378346f5dfa8c476ceca2d19b32990b","url":"blog/tags/nextjs/index.html"},{"revision":"b1a392de21ffaa310b524b08259817f5","url":"blog/tags/promotion/index.html"},{"revision":"19f6097a15ff70b21dba3c47556062ea","url":"blog/tags/recoil/index.html"},{"revision":"05d8522350d0415160ec4a022ab81dcc","url":"blog/tags/ssg/index.html"},{"revision":"97b334ed0b93ed3ef7f922d709fa08ea","url":"blog/tags/개인-회고/index.html"},{"revision":"56e8bbad36e44b4509ae3d9ca723b4a6","url":"blog/tags/자격증/index.html"},{"revision":"d6262cdb2abb34b1d6993ed9b5e34a97","url":"blog/tags/정보처리기사/index.html"},{"revision":"01c782977cb8b4e0315002f920af86bf","url":"blog/tags/졸업작품/index.html"},{"revision":"48dd4972f4c9234c8f69a663c73c0fc5","url":"blog/tags/프로젝트-회고/index.html"},{"revision":"14acc4c5aa355115de53331a96504544","url":"credits/index.html"},{"revision":"fb2c26c5b0f8309a9dd5ceb9ba6bcc90","url":"devops/workflows-with-aks-github-slack-1/index.html"},{"revision":"830ba2df773bb338e61ad76ba0c18bd1","url":"devops/workflows-with-aks-github-slack-2/index.html"},{"revision":"36245eb40d90a5c73dd9cd5425ef355e","url":"devops/workflows-with-aks-github-slack-3/index.html"},{"revision":"f6c44040e8e53eded3c7055a3a6ac4b6","url":"devops/workflows-with-aks-github-slack-4/index.html"},{"revision":"84dfa59303075a848b3bad267733f4a5","url":"devops/workflows-with-aks-github-slack-5/index.html"},{"revision":"97011b02835198360c7c1c090d815c5c","url":"devops/workflows-with-aks-github-slack-6/index.html"},{"revision":"5b9402c23653f2399424faba5ced8417","url":"devops/workflows-with-aks-github-slack-7/index.html"},{"revision":"f57a07ccd5f23d33aec9f9bb005588c8","url":"essay/2020-retrospective/index.html"},{"revision":"8d0bd96c4e96b56d048e943450c11b1e","url":"essay/2021-retrospective/index.html"},{"revision":"bc14fc85d4f7bd60ea3c820c56b3c490","url":"essay/belf-project-retrospective/index.html"},{"revision":"d7bcbbd088051bfe47dac7f2cfbff78b","url":"essay/share-react-boilerplate-with-gin/index.html"},{"revision":"aac4249dc7c44d88d7f1eda5883dd051","url":"essay/why-is-software-development-capability-difficult-to-quantitatively-measure/index.html"},{"revision":"a41ca0b6b85333d233008486eef6b273","url":"essay/why-start-github-blog/index.html"},{"revision":"bee64bd6797afc44e95cd86dc6935367","url":"golang/lets-create-an-http-cache-server-with-golang/index.html"},{"revision":"80c996568afbb037633611fd9cbfc668","url":"index.html"},{"revision":"107dbc6eb646f0b00286e627f402c20c","url":"manifest.json"},{"revision":"8bf877ac29dcb51a98fe3c6c5118bfd2","url":"next.js/lets-properly-understand-and-use-the-ssg-of-next.js/index.html"},{"revision":"0a38033b14618806842911c93c17b7d7","url":"next.js/using-recoil-in-next.js/index.html"},{"revision":"7ccce579cf5665255b0fc5183daeea90","url":"search/index.html"},{"revision":"22b838fad75f9ee56e2dc094220e74bc","url":"series/index.html"},{"revision":"5185c3b72eeca443486ba22ed914f0c5","url":"series/tags/aks/index.html"},{"revision":"628d7afc77d17cea1337615062831a4b","url":"series/tags/azure/index.html"},{"revision":"03fbd5ec2a18c3747546dc8bc6e1eb9e","url":"series/tags/blueprint/index.html"},{"revision":"be32ce91083d79eb6a00f0741d29ef4e","url":"series/tags/ci-cd/index.html"},{"revision":"bcb0976fa3050dc0295078c5954b671f","url":"series/tags/devops/index.html"},{"revision":"df7e691f6a51d9741117c613064d0840","url":"series/tags/github-action/index.html"},{"revision":"1ceae57287b832959004f37662cec03f","url":"series/tags/github/index.html"},{"revision":"c1fbd0f3e0bfaefd9eb5dcd8f5857aa2","url":"series/tags/index.html"},{"revision":"b8b26932494634b46eee61a4ccecaaaf","url":"series/tags/k-8-s/index.html"},{"revision":"f72a70249de0800eb3e5f43d7ef1c9c5","url":"series/tags/slack/index.html"},{"revision":"cdb1c40bbe95e3201443e1be1b79b48b","url":"series/tags/회고/index.html"},{"revision":"be88fa6918a532f3adc4df6a4fb3d264","url":"series/workflows-with-aks-github-slack/blueprint/index.html"},{"revision":"91c68108cde6986da6f6b3b71cdb843c","url":"series/workflows-with-aks-github-slack/create-infrastructure/index.html"},{"revision":"028a27c15c784adb0bfcd52f85745854","url":"series/workflows-with-aks-github-slack/github-action/index.html"},{"revision":"9d18b960bf38362088b4a4bc0dddd273","url":"series/workflows-with-aks-github-slack/github-settings/index.html"},{"revision":"3431890ed7040341430b58872daede02","url":"series/workflows-with-aks-github-slack/index.html"},{"revision":"0761af9a901489e1a5d08225126f928b","url":"series/workflows-with-aks-github-slack/retrospect/index.html"},{"revision":"5432916dcfa7fc1a06c2d7cd510b1726","url":"series/workflows-with-aks-github-slack/slack-settings/index.html"},{"revision":"e7be16c0d314578210f50901a417d67b","url":"assets/ideal-img/1-0.481f8d9.1926.png"},{"revision":"092b1dca3a67d0d5d93cb5021050983f","url":"assets/ideal-img/1-0.98e5154.3808.png"},{"revision":"a1a2db9593dea57c0a21fa7070f7fb99","url":"assets/ideal-img/1-1.5b8a3e5.3808.png"},{"revision":"e66a61231e78a9aeb069da0426dddd5c","url":"assets/ideal-img/1.1a2fd40.2546.png"},{"revision":"97bd8730bb9ae0c3dfb2cb765800eea9","url":"assets/ideal-img/1.1b3593e.3808.png"},{"revision":"4b7ea5377f9c62346b3854f9271b1c5a","url":"assets/ideal-img/1.518cdcd.1806.png"},{"revision":"c035018376d1dee22ddb96c4385dcf0a","url":"assets/ideal-img/1.579a5ea.1170.jpeg"},{"revision":"f5786597947a220eb71cfbdde567511e","url":"assets/ideal-img/1.7c9caaa.1554.png"},{"revision":"9eed9eff5771f92916f37ad69f691a31","url":"assets/ideal-img/1.86b1e98.1532.png"},{"revision":"34ba2c39c8f8e12eddc04c3db02d24de","url":"assets/ideal-img/1.925c0f2.2588.png"},{"revision":"d44c173f982dcaca5b3f5cbebb8953ed","url":"assets/ideal-img/1.ab5b3ec.2384.png"},{"revision":"4e2ef5d82753595e711249bc30524f32","url":"assets/ideal-img/1.b48ba94.828.png"},{"revision":"c9494648983bc2449575130d7c803597","url":"assets/ideal-img/1.da5a98c.1540.png"},{"revision":"2cae91d37e183ba9e9fd91ded9983058","url":"assets/ideal-img/10.2c27270.2266.png"},{"revision":"57e0fd2001e5dfe815be11a1ce59f0f8","url":"assets/ideal-img/10.318ecca.2384.png"},{"revision":"a97eedb6b5942c7aaf5ea2142e0b1aae","url":"assets/ideal-img/10.5921557.2898.png"},{"revision":"c9dbf3597c56b3fc229fc121ed29698f","url":"assets/ideal-img/10.f0ae2b9.2588.png"},{"revision":"c96160de933a23fc247ee62d5ee0e6ea","url":"assets/ideal-img/10.f7967b9.1554.png"},{"revision":"3335e99d291d9b114b67c70b55bcab67","url":"assets/ideal-img/10.fda71f8.1594.png"},{"revision":"5d54ee3929d2a6f3453857fe6b95d5a5","url":"assets/ideal-img/11.134fd4a.3808.png"},{"revision":"43268096dc57fceffcf029603195c2df","url":"assets/ideal-img/11.b90c608.2384.png"},{"revision":"8ff15f57d49082fb7e87c02ebb1d7caa","url":"assets/ideal-img/11.c6dea6d.2266.png"},{"revision":"07bc82106fee72815b238238eb72234a","url":"assets/ideal-img/11.f107f7c.3808.png"},{"revision":"fbe0856e1d0bea8151c451d76956f8b9","url":"assets/ideal-img/12.852e1b9.1420.png"},{"revision":"a1af91a983d47632e8ec6597e5f50d43","url":"assets/ideal-img/12.9cf3e73.2384.png"},{"revision":"25d193cfe38515ba4b1ce7547872cccc","url":"assets/ideal-img/12.c966001.2546.png"},{"revision":"4b3ca9f375c34cea62b3b62d630678fb","url":"assets/ideal-img/12.cd40341.1554.png"},{"revision":"4cbb364954321551e62164fb323deda4","url":"assets/ideal-img/13.9cccb92.3808.png"},{"revision":"ccc0978dc2a00802db820d08c4f10cec","url":"assets/ideal-img/13.d520968.2546.png"},{"revision":"60dc1641cb7ad147ac258b4a7b4752d9","url":"assets/ideal-img/13.e38ae2b.1420.png"},{"revision":"24566e8fa5fcf244b4961b7b35df8d4d","url":"assets/ideal-img/14.09051b1.2546.png"},{"revision":"be84b5f32ea8bbd2d2682b487d9917a0","url":"assets/ideal-img/14.9fd7b59.2266.png"},{"revision":"7d128b88ab0c432f45a053c60129885d","url":"assets/ideal-img/14.b9e2e2b.3808.png"},{"revision":"f3bc56596b9ed17f6e5955d79efcbcea","url":"assets/ideal-img/15.893a855.3808.png"},{"revision":"51a245b0219d50a986e74164b0f3d99c","url":"assets/ideal-img/15.fda2fca.3028.png"},{"revision":"6c9c9a92120b9e6737b29e910f6733b2","url":"assets/ideal-img/16-0.0de2ee9.2266.png"},{"revision":"f7b603e23ce32120fe59b092d1cc32e8","url":"assets/ideal-img/16-1.51d5f6b.1192.png"},{"revision":"2eadcf65b62b41cf468d7646f0871a7f","url":"assets/ideal-img/16-2.84390e9.2384.png"},{"revision":"bb9a1d31fc2c62ccd791eead49cb3065","url":"assets/ideal-img/16.4a42e39.1224.png"},{"revision":"165f7ac3e0cba2a16edeb2962805db23","url":"assets/ideal-img/17-0.2f89dd4.3578.png"},{"revision":"0373730dfd82fa1cf10259d5025485a6","url":"assets/ideal-img/17-0.5df6066.3196.png"},{"revision":"7aa9cab84ab42759ef4a3f96286fe4cc","url":"assets/ideal-img/17-1.047daa7.2594.png"},{"revision":"4cc422aef09a7a1aa6f6a8b1485a2cd4","url":"assets/ideal-img/17-1.67fde22.1192.png"},{"revision":"4eea6a179376a494fd2877033b0470f4","url":"assets/ideal-img/17-2.0160b18.2384.png"},{"revision":"d3d60fc2273939e14e41053417a7a9a9","url":"assets/ideal-img/17-3.531499c.1106.png"},{"revision":"b3f303a5b529c4e264416e6955bce61d","url":"assets/ideal-img/18-0.9f36961.3808.png"},{"revision":"b70c1b4e70d8d881a4c196d6e711b42a","url":"assets/ideal-img/18-1.3f3e247.3808.png"},{"revision":"b2627ddb0d1cff8ca983d84848021693","url":"assets/ideal-img/18.c47a8b6.3582.png"},{"revision":"233abcff77a92a29e5e7a53f1fb8316a","url":"assets/ideal-img/19.bb0fd1d.2994.png"},{"revision":"f919db42ae43ad6ec114f5401264f155","url":"assets/ideal-img/19.f909a3b.2384.png"},{"revision":"f6f42f54b345c334fd569b4df723dddb","url":"assets/ideal-img/2-0.3998d19.3282.png"},{"revision":"be77e3fec9daf32b6bf60f69e1a68ea6","url":"assets/ideal-img/2-1.59c4fd6.2688.png"},{"revision":"610a718d7eceb84f8c6ca3edf66bd591","url":"assets/ideal-img/2.1f5ae80.2546.png"},{"revision":"db73afdb0dba795dad04a71593390ca5","url":"assets/ideal-img/2.32df696.3808.png"},{"revision":"f3caa101f1f3f0633d610934d1bbeb90","url":"assets/ideal-img/2.36ad0f3.2320.png"},{"revision":"6b6f2d3806f1966534824560af5b4393","url":"assets/ideal-img/2.3e41a79.2588.png"},{"revision":"05b25ed63e96f4b709ad44edee87cf05","url":"assets/ideal-img/2.416b01c.2384.png"},{"revision":"d2ab1377b244c12309d2f9f5152048fa","url":"assets/ideal-img/2.446ad18.4714.png"},{"revision":"9bf4cec8f4ab884341fec7fce02cb9f5","url":"assets/ideal-img/2.487d6a0.3808.png"},{"revision":"b13976f3b723a21df7c462d523f38f93","url":"assets/ideal-img/2.79cebfa.224.png"},{"revision":"13f9a52c64d3316a4e11be5f56014b35","url":"assets/ideal-img/2.8a46ae3.2644.png"},{"revision":"3df390dec97bef4e75beab86f42244df","url":"assets/ideal-img/2.e76f009.4436.png"},{"revision":"f95cd0e06aed6949a5b3451ca3d41b4e","url":"assets/ideal-img/20.6fc8eb4.2994.png"},{"revision":"fd89c9d1942f08478d9e23b921cf8c55","url":"assets/ideal-img/20.8172013.2384.png"},{"revision":"8bd0035f8af44b1e75236c3eb26a05f7","url":"assets/ideal-img/21.da248e6.3042.png"},{"revision":"4a50833db5048f7cebe083b9ae5e24d6","url":"assets/ideal-img/21.f6248a1.3808.png"},{"revision":"da58f65f077004ec61e480bc17811155","url":"assets/ideal-img/22.0913406.2674.png"},{"revision":"bb3273cff2b11b52fd436139e64a7925","url":"assets/ideal-img/22.a3761fc.2384.png"},{"revision":"5f4545e6548ac55bea3abecd383e91f0","url":"assets/ideal-img/23.97c0097.2674.png"},{"revision":"c54793a841ec5a3b705cb73d07c632d8","url":"assets/ideal-img/23.bac34cf.3458.png"},{"revision":"b9e86340cf8555b374e20f271525132f","url":"assets/ideal-img/24.e1baddd.2056.png"},{"revision":"7807f8b6eaf4ffb6dbfd6c2b6c8c2cb6","url":"assets/ideal-img/24.f987c4d.2272.png"},{"revision":"e3d5f026d89988feec8411f4c66c8789","url":"assets/ideal-img/25.273e1a3.2138.png"},{"revision":"5343cb5bb45802b107a51fbffe5696d0","url":"assets/ideal-img/26.5661dfd.2284.png"},{"revision":"4cfcfef6874b9254bc1c441d540cd3ea","url":"assets/ideal-img/27.55e8e42.1554.png"},{"revision":"81cad35969ee0f16a4559efbfa4aa9bd","url":"assets/ideal-img/28.ab9e504.2258.png"},{"revision":"6fc92188b27cae778d1d83316e445b5a","url":"assets/ideal-img/29.b98d9a6.2258.png"},{"revision":"bcdece242bdfd9c7b8ff2e87e4bc77da","url":"assets/ideal-img/3.0443276.2342.png"},{"revision":"f621bc0cf7058000cccfce9cd99ce808","url":"assets/ideal-img/3.10668eb.2546.png"},{"revision":"261a88f9bb6bfd7a2b8b8fd81db6f552","url":"assets/ideal-img/3.2104190.3808.png"},{"revision":"952bc02560ca2bfb84a091f8b12ea797","url":"assets/ideal-img/3.2fbdc9d.1224.png"},{"revision":"8eefad7aa9822b6655c5c8c7e29ea623","url":"assets/ideal-img/3.7e362e4.2930.png"},{"revision":"27bd178786e0a90314d1a4db71917be6","url":"assets/ideal-img/3.962038c.2320.png"},{"revision":"7df3e274ee1111922ab73adb21072e8a","url":"assets/ideal-img/3.e88cf90.870.png"},{"revision":"b61eac5a2ce08b9d86e2eccc93331a1b","url":"assets/ideal-img/3.ef0a323.2588.png"},{"revision":"d9ec432763c1e17cb5e27d7b81549c90","url":"assets/ideal-img/30.b6de812.3808.png"},{"revision":"6bafc8b10597883261cfb9ce2f56771e","url":"assets/ideal-img/4.21df81d.1420.png"},{"revision":"59206fd1a72013f0bb6d1f98bc46c99d","url":"assets/ideal-img/4.5c50496.2354.png"},{"revision":"eebdfac9dc764677c15cee32e80c536a","url":"assets/ideal-img/4.6e747ef.3808.png"},{"revision":"617d2920dd56c382e52e3c4baeeac2bf","url":"assets/ideal-img/4.77191c6.870.png"},{"revision":"5ed80e161052494206e3d1add0cf418b","url":"assets/ideal-img/4.8c2261d.3808.png"},{"revision":"1866c3d31e598bb0f3346694deb573b9","url":"assets/ideal-img/4.b6049df.1224.png"},{"revision":"d15898dc379dce21dd49428a82068040","url":"assets/ideal-img/4.f0bceb0.1596.png"},{"revision":"7e637f99dc4f0de429d4ed675b1d2281","url":"assets/ideal-img/4.fa0d3a1.2588.png"},{"revision":"f9da828db30855da7868cc9a993698b6","url":"assets/ideal-img/5-0.a98cf49.3808.png"},{"revision":"fa5bd0fd291a7ea6fb89ea2f69c92322","url":"assets/ideal-img/5-1.f8cede9.2384.png"},{"revision":"223db4155583dae578c3091f8796b275","url":"assets/ideal-img/5-2.e81e96b.3808.png"},{"revision":"14063c2389913b28d994f374096c1897","url":"assets/ideal-img/5.361b189.2588.png"},{"revision":"3c54c1be4b4ef1cc327f1a87ca797fde","url":"assets/ideal-img/5.6815da7.3808.png"},{"revision":"6fdf8b3a84ea1c70d57265b1caf74c69","url":"assets/ideal-img/5.6ad0a0b.637.png"},{"revision":"7b3743274ea265469ed4bf686fbc6338","url":"assets/ideal-img/5.a96c270.1252.png"},{"revision":"d7bf906c7f5e05114336a4acb38b6f4b","url":"assets/ideal-img/5.c00a7bd.1420.png"},{"revision":"d6d1082755dd49bd9faabb37903e94c9","url":"assets/ideal-img/5.e2bf783.870.png"},{"revision":"05db6f3cf3ade215f2e56c1e8e0e4f63","url":"assets/ideal-img/5.e2d84ab.2354.png"},{"revision":"65373ace2a8388e0010daa1bab4242e4","url":"assets/ideal-img/6.0e0eaa1.694.png"},{"revision":"77c9347f7e361993e3096fce899fd20b","url":"assets/ideal-img/6.1eaa801.2354.png"},{"revision":"47a300befcfa80869b12724b30060c59","url":"assets/ideal-img/6.21fb895.3808.png"},{"revision":"d1df95652f4daa8f21124140e7d5ad3f","url":"assets/ideal-img/6.87dc6d8.870.png"},{"revision":"45dd28e1b908563c3fae77f33b897abb","url":"assets/ideal-img/6.93bb876.2546.png"},{"revision":"5935534722977f41e6ad402532e025d4","url":"assets/ideal-img/6.9d9f578.3808.png"},{"revision":"f03103c7bed8098e782ab68a9ef44fca","url":"assets/ideal-img/6.bcf32f0.205.png"},{"revision":"0f2b7c9582703ea1226950c622d8e21a","url":"assets/ideal-img/6.fab4ce5.2266.png"},{"revision":"f9cec553f17332e4a453254ffd26e944","url":"assets/ideal-img/7-0.0c3578b.3808.png"},{"revision":"2fd724179abe6901f4a49e12749b2d15","url":"assets/ideal-img/7-1.5550a71.494.png"},{"revision":"8ae923df8c50e965451c692753e9a2f4","url":"assets/ideal-img/7-2.4be010d.684.png"},{"revision":"dfcadd16d3f4ec4afe3b3a1f1d59728e","url":"assets/ideal-img/7-3.2277924.1688.png"},{"revision":"b61bd110fc0bb667d06b20284206cb0f","url":"assets/ideal-img/7.111ad97.2478.png"},{"revision":"2611d5f4bc78d5fe58fae644af95b40a","url":"assets/ideal-img/7.66f8fa2.1224.png"},{"revision":"5089f81dd659c59f4059f4e97266d12f","url":"assets/ideal-img/7.815b419.2546.png"},{"revision":"5a7218c504df637c4f03ca9e760842e1","url":"assets/ideal-img/7.82daa4e.244.png"},{"revision":"ffe0b722e2394200ea0d9e0d7ae41cf9","url":"assets/ideal-img/7.b2e8262.3808.png"},{"revision":"a467f9ae74fcc2e781a2e26cb53d18f2","url":"assets/ideal-img/7.dc4bb5c.1420.png"},{"revision":"3770550c5c44eae5cf1b39d32b4c9e34","url":"assets/ideal-img/8.07071e9.3808.png"},{"revision":"de0776865131f51eef08d1b8d27cc38e","url":"assets/ideal-img/8.3234395.494.png"},{"revision":"ce6852bd1cb57044481223b9a3241dfc","url":"assets/ideal-img/8.6a39944.2588.png"},{"revision":"b066d9e005e21e6663c7e2bcff0446ae","url":"assets/ideal-img/8.979f3f4.764.png"},{"revision":"a388ec42bc590efcc44520df79e121ee","url":"assets/ideal-img/8.c5eb2da.1332.png"},{"revision":"577f719545d87db1fed6a11fdfd7c069","url":"assets/ideal-img/8.ef16521.2546.png"},{"revision":"cb6785a1609d2c19581ed1f4f8c4c3bf","url":"assets/ideal-img/8.f058533.3808.png"},{"revision":"2b2d24133f88d37166311cd770a4059c","url":"assets/ideal-img/9-0.fde39e0.2016.png"},{"revision":"ef3a824ca6ca26ba203166af8af678a1","url":"assets/ideal-img/9-3.cc09b70.690.png"},{"revision":"dc14e41aa18f1d0e288da9d1a8ab290b","url":"assets/ideal-img/9-4.714393b.688.png"},{"revision":"39c6779698555ce1e1037b2b1b05a9c2","url":"assets/ideal-img/9-5.de35ce0.690.png"},{"revision":"e6b32a30a9eea0abca7ccf0348f9c8cb","url":"assets/ideal-img/9-6.24e6506.748.png"},{"revision":"289c0f60130e6ade2af57a1068927695","url":"assets/ideal-img/9-7.bf53a0e.764.png"},{"revision":"e0dea089bc955dbca5720feb3b036e14","url":"assets/ideal-img/9-8.ea2d247.742.png"},{"revision":"e19cd4bac321820e681dbdd7f5c637f3","url":"assets/ideal-img/9.1d1b460.2588.png"},{"revision":"e274a7f0207384dd06166e023ded00a8","url":"assets/ideal-img/9.2161684.2546.png"},{"revision":"bea9e656d29b1445982e9537fa218820","url":"assets/ideal-img/9.26f3ede.3808.png"},{"revision":"f8f3cf067f7612d7bf0f57f1c41b6b3f","url":"assets/ideal-img/9.587bf4b.2914.png"},{"revision":"85f63db5e30badf7631974a751bdcd39","url":"assets/ideal-img/9.8dd00f9.3808.png"},{"revision":"7cd87d594dc2615ff6980cd753e6ad48","url":"assets/ideal-img/9.f45c8df.659.png"},{"revision":"3f795fefb855cd601fc52606549be4c8","url":"assets/ideal-img/congratulatory.70f02c8.421.png"},{"revision":"75dd994b1d9afe8e3bf4988953928579","url":"assets/ideal-img/heart-with-hand.79cd5a3.421.png"},{"revision":"82fce3be5cbdda02f6bc357c29cc411f","url":"assets/ideal-img/hi-with-hand.db86a9a.421.png"},{"revision":"622bc3f083425af3c1d6ecf0f0fd197a","url":"assets/ideal-img/laptop.ed2b5b1.421.png"},{"revision":"1942cb3ae5b296e3c6fd144d5b666e6d","url":"assets/ideal-img/think.ed46ed1.421.png"},{"revision":"0bc6cfa8d7c426b0146b819cbf3560fe","url":"assets/ideal-img/thinking-with-clouds.d6e691c.421.png"},{"revision":"eac4365c2415f8e2cbce799187b826cd","url":"assets/ideal-img/thumbnail.140f334.1412.png"},{"revision":"8e1e7556772ef13875d4783ff5209307","url":"assets/ideal-img/thumbnail.6ba8d5c.2992.png"},{"revision":"dbb5594a31e47dfb1c7087b19cad9361","url":"assets/ideal-img/wink.f41f2ac.421.png"},{"revision":"0c2c84eeb312b69ea22e51cc64f974e1","url":"assets/images/1-0-7de8114550054a88d87c785e08cd4189.png"},{"revision":"8383412336b15e9bdb08ccc2598f7aec","url":"assets/images/1-0-f75fe1a908b75d861d9688753fb0ac44.png"},{"revision":"88a8c3854fe7732e9ac306e394d4c1d6","url":"assets/images/1-0ef72865d4bed156de72810131db00bc.png"},{"revision":"c3ba7f20b49061553ad1be97dfa5d422","url":"assets/images/1-1-a40554b7ee5e1de81e21aa62cebda6d2.png"},{"revision":"bd873a97a396146f90d4e8de39982a79","url":"assets/images/1-31e2bd63d5ea93567410af8ae8a4fc02.png"},{"revision":"610f375f96c47fde6b66412c2367ecf1","url":"assets/images/1-3683d5f4d44de4fb6835f584681a5a52.jpeg"},{"revision":"2cb7140eec7d0d7d9be749e43a8e8b82","url":"assets/images/1-3b75c626de2a03f9511283a12a40485b.png"},{"revision":"e6437323f77028d57616312ca2358e3c","url":"assets/images/1-4b12e3e5f076876168d696f616b007ab.png"},{"revision":"c2bc5a3962b2dfa04c9cf0715de77416","url":"assets/images/1-5458f2a4cded0c3f516fc818eaca2615.png"},{"revision":"e44ca94d8d18e2ff5a5fecd1b376561f","url":"assets/images/1-7389d5c0d50cb1c98b867367747fe403.png"},{"revision":"afcdbbec8e96d254f2d5db6a47aca9d8","url":"assets/images/1-9d4a8f0aeaf2f52005c9bd31f7bfe09d.png"},{"revision":"d0402ee0fc13faa90faaf5620f63d2a5","url":"assets/images/1-ae0bb3a34102535ca119db2af10591f1.png"},{"revision":"0ceda8ee98eb062a0438f37ddf06f3eb","url":"assets/images/1-c95b520a3ef910cb56cbde4e83bb511c.png"},{"revision":"fddd23e9629118eac187ce0875e52140","url":"assets/images/10-08b1229c11559439486a767e3499a50c.png"},{"revision":"7c2037d2e1adac899be6cbd486683ae8","url":"assets/images/10-9b3ade8f0de811ce50ad4b7f117304b3.png"},{"revision":"1b2f7c7fffaae5fbf3e9dcbef559628f","url":"assets/images/10-a793c7ed71c068f0243f3cf8b90c0571.png"},{"revision":"b10adc5074564c67857510e791836610","url":"assets/images/10-bdb772f0e373e16260f8a83e1ea22dfa.png"},{"revision":"51774a5f212b3685da616d1d77590bfd","url":"assets/images/10-c75b4bce8f01b7bae6ab4c55dc7268b5.png"},{"revision":"7aa8a0cce81ee6d2d43289501338eca0","url":"assets/images/10-cbdfb937baf218f52f122517583eacdb.png"},{"revision":"08d388d2d2697ff56996fb3c9f495129","url":"assets/images/11-c34d810bc18e3b32e16d201465264c01.png"},{"revision":"8cd16882beea73a8fe256b841a268b1f","url":"assets/images/11-d36cf9c1bdecc682d2606ecef16bb922.png"},{"revision":"c91f2c99a319b733967772c52f18405f","url":"assets/images/11-d532db6d453e84b732dfd672f265fdf4.png"},{"revision":"87e306f0eb40cda77d10fccf932785f5","url":"assets/images/11-df547e7acec1f7a5a372cc7420d4b7ef.png"},{"revision":"f362bc984b06c42026793466abf67cf7","url":"assets/images/12-13558c0cca4a64bab2cb41568907a06e.png"},{"revision":"4dbaf21e9763745e39c5df702f06880b","url":"assets/images/12-89f3d8b3e3a2e0977006d73f8dad4701.png"},{"revision":"d903584cee63760b0033971061ce209f","url":"assets/images/12-b352beec944eedd92c9b289714bc2204.png"},{"revision":"049ca946cfe71a85d199a0d607bab55d","url":"assets/images/12-d1b2d6977e3a60fc66ff30a94946d426.png"},{"revision":"4d0b5e4a8c3f2cc37d698597a031de8a","url":"assets/images/13-6851f78dbe0da61cd21b82d13e4f09f5.png"},{"revision":"d341fa4b345f8a112af728b7be82951a","url":"assets/images/13-7151174751962f3be371d0892e435c07.png"},{"revision":"286e33bbb96e93fe54ba0ce80d796579","url":"assets/images/13-f5c2c8e4df4e5063d16c259378c3fdc2.png"},{"revision":"1ec74942e5ab999e6f6cf807e3696d26","url":"assets/images/14-00ac0334350702d68b49879e9c43ff42.png"},{"revision":"1824b44bc770d1e25dd900535b8699e3","url":"assets/images/14-16ffb4dd659ee59db342fdc5893e302b.png"},{"revision":"b856f61569d670105037914571f27bf2","url":"assets/images/14-bc35d446bb66100ca3b50150d1b855df.png"},{"revision":"05e1586c292dddddbf7ce85571d88f24","url":"assets/images/15-4cf5b4b590579081517add5045b65913.png"},{"revision":"bf3d47d5066433effece4064e5d7f0df","url":"assets/images/15-571f7e86adb9aa2f1eaa40aed86357ce.png"},{"revision":"b877ac8b995a21a15766c62715a57808","url":"assets/images/16-0-930b0b8d73d137e23461d63c5357f2d4.png"},{"revision":"6800829bd66ef3c316dcfd19c8c588d5","url":"assets/images/16-1-644cedea3d90aea1a2ce5db8bd7d1b46.png"},{"revision":"245480b6642b929706ea68bb312f16fa","url":"assets/images/16-2-b41348d8a8724f2519f561982b2ff977.png"},{"revision":"ca2d3171c8b88ef7126b16631fb3bc44","url":"assets/images/16-e309d79d4e38082ebc19286a32729e84.png"},{"revision":"67503c5d49087f5b3a1981ad656f8eb4","url":"assets/images/17-0-333becc0dd143d403a54e35976fb6590.png"},{"revision":"46c12405dba51cdcaf9b84c1ac583b42","url":"assets/images/17-0-a608b05f7b34db25b93725c22c78da43.png"},{"revision":"ddaa6e3a3cdfdc652dc9c3e584dbfcb4","url":"assets/images/17-1-9162a15c075852ee439332d6cc0647cd.png"},{"revision":"e4cd4e6e9dab3f446dbf5ded3c5aab78","url":"assets/images/17-1-c4cf6498c42cdcddaad489918721b4f2.png"},{"revision":"6fb97b017cfde0007dc53950cb491883","url":"assets/images/17-2-a008b7fab7323742645780f6165bc4b3.png"},{"revision":"7d2946bad84e755c55c4310f7ccb1534","url":"assets/images/17-3-3dea5857af8f34259fadd79c610a9dbb.png"},{"revision":"a2a2a1f61f767e5e9718856c6376ce8f","url":"assets/images/18-0-5156b296a7a8f24c139c8dd9a59b5203.png"},{"revision":"eafdab0016ecdc99a0262085b1f6e9cc","url":"assets/images/18-029620d8f3754f6bdc53e9c8ac562cba.png"},{"revision":"9bc4de7916707200f248662597c21f30","url":"assets/images/18-1-edd8e4054b49109645d851de87b18bb7.png"},{"revision":"1bcbb5af933699ef85e5c3e61404ebfd","url":"assets/images/19-3209581f14fcd88c3988d6938bef0bd2.png"},{"revision":"8762e1c2891425adf4b57f52cb7b7067","url":"assets/images/19-5cc4fe3bb8a3200b526a71c0cfeada29.png"},{"revision":"77f942901194a243a73c3cbd30bdce40","url":"assets/images/2-0-bdf508980341120bed250a75cee39d98.png"},{"revision":"42d0f1b4e6714f3940bc23f41c547eb4","url":"assets/images/2-0cc4d05994d3722d644f9b4fe7a91ad4.png"},{"revision":"218a70927c2f1123785597f15582ed5a","url":"assets/images/2-1-5c9b902eea0b7460143f5e699388ff58.png"},{"revision":"58d48f43973a12bfeb8d0935ba790a15","url":"assets/images/2-43e565269959b718c7e0168f3ab516ba.png"},{"revision":"6e7bc13f386c737ed9c0b1b3807374a4","url":"assets/images/2-463384529126684420489a6b2fb28dd6.png"},{"revision":"00d187e9363e11ac55de2e6b1c1cad7c","url":"assets/images/2-67d56e10c31128bd69e066ff216d644e.png"},{"revision":"7af7290a37e6b0ef1abf09aa6c7c4cb5","url":"assets/images/2-6d0c63ed6d6b0a9e589c1696efa24ac8.png"},{"revision":"f3ef1fdc376e125b62cbd5feadd57f7d","url":"assets/images/2-8efa80b676462ea55a367296e999ee0c.png"},{"revision":"b54eef5e2d9489ed7f575e6b6c76ed37","url":"assets/images/2-9877e218150d6b7bb3595331d45c52fc.png"},{"revision":"e1f225bdee96d2cbc7c1b93c77667119","url":"assets/images/2-a9efc978a568e9c8f46f514a9a039e7e.png"},{"revision":"1e53c175168eadadc280bcbb23dfb0e3","url":"assets/images/2-cc925394ef2ec5761749ae25c33f519c.png"},{"revision":"8bbeb1bfdbcfb6892c28960cd028b93f","url":"assets/images/2-fea220931f35c15b335a30020923629e.png"},{"revision":"f1f1f1d3532e6f3fe106aa08da2442c9","url":"assets/images/20-0d07b2a0c23ee6289f7b61513295e2b0.png"},{"revision":"228ffd52870df3168923204a46519917","url":"assets/images/20-fac654979ca3677663a1d7506d72d64f.png"},{"revision":"3a7fc1f14d7d7f94ce8fe0b386f55da9","url":"assets/images/21-3351d57fc742f2b96c94f27c0da871a0.png"},{"revision":"337bfd8906a846b2baad2fb37920a29d","url":"assets/images/21-80c2a3719ff5282713cad22ea1702f01.png"},{"revision":"b8abb55768b6a6921c211a5e0a330c55","url":"assets/images/22-3d3fcd162ec03b1ffa11bf7ba3e24021.png"},{"revision":"6fcfdbae603cf55508c59cd55664dd16","url":"assets/images/22-b476be23aaff9583d2881c4cedfbbef5.png"},{"revision":"fe552ec35f45176e86f661c0d577b5f0","url":"assets/images/23-0800354b4517bf58db9608c879978d11.png"},{"revision":"254bae786fe955eb85149f313967c4a6","url":"assets/images/23-6c8b0a0ad79f27de090c6a9862b8cbd4.png"},{"revision":"665dbd8a36b235d7c842783b89ab7838","url":"assets/images/24-3e14fab9a0eeadb0676fea1d6b593ed7.png"},{"revision":"ffc007c14d9e1d9d14a36c0af364cf57","url":"assets/images/24-81775ba9c3771d1a85dfceda3fe89209.png"},{"revision":"298abbfe771d22d1920c2c1444e6bb3a","url":"assets/images/25-e5a2ad3753a7444332803d873c357ada.png"},{"revision":"b4e9763b026b070af5c2b6edfec39d20","url":"assets/images/26-972c6962dad547ab02faa8e2b99adc9e.png"},{"revision":"5f7166ab0da63bf598758a6545324c24","url":"assets/images/27-9895d686328d1be100293b9d93ed3913.png"},{"revision":"721a277579b909282ac758506537b7f2","url":"assets/images/28-a29f1d766698a473fce41a1e39691f79.png"},{"revision":"d90bbd32856313b47c6c76e06b9b1de4","url":"assets/images/29-475bcaba232fcdd983feb62943ae1c00.png"},{"revision":"aeb2e6de6ef9e1a1a9195e290bf027e0","url":"assets/images/3-0c95f525e0dc85a24e126c2c34973485.png"},{"revision":"982e9d95b8b04e4a44359d7309636669","url":"assets/images/3-2a950acd7e22b881c0e5fb606cc2499f.png"},{"revision":"4e8c97a7f3396d70c5df4acff2557850","url":"assets/images/3-3933ff3f70fc419a6016f33f8dc423ee.png"},{"revision":"76e008b4dbec18a892bfc86df9da8a59","url":"assets/images/3-7f72c415d364453b35a5271e410724a1.png"},{"revision":"f342a16c1079af6e344cfa210696a92a","url":"assets/images/3-be29b723fc5cad9504af03840afb9825.png"},{"revision":"6b3fb1829dd24a1209f69462a8a06ad0","url":"assets/images/3-ef7ca760afd3c3ffbf78056b9c71e7ef.png"},{"revision":"9a6b20271878826c430f944f56dcc7fe","url":"assets/images/3-f26906039e0018b721381e7fe61474d9.png"},{"revision":"fac70e4c7b6da60600e96c5452c7d1bc","url":"assets/images/3-fb86283497bf9581704dd1296e22524e.png"},{"revision":"42ed29f097f8bb07872d13b6092a5d04","url":"assets/images/30-93f157b7d6ce74f743dec92ff1317aee.png"},{"revision":"99deb4dce7562950c5ddf7c0ea8548e3","url":"assets/images/4-1137914a7ad94f70ddd9ea62f82ddfa3.png"},{"revision":"8a2bbc502e2ee31b7f12809548f56ed5","url":"assets/images/4-37e7d5a2573336e52b2660c48ec2e5c8.png"},{"revision":"f78d131dad04ce7efd3101a0ef6d9e01","url":"assets/images/4-410faf5404107f566ac734128b8d6897.png"},{"revision":"5efa1ff72ed2828068a74bc96a6349b4","url":"assets/images/4-4b1fa124c50b7494436c327ac1176fd7.png"},{"revision":"b6344852443a5367b691ac203c97e7c0","url":"assets/images/4-8796192b61ef0bc9a6c11bb5c530ad52.png"},{"revision":"1571d2b18edd35b754c54c0d30eea5ab","url":"assets/images/4-969e02171db65ab53e9c29e8e917358f.png"},{"revision":"02770eb58e5801fb3c03c3813162455d","url":"assets/images/4-a65f0b0d5498cfab649bd42e7d9b6af4.png"},{"revision":"7807efa497ed28a7025cc916b979a7a8","url":"assets/images/4-fb1e6895fdde1724044c2a220ddb31b8.png"},{"revision":"69ae4eee0b92df27c9c6ce27faaaaf07","url":"assets/images/5-0-a6b64a891de1ab5a2ff6adf6ae751454.png"},{"revision":"f11b3b952382cfc54378b0e33b02b9ab","url":"assets/images/5-0109dd94fa660899881637eda26b0c4b.png"},{"revision":"c8abd32905364af889bf81be032be1d9","url":"assets/images/5-049a6b186fae3acf0e1f8a72395e651d.png"},{"revision":"503565da8108bcd5d608b564f8e282c8","url":"assets/images/5-1-e1aaa7e9be699ec0267206de63e4c607.png"},{"revision":"49c553f2d8af39d5edda96a68978d830","url":"assets/images/5-2-a103f786d4c53f1a97ca792fdae73c21.png"},{"revision":"6ed1f53155399d29287e6033bc4b2dc6","url":"assets/images/5-3d0bdbf77b3bcc05bc757c63bdf0658b.png"},{"revision":"680f29855417c86407b58564b35faa43","url":"assets/images/5-95cbcdba1b16c6274e847364a1ef6885.png"},{"revision":"0400f73145cb3c701b9f4747a23e1fc9","url":"assets/images/5-b60933a94bf2cf49b2af8d995bbb7f38.png"},{"revision":"c81543ff2b6c5a6f78c58c86ef6a54f4","url":"assets/images/5-e1bf6d8c823b0c613bdb891f66e8a306.png"},{"revision":"f0c381e3861fb87cd8c2163581ec3ecd","url":"assets/images/5-f8e601c430da92d90cd93c2016da7bf4.png"},{"revision":"1b6e49e68626076a44e776df444017ec","url":"assets/images/6-05f39f0c1f570db072d5812d000b1c0f.png"},{"revision":"6a9e70037ee072725c1adc769f80ea66","url":"assets/images/6-1a9850d192d63540cfafb134be512218.png"},{"revision":"c1a8ac345bddc8a23e4af352f64ef9b0","url":"assets/images/6-5dd5b7dd9d84ee4bd75e013ba5ee5a9a.png"},{"revision":"c94b2f01f75a1e450c5bd06ffcadf706","url":"assets/images/6-62fd342672e18b3239c783a4a0ce47b2.png"},{"revision":"9d694e0a0a6f5191db2b8ee6842a01ab","url":"assets/images/6-64c8313f6008913bfd3f5ce4a92209d8.png"},{"revision":"5112ac1267f9a814c521c035f532dea2","url":"assets/images/6-ba8ba86fc47fdbb13b6478886046c3c1.png"},{"revision":"b6531b049ef3821b90f9a30d385943a1","url":"assets/images/6-ec8b5f3da0019ef8615225f49a751e34.png"},{"revision":"ea24f6714ecbc676f1d1cf29de227e22","url":"assets/images/6-f3c496a1f900f4dd53c6be46ddb0d79a.png"},{"revision":"0ae305d5f10e4e84526636f712c7cc26","url":"assets/images/7-0-0563aaa791d9ffb5603a562fbb5b3a11.png"},{"revision":"b07ff330daa04aaf3c18118d4f458dec","url":"assets/images/7-045f4312932dfc10b832b55d0d54bcd2.png"},{"revision":"7c69fdcceea86124f1cf0021074b2b05","url":"assets/images/7-1-ebff37a089c87f5d1723b0a6b7e70364.png"},{"revision":"563f4c3318e86a16f2a04223a01424d2","url":"assets/images/7-2-28bf5cc6d8cfcb645377d84ee7f872a7.png"},{"revision":"58c10dcd95814ce2f76f7c6e03202ba6","url":"assets/images/7-3-18fb7e4c5b88c5197e3533c2304ce482.png"},{"revision":"6c6e3271e1ad3e0f5ffa70d5b28fc042","url":"assets/images/7-35ac0e2ff72822d6d5774c3b400d09f3.png"},{"revision":"6f58022236ab2c1d151dfba532061bff","url":"assets/images/7-46d5cf75b611c3a1a6e90c92a551a001.png"},{"revision":"a4c1355cc249c855cb4fc4b9fca0e45b","url":"assets/images/7-46e2d786ba870a84e6824b2885d12a06.png"},{"revision":"73f281c5758b5fbe47d5c49eebb50e41","url":"assets/images/7-7ea6b9141697c4b7ca782a39d9116667.png"},{"revision":"7511d88b216f28d6b1b7c599fd9d352f","url":"assets/images/7-924fd3bf7498123cd45461b71f396824.png"},{"revision":"a432b1521feb4b6b04c3f3a3d7fb9404","url":"assets/images/8-133986620a5311b82896bb5dc3237bfe.png"},{"revision":"33e773f7757f77fcf8f3af06eb7b8c74","url":"assets/images/8-33eabbeb432480a77fb63d5a04230066.png"},{"revision":"b60b9cc404fed5761fb6066cbd4c0aa1","url":"assets/images/8-b30f855fefe36609fe254ebd3d457e52.png"},{"revision":"50143c7856f005e846c4329f82c3a804","url":"assets/images/8-d06dfc47c5853a9ddadd85048e59ff37.png"},{"revision":"e31da7dcb1800e8ba4a04e373c01bd79","url":"assets/images/8-e5a26ef5c424139a1527e142c270b499.png"},{"revision":"baccdc201875f9b853f8d8838e7d058f","url":"assets/images/8-e84a9150645a0633c2d9d3bc8e87ef21.png"},{"revision":"1505010ea80d0bfb4ea2bb1510f53ecd","url":"assets/images/8-f8a8940fc184fcb5952e5299ac8e7153.png"},{"revision":"75858e6a804630bc4f8bd4161f438201","url":"assets/images/9-0-8af745990b2420cc3fc21d65c4b014ee.png"},{"revision":"f92434061c0984b6966851fd20e31778","url":"assets/images/9-1377f3de970b988e9ece6903c43e14eb.png"},{"revision":"7a19ed8c12817f88b3b9febb28dea265","url":"assets/images/9-14085f144b37110420b7f2e784fd09d4.png"},{"revision":"7b8048aefff72a80cc39deac896285ab","url":"assets/images/9-25c833cbf831a94077f60576059de30b.png"},{"revision":"9bac237e64a4461d0a11c8fd47e76b6a","url":"assets/images/9-3-5c0d8aad0140d68919275ce20106f439.png"},{"revision":"4844fcdac09376b4ec7572e9524fa7f9","url":"assets/images/9-4-bf64294c505802347d9b98b4b8466f4e.png"},{"revision":"8e6b6ceba4faf3628bf14f1f721d602d","url":"assets/images/9-5-900beb3011e70b99115fd5d7f81c9bf3.png"},{"revision":"0dbbcd86472dac6d2693f6cc3aa02448","url":"assets/images/9-5977ec6ff17d9a823ce556ba2369a945.png"},{"revision":"b68ba658d100b84d1657e3c86e983131","url":"assets/images/9-6-4eaaa84dc0018f26b99903bdda8cb0a7.png"},{"revision":"74744a7bd51bd3ad57597fbd254feacb","url":"assets/images/9-7-f4bf7162aeb77c629801e8657e2b9298.png"},{"revision":"eeb31349d8434ca6f8e471b592293c1d","url":"assets/images/9-8-baed4ab0688e49ad0c7e9d7993c0157b.png"},{"revision":"3980f0ea13a2daea2d3e9c73e5ae4c66","url":"assets/images/9-ba2a98ff7273dfbb555c36bff28d141f.png"},{"revision":"b0666a8eca716764a54535b3e026ef25","url":"assets/images/9-f34803c329b371bab54df9c057b82459.png"},{"revision":"514de7099dbe4f3bd149029a9b2f4f5c","url":"assets/images/congratulatory-e4827b93c001a44bba9f67ccd5d48915.png"},{"revision":"a9b388e611450680b856c724b39d2451","url":"assets/images/heart-with-hand-65b9b1439ab4eee49fc3c1c574c0797e.png"},{"revision":"26df447c41afd7bcffcf4c677e4bf56f","url":"assets/images/hi-d93720933c608f6178fbb3d17ea4256b.gif"},{"revision":"136c3c0acd8307adf81d71250893bc4b","url":"assets/images/hi-with-hand-03cd635d2f249a4ed2ebdc7b6e654878.png"},{"revision":"666cacaf247180c27ee0917a6346c36a","url":"assets/images/laptop-23009f89e958f8162c97b9401c1df62e.png"},{"revision":"b3380d6a9c34ce409de7c8b035b9185a","url":"assets/images/think-987d9b0f671085a4452dfce6d7ab06b6.png"},{"revision":"26a7d9a71c52ec57ad15cda467987603","url":"assets/images/thinking-with-clouds-95c00ab9b6b862b1a2cf27c21bd5d357.png"},{"revision":"385338bcc0c97d332f9e41b70ed83aa2","url":"assets/images/thumbnail-727295aac488af74fd01704fc257ab8c.png"},{"revision":"03a7ff0361001edec9d6948c39788233","url":"assets/images/thumbnail-a0ac33d4ae09aa8671de2cddff3c3e96.png"},{"revision":"762e78fec76b42a021f628c3c82916cc","url":"assets/images/wink-6b87a81544eb21a9a38e9a69318b313d.png"},{"revision":"33b95f46e7b2adf77d6adfd7d8fb7715","url":"icons/discord.svg"},{"revision":"24370269f0199fb037ad7e1ea68fbef4","url":"icons/email.svg"},{"revision":"181e36681d1d1abd2dfb7b892d4965c0","url":"icons/github-black.svg"},{"revision":"bdd98aa471b80d41fcd7851ebd2ff178","url":"icons/github-white.svg"},{"revision":"160aa99127df2aa44ad20c645113092f","url":"icons/github.svg"},{"revision":"5f6e12f22e1162f7e955a15b9ec951c6","url":"icons/instagram.svg"},{"revision":"3547072db123e3816cb81fad7cf60849","url":"icons/linkedin.svg"},{"revision":"21fc3c16da18d81a6bfcbc8c7b69de1b","url":"icons/stackoverflow.svg"},{"revision":"6d7bd94fa4155880ba54b853a091d14c","url":"icons/twitter.svg"},{"revision":"d81b626ab640b7f06b60af2f5c77614d","url":"icons/youtube.svg"},{"revision":"26df447c41afd7bcffcf4c677e4bf56f","url":"img/hi.gif"},{"revision":"83d7139d1879e06d8c3356caf8cf2a9f","url":"img/icons/icon-144x144.png"},{"revision":"0854c4edb08a1638f3cd92d4a99169fd","url":"img/icons/icon-152x152.png"},{"revision":"b78bc4ea0d105017b425669ab1285392","url":"img/icons/icon-192x192.png"},{"revision":"12b58d7f1ec335c75cf60a7f75cc5bc2","url":"img/icons/icon-72x72.png"},{"revision":"9bc4ed413376b6195d9da00430fd9891","url":"img/icons/icon-96x96.png"},{"revision":"7e726cc36f87ec5a3fe5e61b0bdc38c9","url":"img/logo.png"},{"revision":"514de7099dbe4f3bd149029a9b2f4f5c","url":"img/my-avatar-emoji/congratulatory.png"},{"revision":"a9b388e611450680b856c724b39d2451","url":"img/my-avatar-emoji/heart-with-hand.png"},{"revision":"136c3c0acd8307adf81d71250893bc4b","url":"img/my-avatar-emoji/hi-with-hand.png"},{"revision":"666cacaf247180c27ee0917a6346c36a","url":"img/my-avatar-emoji/laptop.png"},{"revision":"b3380d6a9c34ce409de7c8b035b9185a","url":"img/my-avatar-emoji/think.png"},{"revision":"26a7d9a71c52ec57ad15cda467987603","url":"img/my-avatar-emoji/thinking-with-clouds.png"},{"revision":"762e78fec76b42a021f628c3c82916cc","url":"img/my-avatar-emoji/wink.png"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map