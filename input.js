//Fri Apr 25 2025 14:23:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var r = ["url"];
var s = undefined;
function c(_0x3c2bc1) {
  return o(_0x3c2bc1) || n(_0x3c2bc1) || h(_0x3c2bc1) || e();
}
function e() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(_0x32d7ea) {
  if ("undefined" != typeof Symbol && null != _0x32d7ea[Symbol.iterator] || null != _0x32d7ea["@@iterator"]) {
    return Array.from(_0x32d7ea);
  }
}
function o(_0x155f06) {
  if (Array.isArray(_0x155f06)) {
    return f(_0x155f06);
  }
}
function j(_0x134096) {
  return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x377478) {
    return typeof _0x377478;
  } : function (_0x4691a1) {
    return _0x4691a1 && "function" == typeof Symbol && _0x4691a1.constructor === Symbol && _0x4691a1 !== Symbol.prototype ? "symbol" : typeof _0x4691a1;
  })(_0x134096);
}
function i(_0x44c58b, _0x2a2d90) {
  if (null == _0x44c58b) {
    return {};
  }
  var _0x44f7ca;
  var _0xb6f8db = a(_0x44c58b, _0x2a2d90);
  if (Object.getOwnPropertySymbols) {
    for (var _0x44c11b = Object.getOwnPropertySymbols(_0x44c58b), _0x4a65c7 = 0; _0x4a65c7 < _0x44c11b.length; _0x4a65c7++) {
      _0x44f7ca = _0x44c11b[_0x4a65c7];
      0 <= _0x2a2d90.indexOf(_0x44f7ca) || Object.prototype.propertyIsEnumerable.call(_0x44c58b, _0x44f7ca) && (_0xb6f8db[_0x44f7ca] = _0x44c58b[_0x44f7ca]);
    }
  }
  return _0xb6f8db;
}
function a(_0x3d5837, _0x5ebddb) {
  if (null == _0x3d5837) {
    return {};
  }
  for (var _0x3aecf8, _0x4aa831 = {}, _0x4578fd = Object.keys(_0x3d5837), _0x1e9e9d = 0; _0x1e9e9d < _0x4578fd.length; _0x1e9e9d++) {
    _0x3aecf8 = _0x4578fd[_0x1e9e9d];
    0 <= _0x5ebddb.indexOf(_0x3aecf8) || (_0x4aa831[_0x3aecf8] = _0x3d5837[_0x3aecf8]);
  }
  return _0x4aa831;
}
function u(_0x360474, _0x1b9398) {
  var _0x48b777;
  var _0x499841;
  var _0x23531f;
  var _0x3b700d;
  var _0x3ca979 = "undefined" != typeof Symbol && _0x360474[Symbol.iterator] || _0x360474["@@iterator"];
  if (_0x3ca979) {
    _0x499841 = !(_0x48b777 = true);
    return {
      s: function () {
        _0x3ca979 = _0x3ca979.call(_0x360474);
      },
      n: function () {
        var _0x1f433c = _0x3ca979.next();
        _0x48b777 = _0x1f433c.done;
        return _0x1f433c;
      },
      e: function (_0x1fedbe) {
        _0x499841 = true;
        _0x23531f = _0x1fedbe;
      },
      f: function () {
        try {
          _0x48b777 || null == _0x3ca979.return || _0x3ca979.return();
        } finally {
          if (_0x499841) {
            throw _0x23531f;
          }
        }
      }
    };
  }
  if (Array.isArray(_0x360474) || (_0x3ca979 = h(_0x360474)) || _0x1b9398 && _0x360474 && "number" == typeof _0x360474.length) {
    _0x3ca979 && (_0x360474 = _0x3ca979);
    _0x3b700d = 0;
    return {
      s: _0x1b9398 = function () {},
      n: function () {
        return _0x3b700d >= _0x360474.length ? {
          done: true
        } : {
          done: false,
          value: _0x360474[_0x3b700d++]
        };
      },
      e: function (_0x89b492) {
        throw _0x89b492;
      },
      f: _0x1b9398
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function T() {
  T = function () {
    return _0x2fd306;
  };
  var _0xe1858;
  var _0x2fd306 = {
    wrap: _0x8d4386,
    isGeneratorFunction: function (_0x4d2fc2) {
      _0x4d2fc2 = "function" == typeof _0x4d2fc2 && _0x4d2fc2.constructor;
      return !!_0x4d2fc2 && (_0x4d2fc2 === _0x5f1243 || "GeneratorFunction" === (_0x4d2fc2.displayName || _0x4d2fc2.name));
    },
    mark: function (_0x1f3f6b) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x1f3f6b, _0x659e4a) : (_0x1f3f6b.__proto__ = _0x659e4a, _0x230095(_0x1f3f6b, _0x14450d, "GeneratorFunction"));
      _0x1f3f6b.prototype = Object.create(_0xddd469);
      return _0x1f3f6b;
    },
    awrap: function (_0x538091) {
      return {
        __await: _0x538091
      };
    },
    AsyncIterator: _0x5b73f3,
    async: function (_0x20dd03, _0x1d705a, _0x36ae82, _0x3c5951, _0x200a21) {
      undefined === _0x200a21 && (_0x200a21 = Promise);
      var _0x36adb2 = new _0x5b73f3(_0x8d4386(_0x20dd03, _0x1d705a, _0x36ae82, _0x3c5951), _0x200a21);
      return _0x2fd306.isGeneratorFunction(_0x1d705a) ? _0x36adb2 : _0x36adb2.next().then(function (_0x3cf7b0) {
        return _0x3cf7b0.done ? _0x3cf7b0.value : _0x36adb2.next();
      });
    }
  };
  var _0x312b66 = Object.prototype;
  var _0x5f3c25 = _0x312b66.hasOwnProperty;
  var _0x3d59a9 = Object.defineProperty || function (_0x3a3ad4, _0x324cef, _0x45e7d6) {
    _0x3a3ad4[_0x324cef] = _0x45e7d6.value;
  };
  var _0x3c1dd7 = "function" == typeof Symbol ? Symbol : {};
  var _0x24d855 = _0x3c1dd7.iterator || "@@iterator";
  var _0x391c56 = _0x3c1dd7.asyncIterator || "@@asyncIterator";
  var _0x14450d = _0x3c1dd7.toStringTag || "@@toStringTag";
  function _0x230095(_0x119866, _0x56f5f9, _0x49f176) {
    Object.defineProperty(_0x119866, _0x56f5f9, {
      value: _0x49f176,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return _0x119866[_0x56f5f9];
  }
  try {
    _0x230095({}, "");
  } catch (_0x3efb3a) {
    _0x230095 = function (_0x8d08db, _0x504a17, _0x19388c) {
      return _0x8d08db[_0x504a17] = _0x19388c;
    };
  }
  function _0x8d4386(_0xc77708, _0x412cc3, _0x2167a9, _0x10f36c) {
    var _0x479878;
    var _0x577880;
    var _0x987d9c;
    var _0x4e2e6e;
    var _0x412cc3 = _0x412cc3 && _0x412cc3.prototype instanceof _0x363783 ? _0x412cc3 : _0x363783;
    var _0x412cc3 = Object.create(_0x412cc3.prototype);
    var _0x10f36c = new _0x35d66a(_0x10f36c || []);
    _0x3d59a9(_0x412cc3, "_invoke", {
      value: (_0x479878 = _0xc77708, _0x577880 = _0x2167a9, _0x987d9c = _0x10f36c, _0x4e2e6e = _0x31b027, function (_0x315740, _0x234aa3) {
        if (_0x4e2e6e === _0x309545) {
          throw new Error("Generator is already running");
        }
        if (_0x4e2e6e === _0x1b6c24) {
          if ("throw" === _0x315740) {
            throw _0x234aa3;
          }
          return {
            value: _0xe1858,
            done: true
          };
        }
        for (_0x987d9c.method = _0x315740, _0x987d9c.arg = _0x234aa3;;) {
          var _0x35be33 = _0x987d9c.delegate;
          if (_0x35be33) {
            _0x35be33 = function _0x2f43c6(_0x4715cd, _0x75ff4c) {
              var _0x1749f9 = _0x75ff4c.method;
              var _0x217636 = _0x4715cd.iterator[_0x1749f9];
              if (_0x217636 === _0xe1858) {
                _0x75ff4c.delegate = null;
                "throw" === _0x1749f9 && _0x4715cd.iterator.return && (_0x75ff4c.method = "return", _0x75ff4c.arg = _0xe1858, _0x2f43c6(_0x4715cd, _0x75ff4c), "throw" === _0x75ff4c.method) || "return" !== _0x1749f9 && (_0x75ff4c.method = "throw", _0x75ff4c.arg = new TypeError("The iterator does not provide a '" + _0x1749f9 + "' method"));
                return _0x542887;
              }
              _0x1749f9 = _0x275e5a(_0x217636, _0x4715cd.iterator, _0x75ff4c.arg);
              if ("throw" === _0x1749f9.type) {
                _0x75ff4c.method = "throw";
                _0x75ff4c.arg = _0x1749f9.arg;
                _0x75ff4c.delegate = null;
                return _0x542887;
              }
              _0x217636 = _0x1749f9.arg;
              return _0x217636 ? _0x217636.done ? (_0x75ff4c[_0x4715cd.resultName] = _0x217636.value, _0x75ff4c.next = _0x4715cd.nextLoc, "return" !== _0x75ff4c.method && (_0x75ff4c.method = "next", _0x75ff4c.arg = _0xe1858), _0x75ff4c.delegate = null, _0x542887) : _0x217636 : (_0x75ff4c.method = "throw", _0x75ff4c.arg = new TypeError("iterator result is not an object"), _0x75ff4c.delegate = null, _0x542887);
            }(_0x35be33, _0x987d9c);
            if (_0x35be33) {
              if (_0x35be33 === _0x542887) {
                continue;
              }
              return _0x35be33;
            }
          }
          if ("next" === _0x987d9c.method) {
            _0x987d9c.sent = _0x987d9c._sent = _0x987d9c.arg;
          } else {
            if ("throw" === _0x987d9c.method) {
              if (_0x4e2e6e === _0x31b027) {
                throw _0x4e2e6e = _0x1b6c24, _0x987d9c.arg;
              }
              _0x987d9c.dispatchException(_0x987d9c.arg);
            } else {
              "return" === _0x987d9c.method && _0x987d9c.abrupt("return", _0x987d9c.arg);
            }
          }
          _0x4e2e6e = _0x309545;
          _0x35be33 = _0x275e5a(_0x479878, _0x577880, _0x987d9c);
          if ("normal" === _0x35be33.type) {
            if (_0x4e2e6e = _0x987d9c.done ? _0x1b6c24 : _0xaebf5, _0x35be33.arg === _0x542887) {
              continue;
            }
            return {
              value: _0x35be33.arg,
              done: _0x987d9c.done
            };
          }
          "throw" === _0x35be33.type && (_0x4e2e6e = _0x1b6c24, _0x987d9c.method = "throw", _0x987d9c.arg = _0x35be33.arg);
        }
      })
    });
    return _0x412cc3;
  }
  function _0x275e5a(_0x41582e, _0x5efc12, _0x2c72bb) {
    try {
      return {
        type: "normal",
        arg: _0x41582e.call(_0x5efc12, _0x2c72bb)
      };
    } catch (_0x1e52e7) {
      return {
        type: "throw",
        arg: _0x1e52e7
      };
    }
  }
  var _0x31b027 = "suspendedStart";
  var _0xaebf5 = "suspendedYield";
  var _0x309545 = "executing";
  var _0x1b6c24 = "completed";
  var _0x542887 = {};
  function _0x363783() {}
  function _0x5f1243() {}
  function _0x659e4a() {}
  var _0x3c1dd7 = {};
  _0x230095(_0x3c1dd7, _0x24d855, function () {
    return this;
  });
  var _0x128633 = Object.getPrototypeOf;
  var _0x128633 = _0x128633 && _0x128633(_0x128633(_0x16e308([])));
  _0x128633 && _0x128633 !== _0x312b66 && _0x5f3c25.call(_0x128633, _0x24d855) && (_0x3c1dd7 = _0x128633);
  _0x659e4a.prototype = _0x363783.prototype = Object.create(_0x3c1dd7);
  var _0xddd469 = _0x659e4a.prototype;
  function _0x18c4d7(_0x32b352) {
    ["next", "throw", "return"].forEach(function (_0x5e9a8a) {
      _0x230095(_0x32b352, _0x5e9a8a, function (_0x267dd9) {
        return this._invoke(_0x5e9a8a, _0x267dd9);
      });
    });
  }
  function _0x5b73f3(_0x2a6f23, _0x4ef4e8) {
    var _0x100ee8;
    _0x3d59a9(this, "_invoke", {
      value: function (_0x5d8c71, _0x1070d2) {
        function _0x1b4fff() {
          return new _0x4ef4e8(function (_0x2e0e36, _0x435d81) {
            !function _0x553a92(_0x17d285, _0x5831da, _0x4f4986, _0x5d5ec6) {
              var _0x4978f5;
              var _0x17d285 = _0x275e5a(_0x2a6f23[_0x17d285], _0x2a6f23, _0x5831da);
              if ("throw" !== _0x17d285.type) {
                return (_0x5831da = (_0x4978f5 = _0x17d285.arg).value) && "object" == j(_0x5831da) && _0x5f3c25.call(_0x5831da, "__await") ? _0x4ef4e8.resolve(_0x5831da.__await).then(function (_0xce38f4) {
                  _0x553a92("next", _0xce38f4, _0x4f4986, _0x5d5ec6);
                }, function (_0x8cb967) {
                  _0x553a92("throw", _0x8cb967, _0x4f4986, _0x5d5ec6);
                }) : _0x4ef4e8.resolve(_0x5831da).then(function (_0x42f221) {
                  _0x4978f5.value = _0x42f221;
                  _0x4f4986(_0x4978f5);
                }, function (_0x1feee5) {
                  return _0x553a92("throw", _0x1feee5, _0x4f4986, _0x5d5ec6);
                });
              }
              _0x5d5ec6(_0x17d285.arg);
            }(_0x5d8c71, _0x1070d2, _0x2e0e36, _0x435d81);
          });
        }
        return _0x100ee8 = _0x100ee8 ? _0x100ee8.then(_0x1b4fff, _0x1b4fff) : _0x1b4fff();
      }
    });
  }
  function _0x474306(_0x5d0fff) {
    var _0x43846b = {
      tryLoc: _0x5d0fff[0]
    };
    1 in _0x5d0fff && (_0x43846b.catchLoc = _0x5d0fff[1]);
    2 in _0x5d0fff && (_0x43846b.finallyLoc = _0x5d0fff[2], _0x43846b.afterLoc = _0x5d0fff[3]);
    this.tryEntries.push(_0x43846b);
  }
  function _0x8768b8(_0x228a98) {
    var _0x572ac4 = _0x228a98.completion || {};
    _0x572ac4.type = "normal";
    delete _0x572ac4.arg;
    _0x228a98.completion = _0x572ac4;
  }
  function _0x35d66a(_0x4c603a) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    _0x4c603a.forEach(_0x474306, this);
    this.reset(true);
  }
  function _0x16e308(_0x272966) {
    if (_0x272966 || "" === _0x272966) {
      var _0x412987;
      var _0x178810 = _0x272966[_0x24d855];
      if (_0x178810) {
        return _0x178810.call(_0x272966);
      }
      if ("function" == typeof _0x272966.next) {
        return _0x272966;
      }
      if (!isNaN(_0x272966.length)) {
        _0x412987 = -1;
        return (_0x178810 = function _0x2ebf47() {
          for (; ++_0x412987 < _0x272966.length;) {
            if (_0x5f3c25.call(_0x272966, _0x412987)) {
              _0x2ebf47.value = _0x272966[_0x412987];
              _0x2ebf47.done = false;
              return _0x2ebf47;
            }
          }
          _0x2ebf47.value = _0xe1858;
          _0x2ebf47.done = true;
          return _0x2ebf47;
        }).next = _0x178810;
      }
    }
    throw new TypeError(j(_0x272966) + " is not iterable");
  }
  _0x3d59a9(_0xddd469, "constructor", {
    value: _0x5f1243.prototype = _0x659e4a,
    configurable: true
  });
  _0x3d59a9(_0x659e4a, "constructor", {
    value: _0x5f1243,
    configurable: true
  });
  _0x5f1243.displayName = _0x230095(_0x659e4a, _0x14450d, "GeneratorFunction");
  _0x18c4d7(_0x5b73f3.prototype);
  _0x230095(_0x5b73f3.prototype, _0x391c56, function () {
    return this;
  });
  _0x18c4d7(_0xddd469);
  _0x230095(_0xddd469, _0x14450d, "Generator");
  _0x230095(_0xddd469, _0x24d855, function () {
    return this;
  });
  _0x230095(_0xddd469, "toString", function () {
    return "[object Generator]";
  });
  _0x2fd306.keys = function (_0x1b753c) {
    var _0x593f1d;
    var _0x240b3a = Object(_0x1b753c);
    var _0xce1039 = [];
    for (_0x593f1d in _0x240b3a) _0xce1039.push(_0x593f1d);
    _0xce1039.reverse();
    return function _0x3346b9() {
      for (; _0xce1039.length;) {
        var _0x320a37 = _0xce1039.pop();
        if (_0x320a37 in _0x240b3a) {
          _0x3346b9.value = _0x320a37;
          _0x3346b9.done = false;
          return _0x3346b9;
        }
      }
      _0x3346b9.done = true;
      return _0x3346b9;
    };
  };
  _0x2fd306.values = _0x16e308;
  _0x35d66a.prototype = {
    constructor: _0x35d66a,
    reset: function (_0x170a63) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = _0xe1858, this.done = false, this.delegate = null, this.method = "next", this.arg = _0xe1858, this.tryEntries.forEach(_0x8768b8), !_0x170a63) {
        for (var _0x2b8c3c in this) "t" === _0x2b8c3c.charAt(0) && _0x5f3c25.call(this, _0x2b8c3c) && !isNaN(+_0x2b8c3c.slice(1)) && (this[_0x2b8c3c] = _0xe1858);
      }
    },
    stop: function () {
      this.done = true;
      var _0x18d495 = this.tryEntries[0].completion;
      if ("throw" === _0x18d495.type) {
        throw _0x18d495.arg;
      }
      return this.rval;
    },
    dispatchException: function (_0x491b92) {
      if (this.done) {
        throw _0x491b92;
      }
      var _0x2f397e = this;
      function _0x4634a7(_0x845517, _0x543d0c) {
        _0x31832a.type = "throw";
        _0x31832a.arg = _0x491b92;
        _0x2f397e.next = _0x845517;
        _0x543d0c && (_0x2f397e.method = "next", _0x2f397e.arg = _0xe1858);
        return !!_0x543d0c;
      }
      for (var _0x222553 = this.tryEntries.length - 1; 0 <= _0x222553; --_0x222553) {
        var _0x49d6ca = this.tryEntries[_0x222553];
        var _0x31832a = _0x49d6ca.completion;
        if ("root" === _0x49d6ca.tryLoc) {
          return _0x4634a7("end");
        }
        if (_0x49d6ca.tryLoc <= this.prev) {
          var _0x3989e2 = _0x5f3c25.call(_0x49d6ca, "catchLoc");
          var _0x92989e = _0x5f3c25.call(_0x49d6ca, "finallyLoc");
          if (_0x3989e2 && _0x92989e) {
            if (this.prev < _0x49d6ca.catchLoc) {
              return _0x4634a7(_0x49d6ca.catchLoc, true);
            }
            if (this.prev < _0x49d6ca.finallyLoc) {
              return _0x4634a7(_0x49d6ca.finallyLoc);
            }
          } else {
            if (_0x3989e2) {
              if (this.prev < _0x49d6ca.catchLoc) {
                return _0x4634a7(_0x49d6ca.catchLoc, true);
              }
            } else {
              if (!_0x92989e) {
                throw new Error("try statement without catch or finally");
              }
              if (this.prev < _0x49d6ca.finallyLoc) {
                return _0x4634a7(_0x49d6ca.finallyLoc);
              }
            }
          }
        }
      }
    },
    abrupt: function (_0x143241, _0xd89756) {
      for (var _0x1b94e3 = this.tryEntries.length - 1; 0 <= _0x1b94e3; --_0x1b94e3) {
        var _0x2088b5 = this.tryEntries[_0x1b94e3];
        if (_0x2088b5.tryLoc <= this.prev && _0x5f3c25.call(_0x2088b5, "finallyLoc") && this.prev < _0x2088b5.finallyLoc) {
          var _0xb597a0 = _0x2088b5;
          break;
        }
      }
      var _0x3e0dc0 = (_0xb597a0 = _0xb597a0 && ("break" === _0x143241 || "continue" === _0x143241) && _0xb597a0.tryLoc <= _0xd89756 && _0xd89756 <= _0xb597a0.finallyLoc ? null : _0xb597a0) ? _0xb597a0.completion : {};
      _0x3e0dc0.type = _0x143241;
      _0x3e0dc0.arg = _0xd89756;
      return _0xb597a0 ? (this.method = "next", this.next = _0xb597a0.finallyLoc, _0x542887) : this.complete(_0x3e0dc0);
    },
    complete: function (_0x17034b, _0x34eb2b) {
      if ("throw" === _0x17034b.type) {
        throw _0x17034b.arg;
      }
      "break" === _0x17034b.type || "continue" === _0x17034b.type ? this.next = _0x17034b.arg : "return" === _0x17034b.type ? (this.rval = this.arg = _0x17034b.arg, this.method = "return", this.next = "end") : "normal" === _0x17034b.type && _0x34eb2b && (this.next = _0x34eb2b);
      return _0x542887;
    },
    finish: function (_0x4d39c1) {
      for (var _0x3f1d24 = this.tryEntries.length - 1; 0 <= _0x3f1d24; --_0x3f1d24) {
        var _0x391914 = this.tryEntries[_0x3f1d24];
        if (_0x391914.finallyLoc === _0x4d39c1) {
          this.complete(_0x391914.completion, _0x391914.afterLoc);
          _0x8768b8(_0x391914);
          return _0x542887;
        }
      }
    },
    catch: function (_0x5dbcfc) {
      for (var _0x130829 = this.tryEntries.length - 1; 0 <= _0x130829; --_0x130829) {
        var _0x559039;
        var _0x57e8e2;
        var _0x52152a = this.tryEntries[_0x130829];
        if (_0x52152a.tryLoc === _0x5dbcfc) {
          "throw" === (_0x559039 = _0x52152a.completion).type && (_0x57e8e2 = _0x559039.arg, _0x8768b8(_0x52152a));
          return _0x57e8e2;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (_0x3b6fa2, _0x4ecb8e, _0x10c8cb) {
      this.delegate = {
        iterator: _0x16e308(_0x3b6fa2),
        resultName: _0x4ecb8e,
        nextLoc: _0x10c8cb
      };
      "next" === this.method && (this.arg = _0xe1858);
      return _0x542887;
    }
  };
  return _0x2fd306;
}
function l(_0x301d1c, _0x2fecd9) {
  return $(_0x301d1c) || G(_0x301d1c, _0x2fecd9) || h(_0x301d1c, _0x2fecd9) || U();
}
function U() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function h(_0x43ee3b, _0x293e21) {
  var _0x47d1ea;
  if (_0x43ee3b) {
    return "string" == typeof _0x43ee3b ? f(_0x43ee3b, _0x293e21) : "Map" === (_0x47d1ea = "Object" === (_0x47d1ea = Object.prototype.toString.call(_0x43ee3b).slice(8, -1)) && _0x43ee3b.constructor ? _0x43ee3b.constructor.name : _0x47d1ea) || "Set" === _0x47d1ea ? Array.from(_0x43ee3b) : "Arguments" === _0x47d1ea || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x47d1ea) ? f(_0x43ee3b, _0x293e21) : undefined;
  }
}
function f(_0x55f803, _0x319129) {
  (null == _0x319129 || _0x319129 > _0x55f803.length) && (_0x319129 = _0x55f803.length);
  for (var _0x1d8944 = 0, _0x4f03de = new Array(_0x319129); _0x1d8944 < _0x319129; _0x1d8944++) {
    _0x4f03de[_0x1d8944] = _0x55f803[_0x1d8944];
  }
  return _0x4f03de;
}
function G(_0x9e88d1, _0x2855a8) {
  var _0x5aa9c7 = null == _0x9e88d1 ? null : "undefined" != typeof Symbol && _0x9e88d1[Symbol.iterator] || _0x9e88d1["@@iterator"];
  if (null != _0x5aa9c7) {
    var _0x4517cf;
    var _0x17d250;
    var _0x120e1f;
    var _0x362ea7;
    var _0x447bb5 = [];
    var _0x152baa = true;
    var _0x13be71 = false;
    try {
      if (_0x120e1f = (_0x5aa9c7 = _0x5aa9c7.call(_0x9e88d1)).next, 0 === _0x2855a8) {
        if (Object(_0x5aa9c7) !== _0x5aa9c7) {
          return;
        }
        _0x152baa = false;
      } else {
        for (; !(_0x152baa = (_0x4517cf = _0x120e1f.call(_0x5aa9c7)).done) && (_0x447bb5.push(_0x4517cf.value), _0x447bb5.length !== _0x2855a8); _0x152baa = true) {}
      }
    } catch (_0x3669cb) {
      _0x13be71 = true;
      _0x17d250 = _0x3669cb;
    } finally {
      try {
        if (!_0x152baa && null != _0x5aa9c7.return && (_0x362ea7 = _0x5aa9c7.return(), Object(_0x362ea7) !== _0x362ea7)) {
          return;
        }
      } finally {
        if (_0x13be71) {
          throw _0x17d250;
        }
      }
    }
    return _0x447bb5;
  }
}
function $(_0x3209a5) {
  if (Array.isArray(_0x3209a5)) {
    return _0x3209a5;
  }
}
function p(_0x2c3423, _0x4261d3) {
  if (!(_0x2c3423 instanceof _0x4261d3)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function d(_0x1bbe95, _0x3f7a50) {
  for (var _0x4dfe22 = 0; _0x4dfe22 < _0x3f7a50.length; _0x4dfe22++) {
    var _0x238461 = _0x3f7a50[_0x4dfe22];
    _0x238461.enumerable = _0x238461.enumerable || false;
    _0x238461.configurable = true;
    "value" in _0x238461 && (_0x238461.writable = true);
    Object.defineProperty(_0x1bbe95, W(_0x238461.key), _0x238461);
  }
}
function v(_0x276bec, _0x5ccce4, _0x1ae81d) {
  _0x5ccce4 && d(_0x276bec.prototype, _0x5ccce4);
  _0x1ae81d && d(_0x276bec, _0x1ae81d);
  Object.defineProperty(_0x276bec, "prototype", {
    writable: false
  });
  return _0x276bec;
}
function W(_0x484ce0) {
  _0x484ce0 = R(_0x484ce0, "string");
  return "symbol" == j(_0x484ce0) ? _0x484ce0 : String(_0x484ce0);
}
function R(_0x38b3ba, _0x3f8c51) {
  if ("object" != j(_0x38b3ba) || !_0x38b3ba) {
    return _0x38b3ba;
  }
  var _0x1b1bff = _0x38b3ba[Symbol.toPrimitive];
  if (undefined === _0x1b1bff) {
    return ("string" === _0x3f8c51 ? String : Number)(_0x38b3ba);
  }
  _0x1b1bff = _0x1b1bff.call(_0x38b3ba, _0x3f8c51 || "default");
  if ("object" != j(_0x1b1bff)) {
    return _0x1b1bff;
  }
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function y(_0x1b7f4f, _0x1a0f9b, _0x290c7e, _0x4dd8a3, _0x3b4570, _0x361c1f, _0x5b9f7a) {
  try {
    var _0x208f10 = _0x1b7f4f[_0x361c1f](_0x5b9f7a);
    var _0x24ac13 = _0x208f10.value;
  } catch (_0xbc3b8c) {
    return void _0x290c7e(_0xbc3b8c);
  }
  _0x208f10.done ? _0x1a0f9b(_0x24ac13) : Promise.resolve(_0x24ac13).then(_0x4dd8a3, _0x3b4570);
}
function g(_0x2a9d8d) {
  return function () {
    var _0x25d588 = this;
    var _0x3f9d45 = arguments;
    return new Promise(function (_0x19b48c, _0xeeda16) {
      var _0x43ae9d = _0x2a9d8d.apply(_0x25d588, _0x3f9d45);
      function _0xac1354(_0x541661) {
        y(_0x43ae9d, _0x19b48c, _0xeeda16, _0xac1354, _0x2099e5, "next", _0x541661);
      }
      function _0x2099e5(_0x2737bd) {
        y(_0x43ae9d, _0x19b48c, _0xeeda16, _0xac1354, _0x2099e5, "throw", _0x2737bd);
      }
      _0xac1354(undefined);
    });
  };
}
var m = new tt("商战网络签到");
var w = "szwl";
var b = ["\n", "&"];
var x = require("fs");
var k = (m.isNode() ? process.env[w] : m.getdata(w)) || "";
var S = [];
var B = 0;
function L() {
  return require("path").resolve(process.argv[1]);
}
function N() {
  return O.apply(this, arguments);
}
function O() {
  return (O = g(T().mark(function _0x17d6ef() {
    var _0x6d3b3b;
    var _0x25c4aa;
    var _0x5a4624 = arguments;
    return T().wrap(function (_0x2bf8c0) {
      for (;;) {
        switch (_0x2bf8c0.prev = _0x2bf8c0.next) {
          case 0:
            _0x25c4aa = 0 < _0x5a4624.length && undefined !== _0x5a4624[0] ? _0x5a4624[0] : L();
            _0x6d3b3b = 1 < _0x5a4624.length ? _0x5a4624[1] : undefined;
            _0x2bf8c0.prev = 2;
            _0x2bf8c0.next = 5;
            return x.promises.readFile(_0x25c4aa, "utf8");
          case 5:
            _0x25c4aa = _0x2bf8c0.sent;
            return _0x2bf8c0.abrupt("return", _0x25c4aa.includes(_0x6d3b3b));
          case 9:
            throw _0x2bf8c0.prev = 9, _0x2bf8c0.t0 = _0x2bf8c0.catch(2), console.error("Error reading file:", _0x2bf8c0.t0.message), _0x2bf8c0.t0;
          case 13:
          case "end":
            return _0x2bf8c0.stop();
        }
      }
    }, _0x17d6ef, null, [[2, 9]]);
  }))).apply(this, arguments);
}
function F() {
  return E.apply(this, arguments);
}
function E() {
  return (E = g(T().mark(function _0x4dc5c9() {
    var _0x209d41;
    var _0x1c8b62;
    var _0x39ec15;
    var _0x3f2d13;
    var _0x5749c7;
    var _0x5d4e6c;
    var _0x1c041a = arguments;
    return T().wrap(function (_0x164a1e) {
      for (;;) {
        switch (_0x164a1e.prev = _0x164a1e.next) {
          case 0:
            if (_0x209d41 = 0 < _0x1c041a.length && undefined !== _0x1c041a[0] ? _0x1c041a[0] : L(), _0x1c8b62 = 1 < _0x1c041a.length ? _0x1c041a[1] : undefined, _0x39ec15 = 2 < _0x1c041a.length ? _0x1c041a[2] : undefined, _0x3f2d13 = 3 < _0x1c041a.length ? _0x1c041a[3] : undefined, _0x5749c7 = 4 < _0x1c041a.length && undefined !== _0x1c041a[4] ? _0x1c041a[4] : undefined, _0x164a1e.prev = 5, _0x5749c7) {
              if ("function" == typeof _0x5749c7[_0x1c8b62]) {
                _0x164a1e.next = 10;
                return _0x5749c7[_0x1c8b62].apply(_0x5749c7, c(_0x39ec15));
              }
              _0x164a1e.next = 14;
            } else {
              _0x164a1e.next = 17;
            }
            break;
          case 10:
            _0x5749c7 = _0x164a1e.sent;
            return _0x164a1e.abrupt("return", _0x5749c7 === _0x3f2d13);
          case 14:
            return _0x164a1e.abrupt("return", false);
          case 15:
            _0x164a1e.next = 26;
            break;
          case 17:
            if ("function" == typeof (_0x5d4e6c = require(_0x209d41))[_0x1c8b62]) {
              _0x164a1e.next = 21;
              return _0x5d4e6c[_0x1c8b62].apply(_0x5d4e6c, c(_0x39ec15));
            }
            _0x164a1e.next = 25;
            break;
          case 21:
            _0x5d4e6c = _0x164a1e.sent;
            return _0x164a1e.abrupt("return", _0x5d4e6c === _0x3f2d13);
          case 25:
            return _0x164a1e.abrupt("return", false);
          case 26:
            _0x164a1e.next = 32;
            break;
          case 28:
            throw _0x164a1e.prev = 28, _0x164a1e.t0 = _0x164a1e.catch(5), console.error("Error loading module or executing method:", _0x164a1e.t0.message), _0x164a1e.t0;
          case 32:
          case "end":
            return _0x164a1e.stop();
        }
      }
    }, _0x4dc5c9, null, [[5, 28]]);
  }))).apply(this, arguments);
}
function Q(_0x20bc7e) {
  return C.apply(this, arguments);
}
function C() {
  return (C = g(T().mark(function _0x45d8bf(_0xbbc477) {
    var _0x2bb7d5;
    return T().wrap(function (_0x4880e8) {
      for (;;) {
        switch (_0x4880e8.prev = _0x4880e8.next) {
          case 0:
            if (global.isCheckedCodeCopyrights) {
              return _0x4880e8.abrupt("return", global.isCheckedCodeCopyrights);
            }
            _0x4880e8.next = 2;
            break;
          case 2:
            _0x4880e8.next = 4;
            return N(undefined, "tg反馈群： https://t.me/huan_sheng");
          case 4:
            if (_0x2bb7d5 = _0x4880e8.sent, _0x4880e8.t0 = _0x2bb7d5, _0x4880e8.t0) {
              _0x4880e8.next = 9;
              return N(undefined, "parent_code=NGSSGLS");
            }
            _0x4880e8.next = 10;
            break;
          case 9:
            _0x4880e8.t0 = _0x4880e8.sent;
          case 10:
            global.isCheckedCodeCopyrights = _0x4880e8.t0;
            return _0x4880e8.abrupt("return", global.isCheckedCodeCopyrights);
          case 12:
          case "end":
            return _0x4880e8.stop();
        }
      }
    }, _0x45d8bf);
  }))).apply(this, arguments);
}
var X = function () {
  function _0x43e618(_0x209383) {
    p(this, _0x43e618);
    this.index = ++B;
    this.points = 0;
    this.valid = false;
    try {
      var _0x20c0c5;
      var _0xef5df5;
      var _0x16c4e6 = null == _0x209383 ? undefined : _0x209383.split("#");
      2 === (null == _0x16c4e6 ? undefined : _0x16c4e6.length) ? (_0x296170 = l(_0x16c4e6, 2), this.activedAuthToken = _0x296170[0], this.ip = _0x296170[1], q(this.ip) || (_0x20c0c5 = l(_0x16c4e6, 2), this.account = _0x20c0c5[0], this.password = _0x20c0c5[1], this.ip = "", this.activedAuthToken = "")) : (_0xef5df5 = l(_0x16c4e6, 3), this.account = _0xef5df5[0], this.password = _0xef5df5[1], this.ip = _0xef5df5[2], this.activedAuthToken = "");
    } catch (_0x5d09d3) {
      this.activedAuthToken = _0x209383;
    }
    var _0x296170;
    q(this.ip) || (this.ip = z(w + "_config", "fakeIp"), this.ip ? console.log("账号[".concat(this.index, "]从缓存读取IP地址成功： ").concat(this.ip)) : (_0x296170 = J(true), this.ip = _0x296170, console.log("账号[".concat(this.index, "]未检测到设置的IP，开始随机生成一个： ").concat(_0x296170)), K(w + "_config", "fakeIp", _0x296170)));
  }
  var _0xe597c8;
  var _0x3521ad;
  var _0x184dea;
  var _0x1eb6b3;
  var _0x264706;
  var _0x4da370;
  var _0x29cd4b;
  v(_0x43e618, [{
    key: "taskApi",
    value: (_0x29cd4b = g(T().mark(function _0x39a238(_0x62f1f, _0x3f80d8, _0x365092, _0x3064f2) {
      var _0x126a0c;
      var _0x129e3e;
      var _0x165e8c = this;
      return T().wrap(function (_0x4b6394) {
        for (;;) {
          switch (_0x4b6394.prev = _0x4b6394.next) {
            case 0:
              _0x126a0c = null;
              _0x4b6394.prev = 1;
              _0x129e3e = _0x365092.replace("//", "/").split("/")[1];
              _0x129e3e = {
                url: _0x365092,
                headers: {
                  "User-Agent": "Mozilla/5.0 (Linux; Android 13; M2012K11AC Build/TKQ1.220829.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5127 MMWEBSDK/20230504 MMWEBID/1105 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
                  Host: _0x129e3e,
                  Connection: "Keep-Alive",
                  Origin: "https://" + _0x129e3e,
                  Authorization: this.activedAuthToken,
                  Referer: "https://www.qqkami.com/umobile/pages/Home/sign_in/sign_in",
                  Client_ip: this.ip,
                  "X-forwarded-for": this.ip,
                  "accept-language": "zh-CN:zh;q=0.9",
                  accept: "*/*"
                },
                timeout: 60000
              };
              _0x3064f2 && (_0x129e3e.body = _0x3064f2, _0x129e3e.headers["content-length"] = null == _0x3064f2 ? undefined : _0x3064f2.length, _0x129e3e.headers["Content-Type"] = "application/json");
              _0x4b6394.next = 7;
              return Z(_0x3f80d8, _0x129e3e).then(function () {
                var _0x19319c = g(T().mark(function _0xef96b4(_0x2817ba) {
                  var _0x5c3c11;
                  return T().wrap(function (_0x21ff3e) {
                    for (;;) {
                      switch (_0x21ff3e.prev = _0x21ff3e.next) {
                        case 0:
                          200 == (null == (_0x5c3c11 = _0x2817ba.resp) ? undefined : _0x5c3c11.statusCode) ? null != (_0x5c3c11 = _0x2817ba.resp) && _0x5c3c11.body ? _0x126a0c = JSON.parse(_0x2817ba.resp.body) : console.log("账号[".concat(_0x165e8c.index, "]调用").concat(_0x3f80d8, "[").concat(_0x62f1f, "]出错，返回为空")) : console.log("账号[".concat(_0x165e8c.index, "]调用").concat(_0x3f80d8, "[").concat(_0x62f1f, "]出错，返回状态码[").concat((null == (_0x5c3c11 = _0x2817ba.resp) ? undefined : _0x5c3c11.statusCode) || "", "]"));
                        case 1:
                        case "end":
                          return _0x21ff3e.stop();
                      }
                    }
                  }, _0xef96b4);
                }));
                return function (_0x105f44) {
                  return _0x19319c.apply(this, arguments);
                };
              }());
            case 7:
              _0x4b6394.next = 12;
              break;
            case 9:
              _0x4b6394.prev = 9;
              _0x4b6394.t0 = _0x4b6394.catch(1);
              console.log(_0x4b6394.t0);
            case 12:
              _0x4b6394.prev = 12;
              return _0x4b6394.abrupt("return", Promise.resolve(_0x126a0c));
            case 15:
            case "end":
              return _0x4b6394.stop();
          }
        }
      }, _0x39a238, this, [[1, 9, 12, 15]]);
    })), function (_0x1ca51d, _0x1ceafd, _0x27d7d3, _0x51b16b) {
      return _0x29cd4b.apply(this, arguments);
    })
  }, {
    key: "Login",
    value: (_0x4da370 = g(T().mark(function _0x9a87c() {
      var _0x59b8d3;
      var _0xbe3a5a = this;
      return T().wrap(function (_0x10336f) {
        for (;;) {
          switch (_0x10336f.prev = _0x10336f.next) {
            case 0:
              _0x10336f.prev = 0;
              _0x59b8d3 = "{\"mobile\":\"".concat(this.account, "\",\"password\":\"").concat(this.password, "\"}");
              _0x10336f.next = 7;
              return this.taskApi("Login", "post", "https://www.qqkami.com/mobile/User/accountLogin", _0x59b8d3).then(function () {
                var _0xf827ee = g(T().mark(function _0x1d62c9(_0x22393f) {
                  var _0x2fbf4f;
                  return T().wrap(function (_0x13aaeb) {
                    for (;;) {
                      switch (_0x13aaeb.prev = _0x13aaeb.next) {
                        case 0:
                          200 === _0x22393f.code ? (_0xbe3a5a.valid = true, _0xbe3a5a.activedAuthToken = null == _0x22393f || null == (_0x2fbf4f = _0x22393f.data) ? undefined : _0x2fbf4f.token, _0xbe3a5a.points = _0x22393f.data.income, console.log("账号[".concat(_0xbe3a5a.index, "] 登录成功"))) : m.logAndNotify("账号[".concat(_0xbe3a5a.index, "]登录失败：").concat(_0x22393f.msg));
                        case 1:
                        case "end":
                          return _0x13aaeb.stop();
                      }
                    }
                  }, _0x1d62c9);
                }));
                return function (_0x6b886) {
                  return _0xf827ee.apply(this, arguments);
                };
              }());
            case 7:
              _0x10336f.next = 12;
              break;
            case 9:
              _0x10336f.prev = 9;
              _0x10336f.t0 = _0x10336f.catch(0);
              console.log(_0x10336f.t0);
            case 12:
              _0x10336f.prev = 12;
              return _0x10336f.abrupt("return", Promise.resolve(1));
            case 15:
            case "end":
              return _0x10336f.stop();
          }
        }
      }, _0x9a87c, this, [[0, 9, 12, 15]]);
    })), function () {
      return _0x4da370.apply(this, arguments);
    })
  }, {
    key: "GetUserBalance",
    value: (_0x264706 = g(T().mark(function _0x4e7aab() {
      var _0x565398 = this;
      return T().wrap(function (_0xeef95f) {
        for (;;) {
          switch (_0xeef95f.prev = _0xeef95f.next) {
            case 0:
              _0xeef95f.prev = 0;
              _0xeef95f.next = 7;
              return this.taskApi("GetUserBalance", "get", "https://www.qqkami.com/mobile/UserCenter/getInfo", "").then(function () {
                var _0x2b4c6d = g(T().mark(function _0x3ddaf6(_0x2fd66d) {
                  return T().wrap(function (_0x35dbb8) {
                    for (;;) {
                      switch (_0x35dbb8.prev = _0x35dbb8.next) {
                        case 0:
                          200 === _0x2fd66d.code ? (_0x565398.valid = true, _0x565398.points = _0x2fd66d.data.income, console.log("账号[".concat(_0x565398.index, "] 当前佣金: ").concat(_0x565398.points))) : m.logAndNotify("账号[".concat(_0x565398.index, "] 查询佣金失败，").concat(_0x2fd66d.msg));
                        case 1:
                        case "end":
                          return _0x35dbb8.stop();
                      }
                    }
                  }, _0x3ddaf6);
                }));
                return function (_0x401ecb) {
                  return _0x2b4c6d.apply(this, arguments);
                };
              }());
            case 7:
              _0xeef95f.next = 12;
              break;
            case 9:
              _0xeef95f.prev = 9;
              _0xeef95f.t0 = _0xeef95f.catch(0);
              console.log(_0xeef95f.t0);
            case 12:
              _0xeef95f.prev = 12;
              return _0xeef95f.abrupt("return", Promise.resolve(1));
            case 15:
            case "end":
              return _0xeef95f.stop();
          }
        }
      }, _0x4e7aab, this, [[0, 9, 12, 15]]);
    })), function () {
      return _0x264706.apply(this, arguments);
    })
  }, {
    key: "SignInDaily",
    value: (_0x1eb6b3 = g(T().mark(function _0x15c073() {
      var _0x178df9 = this;
      return T().wrap(function (_0x331cd2) {
        for (;;) {
          switch (_0x331cd2.prev = _0x331cd2.next) {
            case 0:
              _0x331cd2.prev = 0;
              _0x331cd2.next = 7;
              return this.taskApi("SignInDaily", "post", "https://www.qqkami.com/mobile/UserSign/sign", "{}").then(function () {
                var _0xcf33b3 = g(T().mark(function _0x45c49f(_0x42bb21) {
                  return T().wrap(function (_0x3458b2) {
                    for (;;) {
                      switch (_0x3458b2.prev = _0x3458b2.next) {
                        case 0:
                          200 === _0x42bb21.code ? console.log("账号[".concat(_0x178df9.index, "] 签到成功")) : console.log("账号[".concat(_0x178df9.index, "] 签到失败：").concat(null == _0x42bb21 ? undefined : _0x42bb21.msg));
                        case 1:
                        case "end":
                          return _0x3458b2.stop();
                      }
                    }
                  }, _0x45c49f);
                }));
                return function (_0x5b6051) {
                  return _0xcf33b3.apply(this, arguments);
                };
              }());
            case 7:
              _0x331cd2.next = 12;
              break;
            case 9:
              _0x331cd2.prev = 9;
              _0x331cd2.t0 = _0x331cd2.catch(0);
              console.log(_0x331cd2.t0);
            case 12:
              _0x331cd2.prev = 12;
              return _0x331cd2.abrupt("return", Promise.resolve(1));
            case 15:
            case "end":
              return _0x331cd2.stop();
          }
        }
      }, _0x15c073, this, [[0, 9, 12, 15]]);
    })), function () {
      return _0x1eb6b3.apply(this, arguments);
    })
  }, {
    key: "GetUserWithdrawType",
    value: (_0x184dea = g(T().mark(function _0x13b9dd() {
      var _0x163688 = this;
      return T().wrap(function (_0x20bc24) {
        for (;;) {
          switch (_0x20bc24.prev = _0x20bc24.next) {
            case 0:
              _0x20bc24.prev = 0;
              _0x20bc24.next = 7;
              return this.taskApi("GetUserWithdrawType", "get", "https://www.qqkami.com/mobile/UserWithdraw/getInfo", "").then(function () {
                var _0x4e3554 = g(T().mark(function _0x223997(_0x5fdb27) {
                  var _0x9e8ff1;
                  var _0x4ac372;
                  var _0x195aec;
                  return T().wrap(function (_0x30e0ce) {
                    for (;;) {
                      switch (_0x30e0ce.prev = _0x30e0ce.next) {
                        case 0:
                          if (200 === _0x5fdb27.code) {
                            _0x4ac372 = _0x5fdb27.data.acceptTypeList;
                            _0x4ac372 = _0x4ac372.find(function (_0x437652) {
                              return "支付宝" == _0x437652.name;
                            });
                            console.log("账号[".concat(_0x163688.index, "] 当前账户可提现余额：").concat(null == _0x5fdb27 || null == (_0x9e8ff1 = _0x5fdb27.data) ? undefined : _0x9e8ff1.usableBalance, ", ").concat(_0x4ac372 && null != _0x5fdb27 && null != (_0x9e8ff1 = _0x5fdb27.data) && _0x9e8ff1.mobile && null != _0x5fdb27 && null != (_0x4ac372 = _0x5fdb27.data) && _0x4ac372.name ? "当前可提现到支付宝" : "未找到可提现方式", "，", "支付宝姓名：".concat((null == _0x5fdb27 || null == (_0x4ac372 = _0x5fdb27.data) ? undefined : _0x4ac372.name) || "无"), "，", "支付宝号码：".concat((null == _0x5fdb27 || null == (_0x4ac372 = _0x5fdb27.data) ? undefined : _0x4ac372.mobile) || "无")));
                            _0x30e0ce.next = 6;
                            return m.wait(1000);
                          }
                          _0x30e0ce.next = 14;
                          break;
                        case 6:
                          if (2 <= Number(null == _0x5fdb27 || null == (_0x4ac372 = _0x5fdb27.data) ? undefined : _0x4ac372.usableBalance)) {
                            _0x30e0ce.next = 9;
                            return _0x163688.Withdraw(null == _0x5fdb27 || null == (_0x195aec = _0x5fdb27.data) ? undefined : _0x195aec.usableBalance);
                          }
                          _0x30e0ce.next = 11;
                          break;
                        case 9:
                          _0x30e0ce.next = 12;
                          break;
                        case 11:
                          console.log("账号[".concat(_0x163688.index, "] 余额不足2元，无法提现"));
                        case 12:
                          _0x30e0ce.next = 15;
                          break;
                        case 14:
                          m.logAndNotify("账号[".concat(_0x163688.index, "]查询提现信息失败，").concat(_0x5fdb27.msg));
                        case 15:
                        case "end":
                          return _0x30e0ce.stop();
                      }
                    }
                  }, _0x223997);
                }));
                return function (_0x1506b2) {
                  return _0x4e3554.apply(this, arguments);
                };
              }());
            case 7:
              _0x20bc24.next = 12;
              break;
            case 9:
              _0x20bc24.prev = 9;
              _0x20bc24.t0 = _0x20bc24.catch(0);
              console.log(_0x20bc24.t0);
            case 12:
              _0x20bc24.prev = 12;
              return _0x20bc24.abrupt("return", Promise.resolve(1));
            case 15:
            case "end":
              return _0x20bc24.stop();
          }
        }
      }, _0x13b9dd, this, [[0, 9, 12, 15]]);
    })), function () {
      return _0x184dea.apply(this, arguments);
    })
  }, {
    key: "Withdraw",
    value: (_0x3521ad = g(T().mark(function _0x602b73(_0x3b6ed7) {
      var _0x450752;
      var _0x33d073 = this;
      return T().wrap(function (_0x2cce77) {
        for (;;) {
          switch (_0x2cce77.prev = _0x2cce77.next) {
            case 0:
              _0x2cce77.prev = 0;
              _0x450752 = "{\"money\":\"".concat(_0x3b6ed7, "\",\"accept_type\":1}");
              _0x2cce77.next = 7;
              return this.taskApi("Withdraw", "post", "https://www.qqkami.com/mobile/UserWithdraw/operate", _0x450752).then(function () {
                var _0x13dca9 = g(T().mark(function _0x58d63f(_0x209af3) {
                  return T().wrap(function (_0x15125e) {
                    for (;;) {
                      switch (_0x15125e.prev = _0x15125e.next) {
                        case 0:
                          200 === _0x209af3.code ? console.log("账号[".concat(_0x33d073.index, "] 提现成功")) : console.log("账号[".concat(_0x33d073.index, "] 提现失败：").concat(null == _0x209af3 ? undefined : _0x209af3.msg));
                        case 1:
                        case "end":
                          return _0x15125e.stop();
                      }
                    }
                  }, _0x58d63f);
                }));
                return function (_0x13bb1c) {
                  return _0x13dca9.apply(this, arguments);
                };
              }());
            case 7:
              _0x2cce77.next = 12;
              break;
            case 9:
              _0x2cce77.prev = 9;
              _0x2cce77.t0 = _0x2cce77.catch(0);
              console.log(_0x2cce77.t0);
            case 12:
              _0x2cce77.prev = 12;
              return _0x2cce77.abrupt("return", Promise.resolve(1));
            case 15:
            case "end":
              return _0x2cce77.stop();
          }
        }
      }, _0x602b73, this, [[0, 9, 12, 15]]);
    })), function (_0x2d75bf) {
      return _0x3521ad.apply(this, arguments);
    })
  }, {
    key: "doTask",
    value: (_0xe597c8 = g(T().mark(function _0x1a4daa() {
      return T().wrap(function (_0x19708c) {
        for (;;) {
          switch (_0x19708c.prev = _0x19708c.next) {
            case 0:
              _0x19708c.prev = 0;
              _0x19708c.next = 3;
              return H(1000);
            case 3:
              console.log("\n============= 账号[".concat(this.index, "] 开始签到============="));
              _0x19708c.next = 6;
              return this.SignInDaily();
            case 6:
              console.log("\n============= 账号[".concat(this.index, "] 开始查询提现信息============="));
              _0x19708c.next = 9;
              return this.GetUserWithdrawType();
            case 9:
              _0x19708c.next = 14;
              break;
            case 11:
              _0x19708c.prev = 11;
              _0x19708c.t0 = _0x19708c.catch(0);
              console.log(_0x19708c.t0);
            case 14:
            case "end":
              return _0x19708c.stop();
          }
        }
      }, _0x1a4daa, this, [[0, 11]]);
    })), function () {
      return _0xe597c8.apply(this, arguments);
    })
  }]);
  return _0x43e618;
}();
function D() {
  return A.apply(this, arguments);
}
function A() {
  return (A = g(T().mark(function _0x4bb781() {
    return T().wrap(function (_0x98f16d) {
      for (;;) {
        switch (_0x98f16d.prev = _0x98f16d.next) {
          case 0:
            m.logAndNotify("============================= 公告 ========================\n\n作者：幻生（禁止倒卖）\n注册地址（非常感谢）：https://www.qqkami.com/promote?parent_code=NGSSGLS\n脚本仓库（认准更新地址）：https://github.com/Huansheng1/my-qinglong-js\n定制、偷撸、投稿 联系 QQ：1047827439\ntg反馈群： https://t.me/huan_sheng \n\n===========================================================");
            _0x98f16d.next = 3;
            return m.wait(200);
          case 3:
          case "end":
            return _0x98f16d.stop();
        }
      }
    }, _0x4bb781);
  }))).apply(this, arguments);
}
function q(_0x192663) {
  return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(_0x192663);
}
function J() {
  var _0x1a33a0 = !(0 < arguments.length && undefined !== arguments[0]) || arguments[0];
  var _0x54ee53 = _0x1a33a0 ? "223.255.255.255" : "255.255.255.255";
  var _0x1a33a0 = (_0x1a33a0 ? "1.1.1.1" : "0.0.0.0").split(".").map(Number);
  var _0x1c35db = _0x54ee53.split(".").map(Number);
  return _0x1a33a0.map(function (_0x21096e, _0xfe6a47) {
    _0xfe6a47 = _0x1c35db[_0xfe6a47];
    return Math.floor(Math.random() * (_0xfe6a47 - _0x21096e + 1)) + _0x21096e;
  }).join(".");
}
function K(_0x2129b1, _0x3e0242, _0x569ff5) {
  var _0x4b2a5b = {
    _0x3e0242: _0x569ff5
  };
  var _0x3e0242 = JSON.stringify(_0x4b2a5b);
  try {
    x.writeFileSync(_0x2129b1 + ".json", _0x3e0242);
  } catch (_0x5d0d46) {
    "ENOENT" === _0x5d0d46.code ? x.writeFileSync(_0x2129b1 + ".json", _0x3e0242) : console.error("保存文件时发生错误：", _0x5d0d46);
  }
}
function z(_0x5b172, _0x2ce0e8) {
  try {
    var _0x35aa14 = x.readFileSync(_0x5b172 + ".json", "utf8");
    return JSON.parse(_0x35aa14)[_0x2ce0e8];
  } catch (_0x33b3d0) {
    "ENOENT" !== _0x33b3d0.code && console.error("读取文件时发生错误：", _0x33b3d0);
  }
}
function H() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = g(T().mark(function _0x13d2bd() {
    var _0x4c5d99;
    var _0x411e21 = arguments;
    return T().wrap(function (_0x2d2afb) {
      for (;;) {
        switch (_0x2d2afb.prev = _0x2d2afb.next) {
          case 0:
            _0x4c5d99 = 0 < _0x411e21.length && undefined !== _0x411e21[0] ? _0x411e21[0] : 3000;
            console.log("----------- 延迟 ".concat(_0x4c5d99 / 1000, " s，请稍等 -----------"));
            _0x2d2afb.next = 4;
            return new Promise(function (_0x16d64d) {
              return setTimeout(_0x16d64d, _0x4c5d99);
            });
          case 4:
            return _0x2d2afb.abrupt("return", _0x2d2afb.sent);
          case 5:
          case "end":
            return _0x2d2afb.stop();
        }
      }
    }, _0x13d2bd);
  }))).apply(this, arguments);
}
function Y() {
  return I.apply(this, arguments);
}
function I() {
  return (I = g(T().mark(function _0x5281c4() {
    return T().wrap(function (_0x892277) {
      for (;;) {
        switch (_0x892277.prev = _0x892277.next) {
          case 0:
          case "end":
            return _0x892277.stop();
        }
      }
    }, _0x5281c4);
  }))).apply(this, arguments);
}
function V() {
  return M.apply(this, arguments);
}
function M() {
  return (M = g(T().mark(function _0x2e210c() {
    var _0x38a0a0;
    var _0x23554e;
    var _0x1b30d2;
    var _0x372a44;
    var _0x2bd341;
    var _0x2f910d;
    return T().wrap(function (_0x55b8c0) {
      for (;;) {
        switch (_0x55b8c0.prev = _0x55b8c0.next) {
          case 0:
            if (!k) {
              _0x55b8c0.next = 25;
              break;
            }
            _0x38a0a0 = b[0];
            _0x23554e = u(b);
            _0x55b8c0.prev = 3;
            _0x23554e.s();
          case 5:
            if ((_0x1b30d2 = _0x23554e.n()).done) {
              _0x55b8c0.next = 12;
            } else {
              if (_0x1b30d2 = _0x1b30d2.value, -1 < k.indexOf(_0x1b30d2)) {
                _0x38a0a0 = _0x1b30d2;
                return _0x55b8c0.abrupt("break", 12);
              }
              _0x55b8c0.next = 10;
            }
            break;
          case 10:
            _0x55b8c0.next = 5;
            break;
          case 12:
            _0x55b8c0.next = 17;
            break;
          case 14:
            _0x55b8c0.prev = 14;
            _0x55b8c0.t0 = _0x55b8c0.catch(3);
            _0x23554e.e(_0x55b8c0.t0);
          case 17:
            _0x55b8c0.prev = 17;
            _0x23554e.f();
            return _0x55b8c0.finish(17);
          case 20:
            _0x372a44 = u(k.split(_0x38a0a0));
            try {
              for (_0x372a44.s(); !(_0x2bd341 = _0x372a44.n()).done;) {
                (_0x2f910d = _0x2bd341.value) && S.push(new X(_0x2f910d));
              }
            } catch (_0x2fc150) {
              _0x372a44.e(_0x2fc150);
            } finally {
              _0x372a44.f();
            }
            userCount = S.length;
            _0x55b8c0.next = 27;
            break;
          case 25:
            console.log("未找到 配置信息，请检查是否配置 变量：", w);
            return _0x55b8c0.abrupt("return");
          case 27:
            console.log("共找到".concat(userCount, "个账号"));
            return _0x55b8c0.abrupt("return", true);
          case 29:
          case "end":
            return _0x55b8c0.stop();
        }
      }
    }, _0x2e210c, null, [[3, 14, 17, 20]]);
  }))).apply(this, arguments);
}
function Z(_0x3153e7, _0xed90e5) {
  return P.apply(this, arguments);
}
function P() {
  return (P = g(T().mark(function _0x2dfec4(_0x56687e, _0x2165f8) {
    return T().wrap(function (_0x59d16c) {
      for (;;) {
        switch (_0x59d16c.prev = _0x59d16c.next) {
          case 0:
            httpErr = null;
            httpReq = null;
            httpResp = null;
            return _0x59d16c.abrupt("return", new Promise(function (_0x2598d4) {
              m.send(_0x56687e, _0x2165f8, function () {
                var _0x106c0b = g(T().mark(function _0x1ed9d4(_0xc90122, _0x4f8f00, _0x21995d) {
                  return T().wrap(function (_0x2cf59a) {
                    for (;;) {
                      switch (_0x2cf59a.prev = _0x2cf59a.next) {
                        case 0:
                          httpErr = _0xc90122;
                          httpReq = _0x4f8f00;
                          httpResp = _0x21995d;
                          _0x2598d4({
                            err: _0xc90122,
                            req: _0x4f8f00,
                            resp: _0x21995d
                          });
                        case 2:
                        case "end":
                          return _0x2cf59a.stop();
                      }
                    }
                  }, _0x1ed9d4);
                }));
                return function (_0xf251ca, _0x3823c1, _0x1f2e89) {
                  return _0x106c0b.apply(this, arguments);
                };
              }());
            }));
          case 2:
          case "end":
            return _0x59d16c.stop();
        }
      }
    }, _0x2dfec4);
  }))).apply(this, arguments);
}
function tt(_0x1279bf, _0x3e3acd) {
  "undefined" != typeof process && -1 < JSON.stringify(process.env).indexOf("GITHUB") && process.exit(0);
  return new (function () {
    function _0x4eb101(_0x523fb9, _0x21fa3f) {
      p(this, _0x4eb101);
      this.name = _0x523fb9;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x21fa3f);
      console.log("".concat(this.name, " 开始运行：\n"));
    }
    var _0x109e11;
    v(_0x4eb101, [{
      key: "isNode",
      value: function () {
        return "undefined" != typeof module && !!module.exports;
      }
    }, {
      key: "isQuanX",
      value: function () {
        return "undefined" != typeof $task;
      }
    }, {
      key: "isSurge",
      value: function () {
        return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
      }
    }, {
      key: "isLoon",
      value: function () {
        return "undefined" != typeof $loon;
      }
    }, {
      key: "getdata",
      value: function (_0x458a77) {
        var _0x21f7f4 = this.getval(_0x458a77);
        if (/^@/.test(_0x458a77)) {
          var _0x266647 = l(/^@(.*?)\.(.*?)$/.exec(_0x458a77), 3);
          var _0x53735e = _0x266647[1];
          var _0x266647 = _0x266647[2];
          var _0x53735e = _0x53735e ? this.getval(_0x53735e) : "";
          if (_0x53735e) {
            try {
              var _0x596a98 = JSON.parse(_0x53735e);
              var _0x21f7f4 = _0x596a98 ? this.lodash_get(_0x596a98, _0x266647, "") : _0x21f7f4;
            } catch (_0x1adb8b) {
              _0x21f7f4 = "";
            }
          }
        }
        return _0x21f7f4;
      }
    }, {
      key: "setdata",
      value: function (_0x497456, _0x117d2f) {
        var _0x1487ef = false;
        if (/^@/.test(_0x117d2f)) {
          var _0x43c407 = l(/^@(.*?)\.(.*?)$/.exec(_0x117d2f), 3);
          var _0x1d9627 = _0x43c407[1];
          var _0x43c407 = _0x43c407[2];
          var _0x277681 = this.getval(_0x1d9627);
          var _0x277681 = _0x1d9627 ? "null" === _0x277681 ? null : _0x277681 || "{}" : "{}";
          try {
            var _0x256637 = JSON.parse(_0x277681);
            this.lodash_set(_0x256637, _0x43c407, _0x497456);
            _0x1487ef = this.setval(JSON.stringify(_0x256637), _0x1d9627);
          } catch (_0x85be1) {
            _0x277681 = {};
            this.lodash_set(_0x277681, _0x43c407, _0x497456);
            _0x1487ef = this.setval(JSON.stringify(_0x277681), _0x1d9627);
          }
        } else {
          _0x1487ef = this.setval(_0x497456, _0x117d2f);
        }
        return _0x1487ef;
      }
    }, {
      key: "getval",
      value: function (_0x327578) {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x327578) : this.isQuanX() ? $prefs.valueForKey(_0x327578) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x327578]) : this.data && this.data[_0x327578] || null;
      }
    }, {
      key: "setval",
      value: function (_0x2afa91, _0x10ef30) {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x2afa91, _0x10ef30) : this.isQuanX() ? $prefs.setValueForKey(_0x2afa91, _0x10ef30) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x10ef30] = _0x2afa91, this.writedata(), true) : this.data && this.data[_0x10ef30] || null;
      }
    }, {
      key: "send",
      value: function (_0x3f77c4, _0x4405ab) {
        var _0x3079a4;
        var _0x3ebe56 = 2 < arguments.length && undefined !== arguments[2] ? arguments[2] : function () {};
        "get" != _0x3f77c4 && "post" != _0x3f77c4 && "put" != _0x3f77c4 && "delete" != _0x3f77c4 ? console.log("无效的http方法：".concat(_0x3f77c4)) : ("get" == _0x3f77c4 && _0x4405ab.headers ? (delete _0x4405ab.headers["Content-Type"], delete _0x4405ab.headers["Content-Length"]) : _0x4405ab.body && _0x4405ab.headers && (_0x4405ab.headers["Content-Type"] || (_0x4405ab.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x4405ab.headers = _0x4405ab.headers || {}, Object.assign(_0x4405ab.headers, {
          "X-Surge-Skip-Scripting": false
        })), _0x3079a4 = {
          method: _0x3f77c4,
          url: _0x4405ab.url,
          headers: _0x4405ab.headers,
          timeout: _0x4405ab.timeout,
          data: _0x4405ab.body
        }, "get" == _0x3f77c4 && delete _0x3079a4.data, $axios(_0x3079a4).then(function (_0x2e131b) {
          var _0x4ed92e = _0x2e131b.status;
          var _0xb494dc = _0x2e131b.request;
          var _0x23f87f = _0x2e131b.headers;
          var _0x2e131b = _0x2e131b.data;
          _0x3ebe56(null, _0xb494dc, {
            statusCode: _0x4ed92e,
            headers: _0x23f87f,
            body: _0x2e131b
          });
        }).catch(function (_0x1fd2d6) {
          return console.log(_0x1fd2d6);
        })) : this.isQuanX() ? (_0x4405ab.method = _0x3f77c4.toUpperCase(), this.isNeedRewrite && (_0x4405ab.opts = _0x4405ab.opts || {}, Object.assign(_0x4405ab.opts, {
          hints: false
        })), $task.fetch(_0x4405ab).then(function (_0x360ccc) {
          var _0x4e57d2 = _0x360ccc.statusCode;
          var _0x1a1a25 = _0x360ccc.request;
          var _0x4fd35b = _0x360ccc.headers;
          var _0x360ccc = _0x360ccc.body;
          _0x3ebe56(null, _0x1a1a25, {
            statusCode: _0x4e57d2,
            headers: _0x4fd35b,
            body: _0x360ccc
          });
        }, function (_0x52c54c) {
          return _0x3ebe56(_0x52c54c);
        })) : this.isNode() && (this.got = this.got || require("got"), _0x3079a4 = _0x4405ab.url, _0x4405ab = i(_0x4405ab, r), this.instance = this.got.extend({
          followRedirect: false
        }), this.instance[_0x3f77c4](_0x3079a4, _0x4405ab).then(function (_0x52fa0c) {
          var _0x2717f9 = _0x52fa0c.statusCode;
          var _0x2b1d7d = _0x52fa0c.request;
          var _0x5dfa75 = _0x52fa0c.headers;
          var _0x52fa0c = _0x52fa0c.body;
          _0x3ebe56(null, _0x2b1d7d, {
            statusCode: _0x2717f9,
            headers: _0x5dfa75,
            body: _0x52fa0c
          });
        }, function (_0x497de9) {
          var _0x5efcdd = _0x497de9.message;
          var _0x70b580 = _0x497de9.request;
          var _0x497de9 = _0x497de9.response;
          _0x3ebe56(_0x5efcdd, _0x70b580, _0x497de9);
        })));
      }
    }, {
      key: "time",
      value: function (_0x4b6e74) {
        var _0x35a362;
        var _0x1e1040 = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : null;
        var _0x1e1040 = _0x1e1040 ? new Date(_0x1e1040) : new Date();
        var _0xced10c = {
          "M+": _0x1e1040.getMonth() + 1,
          "d+": _0x1e1040.getDate(),
          "h+": _0x1e1040.getHours(),
          "m+": _0x1e1040.getMinutes(),
          "s+": _0x1e1040.getSeconds(),
          "q+": Math.floor((_0x1e1040.getMonth() + 3) / 3),
          S: _0x1e1040.getMilliseconds()
        };
        for (_0x35a362 in /(y+)/.test(_0x4b6e74) && (_0x4b6e74 = _0x4b6e74.replace(RegExp.$1, (_0x1e1040.getFullYear() + "").substr(4 - RegExp.$1.length))), _0xced10c) new RegExp("(" + _0x35a362 + ")").test(_0x4b6e74) && (_0x4b6e74 = _0x4b6e74.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xced10c[_0x35a362] : ("00" + _0xced10c[_0x35a362]).substr(("" + _0xced10c[_0x35a362]).length)));
        return _0x4b6e74;
      }
    }, {
      key: "showmsg",
      value: (_0x109e11 = g(T().mark(function _0x366f0b() {
        var _0xda2694;
        var _0x413b5;
        return T().wrap(function (_0x165718) {
          for (;;) {
            switch (_0x165718.prev = _0x165718.next) {
              case 0:
                if (this.notifyStr) {
                  _0x165718.next = 2;
                  break;
                }
                return _0x165718.abrupt("return");
              case 2:
                if (_0xda2694 = this.name + " 运行通知\n\n" + this.notifyStr, m.isNode()) {
                  _0x413b5 = require("./sendNotify");
                  console.log("\n============== 推送 ==============");
                  _0x165718.next = 8;
                  return _0x413b5.sendNotify(this.name, _0xda2694);
                }
                _0x165718.next = 10;
                break;
              case 8:
                _0x165718.next = 11;
                break;
              case 10:
                this.msg(_0xda2694);
              case 11:
              case "end":
                return _0x165718.stop();
            }
          }
        }, _0x366f0b, this);
      })), function () {
        return _0x109e11.apply(this, arguments);
      })
    }, {
      key: "logAndNotify",
      value: function (_0x2ff1d2) {
        console.log(_0x2ff1d2);
        this.notifyStr += _0x2ff1d2;
        this.notifyStr += "\n";
      }
    }, {
      key: "logAndNotifyWithTime",
      value: function (_0x5b7741) {
        _0x5b7741 = "[" + this.time("hh:mm:ss.S") + "]" + _0x5b7741;
        console.log(_0x5b7741);
        this.notifyStr += _0x5b7741;
        this.notifyStr += "\n";
      }
    }, {
      key: "logWithTime",
      value: function (_0x24eddd) {
        console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x24eddd);
      }
    }, {
      key: "msg",
      value: function () {
        function _0x408f7f(_0x482730) {
          return _0x482730 && ("string" == typeof _0x482730 ? _0x13b4c0.isLoon() ? _0x482730 : _0x13b4c0.isQuanX() ? {
            "open-url": _0x482730
          } : _0x13b4c0.isSurge() ? {
            url: _0x482730
          } : undefined : "object" == j(_0x482730) ? _0x13b4c0.isLoon() ? {
            openUrl: _0x482730.openUrl || _0x482730.url || _0x482730["open-url"],
            mediaUrl: _0x482730.mediaUrl || _0x482730["media-url"]
          } : _0x13b4c0.isQuanX() ? {
            "open-url": _0x482730["open-url"] || _0x482730.url || _0x482730.openUrl,
            "media-url": _0x482730["media-url"] || _0x482730.mediaUrl
          } : _0x13b4c0.isSurge() ? {
            url: _0x482730.url || _0x482730.openUrl || _0x482730["open-url"]
          } : undefined : undefined);
        }
        var _0x13b4c0 = this;
        var _0x150ea8 = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : t;
        var _0x44478c = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : "";
        var _0x4dd336 = 2 < arguments.length && undefined !== arguments[2] ? arguments[2] : "";
        var _0x36a1de = 3 < arguments.length ? arguments[3] : undefined;
        this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x150ea8, _0x44478c, _0x4dd336, _0x408f7f(_0x36a1de)) : this.isQuanX() && $notify(_0x150ea8, _0x44478c, _0x4dd336, _0x408f7f(_0x36a1de)));
        var _0x36a1de = ["", "============== 系统通知 =============="];
        _0x36a1de.push(_0x150ea8);
        _0x44478c && _0x36a1de.push(_0x44478c);
        _0x4dd336 && _0x36a1de.push(_0x4dd336);
        console.log(_0x36a1de.join("\n"));
      }
    }, {
      key: "getMin",
      value: function (_0x2f7781, _0x598150) {
        return _0x2f7781 < _0x598150 ? _0x2f7781 : _0x598150;
      }
    }, {
      key: "getMax",
      value: function (_0x4c6068, _0x53a7fd) {
        return _0x4c6068 < _0x53a7fd ? _0x53a7fd : _0x4c6068;
      }
    }, {
      key: "padStr",
      value: function (_0x54c42e, _0x1774ac) {
        for (var _0x3c2853 = 2 < arguments.length && undefined !== arguments[2] ? arguments[2] : "0", _0x54c42e = String(_0x54c42e), _0x24e303 = _0x1774ac > _0x54c42e.length ? _0x1774ac - _0x54c42e.length : 0, _0x19cf4f = "", _0x48d0fc = 0; _0x48d0fc < _0x24e303; _0x48d0fc++) {
          _0x19cf4f += _0x3c2853;
        }
        return _0x19cf4f += _0x54c42e;
      }
    }, {
      key: "json2str",
      value: function (_0x200f84, _0x30a578) {
        var _0x3e9147;
        var _0xedc672 = 2 < arguments.length && undefined !== arguments[2] && arguments[2];
        var _0x287f48 = [];
        var _0x5566ea = u(Object.keys(_0x200f84).sort());
        try {
          for (_0x5566ea.s(); !(_0x3e9147 = _0x5566ea.n()).done;) {
            var _0x5aa02f = _0x3e9147.value;
            var _0x591990 = _0x200f84[_0x5aa02f];
            _0x591990 && _0xedc672 && (_0x591990 = encodeURIComponent(_0x591990));
            _0x287f48.push(_0x5aa02f + "=" + _0x591990);
          }
        } catch (_0x4287c5) {
          _0x5566ea.e(_0x4287c5);
        } finally {
          _0x5566ea.f();
        }
        return _0x287f48.join(_0x30a578);
      }
    }, {
      key: "str2json",
      value: function (_0x152137) {
        var _0x3785fd;
        var _0x30b51e = 1 < arguments.length && undefined !== arguments[1] && arguments[1];
        var _0x24131e = {};
        var _0x621008 = u(_0x152137.split("&"));
        try {
          for (_0x621008.s(); !(_0x3785fd = _0x621008.n()).done;) {
            var _0x5adc35;
            var _0x48a457;
            var _0x5aeb51;
            var _0xdf28fc = _0x3785fd.value;
            _0xdf28fc && -1 != (_0x5adc35 = _0xdf28fc.indexOf("=")) && (_0x48a457 = _0xdf28fc.substr(0, _0x5adc35), _0x5aeb51 = _0xdf28fc.substr(_0x5adc35 + 1), _0x30b51e && (_0x5aeb51 = decodeURIComponent(_0x5aeb51)), _0x24131e[_0x48a457] = _0x5aeb51);
          }
        } catch (_0x4122d7) {
          _0x621008.e(_0x4122d7);
        } finally {
          _0x621008.f();
        }
        return _0x24131e;
      }
    }, {
      key: "randomString",
      value: function (_0x1df5b4) {
        for (var _0x34c8aa = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : "abcdef0123456789", _0x23747b = "", _0x5b9371 = 0; _0x5b9371 < _0x1df5b4; _0x5b9371++) {
          _0x23747b += _0x34c8aa.charAt(Math.floor(Math.random() * _0x34c8aa.length));
        }
        return _0x23747b;
      }
    }, {
      key: "randomList",
      value: function (_0x18eb03) {
        return _0x18eb03[Math.floor(Math.random() * _0x18eb03.length)];
      }
    }, {
      key: "wait",
      value: function (_0x323d27) {
        return new Promise(function (_0x3155c2) {
          return setTimeout(_0x3155c2, _0x323d27);
        });
      }
    }, {
      key: "done",
      value: function () {
        var _0x4dd88d = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {};
        var _0x47a56a = (new Date().getTime() - this.startTime) / 1000;
        console.log("\n".concat(this.name, " 运行结束，共运行了 ").concat(_0x47a56a, " 秒！"));
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4dd88d);
      }
    }]);
    return _0x4eb101;
  }())(_0x1279bf, _0x3e3acd);
}
g(T().mark(function t() {
  var _0x5b16d5;
  var _0x1d4cc6;
  var _0xce8366;
  var _0x17d362;
  var _0x22377f;
  var _0x465509;
  return T().wrap(function (_0x421791) {
    for (;;) {
      switch (_0x421791.prev = _0x421791.next) {
        case 0:
          _0x421791.next = 2;
          return D();
        case 2:
          if ("undefined" != typeof $request) {
            _0x421791.next = 5;
            return Y();
          }
          _0x421791.next = 7;
          break;
        case 5:
          _0x421791.next = 52;
          break;
        case 7:
          _0x421791.next = 9;
          return V();
        case 9:
          if (_0x421791.sent) {
            _0x421791.next = 11;
            break;
          }
          return _0x421791.abrupt("return");
        case 11:
          console.log("\n================ 开始执行 ================");
          _0x5b16d5 = 0;
          _0x1d4cc6 = S;
        case 13:
          if (_0x5b16d5 < _0x1d4cc6.length) {
            if (_0xce8366 = _0x1d4cc6[_0x5b16d5], console.log("----------- 执行 第 [".concat(_0xce8366.index, "] 个账号 -----------")), _0xce8366.account) {
              _0x421791.next = 19;
              return _0xce8366.Login();
            }
            _0x421791.next = 19;
          } else {
            _0x421791.next = 24;
          }
          break;
        case 19:
          _0x421791.next = 21;
          return _0xce8366.GetUserBalance();
        case 21:
          _0x5b16d5++;
          _0x421791.next = 13;
          break;
        case 24:
          if (0 < (_0x17d362 = S.filter(function (_0x46075a) {
            return _0x46075a.valid;
          })).length) {
            _0x421791.next = 28;
            return Q(s);
          }
          _0x421791.next = 49;
          break;
        case 28:
          console.log("\n================ 任务队列构建完毕 ================");
          _0x22377f = u(_0x17d362);
          _0x421791.prev = 30;
          _0x22377f.s();
        case 32:
          if ((_0x465509 = _0x22377f.n()).done) {
            _0x421791.next = 39;
            break;
          }
          _0x465509 = _0x465509.value;
          console.log("----------- 账号[".concat(_0x465509.index, "] -----------"));
          _0x421791.next = 37;
          return _0x465509.doTask();
        case 37:
          _0x421791.next = 32;
          break;
        case 39:
          _0x421791.next = 44;
          break;
        case 41:
          _0x421791.prev = 41;
          _0x421791.t0 = _0x421791.catch(30);
          _0x22377f.e(_0x421791.t0);
        case 44:
          _0x421791.prev = 44;
          _0x22377f.f();
          return _0x421791.finish(44);
        case 47:
          _0x421791.next = 50;
          break;
        case 49:
          console.log("\n================ 未检测到帐号，请先注册：https://www.qqkami.com/promote?parent_code=NGSSGLS ================");
        case 50:
          _0x421791.next = 52;
          return m.showmsg();
        case 52:
        case "end":
          return _0x421791.stop();
      }
    }
  }, t, null, [[30, 41, 44, 47]]);
}))().catch(function (_0x3f1bd1) {
  return console.log(_0x3f1bd1);
}).finally(function () {
  return m.done();
});
