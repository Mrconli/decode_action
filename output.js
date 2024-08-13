//Tue Aug 13 2024 10:38:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    checkCk: _0x59bc0e,
    validateCarmeWithType: _0x3c9b4f,
    getUserInfo: _0x3b27e2,
    couponNotify: _0xf29bc9,
    getCookies: _0xa920bd,
    wait: _0x3937b9,
    commonRequest: _0x3ccd97
  } = require("./common.js"),
  _0x3c3a2f = require("moment"),
  _0x4dfeeb = process.env.ELE_CARME,
  _0x290516 = 18;
async function _0x46c6e8(_0x51ab55, _0x1bcff6, _0x229545) {
  let _0x3b9005 = "{\"condition\":\"\",\"cityCode\":\"330100\",\"latitude\":\"30.178378857672215\",\"tabCode\":\"HONG_BAO\",\"userId\":\"" + _0x229545 + "\",\"longitude\":\"120.21993197500706\",\"sourceFrom\":\"ELEME_APP\",\"userGeoHash\":\"wtm7xtv3z3wd\"}";
  try {
    const _0x2543c3 = await _0x3ccd97(_0x51ab55, _0x3b9005, "mtop.alsc.personal.querypasslist4native", _0x290516);
    if (_0x2543c3.data.data) {
      let _0x252fc4 = _0x2543c3.data.data.vouchers_list_component.fields.items;
      if (_0x252fc4) {
        let _0x18b554 = _0x3c3a2f(new Date().getTime()),
          _0x1c0773 = _0x18b554.startOf("day").valueOf(),
          _0x4b04ea = _0x252fc4.filter(_0x4f6733 => {
            return _0x4f6733.fields.benefitType === "ELE_COMMODITY_HB" && _0x4f6733.fields.thresholdText === "无门槛";
          }),
          _0x5bcca6 = _0x4b04ea.filter(_0xa33893 => {
            return _0xa33893.fields.gmtCreate >= _0x1c0773 / 1000 + "";
          });
        if (_0x5bcca6.length < 1) console.log("今日未获得无门槛优惠券");else {
          for (let _0x3eca09 = 0; _0x3eca09 < _0x5bcca6.length; _0x3eca09++) {
            let _0x5996e4 = _0x5bcca6[_0x3eca09];
            console.log("今日获取无门槛优惠券为：", _0x5996e4.fields.title);
            await _0xf29bc9(_0x51ab55, "###抢券成功推送\n手机号：" + _0x1bcff6 + "\n抢券成功" + _0x5996e4.fields.title);
          }
        }
      } else console.log("查询抢券结果异常，请到 app 中查看");
    } else console.log("查询抢券结果异常，请到 app 中查看");
  } catch (_0x1fb48b) {
    console.log("查询抢券结果异常，请到 app 中查看");
  }
}
async function _0x331bea() {
  const _0x3661f8 = function () {
    let _0x1e468c = true;
    return function (_0x15d66a, _0x228c1f) {
      const _0x2ca12c = _0x1e468c ? function () {
        if (_0x228c1f) {
          const _0x3ca5ed = _0x228c1f.apply(_0x15d66a, arguments);
          return _0x228c1f = null, _0x3ca5ed;
        }
      } : function () {};
      return _0x1e468c = false, _0x2ca12c;
    };
  }();
  (function () {
    _0x3661f8(this, function () {
      const _0x2c5599 = new RegExp("function *\\( *\\)"),
        _0x33e8c0 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
        _0x28bdd9 = _0x277262("init");
      !_0x2c5599.test(_0x28bdd9 + "chain") || !_0x33e8c0.test(_0x28bdd9 + "input") ? _0x28bdd9("0") : _0x277262();
    })();
  })();
  await _0x3c9b4f(_0x4dfeeb, 1);
  const _0x4d018f = _0xa920bd("elmqqck");
  for (let _0x3f7600 = 0; _0x3f7600 < _0x4d018f.length; _0x3f7600++) {
    let _0x500b3a = _0x4d018f[_0x3f7600];
    _0x500b3a = await _0x59bc0e(_0x500b3a, _0x3f7600);
    if (!_0x500b3a) continue;
    let _0x2c2fb5 = await _0x3b27e2(_0x500b3a);
    if (!_0x2c2fb5.username) {
      console.log("第", _0x3f7600 + 1, "账号失效！请重新登录！！！😭");
    }
    const _0x4bb744 = _0x2c2fb5.user_id;
    let _0x44b984 = _0x2c2fb5.mobile;
    console.log("\n****** #" + (_0x3f7600 + 1), _0x44b984, "*********");
    console.log("账号的 id 为", _0x4bb744);
    await _0x46c6e8(_0x500b3a, _0x44b984, _0x4bb744);
    console.log("防止挤爆了，延时 1 秒");
    await _0x3937b9(1);
  }
  process.exit(0);
}
_0x331bea();
(function () {
  let _0x3cf354;
  try {
    const _0x35a8ee = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x3cf354 = _0x35a8ee();
  } catch (_0x4f9895) {
    _0x3cf354 = window;
  }
  _0x3cf354.setInterval(_0x277262, 2000);
})();
function _0x277262(_0xf8a4c6) {
  function _0x59e13f(_0x17670d) {
    if (typeof _0x17670d === "string") {
      return function (_0x53170) {}.constructor("while (true) {}").apply("counter");
    } else {
      ("" + _0x17670d / _0x17670d).length !== 1 || _0x17670d % 20 === 0 ? function () {
        return true;
      }.constructor("debugger").call("action") : function () {
        return false;
      }.constructor("debugger").apply("stateObject");
    }
    _0x59e13f(++_0x17670d);
  }
  try {
    if (_0xf8a4c6) return _0x59e13f;else {
      _0x59e13f(0);
    }
  } catch (_0xbf36b0) {}
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}