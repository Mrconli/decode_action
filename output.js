//Mon Mar 03 2025 13:06:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
const wnn = process.env.wnn || "";
function log(_0x3fd129) {
  console.log(_0x3fd129);
}
function delay() {
  return new Promise(_0xc8c1f5 => setTimeout(_0xc8c1f5, 7000));
}
class WnnTask {
  constructor(_0x119e0d, _0x569f6d) {
    this.appUserToken = _0x119e0d.trim();
    this.index = _0x569f6d + 1;
    this.username = "账号 " + this.index;
    this.baseUrl = "https://api.qiumeiapp.com/zg-activity/zg-daily/";
    this.headers = {
      Host: "api.qiumeiapp.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.56(0x18003830) NetType/WIFI Language/zh_CN",
      Referer: "https://servicewechat.com/wx250394ab3f680bfa/637/page-frame.html",
      Connection: "keep-alive"
    };
  }
  async checkin() {
    try {
      const _0x553513 = await axios.post(this.baseUrl + "zgSigninNew", "appUserToken=" + this.appUserToken, {
        headers: this.headers
      });
      log("\n====== " + this.username + " ======");
      if (_0x553513.data.code === 703) {
        log("✅ 今日已签到！");
      } else {
        if (_0x553513.data.code === 200) {
          log("✅ 签到成功！");
        } else {
          if (_0x553513.data.code === 600) {
            log("❌ Token 失效，请重新获取！");
            return false;
          } else {
            log("❌ 签到失败: " + JSON.stringify(_0x553513.data));
          }
        }
      }
    } catch (_0x504873) {
      log("❌ 签到请求异常: " + _0x504873.message);
    }
    return true;
  }
  async treeCheckin() {
    try {
      const _0x5dbda0 = await axios.post(this.baseUrl + "signinZgForest", "appUserToken=" + this.appUserToken, {
        headers: this.headers
      });
      _0x5dbda0.data.code === 200 ? log("🌳 树木签到成功，获得 " + _0x5dbda0.data.data.waterGram + "g 水滴") : log("❌ 树木签到失败: " + JSON.stringify(_0x5dbda0.data));
    } catch (_0x2815ef) {
      log("❌ 树木签到请求异常: " + _0x2815ef.message);
    }
  }
  async assist(_0x398a88) {
    try {
      await axios.post(this.baseUrl + "addZgForestInvite", "appUserToken=" + this.appUserToken + "&sysCode=zgxcx&isRegister=1&userShareCode=" + _0x398a88, {
        headers: this.headers
      });
    } catch (_0x481292) {}
  }
  async browseMall() {
    try {
      const _0x4d2703 = await axios.post(this.baseUrl + "updateZgForestTask", "appUserToken=" + this.appUserToken + "&taskCode=2025001", {
        headers: this.headers
      });
      _0x4d2703.data.code === 200 ? log("✅ 浏览商城任务完成！") : log("❌ 浏览商城失败: " + JSON.stringify(_0x4d2703.data));
    } catch (_0x2e48ae) {
      log("❌ 浏览商城请求异常: " + _0x2e48ae.message);
    }
  }
  async readArticle() {
    try {
      const _0x87ee28 = await axios.post(this.baseUrl + "updateZgForestTask", "appUserToken=" + this.appUserToken + "&taskCode=2025002", {
        headers: this.headers
      });
      if (_0x87ee28.data.code === 200) {
        log("✅ 阅读文章任务完成！");
      } else {
        _0x87ee28.data.code === 703 ? log("⚠️ 请勿频繁操作！") : log("❌ 阅读文章失败: " + JSON.stringify(_0x87ee28.data));
      }
    } catch (_0x4ac926) {
      log("❌ 阅读文章请求异常: " + _0x4ac926.message);
    }
  }
  async getWaterDrops() {
    try {
      const _0x5a457a = await axios.post(this.baseUrl + "getZgForest", "appUserToken=" + this.appUserToken, {
        headers: this.headers
      });
      if (_0x5a457a.data.code === 200) {
        const _0x54df3b = _0x5a457a.data.data.remainWaterGram;
        log("💧 当前水滴数量: " + _0x54df3b + "g");
        return _0x54df3b;
      } else {
        log("❌ 获取水滴失败: " + JSON.stringify(_0x5a457a.data));
      }
    } catch (_0x5b0349) {
      log("❌ 获取水滴请求异常: " + _0x5b0349.message);
    }
    return 0;
  }
  async waterTree() {
    const _0x1be12c = await this.getWaterDrops();
    const _0x967d6f = Math.floor(_0x1be12c / 10);
    if (_0x967d6f <= 0) {
      log("❌ 水滴不足，无法浇水！");
      return;
    }
    log("🌿 计划浇水 " + _0x967d6f + " 次...");
    for (let _0x303be9 = 1; _0x303be9 <= _0x967d6f; _0x303be9++) {
      try {
        const _0x469660 = await axios.post(this.baseUrl + "wateringZgForest", "appUserToken=" + this.appUserToken, {
          headers: this.headers
        });
        _0x469660.data.code === 200 ? log("✅ 第 " + _0x303be9 + " 次浇水成功！") : log("❌ 浇水失败: " + JSON.stringify(_0x469660.data));
      } catch (_0x3ee82c) {
        log("❌ 浇水请求异常: " + _0x3ee82c.message);
      }
      await delay();
    }
  }
  async run(_0x468e80) {
    if (!(await this.checkin())) {
      return;
    }
    await delay();
    await this.treeCheckin();
    await delay();
    await this.assist(_0x468e80);
    await delay();
    await this.browseMall();
    await delay();
    await this.readArticle();
    await delay();
    await this.waterTree();
  }
}
(async () => {
  console.log("\n✨ 薇诺娜专柜商城 ✨\n");
  !wnn && (console.log("❌ 未填写 wnn 变量！请检查环境变量配置。\n"), process.exit(1));
  const _0xae90b1 = wnn.split("\n").map(_0x5c527e => _0x5c527e.trim()).filter(_0x34ee99 => _0x34ee99);
  if (_0xae90b1.length > 0) {
    console.log("\n共获取到 " + _0xae90b1.length + " 个账号");
    const _0x2971a6 = "e1b52ac4";
    for (let _0x2d9d06 = 0; _0x2d9d06 < _0xae90b1.length; _0x2d9d06++) {
      const _0x3d669b = new WnnTask(_0xae90b1[_0x2d9d06], _0x2d9d06);
      await _0x3d669b.run(_0x2971a6);
    }
  } else {
    console.log("❌ 未找到有效的 appUserToken，退出。");
  }
})();