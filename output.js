//Tue Aug 13 2024 11:13:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  wait,
  checkCk,
  User_Agent,
  validateCarmeNoCon,
  getCookies,
  getUserInfo,
  tryCatchPromise,
  validateCarmeWithType
} = require("./common.js");
const request = require("request");
const login_tips = "需要登录, 请重新登录";
let CookieEles = [];
const kami = process.env.ELE_TTCJ_CARME;
function commonRequest(_0x2005a0, _0x351a08, _0x37e6aa) {
  const _0x36a10c = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x2005a0,
    "User-Agent": User_Agent
  };
  const _0x19bc83 = new Date().getTime();
  const _0x1bdf23 = 12574478;
  var _0x1e5874 = "data=" + encodeURIComponent(JSON.stringify(_0x37e6aa));
  const _0x4f9f8e = getToken(_0x2005a0),
    _0x5bf876 = _0x4f9f8e.split("_")[0];
  const _0x32ca82 = sign(_0x5bf876 + "&" + _0x19bc83 + "&" + _0x1bdf23 + "&" + JSON.stringify(_0x37e6aa));
  const _0x3cd0f9 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.growth.tangram.gateway/1.0/?jsv=2.6.1&appKey=12574478&asac=" + _0x351a08 + "&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x19bc83 + "&sign=" + _0x32ca82 + "&api=mtop.alsc.growth.tangram.gateway",
    method: "POST",
    headers: _0x36a10c,
    body: _0x1e5874
  };
  return tryCatchPromise(_0x3bb5e6 => {
    request(_0x3cd0f9, async (_0x5dff1f, _0xeff9d1, _0x51eeac) => {
      if (!_0x5dff1f && _0xeff9d1.statusCode == 200) {
        try {
          const _0x588c35 = JSON.parse(_0x51eeac);
          _0x3bb5e6(_0x588c35);
        } catch (_0x41850d) {
          console.log(_0x41850d);
          _0x3bb5e6(null);
        }
      } else {
        _0x3bb5e6(null);
      }
    });
  });
}
function processUrl(_0x33bc47) {
  const _0x204ef2 = new Map();
  const _0x302e5f = _0x33bc47.split("?")[1].split("&");
  for (let _0x24ccf1 = 0; _0x24ccf1 < _0x302e5f.length; _0x24ccf1++) {
    const [_0x51f872, _0x67a58a] = _0x302e5f[_0x24ccf1].split("=");
    _0x204ef2.set(_0x51f872, _0x67a58a);
  }
  return _0x204ef2;
}
async function getAssistList(_0x126e43) {
  _0x126e43 = await checkCk(_0x126e43);
  const _0x755b50 = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x126e43,
    "User-Agent": User_Agent
  };
  const _0x234c05 = new Date().getTime();
  const _0x50a484 = 12574478;
  const _0x5a3fb3 = {
    bizScene: "growth_fission_coupon",
    instance: "INNER",
    pageNo: "1",
    pageSize: "10",
    type: "0",
    version: "1.7"
  };
  var _0x86f15a = "data=" + encodeURIComponent(JSON.stringify(_0x5a3fb3));
  const _0x59ed3b = getToken(_0x126e43),
    _0x4b5793 = _0x59ed3b.split("_")[0];
  const _0x170d1e = sign(_0x4b5793 + "&" + _0x234c05 + "&" + _0x50a484 + "&" + JSON.stringify(_0x5a3fb3));
  const _0x58d27d = {
    url: "https://shopping.ele.me/h5/mtop.ele.growth.fission.shopcoupon.assistlist/1.0/?jsv=2.6.1&appKey=12574478&&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x234c05 + "&sign=" + _0x170d1e + "&api=mtop.ele.growth.fission.shopcoupon.assistlist",
    method: "POST",
    headers: _0x755b50,
    body: _0x86f15a
  };
  return new Promise(_0xf188fd => {
    request(_0x58d27d, async (_0x4e9162, _0x1e72ce, _0x5c8b98) => {
      if (!_0x4e9162 && _0x1e72ce.statusCode == 200) {
        try {
          const _0x3ac51e = JSON.parse(_0x5c8b98);
          _0xf188fd(_0x3ac51e);
        } catch (_0x529673) {
          console.log(_0x529673);
          _0xf188fd(null);
        }
      } else {
        _0xf188fd(null);
      }
    });
  });
}
async function getShareId(_0x1d7f07) {
  _0x1d7f07 = await checkCk(_0x1d7f07);
  if (_0x1d7f07 == login_tips) {
    console.log("需要助力的账号失效！请重新登录！！！");
    process.exit(0);
  }
  var _0x3e3d1e;
  const _0x1861b1 = {
    api: "fissionDrawShare",
    asac: "2A22C21KPW8PSOH8QMD4LM",
    bizScene: "growth_fission_coupon",
    instance: "INNER",
    params: "{\"latitude\":\"30.178514\",\"longitude\":\"120.220959\",\"cityId\":\"\"}",
    scene: "fissionDraw001"
  };
  const _0x5ed7d4 = await commonRequest(_0x1d7f07, "2A22C21KPW8PSOH8QMD4LM", _0x1861b1);
  if (_0x5ed7d4.data && _0x5ed7d4.data.result) {
    const _0x57c46d = _0x5ed7d4.data.result;
    _0x3e3d1e = processUrl(_0x57c46d.url).get("shareId");
    console.log("获取到的助力 id 为", _0x3e3d1e);
    return _0x3e3d1e;
  } else {
    console.log("获取到助力 id 失败，程序退出");
    process.exit(0);
  }
}
async function fridensHelper(_0x476512, _0x3a6223, _0x4ba1a6) {
  _0x3a6223 = await checkCk(_0x3a6223);
  try {
    const _0x4ebfc9 = {
      api: "support",
      bizScene: "growth_fission_coupon",
      instance: "INNER",
      params: "{\"latitude\":\"\",\"longitude\":\"\",\"cityId\":\"\",\"shareId\":\"" + _0x4ba1a6 + "\"}",
      scene: "fissionDraw001"
    };
    let _0x40976f = await validateCarmeNoCon(kami, true);
    const _0x137ef9 = await commonRequest(_0x476512, "2A22C21RPW8PSOJ9OFOQGY", _0x4ebfc9);
    if (_0x137ef9.data && _0x137ef9.data.result) {
      const _0x4ea19f = _0x137ef9.data.result;
      console.log(_0x4ea19f.title + "：" + _0x4ea19f.subTitle);
      if (_0x4ea19f.title.indexOf("无法助力") !== -1) {
        await validateCarmeNoCon(kami, false);
        console.log("防止黑号延时1-3秒");
        await wait(getRandom(1, 3));
      } else {
        if (_0x4ea19f.title.indexOf("谢谢你为我助力") !== -1) {
          console.log("请求次数剩余", _0x40976f);
          const _0x540691 = {
            api: "drawAction",
            asac: "2A22C21FPW8PSO7U202V54",
            bizScene: "growth_fission_coupon",
            instance: "INNER",
            params: "{\"latitude\":\"\",\"longitude\":\"\",\"cityId\":\"\"}",
            scene: "fissionDraw001"
          };
          const _0x2e429e = await commonRequest(_0x3a6223, "2A22C21FPW8PSO7U202V54", _0x540691);
          if (_0x2e429e.data && _0x2e429e.data.result) {
            const _0x146f7c = _0x2e429e.data.result;
            const _0x3089cc = _0x146f7c.popWindow.content[0].amount;
            console.log(_0x146f7c.popWindow.title + "：" + _0x3089cc);
            if (_0x2e429e.data.success) {
              const _0x262430 = {
                api: "withdrawAction",
                bizScene: "growth_fission_coupon",
                instance: "INNER",
                params: "{\"latitude\":\"\",\"longitude\":\"\",\"cityId\":\"\",\"amount\":\"" + _0x3089cc + "\"}",
                scene: "fissionDraw001"
              };
              const _0x1dff97 = await commonRequest(_0x3a6223, "", _0x262430);
              if (_0x1dff97.data && _0x1dff97.data.result) {
                const _0x2278b0 = _0x1dff97.data.result;
                console.log(_0x2278b0.popWindow.title + "：金额", _0x2278b0.popWindow.content[0].amount);
                console.log(_0x2278b0.popWindow.content[0].step2);
              } else {
                console.log("提现：" + _0x2e429e.ret[0]);
              }
            } else {
              console.log("抽奖：" + _0x2e429e.ret[0]);
            }
          } else {
            console.log("抽奖：" + _0x2e429e.ret[0]);
          }
          console.log("防止黑号延时5-10秒");
          await wait(getRandom(5, 10));
        }
      }
    } else {
      console.log("助力：" + drawRes.ret[0]);
    }
  } catch (_0x577d8f) {}
}
(async function () {
  if (!kami) {
    console.log("❌卡密不能为空");
    process.exit(0);
  }
  var _0x80b18a = process.env.ownCookie;
  if (!_0x80b18a) {
    console.log("未设置需助力的 ck，程序结束!");
    process.exit(0);
  }
  await validateCarmeWithType(kami, 4);
  CookieEles = getCookies();
  const _0x537ee6 = await getShareId(_0x80b18a);
  for (let _0x22dad0 = 0; _0x22dad0 < CookieEles.length; _0x22dad0++) {
    let _0xff6574 = CookieEles[_0x22dad0];
    _0xff6574 = await checkCk(_0xff6574, _0x22dad0);
    if (!_0xff6574) {
      continue;
    }
    let _0x49940e = await getUserInfo(_0xff6574);
    if (!_0x49940e.username) {
      console.log("第", _0x22dad0 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    await fridensHelper(_0xff6574, _0x80b18a, _0x537ee6);
  }
  process.exit(0);
})();
function getRandom(_0x1c3cc8, _0x5f29b0) {
  return Math.floor(Math.random() * (_0x5f29b0 - _0x1c3cc8 + 1) + _0x1c3cc8);
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
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
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
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
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
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
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
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
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
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
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
      } else {
        s = this.setval(t, e);
      }
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
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
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
          }, t => e(t));
        } else {
          if (this.isNode()) {
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
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
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