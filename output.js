//Mon Sep 30 2024 10:03:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("望潮"),
  notify = $.isNode() ? require("./sendNotify") : "";
(() => {
  function _0x11d248(_0x263e85) {
    return _0x11d248 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x14f184) {
      return typeof _0x14f184;
    } : function (_0x4a96c) {
      return _0x4a96c && "function" == typeof Symbol && _0x4a96c.constructor === Symbol && _0x4a96c !== Symbol.prototype ? "symbol" : typeof _0x4a96c;
    }, _0x11d248(_0x263e85);
  }
  function _0x3afa42(_0xbc0fac, _0x2fd686) {
    var _0x4a91d4 = "undefined" != typeof Symbol && _0xbc0fac[Symbol.iterator] || _0xbc0fac["@@iterator"];
    if (!_0x4a91d4) {
      if (Array.isArray(_0xbc0fac) || (_0x4a91d4 = _0x25d2a4(_0xbc0fac)) || _0x2fd686 && _0xbc0fac && "number" == typeof _0xbc0fac.length) {
        _0x4a91d4 && (_0xbc0fac = _0x4a91d4);
        var _0x4607ae = 0,
          _0x59dbe7 = function () {};
        return {
          "s": _0x59dbe7,
          "n": function () {
            var _0x593eb8 = {
              "done": !0
            };
            return _0x4607ae >= _0xbc0fac.length ? _0x593eb8 : {
              "done": !1,
              "value": _0xbc0fac[_0x4607ae++]
            };
          },
          "e": function (_0x3fe79b) {
            throw _0x3fe79b;
          },
          "f": _0x59dbe7
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var _0x33cca5,
      _0x72684f = true,
      _0x132971 = false;
    return {
      "s": function () {
        _0x4a91d4 = _0x4a91d4.call(_0xbc0fac);
      },
      "n": function () {
        var _0xb3272f = _0x4a91d4.next();
        return _0x72684f = _0xb3272f.done, _0xb3272f;
      },
      "e": function (_0xda011e) {
        _0x132971 = !0;
        _0x33cca5 = _0xda011e;
      },
      "f": function () {
        try {
          _0x72684f || null == _0x4a91d4.return || _0x4a91d4.return();
        } finally {
          if (_0x132971) throw _0x33cca5;
        }
      }
    };
  }
  function _0x25d2a4(_0x241be9, _0x2dc5ed) {
    if (_0x241be9) {
      if ("string" == typeof _0x241be9) {
        return _0x5cadf0(_0x241be9, _0x2dc5ed);
      }
      var _0x6a1c26 = {}.toString.call(_0x241be9).slice(8, -1);
      return "Object" === _0x6a1c26 && _0x241be9.constructor && (_0x6a1c26 = _0x241be9.constructor.name), "Map" === _0x6a1c26 || "Set" === _0x6a1c26 ? Array.from(_0x241be9) : "Arguments" === _0x6a1c26 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x6a1c26) ? _0x5cadf0(_0x241be9, _0x2dc5ed) : void 0;
    }
  }
  function _0x5cadf0(_0x543be9, _0x5c0e19) {
    (null == _0x5c0e19 || _0x5c0e19 > _0x543be9.length) && (_0x5c0e19 = _0x543be9.length);
    for (var _0x200c93 = 0, _0x13efdf = Array(_0x5c0e19); _0x200c93 < _0x5c0e19; _0x200c93++) {
      _0x13efdf[_0x200c93] = _0x543be9[_0x200c93];
    }
    return _0x13efdf;
  }
  function _0x148d02() {
    'use strict';

    _0x148d02 = function () {
      return _0x28494d;
    };
    var _0x36d8c2,
      _0x28494d = {},
      _0x1e2062 = Object.prototype,
      _0xd09a3a = _0x1e2062.hasOwnProperty,
      _0x3f4cc0 = Object.defineProperty || function (_0x51bc5a, _0x345103, _0x1d306f) {
        _0x51bc5a[_0x345103] = _0x1d306f.value;
      },
      _0x2661de = "function" == typeof Symbol ? Symbol : {},
      _0x480a02 = _0x2661de.iterator || "@@iterator",
      _0x5c2a1f = _0x2661de.asyncIterator || "@@asyncIterator",
      _0x295370 = _0x2661de.toStringTag || "@@toStringTag";
    function _0x1d190e(_0x700d1b, _0xcd95db, _0x3aa7c2) {
      var _0x470c14 = {
        "value": _0x3aa7c2,
        "enumerable": !0,
        "configurable": !0,
        "writable": !0
      };
      return Object.defineProperty(_0x700d1b, _0xcd95db, _0x470c14), _0x700d1b[_0xcd95db];
    }
    try {
      _0x1d190e({}, "");
    } catch (_0x21fd8f) {
      _0x1d190e = function (_0x8e228f, _0x5099b8, _0x207088) {
        return _0x8e228f[_0x5099b8] = _0x207088;
      };
    }
    function _0x300337(_0x1b374f, _0x44f411, _0x3f8252, _0x432b5d) {
      var _0x579959 = _0x44f411 && _0x44f411.prototype instanceof _0x8acb5a ? _0x44f411 : _0x8acb5a,
        _0x17690f = Object.create(_0x579959.prototype),
        _0x320953 = new _0x1a33cc(_0x432b5d || []);
      return _0x3f4cc0(_0x17690f, "_invoke", {
        "value": _0x50ed8a(_0x1b374f, _0x3f8252, _0x320953)
      }), _0x17690f;
    }
    function _0x5202c8(_0x1e7f4a, _0xfe5154, _0x20d6bd) {
      try {
        return {
          "type": "normal",
          "arg": _0x1e7f4a.call(_0xfe5154, _0x20d6bd)
        };
      } catch (_0x57461f) {
        var _0x47ffa2 = {
          "type": "throw",
          "arg": _0x57461f
        };
        return _0x47ffa2;
      }
    }
    _0x28494d.wrap = _0x300337;
    var _0x3d68c1 = "suspendedStart",
      _0x12c969 = "suspendedYield",
      _0x23f221 = "executing",
      _0x5178e0 = "completed",
      _0xf7adc4 = {};
    function _0x8acb5a() {}
    function _0x4b6daa() {}
    function _0x2f984d() {}
    var _0x502ca8 = {};
    _0x1d190e(_0x502ca8, _0x480a02, function () {
      return this;
    });
    var _0x7f05be = Object.getPrototypeOf,
      _0x22d17a = _0x7f05be && _0x7f05be(_0x7f05be(_0xb06426([])));
    _0x22d17a && _0x22d17a !== _0x1e2062 && _0xd09a3a.call(_0x22d17a, _0x480a02) && (_0x502ca8 = _0x22d17a);
    _0x2f984d.prototype = _0x8acb5a.prototype = Object.create(_0x502ca8);
    var _0x5e8ce9 = _0x2f984d.prototype;
    function _0x31e97b(_0x5c6142) {
      ["next", "throw", "return"].forEach(function (_0x227a7b) {
        _0x1d190e(_0x5c6142, _0x227a7b, function (_0x55affb) {
          return this._invoke(_0x227a7b, _0x55affb);
        });
      });
    }
    function _0xb651f9(_0x19fc76, _0x3a2b39) {
      function _0x10fd0d(_0x5b361c, _0x3c911a, _0x2feb6f, _0x287cb4) {
        var _0x5688d2 = _0x5202c8(_0x19fc76[_0x5b361c], _0x19fc76, _0x3c911a);
        if ("throw" !== _0x5688d2.type) {
          var _0x1506ff = _0x5688d2.arg,
            _0x36fa5b = _0x1506ff.value;
          return _0x36fa5b && "object" == _0x11d248(_0x36fa5b) && _0xd09a3a.call(_0x36fa5b, "__await") ? _0x3a2b39.resolve(_0x36fa5b.__await).then(function (_0x53e9b9) {
            _0x10fd0d("next", _0x53e9b9, _0x2feb6f, _0x287cb4);
          }, function (_0x41748d) {
            _0x10fd0d("throw", _0x41748d, _0x2feb6f, _0x287cb4);
          }) : _0x3a2b39.resolve(_0x36fa5b).then(function (_0x538f11) {
            _0x1506ff.value = _0x538f11;
            _0x2feb6f(_0x1506ff);
          }, function (_0x3c861f) {
            return _0x10fd0d("throw", _0x3c861f, _0x2feb6f, _0x287cb4);
          });
        }
        _0x287cb4(_0x5688d2.arg);
      }
      var _0x25e385;
      _0x3f4cc0(this, "_invoke", {
        "value": function (_0x6d12bb, _0x1bb044) {
          function _0x5cbb92() {
            return new _0x3a2b39(function (_0xf70d34, _0x402c14) {
              _0x10fd0d(_0x6d12bb, _0x1bb044, _0xf70d34, _0x402c14);
            });
          }
          return _0x25e385 = _0x25e385 ? _0x25e385.then(_0x5cbb92, _0x5cbb92) : _0x5cbb92();
        }
      });
    }
    function _0x50ed8a(_0x3c0534, _0x2ed318, _0x414e6a) {
      var _0x2c060d = _0x3d68c1;
      return function (_0x58562f, _0x2a7f67) {
        if (_0x2c060d === _0x23f221) {
          throw Error("Generator is already running");
        }
        if (_0x2c060d === _0x5178e0) {
          if ("throw" === _0x58562f) throw _0x2a7f67;
          var _0x18920e = {};
          _0x18920e.value = _0x36d8c2;
          _0x18920e.done = !0;
          return _0x18920e;
        }
        for (_0x414e6a.method = _0x58562f, _0x414e6a.arg = _0x2a7f67;;) {
          var _0x5b56cc = _0x414e6a.delegate;
          if (_0x5b56cc) {
            var _0x2c1c24 = _0x26b4a0(_0x5b56cc, _0x414e6a);
            if (_0x2c1c24) {
              if (_0x2c1c24 === _0xf7adc4) continue;
              return _0x2c1c24;
            }
          }
          if ("next" === _0x414e6a.method) _0x414e6a.sent = _0x414e6a._sent = _0x414e6a.arg;else {
            if ("throw" === _0x414e6a.method) {
              if (_0x2c060d === _0x3d68c1) throw _0x2c060d = _0x5178e0, _0x414e6a.arg;
              _0x414e6a.dispatchException(_0x414e6a.arg);
            } else "return" === _0x414e6a.method && _0x414e6a.abrupt("return", _0x414e6a.arg);
          }
          _0x2c060d = _0x23f221;
          var _0x598d3b = _0x5202c8(_0x3c0534, _0x2ed318, _0x414e6a);
          if ("normal" === _0x598d3b.type) {
            if (_0x2c060d = _0x414e6a.done ? _0x5178e0 : _0x12c969, _0x598d3b.arg === _0xf7adc4) continue;
            var _0x3628f7 = {};
            return _0x3628f7.value = _0x598d3b.arg, _0x3628f7.done = _0x414e6a.done, _0x3628f7;
          }
          "throw" === _0x598d3b.type && (_0x2c060d = _0x5178e0, _0x414e6a.method = "throw", _0x414e6a.arg = _0x598d3b.arg);
        }
      };
    }
    function _0x26b4a0(_0x1f7030, _0x3007b7) {
      var _0x313c69 = _0x3007b7.method,
        _0x1136b9 = _0x1f7030.iterator[_0x313c69];
      if (_0x1136b9 === _0x36d8c2) return _0x3007b7.delegate = null, "throw" === _0x313c69 && _0x1f7030.iterator.return && (_0x3007b7.method = "return", _0x3007b7.arg = _0x36d8c2, _0x26b4a0(_0x1f7030, _0x3007b7), "throw" === _0x3007b7.method) || "return" !== _0x313c69 && (_0x3007b7.method = "throw", _0x3007b7.arg = new TypeError("The iterator does not provide a '" + _0x313c69 + "' method")), _0xf7adc4;
      var _0x2f4fd3 = _0x5202c8(_0x1136b9, _0x1f7030.iterator, _0x3007b7.arg);
      if ("throw" === _0x2f4fd3.type) return _0x3007b7.method = "throw", _0x3007b7.arg = _0x2f4fd3.arg, _0x3007b7.delegate = null, _0xf7adc4;
      var _0x23a83c = _0x2f4fd3.arg;
      return _0x23a83c ? _0x23a83c.done ? (_0x3007b7[_0x1f7030.resultName] = _0x23a83c.value, _0x3007b7.next = _0x1f7030.nextLoc, "return" !== _0x3007b7.method && (_0x3007b7.method = "next", _0x3007b7.arg = _0x36d8c2), _0x3007b7.delegate = null, _0xf7adc4) : _0x23a83c : (_0x3007b7.method = "throw", _0x3007b7.arg = new TypeError("iterator result is not an object"), _0x3007b7.delegate = null, _0xf7adc4);
    }
    function _0x4c951b(_0x3d5461) {
      var _0x85d827 = {
          "tryLoc": _0x3d5461[0]
        },
        _0x29c9ba = _0x85d827;
      1 in _0x3d5461 && (_0x29c9ba.catchLoc = _0x3d5461[1]);
      2 in _0x3d5461 && (_0x29c9ba.finallyLoc = _0x3d5461[2], _0x29c9ba.afterLoc = _0x3d5461[3]);
      this.tryEntries.push(_0x29c9ba);
    }
    function _0x21bebb(_0x2e7ba3) {
      var _0x11e39d = _0x2e7ba3.completion || {};
      _0x11e39d.type = "normal";
      delete _0x11e39d.arg;
      _0x2e7ba3.completion = _0x11e39d;
    }
    function _0x1a33cc(_0x1de603) {
      var _0x2fcd6a = {
        "tryLoc": "root"
      };
      this.tryEntries = [_0x2fcd6a];
      _0x1de603.forEach(_0x4c951b, this);
      this.reset(!0);
    }
    function _0xb06426(_0x4bbde3) {
      if (_0x4bbde3 || "" === _0x4bbde3) {
        var _0x403b1f = _0x4bbde3[_0x480a02];
        if (_0x403b1f) {
          return _0x403b1f.call(_0x4bbde3);
        }
        if ("function" == typeof _0x4bbde3.next) return _0x4bbde3;
        if (!isNaN(_0x4bbde3.length)) {
          var _0x22110c = -1,
            _0x44d7fa = function _0x249d15() {
              for (; ++_0x22110c < _0x4bbde3.length;) {
                if (_0xd09a3a.call(_0x4bbde3, _0x22110c)) {
                  return _0x249d15.value = _0x4bbde3[_0x22110c], _0x249d15.done = !1, _0x249d15;
                }
              }
              return _0x249d15.value = _0x36d8c2, _0x249d15.done = !0, _0x249d15;
            };
          return _0x44d7fa.next = _0x44d7fa;
        }
      }
      throw new TypeError(_0x11d248(_0x4bbde3) + " is not iterable");
    }
    return _0x4b6daa.prototype = _0x2f984d, _0x3f4cc0(_0x5e8ce9, "constructor", {
      "value": _0x2f984d,
      "configurable": !0
    }), _0x3f4cc0(_0x2f984d, "constructor", {
      "value": _0x4b6daa,
      "configurable": !0
    }), _0x4b6daa.displayName = _0x1d190e(_0x2f984d, _0x295370, "GeneratorFunction"), _0x28494d.isGeneratorFunction = function (_0x224fe5) {
      var _0x5de46a = "function" == typeof _0x224fe5 && _0x224fe5.constructor;
      return !!_0x5de46a && (_0x5de46a === _0x4b6daa || "GeneratorFunction" === (_0x5de46a.displayName || _0x5de46a.name));
    }, _0x28494d.mark = function (_0x28c284) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(_0x28c284, _0x2f984d) : (_0x28c284.__proto__ = _0x2f984d, _0x1d190e(_0x28c284, _0x295370, "GeneratorFunction")), _0x28c284.prototype = Object.create(_0x5e8ce9), _0x28c284;
    }, _0x28494d.awrap = function (_0x3ed625) {
      var _0x590025 = {
        "__await": _0x3ed625
      };
      return _0x590025;
    }, _0x31e97b(_0xb651f9.prototype), _0x1d190e(_0xb651f9.prototype, _0x5c2a1f, function () {
      return this;
    }), _0x28494d.AsyncIterator = _0xb651f9, _0x28494d.async = function (_0x89111, _0x364c41, _0x3d08fd, _0x57150f, _0x320c10) {
      void 0 === _0x320c10 && (_0x320c10 = Promise);
      var _0x5bfa3f = new _0xb651f9(_0x300337(_0x89111, _0x364c41, _0x3d08fd, _0x57150f), _0x320c10);
      return _0x28494d.isGeneratorFunction(_0x364c41) ? _0x5bfa3f : _0x5bfa3f.next().then(function (_0x99aed1) {
        return _0x99aed1.done ? _0x99aed1.value : _0x5bfa3f.next();
      });
    }, _0x31e97b(_0x5e8ce9), _0x1d190e(_0x5e8ce9, _0x295370, "Generator"), _0x1d190e(_0x5e8ce9, _0x480a02, function () {
      return this;
    }), _0x1d190e(_0x5e8ce9, "toString", function () {
      return "[object Generator]";
    }), _0x28494d.keys = function (_0x5d4d51) {
      var _0x1ce32f = Object(_0x5d4d51),
        _0x16134e = [];
      for (var _0x3bc6bc in _0x1ce32f) _0x16134e.push(_0x3bc6bc);
      return _0x16134e.reverse(), function _0x3e882c() {
        for (; _0x16134e.length;) {
          var _0x205bf5 = _0x16134e.pop();
          if (_0x205bf5 in _0x1ce32f) {
            return _0x3e882c.value = _0x205bf5, _0x3e882c.done = !1, _0x3e882c;
          }
        }
        return _0x3e882c.done = !0, _0x3e882c;
      };
    }, _0x28494d.values = _0xb06426, _0x1a33cc.prototype = {
      "constructor": _0x1a33cc,
      "reset": function (_0x1981a8) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x36d8c2, this.done = !1, this.delegate = null, this.method = "next", this.arg = _0x36d8c2, this.tryEntries.forEach(_0x21bebb), !_0x1981a8) {
          for (var _0x2b4750 in this) "t" === _0x2b4750.charAt(0) && _0xd09a3a.call(this, _0x2b4750) && !isNaN(+_0x2b4750.slice(1)) && (this[_0x2b4750] = _0x36d8c2);
        }
      },
      "stop": function () {
        this.done = !0;
        var _0x5d9d1b = this.tryEntries[0].completion;
        if ("throw" === _0x5d9d1b.type) {
          throw _0x5d9d1b.arg;
        }
        return this.rval;
      },
      "dispatchException": function (_0x20fc80) {
        if (this.done) throw _0x20fc80;
        var _0x3a5518 = this;
        function _0x326f37(_0xc86b56, _0x4a2ae6) {
          _0x2461f5.type = "throw";
          _0x2461f5.arg = _0x20fc80;
          _0x3a5518.next = _0xc86b56;
          _0x4a2ae6 && (_0x3a5518.method = "next", _0x3a5518.arg = _0x36d8c2);
          return !!_0x4a2ae6;
        }
        for (var _0x4129ee = this.tryEntries.length - 1; _0x4129ee >= 0; --_0x4129ee) {
          var _0x547e58 = this.tryEntries[_0x4129ee],
            _0x2461f5 = _0x547e58.completion;
          if ("root" === _0x547e58.tryLoc) {
            return _0x326f37("end");
          }
          if (_0x547e58.tryLoc <= this.prev) {
            var _0x163015 = _0xd09a3a.call(_0x547e58, "catchLoc"),
              _0x5ea1eb = _0xd09a3a.call(_0x547e58, "finallyLoc");
            if (_0x163015 && _0x5ea1eb) {
              if (this.prev < _0x547e58.catchLoc) return _0x326f37(_0x547e58.catchLoc, !0);
              if (this.prev < _0x547e58.finallyLoc) return _0x326f37(_0x547e58.finallyLoc);
            } else {
              if (_0x163015) {
                if (this.prev < _0x547e58.catchLoc) return _0x326f37(_0x547e58.catchLoc, !0);
              } else {
                if (!_0x5ea1eb) throw Error("try statement without catch or finally");
                if (this.prev < _0x547e58.finallyLoc) return _0x326f37(_0x547e58.finallyLoc);
              }
            }
          }
        }
      },
      "abrupt": function (_0x1b12f5, _0x2cb5de) {
        for (var _0x16778c = this.tryEntries.length - 1; _0x16778c >= 0; --_0x16778c) {
          var _0x1ef448 = this.tryEntries[_0x16778c];
          if (_0x1ef448.tryLoc <= this.prev && _0xd09a3a.call(_0x1ef448, "finallyLoc") && this.prev < _0x1ef448.finallyLoc) {
            var _0x1e9a09 = _0x1ef448;
            break;
          }
        }
        _0x1e9a09 && ("break" === _0x1b12f5 || "continue" === _0x1b12f5) && _0x1e9a09.tryLoc <= _0x2cb5de && _0x2cb5de <= _0x1e9a09.finallyLoc && (_0x1e9a09 = null);
        var _0x2f435f = _0x1e9a09 ? _0x1e9a09.completion : {};
        return _0x2f435f.type = _0x1b12f5, _0x2f435f.arg = _0x2cb5de, _0x1e9a09 ? (this.method = "next", this.next = _0x1e9a09.finallyLoc, _0xf7adc4) : this.complete(_0x2f435f);
      },
      "complete": function (_0x2b2ecf, _0x3b52fa) {
        if ("throw" === _0x2b2ecf.type) {
          throw _0x2b2ecf.arg;
        }
        return "break" === _0x2b2ecf.type || "continue" === _0x2b2ecf.type ? this.next = _0x2b2ecf.arg : "return" === _0x2b2ecf.type ? (this.rval = this.arg = _0x2b2ecf.arg, this.method = "return", this.next = "end") : "normal" === _0x2b2ecf.type && _0x3b52fa && (this.next = _0x3b52fa), _0xf7adc4;
      },
      "finish": function (_0x50123c) {
        for (var _0x462faf = this.tryEntries.length - 1; _0x462faf >= 0; --_0x462faf) {
          var _0x57eed6 = this.tryEntries[_0x462faf];
          if (_0x57eed6.finallyLoc === _0x50123c) {
            return this.complete(_0x57eed6.completion, _0x57eed6.afterLoc), _0x21bebb(_0x57eed6), _0xf7adc4;
          }
        }
      },
      "catch": function (_0xfc5e72) {
        for (var _0x363646 = this.tryEntries.length - 1; _0x363646 >= 0; --_0x363646) {
          var _0x2a82cc = this.tryEntries[_0x363646];
          if (_0x2a82cc.tryLoc === _0xfc5e72) {
            var _0x126c5c = _0x2a82cc.completion;
            if ("throw" === _0x126c5c.type) {
              var _0x621d08 = _0x126c5c.arg;
              _0x21bebb(_0x2a82cc);
            }
            return _0x621d08;
          }
        }
        throw Error("illegal catch attempt");
      },
      "delegateYield": function (_0x3d5cd1, _0x123de5, _0x81565) {
        return this.delegate = {
          "iterator": _0xb06426(_0x3d5cd1),
          "resultName": _0x123de5,
          "nextLoc": _0x81565
        }, "next" === this.method && (this.arg = _0x36d8c2), _0xf7adc4;
      }
    }, _0x28494d;
  }
  function _0x256196(_0x2c8d91, _0x4a2294, _0x22b363, _0x39b972, _0x37d4e6, _0xdf6001, _0x3d4e92) {
    try {
      var _0x4c2c42 = _0x2c8d91[_0xdf6001](_0x3d4e92),
        _0x9ed1c6 = _0x4c2c42.value;
    } catch (_0x241610) {
      return void _0x22b363(_0x241610);
    }
    _0x4c2c42.done ? _0x4a2294(_0x9ed1c6) : Promise.resolve(_0x9ed1c6).then(_0x39b972, _0x37d4e6);
  }
  function _0x11107e(_0x183e09) {
    return function () {
      var _0x51e9fe = this,
        _0x5f471f = arguments;
      return new Promise(function (_0x7ba22f, _0x39a7bb) {
        var _0x499aff = _0x183e09.apply(_0x51e9fe, _0x5f471f);
        function _0x140910(_0x1112f4) {
          _0x256196(_0x499aff, _0x7ba22f, _0x39a7bb, _0x140910, _0x15c457, "next", _0x1112f4);
        }
        function _0x15c457(_0x5dc834) {
          _0x256196(_0x499aff, _0x7ba22f, _0x39a7bb, _0x140910, _0x15c457, "throw", _0x5dc834);
        }
        _0x140910(void 0);
      });
    };
  }
  var _0x2b6906 = ($.isNode() ? process.env.wcCk : $.getdata("WangChao")) || "",
    _0x3fefe6 = void 0,
    _0x51e323 = "",
    _0x200641 = "64",
    _0x392809 = "",
    _0x17924f = "",
    _0x575851 = "",
    _0x5e407e = "",
    _0x4c9a8e = "",
    _0x1ead16 = "",
    _0x2ec7f8 = "",
    _0x5e32f1 = "",
    _0x15f37e = "",
    _0x1d3370 = "",
    _0x1f158f = "10019",
    _0x4ce03e = "",
    _0x5c47d9 = "",
    _0x20ca74 = "FR*r!isE5W";
  function _0x92fe51() {
    return _0x4ff807.apply(this, arguments);
  }
  function _0x4ff807() {
    return _0x4ff807 = _0x11107e(_0x148d02().mark(function _0xbf0c6f() {
      var _0x4ec194, _0xcc89b4, _0x3962d9, _0x5a16b7, _0x3880fc, _0x29c625, _0x4897e9, _0x417c4b, _0x12572f, _0x5d8e12, _0x677d1c, _0x38f8d5, _0x3c3ddf, _0x5a2470, _0x41d8cf, _0x560749, _0x4a40dc, _0x5c2593, _0x442712, _0x40f6a8, _0x10c426, _0x1109ff, _0xadb0c6, _0x46ac1d, _0x3f4311, _0x480663, _0x3f91f1, _0x2c06e6, _0x398be5, _0x10f9ed, _0x4be934, _0x163bb8, _0x1b37d2, _0x21873d, _0x5b56a5, _0x9a8956, _0x3bdbb8, _0x43290b, _0x29fcac, _0x40e612, _0x3b0e07;
      return _0x148d02().wrap(function (_0x3d233b) {
        for (;;) {
          switch (_0x3d233b.prev = _0x3d233b.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), _0x2b6906) {
                _0x3d233b.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码"), _0x3d233b.next = 5;
              return _0x5d9b42("先去boxjs填写账号密码");
            case 5:
              return _0x3d233b.abrupt("return");
            case 6:
              _0x3d233b.next = 8;
              return _0x3bc109();
            case 8:
              _0x3fefe6 = _0x3d233b.sent, _0x4ec194 = _0x2b6906.split("&"), _0xcc89b4 = _0x3afa42(_0x4ec194), _0x3d233b.prev = 11, _0xcc89b4.s();
            case 13:
              if ((_0x3962d9 = _0xcc89b4.n()).done) {
                _0x3d233b.next = 179;
                break;
              }
              _0x5a16b7 = _0x3962d9.value, console.log("随机生成UA"), _0x3880fc = _0x5c2a05(), _0x392809 = _0x3880fc.ua, _0x17924f = _0x3880fc.commonUa, _0x575851 = _0x3880fc.uuid, console.log(_0x392809), console.log(_0x17924f), _0x5e32f1 = _0x5a16b7.split("#")[0], _0x15f37e = _0x5a16b7.split("#")[1], console.log("用户：".concat(_0x5e32f1, "开始任务")), console.log("获取sessionId"), _0x3d233b.next = 28;
              return _0x388d6a("/api/account/init");
            case 28:
              _0x29c625 = _0x3d233b.sent, _0x4ce03e = _0x29c625.data.session.id, console.log(_0x4ce03e), console.log("获取signature_key"), _0x3d233b.next = 34;
              return _0x15e6d4("/web/init?client_id=".concat(_0x1f158f));
            case 34:
              _0x4897e9 = _0x3d233b.sent, _0x51e323 = _0x4897e9.data.client.signature_key, console.log(_0x51e323), console.log("获取code"), _0x3d233b.next = 40;
              return _0x5025da("/web/oauth/credential_auth");
            case 40:
              if (_0x417c4b = _0x3d233b.sent, _0x417c4b.data) {
                _0x3d233b.next = 44;
                break;
              }
              console.log(_0x417c4b.message);
              return _0x3d233b.abrupt("continue", 177);
            case 44:
              _0x12572f = _0x417c4b.data.authorization_code.code, console.log(_0x12572f), console.log("登录"), _0x3d233b.next = 49;
              return _0x388d6a("/api/zbtxz/login", "check_token=&code=".concat(_0x12572f, "&token=&type=-1&union_id="));
            case 49:
              _0x5d8e12 = _0x3d233b.sent, console.log("登录成功"), _0x2ec7f8 = _0x5d8e12.data.session.account_id, _0x4ce03e = _0x5d8e12.data.session.id, _0x3d233b.next = 55;
              return _0x38f6f1("/api/app_feature_switch/list");
            case 55:
              if (_0x677d1c = _0x3d233b.sent, console.log("进入app：".concat(_0x677d1c.message)), console.log("获取id"), _0x1d3370) {
                _0x3d233b.next = 64;
                break;
              }
              _0x3d233b.next = 61;
              return _0x38f6f1("/api/article/channel_list?channel_id=639abec5e305b418fc469e3b&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 61:
              _0x38f8d5 = _0x3d233b.sent, _0x3c3ddf = _0x3afa42(_0x38f8d5.data.article_list);
              try {
                for (_0x3c3ddf.s(); !(_0x5a2470 = _0x3c3ddf.n()).done;) {
                  if (_0x41d8cf = _0x5a2470.value, JSON.stringify(_0x41d8cf).includes("阅读有礼")) {
                    _0x560749 = _0x3afa42(_0x41d8cf.column_news_list);
                    try {
                      for (_0x560749.s(); !(_0x4a40dc = _0x560749.n()).done;) {
                        if (_0x5c2593 = _0x4a40dc.value, JSON.stringify(_0x5c2593).includes("阅读有礼")) {
                          for (_0x442712 = _0x5c2593.url.split("?")[1], _0x40f6a8 = {}, _0x10c426 = _0x442712.split("&"), _0x1109ff = 0, _0xadb0c6 = _0x10c426.length; _0x1109ff < _0xadb0c6; _0x1109ff++) {
                            _0x46ac1d = _0x10c426[_0x1109ff].split("=");
                            _0x40f6a8[_0x46ac1d[0]] = _0x46ac1d[1];
                          }
                          _0x1d3370 = _0x40f6a8.id;
                        }
                      }
                    } catch (_0x305ee8) {
                      _0x560749.e(_0x305ee8);
                    } finally {
                      _0x560749.f();
                    }
                  }
                }
              } catch (_0x2dd792) {
                _0x3c3ddf.e(_0x2dd792);
              } finally {
                _0x3c3ddf.f();
              }
            case 64:
              if (_0x1d3370) {
                _0x3d233b.next = 66;
                break;
              }
              return _0x3d233b.abrupt("continue", 177);
            case 66:
              console.log(_0x1d3370), _0x3d233b.next = 69;
              return _0x38f6f1("/api/article/detail?id=".concat(_0x1d3370));
            case 69:
              _0x3d233b.sent, console.log("————————————"), console.log("阅读抽奖"), _0x5e407e = "", console.log("获取登录cookie"), _0x3d233b.next = 76;
              return _0x2a40af("/prod-api/user-read/app/login?id=".concat(_0x2ec7f8, "&sessionId=").concat(_0x4ce03e, "&deviceId=").concat(_0x575851));
            case 76:
              if (_0x5e407e = _0x3d233b.sent, _0x5e407e) {
                _0x3d233b.next = 79;
                break;
              }
              return _0x3d233b.abrupt("continue", 177);
            case 79:
              console.log(_0x5e407e), _0x3d233b.next = 82;
              return _0x5e0d01("/prod-api/user-read/list/".concat(_0x543a31()));
            case 82:
              _0x3f4311 = _0x3d233b.sent, _0x480663 = _0x3afa42(_0x3f4311.data.articleIsReadList), _0x3d233b.prev = 84, _0x480663.s();
            case 86:
              if ((_0x3f91f1 = _0x480663.n()).done) {
                _0x3d233b.next = 102;
                break;
              }
              _0x2c06e6 = _0x3f91f1.value, console.log("文章：".concat(_0x2c06e6.title)), _0x3d233b.next = 91;
              return _0x38f6f1("/api/article/detail?id=".concat(_0x2c06e6.newsId));
            case 91:
              _0x3d233b.sent, _0x3d233b.next = 94;
              return _0x38f6f1("/api/article/read_time?channel_article_id=".concat(_0x2c06e6.newsId, "&is_end=true&read_time=7934"));
            case 94:
              _0x3d233b.sent, _0x398be5 = JSON.stringify({
                "timestamp": Date.now(),
                "articleId": _0x2c06e6.id,
                "accountId": _0x2ec7f8
              }), _0x3d233b.next = 98;
              return _0x5e0d01("/prod-api/already-read/article/new?signature=".concat(_0x31a7f7(_0x398be5)), _0x398be5);
            case 98:
              _0x10f9ed = _0x3d233b.sent, console.log("阅读：".concat(_0x10f9ed.msg));
            case 100:
              _0x3d233b.next = 86;
              break;
            case 102:
              _0x3d233b.next = 107;
              break;
            case 104:
              _0x3d233b.prev = 104, _0x3d233b.t0 = _0x3d233b.catch(84), _0x480663.e(_0x3d233b.t0);
            case 107:
              _0x3d233b.prev = 107, _0x480663.f();
              return _0x3d233b.finish(107);
            case 110:
              _0x3d233b.next = 112;
              return _0x5e0d01("/prod-api/user-read-count/count/".concat(_0x543a31()));
            case 112:
              if (_0x4be934 = _0x3d233b.sent, console.log("剩余抽奖次数：".concat(_0x4be934.data)), !(_0x4be934.data > 0)) {
                _0x3d233b.next = 132;
                break;
              }
              _0x1ead16 = "", _0x3d233b.next = 118;
              return _0x1018cd("/tzrb/user/loginWC?accountId=".concat(_0x2ec7f8, "&sessionId=").concat(_0x4ce03e));
            case 118:
              _0x1ead16 = _0x3d233b.sent, console.log("获取抽奖cookie"), console.log(_0x1ead16), _0x3d233b.next = 123;
              return _0x4a67df("/tzrb/awardUpgrade/list?activityId=67");
            case 123:
              _0x163bb8 = _0x3d233b.sent, _0x1b37d2 = _0x163bb8.data, _0x21873d = _0x148d02().mark(function _0x3b51ba() {
                var _0x2445cb, _0x22f4bf;
                return _0x148d02().wrap(function (_0x473584) {
                  for (;;) {
                    switch (_0x473584.prev = _0x473584.next) {
                      case 0:
                        _0x473584.next = 2;
                        return _0x217aea("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                      case 2:
                        _0x2445cb = _0x473584.sent, _0x22f4bf = _0x1b37d2.findIndex(function (_0x479ae4) {
                          return _0x479ae4.id == _0x2445cb.data;
                        }), -1 != _0x22f4bf ? (console.log("抽奖获得：".concat(_0x1b37d2[_0x22f4bf].title)), _0x5c47d9 += "用户：".concat(_0x5e32f1, " 抽奖获得：").concat(_0x1b37d2[_0x22f4bf].title, "\n")) : console.log(JSON.stringify(_0x2445cb));
                      case 5:
                      case "end":
                        return _0x473584.stop();
                    }
                  }
                }, _0x3b51ba);
              }), _0x5b56a5 = 0;
            case 127:
              if (!(_0x5b56a5 < _0x4be934.data)) {
                _0x3d233b.next = 132;
                break;
              }
              return _0x3d233b.delegateYield(_0x21873d(), "t1", 129);
            case 129:
              _0x5b56a5++, _0x3d233b.next = 127;
              break;
            case 132:
              console.log("————————————"), console.log("答题抽奖"), _0x4c9a8e = "", console.log("获取登录cookie"), _0x3d233b.next = 138;
              return _0x30519c("/wcgames/WordFillGame/login/?accountId=".concat(_0x2ec7f8, "&sessionId=").concat(_0x4ce03e));
            case 138:
              if (_0x4c9a8e = _0x3d233b.sent, _0x4c9a8e) {
                _0x3d233b.next = 141;
                break;
              }
              return _0x3d233b.abrupt("continue", 177);
            case 141:
              console.log(_0x4c9a8e), _0x3d233b.next = 144;
              return _0x3cbcee("/wcgames/WordFillGame/get_user_info/");
            case 144:
              _0x9a8956 = _0x3d233b.sent, console.log("今日答题进度：".concat(_0x9a8956.data.answerCount, "/5 已闯过").concat(_0x9a8956.data.level, "关")), _0x3bdbb8 = _0x9a8956.data.answerCount;
            case 147:
              if (!(_0x3bdbb8 < 5)) {
                _0x3d233b.next = 163;
                break;
              }
              console.log("获取题目"), _0x3d233b.next = 151;
              return _0x3cbcee("/wcgames/WordFillGame/get_question/");
            case 151:
              if (_0x29fcac = _0x3d233b.sent, null != _0x29fcac && null !== (_0x43290b = _0x29fcac.data) && void 0 !== _0x43290b && _0x43290b.question) {
                _0x3d233b.next = 155;
                break;
              }
              console.log(_0x29fcac.message);
              return _0x3d233b.abrupt("break", 163);
            case 155:
              console.log("题目：".concat(_0x29fcac.data.question, " 答案：").concat(_0x29fcac.data.answer)), _0x3d233b.next = 158;
              return _0x107e87("/wcgames/WordFillGame/submit_answer/", "accountId=".concat(_0x2ec7f8));
            case 158:
              _0x40e612 = _0x3d233b.sent, console.log("答题：".concat(_0x40e612.message));
            case 160:
              _0x3bdbb8++, _0x3d233b.next = 147;
              break;
            case 163:
              _0x3d233b.next = 165;
              return _0x3cbcee("/wcgames/WordFillGame/get_user_info/");
            case 165:
              if (_0x9a8956 = _0x3d233b.sent, 1 != _0x9a8956.data.isGetRed) {
                _0x3d233b.next = 169;
                break;
              }
              console.log("已领取支付宝红包");
              return _0x3d233b.abrupt("continue", 177);
            case 169:
              if (1 == _0x9a8956.data.alipayId_bind) {
                _0x3d233b.next = 172;
                break;
              }
              console.log("未绑定支付宝");
              return _0x3d233b.abrupt("continue", 177);
            case 172:
              _0x3d233b.next = 174;
              return _0x3cbcee("/wcgames/WordFillGame/generate_custom_redpacket/");
            case 174:
              _0x3b0e07 = _0x3d233b.sent, console.log("答题抽奖获得支付宝红包：".concat(_0x3b0e07.message, "元")), _0x5c47d9 += "用户：".concat(_0x5e32f1, " 答题抽奖获得支付宝红包：").concat(_0x3b0e07.message, "元\n");
            case 177:
              _0x3d233b.next = 13;
              break;
            case 179:
              _0x3d233b.next = 184;
              break;
            case 181:
              _0x3d233b.prev = 181, _0x3d233b.t2 = _0x3d233b.catch(11), _0xcc89b4.e(_0x3d233b.t2);
            case 184:
              _0x3d233b.prev = 184, _0xcc89b4.f();
              return _0x3d233b.finish(184);
            case 187:
              if (!_0x5c47d9) {
                _0x3d233b.next = 190;
                break;
              }
              _0x3d233b.next = 190;
              return _0x5d9b42(_0x5c47d9);
            case 190:
            case "end":
              return _0x3d233b.stop();
          }
        }
      }, _0xbf0c6f, null, [[11, 181, 184, 187], [84, 104, 107, 110]]);
    })), _0x4ff807.apply(this, arguments);
  }
  function _0x15e6d4(_0x3cbad1) {
    return _0xb46917.apply(this, arguments);
  }
  function _0xb46917() {
    return _0xb46917 = _0x11107e(_0x148d02().mark(function _0xd63093(_0x3c42db) {
      return _0x148d02().wrap(function (_0x394da3) {
        for (;;) {
          switch (_0x394da3.prev = _0x394da3.next) {
            case 0:
              return _0x394da3.abrupt("return", new Promise(function (_0x43f77c) {
                var _0xd29541 = {
                  "url": "https://passport.tmuyun.com".concat(_0x3c42db),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": _0x4f6fc1(),
                    "Accept-Encoding": "gzip",
                    "user-agent": _0x392809
                  }
                };
                $.get(_0xd29541, function () {
                  var _0x40e9e9 = _0x11107e(_0x148d02().mark(function _0x387abb(_0x5a6470, _0x11a346, _0x22254e) {
                    return _0x148d02().wrap(function (_0x5d23a7) {
                      for (;;) {
                        switch (_0x5d23a7.prev = _0x5d23a7.next) {
                          case 0:
                            try {
                              _0x5a6470 ? (console.log("".concat(JSON.stringify(_0x5a6470))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : _0x43f77c(JSON.parse(_0x22254e));
                            } catch (_0x37d82f) {
                              $.logErr(_0x37d82f, _0x11a346);
                            } finally {
                              _0x43f77c();
                            }
                          case 1:
                          case "end":
                            return _0x5d23a7.stop();
                        }
                      }
                    }, _0x387abb);
                  }));
                  return function (_0x484d02, _0x38d062, _0x45e7a2) {
                    return _0x40e9e9.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x394da3.stop();
          }
        }
      }, _0xd63093);
    })), _0xb46917.apply(this, arguments);
  }
  function _0x5025da(_0x43da42) {
    return _0x3a3f24.apply(this, arguments);
  }
  function _0x3a3f24() {
    return _0x3a3f24 = _0x11107e(_0x148d02().mark(function _0x486e19(_0x33df9f) {
      var _0x24fa38;
      return _0x148d02().wrap(function (_0xae0449) {
        for (;;) {
          switch (_0xae0449.prev = _0xae0449.next) {
            case 0:
              _0x24fa38 = _0x14f2b8();
              return _0xae0449.abrupt("return", new Promise(function (_0xef6676) {
                var _0x37d5b2 = {
                    "Connection": "Keep-Alive",
                    "X-REQUEST-ID": _0x24fa38.uuid,
                    "X-SIGNATURE": _0x24fa38.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": _0x392809
                  },
                  _0x342337 = {
                    "url": "https://passport.tmuyun.com".concat(_0x33df9f),
                    "headers": _0x37d5b2,
                    "body": _0x24fa38.body
                  };
                $.post(_0x342337, function () {
                  var _0x46e739 = _0x11107e(_0x148d02().mark(function _0x4129e4(_0x1e3c1e, _0x317a5b, _0x4b9215) {
                    return _0x148d02().wrap(function (_0x720602) {
                      for (;;) {
                        switch (_0x720602.prev = _0x720602.next) {
                          case 0:
                            try {
                              _0x1e3c1e ? (console.log("".concat(JSON.stringify(_0x1e3c1e))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : _0xef6676(JSON.parse(_0x4b9215));
                            } catch (_0x16ad29) {
                              $.logErr(_0x16ad29, _0x317a5b);
                            } finally {
                              _0xef6676();
                            }
                          case 1:
                          case "end":
                            return _0x720602.stop();
                        }
                      }
                    }, _0x4129e4);
                  }));
                  return function (_0x48db2a, _0x2716d2, _0xd9167b) {
                    return _0x46e739.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return _0xae0449.stop();
          }
        }
      }, _0x486e19);
    })), _0x3a3f24.apply(this, arguments);
  }
  function _0x38f6f1(_0x3c836a) {
    return _0x102ab2.apply(this, arguments);
  }
  function _0x102ab2() {
    return _0x102ab2 = _0x11107e(_0x148d02().mark(function _0x4330ee(_0x53edbf) {
      var _0x108235;
      return _0x148d02().wrap(function (_0x583eee) {
        for (;;) {
          switch (_0x583eee.prev = _0x583eee.next) {
            case 0:
              _0x108235 = _0x38d43e(_0x53edbf);
              return _0x583eee.abrupt("return", new Promise(function (_0xce9b11) {
                var _0x3db28d = {
                  "url": "https://vapp.taizhou.com.cn".concat(_0x53edbf),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "X-TIMESTAMP": _0x108235.time,
                    "X-SESSION-ID": _0x4ce03e,
                    "X-REQUEST-ID": _0x108235.uuid,
                    "X-SIGNATURE": _0x108235.signature,
                    "X-TENANT-ID": _0x200641,
                    "X-ACCOUNT-ID": _0x2ec7f8,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": _0x17924f
                  }
                };
                $.get(_0x3db28d, function () {
                  var _0x1d2d6a = _0x11107e(_0x148d02().mark(function _0x1cfdb9(_0x5b1cbf, _0x25968c, _0x3969d1) {
                    return _0x148d02().wrap(function (_0x2487d8) {
                      for (;;) {
                        switch (_0x2487d8.prev = _0x2487d8.next) {
                          case 0:
                            if (_0x2487d8.prev = 0, !_0x5b1cbf) {
                              _0x2487d8.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x5b1cbf))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x2487d8.next = 9;
                            break;
                          case 6:
                            _0x2487d8.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0xce9b11(JSON.parse(_0x3969d1));
                          case 9:
                            _0x2487d8.next = 14;
                            break;
                          case 11:
                            _0x2487d8.prev = 11, _0x2487d8.t0 = _0x2487d8.catch(0), $.logErr(_0x2487d8.t0, _0x25968c);
                          case 14:
                            _0x2487d8.prev = 14, _0xce9b11();
                            return _0x2487d8.finish(14);
                          case 17:
                          case "end":
                            return _0x2487d8.stop();
                        }
                      }
                    }, _0x1cfdb9, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x4efdf4, _0x54378f, _0x554376) {
                    return _0x1d2d6a.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return _0x583eee.stop();
          }
        }
      }, _0x4330ee);
    })), _0x102ab2.apply(this, arguments);
  }
  function _0x388d6a(_0x5e9aac, _0x4955ec) {
    return _0x3c2c72.apply(this, arguments);
  }
  function _0x3c2c72() {
    return _0x3c2c72 = _0x11107e(_0x148d02().mark(function _0xe1f8e2(_0x2400c6, _0x5bbfbb) {
      var _0x22bac9;
      return _0x148d02().wrap(function (_0x425046) {
        for (;;) {
          switch (_0x425046.prev = _0x425046.next) {
            case 0:
              _0x22bac9 = _0x38d43e(_0x2400c6);
              return _0x425046.abrupt("return", new Promise(function (_0x587561) {
                var _0x59cf1d = {
                    "Connection": "Keep-Alive",
                    "X-TIMESTAMP": _0x22bac9.time,
                    "X-SESSION-ID": _0x4ce03e,
                    "X-REQUEST-ID": _0x22bac9.uuid,
                    "X-SIGNATURE": _0x22bac9.signature,
                    "X-TENANT-ID": _0x200641,
                    "X-ACCOUNT-ID": _0x2ec7f8,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": _0x17924f
                  },
                  _0x229214 = {
                    "url": "https://vapp.taizhou.com.cn".concat(_0x2400c6),
                    "headers": _0x59cf1d,
                    "body": _0x5bbfbb
                  };
                $.post(_0x229214, function () {
                  var _0x4432f5 = _0x11107e(_0x148d02().mark(function _0x57bd45(_0x206d95, _0x1ca834, _0x416199) {
                    return _0x148d02().wrap(function (_0x2ed8ef) {
                      for (;;) {
                        switch (_0x2ed8ef.prev = _0x2ed8ef.next) {
                          case 0:
                            if (_0x2ed8ef.prev = 0, !_0x206d95) {
                              _0x2ed8ef.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x206d95))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x2ed8ef.next = 9;
                            break;
                          case 6:
                            _0x2ed8ef.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x587561(JSON.parse(_0x416199));
                          case 9:
                            _0x2ed8ef.next = 14;
                            break;
                          case 11:
                            _0x2ed8ef.prev = 11, _0x2ed8ef.t0 = _0x2ed8ef.catch(0), $.logErr(_0x2ed8ef.t0, _0x1ca834);
                          case 14:
                            _0x2ed8ef.prev = 14, _0x587561();
                            return _0x2ed8ef.finish(14);
                          case 17:
                          case "end":
                            return _0x2ed8ef.stop();
                        }
                      }
                    }, _0x57bd45, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x49ae4b, _0x5df94b, _0xb12a8c) {
                    return _0x4432f5.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return _0x425046.stop();
          }
        }
      }, _0xe1f8e2);
    })), _0x3c2c72.apply(this, arguments);
  }
  function _0x2a40af(_0x1b9d4e) {
    return _0x2afab3.apply(this, arguments);
  }
  function _0x2afab3() {
    return _0x2afab3 = _0x11107e(_0x148d02().mark(function _0x470fa9(_0x3e15b8) {
      return _0x148d02().wrap(function (_0x49de6e) {
        for (;;) {
          switch (_0x49de6e.prev = _0x49de6e.next) {
            case 0:
              return _0x49de6e.abrupt("return", new Promise(function (_0x1af4df) {
                var _0xe04a5e = {
                  "url": "https://xmt.taizhou.com.cn".concat(_0x3e15b8),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Accept": "*/*",
                    "Cookie": _0x5e407e,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Referer": "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0xe04a5e, function () {
                  var _0xb595b9 = _0x11107e(_0x148d02().mark(function _0x537c6c(_0x16244b, _0xe4b2d, _0x1a222d) {
                    return _0x148d02().wrap(function (_0x519cbf) {
                      for (;;) {
                        switch (_0x519cbf.prev = _0x519cbf.next) {
                          case 0:
                            if (_0x519cbf.prev = 0, !_0x16244b) {
                              _0x519cbf.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x16244b))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x519cbf.next = 16;
                            break;
                          case 6:
                            _0x519cbf.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(_0x1a222d).code) {
                              _0x519cbf.next = 13;
                              break;
                            }
                            console.log(JSON.parse(_0x1a222d).msg), _0x5c47d9 += "用户：".concat(_0x5e32f1, " ").concat(JSON.parse(_0x1a222d).msg, "\n"), _0x1af4df("");
                            return _0x519cbf.abrupt("return");
                          case 13:
                            _0x5e407e = $.isNode() ? _0xe4b2d.headers["set-cookie"][0] : _0xe4b2d.headers["set-cookie"] || _0xe4b2d.headers["Set-Cookie"], _0x5e407e = _0x5e407e.split(";")[0], _0x1af4df(_0x5e407e);
                          case 16:
                            _0x519cbf.next = 21;
                            break;
                          case 18:
                            _0x519cbf.prev = 18, _0x519cbf.t0 = _0x519cbf.catch(0), $.logErr(_0x519cbf.t0, _0xe4b2d);
                          case 21:
                            _0x519cbf.prev = 21, _0x1af4df();
                            return _0x519cbf.finish(21);
                          case 24:
                          case "end":
                            return _0x519cbf.stop();
                        }
                      }
                    }, _0x537c6c, null, [[0, 18, 21, 24]]);
                  }));
                  return function (_0x39e9c7, _0x5204c3, _0x3287bc) {
                    return _0xb595b9.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x49de6e.stop();
          }
        }
      }, _0x470fa9);
    })), _0x2afab3.apply(this, arguments);
  }
  function _0x5e0d01(_0x161cd9) {
    return _0x4dde61.apply(this, arguments);
  }
  function _0x4dde61() {
    return _0x4dde61 = _0x11107e(_0x148d02().mark(function _0x2f16e9(_0x119089) {
      return _0x148d02().wrap(function (_0x196329) {
        for (;;) {
          switch (_0x196329.prev = _0x196329.next) {
            case 0:
              return _0x196329.abrupt("return", new Promise(function (_0x42a065) {
                var _0x39257f = {
                  "url": "https://xmt.taizhou.com.cn".concat(_0x119089),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Accept": "*/*",
                    "Cookie": _0x5e407e,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Referer": "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0x39257f, function () {
                  var _0x45ffc6 = _0x11107e(_0x148d02().mark(function _0x171681(_0x55960e, _0xa43085, _0x1d8c52) {
                    return _0x148d02().wrap(function (_0x482da3) {
                      for (;;) {
                        switch (_0x482da3.prev = _0x482da3.next) {
                          case 0:
                            if (_0x482da3.prev = 0, !_0x55960e) {
                              _0x482da3.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x55960e))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x482da3.next = 9;
                            break;
                          case 6:
                            _0x482da3.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x42a065(JSON.parse(_0x1d8c52));
                          case 9:
                            _0x482da3.next = 14;
                            break;
                          case 11:
                            _0x482da3.prev = 11, _0x482da3.t0 = _0x482da3.catch(0), $.logErr(_0x482da3.t0, _0xa43085);
                          case 14:
                            _0x482da3.prev = 14, _0x42a065();
                            return _0x482da3.finish(14);
                          case 17:
                          case "end":
                            return _0x482da3.stop();
                        }
                      }
                    }, _0x171681, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x596351, _0x19198a, _0x598abb) {
                    return _0x45ffc6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x196329.stop();
          }
        }
      }, _0x2f16e9);
    })), _0x4dde61.apply(this, arguments);
  }
  function _0x1018cd(_0x21e961) {
    return _0x584eac.apply(this, arguments);
  }
  function _0x584eac() {
    return _0x584eac = _0x11107e(_0x148d02().mark(function _0x8ca0f0(_0x5ae1f9) {
      return _0x148d02().wrap(function (_0x1b4e5a) {
        for (;;) {
          switch (_0x1b4e5a.prev = _0x1b4e5a.next) {
            case 0:
              return _0x1b4e5a.abrupt("return", new Promise(function (_0xb853c2) {
                var _0x27fa3f = {
                  "url": "https://srv-app.taizhou.com.cn".concat(_0x5ae1f9),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Accept": "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "cookie": _0x1ead16,
                    "Referer": "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0x27fa3f, function () {
                  var _0x127d3e = _0x11107e(_0x148d02().mark(function _0x5a9fc8(_0x2621df, _0x33df23, _0x45632e) {
                    return _0x148d02().wrap(function (_0x264cc7) {
                      for (;;) {
                        switch (_0x264cc7.prev = _0x264cc7.next) {
                          case 0:
                            if (_0x264cc7.prev = 0, !_0x2621df) {
                              _0x264cc7.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x2621df))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x264cc7.next = 11;
                            break;
                          case 6:
                            _0x264cc7.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x1ead16 = $.isNode() ? _0x33df23.headers["set-cookie"][0] : _0x33df23.headers["set-cookie"] || _0x33df23.headers["Set-Cookie"], _0x1ead16 = _0x1ead16.split(";")[0], _0xb853c2(_0x1ead16);
                          case 11:
                            _0x264cc7.next = 16;
                            break;
                          case 13:
                            _0x264cc7.prev = 13, _0x264cc7.t0 = _0x264cc7.catch(0), $.logErr(_0x264cc7.t0, _0x33df23);
                          case 16:
                            _0x264cc7.prev = 16, _0xb853c2();
                            return _0x264cc7.finish(16);
                          case 19:
                          case "end":
                            return _0x264cc7.stop();
                        }
                      }
                    }, _0x5a9fc8, null, [[0, 13, 16, 19]]);
                  }));
                  return function (_0x23a7ee, _0x50af14, _0x70a671) {
                    return _0x127d3e.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x1b4e5a.stop();
          }
        }
      }, _0x8ca0f0);
    })), _0x584eac.apply(this, arguments);
  }
  function _0x4a67df(_0x469852) {
    return _0x82db10.apply(this, arguments);
  }
  function _0x82db10() {
    return _0x82db10 = _0x11107e(_0x148d02().mark(function _0x114168(_0xf8987c) {
      return _0x148d02().wrap(function (_0x23b064) {
        for (;;) {
          switch (_0x23b064.prev = _0x23b064.next) {
            case 0:
              return _0x23b064.abrupt("return", new Promise(function (_0x208dc0) {
                var _0x39b8a6 = {
                  "url": "https://srv-app.taizhou.com.cn".concat(_0xf8987c),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Accept": "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "cookie": _0x1ead16,
                    "Referer": "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0x39b8a6, function () {
                  var _0x33ef53 = _0x11107e(_0x148d02().mark(function _0x45439a(_0xb5dbb9, _0x29723e, _0x1e103f) {
                    return _0x148d02().wrap(function (_0xea9ddd) {
                      for (;;) {
                        switch (_0xea9ddd.prev = _0xea9ddd.next) {
                          case 0:
                            if (_0xea9ddd.prev = 0, !_0xb5dbb9) {
                              _0xea9ddd.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0xb5dbb9))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0xea9ddd.next = 9;
                            break;
                          case 6:
                            _0xea9ddd.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x208dc0(JSON.parse(_0x1e103f));
                          case 9:
                            _0xea9ddd.next = 14;
                            break;
                          case 11:
                            _0xea9ddd.prev = 11, _0xea9ddd.t0 = _0xea9ddd.catch(0), $.logErr(_0xea9ddd.t0, _0x29723e);
                          case 14:
                            _0xea9ddd.prev = 14, _0x208dc0();
                            return _0xea9ddd.finish(14);
                          case 17:
                          case "end":
                            return _0xea9ddd.stop();
                        }
                      }
                    }, _0x45439a, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0xbc58e8, _0x2472e2, _0x2dbc5f) {
                    return _0x33ef53.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x23b064.stop();
          }
        }
      }, _0x114168);
    })), _0x82db10.apply(this, arguments);
  }
  function _0x217aea(_0x3067a9, _0x4a2308) {
    return _0x46b344.apply(this, arguments);
  }
  function _0x46b344() {
    return _0x46b344 = _0x11107e(_0x148d02().mark(function _0x29fad3(_0xc3ac21, _0x538cf7) {
      return _0x148d02().wrap(function (_0x4cf11a) {
        for (;;) {
          switch (_0x4cf11a.prev = _0x4cf11a.next) {
            case 0:
              return _0x4cf11a.abrupt("return", new Promise(function (_0x44ad89) {
                var _0x26a31a = {
                  "url": "https://srv-app.taizhou.com.cn".concat(_0xc3ac21),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Accept": "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "cookie": _0x1ead16,
                    "Referer": "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  "body": _0x538cf7
                };
                $.post(_0x26a31a, function () {
                  var _0x165b8e = _0x11107e(_0x148d02().mark(function _0x1324bc(_0x27b89e, _0x1e88f0, _0x19fe05) {
                    return _0x148d02().wrap(function (_0x3a206e) {
                      for (;;) {
                        switch (_0x3a206e.prev = _0x3a206e.next) {
                          case 0:
                            if (_0x3a206e.prev = 0, !_0x27b89e) {
                              _0x3a206e.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x27b89e))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x3a206e.next = 9;
                            break;
                          case 6:
                            _0x3a206e.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x44ad89(JSON.parse(_0x19fe05));
                          case 9:
                            _0x3a206e.next = 14;
                            break;
                          case 11:
                            _0x3a206e.prev = 11, _0x3a206e.t0 = _0x3a206e.catch(0), $.logErr(_0x3a206e.t0, _0x1e88f0);
                          case 14:
                            _0x3a206e.prev = 14, _0x44ad89();
                            return _0x3a206e.finish(14);
                          case 17:
                          case "end":
                            return _0x3a206e.stop();
                        }
                      }
                    }, _0x1324bc, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x44bf9a, _0x7e9206, _0x5a5a23) {
                    return _0x165b8e.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x4cf11a.stop();
          }
        }
      }, _0x29fad3);
    })), _0x46b344.apply(this, arguments);
  }
  function _0x30519c(_0x23a844) {
    return _0x49c8d7.apply(this, arguments);
  }
  function _0x49c8d7() {
    return _0x49c8d7 = _0x11107e(_0x148d02().mark(function _0x1f1fd1(_0xa876ce) {
      return _0x148d02().wrap(function (_0x2aabf1) {
        for (;;) {
          switch (_0x2aabf1.prev = _0x2aabf1.next) {
            case 0:
              return _0x2aabf1.abrupt("return", new Promise(function (_0x140ff3) {
                var _0x4979a9 = {
                  "url": "https://srv2.taizhou.com.cn".concat(_0xa876ce),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Accept": "*/*",
                    "Cookie": _0x4c9a8e,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Referer": "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0x4979a9, function () {
                  var _0x47c2e4 = _0x11107e(_0x148d02().mark(function _0x195d07(_0x45aafe, _0x209343, _0x115760) {
                    return _0x148d02().wrap(function (_0x4a724c) {
                      for (;;) {
                        switch (_0x4a724c.prev = _0x4a724c.next) {
                          case 0:
                            if (_0x4a724c.prev = 0, !_0x45aafe) {
                              _0x4a724c.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x45aafe))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x4a724c.next = 16;
                            break;
                          case 6:
                            _0x4a724c.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(_0x115760).code) {
                              _0x4a724c.next = 13;
                              break;
                            }
                            console.log(JSON.parse(_0x115760).msg), _0x5c47d9 += "用户：".concat(_0x5e32f1, " ").concat(JSON.parse(_0x115760).msg, "\n"), _0x140ff3("");
                            return _0x4a724c.abrupt("return");
                          case 13:
                            _0x4c9a8e = $.isNode() ? _0x209343.headers["set-cookie"][0] || _0x209343.headers["Set-Cookie"][0] : _0x209343.headers["set-cookie"] || _0x209343.headers["Set-Cookie"], _0x4c9a8e = _0x4c9a8e.split(";")[0], _0x140ff3(_0x4c9a8e);
                          case 16:
                            _0x4a724c.next = 21;
                            break;
                          case 18:
                            _0x4a724c.prev = 18, _0x4a724c.t0 = _0x4a724c.catch(0), $.logErr(_0x4a724c.t0, _0x209343);
                          case 21:
                            _0x4a724c.prev = 21, _0x140ff3();
                            return _0x4a724c.finish(21);
                          case 24:
                          case "end":
                            return _0x4a724c.stop();
                        }
                      }
                    }, _0x195d07, null, [[0, 18, 21, 24]]);
                  }));
                  return function (_0x2574f9, _0x4eb436, _0x3ed082) {
                    return _0x47c2e4.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x2aabf1.stop();
          }
        }
      }, _0x1f1fd1);
    })), _0x49c8d7.apply(this, arguments);
  }
  function _0x3cbcee(_0x560ce0) {
    return _0x304dff.apply(this, arguments);
  }
  function _0x304dff() {
    return _0x304dff = _0x11107e(_0x148d02().mark(function _0xc4fcd5(_0x154a27) {
      return _0x148d02().wrap(function (_0x122301) {
        for (;;) {
          switch (_0x122301.prev = _0x122301.next) {
            case 0:
              return _0x122301.abrupt("return", new Promise(function (_0x430464) {
                var _0xf9663c = {
                  "url": "https://srv2.taizhou.com.cn".concat(_0x154a27),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Accept": "*/*",
                    "Cookie": _0x4c9a8e,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Referer": "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0xf9663c, function () {
                  var _0x310959 = _0x11107e(_0x148d02().mark(function _0x1ff92f(_0x4ceac9, _0x400513, _0x20ef1c) {
                    return _0x148d02().wrap(function (_0x539356) {
                      for (;;) {
                        switch (_0x539356.prev = _0x539356.next) {
                          case 0:
                            if (_0x539356.prev = 0, !_0x4ceac9) {
                              _0x539356.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x4ceac9))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x539356.next = 9;
                            break;
                          case 6:
                            _0x539356.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x430464(JSON.parse(_0x20ef1c));
                          case 9:
                            _0x539356.next = 14;
                            break;
                          case 11:
                            _0x539356.prev = 11, _0x539356.t0 = _0x539356.catch(0), $.logErr(_0x539356.t0, _0x400513);
                          case 14:
                            _0x539356.prev = 14, _0x430464();
                            return _0x539356.finish(14);
                          case 17:
                          case "end":
                            return _0x539356.stop();
                        }
                      }
                    }, _0x1ff92f, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x1e4a0a, _0x4e1a08, _0x386c54) {
                    return _0x310959.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x122301.stop();
          }
        }
      }, _0xc4fcd5);
    })), _0x304dff.apply(this, arguments);
  }
  function _0x107e87(_0x538525, _0x223771) {
    return _0x4a0781.apply(this, arguments);
  }
  function _0x4a0781() {
    return _0x4a0781 = _0x11107e(_0x148d02().mark(function _0x5dba30(_0x519b2b, _0x1918d1) {
      return _0x148d02().wrap(function (_0x4ae258) {
        for (;;) {
          switch (_0x4ae258.prev = _0x4ae258.next) {
            case 0:
              return _0x4ae258.abrupt("return", new Promise(function (_0x5c8bc1) {
                var _0x43d48f = {
                  "url": "https://srv2.taizhou.com.cn".concat(_0x519b2b),
                  "headers": {
                    "Connection": "Keep-Alive",
                    "Accept": "*/*",
                    "Cookie": _0x4c9a8e,
                    "content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Referer": "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  "body": _0x1918d1
                };
                $.post(_0x43d48f, function () {
                  var _0x45b9cb = _0x11107e(_0x148d02().mark(function _0x1c8788(_0x9c28af, _0x4a66b3, _0x24d66e) {
                    return _0x148d02().wrap(function (_0x53a7fe) {
                      for (;;) {
                        switch (_0x53a7fe.prev = _0x53a7fe.next) {
                          case 0:
                            if (_0x53a7fe.prev = 0, !_0x9c28af) {
                              _0x53a7fe.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x9c28af))), console.log("".concat($.name, " API请求失败，请检查网路重试")), _0x53a7fe.next = 9;
                            break;
                          case 6:
                            _0x53a7fe.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x5c8bc1(JSON.parse(_0x24d66e));
                          case 9:
                            _0x53a7fe.next = 14;
                            break;
                          case 11:
                            _0x53a7fe.prev = 11, _0x53a7fe.t0 = _0x53a7fe.catch(0), $.logErr(_0x53a7fe.t0, _0x4a66b3);
                          case 14:
                            _0x53a7fe.prev = 14, _0x5c8bc1();
                            return _0x53a7fe.finish(14);
                          case 17:
                          case "end":
                            return _0x53a7fe.stop();
                        }
                      }
                    }, _0x1c8788, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x4e52f6, _0x2bcca8, _0x5f30f9) {
                    return _0x45b9cb.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x4ae258.stop();
          }
        }
      }, _0x5dba30);
    })), _0x4a0781.apply(this, arguments);
  }
  function _0x31a7f7(_0x55c725) {
    var _0x33b9c8 = _0x3fefe6.loadSM2();
    return _0x33b9c8.doEncrypt(_0x55c725, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function _0x14f2b8() {
    var _0x4e5786 = new (_0x3fefe6.loadJSEncrypt())();
    _0x4e5786.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    _0x15f37e = _0x4e5786.encrypt(_0x15f37e);
    var _0x2e02a5 = _0x4f6fc1(),
      _0x35cff9 = "client_id=".concat(_0x1f158f, "&password=").concat(_0x15f37e, "&phone_number=").concat(_0x5e32f1),
      _0x165394 = "post%%/web/oauth/credential_auth?".concat(_0x35cff9, "%%").concat(_0x2e02a5, "%%");
    _0x35cff9 = "client_id=".concat(_0x1f158f, "&password=").concat(encodeURIComponent(_0x15f37e), "&phone_number=").concat(_0x5e32f1);
    CryptoJS = _0x3fefe6.createCryptoJS();
    var _0x865e73 = CryptoJS.HmacSHA256(_0x165394, _0x51e323),
      _0xc2dd2f = CryptoJS.enc.Hex.stringify(_0x865e73);
    var _0x4bba78 = {};
    _0x4bba78.uuid = _0x2e02a5;
    _0x4bba78.signature = _0xc2dd2f;
    _0x4bba78.body = _0x35cff9;
    return _0x4bba78;
  }
  function _0x38d43e(_0x4f2864) {
    var _0x3a87f1 = _0x4f6fc1(),
      _0x101afb = Date.now();
    _0x4f2864.indexOf("?") > 0 && (_0x4f2864 = _0x4f2864.substring(0, _0x4f2864.indexOf("?")));
    CryptoJS = _0x3fefe6.createCryptoJS();
    var _0x37b63d = CryptoJS.SHA256("".concat(_0x4f2864, "&&").concat(_0x4ce03e, "&&").concat(_0x3a87f1, "&&").concat(_0x101afb, "&&").concat(_0x20ca74, "&&").concat(_0x200641)).toString(),
      _0x55f4d5 = {
        "uuid": _0x3a87f1,
        "time": _0x101afb,
        "signature": _0x37b63d
      };
    return _0x55f4d5;
  }
  function _0x4f6fc1() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0xffcff4) {
      var _0x1e3d46 = 16 * Math.random() | 0,
        _0xf6d1d1 = "x" === _0xffcff4 ? _0x1e3d46 : 3 & _0x1e3d46 | 8;
      return _0xf6d1d1.toString(16);
    });
  }
  function _0x543a31() {
    var _0x46bad3 = new Date(),
      _0x56c781 = _0x46bad3.getFullYear(),
      _0x417eed = String(_0x46bad3.getMonth() + 1).padStart(2, "0"),
      _0x35e36e = String(_0x46bad3.getDate()).padStart(2, "0");
    return "".concat(_0x56c781).concat(_0x417eed).concat(_0x35e36e);
  }
  function _0x5c2a05() {
    var _0x9e4acf = "6.0.2",
      _0x4d51de = _0x4f6fc1(),
      _0x151cd6 = _0x47d0cb(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      _0x337859 = "Xiaomi " + _0x151cd6,
      _0x355e22 = "Android",
      _0x6b0672 = "".concat(_0x355e22.toUpperCase(), ";").concat("11", ";").concat(_0x1f158f, ";").concat(_0x9e4acf, ";1.0;null;").concat(_0x151cd6),
      _0x22187b = "".concat(_0x9e4acf, ";").concat(_0x4d51de, ";").concat(_0x337859, ";").concat(_0x355e22, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0"),
      _0x145d80 = {
        "ua": _0x6b0672,
        "commonUa": _0x22187b,
        "uuid": _0x4d51de
      };
    return _0x145d80;
  }
  function _0x47d0cb(_0x14a93d) {
    return _0x14a93d[Math.floor(Math.random() * _0x14a93d.length)];
  }
  function _0x3bc109() {
    return _0x538bb5.apply(this, arguments);
  }
  function _0x538bb5() {
    return _0x538bb5 = _0x11107e(_0x148d02().mark(function _0x5ef183() {
      var _0x520e20;
      return _0x148d02().wrap(function _0x457ad9(_0x20ea58) {
        for (;;) {
          switch (_0x20ea58.prev = _0x20ea58.next) {
            case 0:
              if (_0x520e20 = $.getdata("Utils_Code") || "", !_0x520e20 || !Object.keys(_0x520e20).length) {
                _0x20ea58.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载")), eval(_0x520e20);
              return _0x20ea58.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return _0x20ea58.abrupt("return", new Promise(function () {
                var _0x5356b0 = _0x11107e(_0x148d02().mark(function _0x2e01c5(_0x24346c) {
                  return _0x148d02().wrap(function _0x23e428(_0x3a3932) {
                    for (;;) {
                      switch (_0x3a3932.prev = _0x3a3932.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (_0x41b3c9) {
                            $.setdata(_0x41b3c9, "Utils_Code");
                            eval(_0x41b3c9);
                            console.log("✅ Utils加载成功, 请继续");
                            _0x24346c(creatUtils());
                          });
                        case 1:
                        case "end":
                          return _0x3a3932.stop();
                      }
                    }
                  }, _0x2e01c5);
                }));
                return function (_0x4e87a8) {
                  return _0x5356b0.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return _0x20ea58.stop();
          }
        }
      }, _0x5ef183);
    })), _0x538bb5.apply(this, arguments);
  }
  function _0x5d9b42(_0x421480) {
    return _0x131d8d.apply(this, arguments);
  }
  function _0x131d8d() {
    return _0x131d8d = _0x11107e(_0x148d02().mark(function _0x42732a(_0xb2538b) {
      return _0x148d02().wrap(function (_0x2fbcd3) {
        for (;;) {
          switch (_0x2fbcd3.prev = _0x2fbcd3.next) {
            case 0:
              if (!$.isNode()) {
                _0x2fbcd3.next = 5;
                break;
              }
              _0x2fbcd3.next = 3;
              return notify.sendNotify($.name, _0xb2538b);
            case 3:
              _0x2fbcd3.next = 6;
              break;
            case 5:
              $.msg($.name, "", _0xb2538b);
            case 6:
            case "end":
              return _0x2fbcd3.stop();
          }
        }
      }, _0x42732a);
    })), _0x131d8d.apply(this, arguments);
  }
  _0x11107e(_0x148d02().mark(function _0x5cf613() {
    return _0x148d02().wrap(function (_0x180c26) {
      for (;;) {
        switch (_0x180c26.prev = _0x180c26.next) {
          case 0:
            _0x180c26.next = 2;
            return _0x92fe51();
          case 2:
          case "end":
            return _0x180c26.stop();
        }
      }
    }, _0x5cf613);
  }))().catch(function (_0x396370) {
    $.log(_0x396370);
  }).finally(function () {
    $.done({});
  });
})();
function Env(_0x17e35c, _0x513ddb) {
  class _0xe90d2b {
    constructor(_0x29b030) {
      this.env = _0x29b030;
    }
    ["send"](_0x2cd8b0, _0x1bc6db = "GET") {
      _0x2cd8b0 = "string" == typeof _0x2cd8b0 ? {
        "url": _0x2cd8b0
      } : _0x2cd8b0;
      let _0x1cc147 = this.get;
      return "POST" === _0x1bc6db && (_0x1cc147 = this.post), new Promise((_0x24de1b, _0x5585db) => {
        _0x1cc147.call(this, _0x2cd8b0, (_0x3c736d, _0x51c18f, _0x8bdd74) => {
          _0x3c736d ? _0x5585db(_0x3c736d) : _0x24de1b(_0x51c18f);
        });
      });
    }
    ["get"](_0x54e339) {
      return this.send.call(this.env, _0x54e339);
    }
    ["post"](_0x5bc54a) {
      return this.send.call(this.env, _0x5bc54a, "POST");
    }
  }
  return new class {
    constructor(_0x312df6, _0x39defd) {
      this.logLevels = {
        "debug": 0,
        "info": 1,
        "warn": 2,
        "error": 3
      };
      this.logLevelPrefixs = {
        "debug": "[DEBUG] ",
        "info": "[INFO] ",
        "warn": "[WARN] ",
        "error": "[ERROR] "
      };
      this.logLevel = "info";
      this.name = _0x312df6;
      this.http = new _0xe90d2b(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x39defd);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["getEnv"]() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    ["isNode"]() {
      return "Node.js" === this.getEnv();
    }
    ["isQuanX"]() {
      return "Quantumult X" === this.getEnv();
    }
    ["isSurge"]() {
      return "Surge" === this.getEnv();
    }
    ["isLoon"]() {
      return "Loon" === this.getEnv();
    }
    ["isShadowrocket"]() {
      return "Shadowrocket" === this.getEnv();
    }
    ["isStash"]() {
      return "Stash" === this.getEnv();
    }
    ["toObj"](_0x414069, _0x4bf1fb = null) {
      try {
        return JSON.parse(_0x414069);
      } catch {
        return _0x4bf1fb;
      }
    }
    ["toStr"](_0x5b3c27, _0x405a9a = null, ..._0x2843c7) {
      try {
        return JSON.stringify(_0x5b3c27, ..._0x2843c7);
      } catch {
        return _0x405a9a;
      }
    }
    ["getjson"](_0x9677, _0x18bbcd) {
      let _0xc205f3 = _0x18bbcd;
      if (this.getdata(_0x9677)) try {
        _0xc205f3 = JSON.parse(this.getdata(_0x9677));
      } catch {}
      return _0xc205f3;
    }
    ["setjson"](_0x237f5d, _0x5a6cb6) {
      try {
        return this.setdata(JSON.stringify(_0x237f5d), _0x5a6cb6);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x590ec4) {
      return new Promise(_0x31d1b9 => {
        this.get({
          "url": _0x590ec4
        }, (_0x5770bf, _0x1ac893, _0x57dce6) => _0x31d1b9(_0x57dce6));
      });
    }
    ["runScript"](_0x7a0032, _0x44014f) {
      return new Promise(_0xe40906 => {
        let _0xd2e730 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xd2e730 = _0xd2e730 ? _0xd2e730.replace(/\n/g, "").trim() : _0xd2e730;
        let _0x4fac30 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4fac30 = _0x4fac30 ? 1 * _0x4fac30 : 20;
        _0x4fac30 = _0x44014f && _0x44014f.timeout ? _0x44014f.timeout : _0x4fac30;
        const [_0x4f1857, _0x510b76] = _0xd2e730.split("@"),
          _0x36ac4b = {
            "url": "http://" + _0x510b76 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x7a0032,
              "mock_type": "cron",
              "timeout": _0x4fac30
            },
            "headers": {
              "X-Key": _0x4f1857,
              "Accept": "*/*"
            },
            "timeout": _0x4fac30
          };
        this.post(_0x36ac4b, (_0x1b127d, _0x1b974f, _0x23957d) => _0xe40906(_0x23957d));
      }).catch(_0x6c0b03 => this.logErr(_0x6c0b03));
    }
    ["loaddata"]() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x528118 = this.path.resolve(this.dataFile),
          _0x123e9d = this.path.resolve(process.cwd(), this.dataFile),
          _0xa12b43 = this.fs.existsSync(_0x528118),
          _0x1c6c7c = !_0xa12b43 && this.fs.existsSync(_0x123e9d);
        if (!_0xa12b43 && !_0x1c6c7c) return {};
        {
          const _0x4a007f = _0xa12b43 ? _0x528118 : _0x123e9d;
          try {
            return JSON.parse(this.fs.readFileSync(_0x4a007f));
          } catch (_0x273457) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5c5c76 = this.path.resolve(this.dataFile),
          _0x262577 = this.path.resolve(process.cwd(), this.dataFile),
          _0x2d02e1 = this.fs.existsSync(_0x5c5c76),
          _0x441f5c = !_0x2d02e1 && this.fs.existsSync(_0x262577),
          _0x20abcd = JSON.stringify(this.data);
        _0x2d02e1 ? this.fs.writeFileSync(_0x5c5c76, _0x20abcd) : _0x441f5c ? this.fs.writeFileSync(_0x262577, _0x20abcd) : this.fs.writeFileSync(_0x5c5c76, _0x20abcd);
      }
    }
    ["lodash_get"](_0x401a87, _0x2ca2f5, _0xd431b9) {
      const _0x488a03 = _0x2ca2f5.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x359807 = _0x401a87;
      for (const _0x36f003 of _0x488a03) if (_0x359807 = Object(_0x359807)[_0x36f003], void 0 === _0x359807) return _0xd431b9;
      return _0x359807;
    }
    ["lodash_set"](_0x17c221, _0x2270fd, _0x51010a) {
      return Object(_0x17c221) !== _0x17c221 || (Array.isArray(_0x2270fd) || (_0x2270fd = _0x2270fd.toString().match(/[^.[\]]+/g) || []), _0x2270fd.slice(0, -1).reduce((_0x324e96, _0x529aa8, _0x83333f) => Object(_0x324e96[_0x529aa8]) === _0x324e96[_0x529aa8] ? _0x324e96[_0x529aa8] : _0x324e96[_0x529aa8] = Math.abs(_0x2270fd[_0x83333f + 1]) >> 0 == +_0x2270fd[_0x83333f + 1] ? [] : {}, _0x17c221)[_0x2270fd[_0x2270fd.length - 1]] = _0x51010a), _0x17c221;
    }
    ["getdata"](_0x5963a0) {
      let _0x74435c = this.getval(_0x5963a0);
      if (/^@/.test(_0x5963a0)) {
        const [, _0x4ac050, _0x4c8dd6] = /^@(.*?)\.(.*?)$/.exec(_0x5963a0),
          _0x26060e = _0x4ac050 ? this.getval(_0x4ac050) : "";
        if (_0x26060e) {
          try {
            const _0x3038a1 = JSON.parse(_0x26060e);
            _0x74435c = _0x3038a1 ? this.lodash_get(_0x3038a1, _0x4c8dd6, "") : _0x74435c;
          } catch (_0x321490) {
            _0x74435c = "";
          }
        }
      }
      return _0x74435c;
    }
    ["setdata"](_0x1f44ee, _0x4bfacd) {
      let _0x1479d3 = false;
      if (/^@/.test(_0x4bfacd)) {
        const [, _0x4141c4, _0x50849a] = /^@(.*?)\.(.*?)$/.exec(_0x4bfacd),
          _0x451e68 = this.getval(_0x4141c4),
          _0x1d748a = _0x4141c4 ? "null" === _0x451e68 ? null : _0x451e68 || "{}" : "{}";
        try {
          const _0x48ccea = JSON.parse(_0x1d748a);
          this.lodash_set(_0x48ccea, _0x50849a, _0x1f44ee);
          _0x1479d3 = this.setval(JSON.stringify(_0x48ccea), _0x4141c4);
        } catch (_0xa3f84e) {
          const _0x388782 = {};
          this.lodash_set(_0x388782, _0x50849a, _0x1f44ee);
          _0x1479d3 = this.setval(JSON.stringify(_0x388782), _0x4141c4);
        }
      } else _0x1479d3 = this.setval(_0x1f44ee, _0x4bfacd);
      return _0x1479d3;
    }
    ["getval"](_0x5d0f81) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x5d0f81);
        case "Quantumult X":
          return $prefs.valueForKey(_0x5d0f81);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x5d0f81];
        default:
          return this.data && this.data[_0x5d0f81] || null;
      }
    }
    ["setval"](_0x5c0270, _0x1cede4) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x5c0270, _0x1cede4);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x5c0270, _0x1cede4);
        case "Node.js":
          this.data = this.loaddata(), this.data[_0x1cede4] = _0x5c0270, this.writedata();
          return !0;
        default:
          return this.data && this.data[_0x1cede4] || null;
      }
    }
    ["initGotEnv"](_0x4929de) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x4929de && (_0x4929de.headers = _0x4929de.headers ? _0x4929de.headers : {}, _0x4929de && (_0x4929de.headers = _0x4929de.headers ? _0x4929de.headers : {}, void 0 === _0x4929de.headers.cookie && void 0 === _0x4929de.headers.Cookie && void 0 === _0x4929de.cookieJar && (_0x4929de.cookieJar = this.ckjar)));
    }
    ["get"](_0x96a140, _0x2cd930 = () => {}) {
      switch (_0x96a140.headers && (delete _0x96a140.headers["Content-Type"], delete _0x96a140.headers["Content-Length"], delete _0x96a140.headers["content-type"], delete _0x96a140.headers["content-length"]), _0x96a140.params && (_0x96a140.url += "?" + this.queryStr(_0x96a140.params)), void 0 === _0x96a140.followRedirect || _0x96a140.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x96a140["auto-redirect"] = !1), this.isQuanX() && (_0x96a140.opts ? _0x96a140.opts.redirection = !1 : _0x96a140.opts = {
        "redirection": !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x96a140.headers = _0x96a140.headers || {}, Object.assign(_0x96a140.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(_0x96a140, (_0x5c2a74, _0x56c5b9, _0x3697af) => {
            !_0x5c2a74 && _0x56c5b9 && (_0x56c5b9.body = _0x3697af, _0x56c5b9.statusCode = _0x56c5b9.status ? _0x56c5b9.status : _0x56c5b9.statusCode, _0x56c5b9.status = _0x56c5b9.statusCode);
            _0x2cd930(_0x5c2a74, _0x56c5b9, _0x3697af);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x96a140.opts = _0x96a140.opts || {}, Object.assign(_0x96a140.opts, {
            "hints": !1
          })), $task.fetch(_0x96a140).then(_0x2b5041 => {
            const {
              statusCode: _0x352bfd,
              statusCode: _0x4f7c4c,
              headers: _0x41b022,
              body: _0x3a8a65,
              bodyBytes: _0x15d18c
            } = _0x2b5041;
            _0x2cd930(null, {
              "status": _0x352bfd,
              "statusCode": _0x4f7c4c,
              "headers": _0x41b022,
              "body": _0x3a8a65,
              "bodyBytes": _0x15d18c
            }, _0x3a8a65, _0x15d18c);
          }, _0x22a42b => _0x2cd930(_0x22a42b && _0x22a42b.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x3b2027 = require("iconv-lite");
          this.initGotEnv(_0x96a140), this.got(_0x96a140).on("redirect", (_0x335a67, _0xe580d0) => {
            try {
              if (_0x335a67.headers["set-cookie"]) {
                const _0x1dfd80 = _0x335a67.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x1dfd80 && this.ckjar.setCookieSync(_0x1dfd80, null);
                _0xe580d0.cookieJar = this.ckjar;
              }
            } catch (_0x40376a) {
              this.logErr(_0x40376a);
            }
          }).then(_0x536ab7 => {
            const {
                statusCode: _0x3529d8,
                statusCode: _0x4b9d8f,
                headers: _0x562700,
                rawBody: _0x2b549b
              } = _0x536ab7,
              _0x3eb93c = _0x3b2027.decode(_0x2b549b, this.encoding);
            _0x2cd930(null, {
              "status": _0x3529d8,
              "statusCode": _0x4b9d8f,
              "headers": _0x562700,
              "rawBody": _0x2b549b,
              "body": _0x3eb93c
            }, _0x3eb93c);
          }, _0x5ac396 => {
            const {
              message: _0x517b63,
              response: _0x541c7c
            } = _0x5ac396;
            _0x2cd930(_0x517b63, _0x541c7c, _0x541c7c && _0x3b2027.decode(_0x541c7c.rawBody, this.encoding));
          });
          break;
      }
    }
    ["post"](_0x4dd78d, _0x4579c3 = () => {}) {
      const _0xa010ce = _0x4dd78d.method ? _0x4dd78d.method.toLocaleLowerCase() : "post";
      switch (_0x4dd78d.body && _0x4dd78d.headers && !_0x4dd78d.headers["Content-Type"] && !_0x4dd78d.headers["content-type"] && (_0x4dd78d.headers["content-type"] = "application/x-www-form-urlencoded"), _0x4dd78d.headers && (delete _0x4dd78d.headers["Content-Length"], delete _0x4dd78d.headers["content-length"]), void 0 === _0x4dd78d.followRedirect || _0x4dd78d.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x4dd78d["auto-redirect"] = !1), this.isQuanX() && (_0x4dd78d.opts ? _0x4dd78d.opts.redirection = !1 : _0x4dd78d.opts = {
        "redirection": !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x4dd78d.headers = _0x4dd78d.headers || {}, Object.assign(_0x4dd78d.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[_0xa010ce](_0x4dd78d, (_0x2ebfdc, _0x49c413, _0x5d6d15) => {
            !_0x2ebfdc && _0x49c413 && (_0x49c413.body = _0x5d6d15, _0x49c413.statusCode = _0x49c413.status ? _0x49c413.status : _0x49c413.statusCode, _0x49c413.status = _0x49c413.statusCode);
            _0x4579c3(_0x2ebfdc, _0x49c413, _0x5d6d15);
          });
          break;
        case "Quantumult X":
          _0x4dd78d.method = _0xa010ce, this.isNeedRewrite && (_0x4dd78d.opts = _0x4dd78d.opts || {}, Object.assign(_0x4dd78d.opts, {
            "hints": !1
          })), $task.fetch(_0x4dd78d).then(_0x3d6a13 => {
            const {
              statusCode: _0x1a4a9f,
              statusCode: _0x9cdf4a,
              headers: _0x5c3067,
              body: _0x22f534,
              bodyBytes: _0x2b2bb3
            } = _0x3d6a13;
            _0x4579c3(null, {
              "status": _0x1a4a9f,
              "statusCode": _0x9cdf4a,
              "headers": _0x5c3067,
              "body": _0x22f534,
              "bodyBytes": _0x2b2bb3
            }, _0x22f534, _0x2b2bb3);
          }, _0x494100 => _0x4579c3(_0x494100 && _0x494100.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x48450b = require("iconv-lite");
          this.initGotEnv(_0x4dd78d);
          const {
            url: _0x1b2be2,
            ..._0x2e4736
          } = _0x4dd78d;
          this.got[_0xa010ce](_0x1b2be2, _0x2e4736).then(_0x11c807 => {
            const {
                statusCode: _0x565e18,
                statusCode: _0x2bef21,
                headers: _0x3b2ebb,
                rawBody: _0xde15d7
              } = _0x11c807,
              _0x3129b3 = _0x48450b.decode(_0xde15d7, this.encoding);
            _0x4579c3(null, {
              "status": _0x565e18,
              "statusCode": _0x2bef21,
              "headers": _0x3b2ebb,
              "rawBody": _0xde15d7,
              "body": _0x3129b3
            }, _0x3129b3);
          }, _0xaacd9d => {
            const {
              message: _0x17cb3b,
              response: _0xba748c
            } = _0xaacd9d;
            _0x4579c3(_0x17cb3b, _0xba748c, _0xba748c && _0x48450b.decode(_0xba748c.rawBody, this.encoding));
          });
          break;
      }
    }
    ["time"](_0x7b4d2c, _0x3e5906 = null) {
      const _0xd93d71 = _0x3e5906 ? new Date(_0x3e5906) : new Date();
      let _0x5c2ec3 = {
        "M+": _0xd93d71.getMonth() + 1,
        "d+": _0xd93d71.getDate(),
        "H+": _0xd93d71.getHours(),
        "m+": _0xd93d71.getMinutes(),
        "s+": _0xd93d71.getSeconds(),
        "q+": Math.floor((_0xd93d71.getMonth() + 3) / 3),
        "S": _0xd93d71.getMilliseconds()
      };
      /(y+)/.test(_0x7b4d2c) && (_0x7b4d2c = _0x7b4d2c.replace(RegExp.$1, (_0xd93d71.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xb908f4 in _0x5c2ec3) new RegExp("(" + _0xb908f4 + ")").test(_0x7b4d2c) && (_0x7b4d2c = _0x7b4d2c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5c2ec3[_0xb908f4] : ("00" + _0x5c2ec3[_0xb908f4]).substr(("" + _0x5c2ec3[_0xb908f4]).length)));
      return _0x7b4d2c;
    }
    ["queryStr"](_0x11a016) {
      let _0x4f05d0 = "";
      for (const _0x3e8450 in _0x11a016) {
        let _0x32d2dc = _0x11a016[_0x3e8450];
        null != _0x32d2dc && "" !== _0x32d2dc && ("object" == typeof _0x32d2dc && (_0x32d2dc = JSON.stringify(_0x32d2dc)), _0x4f05d0 += _0x3e8450 + "=" + _0x32d2dc + "&");
      }
      return _0x4f05d0 = _0x4f05d0.substring(0, _0x4f05d0.length - 1), _0x4f05d0;
    }
    ["msg"](_0x5a8afd = _0x17e35c, _0x4fc15f = "", _0xfbb1f7 = "", _0x238bdb = {}) {
      const _0x3642d4 = _0x55830f => {
        const {
          $open: _0x565e4a,
          $copy: _0x31ebdf,
          $media: _0x160db4,
          $mediaMime: _0x48be7a
        } = _0x55830f;
        switch (typeof _0x55830f) {
          case void 0:
            return _0x55830f;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  "url": _0x55830f
                };
              case "Loon":
              case "Shadowrocket":
                return _0x55830f;
              case "Quantumult X":
                return {
                  "open-url": _0x55830f
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const _0x4557c4 = {};
                  let _0x503952 = _0x55830f.openUrl || _0x55830f.url || _0x55830f["open-url"] || _0x565e4a;
                  _0x503952 && Object.assign(_0x4557c4, {
                    "action": "open-url",
                    "url": _0x503952
                  });
                  let _0x493778 = _0x55830f["update-pasteboard"] || _0x55830f.updatePasteboard || _0x31ebdf;
                  if (_0x493778 && Object.assign(_0x4557c4, {
                    "action": "clipboard",
                    "text": _0x493778
                  }), _0x160db4) {
                    let _0x12c862, _0x38c243, _0x17da2f;
                    if (_0x160db4.startsWith("http")) _0x12c862 = _0x160db4;else {
                      if (_0x160db4.startsWith("data:")) {
                        const [_0x4176c9] = _0x160db4.split(";"),
                          [, _0x31a198] = _0x160db4.split(",");
                        _0x38c243 = _0x31a198;
                        _0x17da2f = _0x4176c9.replace("data:", "");
                      } else _0x38c243 = _0x160db4, _0x17da2f = (_0x5799d2 => {
                        const _0x1059c5 = {
                          "JVBERi0": "application/pdf",
                          "R0lGODdh": "image/gif",
                          "R0lGODlh": "image/gif",
                          "iVBORw0KGgo": "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var _0x5821a2 in _0x1059c5) if (0 === _0x5799d2.indexOf(_0x5821a2)) return _0x1059c5[_0x5821a2];
                        return null;
                      })(_0x160db4);
                    }
                    Object.assign(_0x4557c4, {
                      "media-url": _0x12c862,
                      "media-base64": _0x38c243,
                      "media-base64-mime": _0x48be7a ?? _0x17da2f
                    });
                  }
                  return Object.assign(_0x4557c4, {
                    "auto-dismiss": _0x55830f["auto-dismiss"],
                    "sound": _0x55830f.sound
                  }), _0x4557c4;
                }
              case "Loon":
                {
                  const _0x52955c = {};
                  let _0x9834b1 = _0x55830f.openUrl || _0x55830f.url || _0x55830f["open-url"] || _0x565e4a;
                  _0x9834b1 && Object.assign(_0x52955c, {
                    "openUrl": _0x9834b1
                  });
                  let _0x3d4fec = _0x55830f.mediaUrl || _0x55830f["media-url"];
                  return _0x160db4?.["startsWith"]("http") && (_0x3d4fec = _0x160db4), _0x3d4fec && Object.assign(_0x52955c, {
                    "mediaUrl": _0x3d4fec
                  }), console.log(JSON.stringify(_0x52955c)), _0x52955c;
                }
              case "Quantumult X":
                {
                  const _0x1b6952 = {};
                  let _0x220f1a = _0x55830f["open-url"] || _0x55830f.url || _0x55830f.openUrl || _0x565e4a;
                  _0x220f1a && Object.assign(_0x1b6952, {
                    "open-url": _0x220f1a
                  });
                  let _0x132a2a = _0x55830f["media-url"] || _0x55830f.mediaUrl;
                  _0x160db4?.["startsWith"]("http") && (_0x132a2a = _0x160db4);
                  _0x132a2a && Object.assign(_0x1b6952, {
                    "media-url": _0x132a2a
                  });
                  let _0x57f1e5 = _0x55830f["update-pasteboard"] || _0x55830f.updatePasteboard || _0x31ebdf;
                  return _0x57f1e5 && Object.assign(_0x1b6952, {
                    "update-pasteboard": _0x57f1e5
                  }), console.log(JSON.stringify(_0x1b6952)), _0x1b6952;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(_0x5a8afd, _0x4fc15f, _0xfbb1f7, _0x3642d4(_0x238bdb));
          break;
        case "Quantumult X":
          $notify(_0x5a8afd, _0x4fc15f, _0xfbb1f7, _0x3642d4(_0x238bdb));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let _0x56f419 = ["", "==============📣系统通知📣=============="];
        _0x56f419.push(_0x5a8afd);
        _0x4fc15f && _0x56f419.push(_0x4fc15f);
        _0xfbb1f7 && _0x56f419.push(_0xfbb1f7);
        console.log(_0x56f419.join("\n"));
        this.logs = this.logs.concat(_0x56f419);
      }
    }
    ["debug"](..._0x41bcf4) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x41bcf4.length > 0 && (this.logs = [...this.logs, ..._0x41bcf4]), console.log("" + this.logLevelPrefixs.debug + _0x41bcf4.map(_0x1c8566 => _0x1c8566 ?? String(_0x1c8566)).join(this.logSeparator)));
    }
    ["info"](..._0x10e645) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x10e645.length > 0 && (this.logs = [...this.logs, ..._0x10e645]), console.log("" + this.logLevelPrefixs.info + _0x10e645.map(_0x172bbe => _0x172bbe ?? String(_0x172bbe)).join(this.logSeparator)));
    }
    ["warn"](..._0x4124af) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x4124af.length > 0 && (this.logs = [...this.logs, ..._0x4124af]), console.log("" + this.logLevelPrefixs.warn + _0x4124af.map(_0x275932 => _0x275932 ?? String(_0x275932)).join(this.logSeparator)));
    }
    ["error"](..._0xf6e7b) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0xf6e7b.length > 0 && (this.logs = [...this.logs, ..._0xf6e7b]), console.log("" + this.logLevelPrefixs.error + _0xf6e7b.map(_0x1448e2 => _0x1448e2 ?? String(_0x1448e2)).join(this.logSeparator)));
    }
    ["log"](..._0x2bc361) {
      _0x2bc361.length > 0 && (this.logs = [...this.logs, ..._0x2bc361]);
      console.log(_0x2bc361.map(_0x1a351a => _0x1a351a ?? String(_0x1a351a)).join(this.logSeparator));
    }
    ["logErr"](_0x3c7eeb, _0x4c7d96) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x4c7d96, _0x3c7eeb);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x4c7d96, void 0 !== _0x3c7eeb.message ? _0x3c7eeb.message : _0x3c7eeb, _0x3c7eeb.stack);
          break;
      }
    }
    ["wait"](_0x3af7b4) {
      return new Promise(_0x58b980 => setTimeout(_0x58b980, _0x3af7b4));
    }
    ["done"](_0x568905 = {}) {
      const _0x46f532 = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x46f532 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x568905);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x17e35c, _0x513ddb);
}