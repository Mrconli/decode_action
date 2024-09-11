//Wed Sep 11 2024 14:33:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x3a02f2 = function () {
  let _0x18901c = true;
  return function (_0x4cde6e, _0xa61399) {
    const _0x932cab = _0x18901c ? function () {
      if (_0xa61399) {
        const _0x2c0f7b = _0xa61399.apply(_0x4cde6e, arguments);
        return _0xa61399 = null, _0x2c0f7b;
      }
    } : function () {};
    return _0x18901c = false, _0x932cab;
  };
}();
(function () {
  _0x3a02f2(this, function () {
    const _0x446c84 = new RegExp("function *\\( *\\)"),
      _0x12e55e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x52c5fe = _0xb51584("init");
    !_0x446c84.test(_0x52c5fe + "chain") || !_0x12e55e.test(_0x52c5fe + "input") ? _0x52c5fe("0") : _0xb51584();
  })();
})();
const {
  wait: _0x25792e,
  checkCk: _0x237de8,
  getCookies: _0x5aab89,
  getUserInfo: _0x460e98,
  tryCatchPromise: _0x366460,
  validateCarmeWithType: _0x4c9279,
  checkCarmeCount: _0xc0a825,
  getCookieMap: _0x3171fb
} = require("./common.js");
(function () {
  let _0x379f77;
  try {
    const _0x392d14 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x379f77 = _0x392d14();
  } catch (_0x27e7d4) {
    _0x379f77 = window;
  }
  _0x379f77.setInterval(_0xb51584, 2000);
})();
const _0xd0a43d = require("request"),
  _0x2192dc = require("crypto"),
  _0x3531e9 = 15,
  _0x5e5a3e = process.env.ELE_CARME,
  {
    sendNotify: _0x4f5633
  } = require("./sendNotify1.js"),
  _0x58b01a = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x44d838(_0xaf945b) {
  const _0x45e981 = Buffer.from(_0xaf945b, "utf8"),
    _0x2b680a = _0x2192dc.publicEncrypt(_0x58b01a, _0x45e981);
  return _0x2b680a.toString("base64");
}
function _0xe363a5(_0x3df67f) {
  return Object.values(_0x3df67f).length === 0;
}
function _0x5336fa(_0x1f7db6) {
  if (!_0x1f7db6) return "-1";
  for (var _0x139b99 = _0x1f7db6.split(";"), _0x2791d0 = 0; _0x2791d0 < _0x139b99.length; _0x2791d0++) {
    var _0x124337 = _0x139b99[_0x2791d0].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x124337[0])) return _0x124337[1];
  }
  return "-1";
}
async function _0x299138(_0xc1f950, _0x1828e9) {
  const _0x4c811d = _0x3171fb(_0xc1f950);
  !_0x4c811d.has("wxUid") ? console.log("没有获取到推送 uid，不推送消息\n") : await _0x4f5633("饿了么中奖推送", _0x1828e9, {
    "uid": _0x4c811d.get("wxUid")
  });
}
async function _0x3abe3a(_0x5c1aba, _0x1656ca, _0x16e395, _0x3b4af6 = "1608030065155%40eleme_android_11.1.38") {
  var _0x15549e = {
    "content-type": "application/x-www-form-urlencoded",
    "cookie": _0x5c1aba,
    "x-miniapp-env": "{\"nbsn\":\"ONLINE\",\"nbsource\":\"online\"}",
    "x-miniapp-id-taobao": "2021002130656291",
    "x-miniapp-version": "1.20230322.162092",
    "appid": "2021002130656291",
    "x-features": 27,
    "x-ua": "AOSP on blueline(Android/10) AliApp(ELMC/11.1.38) Ariver/1.0.13.6",
    "x-ele-ua": "Rajax%2F1+AOSP_on_blueline%2Faosp_blueline+Android%2F10+Display%2Faosp_blueline-userdebug_10_QP1A.190711.020_eng.king.20220503.195143_test-keys+Eleme%2F11.1.38+Channel%2F1608030065155+ID%2Ff8a8e783-cb2e-3fa6-876b-c0e840f800fb%3B+KERNEL_VERSION%3A4.9.165-gfff483291c07-ab5725533+API_Level%3A29+Hardware%3A97b9f9fe80f7b4b9bb7ee87f95df7477",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x3363cc = new Date().getTime(),
    _0x21ab40 = 12574478;
  var _0x464568 = "data=" + encodeURIComponent(JSON.stringify(_0x16e395));
  const _0x3a83c8 = await _0x30a195(_0x5c1aba, "&" + _0x3363cc + "&" + _0x21ab40 + "&" + JSON.stringify(_0x16e395), _0x5e5a3e);
  var _0x203535 = {
    "url": "https://guide-acs.m.taobao.com/h5/" + _0x1656ca + "/1.0/?jsv=2.7.0&appKey=12574478&t=" + _0x3363cc + "&sign=" + _0x3a83c8 + "&api=" + _0x1656ca + "&v=1.0&type=originaljson&dataType=json&ttid=" + _0x3b4af6 + "&asac=2A21607NIIT1ND5C4YXJ6C&needLogin=true&LoginRequest=true",
    "method": "POST",
    "headers": _0x15549e,
    "body": _0x464568
  };
  return _0x366460(_0x13c6ef => {
    _0xd0a43d(_0x203535, async (_0x538508, _0xf3e21, _0x1c7f71) => {
      if (!_0x538508 && _0xf3e21.statusCode === 200) {
        try {
          const _0x142944 = JSON.parse(_0x1c7f71);
          let _0x41d67b = _0x142944.data;
          if (_0xe363a5(_0x41d67b) && _0x142944.ret[0].indexOf("接口调用成功") === -1) console.log(_0x142944.ret[0]), _0x13c6ef(null);else {
            _0x13c6ef(_0x41d67b);
          }
        } catch (_0x4946f7) {
          console.log(_0x1c7f71);
          _0x13c6ef(null);
        }
      } else _0x13c6ef(null);
    });
  });
}
async function _0x3c181b(_0x42b15f, _0x23ddc6) {
  console.log("\n开始翻倍");
  const _0x1697bf = {
    "missionCollectionId": _0x23ddc6,
    "locationInfos": "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    "accountPlan": "HAVANA_COMMON",
    "remindInfo": "false"
  };
  let _0x1e44d0 = await _0x3abe3a(_0x42b15f, "mtop.ele.biz.growth.task.core.querytask", _0x1697bf);
  if (_0x1e44d0) {
    const _0x5361f4 = _0x1e44d0.mlist;
    for (let _0x5ead78 = 0; _0x5ead78 < _0x5361f4.length; _0x5ead78++) {
      const _0x36e37b = _0x5361f4[_0x5ead78];
      let _0x44918a = _0x36e37b.missionCollectionId,
        _0x3cc871 = _0x36e37b.missionDefId;
      if (_0x36e37b.receiveStatus === "TORECEIVE" && _0x36e37b.status === "FINISH") {
        await _0x272db6(_0x42b15f, _0x3cc871, _0x44918a, _0x36e37b.missionXId);
      } else {
        if (_0x36e37b.actionConfig.actionType === "PAGEVIEW" && _0x36e37b.status === "RUNNING") {
          let _0x50b55a = "KB_ORCHARD";
          if (_0x36e37b.showTitle.indexOf("去游乐园") !== -1) _0x50b55a = "HAVANA_COMMON";else {}
          let _0x4c0841 = await _0x314ad6(_0x42b15f, _0x44918a, _0x3cc871);
          if (_0x4c0841.status === "RUNNING") {
            await _0x326959(_0x42b15f, _0x3cc871, _0x44918a, _0x36e37b.actionConfig.actionValue.pageSpm, _0x50b55a);
            await _0x25792e(3);
            let _0x5e76a5 = await _0x426529(_0x42b15f, _0x44918a);
            for (let _0x2f9b7c = 0; _0x2f9b7c < _0x5e76a5.length; _0x2f9b7c++) {
              let _0x198f09 = _0x5e76a5[_0x2f9b7c];
              if (_0x198f09.receiveStatus === "TORECEIVE" && _0x198f09.status === "FINISH") {
                await _0x5dcc3e(_0x42b15f, _0x3cc871, _0x44918a, _0x198f09.id);
              }
            }
          } else {
            await _0x5dcc3e(_0x42b15f, _0x3cc871, _0x44918a, _0x4c0841.id);
          }
        }
      }
    }
  }
  console.log("\n翻倍任务完成");
}
async function _0x272db6(_0x2eccf3, _0x57711f, _0x492046) {
  const _0x14849b = {
    "missionCollectionId": _0x492046,
    "missionId": _0x57711f,
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    "bizScene": "duobao_external",
    "accountPlan": "HAVANA_COMMON",
    "count": "1",
    "asac": "2A233157IJYIGQ95WFIIFJ",
    "umiToken": "1",
    "ua": "1"
  };
  let _0x2d2fc6 = await _0x3abe3a(_0x2eccf3, "mtop.ele.biz.growth.task.core.receiveprize", _0x14849b, "h5%40chrome_android_87.0.4280.141");
  if (_0x2d2fc6 && _0x2d2fc6.rlist) {
    console.log("完成任务");
  }
}
async function _0x314ad6(_0x3a46a3, _0x43ca6f, _0x40d422) {
  const _0x46e308 = {
    "missionCollectionId": _0x43ca6f,
    "missionId": _0x40d422,
    "bizScene": "duobao_external",
    "accountPlan": "KB_ORCHARD",
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]"
  };
  let _0x613710 = await _0x3abe3a(_0x3a46a3, "mtop.ele.biz.growth.task.core.querytask", _0x46e308);
  if (_0x613710) return _0x613710.mlist[0];
}
async function _0x426529(_0x43353f, _0x1bcc5e) {
  const _0x14e7bf = {
    "missionCollectionId": _0x1bcc5e,
    "locationInfos": "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    "accountPlan": "HAVANA_COMMON",
    "remindInfo": "false"
  };
  let _0x475164 = await _0x3abe3a(_0x43353f, "mtop.ele.biz.growth.task.core.querytask", _0x14e7bf);
  if (_0x475164) return _0x475164.mlist;
}
async function _0x5dcc3e(_0x142f4d, _0x2f7028, _0x254638, _0x27a7cd) {
  const _0x74fe10 = {
    "missionCollectionId": _0x254638,
    "missionId": _0x2f7028,
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    "bizScene": "duobao_external",
    "accountPlan": "HAVANA_COMMON",
    "instanceId": _0x27a7cd,
    "count": "1",
    "asac": "2A233157IJYIGQ95WFIIFJ",
    "umiToken": "1",
    "ua": "1"
  };
  let _0x1c65a2 = await _0x3abe3a(_0x142f4d, "mtop.ele.biz.growth.task.core.receiveprize", _0x74fe10, "h5%40chrome_android_87.0.4280.141");
  _0x1c65a2 && _0x1c65a2.rlist && console.log("完成任务");
}
async function _0x47d80c(_0x5ce40f, _0x4628d6) {
  const _0x4f0b16 = {
    "channel": "ELMC",
    "blockList": "[\"luckyNumber\",\"participants\",\"property\",\"winnerList\",\"wonDetail\",\"noWonPrize\"]",
    "rightId": _0x4628d6,
    "bizScene": "duobao_external"
  };
  let _0x3f0643 = await _0x3abe3a(_0x5ce40f, "mtop.koubei.interactioncenter.snatch.new.detail", _0x4f0b16),
    _0x43e338 = _0x3f0643.data;
  _0x43e338 && console.log(_0x43e338.baseInfo.title, "中奖率，已翻" + _0x43e338.properties.hasExchangeNum + "倍");
}
async function _0x326959(_0x65f472, _0x1cd6e6, _0x4a55dc, _0x485aab, _0xea18de) {
  const _0x28e894 = {
    "collectionId": _0x4a55dc,
    "missionId": _0x1cd6e6,
    "actionCode": "PAGEVIEW",
    "pageFrom": _0x485aab,
    "viewTime": "15",
    "bizScene": "duobao_external",
    "accountPlan": _0xea18de,
    "sync": "false",
    "asac": "2A21607NIIT1ND5C4YXJ6C",
    "ua": "140#8sfoUmwqzzWN9zo23zNz4pN8s77Hm2h+EI+inHO/BHPbbnMvEbjjZnbtAu7j3ZwbaVM4K6hqzznJWaQR2DrxzXQziO/qlQzx2DD3VthqzFde2XU+llfzzPziVWS3xg8I1wba7X53xl82VUpji2Jpo20oiliCyZZMhx+aFhb3z6xBKJUo6ditqgVRx+/1bEZzHypEHzQH34OdXYSaAJiXbonqm7k+tZYMwJbCoPqP4iFlDCiXApJegThvPPLS0raxfEKv+Wy2oXC1unXAp+FV1UyGqwzLLC/QYji+VpSkP5+KoLrXGrueipk8pD9nWxWLn5QH4OJIlHtoTyF7uufK101GV7EbwX6fcMYJUPbEP6A9WhkqYULJ2Mg5KcHuyqMPi1zf8DxJWyBFhGh15Ve8kGzTeFiXX1cQoKTDwl/M6WpZwLRkRwlqRfn3Mtb/CU2DCrzxdkMt6V9TG9Erv9WORuL/W8/B6pcEHIZxlCc0m8ncGSQV7q/w36wa33tKA4moz1Xej5l7b4cwI7r9zSl+bo10SMnEQoDKwkx3eDIug6+JTuw22tn/j38tmwMjKlfKyTeZvrFUbOtm7XlJmgKUK8zuTBO4sQucdGRsZp2bfvYPBmBkLVo+R5yXvz4C5OzgZYjsRd36Cx/XVOy2NlTQvJf2kHABuUmlAUuivQ7ddlW8TXtmZOL+OpvHfhpiLZdZYSSCT46ZvkBxJdOdVRu702rAcxR/GuiQTMpnAQFYReARBKtvDFXklnTz0ticCP4dBWSWfK2/5+zvOF/JP9u0QRCgUCOo70XH+QgcuqifTyCrYJ2AQvR8lTgxGbMXHqajsNQyGEZxfRDSQJW+rjo/TwNFv/PuQFiajbUlj8pjdbwMGtuDa57nMKY9hLmFDLU1ns10Um9sNb1=",
    "umidtoken": "T2gA__C3-r3sSTF7ZzBUS-C0RcKNSn8q17hKFBPM5pcplOQGdIK15W9ScohgOWU8PE0="
  };
  return await _0x3abe3a(_0x65f472, "mtop.ele.biz.growth.task.event.pageview", _0x28e894);
}
async function _0x4e88ce(_0x372d17, _0x3c9a18) {
  const _0x1939ad = {
    "actId": "20230321231044308175810899",
    "asac": "",
    "bizScene": "duobao_lucky",
    "channel": "ELMC",
    "hsf": "1",
    "instance": "INNER",
    "latitude": "30.178378857672215",
    "locationInfos": "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    "longitude": "120.21993197500706",
    "rightId": _0x3c9a18
  };
  return await _0x3abe3a(_0x372d17, "mtop.koubei.interactioncenter.snatch.exchange.exchangeproof", _0x1939ad);
}
async function _0x156877(_0x588c57) {
  const _0x249d75 = {
    "channel": "ELMC",
    "blockList": "[\"participants\",\"wonDetail\",\"noWonPrize\"]",
    "bizScene": "duobao_external"
  };
  console.log("\n开始查询最近的夺宝结果");
  let _0x371f7b = await _0x3abe3a(_0x588c57, "mtop.koubei.interactioncenter.snatch.mine", _0x249d75);
  if (_0x371f7b) {
    let _0x78e75b = _0x371f7b.data;
    if (_0x78e75b.length > 0) for (let _0x4e8244 = 0; _0x4e8244 < _0x78e75b.length; _0x4e8244++) {
      let _0x138e48 = _0x78e75b[_0x4e8244];
      _0x138e48.awardStatus === "not_won_wait_accept" && (await _0x132bbc(_0x588c57, _0x138e48.baseInfo.id), await _0x25792e(1));
    } else console.log("没有参与过夺宝");
  }
}
async function _0x132bbc(_0x1ea603, _0x10a26b) {
  const _0x2c7830 = {
    "rightId": _0x10a26b,
    "actId": "20210425163619036128611204",
    "asac": "2A23725HM0AS2TZ458W1VX",
    "bizScene": "duobao_external"
  };
  let _0xdaa6f6 = await _0x3abe3a(_0x1ea603, "mtop.koubei.interactioncenter.snatch.nowon.reviceprize", _0x2c7830);
  _0xdaa6f6 && console.log("0 元夺宝获得：" + _0xdaa6f6.data[0].title);
}
async function _0x256459(_0x48c0e9) {
  const _0x372b36 = {
    "channel": "ELMC",
    "blockList": "[\"participants\",\"wonDetail\",\"noWonPrize\"]",
    "longitude": "120.21993197500706",
    "latitude": "30.178378857672215",
    "actId": "20230811111144939171438583",
    "cpnCode": "TIMING_RIGHT",
    "cpnCollectionId": "20230811111144993902427153",
    "statusSet": "[\"ONLINE\",\"PREPARE\"]",
    "showStatusSet": "[\"ONLINE\",\"PREPARE\"]",
    "bizScene": "duobao_external"
  };
  let _0xbdc6f = await _0x3abe3a(_0x48c0e9, "mtop.koubei.interactioncenter.snatch.homepage.query", _0x372b36);
  return _0xbdc6f.data;
}
async function _0x745918(_0x5eaf63) {
  let _0x305fa5 = await _0x256459(_0x5eaf63);
  if (_0x305fa5) {
    let _0x47cb09 = _0x305fa5.groupSnatchList.EXCELLENT;
    console.log("\n开始夺宝");
    for (let _0xd2b250 = 0; _0xd2b250 < _0x47cb09.length; _0xd2b250++) {
      let _0x6f0c7f = _0x47cb09[_0xd2b250];
      if (_0x6f0c7f.status === "ONLINE" && !_0x6f0c7f.properties.hasParticipated) {
        let _0x3e4c01 = _0x6f0c7f.baseInfo,
          _0xa016f7 = await _0x4e88ce(_0x5eaf63, _0x3e4c01.rightId);
        _0xa016f7 && console.log("参与", _0x3e4c01.title, "夺宝成功，夺宝号码为", _0xa016f7.data.luckyNumber);
        await _0x25792e(2);
      }
    }
  }
}
const _0x30a195 = async (_0x1327fa, _0x5648c5, _0x2de024 = 5) => {
  if (_0x2de024 === 0) return console.log("网络异常，请检查网络状况"), "";
  const _0x509614 = _0x5336fa(_0x1327fa),
    _0xd2da17 = _0x509614.split("_")[0],
    _0x349e32 = {
      "carmi": _0x5e5a3e,
      "content": _0x44d838(_0xd2da17) + _0x5648c5,
      "type": 1
    };
  var _0x281000 = {
      "content-type": "application/json"
    },
    _0x179cc9 = {
      "url": "http://api.94wan.fun/new/sign",
      "method": "POST",
      "headers": _0x281000,
      "body": JSON.stringify(_0x349e32)
    };
  return _0x366460(_0x552dd0 => {
    _0xd0a43d(_0x179cc9, async (_0x4c9d31, _0x3098de, _0x191582) => {
      if (!_0x4c9d31 && _0x3098de.statusCode === 200) {
        const _0x49dac8 = JSON.parse(_0x191582);
        _0x49dac8.code !== 20000 ? (console.error(_0x49dac8.message), process.exit(0)) : _0x552dd0(_0x49dac8.data.msg);
      } else {
        if (_0x4c9d31 && (_0x4c9d31.message.indexOf("socket hang up") !== -1 || _0x4c9d31.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x25792e(2);
          _0x552dd0(await _0x30a195(_0x1327fa, _0x5648c5, _0x2de024 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x552dd0("");
        }
      }
    });
  });
};
async function _0x3c51cf(_0x2128cf) {
  let _0x3fe8b7 = await _0x256459(_0x2128cf);
  if (_0x3fe8b7) {
    let _0xfb6493 = _0x3fe8b7.groupSnatchList.EXCELLENT;
    console.log("\n开始做翻倍任务");
    for (let _0x1292f6 = 0; _0x1292f6 < _0xfb6493.length; _0x1292f6++) {
      let _0x2420c4 = _0xfb6493[_0x1292f6];
      if (_0x2420c4.status === "ONLINE") {
        let _0xad58e0 = _0x2420c4.properties.hasParticipated;
        if (_0xad58e0) {
          let _0x1769c0 = _0x2420c4.properties.taskSetId;
          await _0x3c181b(_0x2128cf, _0x1769c0);
        }
        await _0x47d80c(_0x2128cf, _0x2420c4.baseInfo.rightId);
        await _0x25792e(2);
      }
    }
  }
}
(async function () {
  await _0x4c9279(_0x5e5a3e, 1);
  const _0x139eb4 = _0x5aab89();
  for (let _0x4eaa5a = 0; _0x4eaa5a < _0x139eb4.length; _0x4eaa5a++) {
    const _0x2bba3a = _0x139eb4[_0x4eaa5a];
    if (!_0x2bba3a) console.log(" ❌无效用户信息, 请重新获取ck");else {
      try {
        let _0x4dc76a = await _0x237de8(_0x2bba3a, _0x4eaa5a);
        if (!_0x4dc76a) continue;
        let _0x15d00d = await _0x460e98(_0x4dc76a);
        if (!_0x15d00d.username) {
          console.log("第", _0x4eaa5a + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0xa1ba28 = _0x15d00d.user_id;
        await _0xc0a825(_0x5e5a3e, _0xa1ba28, _0x3531e9);
        console.log("******开始【饿了么账号", _0x4eaa5a + 1, "】", _0x15d00d.username, "*********");
        await _0x156877(_0x4dc76a);
        await _0x745918(_0x4dc76a);
        await _0x3c51cf(_0x4dc76a);
      } catch (_0x58c0ad) {
        console.log(_0x58c0ad);
      }
    }
  }
  process.exit(0);
})();
function _0xb51584(_0x29af27) {
  function _0x4bae86(_0x205eaf) {
    if (typeof _0x205eaf === "string") {
      return function (_0x1bb107) {}.constructor("while (true) {}").apply("counter");
    } else ("" + _0x205eaf / _0x205eaf).length !== 1 || _0x205eaf % 20 === 0 ? function () {
      return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0x4bae86(++_0x205eaf);
  }
  try {
    if (_0x29af27) return _0x4bae86;else _0x4bae86(0);
  } catch (_0x281229) {}
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