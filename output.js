//Fri Nov 22 2024 11:16:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let arr = [{
  tid: "39b923770b2c360e",
  ac_code: "310a479a-1bc9-4110-cb96d0cd",
  user: {
    "自己": ["ojF6x6oQc9AQewree6s663mh3vo4Zw", "ojF6x6oQc9AQewree6s663mh3vo4Zw", "ojF6x6oQc9AQewree6s663mh3vo4Zw"]
  }
}];
const axios = require("axios");
axios.defaults.baseURL = "https://flow.judaapp.com";
axios.defaults.headers.common = {
  Host: "flow.judaapp.com",
  Connection: "keep-alive",
  Accept: "application/json",
  Authorization: "Bearer 12803712|NJbbN6DWZ8KE12ssZRhWjr2wNhjjE74dCQlzW63e",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090a1b) XWEB/9129 Flue",
  "Content-Type": "application/json",
  "Sec-Fetch-Site": "same-origin",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty",
  Referer: "https://flow.judaapp.com/api-user/v1/activityView?aid=d4b733ab-9b0a-4a71-92e6cac1&tid=e6a13cf5eaa496d5",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-CN,zh;q=0.9"
};
(async () => {
  console.log("作者：梁，微信：a13607509646");
  for (let _0x2437e7 of arr) {
    for (let _0x49c21b in _0x2437e7.user) {
      for (let _0x4c668d of _0x2437e7.user[_0x49c21b]) {
        await main(_0x2437e7.ac_code, _0x4c668d, _0x2437e7.tid);
      }
    }
  }
})();
async function main(_0x25e277, _0x33b67e, _0x4bf2fd) {
  let _0x3f9f82 = null;
  _0x3f9f82 = await axios.post("api-user/v1/getToken", {
    wx_openid: _0x33b67e,
    tid: _0x4bf2fd,
    aid: _0x25e277
  });
  axios.defaults.headers.common.Authorization = "Bearer " + _0x3f9f82.data.data.token;
  _0x3f9f82 = await axios.get("api-user/v1/activityDetatil?ac_code=" + _0x25e277 + "&team_code=" + _0x4bf2fd + "&withMaterial=1");
  if (_0x3f9f82.data.data == null) {
    console.log(_0x33b67e, _0x3f9f82.data);
    return;
  }
  let _0x42e11a = _0x3f9f82.data.data.material.material_title;
  let _0x7a0499 = _0x3f9f82.data.data.activity_id;
  console.log(_0x42e11a);
  let _0x40b89e = _0x3f9f82.data.data.materialDetail.questions;
  let _0x418d21 = [];
  for (let _0x235088 in _0x40b89e) {
    let _0x2ceced = _0x40b89e[_0x235088].answer;
    for (let _0x52f875 in _0x2ceced) {
      _0x2ceced[_0x52f875].result == 1 && _0x418d21.push(_0x235088 + "_" + _0x52f875);
    }
  }
  _0x3f9f82 = await axios.post("api-user/v1/activityWatchVideoOver", {
    userActivityId: _0x3f9f82.data.meta.joinInfo.userActivityId
  });
  console.log(_0x3f9f82.data);
  _0x3f9f82 = await axios.post("api-user/v1/receiveAwardAndWatchOver", {
    activity_id: _0x7a0499,
    answers: _0x418d21
  });
  _0x3f9f82.data.status_code == 417 ? console.log(_0x3f9f82.data.data.wx_nickname, _0x3f9f82.data.message) : console.log(_0x3f9f82.data);
}