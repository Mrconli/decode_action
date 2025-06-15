//Sun Jun 15 2025 06:06:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var cookie = process.env.BLACKBOX_COOKIE;
const axios = require("axios");
function formatSecondsTimestamp(_0x4a2099) {
  const _0x52cd7c = new Date(_0x4a2099 * 1000),
    _0x4dd6bb = _0x52cd7c.getFullYear(),
    _0x2dab23 = String(_0x52cd7c.getMonth() + 1).padStart(2, "0"),
    _0x58424d = String(_0x52cd7c.getDate()).padStart(2, "0"),
    _0x465ac7 = String(_0x52cd7c.getHours()).padStart(2, "0"),
    _0xc3349b = String(_0x52cd7c.getMinutes()).padStart(2, "0"),
    _0x34c239 = String(_0x52cd7c.getSeconds()).padStart(2, "0");
  return _0x4dd6bb + "-" + _0x2dab23 + "-" + _0x58424d + " " + _0x465ac7 + ":" + _0xc3349b + ":" + _0x34c239;
}
async function getHkey(_0x9b894f, _0xc85a5d, _0x1133b4 = "null") {
  const _0x42fe08 = "http://47.120.39.109:9900/hkey",
    _0x3a7097 = {
      "heyboxId": _0x9b894f,
      "type": _0xc85a5d,
      "taskName": _0x1133b4
    },
    _0x1f0946 = {
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": 5000
    };
  try {
    const _0x14f0ac = await axios.post(_0x42fe08, _0x3a7097, _0x1f0946);
    return _0x14f0ac.data;
  } catch (_0xd84017) {
    console.error("Error:", _0xd84017);
    return null;
  }
}
async function follow(_0x493df5, _0x590927) {
  var _0x1f8d76 = _0x493df5.split("#"),
    _0x379fe7 = _0x1f8d76[0],
    _0x493df5 = _0x1f8d76[1],
    _0x276d76 = "following_id=12318034",
    _0x2e1179 = await getHkey(_0x379fe7, 3);
  hkey = _0x2e1179.hkey;
  timestamp = _0x2e1179.timestamp;
  var _0x1e1f38 = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Host": "api.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept": "*/*",
      "Cookie": _0x493df5
    },
    "timeout": 5000
  };
  try {
    var _0xa6913a = await axios.post("https://api.xiaoheihe.cn/bbs/app/profile/follow/user?heybox_id=" + _0x379fe7 + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=l7iQ8IQMHzj3hSydLxxsQMSzjnCvkiY3&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + timestamp + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0x276d76, _0x1e1f38);
    return _0xa6913a.data;
  } catch (_0x17e733) {
    console.error("Error:", _0x17e733);
    return null;
  }
}
async function getTaskList(_0x55db29, _0x40394) {
  var _0x15d399 = _0x55db29.split("#"),
    _0x48eec7 = _0x15d399[0],
    _0x55db29 = _0x15d399[1],
    _0xbd1e6a = await getHkey(_0x48eec7, 2);
  hkey = _0xbd1e6a.hkey;
  timestamp = _0xbd1e6a.timestamp;
  var _0x282db5 = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Host": "api.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept": "*/*",
      "Cookie": _0x55db29
    },
    "timeout": 5000
  };
  try {
    {
      var _0x4d22bf = await axios.get("https://api.xiaoheihe.cn/task/list_v2/?heybox_id=" + _0x48eec7 + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=tb6e1k7WqQCIHToyzWzI8Ogq9d0EIgpb&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + timestamp + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0x282db5);
      return _0x4d22bf.data;
    }
  } catch (_0x7b46f5) {
    console.error("Error:", _0x7b46f5);
    return null;
  }
}
async function getSignIn(_0x342b7b, _0x547f97) {
  var _0x46f3c4 = _0x342b7b.split("#"),
    _0x2b0376 = _0x46f3c4[0],
    _0x342b7b = _0x46f3c4[1],
    _0xa3ac8b = await getHkey(_0x2b0376, 1);
  hkey = _0xa3ac8b.hkey;
  timestamp = _0xa3ac8b.timestamp;
  var _0x81e165 = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Host": "api.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept": "*/*",
      "Cookie": _0x342b7b
    },
    "timeout": 5000
  };
  try {
    var _0x4064c2 = await axios.get("https://api.xiaoheihe.cn/task/sign_v3/sign?heybox_id=" + _0x2b0376 + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=tb6e1k7WqQCIHToyzWzI8Ogq9d0EIgpb&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + timestamp + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0x81e165);
    return _0x4064c2.data;
  } catch (_0x17f8ac) {
    console.error("Error:", _0x17f8ac);
    return null;
  }
}
async function doTask(_0x56b27f, _0x416d31) {
  var _0xa82200 = _0x56b27f.split("#");
  var _0x3f3ec5 = _0xa82200[0];
  var _0x56b27f = _0xa82200[1];
  var _0x80e14f = await getHkey(_0x3f3ec5, 5, _0x416d31);
  hkey = _0x80e14f.hkey;
  _time = _0x80e14f.timestamp;
  _post_data = _0x80e14f.data;
  _post_key = _0x80e14f.key;
  _post_sid = _0x80e14f.sid;
  var _0x198f93 = new URLSearchParams();
  _0x198f93.append("data", _post_data);
  _0x198f93.append("key", _post_key);
  _0x198f93.append("sid", _post_sid);
  var _0x3e4ee5 = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Cookie": _0x56b27f,
      "Content-Type": "application/x-www-form-urlencoded",
      "Host": "data.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip"
    },
    "timeout": 5000
  };
  try {
    var _0x1d00f5 = await axios.post("https://data.xiaoheihe.cn/account/data_report/?type=104&time_=" + _time + "&session_id=77ee4fea-46d9-4a53-b5ce-5df9cf056b7e&heybox_id=" + _0x3f3ec5 + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=fSz04CwxvcWzG737aFNKKxNeGZDFOqJ1&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + _time + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0x198f93, _0x3e4ee5);
    return _0x1d00f5.data;
  } catch (_0x445efc) {
    console.error("Error:", _0x445efc);
    return null;
  }
}
async function main() {
  if (cookie.includes("&")) var _0x39ae1a = cookie.split("&");else var _0x39ae1a = [cookie];
  console.log("找到" + _0x39ae1a.length + "个账号");
  for (var _0x208bb2 = 0; _0x208bb2 < _0x39ae1a.length; _0x208bb2++) {
    follow(_0x39ae1a[_0x208bb2], _0x208bb2 + 1);
    console.log("--开始做签到任务--");
    var _0x3b29d1 = await getSignIn(_0x39ae1a[_0x208bb2], _0x208bb2 + 1);
    if (_0x3b29d1.result.state == "ignore") console.log("账号" + (_0x208bb2 + 1) + " -> 今日已签到过！");else {
      if (_0x3b29d1.msg == "请重新登录") console.log("账号" + (_0x208bb2 + 1) + " -> cookie过期");else {
        console.log("账号" + (_0x208bb2 + 1) + " -> 签到成功！");
      }
    }
    console.log("--开始做分享贴子任务--");
    var _0x3b29d1 = await doTask(_0x39ae1a[_0x208bb2], "shareArticle");
    if (_0x3b29d1.msg == "") {
      console.log("ok！");
    } else console.log(_0x3b29d1);
    console.log("--开始做分享游戏详情任务--");
    var _0x3b29d1 = await doTask(_0x39ae1a[_0x208bb2], "shareGameDetail");
    if (_0x3b29d1.msg == "") console.log("ok！");else {
      console.log(_0x3b29d1);
    }
    console.log("--开始做分享游戏评价任务--");
    var _0x3b29d1 = await doTask(_0x39ae1a[_0x208bb2], "shareGameComment");
    _0x3b29d1.msg == "" ? console.log("ok！") : console.log(_0x3b29d1);
    console.log("--开始游戏榜单停留10s任务--");
    var _0x3b29d1 = await doTask(_0x39ae1a[_0x208bb2], "visitGameRank");
    if (_0x3b29d1.msg == "") console.log("ok！");else {
      console.log(_0x3b29d1);
    }
    var _0x17cb77 = await getTaskList(_0x39ae1a[_0x208bb2], _0x208bb2 + 1),
      _0x15beec = _0x17cb77.result.user.username;
    console.log("" + _0x15beec);
    var _0x586535 = _0x17cb77.result.task_list;
    for (var _0x45382f = 0; _0x45382f < _0x586535.length; _0x45382f++) {
      if (_0x586535[_0x45382f].title == "每日任务") {
        {
          console.log("--开始检查每日任务列表--");
          for (var _0x1a7c3d = 0; _0x1a7c3d < _0x586535[_0x45382f].tasks.length; _0x1a7c3d++) {
            var _0x474958 = _0x586535[_0x45382f].tasks[_0x1a7c3d].title,
              _0x10510f = _0x586535[_0x45382f].tasks[_0x1a7c3d].state;
            console.log("任务：" + _0x474958 + " -> " + (_0x10510f == "finish" ? "已完成" : "未完成"));
          }
        }
      } else {
        if (_0x586535[_0x45382f].title == "限时任务") {
          console.log("--开始检查限时任务列表--");
          for (var _0x4639a9 = 0; _0x4639a9 < _0x586535[_0x45382f].tasks.length; _0x4639a9++) {
            var _0x474958 = _0x586535[_0x45382f].tasks[_0x4639a9].title;
            var _0x10510f = _0x586535[_0x45382f].tasks[_0x4639a9].state;
            var _0x467cbf = _0x586535[_0x45382f].tasks[_0x4639a9].task_end_time;
            var _0x1191d6 = formatSecondsTimestamp(_0x467cbf);
            console.log("任务：" + _0x474958 + " -> " + (_0x10510f == "finish" ? "已完成" : "未完成") + " -- 结束时间" + _0x1191d6);
          }
        }
      }
    }
    console.log();
  }
}
main();