//Sat Oct 12 2024 10:44:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("益禾堂"),
  axios = require("axios"),
  axiosRetry = require("axios-retry").default,
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request");
let notifyStr = "";
var ua = "";
(async () => {
  axiosRetry(axios, {
    retries: 3
  });
  const _0x533aea = checkVersion("yht.js", "69185a59f59e2339d48af04a7894f89a");
  let _0x540f5a = [];
  _0x533aea && (_0x540f5a = _0x533aea.split(","));
  const _0x5df230 = process.env.yht_ck,
    _0x43c48e = process.env.yht_showinviteId;
  if (!_0x5df230) {
    logAndNotify("请先设置环境变量 yht_ck");
    return;
  }
  const _0x1decaf = !!_0x43c48e;
  let _0x100522 = _0x5df230.replaceAll("&", "\n").split("\n");
  for (let _0x51e3b3 = 0; _0x51e3b3 < _0x100522.length; _0x51e3b3++) {
    ua = generateUserAgent();
    const _0xda36eb = _0x100522[_0x51e3b3],
      _0x3ee26d = await sendGetRequest("https://webapi.qmai.cn/web/catering/crm/personal-info", _0xda36eb);
    if (!_0x3ee26d.data.status) {
      logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 登录失败☹");
      continue;
    }
    logAndNotify("🧐" + _0x3ee26d.data.data.mobilePhone + "🧐");
    const _0x26ff60 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/takePartInNurture", _0xda36eb, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    _0x26ff60.data.status ? (logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 开启种树成功"), logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 userId=【" + _0x26ff60.data.data.userId + "】")) : logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 忽略此提示【" + _0x26ff60.data.message + "】");
    const _0x226ff9 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/taskInfo", _0xda36eb, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 被助力次数:【" + _0x226ff9.data.data.dailyInviteNum + "】");
    const _0x443d74 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/stageInfo", _0xda36eb, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    let _0x342cb1 = 0;
    if (_0x443d74.data.status) {
      const _0x284318 = _0x443d74.data.data;
      if (_0x284318.level === 3) {
        logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 当前是【" + _0x284318.name + "】 可以领取奖励了");
      } else {
        _0x342cb1 = _0x284318.upgradeThreshold - _0x284318.nutrientUsed;
        logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 当前是【" + _0x284318.name + "】, 再施肥【" + _0x342cb1 + "】次 成为【" + _0x284318.nextName + "】");
      }
    }
    const _0x5530d1 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/activityInfo", _0xda36eb, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      }),
      _0x5c00e6 = _0x5530d1.data.data.nurtureStageVo;
    logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 剩余肥料【" + _0x5c00e6.nutrientRemaining + "】");
    if (_0x342cb1 < _0x5c00e6.nutrientRemaining) {
      logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 本次只需要施肥【" + _0x342cb1 + "】次即可完成任务，请及时领取奖励！！！！！！！！！！！！！！！");
    } else {
      _0x342cb1 = _0x5c00e6.nutrientRemaining;
    }
    for (let _0x130b5a = 0; _0x130b5a < _0x342cb1; _0x130b5a++) {
      const _0x5d48c5 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/add/nutrient", _0xda36eb, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      });
      _0x5d48c5.data.status ? logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 施肥【" + (_0x130b5a + 1) + "】次成功") : logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 施肥【" + (_0x130b5a + 1) + "】次失败");
    }
    const _0x43bd3d = new Date().getDay();
    if (_0x43bd3d === 2) {
      const _0x55a7a8 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/receive/takePartInReceive", _0xda36eb, {
        activityId: "1038508490954362881",
        timestamp: "",
        signature: "",
        qzGtd: "",
        gdtVid: "",
        data: "",
        version: 1,
        appid: "wx4080846d0cec2fd5"
      });
      _0x55a7a8.data.status ? logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 领卷成功") : logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 领卷失败，可以忽略: " + _0x55a7a8.data.message);
    }
    const _0x7d7639 = await sendPostRequest("https://webapi.qmai.cn/web/catering/crm/coupon/list", _0xda36eb, {
      pageNo: 1,
      pageSize: 1000,
      useStatus: 0,
      appid: "wx4080846d0cec2fd5"
    });
    if (_0x7d7639.data.status) {
      logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 优惠卷总数量: " + _0x7d7639.data.data.totalNum);
      for (const _0x4899c1 of _0x7d7639.data.data.data) {
        logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 优惠卷: " + _0x4899c1.title + " 有效期【" + _0x4899c1.expireDesc + "】");
      }
    } else {
      logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 获取优惠卷失败: " + _0x7d7639.data.message);
    }
    logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 开始助力其他人");
    for (const _0x5b526d of _0x540f5a) {
      const _0x1b2c72 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/userHelp", _0xda36eb, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5",
        inviteUserId: _0x5b526d
      });
      if (_0x1b2c72.data.status) {
        if (_0x1decaf) {
          logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 【" + _0x5b526d + "】 助力成功");
        } else {
          logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 助力成功");
        }
      } else {
        _0x1decaf ? logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 【" + _0x5b526d + "】 助力失败: " + _0x1b2c72.data.message) : logAndNotify("账号【" + (_0x51e3b3 + 1) + "】 助力失败: " + _0x1b2c72.data.message);
        if (_0x1b2c72.data.message === "今日助力次数已达上限") {
          break;
        }
      }
    }
  }
})().catch(_0x2b76b8 => {
  logAndNotify(_0x2b76b8);
}).finally(() => {
  sendNotify("益禾堂", notifyStr);
  $.done();
});
async function sendPostRequest(_0x164e76, _0x1334c1, _0x147c4d) {
  try {
    await delay(500);
    const _0x3c4599 = {
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        Referer: "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
        "User-Agent": ua
      },
      _0x895ccf = {
        ..._0x3c4599,
        ...{
          "Qm-User-Token": _0x1334c1
        }
      },
      _0x1c343a = axios.create({
        headers: _0x895ccf,
        timeout: 60000
      });
    return _0x1c343a.post(_0x164e76, _0x147c4d);
  } catch (_0x4e89aa) {
    if (axios.isAxiosError(_0x4e89aa)) {
      if (_0x4e89aa.code === "ECONNABORTED" && _0x4e89aa.message.includes("timeout")) {
        console.error("请求超时：", _0x4e89aa.message);
      } else {
        console.error("其他错误：", _0x4e89aa.message);
      }
    } else {
      console.error("未知错误：", _0x4e89aa);
    }
    throw _0x4e89aa;
  }
}
async function sendGetRequest(_0x4e257f, _0x1dde3f) {
  try {
    await delay(500);
    const _0x3290db = {
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        Referer: "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
        "User-Agent": ua
      },
      _0x5e2a45 = {
        ..._0x3290db,
        ...{
          "Qm-User-Token": _0x1dde3f
        }
      },
      _0x1a244e = axios.create({
        headers: _0x5e2a45,
        timeout: 60000
      });
    return _0x1a244e.get(_0x4e257f);
  } catch (_0x995c6b) {
    if (axios.isAxiosError(_0x995c6b)) {
      _0x995c6b.code === "ECONNABORTED" && _0x995c6b.message.includes("timeout") ? console.error("请求超时：", _0x995c6b.message) : console.error("其他错误：", _0x995c6b.message);
    } else {
      console.error("未知错误：", _0x995c6b);
    }
    throw _0x995c6b;
  }
}
function logAndNotify(_0x3faa78) {
  1;
  $.log(_0x3faa78);
  notifyStr += _0x3faa78;
  notifyStr += "\n";
}
function delay(_0x4a9b1a) {
  return new Promise(_0x5c143d => setTimeout(_0x5c143d, _0x4a9b1a));
}
function Env(_0x1972b9, _0x2bcde2) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x25e87b {
    constructor(_0xc07db) {
      this.env = _0xc07db;
    }
    send(_0x32ca89, _0x568876 = "GET") {
      _0x32ca89 = "string" == typeof _0x32ca89 ? {
        url: _0x32ca89
      } : _0x32ca89;
      let _0x3ad61b = this.get;
      "POST" === _0x568876 && (_0x3ad61b = this.post);
      return new Promise((_0x3d788b, _0x1b41a2) => {
        _0x3ad61b.call(this, _0x32ca89, (_0x3a7703, _0x488bae, _0x3151a9) => {
          _0x3a7703 ? _0x1b41a2(_0x3a7703) : _0x3d788b(_0x488bae);
        });
      });
    }
    get(_0x2a6b00) {
      return this.send.call(this.env, _0x2a6b00);
    }
    post(_0x527258) {
      return this.send.call(this.env, _0x527258, "POST");
    }
  }
  return new class {
    constructor(_0x3f625f, _0xb0b5df) {
      this.name = _0x3f625f;
      this.http = new _0x25e87b(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xb0b5df);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x1b5433, _0x221821 = null) {
      try {
        return JSON.parse(_0x1b5433);
      } catch {
        return _0x221821;
      }
    }
    toStr(_0x3e79f1, _0x2e3e1a = null) {
      try {
        return JSON.stringify(_0x3e79f1);
      } catch {
        return _0x2e3e1a;
      }
    }
    getjson(_0x171f12, _0x332ef1) {
      let _0x320069 = _0x332ef1;
      const _0x2ded3d = this.getdata(_0x171f12);
      if (_0x2ded3d) {
        try {
          _0x320069 = JSON.parse(this.getdata(_0x171f12));
        } catch {}
      }
      return _0x320069;
    }
    setjson(_0x4d5fd6, _0x10cc01) {
      try {
        return this.setdata(JSON.stringify(_0x4d5fd6), _0x10cc01);
      } catch {
        return !1;
      }
    }
    getScript(_0x4ce573) {
      return new Promise(_0x46e892 => {
        this.get({
          url: _0x4ce573
        }, (_0x53d9f0, _0x119400, _0x187738) => _0x46e892(_0x187738));
      });
    }
    runScript(_0x1ab64c, _0x204e86) {
      return new Promise(_0x3496ea => {
        let _0x27d9a7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x27d9a7 = _0x27d9a7 ? _0x27d9a7.replace(/\n/g, "").trim() : _0x27d9a7;
        let _0x11ac23 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x11ac23 = _0x11ac23 ? 1 * _0x11ac23 : 20;
        _0x11ac23 = _0x204e86 && _0x204e86.timeout ? _0x204e86.timeout : _0x11ac23;
        const [_0x419a00, _0x17b80c] = _0x27d9a7.split("@"),
          _0x2f3026 = {
            url: "http://" + _0x17b80c + "/v1/scripting/evaluate",
            body: {
              script_text: _0x1ab64c,
              mock_type: "cron",
              timeout: _0x11ac23
            },
            headers: {
              "X-Key": _0x419a00,
              Accept: "*/*"
            }
          };
        this.post(_0x2f3026, (_0x552786, _0x2c5535, _0xe365dc) => _0x3496ea(_0xe365dc));
      }).catch(_0x33e093 => this.logErr(_0x33e093));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3fdf1a = this.path.resolve(this.dataFile),
          _0x2a6af = this.path.resolve(process.cwd(), this.dataFile),
          _0x2fea17 = this.fs.existsSync(_0x3fdf1a),
          _0x30527f = !_0x2fea17 && this.fs.existsSync(_0x2a6af);
        if (!_0x2fea17 && !_0x30527f) {
          return {};
        }
        {
          const _0x1a9ecb = _0x2fea17 ? _0x3fdf1a : _0x2a6af;
          try {
            return JSON.parse(this.fs.readFileSync(_0x1a9ecb));
          } catch (_0x5dcb52) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x17c3a2 = this.path.resolve(this.dataFile),
          _0x51cba0 = this.path.resolve(process.cwd(), this.dataFile),
          _0x226a32 = this.fs.existsSync(_0x17c3a2),
          _0x5d7a00 = !_0x226a32 && this.fs.existsSync(_0x51cba0),
          _0x41994a = JSON.stringify(this.data);
        _0x226a32 ? this.fs.writeFileSync(_0x17c3a2, _0x41994a) : _0x5d7a00 ? this.fs.writeFileSync(_0x51cba0, _0x41994a) : this.fs.writeFileSync(_0x17c3a2, _0x41994a);
      }
    }
    lodash_get(_0x48c7f3, _0x208c6d, _0x2bd303) {
      const _0x4b365c = _0x208c6d.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xf8761b = _0x48c7f3;
      for (const _0x35ccd1 of _0x4b365c) if (_0xf8761b = Object(_0xf8761b)[_0x35ccd1], void 0 === _0xf8761b) {
        return _0x2bd303;
      }
      return _0xf8761b;
    }
    lodash_set(_0x314fec, _0x1656df, _0x526cad) {
      return Object(_0x314fec) !== _0x314fec ? _0x314fec : (Array.isArray(_0x1656df) || (_0x1656df = _0x1656df.toString().match(/[^.[\]]+/g) || []), _0x1656df.slice(0, -1).reduce((_0x261885, _0x4784ca, _0xd9c283) => Object(_0x261885[_0x4784ca]) === _0x261885[_0x4784ca] ? _0x261885[_0x4784ca] : _0x261885[_0x4784ca] = Math.abs(_0x1656df[_0xd9c283 + 1]) >> 0 == +_0x1656df[_0xd9c283 + 1] ? [] : {}, _0x314fec)[_0x1656df[_0x1656df.length - 1]] = _0x526cad, _0x314fec);
    }
    getdata(_0x39c21d) {
      let _0x435fa5 = this.getval(_0x39c21d);
      if (/^@/.test(_0x39c21d)) {
        const [, _0x1a6711, _0x1dca48] = /^@(.*?)\.(.*?)$/.exec(_0x39c21d),
          _0x1d5228 = _0x1a6711 ? this.getval(_0x1a6711) : "";
        if (_0x1d5228) {
          try {
            const _0x1f8f9d = JSON.parse(_0x1d5228);
            _0x435fa5 = _0x1f8f9d ? this.lodash_get(_0x1f8f9d, _0x1dca48, "") : _0x435fa5;
          } catch (_0xeacd0b) {
            _0x435fa5 = "";
          }
        }
      }
      return _0x435fa5;
    }
    setdata(_0x1c554c, _0x419534) {
      let _0x102dc8 = !1;
      if (/^@/.test(_0x419534)) {
        const [, _0x98b3a7, _0x199245] = /^@(.*?)\.(.*?)$/.exec(_0x419534),
          _0x1f9281 = this.getval(_0x98b3a7),
          _0x626d9e = _0x98b3a7 ? "null" === _0x1f9281 ? null : _0x1f9281 || "{}" : "{}";
        try {
          const _0x493f43 = JSON.parse(_0x626d9e);
          this.lodash_set(_0x493f43, _0x199245, _0x1c554c);
          _0x102dc8 = this.setval(JSON.stringify(_0x493f43), _0x98b3a7);
        } catch (_0x56d942) {
          const _0x59e4a5 = {};
          this.lodash_set(_0x59e4a5, _0x199245, _0x1c554c);
          _0x102dc8 = this.setval(JSON.stringify(_0x59e4a5), _0x98b3a7);
        }
      } else {
        _0x102dc8 = this.setval(_0x1c554c, _0x419534);
      }
      return _0x102dc8;
    }
    getval(_0x4d7898) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4d7898) : this.isQuanX() ? $prefs.valueForKey(_0x4d7898) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4d7898]) : this.data && this.data[_0x4d7898] || null;
    }
    setval(_0x21a857, _0x5f5a6e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x21a857, _0x5f5a6e) : this.isQuanX() ? $prefs.setValueForKey(_0x21a857, _0x5f5a6e) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5f5a6e] = _0x21a857, this.writedata(), !0) : this.data && this.data[_0x5f5a6e] || null;
    }
    initGotEnv(_0x5778a4) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x5778a4 && (_0x5778a4.headers = _0x5778a4.headers ? _0x5778a4.headers : {}, void 0 === _0x5778a4.headers.Cookie && void 0 === _0x5778a4.cookieJar && (_0x5778a4.cookieJar = this.ckjar));
    }
    get(_0x102b11, _0x17e3fa = () => {}) {
      _0x102b11.headers && (delete _0x102b11.headers["Content-Type"], delete _0x102b11.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x102b11.headers = _0x102b11.headers || {}, Object.assign(_0x102b11.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x102b11, (_0x3d9188, _0x1caf7a, _0x8205e0) => {
        !_0x3d9188 && _0x1caf7a && (_0x1caf7a.body = _0x8205e0, _0x1caf7a.statusCode = _0x1caf7a.status);
        _0x17e3fa(_0x3d9188, _0x1caf7a, _0x8205e0);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x102b11.opts = _0x102b11.opts || {}, Object.assign(_0x102b11.opts, {
        hints: !1
      })), $task.fetch(_0x102b11).then(_0x2d069a => {
        const {
          statusCode: _0x1edf3c,
          statusCode: _0x20704a,
          headers: _0x4fb7a4,
          body: _0x4de278
        } = _0x2d069a;
        _0x17e3fa(null, {
          status: _0x1edf3c,
          statusCode: _0x20704a,
          headers: _0x4fb7a4,
          body: _0x4de278
        }, _0x4de278);
      }, _0x496724 => _0x17e3fa(_0x496724))) : this.isNode() && (this.initGotEnv(_0x102b11), this.got(_0x102b11).on("redirect", (_0xc445b8, _0x25485f) => {
        try {
          if (_0xc445b8.headers["set-cookie"]) {
            const _0x520d4c = _0xc445b8.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x520d4c && this.ckjar.setCookieSync(_0x520d4c, null);
            _0x25485f.cookieJar = this.ckjar;
          }
        } catch (_0x3fd6ad) {
          this.logErr(_0x3fd6ad);
        }
      }).then(_0x804cb6 => {
        const {
          statusCode: _0xf30b74,
          statusCode: _0x33397f,
          headers: _0x341e29,
          body: _0x4b3bbc
        } = _0x804cb6;
        _0x17e3fa(null, {
          status: _0xf30b74,
          statusCode: _0x33397f,
          headers: _0x341e29,
          body: _0x4b3bbc
        }, _0x4b3bbc);
      }, _0x265e1c => {
        const {
          message: _0x1f83ed,
          response: _0x243d5f
        } = _0x265e1c;
        _0x17e3fa(_0x1f83ed, _0x243d5f, _0x243d5f && _0x243d5f.body);
      }));
    }
    post(_0x15f666, _0x4992f6 = () => {}) {
      if (_0x15f666.body && _0x15f666.headers && !_0x15f666.headers["Content-Type"] && (_0x15f666.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x15f666.headers && delete _0x15f666.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x15f666.headers = _0x15f666.headers || {}, Object.assign(_0x15f666.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x15f666, (_0x5d7960, _0xc3ff88, _0x5c7d9f) => {
          !_0x5d7960 && _0xc3ff88 && (_0xc3ff88.body = _0x5c7d9f, _0xc3ff88.statusCode = _0xc3ff88.status);
          _0x4992f6(_0x5d7960, _0xc3ff88, _0x5c7d9f);
        });
      } else {
        if (this.isQuanX()) {
          _0x15f666.method = "POST";
          this.isNeedRewrite && (_0x15f666.opts = _0x15f666.opts || {}, Object.assign(_0x15f666.opts, {
            hints: !1
          }));
          $task.fetch(_0x15f666).then(_0x38d30d => {
            const {
              statusCode: _0x55f3bf,
              statusCode: _0x229384,
              headers: _0xd55b55,
              body: _0xe7409f
            } = _0x38d30d;
            _0x4992f6(null, {
              status: _0x55f3bf,
              statusCode: _0x229384,
              headers: _0xd55b55,
              body: _0xe7409f
            }, _0xe7409f);
          }, _0x2446a4 => _0x4992f6(_0x2446a4));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x15f666);
            const {
              url: _0x1b8faa,
              ..._0x1e61c1
            } = _0x15f666;
            this.got.post(_0x1b8faa, _0x1e61c1).then(_0x25ac62 => {
              const {
                statusCode: _0x3335a3,
                statusCode: _0x5436b2,
                headers: _0x1febdf,
                body: _0x40930c
              } = _0x25ac62;
              _0x4992f6(null, {
                status: _0x3335a3,
                statusCode: _0x5436b2,
                headers: _0x1febdf,
                body: _0x40930c
              }, _0x40930c);
            }, _0x224509 => {
              const {
                message: _0x1f3a09,
                response: _0x38023f
              } = _0x224509;
              _0x4992f6(_0x1f3a09, _0x38023f, _0x38023f && _0x38023f.body);
            });
          }
        }
      }
    }
    time(_0x11394e, _0x4e858d = null) {
      const _0x4c83f9 = _0x4e858d ? new Date(_0x4e858d) : new Date();
      let _0x2a2c7b = {
        "M+": _0x4c83f9.getMonth() + 1,
        "d+": _0x4c83f9.getDate(),
        "H+": _0x4c83f9.getHours(),
        "m+": _0x4c83f9.getMinutes(),
        "s+": _0x4c83f9.getSeconds(),
        "q+": Math.floor((_0x4c83f9.getMonth() + 3) / 3),
        S: _0x4c83f9.getMilliseconds()
      };
      /(y+)/.test(_0x11394e) && (_0x11394e = _0x11394e.replace(RegExp.$1, (_0x4c83f9.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x505d96 in _0x2a2c7b) new RegExp("(" + _0x505d96 + ")").test(_0x11394e) && (_0x11394e = _0x11394e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2a2c7b[_0x505d96] : ("00" + _0x2a2c7b[_0x505d96]).substr(("" + _0x2a2c7b[_0x505d96]).length)));
      return _0x11394e;
    }
    msg(_0x4c318b = _0x1972b9, _0x3e4b11 = "", _0x28d391 = "", _0x493855) {
      const _0xfd37ef = _0x2c9be0 => {
        if (!_0x2c9be0) {
          return _0x2c9be0;
        }
        if ("string" == typeof _0x2c9be0) {
          return this.isLoon() ? _0x2c9be0 : this.isQuanX() ? {
            "open-url": _0x2c9be0
          } : this.isSurge() ? {
            url: _0x2c9be0
          } : void 0;
        }
        if ("object" == typeof _0x2c9be0) {
          if (this.isLoon()) {
            let _0x2e0db8 = _0x2c9be0.openUrl || _0x2c9be0.url || _0x2c9be0["open-url"],
              _0x454d66 = _0x2c9be0.mediaUrl || _0x2c9be0["media-url"];
            return {
              openUrl: _0x2e0db8,
              mediaUrl: _0x454d66
            };
          }
          if (this.isQuanX()) {
            let _0x6bcbb1 = _0x2c9be0["open-url"] || _0x2c9be0.url || _0x2c9be0.openUrl,
              _0x253d64 = _0x2c9be0["media-url"] || _0x2c9be0.mediaUrl;
            return {
              "open-url": _0x6bcbb1,
              "media-url": _0x253d64
            };
          }
          if (this.isSurge()) {
            let _0x55ff52 = _0x2c9be0.url || _0x2c9be0.openUrl || _0x2c9be0["open-url"];
            return {
              url: _0x55ff52
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4c318b, _0x3e4b11, _0x28d391, _0xfd37ef(_0x493855)) : this.isQuanX() && $notify(_0x4c318b, _0x3e4b11, _0x28d391, _0xfd37ef(_0x493855))), !this.isMuteLog) {
        let _0x32e5ca = ["", "==============📣系统通知📣=============="];
        _0x32e5ca.push(_0x4c318b);
        _0x3e4b11 && _0x32e5ca.push(_0x3e4b11);
        _0x28d391 && _0x32e5ca.push(_0x28d391);
        console.log(_0x32e5ca.join("\n"));
        this.logs = this.logs.concat(_0x32e5ca);
      }
    }
    log(..._0x318d1f) {
      _0x318d1f.length > 0 && (this.logs = [...this.logs, ..._0x318d1f]);
      console.log(_0x318d1f.join(this.logSeparator));
    }
    logErr(_0x5d8b3d, _0x545370) {
      const _0x185c3b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x185c3b ? this.log("", "❗️" + this.name + ", 错误!", _0x5d8b3d.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x5d8b3d);
    }
    wait(_0x541002) {
      return new Promise(_0x4d405a => setTimeout(_0x4d405a, _0x541002));
    }
    done(_0x3ad2f5 = {}) {
      const _0x1a6d30 = new Date().getTime(),
        _0x32df6d = (_0x1a6d30 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x32df6d + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3ad2f5);
    }
  }(_0x1972b9, _0x2bcde2);
}
function checkVersion(_0x3c893d, _0x4b6de3) {
  try {
    logAndNotify("文件md5：" + _0x4b6de3);
    const _0x2ab3c2 = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x3c893d + "&fileMd5=" + _0x4b6de3),
      _0xb52cbe = JSON.parse(_0x2ab3c2.getBody("utf8"));
    _0xb52cbe.code === 301 ? process.exit(0) : logAndNotify(_0xb52cbe.data);
    if (_0xb52cbe.data2 && _0xb52cbe.data2.inviteData) {
      return _0xb52cbe.data2.inviteData;
    }
  } catch (_0x3268f6) {
    logAndNotify("版本检查失败:", _0x3268f6);
  }
}
function generateUserAgent() {
  return "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/" + Math.floor(Math.random() * 8 + 7) + "." + Math.floor(Math.random() * 10) + "." + (Math.floor(Math.random() * 10000) + 10000) + " NetType/WIFI Language/zh_CN";
}