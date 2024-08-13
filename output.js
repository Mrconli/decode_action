//Tue Aug 13 2024 11:41:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getToken,
  checkCk,
  getCookies,
  getUserInfo,
  validateCarmeWithType,
  wait,
  checkCarmeCount,
  tryCatchPromise
} = require("./common.js");
const request = require("request");
const {
  sign
} = require("./common");
const GAME_TYEP = 7;
const wait_time = process.env.sq_wait_time || 30;
const kami = process.env.ELE_CARME;
function isEmpty(_0x28640c) {
  return Object.values(_0x28640c).length === 0;
}
async function getInfo(_0x441e9f, _0x374515) {
  const _0x1229b1 = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x441e9f,
    "x-tap": "wx",
    referer: "https://servicewechat.com/wxece3a9a4c82f58c9/532/page-frame.html",
    "mini-janus": "3%40s41AHfqDnza7twZ2HI4gXYAtN9eRII6d1C2B5eTDUozQHuWiR6VTpHEdvgDci1%3D%3D",
    "User-Agent": "Mozilla/5.0 (Linux; Android 13; Pixel 4 XL Build/TP1A.220905.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5197 MMWEBSDK/20221012 MMWEBID/3313 MicroMessenger/8.0.30.2260(0x28001E55) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
  };
  const _0x4bee72 = {
    sceneCode: "",
    inviter: 1182216970,
    unionId: "o_PVDuKoERVt6K5nIVbca1zgT950",
    communityType: 0,
    groupEnvironment: false,
    encryptedData: "",
    iv: "",
    code: ""
  };
  const _0x238859 = new Date().getTime();
  const _0x4095d3 = 32529321;
  var _0x599959 = "data=" + encodeURIComponent(JSON.stringify(_0x4bee72));
  const _0x1a8d35 = _0x374515.split(";")[0],
    _0x17e98a = _0x1a8d35.split("_")[0];
  const _0x598603 = await sign(_0x17e98a + "&" + _0x238859 + "&" + _0x4095d3 + "&" + JSON.stringify(_0x4bee72), kami);
  const _0x259842 = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.wechat.biz.api.community.homepage/1.0/4.0/?jsv=2.4.12&appKey=" + _0x4095d3 + "&t=" + _0x238859 + "&sign=" + _0x598603 + "&c=" + _0x374515 + "&api=mtop.alsc.wechat.biz.api.community.homepage&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=wxece3a9a4c82f58c9%40wechat_android_11.1.5&accountSite=eleme&needLogin=true&ecole=1&_bx-m=1",
    method: "GET",
    headers: _0x1229b1,
    body: _0x599959
  };
  return new Promise(_0x45c49b => {
    request(_0x259842, async (_0xf92679, _0x567ed2, _0x31e0c6) => {
      if (!_0xf92679 && _0x567ed2.statusCode === 200) {
        try {
          const _0xae59a7 = JSON.parse(_0x31e0c6);
          if (!isEmpty(_0xae59a7.data)) {
            _0x45c49b(_0xae59a7.data);
          } else {
            console.log(_0xae59a7.ret[0]);
            _0x45c49b(null);
          }
        } catch (_0x51b068) {
          console.log(_0x31e0c6);
          _0x45c49b(null);
        }
      } else {
        _0x45c49b(null);
      }
    });
  });
}
async function signin(_0x3b5c57, _0x2709c0) {
  const _0x5143af = {
    Connection: "keep-alive",
    Accept: "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
    "X-UA": "RenderWay/miniProgram MiniAppId/wxece3a9a4c82f58c9 MiniAppVersion/10.20.1 DeviceId/o_PVDuFVUiMuXa6jZ4cdWpremOXc AppName/Wechat",
    "bx-ua": "303$bqxE95b898QfMaIsexRSS/Ez1qtZFtT1I1zFzFMzYs7DGC/4WG8S/lmy7xVK7xEvatk2itmmLFo0t3usT+xYvKNXtfyVb4eaiLMeTMgSIAR7TYqV3dD2lrmYvU8sgmCq+6PoF9YXQd7JbKFPs1+TAXWbI2cg+2h5/YqJFcX7ZQXxueBXnTXNhWqo30Vr2imcaQIYkL+SwcbP3X2CJyVeO/2N0FmVxaGj4Y5uk3uXScNvzhL7SdpRoqM5ccnIF23W8hD2ZdG5IOkulEPYMIO9i/mttQPfUNyWM7H1kk0NJqTaVsACWDj4z2Xhr4TOTbr8UJiZczA8ap593XmFlbN3HEeqsKs5k3ZDrn1E63lEGNJWZsZDc8mkYWdYKkEQK+JuhVamCCSDPByRqJHfzlrwMLq6doyuCLqamJUcpxogZ06uAX6/d8VLOHnC2Ybv+2wPiTtXiqGL886tv2LmL+9JibEhBeEu2hSodppC8VJ/CYVshwFWxj2TNi16iKW7MFyi7x+GmZZ03KgpqZ0aL14xeMq/DxykbTghL5dVPBFZcfL=",
    "bx-umidtoken": "S2gAWFvrznqymrKnNNrp-ilU26sxMCmsn-uDNWWg_gvVk08ZG5CG2lyLJzk22ooWb0nofjr-6WkDRnOoHnS54MihKN7ZY2pAaXtHOOQ9nibfgw==",
    "mini-janus": "3%40sBaI71cZCCLEtQgQ3%2FRSsC3tchizJmMPsmFJKAK6hSKuRu8d6oaXhxM4YfG%3D",
    "x-decode-ua": "false",
    "x-ele-check": "RuTUhNLhmjbNmMWBEhgWpHFZfeTYjcv+VspUSIWqdxn+jezT/w/o/iDSVD5ED4WiAR9ZDDd5TjumYKBoKSSHkCLi+Khc91YO3Nbp43H7ws/FAlPTBOHz1ONmRjrmHFSljsFQz7eKw3XmO4CC8YTqAoSsPxllV7v224aDliyze80AfTGbnlNk3NH6yjvWyVw2EzW8DjTJut2YzFXhYDAzXmw0Eot+7ww0oXIJMm2S10XuALrBmsqWTs2m6Rw2RxB2mcSd3qxPbOn8fBKxooPRbHxHRNhxRpK0zu2XPLp7dcGuhkbIx5WFKM8KwiueMmed5iaHJcqnmTlGCrRG7EwaMI4noZYoXfUNlQeJslWKOXfqJ6VpXPN7ORJsXmSu/sn/QKxDZgMd2i0V73A0+LkL+UOipaCvJorGo14+bfOyYSCqAGPiSb83tmLxax4eVXc8NDNWLqfeE9mT8zdOfjqjBRf52vLwX7HIjAp3SM6GdV++sUPJRVaU1OGZOaQHtrmQ",
    "x-ele-ua": "RenderWay/miniProgram MiniAppId/wxece3a9a4c82f58c9 MiniAppVersion/10.20.1 DeviceId/o_PVDuFVUiMuXa6jZ4cdWpremOXc AppName/Wechat microsoft/microsoft windows/10 Wechat/3.4.0 channel/wechat_app subChannel/wechat_app.default MicroMessenger/8.0.6",
    "x-secext-city": "21",
    "x-tap": "wx",
    "x-ticid": "ARF-8TDuE8Hp-BvQA-2Kt6CXRWVIVYXQP17Rkkd3yLqT43On0ljjKb9CYZSD9R0o39xFvMytwZBFkkuljESZ-Bc6X4xb",
    Referer: "https://servicewechat.com/wxece3a9a4c82f58c9/496/page-frame.html",
    Cookie: _0x3b5c57,
    "content-type": "application/x-www-form-urlencoded"
  };
  const _0x5cb25f = new Date().getTime();
  const _0x1aeaa2 = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.alsc.wechat.biz.api.checkin/1.0/4.0/?jsv=2.4.12&appKey=32529321&t=\"" + _0x5cb25f + "\"&sign=19bcc772739e471dd8bae51cf7abb34c&c=65132fab890611a36ea4c56426be6bc5_1685709597766%3Bde94d00b67ff8d2082f9efeeaf38cfd4&api=mtop.alsc.wechat.biz.api.checkin&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=wxece3a9a4c82f58c9%40wechat_ios_10.20.1&accountSite=eleme&data={\"sceneCode\":\"" + _0x2709c0 + "\",\"firstCheckIn\":false}&_bx-m=1",
    method: "GET",
    headers: _0x5143af
  };
  return tryCatchPromise(_0x44265b => {
    request(_0x1aeaa2, async (_0x50eb4a, _0x484cb9, _0x12faa2) => {
      if (!_0x50eb4a && _0x484cb9.statusCode === 200) {
        try {
          const _0x110efe = JSON.parse(_0x12faa2);
          if (!isEmpty(_0x110efe.data)) {
            _0x44265b(_0x110efe.data);
          } else {
            console.log(_0x110efe.ret[0]);
            _0x44265b(null);
          }
        } catch (_0x5a4a6d) {
          console.log(_0x12faa2 || _0x5a4a6d);
          _0x44265b(null);
        }
      } else {
        _0x44265b(null);
      }
    });
  });
}
async function bindInvited(_0x2aab6b, _0x213e4b) {
  const _0x33ea3a = {
    Connection: "keep-alive",
    Accept: "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
    "X-UA": "RenderWay/miniProgram MiniAppId/wxece3a9a4c82f58c9 MiniAppVersion/10.20.1 DeviceId/o_PVDuFVUiMuXa6jZ4cdWpremOXc AppName/Wechat",
    "bx-ua": "303$bqxE95b898QfMaIsexRSS/Ez1qtZFtT1I1zFzFMzYs7DGC/4WG8S/lmy7xVK7xEvatk2itmmLFo0t3usT+xYvKNXtfyVb4eaiLMeTMgSIAR7TYqV3dD2lrmYvU8sgmCq+6PoF9YXQd7JbKFPs1+TAXWbI2cg+2h5/YqJFcX7ZQXxueBXnTXNhWqo30Vr2imcaQIYkL+SwcbP3X2CJyVeO/2N0FmVxaGj4Y5uk3uXScNvzhL7SdpRoqM5ccnIF23W8hD2ZdG5IOkulEPYMIO9i/mttQPfUNyWM7H1kk0NJqTaVsACWDj4z2Xhr4TOTbr8UJiZczA8ap593XmFlbN3HEeqsKs5k3ZDrn1E63lEGNJWZsZDc8mkYWdYKkEQK+JuhVamCCSDPByRqJHfzlrwMLq6doyuCLqamJUcpxogZ06uAX6/d8VLOHnC2Ybv+2wPiTtXiqGL886tv2LmL+9JibEhBeEu2hSodppC8VJ/CYVshwFWxj2TNi16iKW7MFyi7x+GmZZ03KgpqZ0aL14xeMq/DxykbTghL5dVPBFZcfL=",
    "bx-umidtoken": "S2gAWFvrznqymrKnNNrp-ilU26sxMCmsn-uDNWWg_gvVk08ZG5CG2lyLJzk22ooWb0nofjr-6WkDRnOoHnS54MihKN7ZY2pAaXtHOOQ9nibfgw==",
    "mini-janus": "3%40sBaI71cZCCLEtQgQ3%2FRSsC3tchizJmMPsmFJKAK6hSKuRu8d6oaXhxM4YfG%3D",
    "x-decode-ua": "false",
    "x-ele-check": "RuTUhNLhmjbNmMWBEhgWpHFZfeTYjcv+VspUSIWqdxn+jezT/w/o/iDSVD5ED4WiAR9ZDDd5TjumYKBoKSSHkCLi+Khc91YO3Nbp43H7ws/FAlPTBOHz1ONmRjrmHFSljsFQz7eKw3XmO4CC8YTqAoSsPxllV7v224aDliyze80AfTGbnlNk3NH6yjvWyVw2EzW8DjTJut2YzFXhYDAzXmw0Eot+7ww0oXIJMm2S10XuALrBmsqWTs2m6Rw2RxB2mcSd3qxPbOn8fBKxooPRbHxHRNhxRpK0zu2XPLp7dcGuhkbIx5WFKM8KwiueMmed5iaHJcqnmTlGCrRG7EwaMI4noZYoXfUNlQeJslWKOXfqJ6VpXPN7ORJsXmSu/sn/QKxDZgMd2i0V73A0+LkL+UOipaCvJorGo14+bfOyYSCqAGPiSb83tmLxax4eVXc8NDNWLqfeE9mT8zdOfjqjBRf52vLwX7HIjAp3SM6GdV++sUPJRVaU1OGZOaQHtrmQ",
    "x-ele-ua": "RenderWay/miniProgram MiniAppId/wxece3a9a4c82f58c9 MiniAppVersion/10.20.1 DeviceId/o_PVDuFVUiMuXa6jZ4cdWpremOXc AppName/Wechat microsoft/microsoft windows/10 Wechat/3.4.0 channel/wechat_app subChannel/wechat_app.default MicroMessenger/8.0.6",
    "x-secext-city": "21",
    "x-smallstc": "{\"loginSucResultAction\":\"loginResult\",\"st\":\"tb_s_ele_1ADg6Le-9nIGfIQpspL2mGA\",\"loginType\":\"snsLogin\",\"open_id\":\"oQZUI0dAar6UJEJjyqlF_EpvOxao\",\"loginScene\":\"miniProgramLogin\",\"unb\":2209633667417,\"resultCode\":100,\"appEntrance\":\"weixin\",\"elemeExt\":\"{}\",\"smartlock\":false,\"snsType\":\"weixin_mini_program\",\"sid\":\"12be3156d10c030cec5acf731cc19408\",\"cookie2\":\"12be3156d10c030cec5acf731cc19408\",\"munb\":2209633667417,\"SID\":\"MTJiZTMxNTZkMTBjMDMwY2VjNWFjZjczMWNjMTk0MDjMFG-U2x_nu2TxBkH-SqbB\",\"bindTag\":\"existed\",\"loginResult\":\"success\",\"sgcookie\":\"M100gXLFvYP5Fr2PcLvry0ZbmxyWQoKIKBAyF7mJsrmbyn8NDS84jY/MTCUTf+a5Iz6vMBvY7EovOaKViS1KUxTf9/CB2ktVude/f4YNmQvy01o=\",\"user_id\":\"1000127450482\",\"csg\":\"1564a413\",\"union_id\":\"o_PVDuFVUiMuXa6jZ4cdWpremOXc\",\"USERID\":\"1000127450482\",\"UTUSER\":\"1000127450482\"}",
    "x-tap": "wx",
    "x-ticid": "ARF-8TDuE8Hp-BvQA-2Kt6CXRWVIVYXQP17Rkkd3yLqT43On0ljjKb9CYZSD9R0o39xFvMytwZBFkkuljESZ-Bc6X4xb",
    Referer: "https://servicewechat.com/wxece3a9a4c82f58c9/496/page-frame.html",
    Cookie: _0x2aab6b,
    "content-type": "application/x-www-form-urlencoded"
  };
  const _0x3c33ad = new Date().getTime();
  const _0xae88f4 = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.alsc.wechat.biz.api.community.bind.invite/1.0/4.0/?jsv=2.4.12&appKey=32529321&t=\"" + _0x3c33ad + "\"&sign=19bcc772739e471dd8bae51cf7abb34c&c=65132fab890611a36ea4c56426be6bc5_1685709597766%3Bde94d00b67ff8d2082f9efeeaf38cfd4&api=mtop.alsc.wechat.biz.api.checkin&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=wxece3a9a4c82f58c9%40wechat_ios_10.20.1&accountSite=eleme&data={\"inviteCode\":\"" + _0x213e4b + "\",\"firstCheckIn\":false}&_bx-m=1",
    method: "GET",
    headers: _0x33ea3a
  };
  return tryCatchPromise(_0x3ec5f7 => {
    request(_0xae88f4, async (_0x3050e0, _0x12599e, _0x332d71) => {
      if (!_0x3050e0 && _0x12599e.statusCode === 200) {
        try {
          const _0x5253cb = JSON.parse(_0x332d71);
          if (!isEmpty(_0x5253cb.data)) {
            console.log(_0x5253cb.data.desc + "获得：" + _0x5253cb.data.awardAmount + " 福利金");
            _0x3ec5f7(_0x5253cb.data);
          } else {
            console.log(_0x5253cb.ret[0]);
            _0x3ec5f7(null);
          }
        } catch (_0x5d885b) {
          console.log(_0x332d71);
          _0x3ec5f7(null);
        }
      } else {
        _0x3ec5f7(null);
      }
    });
  });
}
async function checkIn(_0x354268, _0x14825f) {
  const _0x383e10 = _0x14825f.communityInfo;
  if (_0x383e10.communityName) {
    console.log("绑定的社群为：" + _0x383e10.communityName);
    const _0x4826d2 = process.env.inviteCode;
    if (_0x14825f.userInfo && _0x4826d2 !== _0x14825f.userInfo.inviteCode && !_0x14825f.userInfo.inviteUserInfoDTO && _0x4826d2) {
      await bindInvited(_0x354268, _0x4826d2);
    }
    const _0x569d24 = _0x383e10.sceneCode;
    const _0x26a899 = await signin(_0x354268, _0x569d24);
    if (_0x26a899) {
      console.log(_0x26a899.desc);
    }
  } else {
    console.log("你还没有加入社群，快找社群加入吧！");
  }
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x534aaa = getCookies();
  for (let _0x5a6ca4 = 0; _0x5a6ca4 < _0x534aaa.length; _0x5a6ca4++) {
    const _0x5c0779 = _0x534aaa[_0x5a6ca4];
    if (!_0x5c0779) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x1edfd3 = await checkCk(_0x5c0779, _0x5a6ca4, kami);
        if (!_0x1edfd3) {
          continue;
        }
        let _0x19d49b = await getUserInfo(_0x1edfd3);
        if (!_0x19d49b.username) {
          console.log("第", _0x5a6ca4 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x49b87d = _0x19d49b.user_id;
        await checkCarmeCount(kami, _0x49b87d, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x5a6ca4 + 1, "】", _0x19d49b.username, "*********");
        const _0x1ff755 = await getInfo(_0x1edfd3, "6479bc935af0ee3eb2a5b3887a1868bb_1692263416235;08b5bac886619782a657c9f274c43c7e");
        if (_0x1ff755.communityInfo) {
          await checkIn(_0x1edfd3, _0x1ff755);
        } else {
          console.log("获取用户信息：" + JSON.stringify(_0x1ff755));
        }
        if (_0x5a6ca4 < _0x534aaa.length - 1) {
          console.log("延时", wait_time, "秒继续下一个");
          await wait(wait_time);
        }
      } catch (_0x40b4e6) {
        console.log(_0x40b4e6);
      }
    }
  }
  process.exit(0);
}
start();
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