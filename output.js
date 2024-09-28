//Sat Sep 28 2024 04:57:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const middleware = require("./middleware.js"),
  axios = require("axios"),
  FormData = require("form-data"),
  path = require("path"),
  fs = require("fs"),
  senderID = middleware.getSenderID(),
  s = new middleware.Sender(senderID);
class AutAPI {
  constructor(_0x688e6c, _0x23db08, _0x84bae5) {
    const _0x13eb6c = {
      "Accept": "application/json, text/plain, */*",
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      "Accept-Encoding": "gzip, compress, deflate, br"
    };
    this.get_instructions = () => {
      return _0x4619f6({
        "url": this.host + "/open/instructions",
        "method": "get"
      });
    };
    this.get_gallery = () => {
      return _0x4619f6({
        "url": this.host + "/open/gallery",
        "method": "get"
      });
    };
    this.post_gallery = _0x4584d9 => {
      var _0x4584d9 = new FormData();
      return _0x4584d9.append("imgfile", _0x4584d9), _0x4619f6({
        "url": this.host + "/open/gallery",
        "method": "post",
        "data": _0x4584d9
      });
    };
    this.get_log = _0x1269d3 => {
      const _0x16c0b9 = /(?<=\/autMan\/task\/logs\/).*/.exec(_0x1269d3);
      if (Array.isArray(_0x16c0b9)) {
        const _0x395751 = _0x16c0b9[0].split("/"),
          _0x2ef9e9 = encodeURIComponent(_0x395751.pop()),
          _0x5348f5 = encodeURIComponent(_0x395751.join("/"));
        return _0x4619f6({
          "url": this.host + "/open/logs/" + _0x2ef9e9 + "?path=" + _0x5348f5,
          "method": "get"
        });
      } else return rebug("【AutAPI】 get_log: 路径错误：" + _0x1269d3, false);
    };
    this.get_logs_memu = () => {
      return _0x4619f6({
        "url": this.host + "/open/logs/memu",
        "method": "get"
      });
    };
    this.require = async (..._0x3fb25d) => {
      const _0x1be2a2 = new Array();
      for (let _0x413760 of _0x3fb25d) {
        let _0x1cdc7c;
        try {
          _0x1cdc7c = require(_0x413760);
          rebug("【AutAPI/require】 载入模块: " + _0x413760, true);
        } catch (_0x368722) {
          _0x1cdc7c = null;
          rebug("【AutAPI/require】 载入模块失败，尝试安装: " + _0x413760);
          if (_0x368722.code == "MODULE_NOT_FOUND") {
            await s.reply("尝试安装依赖: " + _0x413760);
            let _0x15d2dd = await this.post_dependencies([{
              "name": _0x413760,
              "type": "nodejs"
            }]);
            if (_0x15d2dd.code == 200) {
              await s.reply("开始安装");
              for (let _0x19e4a3 = 1; _0x19e4a3 <= 3; _0x19e4a3++) {
                console.log(await sleep(5));
                await s.reply("依赖安装中 " + ".".repeat(_0x19e4a3));
                _0x15d2dd = await this.get_dependencies(_0x413760);
                rebug("【AutAPI/require】查询依赖安装结果: " + JSON.stringify(_0x15d2dd));
                if (_0x15d2dd.code == 200) {
                  if (_0x15d2dd.data[0].status == 1) {
                    await s.reply("依赖安装成功: " + _0x413760);
                    break;
                  }
                } else {
                  await s.reply("依赖状态检测失败, 跳过");
                  break;
                }
              }
              if (_0x15d2dd.data[0].status != 1) await s.reply("依赖安装失败: " + _0x413760);
            } else await s.reply("依赖安装失败，跳过: " + _0x413760);
          } else rebug(JSON.stringify(_0x368722)), await s.reply("加载依赖失败，未知错误");
        }
        _0x1be2a2.push(_0x1cdc7c);
      }
      return _0x1be2a2;
    };
    this.post_dependencies = _0x1a8e02 => {
      return _0x4619f6({
        "url": this.host + "/open/dependencies",
        "method": "post",
        "data": _0x1a8e02
      });
    };
    this.get_dependencies = (_0x391f35 = "") => {
      return _0x4619f6({
        "url": this.host + "/open/dependencies?searchValue=" + _0x391f35,
        "method": "get"
      });
    };
    this.get_dependencies_log = _0x408c27 => {
      return _0x4619f6({
        "url": this.host + "/open/dependencies/" + _0x408c27 + "/log",
        "method": "get"
      });
    };
    this.get_users = () => {
      return _0x4619f6({
        "url": this.host + "/open/users?searchValue=",
        "method": "get"
      });
    };
    this.put_users = _0x1eeef2 => {
      return s.reply(JSON.stringify(_0x1eeef2)), _0x4619f6({
        "url": this.host + "/open/users",
        "method": "PUT",
        "data": JSON.stringify(_0x1eeef2)
      });
    };
    this.get_nameids = (_0x96fa37 = "", _0x11eee5 = "", _0x44c0a7 = "") => {
      return _0x4619f6({
        "url": this.host + "/open/nameids?searchValue=" + _0x96fa37 + "&page=" + _0x11eee5 + "&pageSize=" + _0x44c0a7,
        "method": "get"
      });
    };
    this.get_varckmaps = (_0x40d185 = null) => {
      return _0x4619f6({
        "url": this.host + "/open/varckmaps" + (_0x40d185 ? "/" + _0x40d185 : ""),
        "method": "get"
      });
    };
    this.post_varckmaps = _0x1199ac => {
      return _0x4619f6({
        "url": this.host + "/open/varckmaps",
        "method": "post",
        "data": _0x1199ac
      });
    };
    this.put_varckmaps = _0x509729 => {
      return _0x4619f6({
        "url": this.host + "/open/varckmaps",
        "method": "put",
        "data": _0x509729
      });
    };
    this.put_varckmaps_action = _0x52fa21 => {
      return _0x4619f6({
        "url": this.host + "/open/varckmaps/" + _0x52fa21,
        "method": "put"
      });
    };
    this.delete_varckmaps = _0x15880d => {
      return _0x4619f6({
        "url": this.host + "/open/varckmaps",
        "method": "delete",
        "data": _0x15880d
      });
    };
    this.get_croncmds = (_0x594fc7 = "") => {
      return _0x4619f6({
        "url": this.host + "/open/croncmds?searchValue=" + _0x594fc7,
        "method": "get"
      });
    };
    this.get_croncmd_by_id = _0x3e1bb1 => {
      return _0x4619f6({
        "url": this.host + "/open/croncmds/" + _0x3e1bb1,
        "method": "get"
      });
    };
    this.put_croncmds = _0x2d5272 => {
      const {
        id: _0x34d034,
        disable: _0x110c6f,
        cron: _0x1b5663,
        cmd: _0x559966,
        to_self: _0x4a5165,
        disguise_imtype: _0x229963,
        disguise_group: _0x18f0cc,
        disguise_user: _0x818e35,
        to_others: _0x5e2961,
        memo: _0x5a2452
      } = _0x2d5272;
      return _0x4619f6({
        "url": this.host + "/open/croncmds",
        "method": "PUT",
        "data": {
          "id": _0x34d034,
          "disable": _0x110c6f,
          "cron": _0x1b5663,
          "cmd": _0x559966,
          "to_self": _0x4a5165,
          "disguise_imtype": _0x229963,
          "disguise_group": _0x18f0cc,
          "disguise_user": _0x818e35,
          "to_others": _0x5e2961,
          "memo": _0x5a2452
        }
      });
    };
    this.post_croncmds = (_0x49c2cc = {
      "cron": cron,
      "cmd": cmd,
      "to_self": to_self,
      "to_others": to_others,
      "memo": memo
    }) => {
      return _0x4619f6({
        "url": this.host + "/open/croncmds",
        "method": "POST",
        "data": _0x49c2cc
      });
    };
    this.del_croncmds = (_0x4c85be = []) => {
      return _0x4619f6({
        "url": this.host + "/open/croncmds",
        "method": "DELETE",
        "data": _0x4c85be
      });
    };
    this.post_encrypt = _0x2fad8d => {
      return _0x4619f6({
        "url": this.host + "/open/js/encrypt",
        "method": "post",
        "data": JSON.stringify(_0x2fad8d)
      });
    };
    function _0x3f1951(_0x51501a, _0x853ecd, _0x2ad462) {
      return _0x4619f6({
        "url": _0x51501a + "/open/auth/token?client_id=" + _0x853ecd + "&client_secret=" + _0x2ad462,
        "method": "get"
      });
    }
    function _0x4619f6(_0x10ce30) {
      return axios({
        ...{
          "headers": _0x13eb6c,
          "redirect": "follow",
          "responseType": "json"
        },
        ..._0x10ce30
      }).then(({
        config: _0x1a9497,
        data: {
          message: _0x1357b8,
          code: _0x337f1e,
          data: _0xeb4d28
        }
      }) => {
        return rebug("【AutAPI/" + _0x1a9497.method + "/" + new URL(_0x1a9497.url).pathname.split("/").pop() + "】" + _0x337f1e + " - \"" + (_0x1357b8 ? _0x1357b8 : "") + "\"", _0x337f1e == 200, _0x337f1e, _0xeb4d28);
      }).catch(_0x341c75 => {
        return rebug("【AutAPI/" + _0x341c75.config.method + "/" + new URL(_0x341c75.config.url).pathname.split("/").pop() + "】[" + (_0x341c75.name + ": " || "") + "]" + (_0x341c75.status || _0x341c75.code) + " - " + (_0x341c75.statusText || _0x341c75.message || _0x341c75.msg || ""), false, _0x341c75.status, _0x341c75.stack || _0x341c75.data || null);
      });
    }
    return new Promise(async (_0x423c57, _0x2ca9e9) => {
      this.host = _0x688e6c || (await middleware.bucketGet("jusapi", "host"));
      this.client_id = _0x23db08 || (await middleware.bucketGet("jusapi", "client_id"));
      this.client_secret = _0x84bae5 || (await middleware.bucketGet("jusapi", "client_secret"));
      (!this.host || !this.client_id || !this.client_secret) && (console.error("【jusapi】请设置配参"), process.exit());
      await _0x3f1951(this.host, this.client_id, this.client_secret).then(_0x2af576 => {
        if (_0x2af576.success) {
          _0x13eb6c.Authorization = (_0x2af576.data.token_type || "") + " " + (_0x2af576.data.token || "");
        } else s.reply("autapi 连接失败，请检查 jusapi.js(nodejs) 配参"), _0x13eb6c.Authorization = undefined;
        rebug("【AutAPI】 " + this.host + " - " + _0x13eb6c.Authorization, true);
        _0x423c57(this);
      }).catch(_0x3d80a1 => console.err(_0x3d80a1));
    });
  }
}
class QingLong {
  constructor(..._0x19e58e) {
    if (!_0x19e58e[0]) return rebug("青龙链接失败，请检查青龙配置: " + _0x19e58e[0], false);else {
      if (_0x19e58e.length == 3) var [_0x37ff87, _0x37d0d1, _0x519b9a] = _0x19e58e;else {
        if (_0x19e58e.length == 1 && ["host", "client_id", "client_secret"].every(_0x34ab0a => _0x34ab0a in _0x19e58e[0])) var {
          host: _0x37ff87,
          client_id: _0x37d0d1,
          client_secret: _0x519b9a
        } = _0x19e58e[0];else {
          console.error("【QingLong】输入参数有误:", JSON.stringify(_0x19e58e));
          throw new Error("青龙链接失败，详见实时日志");
        }
      }
    }
    if (!(_0x37ff87 && _0x37d0d1 && _0x519b9a)) {
      console.error("【QingLong】输入参数有误:", JSON.stringify(_0x19e58e));
      throw new Error("青龙链接失败，详见实时日志");
    }
    const _0x59c8b8 = new Object({
      "Content-Type": "application/json;charset=UTF-8"
    });
    this.getEnvs = function (_0xa4ddcc = "") {
      return _0x3c06f7({
        "url": _0x37ff87 + "/open/envs?searchValue=" + encodeURIComponent(_0xa4ddcc) + "&t=" + Date.now()
      });
    };
    this.createEnvs = function (..._0x54cf34) {
      let _0x51c972;
      if (_0x54cf34.length == 3 && _0x54cf34.every(_0x23aa6e => typeof _0x23aa6e == "string" || typeof _0x23aa6e == "number")) _0x51c972 = [{
        "name": _0x54cf34[0],
        "value": _0x54cf34[1],
        "remarks": _0x54cf34[2]
      }];else {
        if (_0x54cf34.every(_0x25e7ed => Array.isArray(_0x25e7ed) && _0x25e7ed.every(_0x374a15 => Object.keys(_0x374a15).every(_0x2ed4d7 => ["name", "value", "remarks"].includes(_0x2ed4d7))))) _0x51c972 = _0x54cf34.flat();else {
          if (_0x54cf34.every(_0x2b6e98 => typeof _0x2b6e98 == "object" && Object.keys(_0x2b6e98).every(_0x12f21b => ["name", "value", "remarks"].includes(_0x12f21b)))) _0x51c972 = _0x54cf34;else return rebug("【QingLong/createEnvs】入参有误: " + JSON.stringify(_0x54cf34));
        }
      }
      return _0x3c06f7({
        "url": _0x37ff87 + "/open/envs?t=" + Date.now(),
        "method": "post",
        "data": _0x51c972
      });
    };
    this.putEnv = function (..._0x3c1e75) {
      let _0x2261f1;
      if (_0x3c1e75.length == 4 && _0x3c1e75.every(_0x49cbbb => typeof _0x49cbbb == "string" || typeof _0x49cbbb == "number")) _0x2261f1 = {
        "id": _0x3c1e75[0],
        "name": _0x3c1e75[1],
        "value": _0x3c1e75[2],
        "remarks": _0x3c1e75[3]
      };else {
        if (_0x3c1e75.length == 1 && ["id", "name", "value", "remarks"].every(_0x20531e => Object.keys(_0x3c1e75[0]).includes(_0x20531e))) _0x2261f1 = {
          "id": _0x3c1e75[0].id,
          "name": _0x3c1e75[0].name,
          "value": _0x3c1e75[0].value,
          "remarks": _0x3c1e75[0].remarks
        };else return rebug("【QingLong/putEnv】入参有误: " + JSON.stringify(_0x3c1e75));
      }
      return _0x3c06f7({
        "url": _0x37ff87 + "/open/envs?t=" + Date.now(),
        "method": "put",
        "data": _0x2261f1
      });
    };
    this.delEnvs = function (..._0x1450f3) {
      let _0x2d069c;
      if (_0x1450f3.every(_0x3e89da => typeof _0x3e89da == "number" || typeof _0x3e89da == "string" && _0x3e89da + 1)) _0x2d069c = _0x1450f3;else {
        if (_0x1450f3.length == 1 && typeof _0x1450f3[0] == "string" && /^\d+(,\d+)*$/.test(_0x1450f3[0])) _0x2d069c = _0x1450f3[0].split(",");else {
          if (_0x1450f3.length == 1 && Array.isArray(_0x1450f3[0]) && _0x1450f3[0].every(_0x5b525e => typeof _0x5b525e == "number" || typeof +_0x5b525e == "number")) _0x2d069c = _0x1450f3[0];else return rebug("【QingLong/delEnvs】入参有误: " + JSON.stringify(_0x1450f3));
        }
      }
      return _0x3c06f7({
        "url": _0x37ff87 + "/open/envs?t=" + Date.now(),
        "method": "delete",
        "data": JSON.stringify(_0x2d069c)
      });
    };
    function _0x198c55(_0x35eb3e, _0x4dc6e1, _0x89558e) {
      return _0x3c06f7({
        "url": _0x35eb3e + "/open/auth/token?client_id=" + _0x4dc6e1 + "&client_secret=" + _0x89558e
      });
    }
    function _0x12ef09() {
      return _0x3c06f7({
        "url": _0x37ff87 + "/open/system"
      });
    }
    function _0x3c06f7(_0x5cd796) {
      return _0x5cd796.headers = {
        ..._0x59c8b8,
        ..._0x5cd796.headers
      }, axios({
        ...{
          "method": "get",
          "timeout": 3000
        },
        ..._0x5cd796
      }).then(({
        status: _0x4e8d1a,
        statusText: _0x338139,
        headers: _0x57dd35,
        config: _0x16b550,
        request: _0x40af2f,
        data: _0x5c4952
      }) => rebug("【QingLong/" + _0x16b550.method + "/" + new URL(_0x16b550.url).pathname.split("/").pop() + "】" + (_0x5c4952?.["code"] || _0x4e8d1a) + " - " + _0x338139, true, _0x4e8d1a, _0x5c4952?.["data"] || _0x5c4952)).catch(({
        message: _0x44a804,
        name: _0x54ef4f,
        code: _0x3c1b71,
        config: _0xe91845,
        request: _0x1ea19b,
        response: _0x30033a
      }) => rebug("【QingLong/" + _0xe91845.method + "/" + new URL(_0xe91845.url).pathname.split("/").pop() + "】[" + _0x54ef4f + "]" + (_0x30033a?.["data"]?.["code"] || _0x30033a?.["status"] || _0x3c1b71) + " - " + (_0x30033a?.["data"]?.["message"] || _0x30033a?.["statusText"] || _0x44a804), false, _0x30033a?.["data"]?.["code"] || _0x30033a?.["status"] || _0x3c1b71, _0x30033a?.["data"]));
    }
    return new Promise(async (_0xb76e13, _0x5cd012) => {
      rebug("【QingLong】连接青龙：" + _0x37ff87, 1);
      await _0x198c55(_0x37ff87, _0x37d0d1, _0x519b9a).then(_0x3522f2 => {
        if (_0x3522f2.code !== 200) _0x5cd012(_0x3522f2.message);
        this.host = _0x37ff87;
        _0x59c8b8.Authorization = _0x3522f2.data?.["token_type"] + " " + _0x3522f2.data?.["token"];
        _0x12ef09().then(({
          message: _0x239e74,
          success: _0x4ea6b4,
          code: _0x3cbbbf,
          data: _0x54dffc
        }) => {
          if (_0x3cbbbf !== 200) _0x5cd012(_0x239e74);
          this.isInitialized = _0x54dffc?.["isInitialized"];
          this.version = _0x54dffc?.["version"];
          this.publishTime = _0x54dffc?.["publishTime"];
          this.branch = _0x54dffc?.["branch"];
          this.changeLog = _0x54dffc?.["changeLog"];
          this.changeLogLink = _0x54dffc?.["changeLogLink"];
          this.success = _0x4ea6b4;
          this.code = _0x3cbbbf;
          _0xb76e13(this);
        });
      });
    });
  }
}
async function getQLS(_0x5f0341 = null) {
  let _0x50f052 = new Array(),
    _0x17afc5 = await s.bucketAllKeys("qls");
  if (Array.isArray(_0x17afc5) && _0x17afc5.length) {
    for (let _0x3a2832 of _0x17afc5) _0x50f052.push(JSON.parse(await s.bucketGet("qls", _0x3a2832)));
  } else try {
    _0x50f052 = JSON.parse(await s.bucketGet("qinglong", "QLS"));
  } catch (_0x18b443) {
    return rebug("【jusapi】【getQLS】青龙列表读取错误，请检查系统配置", 0);
  }
  if (_0x5f0341) _0x50f052 = _0x50f052.filter(_0x43294c => _0x43294c.name.includes(_0x5f0341));
  if (_0x50f052.length && _0x50f052[0]) return rebug("【getQLS】查找青龙：" + (_0x5f0341 ? _0x5f0341 : "ALL"), true, 200, _0x50f052);else return rebug("【getQLS】未查找青龙：" + (_0x5f0341 ? _0x5f0341 : "ALL") + "，请检查名称或权限", false, 404, _0x50f052);
}
class WxPusher {
  constructor(_0x44da4d) {
    this.appToken = _0x44da4d;
    if (!_0x44da4d) return rebug("请设置 appToken");
    if (typeof _0x44da4d != "string") return rebug("appToken 格式错误: " + _0x44da4d);
    this.getUID = async function () {
      let _0x3e8d50 = await this.create_qrcode("by jusapi"),
        _0x3f8554;
      if (!_0x3e8d50.success) return rebug("【WxPusher/getUID】获取二维码失败: " + _0x3e8d50.message);
      let _0x24cb75 = s.reply("请在 " + module.exports.inputTime + " 秒内使用微信扫描二维码（q 取消）:"),
        _0x1bffb4 = s.replyImage(_0x3e8d50.data.url),
        _0x28e1a9;
      for (let _0x4cec52 = 0; _0x4cec52 < module.exports.inputTime; _0x4cec52 += 10) {
        _0x28e1a9 = await s.input(10000, 1, false).then(_0x79955f => {
          if (!_0x79955f) return rebug("【inputReg】 输入超时", true, 408, e);
          if (/^q$/i.test(_0x79955f)) return rebug("【inputReg】 用户取消");
          if (reg) {
            if (!reg.test(_0x79955f)) return rebug("【inputReg】 输入错误（" + reg + "）: " + _0x79955f, false, 401, _0x79955f);
          }
          return rebug("【inputReg】 输入: " + _0x79955f, true, 200, _0x79955f);
        }).catch(_0x35e07f => rebug("【inputReg】 输入超时", false, 408, _0x35e07f));
        _0x3f8554 = await this.scan_qrcode_uid(_0x3e8d50.data.code);
        if (_0x3f8554.success) return s.recallMessage(_0x24cb75), s.recallMessage(_0x1bffb4), _0x3f8554;else {
          if (_0x28e1a9.code != 408) return s.recallMessage(_0x24cb75), s.recallMessage(_0x1bffb4), _0x28e1a9;
        }
      }
    };
    this.create_qrcode = function (_0x16c836, _0xbd682a = module.exports.inputTime) {
      if (!_0x16c836 || typeof _0x16c836 != "string") return rebug("【WxPusher/create/qrcode】extra 格式错误: " + _0x16c836);
      return _0x5574ae({
        "url": "https://wxpusher.zjiecode.com/api/fun/create/qrcode",
        "method": "post",
        "data": {
          "appToken": _0x44da4d,
          "extra": _0x16c836,
          "validTime": _0xbd682a
        }
      });
    };
    this.scan_qrcode_uid = function (_0x1ca833) {
      if (!_0x1ca833 || typeof _0x1ca833 != "string") return rebug("【WxPusher/fun/scan-qrcode-uid】code 格式错误: " + _0x1ca833);
      return _0x5574ae({
        "url": "https://wxpusher.zjiecode.com/api/fun/scan-qrcode-uid?code=" + _0x1ca833
      });
    };
    function _0x5574ae(_0x18d851) {
      return axios(_0x18d851).then(({
        status: _0x12f91b,
        statusText: _0x4185a7,
        headers: _0x19037b,
        config: _0x10dd57,
        request: _0x5558a3,
        data: {
          code: _0x253163,
          msg: _0x188321,
          data: _0x2390a2,
          success: _0x3d5405
        }
      }) => rebug("【WxPusher/" + new URL(_0x10dd57.url).pathname.split("/").slice(-2).join("/") + "】" + (_0x188321 || _0x4185a7), _0x3d5405, _0x253163 || _0x12f91b, _0x2390a2)).catch(({
        hostname: _0x50542f,
        syscall: _0x147f6b,
        code: _0x48204e,
        errno: _0x8aef96,
        message: _0x27f603,
        stack: _0x47f1c8,
        name: _0x50708e,
        config: _0x255a0c,
        request: _0x5011e3
      }) => rebug("【WxPusher/" + new URL(_0x255a0c.url).pathname.split("/").slice(-2).join("/") + "】" + ("[" + _0x50708e + "]" + _0x8aef96 + " - " + _0x48204e + ", " + _0x27f603)));
    }
    return this;
  }
}
class DDDDOCR {
  constructor(_0x2226cb = null) {
    this.capcode = function (_0x27e843 = {
      "slidingImage": null,
      "backImage": null,
      "simple_target": null
    }) {
      return _0x438e3c({
        "url": this.host + "/capcode",
        "method": "post",
        "data": _0x27e843
      });
    };
    this.classification = function (_0x4d7929 = {
      "image": null
    }) {
      return _0x438e3c({
        "url": this.host + "/classification",
        "method": "post",
        "data": _0x4d7929
      });
    };
    this.detection = function (_0x356739 = {
      "image": null
    }) {
      return _0x438e3c({
        "url": this.host + "/detection",
        "method": "post",
        "data": _0x356739
      });
    };
    this.calculate = function (_0x42fe07 = {
      "image": null
    }) {
      return _0x438e3c({
        "url": this.host + "/calculate",
        "method": "post",
        "data": _0x42fe07
      });
    };
    this.slideComparison = function (_0x2275df = {
      "slidingImage": null,
      "backImage": null
    }) {
      return _0x438e3c({
        "url": this.host + "/slideComparison",
        "method": "post",
        "data": _0x2275df
      });
    };
    this.crop = function (_0x29aaea = {
      "image": null,
      "y_coordinate": null
    }) {
      return _0x438e3c({
        "url": this.host + "/crop",
        "method": "post",
        "data": _0x29aaea
      });
    };
    this.select = function (_0x3fabef = {
      "image": null
    }) {
      return _0x438e3c({
        "url": this.host + "/select",
        "method": "post",
        "data": _0x3fabef
      });
    };
    function _0x438e3c(_0x4d0636) {
      return _0x4d0636.headers = {
        ...{
          "Content-Type": "application/json"
        },
        ..._0x4d0636.headers
      }, axios({
        ...{
          "method": "get"
        },
        ..._0x4d0636
      }).then(({
        status: _0x5859cb,
        statusText: _0x46ca26,
        headers: _0x26828f,
        config: _0x238e56,
        request: _0x20a5ed,
        data: _0x2c7e6c
      }) => rebug("【 DDDDOCR/" + new URL(_0x238e56.url).pathname.split("/").pop() + " 】" + _0x5859cb + " - " + _0x46ca26, true, _0x5859cb, _0x2c7e6c)).catch(({
        message: _0x28614e,
        name: _0x5e55f6,
        code: _0x23c8a7,
        config: _0x3e4563,
        request: _0x245d17,
        response: _0x1968f4
      }) => rebug("【 DDDDOCR/" + new URL(_0x3e4563.url).pathname.split("/").pop() + " 】[" + _0x5e55f6 + "]" + _0x23c8a7 + " - " + _0x28614e, false, _0x23c8a7, null));
    }
    return new Promise(async (_0x1be59b, _0x5483aa) => {
      this.host = _0x2226cb || (await middleware.bucketGet("jusapi", "ddddocr"));
      this.host || _0x5483aa("【 DDDDOCR 】请设置配参 ddddocr")(await _0x438e3c({
        "url": this.host
      })).code == 200 ? _0x1be59b(this) : _0x5483aa("【 DDDDOCR 】DDDDOCR 连接失败");
    });
  }
}
async function sendNotify(_0x14704f, _0x58329b) {
  if (!/([a-z]+:[a-z\d\-]+,?)+/.test(_0x14704f)) return rebug("【sendNotify】目标参数格式错误", false, 401, _0x58329b);
  return await Promise.all(_0x14704f.split(",").map(_0x139063 => {
    const [_0x170326, _0x58c3f9] = _0x139063.split(":");
    return {
      "im": _0x170326,
      "id": _0x58c3f9
    };
  }).map(_0x485b14 => {
    if (_0x485b14.im) {
      let _0x491c3e, _0x331da9, _0x9567d7;
      _0x491c3e = /^.*(?=(group|indiv))/i.exec(_0x485b14.im)[0];
      _0x331da9 = /group/i.test(_0x485b14.im) ? _0x485b14.id : null;
      _0x9567d7 = /indiv/i.test(_0x485b14.im) ? _0x485b14.id : null;
      rebug("【sendNotify】[" + _0x491c3e + "]" + _0x485b14.id + " 开始推送", true);
      try {
        return middleware.push(_0x491c3e, _0x331da9, _0x9567d7, "", _0x58329b);
      } catch (_0x126fe9) {
        rebug("【sendNotify】[" + _0x491c3e + "]" + _0x485b14.id + " 推送异常");
      }
    }
  })), rebug("【sendNotify】推送完成", true, 200, _0x58329b);
}
function rebug(_0x12e0f3, _0x163e1f = false, _0x475fed = 0, _0x44740d = null) {
  let _0x5c75e4 = /^【.*】\s?/.exec(_0x12e0f3);
  _0x5c75e4 = _0x5c75e4 ? _0x5c75e4[0] : "【rebug】";
  let _0x213f9b = _0x12e0f3.replace(/^【[^】]+】/, "");
  if (module.exports.isDebug) {
    let _0x271160 = typeof _0x12e0f3;
    if (_0x271160 == "object") {
      if (Array.isArray(_0x12e0f3)) _0x271160 = "array";else {
        if (_0x12e0f3 instanceof RegExp) {
          _0x271160 = "regexp";
        } else {
          if (_0x12e0f3 == null) {
            _0x271160 = "null";
          }
        }
      }
    }
    if (_0x163e1f) console.log("[40;32m", _0x5c75e4, "[42;30m", _0x271160, ":", _0x213f9b, "[0m");else {
      console.error(_0x12e0f3);
    }
  }
  return {
    "message": _0x213f9b.replace(/^【.+?】 /, ""),
    "success": _0x163e1f,
    "code": _0x475fed,
    "data": _0x44740d
  };
}
async function encodeQR(_0x4f9ed7) {
  const _0x43684d = await new AutAPI(),
    [_0x21fd3c, _0x301b5d] = await _0x43684d.require("qr-image", "uuid"),
    _0x26c283 = _0x301b5d.v4() + ".png",
    _0x16d402 = await middleware.bucketGet("jusapi", "host"),
    _0x16d1b8 = _0x16d402 + "/tmp/static/" + _0x26c283,
    _0x426c19 = path.resolve("../web/tmp/static") + "/" + _0x26c283,
    _0x353a04 = _0x21fd3c.image(_0x4f9ed7, {
      "ec_level": "H",
      "type": "png",
      "size": 10
    });
  return _0x353a04.pipe(fs.createWriteStream(_0x426c19)), rebug("【 encodeQR 】URL: " + _0x16d1b8 + "，本地路径: " + _0x426c19, true, 200, {
    "local": _0x426c19,
    "lan": _0x16d1b8
  });
}
async function resend(_0x121eb2, _0x55b23c = false, _0x21e9e3 = 0, _0x1fcea5 = null) {
  const _0x3a532a = await s.reply(_0x121eb2);
  if (module.exports.recallTime && _0x3a532a) setTimeout(() => {
    s.recallMessage(_0x3a532a[0]).catch(_0x38849c => rebug("【 resend 】撤回用户消息失败"));
  }, module.exports.recallTime * 1000);
  return rebug("【 resend 】 success: " + _0x55b23c, _0x55b23c, _0x21e9e3, _0x1fcea5);
}
function sleep(_0x95d7c7) {
  return new Promise(_0x27cf4c => setTimeout(() => _0x27cf4c(), _0x95d7c7 * 1000));
}
async function inputReg(_0x3d2f9c = null, _0x84f18c = null) {
  module.exports.recallTime && _0x3d2f9c && s.recallMessage(await s.getMessageID()).catch(_0x158f80 => rebug("【 inputReg 】撤回用户消息失败"));
  try {
    var _0x46d986 = _0x3d2f9c ? await s.reply(_0x3d2f9c) : null;
  } catch (_0x428bbe) {
    return rebug("【inputReg】 系统错误", false, 500, _0x428bbe);
  }
  let _0x448946 = await s.input(module.exports.inputTime * 1000, 1, false).then(_0x3a204c => {
    if (!_0x3a204c) return rebug("【inputReg】 输入超时", true, 408, e);
    if (/^q$/i.test(_0x3a204c)) return rebug("【inputReg】 用户取消");
    if (_0x84f18c) {
      if (!_0x84f18c.test(_0x3a204c)) return rebug("【inputReg】 输入错误（" + _0x84f18c + "）: " + _0x3a204c, false, 401, _0x3a204c);
    }
    return rebug("【inputReg】 输入: " + _0x3a204c, true, 200, _0x3a204c);
  }).catch(_0x5e7a70 => rebug("【inputReg】 输入超时", false, 408, _0x5e7a70));
  if (module.exports.recallTime && _0x3d2f9c) {
    rebug("【 inputReg 】撤回 tip");
    s.recallMessage(_0x46d986?.[0]).catch(_0x582aea => rebug("【 inputReg 】撤回机器人消息失败，ID: " + _0x46d986?.[0]));
    s.recallMessage(await s.getMessageID()).catch(_0x2e40f2 => rebug("【 inputReg 】撤回用户消息失败"));
  }
  return _0x448946;
}
async function waitPay(_0x7e27b0 = null) {
  let _0x213305 = module.exports.appreciate;
  if (!_0x213305) return rebug("【waitPay】 获取收款码失败", false, 502, false);
  if (await s.atWaitPay()) return rebug("【waitPay】 他人支付中，请稍后重试", false, 503, false);
  const _0x27d5d8 = await s.getImtype();
  if (/^(qb)|(tb)|(ds)|(kk)|(dd)|(ss)$/i.test(_0x27d5d8)) {
    rebug("【waitPay】 当前平台【" + _0x27d5d8 + "】需要转链", 1);
    _0x213305 = await img2aut(_0x213305);
    if (_0x213305.success) _0x213305 = _0x213305.data;else return _0x213305;
  }
  const _0x3a3155 = _0x7e27b0 || "请在 " + module.exports.payTime + " 秒内使用微信扫码完成支付（q 退出）";
  try {
    var _0x2d322d = await s.reply(_0x3a3155),
      _0x45b4de = await s.replyImage(_0x213305);
  } catch (_0x3fe3f7) {
    return rebug("【 waitPay 】 系统错误", false, 500, _0x3fe3f7);
  }
  rebug("【waitPay】 等待支付，收款码: " + _0x213305, 1);
  let _0x4d9a22;
  const _0x23dd73 = await s.waitPay("q", module.exports.payTime * 1000).then(async _0x278f52 => {
    _0x4d9a22 = await s.getMessageID();
    if (typeof _0x278f52 == "string") return rebug("【waitPay】退出", false, 0, "退出");else return rebug("【waitPay】支付完成", true, 200, _0x278f52);
  }).catch(_0x4f4927 => {
    if (_0x4f4927.data) return rebug("【waitPay_ed】" + _0x4f4927.data.message, false, _0x4f4927.data.status, _0x4f4927.data);else return rebug("【waitPay_e】" + _0x4f4927.message, false, _0x4f4927.status || _0x4f4927.code, _0x4f4927);
  });
  if (module.exports.recallTime && _0x2d322d) {
    console.log(_0x4d9a22);
    await s.recallMessage(_0x4d9a22);
    await s.recallMessage(_0x45b4de[0]);
    await s.recallMessage(_0x2d322d[0]);
  }
  return _0x23dd73;
}
async function img2aut(_0x92971a) {
  const _0x131e9f = await file2stream(_0x92971a);
  if (_0x131e9f.success == false) return rebug("【 img2aut 】 读取文件失败", false, 0, null);
  const _0x19baa0 = await s.bucketGet("cloud", "username"),
    _0x46a2c4 = await s.bucketGet("cloud", "password");
  if (!(_0x19baa0 && _0x46a2c4)) return rebug("【 img2aut 】 获取 autman 账号失败", false, 0, null);
  const _0x2c9ca6 = new FormData();
  return _0x2c9ca6.append("imgfile", _0x131e9f.data), _0x2c9ca6.append("username", _0x19baa0), _0x2c9ca6.append("password", _0x46a2c4), await axios({
    "method": "post",
    "url": "http://aut.zhelee.cn/imgUpload",
    "headers": {
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      ..._0x2c9ca6.getHeaders()
    },
    "data": _0x2c9ca6
  }).then(function (_0x452b11) {
    return rebug("【 img2aut 】 " + _0x452b11.data.msg, _0x452b11.data.code == 200, _0x452b11.data.code, _0x452b11.data.code == 200 ? _0x452b11.data.result.path : _0x452b11.data);
  }).catch(function (_0x263682) {
    return rebug("【 img2aut 】 " + JSON.stringify(_0x263682), false, 0, _0x263682);
  });
}
async function file2stream(_0x342cd3) {
  let _0x42d7d8;
  if (isURL(encodeURI(_0x342cd3))) {
    const _0x5f4d83 = await axios.get(encodeURI(_0x342cd3), {
      "responseType": "stream"
    });
    return _0x42d7d8 = _0x5f4d83.data, rebug("【 file2stream 】 网络文件: " + (_0x5f4d83.code || _0x5f4d83.status) + "} - " + (_0x5f4d83.message || _0x5f4d83.status || ""), true, _0x5f4d83.code || _0x5f4d83.status, _0x42d7d8 || _0x5f4d83);
  } else {
    if (fs.existsSync(encodeURI(_0x342cd3))) return await fs.promises.readFile(encodeURI(_0x342cd3), "utf8").then(_0x4d303b => rebug("【 file2stream 】 本地文件 - 读取文件成功", true, 1, _0x4d303b)).catch(_0x1192ac => rebug("【 file2stream 】 本地文件:" + _0x1192ac.name + "[" + _0x1192ac.code + "] - " + _0x1192ac.message));else {
      if (isBase64(_0x342cd3)) {
        const _0x37befa = Buffer.from(_0x342cd3, "base64");
        return await fs.promises.readFile(_0x37befa, "utf8").then(_0x31083c => rebug("【 file2stream 】 BASE64文件 - 读取文件成功", true, 1, _0x31083c)).catch(_0x472fc7 => rebug("【 file2stream 】 BASE64文件:" + _0x472fc7.name + "[" + _0x472fc7.code + "] - " + _0x472fc7.message));
      } else return _0x342cd3 instanceof stream.Readable ? (_0x42d7d8 = _0x342cd3, rebug("【 file2stream 】 文件流", true, 1, _0x42d7d8)) : rebug("【 file2stream 】 Unsupported image source type", false, 0, _0x342cd3);
    }
  }
}
async function file2local(_0x21d7a6) {}
function isURL(_0x340e9e) {
  try {
    return new URL(_0x340e9e), true;
  } catch (_0x102ac4) {
    return false;
  }
}
function isBase64(_0x4a9be1) {
  try {
    return Buffer.from(_0x4a9be1, "base64").toString("base64") === _0x4a9be1;
  } catch (_0x144b30) {
    return false;
  }
}
async function sendFile(_0x357646, _0x3468b6 = "") {
  const _0x252f71 = await s.getImtype();
  let _0x1ef716;
  if (_0x3468b6) _0x1ef716 = _0x3468b6;else _0x1ef716 = /(?<=[\/\\]?)[^\/\\]+?\.\w+$/.exec(_0x357646), _0x1ef716 = _0x1ef716 ? _0x1ef716[0] : "未知文件 by jusapi";
  rebug("【 sendFile 】" + _0x252f71 + " - 发送文件: " + _0x1ef716, 1);
  if (/^qq$/i.test(_0x252f71)) return await s.reply("[CQ:file,file=" + _0x357646 + "]").then(_0x4e056f => rebug("【 sendFile 】" + _0x252f71 + " 发送完成", true, 200, _0x4e056f[0]));
  if (/^wx$/i.test(_0x252f71)) return await xyo_sendFile(_0x357646, _0x1ef716);
  const _0x440c6d = await file2stream(_0x357646);
  if (_0x440c6d.success == false) return rebug("【 sendFile 】" + _0x252f71 + " - 读取文件失败");
  if (/^tb$/i.test(_0x252f71)) return await tb_sendFile(_0x440c6d.data, _0x1ef716);else {
    if (/^dc$/i.test(_0x252f71)) return await dc_sendFile(_0x440c6d.data, _0x1ef716);else {
      if (/^sk$/i.test(_0x252f71)) return await sk_sendFile(_0x440c6d.data, _0x1ef716);else {
        if (/^kk$/i.test(_0x252f71)) return await kk_sendFile(_0x440c6d.data, _0x1ef716);else return await s.reply("[CQ:file,file=" + _0x357646 + "]");
      }
    }
  }
}
async function xyo_sendFile(_0x405c89, _0x307b5b, _0x3045b9 = "", _0x2d6cad = "", _0x1eb80d = "", _0x4f22d3 = "") {
  const _0x1916ea = await file2win(_0x405c89, _0x307b5b),
    _0x29b553 = await s.getImtype();
  if (!_0x1916ea.success) return rebug("【 xyo_sendFile 】" + _0x29b553 + " - 上传文件失败");
  const _0x407497 = _0x2d6cad || (await middleware.bucketGet("wx", "vlw_addr")),
    _0x3f20e1 = _0x1eb80d || (await middleware.bucketGet("wx", "vlw_token")),
    _0x2bd19b = _0x4f22d3 || (await middleware.bucketGet("wx", "robot_wxid"));
  if (!(_0x2bd19b && _0x407497 && _0x3f20e1)) return rebug("【 xyo_sendFile 】" + _0x29b553 + " - 未获取到 vlw 配置");
  const _0x48eefd = await s.getChatID(),
    _0x3e612c = _0x3045b9 || _0x48eefd ? _0x48eefd + "@chatroom" : await s.getUserID();
  return await axios({
    "url": _0x407497,
    "method": "post",
    "data": {
      "token": _0x3f20e1,
      "api": "SendFileMsg",
      "robot_wxid": _0x2bd19b,
      "to_wxid": _0x3e612c,
      "path": _0x1916ea.data
    }
  }).then(_0x34a609 => rebug("【 xyo_sendFile 】" + (_0x34a609.code || _0x34a609.status) + " - " + (_0x34a609.message || _0x34a609.statusText), true, _0x34a609.code || _0x34a609.status, _0x34a609.data || _0x34a609)).catch(_0x3991b5 => _0x3991b5.response ? _0x3991b5.response.data ? rebug("【 xyo_sendFile 】" + (_0x3991b5.response.data.code || _0x3991b5.response.data.status) + " - " + (_0x3991b5.response.data.message || _0x3991b5.response.data.statusText), false, _0x3991b5.response.data.code || _0x3991b5.response.data.status, _0x3991b5.response.data) : rebug("【 xyo_sendFile 】" + (_0x3991b5.response.code || _0x3991b5.response.status) + " - " + (_0x3991b5.response.message || _0x3991b5.response.statusText), false, _0x3991b5.response.code || _0x3991b5.response.status, _0x3991b5.response) : rebug("【 xyo_sendFile 】" + (_0x3991b5.code || _0x3991b5.status) + " - " + (_0x3991b5.message || _0x3991b5.statusText), false, _0x3991b5.code || _0x3991b5.status, _0x3991b5));
}
async function kk_sendFile(_0x525a72, _0x5bd34b, _0x4864eb = "", _0x1c4f29 = "") {
  const _0x348f80 = _0x4864eb || (await s.getChatID());
  if (!_0x348f80) return rebug("【 dc_sendFile 】未找到 channelId，目前仅支持群聊发送文件");
  const _0x283ac6 = _0x1c4f29 || (await middleware.bucketGet("kk", "token"));
  if (!_0x283ac6) return rebug("【 kk_sendFile 】未找到 token");
  const _0x3b2737 = new FormData();
  _0x3b2737.append("file", _0x525a72, {
    "filename": _0x5bd34b
  });
  _0x3b2737.append("target_id", _0x348f80);
  _0x3b2737.append("guild_id", _0x348f80);
  const _0x3e20ca = await axios({
    "url": "https://www.kookapp.cn/api/v3/asset/create",
    "method": "post",
    "headers": {
      "Content-type": "form-data",
      "Authorization": "Bot " + _0x283ac6
    },
    "data": _0x3b2737
  }).then(_0x17a8de => _0x17a8de.data ? rebug("【 kk_asset_create 】" + (_0x17a8de.data.code + 1 ? _0x17a8de.data.code : null) + " - " + (_0x17a8de.data.message || _0x17a8de.data.statusText), true, _0x17a8de.data.code || _0x17a8de.data.status, _0x17a8de.data.data || _0x17a8de.data) : rebug("【 kk_asset_create 】" + (_0x17a8de.code || _0x17a8de.status) + " - " + (_0x17a8de.message || _0x17a8de.statusText), true, _0x17a8de.code || _0x17a8de.status, _0x17a8de.data || _0x17a8de)).catch(_0x5da333 => _0x5da333.response ? _0x5da333.response.data ? rebug("【 kk_asset_create 】" + (_0x5da333.response.data.code || _0x5da333.response.data.status) + " - " + (_0x5da333.response.data.message || _0x5da333.response.data.statusText), false, _0x5da333.response.data.code || _0x5da333.response.data.status, _0x5da333.response.data) : rebug("【 kk_asset_create 】" + (_0x5da333.response.code || _0x5da333.response.status) + " - " + (_0x5da333.response.message || _0x5da333.response.statusText), false, _0x5da333.response.code || _0x5da333.response.status, _0x5da333.response) : rebug("【 kk_asset_create 】" + (_0x5da333.code || _0x5da333.status) + " - " + (_0x5da333.message || _0x5da333.statusText), false, _0x5da333.code || _0x5da333.status, _0x5da333));
  if (!_0x3e20ca.success || _0x3e20ca.code) return _0x3e20ca;
  return rebug("【 kk_asset_create 】" + _0x3e20ca.data.url, 1), axios({
    "method": "post",
    "url": "https://www.kookapp.cn/api/v3/message/create",
    "headers": {
      "Content-type": "application/json",
      "Authorization": "Bot " + _0x283ac6
    },
    "data": {
      "content": JSON.stringify([{
        "type": "card",
        "theme": "secondary",
        "size": "lg",
        "modules": [{
          "type": "file",
          "title": _0x5bd34b,
          "src": _0x3e20ca.data.url,
          "size": "?"
        }]
      }]),
      "target_id": _0x348f80,
      "type": 10
    }
  }).then(_0x58f808 => _0x58f808.data ? rebug("【 kk_asset_create 】" + (_0x58f808.data.code + 1 ? _0x58f808.data.code : null) + " - " + (_0x58f808.data.message || _0x58f808.data.statusText), true, _0x58f808.data.code || _0x58f808.data.status, _0x58f808.data.data || _0x58f808.data) : rebug("【 kk_asset_create 】" + (_0x58f808.code || _0x58f808.status) + " - " + (_0x58f808.message || _0x58f808.statusText), true, _0x58f808.code || _0x58f808.status, _0x58f808.data || _0x58f808)).catch(_0x464668 => _0x464668.response ? _0x464668.response.data ? rebug("【 kk_sendFile 】" + (_0x464668.response.data.code || _0x464668.response.data.status) + " - " + (_0x464668.response.data.message || _0x464668.response.data.statusText), false, _0x464668.response.data.code || _0x464668.response.data.status, _0x464668.response.data) : rebug("【 kk_sendFile 】" + (_0x464668.response.code || _0x464668.response.status) + " - " + (_0x464668.response.message || _0x464668.response.statusText), false, _0x464668.response.code || _0x464668.response.status, _0x464668.response) : rebug("【 kk_sendFile 】" + (_0x464668.code || _0x464668.status) + " - " + (_0x464668.message || _0x464668.statusText), false, _0x464668.code || _0x464668.status, _0x464668));
}
async function sk_sendFile(_0x1ba02a, _0x538df4, _0x142bc5 = "", _0x1aef2a = "") {
  const _0x2eae0a = _0x142bc5 || (await s.getChatID()) || (await s.getUserID()),
    _0x51cbe4 = _0x1aef2a || (await middleware.bucketGet("sk", "SLACK_BOT_TOKEN"));
  if (!_0x51cbe4) return rebug("【 sk_sendFile 】未找到 SLACK_BOT_TOKEN");
  const _0x2b9234 = new FormData();
  return _0x2b9234.append("file", _0x1ba02a, {
    "filename": _0x538df4
  }), _0x2b9234.append("channels", _0x2eae0a), axios({
    "method": "post",
    "url": "https://slack.com/api/files.upload",
    "headers": {
      "Content-Type": "multipart/form-data",
      "Authorization": "Bearer " + _0x51cbe4
    },
    "data": _0x2b9234
  }).then(_0x5e65b5 => rebug("【 sk_sendFile 】" + (_0x5e65b5.code || _0x5e65b5.status) + " - " + (_0x5e65b5.message || _0x5e65b5.statusText), true, _0x5e65b5.code || _0x5e65b5.status, _0x5e65b5.data || _0x5e65b5)).catch(_0x1860a3 => _0x1860a3.response ? _0x1860a3.response.data ? rebug("【 sk_sendFile 】" + (_0x1860a3.response.data.code || _0x1860a3.response.data.status) + " - " + (_0x1860a3.response.data.message || _0x1860a3.response.data.statusText), false, _0x1860a3.response.data.code || _0x1860a3.response.data.status, _0x1860a3.response.data) : rebug("【 sk_sendFile 】" + (_0x1860a3.response.code || _0x1860a3.response.status) + " - " + (_0x1860a3.response.message || _0x1860a3.response.statusText), false, _0x1860a3.response.code || _0x1860a3.response.status, _0x1860a3.response) : rebug("【 sk_sendFile 】" + (_0x1860a3.code || _0x1860a3.status) + " - " + (_0x1860a3.message || _0x1860a3.statusText), false, _0x1860a3.code || _0x1860a3.status, _0x1860a3));
}
async function dc_sendFile(_0x537646, _0x1ee98c, _0x812e1c = "", _0x481a99 = "") {
  const _0x334367 = _0x812e1c || (await s.getChatID());
  if (!_0x334367) return rebug("【 dc_sendFile 】未找到 channelId，目前仅支持群聊发送文件");
  const _0x109be1 = _0x481a99 || (await middleware.bucketGet("dc", "token"));
  if (!_0x109be1) return rebug("【 dc_sendFile 】未找到 token");
  const _0x5d2340 = new FormData();
  return _0x5d2340.append("file", _0x537646, {
    "filename": _0x1ee98c
  }), await axios({
    "url": "https://discord.com/api/v9/channels/" + _0x334367 + "/messages",
    "method": "post",
    "headers": {
      "Content-Type": " multipart/form-data; boundary=" + _0x5d2340.getBoundary(),
      "Authorization": "Bot " + _0x109be1
    },
    "data": _0x5d2340
  }).then(_0x473b3d => rebug("【 dc_sendFile 】" + (_0x473b3d.code || _0x473b3d.status) + " - " + (_0x473b3d.message || _0x473b3d.statusText), true, _0x473b3d.code || _0x473b3d.status, _0x473b3d.data || _0x473b3d)).catch(_0x147dd3 => _0x147dd3.response ? _0x147dd3.response.data ? rebug("【 dc_sendFile 】" + (_0x147dd3.response.data.code || _0x147dd3.response.data.status) + " - " + (_0x147dd3.response.data.message || _0x147dd3.response.data.statusText), false, _0x147dd3.response.data.code || _0x147dd3.response.data.status, _0x147dd3.response.data) : rebug("【 dc_sendFile 】" + (_0x147dd3.response.code || _0x147dd3.response.status) + " - " + (_0x147dd3.response.message || _0x147dd3.response.statusText), false, _0x147dd3.response.code || _0x147dd3.response.status, _0x147dd3.response) : rebug("【 dc_sendFile 】" + (_0x147dd3.code || _0x147dd3.status) + " - " + (_0x147dd3.message || _0x147dd3.statusText), false, _0x147dd3.code || _0x147dd3.status, _0x147dd3));
}
async function tb_sendFile(_0x462db4, _0x181043, _0x82515c = "", _0x368810 = "") {
  const _0x3abb68 = _0x82515c || (await s.getChatID()) || (await s.getUserID()),
    _0x526f32 = _0x368810 || (await middleware.bucketGet("tb", "token"));
  if (!_0x526f32) return rebug("【 tb_sendFile 】未找到 token");
  const _0x1ba9c3 = new FormData();
  return _0x1ba9c3.append("document", _0x462db4, {
    "filename": _0x181043
  }), await axios.post("https://api.telegram.org/bot" + _0x526f32 + "/sendDocument", _0x1ba9c3, {
    "headers": {
      ..._0x1ba9c3.getHeaders()
    },
    "params": {
      "chat_id": _0x3abb68
    }
  }).then(_0x458b56 => rebug("【 tb_sendFile 】" + (_0x458b56.code || _0x458b56.status) + " - " + (_0x458b56.message || _0x458b56.statusText), true, _0x458b56.code || _0x458b56.status, _0x458b56.data || _0x458b56)).catch(_0x2fba4c => _0x2fba4c.response ? _0x2fba4c.response.data ? rebug("【 tb_sendFile 】" + (_0x2fba4c.response.data.code || _0x2fba4c.response.data.status) + " - " + (_0x2fba4c.response.data.message || _0x2fba4c.response.data.statusText), false, _0x2fba4c.response.data.code || _0x2fba4c.response.data.status, _0x2fba4c.response.data) : rebug("【 tb_sendFile 】" + (_0x2fba4c.response.code || _0x2fba4c.response.status) + " - " + (_0x2fba4c.response.message || _0x2fba4c.response.statusText), false, _0x2fba4c.response.code || _0x2fba4c.response.status, _0x2fba4c.response) : rebug("【 tb_sendFile 】" + (_0x2fba4c.code || _0x2fba4c.status) + " - " + (_0x2fba4c.message || _0x2fba4c.statusText), false, _0x2fba4c.code || _0x2fba4c.status, _0x2fba4c));
}
async function file2win(_0x43ebfc, _0x2939e0) {
  const _0x26f896 = await middleware.bucketGet("jusapi", "win_server");
  if (!_0x26f896) return rebug("【 file2win 】 获取win_server_host失败");
  const _0x23a813 = await file2stream(_0x43ebfc);
  if (_0x23a813.success == false) return rebug("【 file2win 】 读取文件失败");
  return await axios({
    "method": "post",
    "url": _0x26f896,
    "headers": {
      "Content-Type": "application/octet-stream",
      "x-file-name": encodeURI(_0x2939e0)
    },
    "data": _0x23a813.data
  }).then(function (_0x4c4ad9) {
    return rebug("【 file2win 】 " + (_0x4c4ad9.code || _0x4c4ad9.status) + " - " + (_0x4c4ad9.message || _0x4c4ad9.statusText) + ": " + _0x4c4ad9.data, true, _0x4c4ad9.code || _0x4c4ad9.status, _0x4c4ad9.data);
  }).catch(function (_0x215038) {
    return rebug("【 file2win 】 " + (_0x215038.code || _0x215038.status) + " - " + (_0x215038.message || _0x215038.statusText));
  });
}
module.exports = {
  "version": "1.3.3",
  "isDebug": false,
  "inputTime": 120,
  "payTime": 60,
  "recallTime": 120,
  "sleep": sleep,
  "rebug": rebug,
  "resend": resend,
  "inputReg": inputReg,
  "waitPay": waitPay,
  "img2aut": img2aut,
  "file2stream": file2stream,
  "sendFile": sendFile,
  "encodeQR": encodeQR,
  "sendNotify": sendNotify,
  "getQLS": getQLS,
  "AutAPI": AutAPI,
  "QingLong": QingLong,
  "DDDDOCR": DDDDOCR,
  "WxPusher": WxPusher
};
!(async () => {
  module.exports.isDebug = /^true$/i.test(await middleware.bucketGet("jusapi", "isDebug"));
  if (module.exports.isDebug) rebug("【jusapi】 已开启调试功能", true);
  module.exports.appreciate = await middleware.bucketGet("jusapi", "appreciate");
  module.exports.dis_updata = /^true$/i.test(await middleware.bucketGet("jusapi", "dis_updata"));
  if (module.exports.dis_updata) return rebug("【jusapi】 已禁用自动更新", true);
  const _0x5b22e6 = await s.isAdmin(),
    _0x50819f = await s.getChatID();
  module.exports.dis_updata || _0x5b22e6 && !_0x50819f && axios.get("https://raw.githubusercontent.com/iCouldFly/autman_plugins/scripts/jusapi.js").then(({
    status: _0x47c9f1,
    statusText: _0x542c03,
    headers: _0x19e8b0,
    config: _0x1e6291,
    request: _0x55143e,
    data: _0x5b6e3f
  }) => {
    const _0x45b07f = _0x5b6e3f.match(/(?<=\/\/\s*\[version\:\s*)[\d\.]+/g),
      _0x3786ce = _0x5b6e3f.match(/(?<=\/\/\s*\[version\:\s*[\d\.]+\s+).*(?=\].*)/g)?.[0];
    if (!_0x45b07f) return console.log("jusapi 版本号获取失败");
    if (+_0x45b07f[0].split(".").join("") > module.exports.version.split(".").join("")) {
      console.log("jusapi 发现新版本，尝试更新，版本:", _0x45b07f[0]);
      const _0x2df33f = path.join(path.resolve(__dirname), "jusapi.js");
      fs.writeFile(_0x2df33f, _0x5b6e3f, _0x2a8a0a => _0x2a8a0a ? console.error("jusapi 更新失败:", _0x2a8a0a) : (s.reply("jusapi 已更新至: " + _0x45b07f[0] + (_0x3786ce ? "\n》" + _0x3786ce : "")), console.log("保存路径:", _0x2df33f.toString())));
    }
  }).catch(({
    port: _0x3ad990,
    address: _0x559bb6,
    syscall: _0x59af7f,
    code: _0x501af6,
    errno: _0x53aee8,
    message: _0x34c7da,
    stack: _0x5b6ac0,
    name: _0x2933e7,
    config: _0x41e7ab,
    request: _0x48f8da
  }) => console.error("jusapi 检查更新失败:", _0x34c7da));
})();