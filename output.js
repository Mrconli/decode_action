//Tue Oct 22 2024 14:39:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const variable = "soy_fysp_data";
try {
  CryptoJs = $.isNode() ? require("crypto-js") : "";
} catch (_0x5456f1) {
  throw new Error("\n找不到依赖 crypto-js ,请自行安装\n");
}
try {
  axios = $.isNode() ? require("axios") : "";
} catch (_0x1f48ea) {
  throw new Error("\n找不到依赖 axios ,请自行安装\n");
}
try {
  fs = $.isNode() ? require("fs") : "";
} catch (_0x1501f6) {
  throw new Error("\n找不到依赖 fs ,请自行安装\n");
}
try {
  os = $.isNode() ? require("os") : "";
} catch (_0x151596) {
  throw new Error("\n找不到依赖 OS ,请自行安装\n");
}
subTitle = "";
async function main(_0x43b91c) {
  await _0x43b91c.ids();
  await _0x43b91c.account();
}
class UserInfo {
  constructor(_0x44fae3, _0x3487e1) {
    try {
      this.num = _0x44fae3 + 1;
      this.token = _0x3487e1.split("&")[1];
      this.uid = _0x3487e1.split("&")[0];
    } catch (_0xfc5583) {
      console.log(_0xfc5583);
    }
  }
  async ["get_draw"]() {
    await Sleep_time(ys_s, ys_e);
    this.time = new Date().getTime();
    this.url = "task_api/task/draw_gift";
    this.body = "act_id=act_e80ba223&task_id=" + this.task_id + "&sub_task_id=" + this.sub_task + "&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&p34=navigationbar_is_min&usr=" + this.uid + "&zyeid=" + this.token;
    let _0x360a4b = this.req_data(1);
    return new Promise(_0x505187 => {
      $.post(_0x360a4b, async (_0x4f8c04, _0x117c2f, _0x117e72) => {
        try {
          if (_0x4f8c04) console.log("账号 " + this.num + " " + this.task_name + ":返回 " + _0x4f8c04);else {
            var _0x9e669d = JSON.parse(_0x117e72);
            _0x9e669d.code == 0 ? console.log("账号 " + this.num + " " + this.task_name + ":获得" + _0x9e669d.body.gift_info[0].amount + "金币") : console.log("账号 " + this.num + " " + this.task_name + ":" + _0x9e669d.msg);
          }
        } catch (_0x249838) {} finally {
          _0x505187();
        }
      });
    });
  }
  async ["report"]() {
    await Sleep_time(ys_s, ys_e);
    this.time = new Date().getTime();
    this.url = "reading/duration/report";
    this.body = "app_id=zy3d1ef1&date_info=%5B%7B%22book_id%22%3A%22" + this.book_id + "%22%2C%22date%22%3A%22" + Format_time() + "%22%2C%22res_type%22%3A%22watch%22%2C%22second%22%3A" + read_t + "%7D%5D&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=navigationbar_is_min&timestamp=" + (this.time - 5) + "&user_name=" + this.uid + "&usr=" + this.uid + "&zyeid=" + this.token;
    let _0x136394 = this.req_data(1);
    return new Promise(_0xf156c5 => {
      $.post(_0x136394, async (_0x9680eb, _0x5bc955, _0x272dc1) => {
        try {
          if (_0x9680eb) console.log("账号 " + this.num + " 看视频:返回 " + _0x9680eb);else {
            var _0xd84400 = JSON.parse(_0x272dc1);
            _0xd84400.code == 0 ? console.log("账号 " + this.num + " 看视频:成功观看<<" + this.book_name + ">>视频" + read_t + "秒") : console.log("账号 " + this.num + " 看视频:" + _0xd84400.msg);
          }
        } catch (_0x2ffea6) {} finally {
          _0xf156c5();
        }
      });
    });
  }
  async ["withdraw"]() {
    await Sleep_time(ys_s, ys_e);
    this.time = new Date().getTime();
    this.url = "tv_welfare/gold/withdraw/exec";
    this.body = "type=alipay&amount=0.3&sub_id=265&gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=" + this.uid + "&zyeid=" + this.token;
    let _0x19103c = this.req_data(1);
    return new Promise(_0x5f4ded => {
      $.post(_0x19103c, async (_0x6f5d96, _0x1d28f5, _0x5ef983) => {
        try {
          console.log(_0x5ef983);
          if (_0x6f5d96) console.log("账号 " + this.num + " 提现:返回 " + _0x6f5d96);else {
            var _0x46e778 = JSON.parse(_0x5ef983);
            if (_0x46e778.code == 0) {} else console.log("账号 " + this.num + " 提现:" + _0x46e778.msg);
          }
        } catch (_0x12aaf9) {} finally {
          _0x5f4ded();
        }
      });
    });
  }
  async ["ids"]() {
    await Sleep_time(ys_s, ys_e);
    this.time = new Date().getTime();
    this.url = "task_api/task/list/by_act_ids";
    this.body = "?act_ids=act_a0a1f9d9%2Cact_e80ba223&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=" + this.uid + "&zyeid=" + this.token;
    this.sign_url = "&act_ids=act_a0a1f9d9,act_e80ba223&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=" + this.uid + "&zyeid=" + this.token + "&/task_api/task/list/by_act_ids&" + this.time;
    let _0x4d5e8a = this.req_data(0);
    return new Promise(_0x1044ff => {
      $.get(_0x4d5e8a, async (_0x4e0b82, _0x48a50f, _0x1faf43) => {
        try {
          if (_0x4e0b82) console.log("账号 " + this.num + " 签到状态:返回 " + _0x4e0b82);else {
            var _0x37323e = JSON.parse(_0x1faf43);
            if (_0x37323e.code == 0) for (let _0x5bd21b in _0x37323e.body.act_e80ba223.task_list) {
              if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id == "task_a2cdf5f5") {
                if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].reward_status == "un_reward") {
                  this.task_name = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].title;
                  this.task_id = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id;
                  for (let _0x5cb218 in _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list) {
                    if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x5cb218].reward_status == "un_reward") {
                      this.sub_task = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x5cb218].id;
                      await this.get_draw();
                      break;
                    }
                  }
                }
              }
              if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id == "task_acab7244") {
                if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].reward_status == "un_reward") {
                  this.task_name = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].title;
                  this.task_id = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id;
                  for (let _0x411081 in _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list) {
                    if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x411081].reward_status == "un_reward") {
                      this.sub_task = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x411081].id;
                      this.book_id = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x411081].tv_series.id;
                      this.book_name = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x411081].tv_series.name;
                      await this.report();
                      break;
                    }
                  }
                }
              }
              if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id == "task_83421a92" || _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id == "task_089ca861" || _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id == "task_0288417f" || _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id == "task_016a2b13") {
                if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].reward_status == "can_not_reward") {}
              }
              if (_0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id == "task_122addf6") {
                _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].reward_status == "un_reward" && (this.sub_task = "", this.book_name = "中国式离婚", this.book_id = "527", await this.report());
                for (let _0x2bba4f in _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list) {
                  this.task_id = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id;
                  _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x2bba4f].reward_status == "un_reward" && (this.task_name = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x2bba4f].gift_info[0].name, this.sub_task = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].sub_task_list[_0x2bba4f].id, await this.get_draw());
                }
              }
              _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id == "task_d8ad3326" && (this.task_name = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].title, _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].reward_last_draw_time < this.time && (this.sub_task = "", this.task_id = _0x37323e.body.act_e80ba223.task_list[_0x5bd21b].id, await this.get_draw()));
            } else console.log("账号 " + this.num + " 任务状态:" + _0x37323e.msg);
          }
        } catch (_0x2571d0) {} finally {
          _0x1044ff();
        }
      });
    });
  }
  async ["account"]() {
    await Sleep_time(ys_s, ys_e);
    this.time = new Date().getTime();
    this.url = "tv_welfare/gold/user/gold_account";
    this.body = "?gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=" + this.uid + "&zyeid=" + this.token;
    this.sign_url = "&gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=" + this.uid + "&zyeid=" + this.token + "&/tv_welfare/gold/user/gold_account&" + this.time;
    let _0x1e0f7f = this.req_data(0);
    return new Promise(_0x559e7d => {
      $.get(_0x1e0f7f, async (_0x254030, _0x22c2e8, _0x3cf15a) => {
        try {
          if (_0x254030) console.log("账号 " + this.num + " 用户状态:返回 " + _0x254030);else {
            var _0x461e38 = JSON.parse(_0x3cf15a);
            if (_0x461e38.code == 0) console.log("账号 " + this.num + " 用户状态:当前金币:" + _0x461e38.body.total_gold_num + "||余额:" + _0x461e38.body.total_rmb), _0x461e38.body.total_rmb >= 1 && (await this.exec());else {
              console.log("账号 " + this.num + " 用户状态:" + _0x461e38.msg);
            }
          }
        } catch (_0x5b42b9) {} finally {
          _0x559e7d();
        }
      });
    });
  }
  async ["exec"]() {
    await Sleep_time(ys_s, ys_e);
    this.time = new Date().getTime();
    this.url = "tv_welfare/gold/withdraw/exec";
    this.body = "?type=alipay&amount=1&sub_id=266&gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=" + this.uid + "&zyeid=" + this.token;
    this.sign_url = "&type=alipay&amount=1&sub_id=266&gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=" + this.uid + "&zyeid=" + this.token + "&/tv_welfare/gold/user/gold_account&" + this.time;
    let _0x20fa1d = this.req_data(0);
    return new Promise(_0x330c81 => {
      $.get(_0x20fa1d, async (_0x4f4e3c, _0x3e138f, _0x348271) => {
        try {
          if (_0x4f4e3c) {
            console.log("账号 " + this.num + " 提现:返回 " + _0x4f4e3c);
          } else {
            var _0x2f3c62 = JSON.parse(_0x348271);
            _0x2f3c62.code == 0 ? console.log("账号 " + this.num + " 提现:成功") : console.log("账号 " + this.num + " 提现:" + _0x2f3c62.msg);
          }
        } catch (_0x139803) {} finally {
          _0x330c81();
        }
      });
    });
  }
  ["req_data"](_0x43cc21) {
    if (_0x43cc21 == 1) {
      return {
        "url": "https://tv.palmestore.com/" + this.url,
        "headers": {
          "Host": "tv.palmestore.com",
          "Connection": "keep-alive",
          "Content-Length": this.body.length,
          "Pragma": "no-cache",
          "Cache-Control": "no-cache",
          "Accept": "application/json, text/plain, */*",
          "X-SIG-Timestamp": this.time,
          "X-AppId": "zy3d1ef1",
          "X-SIG-Sign": "" + this.RSA_sha256(this.body + "&&/" + this.url + "&" + this.time),
          "X-SIG-Alg": "RSA-SHA256",
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 23049RAD8C Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
          "Content-Type": "application/x-www-form-urlencoded",
          "Origin": "https://fe.zhangyue.com",
          "X-Requested-With": "com.app.fengyiFree",
          "Sec-Fetch-Site": "cross-site",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://fe.zhangyue.com/"
        },
        "body": this.body
      };
    } else return {
      "url": "https://tv.palmestore.com/" + this.url + this.body,
      "headers": {
        "Host": "tv.palmestore.com",
        "Connection": "keep-alive",
        "Content-Length": "0",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "Accept": "application/json, text/plain, */*",
        "X-SIG-Timestamp": this.time,
        "X-AppId": "zy3d1ef1",
        "X-SIG-Sign": this.RSA_sha256(this.sign_url),
        "X-SIG-Alg": "RSA-SHA256",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; 23049RAD8C Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
        "Origin": "https://fe.zhangyue.com",
        "X-Requested-With": "com.app.fengyiFree",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty"
      }
    };
  }
  ["RSA_sha256"](_0x169427) {
    let _0x39b3c2 = "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZo0B6v3MzB5EIQNXdKui3nQqZg39mGHFHk96/iRyEydN6AUJBHhS3UQ1H7obpJOdToo4SyRf9dANYjh30ZNnJ7tJ3Pe+iWBbCXgCTxQhcbjQHCKvC4EkbaooRZqaF9Ki+jHI/xEbKHzHMaW0FNoJhHHp7LV2UrLHvYYS7947OUpIMhv0npYim4ET1nKbrKdeggkszq/m2M9B349Pf3ao07XyPypjdUaJtOFtI8pJJk1qwJKeYQC2fAa3y8HzL6QRgXeG12ngw8Si5V3sKsAQLjFaGC5jBdlertCxbYlAtJBfIV0ZdUWjrhPh7c+TQodF+3xEwnjwLip45HoK8FRDtAgMBAAECggEAKM2ZpinEsFmH0HNPZVLJJLuVpChqNzr36gKILYLITQEF3AbmZAz+t0vD4KuQsZ9Qm3aLimwXSlZ41h528T4DMv/Kh76d8eLwCWrUUuAK7EFhEbyHb1bbff9geVi0ecLf7DGqrdffqb9ld7yASwzoLsrHD9b2h4xFI+s1loQYSwgJhR7lljt+/ESNylUVpKDuCnOsMcjBquEScBHo5m4PhZE+BtpiRdoU+6ig9OgrnQoMO8ioR0p4J5bjlLgt9dat/bn7SOk3iQD/dACG0GnZOZJUtJ97RkYjAi/convpl60oibm2XKV/WqGZYlvCO2PVdi28iyUcN+LM1ie23KfTBQKBgQDtsKc36mKpS5CD1kDdnth+ye1dLZZh9sJtCKEpVFoseOgpbG8mKhrxpeOaDlp8RV88plMclvIQEesJlaAd1nn5JfcXNhB676t+ERfexwRebDfzl91wmySAs8Af0wnX9oRnwyb28xz2kvGQ8H+102HeCQ4b+I6kONkQFQzhhIwaiwKBgQDqZyhy+tu2tmQb5zCd3PFN7vxMuvRJ+m6sWrBiUt0v3GHskLYz61CiMxO8l6QDfV3IHkKNBvTpUQUobNH4szTq7OVSaIbUJJI50JCO7mEAqab4gYrlS5BsGVVvgzrHL8uKdQajagqGzaYX2YUO28mRyQxNRTG2mLA/mAEbcsaJZwKBgHw1/Kyzx6tA2dyLcopeIDThwTEYSaYYFbJ0+ANpGVZ0OJ6tE8iV6E6vqikvpwmaFxLSuEwQdZ8APhtcHbh6BHO261Et557W8H+I3ziEODw/wV2C1y2pZYH8bUI0PsilArxWt14F3fTdBXAAvjx+on4trTngwmn/ay+EUJ7pbW3RAoGBANH5dKeDBlynCAhi0g8nw1Uvtvy5IGpAlvF4D7cUSaU9As9aVo0txz51CMIRCNBDdkX0rWMNj0iN1lP/Hxxs1AN6EHcAwX65/+8gYM5YxbZFQxgrWxPJ2+apzvmkkXuq2eb+q+Ko9CMLhzSoGuRTiD463fU9/al3H7Ln5F4FM8oTAoGAcxDGaSUJ9Y+j/k+O3464gzbQ0I6R8TcD+efDK0rm7oDKssRsYasMEUoh/+MgrPlCTsgcuIaiD7EzNHozYioEOb78iBqhzNQN3BYtNvYdKhFS7hmNVuWlIIvPGZtrkQYRZG45W5weydCdVX2ZejUuqBObiFjIyhHW8uqCUJsrp+U=-----END PRIVATE KEY-----",
      {
        KJUR: _0x31d5bc,
        hextob64: _0xa4dc1e
      } = require("jsrsasign"),
      _0x2063e4 = new _0x31d5bc.crypto.Signature({
        "alg": "SHA256withRSA",
        "prvkeypem": _0x39b3c2
      });
    _0x2063e4.updateString(_0x169427);
    var _0x1b3945 = _0x2063e4.sign();
    return _0xa4dc1e(_0x1b3945);
  }
}
!(async () => {
  console.log("\n【soy脚本文件免责声明】：\n【此脚本文件仅用于测试和学习，使用测试脚本行为均有封号风险。不能保证其合法性、准确性、完整性和有效性，作者本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。】\n【本脚本文件，只有在作者TG频道、TG群以及仓库分享，从未在其他地方分享，包括但不限于任何公众号、论坛、群体以及任何形式的转载、发布，任何人请勿将脚本文件用于包括但不限于商业、非法目的甚至解密等行为，否则后果自负】");
  let _0x3e8f97 = await getUsers(variable, async (_0x2b5827, _0x11608f) => {
    let _0x24fc15 = new UserInfo(_0x2b5827, _0x11608f);
    return _0x24fc15;
  });
  if (Concurrency) list = [], _0x3e8f97.forEach(async _0xa1c4f => {
    list.push(main(_0xa1c4f));
  }), await Promise.all(list);else for (let _0x407040 in _0x3e8f97) {
    await main(_0x3e8f97[_0x407040]);
  }
  if (get_msg == 1) {
    if (notify) {
      subTitle && (await notify.sendNotify($.name, subTitle));
    }
  }
})().catch(_0x206504 => console.log(_0x206504)).finally(() => $.done());
async function getUsers(_0x910f79, _0x1bde60) {
  let _0x5acb31 = [],
    _0x1e6dbe = process.env[_0x910f79],
    _0x47a1af = ["\n", "#", "@"];
  if (_0x1e6dbe) {
    let _0x3b9052 = _0x47a1af[0];
    for (let _0x4f07fe of _0x47a1af) if (_0x1e6dbe.indexOf(_0x4f07fe) > -1) {
      _0x3b9052 = _0x4f07fe;
      break;
    }
    let _0x5a4b6c = _0x1e6dbe.split(_0x3b9052);
    for (let _0x4ed707 = 0; _0x4ed707 < _0x5a4b6c.length; _0x4ed707++) {
      const _0x50f27e = _0x5a4b6c[_0x4ed707];
      _0x50f27e && _0x5acb31.push(await _0x1bde60(_0x4ed707, _0x50f27e));
    }
    user_num = _0x5acb31.length;
  } else console.log("\n未找到CK");
  return console.log("\n=== 脚本执行 - 北京时间：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " ==="), console.log("\n===【共 " + user_num + " 个账号】==="), !0, _0x5acb31;
}
function getnum(_0x968e29) {
  let _0x4ae11e = "123456789",
    _0x50bc05 = "";
  for (let _0x3d4ea2 = 0; _0x3d4ea2 < _0x968e29; _0x3d4ea2++) {
    let _0xb600ad = Math.ceil(Math.random() * _0x4ae11e.length - 1);
    _0x50bc05 += _0x4ae11e[_0xb600ad];
  }
  return _0x50bc05;
}
function getstr(_0x5827b4) {
  let _0x2f178c = "qwertyuiopasdfghjklzxcvb1234567890",
    _0x31450f = "";
  for (let _0x580928 = 0; _0x580928 < _0x5827b4; _0x580928++) {
    let _0x3634fd = Math.ceil(Math.random() * _0x2f178c.length - 1);
    _0x31450f += _0x2f178c[_0x3634fd];
  }
  return _0x31450f;
}
async function Sleep_time(_0x4d4224, _0x5eeecd) {
  await wait(Math.floor(Math.random() * (_0x5eeecd * 1000 - _0x4d4224 * 1000 + 1)) + _0x4d4224 * 1000);
}
async function wait(_0x4d751a) {
  return new Promise(_0x71e0ef => setTimeout(_0x71e0ef, _0x4d751a));
}
function Format_time() {
  var _0x4cde2e = new Date(new Date().getTime()),
    _0x4ef67b = _0x4cde2e.getFullYear() + "-",
    _0x205102 = (_0x4cde2e.getMonth() + 1 < 10 ? "0" + (_0x4cde2e.getMonth() + 1) : _0x4cde2e.getMonth() + 1) + "-",
    _0x1bdc59 = _0x4cde2e.getDate() < 10 ? "0" + _0x4cde2e.getDate() : _0x4cde2e.getDate();
  let _0x59c019 = _0x4ef67b + _0x205102 + _0x1bdc59;
  return _0x59c019;
}
function Format_time1() {
  var _0x34dd9f = new Date(new Date().getTime()),
    _0x30f2b8 = _0x34dd9f.getFullYear() + "-",
    _0xe4016d = (_0x34dd9f.getMonth() + 1 < 10 ? "0" + (_0x34dd9f.getMonth() + 1) : _0x34dd9f.getMonth() + 1) + "-",
    _0x100058 = _0x34dd9f.getDate();
  let _0x4aa486 = _0x30f2b8 + _0xe4016d + _0x100058;
  return _0x4aa486;
}
function Env(t, e) {
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
      this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
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
          a = {
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
        this.post(a, (t, e, i) => s(i));
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
            this.ckjar.setCookieSync(s, null);
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
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
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
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============📣系统通知📣=============="];
      h.push(e);
      s && h.push(s);
      i && h.push(i);
      console.log(h.join("\n"));
      this.logs = this.logs.concat(h);
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}