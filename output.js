//Fri Feb 21 2025 11:50:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const middleware = require("./middleware.js"),
  axios = require("axios"),
  FormData = require("form-data"),
  path = require("path"),
  fs = require("fs"),
  senderID = middleware.getSenderID(),
  s = new middleware.Sender(senderID),
  version = "1.4.2",
  needVersion = _0x291b7d => _0x291b7d ? _0x291b7d.split(".").map(_0x575ea8 => "0".repeat(3 - _0x575ea8.length) + _0x575ea8).join("") > version.split(".").map(_0x580357 => "0".repeat(3 - _0x580357.length) + _0x580357).join("") ? s.reply("系统错误，详见插件日志").then(() => console.error("需要 jusapi 最低版本:", _0x291b7d) || process.exit()) : true : true,
  upVersion = async () => fetch("https://raw.githubusercontent.com/iCouldFly/autman_plugins/scripts/jusapi.js").then(_0x46ac7a => _0x46ac7a.text()).then(_0x28b2f4 => {
    if (_0x28b2f4.includes("title: jusapi")) {
      const _0x5bbbb2 = _0x28b2f4.match(/(?<=\/\/\s*\[version\:\s*)[\d\.]+/g)?.[0];
      console.log("jusapi 最新版本:", _0x5bbbb2);
      _0x5bbbb2.split(".").map(_0x3d37d9 => "0".repeat(3 - _0x3d37d9.length) + _0x3d37d9).join("") > version.split(".").map(_0x4badcb => "0".repeat(3 - _0x4badcb.length) + _0x4badcb).join("") ? fs.writeFile("./jusapi.js.test", _0x28b2f4, (_0x30e9f3, _0x11aba2) => {
        _0x30e9f3 ? (s.reply("jusapi 下载失败"), s.reply(_0x30e9f3), s.reply(_0x11aba2).then(() => process.exit())) : s.reply("jusapi 下载完成，请重新发起命令").then(() => process.exit());
      }) : s.reply("jusapi 下载错误, 云端没有新版本").then(() => process.exit());
    } else s.reply("jusapi 下载错误").then(() => process.exit());
  }).catch(_0x35752a => {
    console.error("jusapi 下载失败", _0x35752a);
    s.reply("jusapi 下载失败\n" + JSON.stringify(_0x35752a)).then(() => process.exit());
  }),
  getIP = async () => {
    const _0x40767a = require("os"),
      _0xe4c862 = {
        ...Object.assign({}, ...Object.values(_0x40767a.networkInterfaces()).find(_0x1991b0 => _0x1991b0.find(_0x18964f => _0x18964f.netmask === "255.255.255.0")).flat().filter(_0x4f14d1 => !_0x4f14d1.internal).map(({
          family: _0x2d51fd,
          address: _0x3855f0
        }) => JSON.parse("{\"LAN-" + _0x2d51fd + "\":\"" + _0x3855f0 + "\"}"))),
        ...{
          "WAN-IPv6": (await fetch("https://6.ipw.cn").then(_0x88fc8e => _0x88fc8e.text()).catch(_0x160f82 => null)) || (await fetch("https://ipv6.ip.mir6.com").then(_0x15d4b3 => _0x15d4b3.text()).catch(_0x52aa65 => null)),
          "WAN-IPv4": (await fetch("https://4.ipw.cn").then(_0x40a2c7 => _0x40a2c7.text()).catch(_0x4a92d0 => null)) || (await fetch("https://ipv4.ip.mir6.com").then(_0x515851 => _0x515851.text()).catch(_0x2d379f => null)) || (await fetch("http://121.199.42.16/VAD/OnlyIp.aspx?yyy=123").then(_0x2afc98 => _0x2afc98.text()).catch(_0x1e064a => null)) || (await fetch("http://api.xiequ.cn/VAD/OnlyIp.aspx?yyy=123").then(_0x9660a5 => _0x9660a5.text()).catch(_0x35056a => null)) || (await fetch("http://www.xiequ.cn/OnlyIp.aspx?yyy=123").then(_0x24c8e4 => _0x24c8e4.text()).catch(_0x4a5abb => null))
        }
      };
    await fetch("http://ip-api.com/json/").then(_0x5c9579 => _0x5c9579.json()).then(({
      query: _0x53e1da
    }) => _0xe4c862["NET-IPv4"] = _0x53e1da).catch(_0x5f531a => null);
    return _0xe4c862;
  },
  sleep = (_0x47e86b = 1) => new Promise(_0x106f70 => setTimeout(() => _0x106f70(), _0x47e86b * 1000)),
  execRequire = async _0x4b67b2 => {
    var {
      exec: _0x19546e
    } = _0x19546e || require("child_process");
    const _0x275fac = "npm install " + _0x4b67b2;
    return await new Promise((_0x51655c, _0x48696c) => _0x19546e(_0x275fac, (_0x595639, _0x4f3c51, _0xa1574d) => {
      {
        if (_0x595639) {
          console.error("执行命令出错: " + _0x595639.message);
          _0x51655c(null);
          return;
        }
        _0xa1574d && (console.error("命令执行的错误输出: " + _0xa1574d), _0x51655c(null));
        _0x51655c(require(_0x4b67b2));
      }
    }));
  };
class AutAPI {
  constructor(_0x4d6b00, _0x486cb5, _0x29be18) {
    const _0x7746c7 = {
      "Accept": "application/json, text/plain, */*",
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      "Accept-Encoding": "gzip, compress, deflate, br"
    };
    this.get_instructions = () => _0x3e5e5b({
      "url": this.host + "/open/instructions"
    });
    this.get_gallery = () => _0x3e5e5b({
      "url": this.host + "/open/gallery"
    });
    this.post_gallery = _0x522cbb => {
      var _0x522cbb = new FormData();
      _0x522cbb.append("imgfile", _0x522cbb);
      return _0x3e5e5b({
        "url": this.host + "/open/gallery",
        "method": "post",
        "data": _0x522cbb
      });
    };
    this.get_log = _0x5582b8 => {
      {
        const _0x3685ef = /(?<=\/autMan\/task\/logs\/).*/.exec(_0x5582b8);
        if (Array.isArray(_0x3685ef)) {
          {
            const _0x106169 = _0x3685ef[0].split("/"),
              _0x379fff = encodeURIComponent(_0x106169.pop()),
              _0x5b76aa = encodeURIComponent(_0x106169.join("/"));
            return _0x3e5e5b({
              "url": this.host + "/open/logs/" + _0x379fff + "?path=" + _0x5b76aa,
              "method": "get"
            });
          }
        } else return rebug("【AutAPI】 get_log: 路径错误：" + _0x5582b8, false);
      }
    };
    this.get_logs_memu = () => _0x3e5e5b({
      "url": this.host + "/open/logs/memu"
    });
    this.require = async (..._0x1bcc42) => {
      {
        const _0x52073c = new Array();
        for (let _0x3ff4b0 of Array.isArray(_0x1bcc42[0]) ? _0x1bcc42[0] : _0x1bcc42) {
          let _0x392d88;
          try {
            _0x392d88 = require(_0x3ff4b0);
            rebug("【AutAPI/require】 载入模块: " + _0x3ff4b0, true);
          } catch (_0x5f1aec) {
            _0x392d88 = null;
            rebug("【AutAPI/require】 载入模块失败，尝试安装: " + _0x3ff4b0);
            if (_0x5f1aec.code == "MODULE_NOT_FOUND") {
              await s.reply("尝试安装依赖: " + _0x3ff4b0);
              let _0x2acdea = await this.post_dependencies([{
                "name": _0x3ff4b0,
                "type": "nodejs"
              }]);
              if (_0x2acdea.code == 200) {
                await s.reply("开始安装");
                for (let _0x131d0b = 1; _0x131d0b <= 3; _0x131d0b++) {
                  {
                    console.log(await sleep(5));
                    await s.reply("依赖安装中 " + ".".repeat(_0x131d0b));
                    _0x2acdea = await this.get_dependencies(_0x3ff4b0);
                    rebug("【AutAPI/require】查询依赖安装结果: " + JSON.stringify(_0x2acdea));
                    if (_0x2acdea.code == 200) {
                      {
                        if (_0x2acdea.data[0].status == 1) {
                          await s.reply("依赖安装成功: " + _0x3ff4b0);
                          _0x392d88 = require(_0x3ff4b0);
                          break;
                        }
                      }
                    } else {
                      await s.reply("依赖状态检测失败, 跳过");
                      break;
                    }
                  }
                }
                if (_0x2acdea.data[0].status != 1) await s.reply("依赖安装失败: " + _0x3ff4b0);
              } else {
                _0x392d88 = execRequire(_0x3ff4b0);
                await s.reply("依赖安装" + (_0x392d88 ? "成功" : "失败") + ": " + _0x3ff4b0);
              }
            } else rebug(JSON.stringify(_0x5f1aec)), await s.reply("加载依赖失败，未知错误");
          }
          _0x52073c.push(_0x392d88);
        }
        _0x52073c.every(_0x182d53 => _0x182d53) || process.exit();
        return _0x52073c;
      }
    };
    this.post_dependencies = _0x4883be => {
      return _0x3e5e5b({
        "url": this.host + "/open/dependencies",
        "method": "post",
        "data": _0x4883be
      });
    };
    this.get_dependencies = (_0x4075b2 = "") => _0x3e5e5b({
      "url": this.host + "/open/dependencies?searchValue=" + _0x4075b2
    });
    this.get_dependencies_log = _0x25b98c => _0x3e5e5b({
      "url": this.host + "/open/dependencies/" + _0x25b98c + "/log"
    });
    this.get_users = () => _0x3e5e5b({
      "url": this.host + "/open/users?searchValue="
    });
    this.put_users = _0x2e6985 => {
      return _0x3e5e5b({
        "url": this.host + "/open/users",
        "method": "PUT",
        "data": JSON.stringify(_0x2e6985)
      });
    };
    this.post_users = _0x5a38e6 => _0x3e5e5b({
      "url": this.host + "/open/users",
      "method": "POST",
      "data": JSON.stringify(_0x5a38e6)
    });
    this.get_nameids = (_0x348173 = "", _0x5da97f = "", _0x202242 = "") => _0x3e5e5b({
      "url": this.host + "/open/nameids?searchValue=" + _0x348173 + "&page=" + _0x5da97f + "&pageSize=" + _0x202242
    });
    this.get_varckmaps = (_0x541f8f = null) => _0x3e5e5b({
      "url": this.host + "/open/varckmaps" + (_0x541f8f ? "/" + _0x541f8f : "")
    });
    this.post_varckmaps = _0x40cb24 => {
      return _0x3e5e5b({
        "url": this.host + "/open/varckmaps",
        "method": "post",
        "data": _0x40cb24
      });
    };
    this.put_varckmaps = _0x1af498 => {
      return _0x3e5e5b({
        "url": this.host + "/open/varckmaps",
        "method": "put",
        "data": _0x1af498
      });
    };
    this.put_varckmaps_action = _0x268cac => {
      return _0x3e5e5b({
        "url": this.host + "/open/varckmaps/" + _0x268cac,
        "method": "put"
      });
    };
    this.delete_varckmaps = _0x1eb476 => {
      return _0x3e5e5b({
        "url": this.host + "/open/varckmaps",
        "method": "delete",
        "data": _0x1eb476
      });
    };
    this.get_croncmds = (_0x1875de = "") => _0x3e5e5b({
      "url": this.host + "/open/croncmds?searchValue=" + _0x1875de
    });
    this.get_croncmd_by_id = _0x23209a => _0x3e5e5b({
      "url": this.host + "/open/croncmds/" + _0x23209a
    });
    this.put_croncmds = _0x18c2ce => {
      const {
        id: _0x44a80c,
        disable: _0x3a1ccb,
        cron: _0x14269e,
        cmd: _0x3e2579,
        to_self: _0x5371c1,
        disguise_imtype: _0x1146ea,
        disguise_group: _0x2d7e4b,
        disguise_user: _0x40338c,
        to_others: _0x4bdbbb,
        memo: _0x219d1b
      } = _0x18c2ce;
      return _0x3e5e5b({
        "url": this.host + "/open/croncmds",
        "method": "PUT",
        "data": {
          "id": _0x44a80c,
          "disable": _0x3a1ccb,
          "cron": _0x14269e,
          "cmd": _0x3e2579,
          "to_self": _0x5371c1,
          "disguise_imtype": _0x1146ea,
          "disguise_group": _0x2d7e4b,
          "disguise_user": _0x40338c,
          "to_others": _0x4bdbbb,
          "memo": _0x219d1b
        }
      });
    };
    this.post_croncmds = (_0xe64e3d = {
      "cron": cron,
      "cmd": cmd,
      "to_self": to_self,
      "to_others": to_others,
      "memo": memo
    }) => {
      return _0x3e5e5b({
        "url": this.host + "/open/croncmds",
        "method": "POST",
        "data": _0xe64e3d
      });
    };
    this.del_croncmds = (_0x3f0ff8 = []) => {
      return _0x3e5e5b({
        "url": this.host + "/open/croncmds",
        "method": "DELETE",
        "data": _0x3f0ff8
      });
    };
    this.get_varlinks = (_0x4cec76 = undefined) => _0x4cec76 ? _0x3e5e5b({
      "url": this.host + "/open/varlinks/" + _0x4cec76
    }) : _0x3e5e5b({
      "url": this.host + "/open/varlinks"
    });
    this.post_encrypt = _0x1c1552 => {
      return _0x3e5e5b({
        "url": this.host + "/open/js/encrypt",
        "method": "post",
        "data": JSON.stringify(_0x1c1552)
      });
    };
    const _0x352405 = (_0x517889, _0x1da6fe, _0x1409e5) => _0x3e5e5b({
      "url": _0x517889 + "/open/auth/token?client_id=" + _0x1da6fe + "&client_secret=" + _0x1409e5
    });
    function _0x3e5e5b(_0x48d2e2) {
      return axios({
        ...{
          "headers": _0x7746c7,
          "redirect": "follow",
          "responseType": "json"
        },
        ..._0x48d2e2
      }).then(({
        config: _0x3812be,
        data: {
          message: _0x23fe4d,
          code: _0x4a60ce,
          data: _0x22b159
        }
      }) => rebug("【AutAPI/" + _0x3812be.method + "/" + new URL(_0x3812be.url).pathname.split("/").pop() + "】" + _0x4a60ce + " - \"" + (_0x23fe4d ? _0x23fe4d : "") + "\"", _0x4a60ce == 200, _0x4a60ce, _0x22b159)).catch(_0x1920f3 => rebug("【AutAPI/" + _0x1920f3.config.method + "/" + new URL(_0x1920f3.config.url).pathname.split("/").pop() + "】[" + (_0x1920f3.name + ": " || "") + "]" + (_0x1920f3.status || _0x1920f3.code) + " - " + (_0x1920f3.statusText || _0x1920f3.message || _0x1920f3.msg || ""), false, _0x1920f3.status, _0x1920f3.stack || _0x1920f3.data || null));
    }
    return new Promise(async (_0x490786, _0x4ef8d3) => {
      this.host = _0x4d6b00 || (await middleware.bucketGet("jusapi", "host"));
      this.client_id = _0x486cb5 || (await middleware.bucketGet("jusapi", "client_id"));
      this.client_secret = _0x29be18 || (await middleware.bucketGet("jusapi", "client_secret"));
      (!this.host || !this.client_id || !this.client_secret) && (console.error("【jusapi】请设置配参: autman 系统应用"), process.exit());
      await _0x352405(this.host, this.client_id, this.client_secret).then(_0x43aaff => {
        {
          if (_0x43aaff.success) _0x7746c7.Authorization = (_0x43aaff.data.token_type || "") + " " + (_0x43aaff.data.token || "");else {
            s.reply("autapi 连接失败，请检查 jusapi.js(nodejs) 配参");
            _0x4ef8d3();
          }
          rebug("【AutAPI】 " + this.host + " - " + _0x7746c7.Authorization, true);
          _0x490786(this);
        }
      }).catch(_0x4c9618 => console.error(_0x4c9618));
    });
  }
}
class QingLong {
  constructor(..._0x1c0454) {
    if (!_0x1c0454[0]) return rebug("青龙连接失败，请检查青龙配置", false);else {
      if (_0x1c0454.length == 3) var [_0x5c2961, _0x131dca, _0x52d7f8] = _0x1c0454;else {
        if (_0x1c0454.length == 1 && ["host", "client_id", "client_secret"].every(_0x16026b => _0x16026b in _0x1c0454[0])) var {
          host: _0x5c2961,
          client_id: _0x131dca,
          client_secret: _0x52d7f8
        } = _0x1c0454[0];else {
          console.error("【QingLong】输入参数有误:", JSON.stringify(_0x1c0454));
        }
      }
    }
    if (!(_0x5c2961 && _0x131dca && _0x52d7f8)) {
      console.error("【QingLong】输入参数有误:", JSON.stringify(_0x1c0454));
      throw new Error("青龙连接失败，详见实时日志");
    }
    const _0x1b84d4 = new Object({
      "Content-Type": "application/json;charset=UTF-8"
    });
    this.getScripts = () => this.version < "2.12" ? _0x3b72c8({
      "url": _0x5c2961 + "/open/scripts/files?t=" + Date.now()
    }) : _0x3b72c8({
      "url": _0x5c2961 + "/open/scripts?t=" + Date.now()
    });
    this.getScript = (_0x3d8f3c, _0x1eecb1) => this.version < "2.12" ? _0x3b72c8({
      "url": _0x5c2961 + "/open/scripts/" + _0x3d8f3c + "?path=" + _0x1eecb1 + "&t=" + Date.now()
    }) : _0x3b72c8({
      "url": _0x5c2961 + "/open/scripts/detail?file=" + _0x3d8f3c + "&path=" + _0x1eecb1 + "&t=" + Date.now()
    });
    this.getCrons = (_0x225d42 = "") => _0x3b72c8({
      "url": _0x5c2961 + "/open/crons?searchValue=" + encodeURIComponent(_0x225d42) + "&t=" + Date.now()
    });
    this.putCron = function (_0x2a42c7 = {
      "id": id,
      "name": name,
      "command": command,
      "schedule": schedule,
      "labels": labels,
      "extra_schedules": extra_schedules,
      "task_after": task_after,
      "task_before": task_before
    }) {
      {
        let {
          id: _0xa0cde4,
          name: _0x4603db,
          command: _0x354830,
          schedule: _0xf1d15f,
          labels: _0x54056c,
          extra_schedules: _0x1ecc26,
          task_after: _0x33a233,
          task_before: _0x4a87fd
        } = _0x2a42c7;
        return _0x3b72c8({
          "url": _0x5c2961 + "/open/crons?t=" + Date.now(),
          "method": "put",
          "data": {
            "id": _0xa0cde4,
            "name": _0x4603db,
            "command": _0x354830,
            "schedule": _0xf1d15f,
            "labels": _0x54056c || [],
            "extra_schedules": _0x1ecc26 || null,
            "task_after": _0x33a233 || null,
            "task_before": _0x4a87fd || null
          }
        });
      }
    };
    this.delCrons = function (..._0x567076) {
      let _0x1b5a72;
      if (_0x567076.length == 1) {
        if (Array.isArray(_0x567076[0])) _0x1b5a72 = _0x567076[0];else _0x1b5a72 = [_0x567076[0]];
      } else {
        _0x1b5a72 = _0x567076;
      }
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/crons?t=" + Date.now(),
        "method": "DELETE",
        "data": _0x1b5a72
      });
    };
    this.runCrons = function (..._0x3b5151) {
      let _0x156933;
      if (_0x3b5151.length == 1) {
        {
          if (Array.isArray(_0x3b5151[0])) _0x156933 = _0x3b5151[0];else _0x156933 = [_0x3b5151[0]];
        }
      } else _0x156933 = _0x3b5151;
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/crons/run?t=" + Date.now(),
        "method": "put",
        "data": _0x156933
      });
    };
    this.stopCrons = function (..._0x151a77) {
      {
        let _0x2f2f97;
        if (_0x151a77.length == 1) {
          if (Array.isArray(_0x151a77[0])) _0x2f2f97 = _0x151a77[0];else _0x2f2f97 = [_0x151a77[0]];
        } else {
          _0x2f2f97 = _0x151a77;
        }
        return _0x3b72c8({
          "url": _0x5c2961 + "/open/crons/stop?t=" + Date.now(),
          "method": "put",
          "data": _0x2f2f97
        });
      }
    };
    this.disCrons = function (..._0x3c8e95) {
      let _0x88e2e1;
      if (_0x3c8e95.length == 1) {
        if (Array.isArray(_0x3c8e95[0])) _0x88e2e1 = _0x3c8e95[0];else _0x88e2e1 = [_0x3c8e95[0]];
      } else _0x88e2e1 = _0x3c8e95;
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/crons/disable?t=" + Date.now(),
        "method": "put",
        "data": _0x88e2e1
      });
    };
    this.enCrons = function (..._0x1d303f) {
      let _0x3da951;
      if (_0x1d303f.length == 1) {
        if (Array.isArray(_0x1d303f[0])) _0x3da951 = _0x1d303f[0];else _0x3da951 = [_0x1d303f[0]];
      } else {
        _0x3da951 = _0x1d303f;
      }
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/crons/enable?t=" + Date.now(),
        "method": "put",
        "data": _0x3da951
      });
    };
    this.getLog = function (_0x4430c6 = "") {
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/crons/" + _0x4430c6 + "/log?t=" + Date.now()
      });
    };
    this.getEnvs = function (_0x1e7c61 = "") {
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/envs?searchValue=" + encodeURIComponent(_0x1e7c61) + "&t=" + Date.now()
      });
    };
    this.createEnvs = function (..._0xcb45e9) {
      {
        let _0x310d84;
        if (_0xcb45e9.length == 3 && _0xcb45e9.every(_0xee84cc => typeof _0xee84cc == "string" || typeof _0xee84cc == "number")) _0x310d84 = [{
          "name": _0xcb45e9[0],
          "value": _0xcb45e9[1],
          "remarks": _0xcb45e9[2]
        }];else {
          if (_0xcb45e9.every(_0xc11ce6 => Array.isArray(_0xc11ce6) && _0xc11ce6.every(_0x35b87b => Object.keys(_0x35b87b).every(_0x432590 => ["name", "value", "remarks"].includes(_0x432590))))) _0x310d84 = _0xcb45e9.flat();else {
            if (_0xcb45e9.every(_0x52afc5 => typeof _0x52afc5 == "object" && Object.keys(_0x52afc5).every(_0x24e005 => ["name", "value", "remarks"].includes(_0x24e005)))) _0x310d84 = _0xcb45e9;else return rebug("【QingLong/createEnvs】入参有误: " + JSON.stringify(_0xcb45e9));
          }
        }
        return _0x3b72c8({
          "url": _0x5c2961 + "/open/envs?t=" + Date.now(),
          "method": "post",
          "data": _0x310d84
        });
      }
    };
    this.putEnv = function (..._0x7cc315) {
      let _0x5c60b7;
      if (_0x7cc315.length == 4 && _0x7cc315.every(_0x278ebb => typeof _0x278ebb == "string" || typeof _0x278ebb == "number")) _0x5c60b7 = {
        "id": _0x7cc315[0],
        "name": _0x7cc315[1],
        "value": _0x7cc315[2],
        "remarks": _0x7cc315[3]
      };else {
        if (_0x7cc315.length == 1 && ["id", "name", "value", "remarks"].every(_0x33cc69 => Object.keys(_0x7cc315[0]).includes(_0x33cc69))) _0x5c60b7 = {
          "id": _0x7cc315[0].id,
          "name": _0x7cc315[0].name,
          "value": _0x7cc315[0].value,
          "remarks": _0x7cc315[0].remarks
        };else return rebug("【QingLong/putEnv】入参有误: " + JSON.stringify(_0x7cc315));
      }
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/envs?t=" + Date.now(),
        "method": "put",
        "data": _0x5c60b7
      });
    };
    this.delEnvs = function (..._0x4c7524) {
      let _0x4d85fa;
      if (_0x4c7524.every(_0x12197f => typeof _0x12197f == "number" || typeof _0x12197f == "string" && _0x12197f + 1)) _0x4d85fa = _0x4c7524;else {
        if (_0x4c7524.length == 1 && typeof _0x4c7524[0] == "string" && /^\d+(,\d+)*$/.test(_0x4c7524[0])) _0x4d85fa = _0x4c7524[0].split(",");else {
          if (_0x4c7524.length == 1 && Array.isArray(_0x4c7524[0]) && _0x4c7524[0].every(_0x68a36f => typeof _0x68a36f == "number" || typeof +_0x68a36f == "number")) _0x4d85fa = _0x4c7524[0];else return rebug("【QingLong/delEnvs】入参有误: " + JSON.stringify(_0x4c7524));
        }
      }
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/envs?t=" + Date.now(),
        "method": "delete",
        "data": JSON.stringify(_0x4d85fa)
      });
    };
    function _0x26a104(_0x14c053, _0x36c1e5, _0x4c5d7f) {
      return _0x3b72c8({
        "url": _0x14c053 + "/open/auth/token?client_id=" + _0x36c1e5 + "&client_secret=" + _0x4c5d7f
      });
    }
    function _0xa5d96b() {
      return _0x3b72c8({
        "url": _0x5c2961 + "/open/system"
      });
    }
    function _0x3b72c8(_0x5d3b93) {
      _0x5d3b93.headers = {
        ..._0x1b84d4,
        ..._0x5d3b93.headers
      };
      return axios({
        ...{
          "method": "get",
          "timeout": 3000
        },
        ..._0x5d3b93
      }).then(({
        status: _0x149443,
        statusText: _0x5e8d6f,
        headers: _0x41185f,
        config: _0x226c08,
        request: _0x2c48d7,
        data: _0x2a59e7
      }) => rebug("【QingLong/" + _0x226c08.method + "/" + new URL(_0x226c08.url).pathname.split("/").pop() + "】" + (_0x2a59e7?.["code"] || _0x149443) + " - " + _0x5e8d6f, true, _0x149443, _0x2a59e7?.["data"] || _0x2a59e7)).catch(({
        message: _0xd13b03,
        name: _0x5537f3,
        code: _0x29ba53,
        config: _0x5996ee,
        request: _0x5919c0,
        response: _0x582d97
      }) => rebug("【QingLong/" + _0x5996ee.method + "/" + new URL(_0x5996ee.url).pathname.split("/").pop() + "】[" + _0x5537f3 + "]" + (_0x582d97?.["data"]?.["code"] || _0x582d97?.["status"] || _0x29ba53) + " - " + (_0x582d97?.["data"]?.["message"] || _0x582d97?.["statusText"] || _0xd13b03), false, _0x582d97?.["data"]?.["code"] || _0x582d97?.["status"] || _0x29ba53, _0x582d97?.["data"]));
    }
    return new Promise(async (_0x365bc7, _0x3c192e) => {
      rebug("【QingLong】连接青龙：" + _0x5c2961, 1);
      await _0x26a104(_0x5c2961, _0x131dca, _0x52d7f8).then(_0x247d41 => {
        if (_0x247d41.code !== 200) _0x3c192e(_0x247d41.message);
        this.host = _0x5c2961;
        _0x1b84d4.Authorization = _0x247d41.data?.["token_type"] + " " + _0x247d41.data?.["token"];
        rebug("【QingLong】Authorization: " + _0x1b84d4.Authorization);
        _0xa5d96b().then(({
          message: _0x592260,
          success: _0x231f02,
          code: _0x5c7938,
          data: _0x226ec9
        }) => {
          if (_0x5c7938 !== 200) _0x3c192e(_0x592260);
          this.isInitialized = _0x226ec9?.["isInitialized"];
          this.version = _0x226ec9?.["version"];
          this.publishTime = _0x226ec9?.["publishTime"];
          this.branch = _0x226ec9?.["branch"];
          this.changeLog = _0x226ec9?.["changeLog"];
          this.changeLogLink = _0x226ec9?.["changeLogLink"];
          this.success = _0x231f02;
          this.code = _0x5c7938;
          rebug("【QingLong】isInitialized: " + this.isInitialized, 1);
          rebug("【QingLong】version: " + this.version, 1);
          rebug("【QingLong】publishTime: " + this.publishTime, 1);
          rebug("【QingLong】branch: " + this.branch, 1);
          rebug("【QingLong】changeLog: " + this.changeLog, 1);
          rebug("【QingLong】changeLogLink: " + this.changeLogLink, 1);
          _0x365bc7(this);
        });
      });
    });
  }
}
async function getQLS(_0x21da8c = null) {
  let _0x57ccdf = new Array(),
    _0x12d240 = await s.bucketAllKeys("qls");
  if (Array.isArray(_0x12d240) && _0x12d240.length) {
    for (let _0x537b06 of _0x12d240) _0x57ccdf.push(JSON.parse(await s.bucketGet("qls", _0x537b06)));
  } else try {
    _0x57ccdf = JSON.parse(await s.bucketGet("qinglong", "QLS"));
  } catch (_0x4c356d) {
    return rebug("【jusapi】【getQLS】青龙列表读取错误，请检查系统配置或权限", 0);
  }
  if (_0x21da8c) _0x57ccdf = _0x57ccdf.filter(_0x24b3a6 => _0x24b3a6.name.includes(_0x21da8c));
  if (_0x57ccdf.length && _0x57ccdf[0]) return rebug("【getQLS】查找青龙：" + (_0x21da8c ? _0x21da8c : "ALL"), true, 200, _0x57ccdf);else return rebug("【getQLS】未查找青龙：" + (_0x21da8c ? _0x21da8c : "ALL") + "，请检查名称或权限", false, 404, _0x57ccdf);
}
class WxPusher {
  constructor(_0x1bae14) {
    this.appToken = _0x1bae14;
    if (!_0x1bae14) return rebug("请设置 appToken");
    if (typeof _0x1bae14 != "string") return rebug("appToken 格式错误: " + _0x1bae14);
    this.getUID = async function () {
      {
        let _0x24cf9c = await this.create_qrcode("by jusapi"),
          _0x199aee;
        if (!_0x24cf9c.success) return rebug("【WxPusher/getUID】获取二维码失败: " + _0x24cf9c.message);
        let _0x4dd62c = s.reply("请在 " + module.exports.inputTime + " 秒内使用微信扫描二维码（q 取消）:"),
          _0x39468d = s.replyImage(_0x24cf9c.data.url),
          _0x4d52c9;
        for (let _0x4048d8 = 0; _0x4048d8 < module.exports.inputTime; _0x4048d8 += 10) {
          _0x4d52c9 = await s.input(10000, 1, false).then(_0x1c6bc6 => {
            {
              if (!_0x1c6bc6) return rebug("【inputReg】 输入超时", true, 408, e);
              if (/^q$/i.test(_0x1c6bc6)) return rebug("【inputReg】 用户取消");
              if (reg) {
                if (!reg.test(_0x1c6bc6)) return rebug("【inputReg】 输入错误（" + reg + "）: " + _0x1c6bc6, false, 401, _0x1c6bc6);
              }
              return rebug("【inputReg】 输入: " + _0x1c6bc6, true, 200, _0x1c6bc6);
            }
          }).catch(_0x7d3940 => rebug("【inputReg】 输入超时", false, 408, _0x7d3940));
          _0x199aee = await this.scan_qrcode_uid(_0x24cf9c.data.code);
          if (_0x199aee.success) return s.recallMessage(_0x4dd62c), s.recallMessage(_0x39468d), _0x199aee;else {
            if (_0x4d52c9.code != 408) return s.recallMessage(_0x4dd62c), s.recallMessage(_0x39468d), _0x4d52c9;
          }
        }
      }
    };
    this.create_qrcode = function (_0x2ce674, _0x21b923 = module.exports.inputTime) {
      {
        if (!_0x2ce674 || typeof _0x2ce674 != "string") return rebug("【WxPusher/create/qrcode】extra 格式错误: " + _0x2ce674);
        return _0x1896e8({
          "url": "https://wxpusher.zjiecode.com/api/fun/create/qrcode",
          "method": "post",
          "data": {
            "appToken": _0x1bae14,
            "extra": _0x2ce674,
            "validTime": _0x21b923
          }
        });
      }
    };
    this.scan_qrcode_uid = function (_0x4ba711) {
      if (!_0x4ba711 || typeof _0x4ba711 != "string") return rebug("【WxPusher/fun/scan-qrcode-uid】code 格式错误: " + _0x4ba711);
      return _0x1896e8({
        "url": "https://wxpusher.zjiecode.com/api/fun/scan-qrcode-uid?code=" + _0x4ba711
      });
    };
    function _0x1896e8(_0x50d6ca) {
      return axios(_0x50d6ca).then(({
        status: _0xa9dcba,
        statusText: _0x54b57a,
        headers: _0x54808c,
        config: _0x2670e9,
        request: _0x2027ee,
        data: {
          code: _0x3c8bfa,
          msg: _0x27d6bc,
          data: _0x261976,
          success: _0x565bb5
        }
      }) => rebug("【WxPusher/" + new URL(_0x2670e9.url).pathname.split("/").slice(-2).join("/") + "】" + (_0x27d6bc || _0x54b57a), _0x565bb5, _0x3c8bfa || _0xa9dcba, _0x261976)).catch(({
        hostname: _0x47a245,
        syscall: _0xea9b5f,
        code: _0x11f5b2,
        errno: _0x462ff8,
        message: _0xf77bfd,
        stack: _0x46e91e,
        name: _0x174476,
        config: _0x1737be,
        request: _0x5225be
      }) => rebug("【WxPusher/" + new URL(_0x1737be.url).pathname.split("/").slice(-2).join("/") + "】" + ("[" + _0x174476 + "]" + _0x462ff8 + " - " + _0x11f5b2 + ", " + _0xf77bfd)));
    }
    return this;
  }
}
class DDDDOCR {
  constructor(_0x130187 = null) {
    this.capcode = function (_0x147b86 = {
      "slidingImage": null,
      "backImage": null,
      "simple_target": null
    }) {
      return _0x23f7eb({
        "url": this.host + "/capcode",
        "method": "post",
        "data": _0x147b86
      });
    };
    this.classification = function (_0x2b31b0 = {
      "image": null
    }) {
      return _0x23f7eb({
        "url": this.host + "/classification",
        "method": "post",
        "data": _0x2b31b0
      });
    };
    this.detection = function (_0x2e2ef3 = {
      "image": null
    }) {
      return _0x23f7eb({
        "url": this.host + "/detection",
        "method": "post",
        "data": _0x2e2ef3
      });
    };
    this.calculate = function (_0x2e3e46 = {
      "image": null
    }) {
      return _0x23f7eb({
        "url": this.host + "/calculate",
        "method": "post",
        "data": _0x2e3e46
      });
    };
    this.slideComparison = function (_0x503677 = {
      "slidingImage": null,
      "backImage": null
    }) {
      return _0x23f7eb({
        "url": this.host + "/slideComparison",
        "method": "post",
        "data": _0x503677
      });
    };
    this.crop = function (_0x2283d2 = {
      "image": null,
      "y_coordinate": null
    }) {
      return _0x23f7eb({
        "url": this.host + "/crop",
        "method": "post",
        "data": _0x2283d2
      });
    };
    this.select = function (_0x2fe16d = {
      "image": null
    }) {
      return _0x23f7eb({
        "url": this.host + "/select",
        "method": "post",
        "data": _0x2fe16d
      });
    };
    function _0x23f7eb(_0x14dd4b) {
      _0x14dd4b.headers = {
        ...{
          "Content-Type": "application/json"
        },
        ..._0x14dd4b.headers
      };
      return axios({
        ...{
          "method": "get"
        },
        ..._0x14dd4b
      }).then(({
        status: _0x265c7e,
        statusText: _0x1b9455,
        headers: _0x1d4f71,
        config: _0x21abe9,
        request: _0x2599b9,
        data: _0x3b2472
      }) => rebug("【 DDDDOCR/" + new URL(_0x21abe9.url).pathname.split("/").pop() + " 】" + _0x265c7e + " - " + _0x1b9455, true, _0x265c7e, _0x3b2472)).catch(({
        message: _0x2ae6ac,
        name: _0x37db49,
        code: _0x2449d5,
        config: _0x4d6447,
        request: _0x3bee1c,
        response: _0x1a757e
      }) => rebug("【 DDDDOCR/" + new URL(_0x4d6447.url).pathname.split("/").pop() + " 】[" + _0x37db49 + "]" + _0x2449d5 + " - " + _0x2ae6ac, false, _0x2449d5, null));
    }
    return new Promise(async (_0x575e7d, _0x366e31) => {
      this.host = _0x130187 || (await middleware.bucketGet("jusapi", "ddddocr"));
      this.host || _0x366e31("【 DDDDOCR 】请设置配参 ddddocr")(await _0x23f7eb({
        "url": this.host
      })).code == 200 ? _0x575e7d(this) : _0x366e31("【 DDDDOCR 】DDDDOCR 连接失败");
    });
  }
}
async function sendNotify(_0x3d05c3, _0x1f7a81) {
  if (!/([a-z]+:[a-z\d\-]+,?)+/.test(_0x3d05c3)) return rebug("【sendNotify】目标参数格式错误", false, 401, _0x1f7a81);
  await Promise.all(_0x3d05c3.split(",").map(_0x1992ac => {
    const [_0x51f8f3, _0x412906] = _0x1992ac.split(":");
    return {
      "im": _0x51f8f3,
      "id": _0x412906
    };
  }).map(_0x511680 => {
    if (_0x511680.im) {
      {
        let _0x16b5a9, _0x2c6235, _0x687e36;
        _0x16b5a9 = /^.*(?=(group|indiv))/i.exec(_0x511680.im)[0];
        _0x2c6235 = /group/i.test(_0x511680.im) ? _0x511680.id : null;
        _0x687e36 = /indiv/i.test(_0x511680.im) ? _0x511680.id : null;
        rebug("【sendNotify】[" + _0x16b5a9 + "]" + _0x511680.id + " 开始推送", true);
        try {
          return middleware.push(_0x16b5a9, _0x2c6235, _0x687e36, "", _0x1f7a81);
        } catch (_0x1fd712) {
          rebug("【sendNotify】[" + _0x16b5a9 + "]" + _0x511680.id + " 推送异常");
        }
      }
    }
  }));
  return rebug("【sendNotify】推送完成", true, 200, _0x1f7a81);
}
function rebug(_0x2226b3, _0x1322c3 = false, _0x81a6d9 = 0, _0x51b9e4 = null, _0x71c7c4 = null) {
  let _0x4da84f = /^【.*】\s?/.exec(_0x2226b3);
  _0x4da84f = _0x4da84f ? _0x4da84f[0] : "【rebug】";
  let _0x4c912b = _0x2226b3.replace(/^【[^】]+】/, "");
  if (module.exports.isDebug) {
    let _0x3bea8f = typeof _0x2226b3;
    if (_0x3bea8f == "object") {
      if (Array.isArray(_0x2226b3)) {
        _0x3bea8f = "array";
      } else {
        if (_0x2226b3 instanceof RegExp) _0x3bea8f = "regexp";else _0x2226b3 == null && (_0x3bea8f = "null");
      }
    }
    if (_0x1322c3) {
      console.log("[40;32m", _0x4da84f, "[42;30m", _0x3bea8f, ":", _0x4c912b, "[0m");
    } else {
      console.error(_0x2226b3);
    }
  }
  return {
    "message": _0x71c7c4 || _0x4c912b.replace(/^【.+?】 /, ""),
    "success": _0x1322c3,
    "code": _0x81a6d9,
    "data": _0x51b9e4
  };
}
async function encodeQR(_0x480ce0) {
  const _0x31fb32 = await new AutAPI(),
    [_0xec8078, _0x59850e] = await _0x31fb32.require("qr-image", "uuid"),
    _0x25e524 = _0x59850e.v4() + ".png",
    _0x4e9f4b = await middleware.bucketGet("jusapi", "host"),
    _0x546091 = _0x4e9f4b + "/tmp/static/" + _0x25e524,
    _0x2bf841 = path.resolve("../web/tmp/static") + "/" + _0x25e524,
    _0x20efd6 = _0xec8078.image(_0x480ce0, {
      "ec_level": "H",
      "type": "png",
      "size": 10
    });
  _0x20efd6.pipe(fs.createWriteStream(_0x2bf841));
  return rebug("【 encodeQR 】URL: " + _0x546091 + "，本地路径: " + _0x2bf841, true, 200, {
    "local": _0x2bf841,
    "lan": _0x546091
  });
}
async function resend(_0x138865, _0x12a1f5 = false, _0x50fa53 = 0, _0x3dae53 = null) {
  const _0x5c7204 = await s.reply(_0x138865);
  if (module.exports.recallTime && _0x5c7204) setTimeout(() => {
    s.recallMessage(_0x5c7204[0]).catch(_0xa2ee => rebug("【 resend 】撤回用户消息失败"));
  }, module.exports.recallTime * 1000);
  return rebug("【 resend 】 success: " + _0x12a1f5, _0x12a1f5, _0x50fa53, _0x3dae53);
}
async function inputReg(_0x4316c5 = null, _0x3da1b8 = null) {
  module.exports.recallTime && _0x4316c5 && s.recallMessage(await s.getMessageID()).catch(_0x53dcf5 => rebug("【 inputReg 】撤回用户消息失败"));
  try {
    var _0xc0ecee = _0x4316c5 ? s.reply(_0x4316c5) : null;
  } catch (_0x6c62bb) {
    return rebug("【inputReg】 系统错误", false, 500, _0x6c62bb);
  }
  let _0x4b81f3 = await s.input(module.exports.inputTime * 1000, 1, false).then(_0x230543 => {
    if (!_0x230543) return rebug("【inputReg】 输入超时", true, 408, e);
    if (/^q$/i.test(_0x230543)) return rebug("【inputReg】 用户取消");
    if (_0x3da1b8) {
      if (!_0x3da1b8.test(_0x230543)) return rebug("【inputReg】 输入错误（" + _0x3da1b8 + "）: " + _0x230543, false, 401, _0x230543);
    }
    return rebug("【inputReg】 输入: " + _0x230543, true, 200, _0x230543);
  }).catch(_0x296bd8 => rebug("【inputReg】 输入超时", false, 408, _0x296bd8));
  module.exports.recallTime && _0x4316c5 && (rebug("【 inputReg 】撤回 tip"), s.recallMessage(_0xc0ecee?.[0]).catch(_0xddb34 => rebug("【 inputReg 】撤回机器人消息失败，ID: " + _0xc0ecee?.[0])), s.recallMessage(await s.getMessageID()).catch(_0x4bf6d5 => rebug("【 inputReg 】撤回用户消息失败")));
  return _0x4b81f3;
}
async function waitPay(_0x185d90 = null) {
  let _0x48f897 = module.exports.appreciate;
  if (!_0x48f897) return rebug("【waitPay】 获取收款码失败", false, 502, false);
  if (await s.atWaitPay()) return rebug("【waitPay】 他人支付中，请稍后重试", false, 503, false);
  const _0x3fb353 = await s.getImtype();
  if (/^(qb)|(tb)|(ds)|(kk)|(dd)|(ss)$/i.test(_0x3fb353)) {
    rebug("【waitPay】 当前平台【" + _0x3fb353 + "】需要转链", 1);
    _0x48f897 = await img2aut(_0x48f897);
    if (_0x48f897.success) _0x48f897 = _0x48f897.data;else return _0x48f897;
  }
  const _0x3da8ea = _0x185d90 || "请在 " + module.exports.payTime + " 秒内使用微信扫码完成支付（q 退出）";
  try {
    var _0x59a402 = await s.reply(_0x3da8ea),
      _0xee8444 = await s.replyImage(_0x48f897);
  } catch (_0x5d8a55) {
    return rebug("【 waitPay 】 系统错误", false, 500, _0x5d8a55);
  }
  rebug("【waitPay】 等待支付，收款码: " + _0x48f897, 1);
  let _0x3a5b25;
  const _0x4bd1dc = await s.waitPay("q", module.exports.payTime * 1000).then(async _0x20e1ad => {
    _0x3a5b25 = await s.getMessageID();
    const {
        Time: _0xa42274,
        time: _0x118b04,
        Type: _0x4ab1d0,
        type: _0x160753,
        FromWxid: _0x4cab2c,
        from_id: _0x59a161,
        FromName: _0x1c25b8,
        from_name: _0x3068ba,
        Money: _0x153d35,
        money: _0x36229f
      } = _0x20e1ad,
      _0x3950ef = {
        "Time": _0x118b04 ?? _0xa42274,
        "Type": _0x160753 ?? _0x4ab1d0,
        "FromWxid": _0x59a161 ?? _0x4cab2c,
        "FromName": _0x3068ba ?? _0x1c25b8,
        "Money": _0x36229f ?? _0x153d35,
        "time": _0x118b04 ?? _0xa42274,
        "type": _0x160753 ?? _0x4ab1d0,
        "from_id": _0x59a161 ?? _0x4cab2c,
        "from_name": _0x3068ba ?? _0x1c25b8,
        "money": _0x36229f ?? _0x153d35
      },
      _0x31b767 = {
        ..._0x3950ef,
        ..._0x20e1ad
      };
    if (!_0x3950ef.Money > 0) {
      rebug(JSON.stringify(_0x31b767));
      return rebug("【waitPay】退出", false, 0, "退出");
    } else return rebug("【waitPay】支付完成", true, 200, _0x31b767);
  }).catch(_0x24849a => {
    if (_0x24849a.data) return rebug("【waitPay_ed】" + _0x24849a.data.message, false, _0x24849a.data.status, _0x24849a.data);else return rebug("【waitPay_e】" + _0x24849a.message, false, _0x24849a.status || _0x24849a.code, _0x24849a);
  });
  module.exports.recallTime && _0x59a402 && (await s.recallMessage(_0x3a5b25), await s.recallMessage(_0xee8444[0]), await s.recallMessage(_0x59a402[0]));
  return _0x4bd1dc;
}
async function img2aut(_0x48c42f) {
  const _0x2ba75f = await file2stream(_0x48c42f);
  if (_0x2ba75f.success == false) return rebug("【 img2aut 】 读取文件失败", false, 0, null);
  const _0x3b4f84 = await s.bucketGet("cloud", "username"),
    _0x1e9b2e = await s.bucketGet("cloud", "password");
  if (!(_0x3b4f84 && _0x1e9b2e)) return rebug("【 img2aut 】 获取 autman 账号失败", false, 0, null);
  const _0x2bdb99 = new FormData();
  _0x2bdb99.append("imgfile", _0x2ba75f.data);
  _0x2bdb99.append("username", _0x3b4f84);
  _0x2bdb99.append("password", _0x1e9b2e);
  return await axios({
    "method": "post",
    "url": "http://aut.zhelee.cn/imgUpload",
    "headers": {
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      ..._0x2bdb99.getHeaders()
    },
    "data": _0x2bdb99
  }).then(function (_0x36f0e0) {
    return rebug("【 img2aut 】 " + _0x36f0e0.data.msg, _0x36f0e0.data.code == 200, _0x36f0e0.data.code, _0x36f0e0.data.code == 200 ? _0x36f0e0.data.result.path : _0x36f0e0.data);
  }).catch(function (_0x41a8af) {
    return rebug("【 img2aut 】 " + JSON.stringify(_0x41a8af), false, 0, _0x41a8af);
  });
}
async function file2stream(_0x5c3623) {
  let _0x1c7302;
  if (isURL(encodeURI(_0x5c3623))) {
    const _0x23503f = await axios.get(encodeURI(_0x5c3623), {
      "responseType": "stream"
    });
    _0x1c7302 = _0x23503f.data;
    return rebug("【 file2stream 】 网络文件: " + (_0x23503f.code || _0x23503f.status) + "} - " + (_0x23503f.message || _0x23503f.status || ""), true, _0x23503f.code || _0x23503f.status, _0x1c7302 || _0x23503f);
  } else {
    if (fs.existsSync(encodeURI(_0x5c3623))) return await fs.promises.readFile(encodeURI(_0x5c3623), "utf8").then(_0x5e280b => rebug("【 file2stream 】 本地文件 - 读取文件成功", true, 1, _0x5e280b)).catch(_0x5a0f3e => rebug("【 file2stream 】 本地文件:" + _0x5a0f3e.name + "[" + _0x5a0f3e.code + "] - " + _0x5a0f3e.message));else {
      if (isBase64(_0x5c3623)) {
        {
          const _0xf473fe = Buffer.from(_0x5c3623, "base64");
          return await fs.promises.readFile(_0xf473fe, "utf8").then(_0x479983 => rebug("【 file2stream 】 BASE64文件 - 读取文件成功", true, 1, _0x479983)).catch(_0x518f33 => rebug("【 file2stream 】 BASE64文件:" + _0x518f33.name + "[" + _0x518f33.code + "] - " + _0x518f33.message));
        }
      } else {
        if (_0x5c3623 instanceof stream.Readable) {
          _0x1c7302 = _0x5c3623;
          return rebug("【 file2stream 】 文件流", true, 1, _0x1c7302);
        } else return rebug("【 file2stream 】 Unsupported image source type", false, 0, _0x5c3623);
      }
    }
  }
}
async function file2local(_0x529ed3) {}
function isURL(_0x3c0f1c) {
  try {
    new URL(_0x3c0f1c);
    return true;
  } catch (_0x2cb07d) {
    return false;
  }
}
function isBase64(_0x1bc778) {
  try {
    return Buffer.from(_0x1bc778, "base64").toString("base64") === _0x1bc778;
  } catch (_0x3ab5b9) {
    return false;
  }
}
async function sendFile(_0x16afd0, _0x78fa99 = undefined) {
  const _0x49aa73 = await s.getImtype();
  !_0x78fa99 && (_0x78fa99 = /(?<=[\/\\]?)[^\/\\]+?\.\w+$/.exec(_0x16afd0), _0x78fa99 = _0x78fa99 ? _0x78fa99[0] : "未知文件 by jusapi");
  _0x78fa99 = decodeURI(_0x78fa99);
  rebug("【 sendFile 】" + _0x49aa73 + " - 发送文件: " + _0x78fa99, 1);
  if (/^qq$/i.test(_0x49aa73)) return await s.reply("[CQ:file,file=" + _0x16afd0 + "]").then(_0x6ea661 => rebug("【 sendFile 】" + _0x49aa73 + " 发送完成", true, 200, _0x6ea661[0]));
  if (/^wx$/i.test(_0x49aa73)) return await xyo_sendFile(_0x16afd0, _0x78fa99);
  const _0xe80b32 = await file2stream(_0x16afd0);
  if (_0xe80b32.success == false) return rebug("【 sendFile 】" + _0x49aa73 + " - 读取文件失败");
  if (/^tb$/i.test(_0x49aa73)) return await tb_sendFile(_0xe80b32.data, _0x78fa99);else {
    if (/^dc$/i.test(_0x49aa73)) return await dc_sendFile(_0xe80b32.data, _0x78fa99);else {
      if (/^sk$/i.test(_0x49aa73)) return await sk_sendFile(_0xe80b32.data, _0x78fa99);else {
        if (/^kk$/i.test(_0x49aa73)) return await kk_sendFile(_0xe80b32.data, _0x78fa99);else return await s.reply("[CQ:file,file=" + _0x16afd0 + "]");
      }
    }
  }
}
async function xyo_sendFile(_0x1cd93f, _0x2cff68, _0x1dee00 = "", _0x3898a4 = "", _0x5f22ee = "", _0xa4f1c5 = "") {
  const _0x41289a = await file2win(_0x1cd93f, _0x2cff68),
    _0x432152 = await s.getImtype();
  if (!_0x41289a.success) return rebug("【 xyo_sendFile 】" + _0x432152 + " - 上传文件失败");
  const _0x5596ef = _0x3898a4 || (await middleware.bucketGet("wx", "vlw_addr")),
    _0x28dbf6 = _0x5f22ee || (await middleware.bucketGet("wx", "vlw_token")),
    _0x7f9f49 = _0xa4f1c5 || (await middleware.bucketGet("wx", "robot_wxid"));
  if (!(_0x7f9f49 && _0x5596ef && _0x28dbf6)) return rebug("【 xyo_sendFile 】" + _0x432152 + " - 未获取到 vlw 配置");
  const _0x4c219e = await s.getChatID(),
    _0x165168 = _0x1dee00 || _0x4c219e ? _0x4c219e + "@chatroom" : await s.getUserID();
  return await axios({
    "url": _0x5596ef,
    "method": "post",
    "data": {
      "token": _0x28dbf6,
      "api": "SendFileMsg",
      "robot_wxid": _0x7f9f49,
      "to_wxid": _0x165168,
      "path": _0x41289a.data
    }
  }).then(_0x2d0991 => rebug("【 xyo_sendFile 】" + (_0x2d0991.code || _0x2d0991.status) + " - " + (_0x2d0991.message || _0x2d0991.statusText), true, _0x2d0991.code || _0x2d0991.status, _0x2d0991.data || _0x2d0991)).catch(_0x42592f => _0x42592f.response ? _0x42592f.response.data ? rebug("【 xyo_sendFile 】" + (_0x42592f.response.data.code || _0x42592f.response.data.status) + " - " + (_0x42592f.response.data.message || _0x42592f.response.data.statusText), false, _0x42592f.response.data.code || _0x42592f.response.data.status, _0x42592f.response.data) : rebug("【 xyo_sendFile 】" + (_0x42592f.response.code || _0x42592f.response.status) + " - " + (_0x42592f.response.message || _0x42592f.response.statusText), false, _0x42592f.response.code || _0x42592f.response.status, _0x42592f.response) : rebug("【 xyo_sendFile 】" + (_0x42592f.code || _0x42592f.status) + " - " + (_0x42592f.message || _0x42592f.statusText), false, _0x42592f.code || _0x42592f.status, _0x42592f));
}
async function kk_sendFile(_0xe9d5f0, _0x384172, _0x389273 = "", _0x5256ba = "") {
  const _0x573acd = _0x389273 || (await s.getChatID());
  if (!_0x573acd) return rebug("【 dc_sendFile 】未找到 channelId，目前仅支持群聊发送文件");
  const _0x44310c = _0x5256ba || (await middleware.bucketGet("kk", "token"));
  if (!_0x44310c) return rebug("【 kk_sendFile 】未找到 token");
  const _0x7e994 = new FormData();
  _0x7e994.append("file", _0xe9d5f0, {
    "filename": _0x384172
  });
  _0x7e994.append("target_id", _0x573acd);
  _0x7e994.append("guild_id", _0x573acd);
  const _0x5ad435 = await axios({
    "url": "https://www.kookapp.cn/api/v3/asset/create",
    "method": "post",
    "headers": {
      "Content-type": "form-data",
      "Authorization": "Bot " + _0x44310c
    },
    "data": _0x7e994
  }).then(_0x2e93a7 => _0x2e93a7.data ? rebug("【 kk_asset_create 】" + (_0x2e93a7.data.code + 1 ? _0x2e93a7.data.code : null) + " - " + (_0x2e93a7.data.message || _0x2e93a7.data.statusText), true, _0x2e93a7.data.code || _0x2e93a7.data.status, _0x2e93a7.data.data || _0x2e93a7.data) : rebug("【 kk_asset_create 】" + (_0x2e93a7.code || _0x2e93a7.status) + " - " + (_0x2e93a7.message || _0x2e93a7.statusText), true, _0x2e93a7.code || _0x2e93a7.status, _0x2e93a7.data || _0x2e93a7)).catch(_0x4c678f => _0x4c678f.response ? _0x4c678f.response.data ? rebug("【 kk_asset_create 】" + (_0x4c678f.response.data.code || _0x4c678f.response.data.status) + " - " + (_0x4c678f.response.data.message || _0x4c678f.response.data.statusText), false, _0x4c678f.response.data.code || _0x4c678f.response.data.status, _0x4c678f.response.data) : rebug("【 kk_asset_create 】" + (_0x4c678f.response.code || _0x4c678f.response.status) + " - " + (_0x4c678f.response.message || _0x4c678f.response.statusText), false, _0x4c678f.response.code || _0x4c678f.response.status, _0x4c678f.response) : rebug("【 kk_asset_create 】" + (_0x4c678f.code || _0x4c678f.status) + " - " + (_0x4c678f.message || _0x4c678f.statusText), false, _0x4c678f.code || _0x4c678f.status, _0x4c678f));
  if (!_0x5ad435.success || _0x5ad435.code) return _0x5ad435;
  rebug("【 kk_asset_create 】" + _0x5ad435.data.url, 1);
  return axios({
    "method": "post",
    "url": "https://www.kookapp.cn/api/v3/message/create",
    "headers": {
      "Content-type": "application/json",
      "Authorization": "Bot " + _0x44310c
    },
    "data": {
      "content": JSON.stringify([{
        "type": "card",
        "theme": "secondary",
        "size": "lg",
        "modules": [{
          "type": "file",
          "title": _0x384172,
          "src": _0x5ad435.data.url,
          "size": "?"
        }]
      }]),
      "target_id": _0x573acd,
      "type": 10
    }
  }).then(_0x566cb5 => _0x566cb5.data ? rebug("【 kk_asset_create 】" + (_0x566cb5.data.code + 1 ? _0x566cb5.data.code : null) + " - " + (_0x566cb5.data.message || _0x566cb5.data.statusText), true, _0x566cb5.data.code || _0x566cb5.data.status, _0x566cb5.data.data || _0x566cb5.data) : rebug("【 kk_asset_create 】" + (_0x566cb5.code || _0x566cb5.status) + " - " + (_0x566cb5.message || _0x566cb5.statusText), true, _0x566cb5.code || _0x566cb5.status, _0x566cb5.data || _0x566cb5)).catch(_0x2ec952 => _0x2ec952.response ? _0x2ec952.response.data ? rebug("【 kk_sendFile 】" + (_0x2ec952.response.data.code || _0x2ec952.response.data.status) + " - " + (_0x2ec952.response.data.message || _0x2ec952.response.data.statusText), false, _0x2ec952.response.data.code || _0x2ec952.response.data.status, _0x2ec952.response.data) : rebug("【 kk_sendFile 】" + (_0x2ec952.response.code || _0x2ec952.response.status) + " - " + (_0x2ec952.response.message || _0x2ec952.response.statusText), false, _0x2ec952.response.code || _0x2ec952.response.status, _0x2ec952.response) : rebug("【 kk_sendFile 】" + (_0x2ec952.code || _0x2ec952.status) + " - " + (_0x2ec952.message || _0x2ec952.statusText), false, _0x2ec952.code || _0x2ec952.status, _0x2ec952));
}
async function sk_sendFile(_0x208504, _0xa8898a, _0x37896d = "", _0x2a0128 = "") {
  const _0x203cef = _0x37896d || (await s.getChatID()) || (await s.getUserID()),
    _0x43c3b1 = _0x2a0128 || (await middleware.bucketGet("sk", "SLACK_BOT_TOKEN"));
  if (!_0x43c3b1) return rebug("【 sk_sendFile 】未找到 SLACK_BOT_TOKEN");
  const _0x1b9be2 = new FormData();
  _0x1b9be2.append("file", _0x208504, {
    "filename": _0xa8898a
  });
  _0x1b9be2.append("channels", _0x203cef);
  return axios({
    "method": "post",
    "url": "https://slack.com/api/files.upload",
    "headers": {
      "Content-Type": "multipart/form-data",
      "Authorization": "Bearer " + _0x43c3b1
    },
    "data": _0x1b9be2
  }).then(_0x143b08 => rebug("【 sk_sendFile 】" + (_0x143b08.code || _0x143b08.status) + " - " + (_0x143b08.message || _0x143b08.statusText), true, _0x143b08.code || _0x143b08.status, _0x143b08.data || _0x143b08)).catch(_0x391e5d => _0x391e5d.response ? _0x391e5d.response.data ? rebug("【 sk_sendFile 】" + (_0x391e5d.response.data.code || _0x391e5d.response.data.status) + " - " + (_0x391e5d.response.data.message || _0x391e5d.response.data.statusText), false, _0x391e5d.response.data.code || _0x391e5d.response.data.status, _0x391e5d.response.data) : rebug("【 sk_sendFile 】" + (_0x391e5d.response.code || _0x391e5d.response.status) + " - " + (_0x391e5d.response.message || _0x391e5d.response.statusText), false, _0x391e5d.response.code || _0x391e5d.response.status, _0x391e5d.response) : rebug("【 sk_sendFile 】" + (_0x391e5d.code || _0x391e5d.status) + " - " + (_0x391e5d.message || _0x391e5d.statusText), false, _0x391e5d.code || _0x391e5d.status, _0x391e5d));
}
async function dc_sendFile(_0x5f06ad, _0x36e18b, _0x1e6dea = "", _0x1035fa = "") {
  const _0x100cb6 = _0x1e6dea || (await s.getChatID());
  if (!_0x100cb6) return rebug("【 dc_sendFile 】未找到 channelId，目前仅支持群聊发送文件");
  const _0x2ceedb = _0x1035fa || (await middleware.bucketGet("dc", "token"));
  if (!_0x2ceedb) return rebug("【 dc_sendFile 】未找到 token");
  const _0x5aee7f = new FormData();
  _0x5aee7f.append("file", _0x5f06ad, {
    "filename": _0x36e18b
  });
  return await axios({
    "url": "https://discord.com/api/v9/channels/" + _0x100cb6 + "/messages",
    "method": "post",
    "headers": {
      "Content-Type": " multipart/form-data; boundary=" + _0x5aee7f.getBoundary(),
      "Authorization": "Bot " + _0x2ceedb
    },
    "data": _0x5aee7f
  }).then(_0x1eb0c9 => rebug("【 dc_sendFile 】" + (_0x1eb0c9.code || _0x1eb0c9.status) + " - " + (_0x1eb0c9.message || _0x1eb0c9.statusText), true, _0x1eb0c9.code || _0x1eb0c9.status, _0x1eb0c9.data || _0x1eb0c9)).catch(_0x551c34 => _0x551c34.response ? _0x551c34.response.data ? rebug("【 dc_sendFile 】" + (_0x551c34.response.data.code || _0x551c34.response.data.status) + " - " + (_0x551c34.response.data.message || _0x551c34.response.data.statusText), false, _0x551c34.response.data.code || _0x551c34.response.data.status, _0x551c34.response.data) : rebug("【 dc_sendFile 】" + (_0x551c34.response.code || _0x551c34.response.status) + " - " + (_0x551c34.response.message || _0x551c34.response.statusText), false, _0x551c34.response.code || _0x551c34.response.status, _0x551c34.response) : rebug("【 dc_sendFile 】" + (_0x551c34.code || _0x551c34.status) + " - " + (_0x551c34.message || _0x551c34.statusText), false, _0x551c34.code || _0x551c34.status, _0x551c34));
}
async function tb_sendFile(_0x3a9bcf, _0x474ce5, _0x1c1680 = "", _0x1a849a = "") {
  const _0x155b53 = _0x1c1680 || (await s.getChatID()) || (await s.getUserID()),
    _0x52297b = _0x1a849a || (await middleware.bucketGet("tb", "token"));
  if (!_0x52297b) return rebug("【 tb_sendFile 】未找到 token");
  const _0x3e65d5 = new FormData();
  _0x3e65d5.append("document", _0x3a9bcf, {
    "filename": _0x474ce5
  });
  return await axios.post("https://api.telegram.org/bot" + _0x52297b + "/sendDocument", _0x3e65d5, {
    "headers": {
      ..._0x3e65d5.getHeaders()
    },
    "params": {
      "chat_id": _0x155b53
    }
  }).then(_0x1fd901 => rebug("【 tb_sendFile 】" + (_0x1fd901.code || _0x1fd901.status) + " - " + (_0x1fd901.message || _0x1fd901.statusText), true, _0x1fd901.code || _0x1fd901.status, _0x1fd901.data || _0x1fd901)).catch(_0x1e4546 => _0x1e4546.response ? _0x1e4546.response.data ? rebug("【 tb_sendFile 】" + (_0x1e4546.response.data.code || _0x1e4546.response.data.status) + " - " + (_0x1e4546.response.data.message || _0x1e4546.response.data.statusText), false, _0x1e4546.response.data.code || _0x1e4546.response.data.status, _0x1e4546.response.data) : rebug("【 tb_sendFile 】" + (_0x1e4546.response.code || _0x1e4546.response.status) + " - " + (_0x1e4546.response.message || _0x1e4546.response.statusText), false, _0x1e4546.response.code || _0x1e4546.response.status, _0x1e4546.response) : rebug("【 tb_sendFile 】" + (_0x1e4546.code || _0x1e4546.status) + " - " + (_0x1e4546.message || _0x1e4546.statusText), false, _0x1e4546.code || _0x1e4546.status, _0x1e4546));
}
async function file2win(_0x15ffd1, _0x3026bc) {
  const _0x78d7ed = await middleware.bucketGet("jusapi", "win_server");
  if (!_0x78d7ed) return rebug("【 file2win 】 获取win_server_host失败");
  const _0x38f265 = await file2stream(_0x15ffd1);
  if (_0x38f265.success == false) return rebug("【 file2win 】 读取文件失败");
  return await axios({
    "method": "post",
    "url": _0x78d7ed + "/upload",
    "headers": {
      "Content-Type": "application/octet-stream",
      "x-file-name": encodeURI(_0x3026bc)
    },
    "data": _0x38f265.data
  }).then(function (_0x32b35b) {
    return rebug("【 file2win 】 " + (_0x32b35b.code || _0x32b35b.status) + " - " + (_0x32b35b.message || _0x32b35b.statusText) + ": " + _0x32b35b.data, true, _0x32b35b.code || _0x32b35b.status, _0x32b35b.data);
  }).catch(function (_0x21d425) {
    return rebug("【 file2win 】 " + (_0x21d425.code || _0x21d425.status) + " - " + (_0x21d425.message || _0x21d425.statusText));
  });
}
async function file1win(_0x1467f2) {
  const _0x85d225 = await middleware.bucketGet("jusapi", "win_server");
  if (!_0x85d225) return rebug("【 file1win 】 获取win_server_host失败");
  const _0x22d0cd = await file2stream(file);
  if (_0x22d0cd.success == false) return rebug("【 file2win 】 读取文件失败");
  return console.error("功能未开放");
  return await axios({
    "method": "post",
    "url": _0x85d225,
    "headers": {
      "Content-Type": "application/octet-stream",
      "x-file-name": encodeURI(filename)
    },
    "data": _0x22d0cd.data
  }).then(function (_0x578a20) {
    return rebug("【 file2win 】 " + (_0x578a20.code || _0x578a20.status) + " - " + (_0x578a20.message || _0x578a20.statusText) + ": " + _0x578a20.data, true, _0x578a20.code || _0x578a20.status, _0x578a20.data);
  }).catch(function (_0x2e0030) {
    return rebug("【 file2win 】 " + (_0x2e0030.code || _0x2e0030.status) + " - " + (_0x2e0030.message || _0x2e0030.statusText));
  });
}
class SQLite {
  constructor(_0x4c1faa) {
    const _0x272f6a = require("sqlite3").verbose(),
      _0x35f55a = new _0x272f6a.Database(_0x4c1faa, _0x5f4ed7 => _0x5f4ed7 ? console.error("err", _0x5f4ed7) : rebug(_0x4c1faa + " 连接成功", 1));
    _0x35f55a.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, userType TINYINT, userName VARCHAR(32) UNIQUE, passWord VARCHAR(32), nickName VARCHAR(32) UNIQUE, autName VARCHAR(32) UNIQUE, tg VARCHAR(32) UNIQUE, qq VARCHAR(32) UNIQUE, qb VARCHAR(32) UNIQUE, tb VARCHAR(32) UNIQUE, wm VARCHAR(32) UNIQUE, wv VARCHAR(32) UNIQUE, wx VARCHAR(32) UNIQUE, wk VARCHAR(32) UNIQUE, kk VARCHAR(32) UNIQUE, dd VARCHAR(32) UNIQUE, dc VARCHAR(32) UNIQUE, sk VARCHAR(32) UNIQUE, we VARCHAR(32) UNIQUE, qh VARCHAR(32) UNIQUE, fs VARCHAR(32) UNIQUE, pp VARCHAR(32) UNIQUE, wb VARCHAR(32) UNIQUE, createTime TIMESTAMP, loginTime TIMESTAMP, tokenTime TIMESTAMP)", (_0x37d484, _0x2b7ccd) => _0x2b7ccd ? console.error(_0x2b7ccd) : rebug("jusers.db 初始化", 1));
    this.find = (_0x3bc471, _0x4caf9f = "", _0x1a7cb9 = false) => new Promise((_0x113d23, _0x35752d) => _0x35f55a.all("SELECT * FROM users" + (_0x4caf9f ? " WHERE " + _0x4caf9f + (_0x1a7cb9 ? " LIKE?" : "=?") : ""), (Array.isArray(_0x3bc471) ? _0x3bc471 : [_0x3bc471]).map(_0x4d0fd8 => _0x1a7cb9 ? "%" + _0x4d0fd8 + "%" : _0x4d0fd8), (_0x228ce0, _0x4363a2) => {
      _0x228ce0 ? _0x35752d(_0x228ce0) : _0x113d23(_0x4363a2);
    }));
    this.insert = (..._0xf272fc) => {
      {
        const _0x1350a7 = Array.isArray(_0xf272fc[0]) ? _0xf272fc[0] : _0xf272fc,
          _0x15f21d = Object.keys(_0x1350a7[0]);
        return Promise.all(_0x1350a7.map(_0x4bc08a => new Promise(_0x374dc0 => {
          _0x35f55a.run("INSERT INTO users (" + _0x15f21d.join(", ") + ") VALUES (" + "?".repeat(_0x15f21d.length).split("").join(",") + ")", ...Object.values(_0x4bc08a), _0x1c0ff6 => _0x374dc0(_0x1c0ff6 ? {
            "data": _0x4bc08a,
            ..._0x1c0ff6
          } : null));
        })));
      }
    };
    this.close = () => _0x35f55a.close;
    return _0x35f55a ? this : _0x35f55a;
  }
}
module.exports = {
  "version": version,
  "needVersion": needVersion,
  "upVersion": upVersion,
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
  "file1win": file1win,
  "file2stream": file2stream,
  "sendFile": sendFile,
  "encodeQR": encodeQR,
  "sendNotify": sendNotify,
  "getQLS": getQLS,
  "AutAPI": AutAPI,
  "QingLong": QingLong,
  "DDDDOCR": DDDDOCR,
  "WxPusher": WxPusher,
  "getIP": getIP,
  "SQLite": SQLite
};
!(async () => {
  module.exports.isDebug = /^true$/i.test(await middleware.bucketGet("jusapi", "isDebug"));
  if (module.exports.isDebug) rebug("【jusapi】 已开启调试功能", true);
  module.exports.appreciate = await middleware.bucketGet("jusapi", "appreciate");
  module.exports.dis_updata = /^true$/i.test(await middleware.bucketGet("jusapi", "dis_updata"));
  if (module.exports.dis_updata) return rebug("【jusapi】 已禁用自动更新", true);
  const _0x345a32 = await s.isAdmin(),
    _0x20c355 = await s.getChatID();
  module.exports.dis_updata || _0x345a32 && !_0x20c355 && axios.get("https://raw.githubusercontent.com/iCouldFly/autman_plugins/scripts/jusapi.js").then(({
    status: _0x20bcbb,
    statusText: _0xe1f282,
    headers: _0x3f406d,
    config: _0x49594d,
    request: _0xf75fd9,
    data: _0xe0cc45
  }) => {
    const _0x2eea51 = _0xe0cc45.match(/(?<=\/\/\s*\[version\:\s*)[\d\.]+/g),
      _0x1f1680 = _0xe0cc45.match(/(?<=\/\/\s*\[version\:\s*[\d\.]+\s+).*(?=\].*)/g)?.[0];
    if (!_0x2eea51) return console.log("jusapi 版本号获取失败");
    if (+_0x2eea51[0].split(".").join("") > module.exports.version.split(".").join("")) {
      {
        console.log("jusapi 发现新版本，尝试更新，版本:", _0x2eea51[0]);
        const _0x3b97af = path.join(path.resolve(__dirname), "jusapi.js");
        fs.writeFile(_0x3b97af, _0xe0cc45, _0x5613f5 => _0x5613f5 ? console.error("jusapi 更新失败:", _0x5613f5) : (s.reply("jusapi 已更新至: " + _0x2eea51[0] + (_0x1f1680 ? "\n》" + _0x1f1680 : "")), console.log("保存路径:", _0x3b97af.toString())));
      }
    }
  }).catch(({
    port: _0x697c53,
    address: _0x487284,
    syscall: _0x4584ef,
    code: _0x1fdc23,
    errno: _0x160c2a,
    message: _0xfec479,
    stack: _0x153430,
    name: _0x44bd3d,
    config: _0x19ef60,
    request: _0x489202
  }) => console.error("jusapi 检查更新失败:", _0xfec479));
})();