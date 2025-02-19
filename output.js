//Wed Feb 19 2025 05:43:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const hqc = process.env.yymhqc;
let accountId = "";
const axios = require("axios");
let taskItemIdArr = [{
  "676992242694664192": "申贷赢好礼"
}, {
  "676992618558840832": "呼唤车友 组队出行"
}, {
  "662736940734369792": "暖“新”见面礼"
}, {
  "662403544497803264": "购新车意向数"
}, {
  "662744551156371456": "二手车购车意向数"
}, {
  "662404548685488128": "分享车型周期"
}, {
  "662429433629532160": "收藏车型周期"
}, {
  "661727887220559872": "签签有礼"
}, {
  "662802360732508160": "每日抽奖"
}, {
  "671509580525694976": "幸运好礼 一触‘积’发"
}, {
  "662819978147287040": "车生活小程序注册"
}, {
  "662813735114530816": "车主身份认证"
}, {
  "662805299354165248": "逛好物兑换"
}, {
  "662805251388100608": "逛违章罚款"
}, {
  "662805189626974208": "逛维修保养"
}, {
  "662805119309467648": "逛附近加油站"
}, {
  "662794321581330432": "逛选二手车"
}, {
  "662794237938524160": "逛选新车"
}, {
  662794135429734400: "逛汽车回收"
}, {
  "662793252641984512": "逛本地车服"
}];
function printBanner() {
  const _0x1a79bd = "\n        ╔══════════════════════════════════════════════╗\n        ║                                              ║\n        ║   ██████  ██████  ███    ███                ║\n        ║   ██   ██ ██   ██ ████  ████                ║\n        ║   ██   ██ ██   ██ ██ ████ ██                ║\n        ║   ██   ██ ██   ██ ██  ██  ██                ║\n        ║   ██████  ██████  ██      ██                ║\n        ║                                              ║\n        ║     好奇车最全任务程序  （所有脚本均免费）     ║\n        ║     Created by 大大鸣 - V1.0.0               ║\n        ║     联系方式: v:xolag29638099                ║\n        ║     代挂q群：1025838653                       ║\n        ╚══════════════════════════════════════════════╝\n        ";
  console.log(_0x1a79bd);
}
!(async () => {
  printBanner();
  await main();
})().catch(_0x138ed2 => {
  console.log("大大鸣提示保存日志", _0x138ed2);
});
async function main() {
  let _0x7767c2 = hqc.split("#");
  for (let _0x4bb40d = 0; _0x4bb40d < _0x7767c2.length; _0x4bb40d++) {
    console.log("大大鸣提示运行第", _0x4bb40d + 1, "个账号");
    accountId = _0x7767c2[_0x4bb40d];
    console.log("正常签到");
    await sign();
    console.log("每日抽奖，大大鸣祝你好运");
    await choujiang();
    console.log("10来个基本任务");
    await renwu();
    console.log("查询积分");
    let _0x53cd3b = await commonGet("/common/accountPointLeft?pointId=620415610219683840");
    console.log("拥有积分：" + _0x53cd3b.data.result);
  }
}
async function sign() {
  const _0x3cf917 = "https://channel.cheryfs.cn/archer/activity-api/signinact/signin";
  const _0x5eed2d = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
      tenantId: "619669306447261696",
      activityId: "620810406813786113",
      accountId: accountId
    }
  };
  try {
    const _0x5b036d = await axios.get(_0x3cf917, _0x5eed2d);
    if (_0x5b036d.data.success) {
      console.log("签到成功");
      const _0x5aa1de = await axios.get("https://channel.cheryfs.cn/archer/activity-api/signinact/sendRewardResult/" + _0x5b036d.data.result.sendLogId, _0x5eed2d);
      for (const _0x44edaa of _0x5aa1de.data.result.list) {
        console.log("获得：" + _0x44edaa.pointAmt + " " + _0x44edaa.winningPrizeName);
        if (_0x44edaa.winningPrizeName == "签到抽奖") {
          let _0x33c893 = await signLuckyDrawGet("/luckydraw/luckydrawtimes");
          for (let _0x479570 = 0; _0x479570 < _0x33c893.data.drawLimitUserLeft; _0x479570++) {
            let _0x1a0da1 = await signLuckyDrawGet("/luckydraw/luckydraw/8BD41756E6154A38A253B53EAF3F2338");
            if (_0x1a0da1.data.result) {
              let _0x2d6ade = await signLuckyDrawGet("/luckydraw/luckydrawResult/8BD41756E6154A38A253B53EAF3F2338");
              _0x2d6ade.data.result == "true" ? console.log("获得：" + _0x2d6ade.data.awardName) : console.log(_0x2d6ade.data.result);
            }
          }
        }
      }
    }
  } catch (_0x24a237) {
    console.log("签到报错", _0x24a237);
  }
}
async function signLuckyDrawGet(_0x58b575) {
  const _0x4f6149 = "https://channel.cheryfs.cn/archer/activity-api" + _0x58b575;
  const _0x45fe90 = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
      tenantId: "619669306447261696",
      activityId: "772254567680942081",
      accountId: accountId
    }
  };
  try {
    const _0x23007f = await axios.get(_0x4f6149, _0x45fe90);
    return _0x23007f;
  } catch (_0xbefb79) {
    console.log(_0xbefb79);
  }
}
async function luckyDrawGet(_0x3ec684) {
  const _0x49813e = "https://channel.cheryfs.cn/archer/activity-api" + _0x3ec684;
  const _0x3ed018 = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
      tenantId: "619669306447261696",
      activityId: "620821692188483585",
      accountId: accountId
    }
  };
  try {
    const _0x71dd5b = await axios.get(_0x49813e, _0x3ed018);
    return _0x71dd5b;
  } catch (_0x4d6fc3) {
    console.log(_0x4d6fc3);
  }
}
async function choujiang() {
  let _0x140ea2 = await luckyDrawGet("/luckydraw/luckydraw/27AA8429B12847B2AAE25FF2A0620284");
  if (_0x140ea2.data.success) {
    if (_0x140ea2.data.result) {
      let _0x5de06a = await luckyDrawGet("/luckydraw/luckydrawResult/27AA8429B12847B2AAE25FF2A0620284");
      _0x5de06a.data.result == "true" ? console.log("获得：" + _0x5de06a.data.awardName) : console.log(_0x5de06a.data.result);
    }
  } else {
    console.log("7点-23点才能抽奖,应该是18点的兑换吧。还没试");
  }
}
async function renwu() {
  for (const _0x4db207 of taskItemIdArr) {
    let _0x1ac9b7 = Object.keys(_0x4db207)[0];
    let _0x57ef1a = await commonGet("/task/taskItemAchieveDetail?taskItemId=" + _0x1ac9b7);
    console.log("任务：" + _0x57ef1a.data.result.taskDesc);
    if (_0x57ef1a.data.result.finished) {
      console.log("大大鸣提示任务已完成");
    } else {
      let _0x3cf212 = await commonGet("/taskItem/achieve?taskItemId=" + _0x1ac9b7);
      console.log(_0x3cf212.data.message);
    }
  }
}
async function commonGet(_0x182a80) {
  const _0x40f6f0 = "https://channel.cheryfs.cn/archer/activity-api" + _0x182a80;
  const _0x5774ac = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
      tenantId: "619669306447261696",
      activityId: "661720946758930433",
      accountId: accountId
    }
  };
  return await axios.get(_0x40f6f0, _0x5774ac);
}