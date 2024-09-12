//Thu Sep 12 2024 02:35:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    sign: sign,
    getToken: getToken,
    checkCk: checkCk,
    getCookies: getCookies,
    getUserInfo: getUserInfo,
    validateCarmeWithType: validateCarmeWithType,
    wait: wait,
    checkCarmeCount: checkCarmeCount,
    tryCatchPromise: tryCatchPromise,
    User_Agent: User_Agent
  } = require("./common.js"),
  md5 = require("md5");
const axios = require("axios"),
  request = require("request"),
  crypto = require("crypto");
async function main() {
  const _0x3050cb = getCookies("elmck");
  for (let _0x536917 = 0; _0x536917 < _0x3050cb.length; _0x536917++) {
    cookie = _0x3050cb[_0x536917];
    ck = await checkCk(cookie, _0x536917);
    if (!ck) {
      continue;
    }
    let _0x1b385f = await getUserInfo(ck);
    if (!_0x1b385f.username) {
      console.log("账号失效！请重新登录！！！😭");
      continue;
    }
    userId = _0x1b385f.user_id;
    console.log("******开始【饿了么账号", _0x536917 + 1, "】", _0x1b385f.username, "*********");
    await 夺宝(ck);
    console.log("-------------领取阳光普照----------------");
    var _0x3622cd = await h5Request(ck, "mtop.koubei.interactioncenter.snatch.mine.page/1.0", {
        "channel": "ELMC",
        "blockList": "[\"participants\",\"wonDetail\",\"noWonPrize\"]",
        "bizScene": "duobao_external",
        "pageSize": "50",
        "rightId": ""
      }),
      _0x36ec75 = _0x3622cd.data.list;
    for (let _0x230be0 = 0; _0x230be0 < _0x36ec75.length; _0x230be0++) {
      const _0x3a55bb = _0x36ec75[_0x230be0];
      console.log(_0x3a55bb.baseInfo.title, _0x3a55bb.baseInfo.rightId, _0x3a55bb.awardStatus);
      if (_0x3a55bb.awardStatus && _0x3a55bb.awardStatus === "not_won_wait_accept") {
        console.log("领取阳光普照");
        var _0x3622cd = await await h5Request(ck, "mtop.koubei.interactioncenter.snatch.nowon.reviceprize", {
          "rightId": _0x3a55bb.baseInfo.rightId,
          "actId": "20210425163619036128611204",
          "bizScene": "duobao_external",
          "hsf": "1",
          "longitude": "110.62908578664064",
          "latitude": "30.874344874173403"
        });
        console.log(JSON.stringify(_0x3622cd));
        await wait(3);
      }
    }
  }
}
main();
async function h5Request(_0x5c0375, _0x4d7b59, _0x21cfcb) {
  const _0x3425fe = {
      "authority": "shopping.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "origin": "https://r.ele.me",
      "pragma": "no-cache",
      "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
      "cookie": _0x5c0375
    },
    _0x3be9e6 = new Date().getTime(),
    _0x5471d0 = 12574478;
  var _0x60cef7 = "data=" + encodeURIComponent(JSON.stringify(_0x21cfcb));
  const _0x2a6636 = getToken(_0x5c0375),
    _0x4974b3 = _0x2a6636.split("_")[0],
    _0x4562d7 = md5(_0x4974b3 + "&" + _0x3be9e6 + "&" + _0x5471d0 + "&" + JSON.stringify(_0x21cfcb)),
    _0x100754 = {
      "url": "https://shopping.ele.me/h5/" + _0x4d7b59 + "/1.0/?jsv=2.6.1&appKey=" + _0x5471d0 + "&t=" + _0x3be9e6 + "&sign=" + _0x4562d7 + "&api=" + _0x4d7b59 + "&v=1.0&type=originaljson&dataType=json&ttid=1601274954333%40eleme_android_11.1.8&SV=5.0",
      "method": "POST",
      "headers": _0x3425fe,
      "body": _0x60cef7
    };
  return tryCatchPromise(_0x2ff9bd => {
    request(_0x100754, async (_0x4c6449, _0x529d6a, _0xf50d1a) => {
      if (!_0x4c6449 && _0x529d6a.statusCode == 200) try {
        const _0x4752b2 = JSON.parse(_0xf50d1a);
        _0x2ff9bd(_0x4752b2);
      } catch (_0x4d6276) {
        _0x2ff9bd({});
      } else _0x2ff9bd({});
    });
  });
}
async function 夺宝20元无门槛红包任务(_0x2c8074) {
  var _0x52b0d5 = new Date().getTime(),
    _0x4147eb = [{
      "typekey": "ad_clk",
      "snid": "o2oadc033db74-b228-4c77-b08e-2a79424334e4",
      "pt": "102301009",
      "shid": "4410D8D07DEAC2438834AA0C8B3DB507",
      "utype": "0",
      "nid": "",
      "pid": "o2o_102301_101000_100003",
      "adversion": "2",
      "uid": userId,
      "o2oclickid": "O2O_A1_35864679217238653151437971",
      "etype": "1",
      "cost": "B04D65CC046328D6",
      "adver": "1.2.8",
      "cnid": "4683912",
      "epid": "",
      "cpx": "3",
      "p": "%7B%22adgroup_id%22%3A%225807190%22%2C%22use_roi_adjust%22%3A%221%22%2C%22lt%22%3A%2230.696108900010586%22%2C%22channel%22%3A%2231%22%2C%22type%22%3A%22105%22%2C%22scene%22%3A%223_1_00_00054%22%2C%22tpp_buckets%22%3A%2221673%230%23388825%2339_21673%237656%2338198%23295_21673%2310938%23440607%23694_21673%2313278%23450779%23251_21673%2310943%23440614%23969_21673%238547%23430601%23429_21673%2311711%23443667%23439%22%2C%22origin_bid%22%3A%22B4A892AFA1E25D0A%22%2C%22cost_v2%22%3A%2214000%22%2C%22orientDimension%22%3A%223004%22%2C%22activity_id%22%3A%222311082131001755478%22%2C%22orientType%22%3A%223%22%2C%22store_id%22%3A%22525564233%22%2C%22cn_type%22%3A%221%22%2C%22cpc_cost_plus_extra_amount_switch%22%3A%221%22%2C%22use_roi_adjust_cost%22%3A%221%22%2C%22buckets_settle_flag%22%3A%220%22%2C%22cpx%22%3A%223%22%2C%22bid_model%22%3A%220%22%2C%22terminal%22%3A%22eleme%22%2C%22ctype%22%3A%221%22%2C%22lg%22%3A%22111.28509778529406%22%2C%22plan_id%22%3A%22-1%22%2C%22city_id%22%3A%220%22%2C%22logkey%22%3A%22%2Fo2i.mod.shoplist%22%2C%22gmkey%22%3A%22CLK%22%2C%22spm%22%3A%22a13.b_activity_kb_m91316.emod-takeout-marketing-ele-tab.dx107635_1.204b492esUG5mN%22%2C%22alsc_exp_id%22%3A%22O2O_A20_2JBMK71GP1MDR41723865315121%22%2C%22alsc_clk_id%22%3A%22O2O_A20_R863MQG36EJEIN1723865315121%22%2C%22alsc_pvid%22%3A%22a13.b_activity_kb_m91316_78a5bde4-4a1c-4ba7-9d5e-b3b8398b8e6c_1723865285881%22%2C%22shop_id%22%3A%22E17652008301155921198%22%2C%22list_index%22%3A%223%22%2C%22biz_unit%22%3A3%2C%22ct%22%3A1723865315129%2C%22trace_id%22%3A%22kp31723865285820%22%2C%22is_ad%22%3A1%2C%22typekey%22%3A%22ad_clk%22%2C%22o2i_action%22%3A%22GY_TASK_J%22%2C%22userAgent%22%3A%22Rajax%2F1%20M2102J2SC%2Fthyme%20Android%2F13%20Display%2FTKQ1.221114.001_test-keys%20Eleme%2F11.1.8%20Channel%2F1601274954333%20ID%2Fe81ef13b-b8f8-3242-9753-13e516633928%20OWOA%2FBSbefaXU4wDcIoqVYBt2SvppXGYntL1qNO3hrkXSb5o%3D%3B%20KERNEL_VERSION%3A4.19.157-perf-g92c089fc2d37%20API_Level%3A33%20Hardware%3A4921a439b714389796b5d0a1ffd143c3%20Mozilla%2F5.0%20(Linux%3B%20U%3B%20Android%2013%3B%20zh-CN%3B%20M2102J2SC%20Build%2FTKQ1.221114.001)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Version%2F4.0%20Chrome%2F69.0.3497.100%20UWS%2F3.22.1.239%20Mobile%20Safari%2F537.36%20AliApp(ELMC%2F11.1.8)%20UCBS%2F2.11.1.1%20TTID%2Foffical%20WindVane%2F8.5.0%2CUT4Aplus%2Fltracker-0.2.30.37%22%2C%22x-ua%22%3A%22RenderWay%252FH5%2520AppName%252Felmc%2520DeviceId%252Fe81ef13b-b8f8-3242-9753-13e516633928%2520AppExtraInfo%252F%25257B%252522utdid%252522%25253A%252522ZgkqCgGCxmUDAMp8utzLuz2i%252522%25252C%252522umidToken%252522%25253A%252522PQMBd%25252FtLPOCX8QKRWCU2rQzJ%25252FI7PX%25252Fva%252522%25252C%252522ttid%252522%25253A%2525221601274954333%252540eleme_android_11.1.8%252522%25252C%252522deviceUUID%252522%25253A%252522e81ef13b-b8f8-3242-9753-13e516633928%252522%25252C%252522miniWua%252522%25253A%252522angSH4KCj8K%25252F4LsSw4hr1pxErhR1%25252F3fX8qc7yEGoKjbRhhJoNyRppSC%25252FEIBrNadyl1ee4PRcpwuutiWv9mHHHGsiOOsfc61HBiygnfJj%25252FnxY1an0VqY2O83lLuILEuUVKAOj5lxEa%25252BZ8iU%25252FZyQ%25252F%25252F93tqr0hEAF073866bfyfEHqLMlMXNTMYWEByz%252522%25257D%22%2C%22spmid%22%3A%22a13.b_activity_kb_m91316%22%2C%22session_id%22%3A%22MTlhMDVlNzhhOGE0YzQ0NjY5NThiN2U3NTA2MjI1N2Nl1o4KXDUgtDl1K7nf9QXXiQ%22%2C%22cna%22%3A%22ikKlHhITl2sCAQAAAABCWi9q%22%2C%22user_id%22%3A%223100089023131%22%2C%22pn%22%3A29715%2C%22o2oclickid%22%3A%22O2O_A20_R74ELB8BLLM61L1723865315131%22%7D",
      "actionType": "",
      "user_id": userId,
      "actionId": "O2O_A20_R74ELB8BLLM61L1723865315131",
      "bid": "B04D65CC046328D6",
      "aid": "4E9418B0889ADAA4",
      "cid": "",
      "ts": _0x52b0d5
    }, {
      "typekey": "ad_clk",
      "snid": "o2oadc033db74-b228-4c77-b08e-2a79424334e4",
      "pt": "102301009",
      "shid": "4CC03BFAFF2E2468D02C90B823C11EA1",
      "utype": "0",
      "nid": "",
      "pid": "o2o_102301_101000_100001",
      "adversion": "2",
      "uid": userId,
      "o2oclickid": "O2O_A1_35864679217238653121711791",
      "etype": "1",
      "cost": "DC6DD14D455F01F7",
      "adver": "1.2.8",
      "cnid": "9860111",
      "epid": "",
      "cpx": "3",
      "p": "%7B%22adgroup_id%22%3A%2218121924%22%2C%22use_roi_adjust%22%3A%221%22%2C%22lt%22%3A%2230.696108900010586%22%2C%22channel%22%3A%2231%22%2C%22type%22%3A%22105%22%2C%22scene%22%3A%223_1_00_00054%22%2C%22tpp_buckets%22%3A%2221673%230%23388825%2339_21673%237656%2338198%23295_21673%2310938%23440607%23694_21673%2313278%23450779%23251_21673%2310943%23440614%23969_21673%238547%23430601%23429_21673%2311711%23443667%23439%22%2C%22origin_bid%22%3A%22D3C27F499CF1DD50%22%2C%22cost_v2%22%3A%2210000%22%2C%22activity_id%22%3A%222311082131001755478%22%2C%22store_id%22%3A%221072233438%22%2C%22cn_type%22%3A%221%22%2C%22cpc_cost_plus_extra_amount_switch%22%3A%221%22%2C%22use_roi_adjust_cost%22%3A%221%22%2C%22buckets_settle_flag%22%3A%220%22%2C%22cpx%22%3A%223%22%2C%22bid_model%22%3A%221%22%2C%22terminal%22%3A%22eleme%22%2C%22ctype%22%3A%221%22%2C%22lg%22%3A%22111.28509778529406%22%2C%22plan_id%22%3A%22-1%22%2C%22city_id%22%3A%220%22%2C%22logkey%22%3A%22%2Fo2i.mod.shoplist%22%2C%22gmkey%22%3A%22CLK%22%2C%22spm%22%3A%22a13.b_activity_kb_m91316.emod-takeout-marketing-ele-tab.dx107635_1.204b492etCZaEg%22%2C%22alsc_exp_id%22%3A%22O2O_A20_29D8H7626M2ALC1723865312157%22%2C%22alsc_clk_id%22%3A%22O2O_A20_H7B8CBQ9A3AH981723865312157%22%2C%22alsc_pvid%22%3A%22a13.b_activity_kb_m91316_78a5bde4-4a1c-4ba7-9d5e-b3b8398b8e6c_1723865285881%22%2C%22shop_id%22%3A%22E9432383685770304264%22%2C%22list_index%22%3A%222%22%2C%22biz_unit%22%3A3%2C%22ct%22%3A1723865312159%2C%22trace_id%22%3A%22kp31723865285820%22%2C%22is_ad%22%3A1%2C%22typekey%22%3A%22ad_clk%22%2C%22o2i_action%22%3A%22GY_TASK_J%22%2C%22userAgent%22%3A%22Rajax%2F1%20M2102J2SC%2Fthyme%20Android%2F13%20Display%2FTKQ1.221114.001_test-keys%20Eleme%2F11.1.8%20Channel%2F1601274954333%20ID%2Fe81ef13b-b8f8-3242-9753-13e516633928%20OWOA%2FBSbefaXU4wDcIoqVYBt2SvppXGYntL1qNO3hrkXSb5o%3D%3B%20KERNEL_VERSION%3A4.19.157-perf-g92c089fc2d37%20API_Level%3A33%20Hardware%3A4921a439b714389796b5d0a1ffd143c3%20Mozilla%2F5.0%20(Linux%3B%20U%3B%20Android%2013%3B%20zh-CN%3B%20M2102J2SC%20Build%2FTKQ1.221114.001)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Version%2F4.0%20Chrome%2F69.0.3497.100%20UWS%2F3.22.1.239%20Mobile%20Safari%2F537.36%20AliApp(ELMC%2F11.1.8)%20UCBS%2F2.11.1.1%20TTID%2Foffical%20WindVane%2F8.5.0%2CUT4Aplus%2Fltracker-0.2.30.37%22%2C%22x-ua%22%3A%22RenderWay%252FH5%2520AppName%252Felmc%2520DeviceId%252Fe81ef13b-b8f8-3242-9753-13e516633928%2520AppExtraInfo%252F%25257B%252522utdid%252522%25253A%252522ZgkqCgGCxmUDAMp8utzLuz2i%252522%25252C%252522umidToken%252522%25253A%252522PQMBd%25252FtLPOCX8QKRWCU2rQzJ%25252FI7PX%25252Fva%252522%25252C%252522ttid%252522%25253A%2525221601274954333%252540eleme_android_11.1.8%252522%25252C%252522deviceUUID%252522%25253A%252522e81ef13b-b8f8-3242-9753-13e516633928%252522%25252C%252522miniWua%252522%25253A%252522angSH4KCj8K%25252F4LsSw4hr1pxErhR1%25252F3fX8qc7yEGoKjbRhhJoNyRppSC%25252FEIBrNadyl1ee4PRcpwuutiWv9mHHHGsiOOsfc61HBiygnfJj%25252FnxY1an0VqY2O83lLuILEuUVKAOj5lxEa%25252BZ8iU%25252FZyQ%25252F%25252F93tqr0hEAF073866bfyfEHqLMlMXNTMYWEByz%252522%25257D%22%2C%22spmid%22%3A%22a13.b_activity_kb_m91316%22%2C%22session_id%22%3A%22MTlhMDVlNzhhOGE0YzQ0NjY5NThiN2U3NTA2MjI1N2Nl1o4KXDUgtDl1K7nf9QXXiQ%22%2C%22cna%22%3A%22ikKlHhITl2sCAQAAAABCWi9q%22%2C%22user_id%22%3A%223100089023131%22%2C%22pn%22%3A26743%2C%22o2oclickid%22%3A%22O2O_A20_KG567RGGJHCK681723865312160%22%7D",
      "actionType": "",
      "user_id": userId,
      "actionId": "O2O_A20_KG567RGGJHCK681723865312160",
      "bid": "DC6DD14D455F01F7",
      "aid": "3BAB00FCE5596CDB",
      "cid": "",
      "ts": _0x52b0d5
    }, {
      "typekey": "ad_clk",
      "snid": "o2oadb810bf75-0428-4056-90e6-ab99114a8616",
      "pt": "102301009",
      "shid": "6B7362205144AEB43EAF9B7544FCEE39",
      "utype": "0",
      "nid": "",
      "pid": "o2o_102301_101000_100003",
      "adversion": "2",
      "uid": userId,
      "o2oclickid": "O2O_A1_197381974317238840548843255",
      "etype": "1",
      "cost": "6C2797C0B1253DCE",
      "adver": "1.2.8",
      "cnid": "11749759",
      "epid": "",
      "cpx": "3",
      "p": "%7B%22adgroup_id%22%3A%2224092821%22%2C%22use_roi_adjust%22%3A%221%22%2C%22lt%22%3A%2230.718732997775078%22%2C%22channel%22%3A%2231%22%2C%22type%22%3A%22105%22%2C%22scene%22%3A%223_1_00_00054%22%2C%22tpp_buckets%22%3A%2221673%230%23388825%239_21673%237656%23428303%23831_21673%2310938%23440607%23629_21673%2313278%23450780%23911_21673%2310943%23440614%23621_21673%238547%23430604%23578_21673%2311711%23443668%23867%22%2C%22origin_bid%22%3A%2225B71B57473B05F4%22%2C%22cost_v2%22%3A%227000%22%2C%22activity_id%22%3A%222311082131001755478%22%2C%22store_id%22%3A%221098790042%22%2C%22cn_type%22%3A%221%22%2C%22cpc_cost_plus_extra_amount_switch%22%3A%221%22%2C%22use_roi_adjust_cost%22%3A%221%22%2C%22buckets_settle_flag%22%3A%222%22%2C%22cpx%22%3A%223%22%2C%22bid_model%22%3A%221%22%2C%22terminal%22%3A%22eleme%22%2C%22ctype%22%3A%221%22%2C%22lg%22%3A%22111.33237473666668%22%2C%22plan_id%22%3A%22-1%22%2C%22city_id%22%3A%220%22%2C%22logkey%22%3A%22%2Fo2i.mod.shoplist%22%2C%22gmkey%22%3A%22CLK%22%2C%22spm%22%3A%22a13.b_activity_kb_m91316.emod-takeout-marketing-ele-tab.dx107635_1.4bd6492eX4QDTr%22%2C%22alsc_exp_id%22%3A%22O2O_A20_23GKKPEEIV1P2B1723884054875%22%2C%22alsc_clk_id%22%3A%22O2O_A20_E7A9R8278IB86J1723884054875%22%2C%22alsc_pvid%22%3A%22a13.b_activity_kb_m91316_f83eee92-d574-4f39-a823-66f8e2c5f5c5_1723883918844%22%2C%22shop_id%22%3A%22E8433070450917526877%22%2C%22list_index%22%3A%224%22%2C%22biz_unit%22%3A3%2C%22ct%22%3A1723884054876%2C%22trace_id%22%3A%22Meh1723883918026%22%2C%22is_ad%22%3A1%2C%22typekey%22%3A%22ad_clk%22%2C%22o2i_action%22%3A%22GY_TASK_J%22%2C%22userAgent%22%3A%22Rajax%2F1%20MI_8_SE%2Fsirius%20Android%2F9%20Display%2FPKQ1.181121.001%20Eleme%2F11.1.8%20Channel%2F1601274954333%20ID%2F0a1ad2d1-b1f5-361d-8b18-4cd41612bcfa%20OWOA%2F3XzGYvMavqB7iVihUTOvAED8fL1xwb%2F4N7j%2F2nsb3zA%3D%3B%20KERNEL_VERSION%3A4.9.112-perf-ga16e1dd%20API_Level%3A28%20Hardware%3A9dc0d9c491aac92d7f9e06b6dedaaa71%20Mozilla%2F5.0%20(Linux%3B%20U%3B%20Android%209%3B%20zh-CN%3B%20MI%208%20SE%20Build%2FPKQ1.181121.001)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Version%2F4.0%20Chrome%2F69.0.3497.100%20UWS%2F3.22.1.239%20Mobile%20Safari%2F537.36%20AliApp(ELMC%2F11.1.8)%20UCBS%2F2.11.1.1%20TTID%2Foffical%20WindVane%2F8.5.0%2CUT4Aplus%2Fltracker-0.2.30.37%22%2C%22x-ua%22%3A%22RenderWay%252FH5%2520AppName%252Felmc%2520DeviceId%252F0a1ad2d1-b1f5-361d-8b18-4cd41612bcfa%2520AppExtraInfo%252F%25257B%252522utdid%252522%25253A%252522ZsBYAYBhPT0DAM4m9erg1GBx%252522%25252C%252522umidToken%252522%25253A%252522G%25252B6Bkc9LPIbxVQKRX%25252Fo1um8iV91Womjx%252522%25252C%252522ttid%252522%25253A%2525221601274954333%252540eleme_android_11.1.8%252522%25252C%252522deviceUUID%252522%25253A%2525220a1ad2d1-b1f5-361d-8b18-4cd41612bcfa%252522%25252C%252522miniWua%252522%25253A%252522aIQSL7DyZXoS8D32hbJfsDElSNexjaPL6el8s3K%25252Fek5aBXkP8RTcjw56LJabvNL6H%25252FWuylx6pNmg79incpiuW5xC4BpqEtvUDdwZZv7gYf8IVZvsBfcccolCKD9X6PvmbHlsy5EGyW%25252BRLWVBEfsKdg9hxchksoohV3%25252FLUFDf%25252FTVDdW86CJJzUgiQg%252522%25257D%22%2C%22spmid%22%3A%22a13.b_activity_kb_m91316%22%2C%22session_id%22%3A%22MWJkZDFjNDU0ZTlmZTg1YzNkZjYyYjk3M2Q2YjZkYzFlebvIwwBsgB4hE-K7h3LDjA%22%2C%22cna%22%3A%22tUxHH%2FQXPSgCAd3pdVj3zlcF%22%2C%22user_id%22%3A%223100167339246%22%2C%22pn%22%3A136362%2C%22o2oclickid%22%3A%22O2O_A20_IQ1C8IFCQQ17KP1723884054877%22%7D",
      "actionType": "",
      "user_id": userId,
      "actionId": "O2O_A20_IQ1C8IFCQQ17KP1723884054877",
      "bid": "9E1AD94701FC6FE5",
      "aid": "75BE8B06CB092FC8",
      "cid": "",
      "ts": _0x52b0d5
    }];
  for (let _0x3a6e8b = 0; _0x3a6e8b < _0x4147eb.length; _0x3a6e8b++) {
    const _0x66cf79 = _0x4147eb[_0x3a6e8b];
    await 点击三个店铺(_0x66cf79, _0x2c8074);
    await wait(5);
  }
}
async function 点击三个店铺(_0x4beac7, _0xa4cd52) {
  var _0x186754 = "mtop.life.ad.click.get",
    _0x1828b2 = await h5Request(_0xa4cd52, _0x186754, _0x4beac7);
  console.log(_0x1828b2);
}
async function 夺宝(_0x4a0f1a) {
  var _0x324f50 = await h5Request(_0x4a0f1a, "mtop.koubei.interactioncenter.snatch.homepage.query", {
      "channel": "ELMC",
      "blockList": "[\"participants\",\"wonDetail\",\"noWonPrize\"]",
      "longitude": "111.33237473666668",
      "latitude": "30.718732997775078",
      "actId": "20230811111144939171438583",
      "cpnCode": "TIMING_RIGHT",
      "cpnCollectionId": "20230811111144993902427153",
      "statusSet": "[\"ONLINE\",\"PREPARE\"]",
      "showStatusSet": "[\"ONLINE\",\"PREPARE\"]",
      "bizScene": "duobao_external",
      "bizSource": "APP"
    }),
    _0x15b1dd = _0x324f50.data.data.groupSnatchList.EXCELLENT;
  for (let _0x57e506 = 0; _0x57e506 < _0x15b1dd.length; _0x57e506++) {
    const _0x4ce6cc = _0x15b1dd[_0x57e506];
    if (_0x4ce6cc.sponsorInfos.length === 0 && !_0x4ce6cc.properties.hasParticipated && _0x4ce6cc.status == "ONLINE") {
      let _0x49e832 = /(iPad第十代平板电脑|iPhone15|饿了么果园500g水滴|5000吃货豆|100元现金红包|小蓝盒礼包|53度飞天茅台|)/;
      if (_0x49e832.test(_0x4ce6cc.baseInfo.title)) {
        count = 1;
      } else count = 3;
      _0x4ce6cc.baseInfo.title == "20元无门槛红包" ? (await 夺宝20元无门槛红包任务(_0x4a0f1a), requestData = {
        "missionCollectionId": _0x4ce6cc.properties.taskSetId,
        "missionId": _0x4ce6cc.properties.popTaskId,
        "locationInfos": "[\"{\\\"lng\\\":111.28509778529406,\\\"lat\\\":30.696108900010586}\"]",
        "bizScene": "duobao_external",
        "accountPlan": "HAVANA_COMMON",
        "count": "3",
        "hsf": "1"
      }) : requestData = {
        "missionCollectionId": _0x4ce6cc.properties.taskSetId,
        "missionId": _0x4ce6cc.properties.popTaskId,
        "locationInfos": "[\"{\\\"lng\\\":111.28509778529406,\\\"lat\\\":30.696108900010586}\"]",
        "bizScene": "duobao_external",
        "accountPlan": "HAVANA_COMMON",
        "count": count,
        "hsf": "1"
      };
      if (requestData && _0x4ce6cc.baseInfo.title != "39元无门槛红包") {
        console.log("去参与夺宝:" + _0x4ce6cc.baseInfo.title + ",id:" + _0x4ce6cc.properties.popTaskId + ",count:" + count);
        var _0x324f50 = await h5Request(_0x4a0f1a, "mtop.ele.biz.growth.task.core.receiveprize", requestData);
        console.log(_0x324f50);
        await wait(3);
      }
    }
  }
}
async function getMh5tk(_0x5389fb) {
  const _0x1fb59a = Date.now().toString(),
    _0x5056bd = {
      "bizScene": "ORCHARD",
      "missionCollectionId": "178",
      "accountPlan": "HAVANA_COMMON",
      "locationInfos": "[\"{\\\"lng\\\":\\\"110.62908578664064\\\",\\\"lat\\\":\\\"30.874344874173403\\\"}\"]",
      "requestDataEnums": "[\"REMIND\"]"
    },
    _0xc16622 = "data=" + encodeURIComponent(JSON.stringify(_0x5056bd)),
    _0x3ade49 = signs("a8b654ea8b2d8897556edb7eed592e4e", _0x1fb59a, _0x5056bd),
    _0x5b4272 = "https:/shopping.ele.me/h5/mtop.ele.biz.growth.task.core.querytask/1.0/?jsv=2.7.0&appKey=12574478&t=" + _0x1fb59a + "&sign=" + _0x3ade49 + "&api=mtop.ele.biz.growth.task.core.querytask&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp",
    _0x54730b = {
      "Host": "mtop.ele.me",
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
      "Content-type": "application/x-www-form-urlencoded",
      "Origin": "https://tb.ele.me",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://tb.ele.me/wow/alsc/mod/3fe8408d9ba38d4726448a87?spm-pre=a2ogi.bx828379.0.0&spm=a13.b_activity_kb_m69301.0.0",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Cookie": _0x5389fb
    };
  try {
    const _0x55b169 = await axios.post(_0x5b4272, _0xc16622, {
      "headers": _0x54730b,
      "responseType": "text"
    });
    if (_0x55b169.data.includes("令牌为空")) {
      const _0x5a176e = _0x55b169.headers["set-cookie"] || [],
        _0x2ccf2c = Array.isArray(_0x5a176e) ? _0x5a176e.join("; ") : _0x5a176e,
        _0x58aaa1 = _0x2ccf2c.match(/_m_h5_tk=([^_]+)/),
        _0x430d09 = _0x2ccf2c.match(/_m_h5_tk=[0-9a-f]+_[0-9]+;/),
        _0xb9cd7a = _0x2ccf2c.match(/_m_h5_tk_enc=[0-9a-f]+;/);
      if (_0x58aaa1 && _0x430d09 && _0xb9cd7a) {
        const _0x486181 = _0x58aaa1[1],
          _0x4b8ff2 = _0x430d09[0],
          _0x45e417 = _0xb9cd7a[0],
          _0x155a3c = /_m_h5_tk=[^;]+;?|_m_h5_tk_enc=[^;]+;?/g,
          _0x484369 = _0x5389fb.replace(_0x155a3c, ""),
          _0x25ddac = _0x4b8ff2 + _0x45e417 + _0x484369;
        return {
          "token": _0x486181,
          "newCookie": _0x25ddac
        };
      } else return console.log("无法提取新的 cookie 信息"), {
        "token": null,
        "newCookie": null
      };
    }
  } catch (_0x1ab240) {
    return console.error("请求失败:", _0x1ab240), {
      "token": null,
      "newCookie": null
    };
  }
}
function signs(_0x16dd9a, _0x257fd3, _0x516424) {
  const _0x3b1789 = JSON.stringify(_0x516424, null, 0),
    _0x561e95 = _0x16dd9a + "&" + _0x257fd3 + "&12574478&" + _0x3b1789,
    _0x254e90 = crypto.createHash("md5").update(_0x561e95).digest("hex");
  return _0x254e90;
}
function isEmpty(_0x263acd) {
  return Object.values(_0x263acd).length === 0;
}
function Env(_0x1f7a08, _0x30ba7a) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x4de810 {
    constructor(_0xdfe443) {
      this.env = _0xdfe443;
    }
    ["send"](_0x50090e, _0x508064 = "GET") {
      _0x50090e = "string" == typeof _0x50090e ? {
        "url": _0x50090e
      } : _0x50090e;
      let _0x4ab8b6 = this.get;
      return "POST" === _0x508064 && (_0x4ab8b6 = this.post), new Promise((_0x237d60, _0x4af390) => {
        _0x4ab8b6.call(this, _0x50090e, (_0x54d9eb, _0x3f6643, _0x5aa5d4) => {
          _0x54d9eb ? _0x4af390(_0x54d9eb) : _0x237d60(_0x3f6643);
        });
      });
    }
    ["get"](_0x53f4a2) {
      return this.send.call(this.env, _0x53f4a2);
    }
    ["post"](_0x1ca0ac) {
      return this.send.call(this.env, _0x1ca0ac, "POST");
    }
  }
  return new class {
    constructor(_0x1cdd48, _0x1e0b06) {
      this.name = _0x1cdd48;
      this.http = new _0x4de810(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1e0b06);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x13911e, _0x833f21 = null) {
      try {
        return JSON.parse(_0x13911e);
      } catch {
        return _0x833f21;
      }
    }
    ["toStr"](_0x5ac27e, _0x284f92 = null) {
      try {
        return JSON.stringify(_0x5ac27e);
      } catch {
        return _0x284f92;
      }
    }
    ["getjson"](_0x58dc3f, _0x2f5ded) {
      let _0x115503 = _0x2f5ded;
      const _0x155ac7 = this.getdata(_0x58dc3f);
      if (_0x155ac7) try {
        _0x115503 = JSON.parse(this.getdata(_0x58dc3f));
      } catch {}
      return _0x115503;
    }
    ["setjson"](_0x57be16, _0x411ca3) {
      try {
        return this.setdata(JSON.stringify(_0x57be16), _0x411ca3);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x582187) {
      return new Promise(_0x585cc9 => {
        this.get({
          "url": _0x582187
        }, (_0x4ed604, _0x13ee5b, _0x30bcb7) => _0x585cc9(_0x30bcb7));
      });
    }
    ["runScript"](_0x36f257, _0x3cab84) {
      return new Promise(_0x27472b => {
        let _0x3b7a28 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x3b7a28 = _0x3b7a28 ? _0x3b7a28.replace(/\n/g, "").trim() : _0x3b7a28;
        let _0x122a50 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x122a50 = _0x122a50 ? 1 * _0x122a50 : 20;
        _0x122a50 = _0x3cab84 && _0x3cab84.timeout ? _0x3cab84.timeout : _0x122a50;
        const [_0xda3ca9, _0x53a121] = _0x3b7a28.split("@"),
          _0xa2a744 = {
            "url": "http://" + _0x53a121 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x36f257,
              "mock_type": "cron",
              "timeout": _0x122a50
            },
            "headers": {
              "X-Key": _0xda3ca9,
              "Accept": "*/*"
            }
          };
        this.post(_0xa2a744, (_0x42b83c, _0x2bdfbc, _0x3e3037) => _0x27472b(_0x3e3037));
      }).catch(_0x31bc81 => this.logErr(_0x31bc81));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xb2a226 = this.path.resolve(this.dataFile),
          _0x491df1 = this.path.resolve(process.cwd(), this.dataFile),
          _0x2db13c = this.fs.existsSync(_0xb2a226),
          _0x16f2ae = !_0x2db13c && this.fs.existsSync(_0x491df1);
        if (!_0x2db13c && !_0x16f2ae) return {};
        {
          const _0x24fd93 = _0x2db13c ? _0xb2a226 : _0x491df1;
          try {
            return JSON.parse(this.fs.readFileSync(_0x24fd93));
          } catch (_0x1e76f2) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1a9561 = this.path.resolve(this.dataFile),
          _0x5a6c9a = this.path.resolve(process.cwd(), this.dataFile),
          _0x3a4eed = this.fs.existsSync(_0x1a9561),
          _0x392384 = !_0x3a4eed && this.fs.existsSync(_0x5a6c9a),
          _0x2f2fa1 = JSON.stringify(this.data);
        _0x3a4eed ? this.fs.writeFileSync(_0x1a9561, _0x2f2fa1) : _0x392384 ? this.fs.writeFileSync(_0x5a6c9a, _0x2f2fa1) : this.fs.writeFileSync(_0x1a9561, _0x2f2fa1);
      }
    }
    ["lodash_get"](_0x479575, _0x4eeb86, _0x8ccc1e) {
      const _0x35fd10 = _0x4eeb86.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3b755b = _0x479575;
      for (const _0x241c90 of _0x35fd10) if (_0x3b755b = Object(_0x3b755b)[_0x241c90], void 0 === _0x3b755b) return _0x8ccc1e;
      return _0x3b755b;
    }
    ["lodash_set"](_0x2d6dd6, _0x5ee134, _0x82d5b7) {
      return Object(_0x2d6dd6) !== _0x2d6dd6 ? _0x2d6dd6 : (Array.isArray(_0x5ee134) || (_0x5ee134 = _0x5ee134.toString().match(/[^.[\]]+/g) || []), _0x5ee134.slice(0, -1).reduce((_0x13e988, _0x473081, _0x415e71) => Object(_0x13e988[_0x473081]) === _0x13e988[_0x473081] ? _0x13e988[_0x473081] : _0x13e988[_0x473081] = Math.abs(_0x5ee134[_0x415e71 + 1]) >> 0 == +_0x5ee134[_0x415e71 + 1] ? [] : {}, _0x2d6dd6)[_0x5ee134[_0x5ee134.length - 1]] = _0x82d5b7, _0x2d6dd6);
    }
    ["getdata"](_0x4fae80) {
      let _0x40d80a = this.getval(_0x4fae80);
      if (/^@/.test(_0x4fae80)) {
        const [, _0x2db61c, _0x1042c0] = /^@(.*?)\.(.*?)$/.exec(_0x4fae80),
          _0x4f5737 = _0x2db61c ? this.getval(_0x2db61c) : "";
        if (_0x4f5737) try {
          const _0x30bcad = JSON.parse(_0x4f5737);
          _0x40d80a = _0x30bcad ? this.lodash_get(_0x30bcad, _0x1042c0, "") : _0x40d80a;
        } catch (_0x322dd0) {
          _0x40d80a = "";
        }
      }
      return _0x40d80a;
    }
    ["setdata"](_0x3bc54b, _0xa1a8a7) {
      let _0xe77b5a = false;
      if (/^@/.test(_0xa1a8a7)) {
        const [, _0x4f9a18, _0x2ebd98] = /^@(.*?)\.(.*?)$/.exec(_0xa1a8a7),
          _0x3b19fb = this.getval(_0x4f9a18),
          _0x3d1840 = _0x4f9a18 ? "null" === _0x3b19fb ? null : _0x3b19fb || "{}" : "{}";
        try {
          const _0x323a82 = JSON.parse(_0x3d1840);
          this.lodash_set(_0x323a82, _0x2ebd98, _0x3bc54b);
          _0xe77b5a = this.setval(JSON.stringify(_0x323a82), _0x4f9a18);
        } catch (_0x526969) {
          const _0x18902c = {};
          this.lodash_set(_0x18902c, _0x2ebd98, _0x3bc54b);
          _0xe77b5a = this.setval(JSON.stringify(_0x18902c), _0x4f9a18);
        }
      } else _0xe77b5a = this.setval(_0x3bc54b, _0xa1a8a7);
      return _0xe77b5a;
    }
    ["getval"](_0x4fcb16) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4fcb16) : this.isQuanX() ? $prefs.valueForKey(_0x4fcb16) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4fcb16]) : this.data && this.data[_0x4fcb16] || null;
    }
    ["setval"](_0x50f500, _0x43bc42) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x50f500, _0x43bc42) : this.isQuanX() ? $prefs.setValueForKey(_0x50f500, _0x43bc42) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x43bc42] = _0x50f500, this.writedata(), !0) : this.data && this.data[_0x43bc42] || null;
    }
    ["initGotEnv"](_0x4892da) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x4892da && (_0x4892da.headers = _0x4892da.headers ? _0x4892da.headers : {}, void 0 === _0x4892da.headers.Cookie && void 0 === _0x4892da.cookieJar && (_0x4892da.cookieJar = this.ckjar));
    }
    ["get"](_0x39245a, _0x4eb4aa = () => {}) {
      _0x39245a.headers && (delete _0x39245a.headers["Content-Type"], delete _0x39245a.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x39245a.headers = _0x39245a.headers || {}, Object.assign(_0x39245a.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x39245a, (_0x3ddf2f, _0x3c59d3, _0x435965) => {
        !_0x3ddf2f && _0x3c59d3 && (_0x3c59d3.body = _0x435965, _0x3c59d3.statusCode = _0x3c59d3.status);
        _0x4eb4aa(_0x3ddf2f, _0x3c59d3, _0x435965);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x39245a.opts = _0x39245a.opts || {}, Object.assign(_0x39245a.opts, {
        "hints": !1
      })), $task.fetch(_0x39245a).then(_0x1e37ac => {
        const {
          statusCode: _0x2d3b2e,
          statusCode: _0x5bc0e9,
          headers: _0x150d67,
          body: _0x20b327
        } = _0x1e37ac;
        _0x4eb4aa(null, {
          "status": _0x2d3b2e,
          "statusCode": _0x5bc0e9,
          "headers": _0x150d67,
          "body": _0x20b327
        }, _0x20b327);
      }, _0xb2fded => _0x4eb4aa(_0xb2fded))) : this.isNode() && (this.initGotEnv(_0x39245a), this.got(_0x39245a).on("redirect", (_0x97f845, _0x45a482) => {
        try {
          if (_0x97f845.headers["set-cookie"]) {
            const _0x471ff6 = _0x97f845.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x471ff6 && this.ckjar.setCookieSync(_0x471ff6, null);
            _0x45a482.cookieJar = this.ckjar;
          }
        } catch (_0x1d592b) {
          this.logErr(_0x1d592b);
        }
      }).then(_0x8266f2 => {
        const {
          statusCode: _0x5323aa,
          statusCode: _0x17b1de,
          headers: _0x1468f9,
          body: _0x13cde9
        } = _0x8266f2;
        _0x4eb4aa(null, {
          "status": _0x5323aa,
          "statusCode": _0x17b1de,
          "headers": _0x1468f9,
          "body": _0x13cde9
        }, _0x13cde9);
      }, _0x1aa4cc => {
        const {
          message: _0x1cfa17,
          response: _0x2f0c9a
        } = _0x1aa4cc;
        _0x4eb4aa(_0x1cfa17, _0x2f0c9a, _0x2f0c9a && _0x2f0c9a.body);
      }));
    }
    ["post"](_0xa8832a, _0x419797 = () => {}) {
      if (_0xa8832a.body && _0xa8832a.headers && !_0xa8832a.headers["Content-Type"] && (_0xa8832a.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0xa8832a.headers && delete _0xa8832a.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0xa8832a.headers = _0xa8832a.headers || {}, Object.assign(_0xa8832a.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0xa8832a, (_0x47bdd5, _0x38e5a6, _0x32fba6) => {
        !_0x47bdd5 && _0x38e5a6 && (_0x38e5a6.body = _0x32fba6, _0x38e5a6.statusCode = _0x38e5a6.status);
        _0x419797(_0x47bdd5, _0x38e5a6, _0x32fba6);
      });else {
        if (this.isQuanX()) _0xa8832a.method = "POST", this.isNeedRewrite && (_0xa8832a.opts = _0xa8832a.opts || {}, Object.assign(_0xa8832a.opts, {
          "hints": !1
        })), $task.fetch(_0xa8832a).then(_0x1a0756 => {
          const {
            statusCode: _0x43173a,
            statusCode: _0x327502,
            headers: _0x1b8341,
            body: _0x45a58f
          } = _0x1a0756;
          _0x419797(null, {
            "status": _0x43173a,
            "statusCode": _0x327502,
            "headers": _0x1b8341,
            "body": _0x45a58f
          }, _0x45a58f);
        }, _0x287288 => _0x419797(_0x287288));else {
          if (this.isNode()) {
            this.initGotEnv(_0xa8832a);
            const {
              url: _0x180075,
              ..._0x166529
            } = _0xa8832a;
            this.got.post(_0x180075, _0x166529).then(_0x4eeefb => {
              const {
                statusCode: _0x14c3ce,
                statusCode: _0x47280f,
                headers: _0x2fc27a,
                body: _0x1415eb
              } = _0x4eeefb;
              _0x419797(null, {
                "status": _0x14c3ce,
                "statusCode": _0x47280f,
                "headers": _0x2fc27a,
                "body": _0x1415eb
              }, _0x1415eb);
            }, _0x1355b8 => {
              const {
                message: _0x98deea,
                response: _0x13db9d
              } = _0x1355b8;
              _0x419797(_0x98deea, _0x13db9d, _0x13db9d && _0x13db9d.body);
            });
          }
        }
      }
    }
    ["time"](_0x316e47, _0x4a37ca = null) {
      const _0xcde939 = _0x4a37ca ? new Date(_0x4a37ca) : new Date();
      let _0x525dd3 = {
        "M+": _0xcde939.getMonth() + 1,
        "d+": _0xcde939.getDate(),
        "H+": _0xcde939.getHours(),
        "m+": _0xcde939.getMinutes(),
        "s+": _0xcde939.getSeconds(),
        "q+": Math.floor((_0xcde939.getMonth() + 3) / 3),
        "S": _0xcde939.getMilliseconds()
      };
      /(y+)/.test(_0x316e47) && (_0x316e47 = _0x316e47.replace(RegExp.$1, (_0xcde939.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x28f860 in _0x525dd3) new RegExp("(" + _0x28f860 + ")").test(_0x316e47) && (_0x316e47 = _0x316e47.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x525dd3[_0x28f860] : ("00" + _0x525dd3[_0x28f860]).substr(("" + _0x525dd3[_0x28f860]).length)));
      return _0x316e47;
    }
    ["msg"](_0x1446c4 = _0x1f7a08, _0x45722c = "", _0x28e22b = "", _0x33abcc) {
      const _0x6a093a = _0x4e7f64 => {
        if (!_0x4e7f64) return _0x4e7f64;
        if ("string" == typeof _0x4e7f64) return this.isLoon() ? _0x4e7f64 : this.isQuanX() ? {
          "open-url": _0x4e7f64
        } : this.isSurge() ? {
          "url": _0x4e7f64
        } : void 0;
        if ("object" == typeof _0x4e7f64) {
          if (this.isLoon()) {
            let _0x297d0b = _0x4e7f64.openUrl || _0x4e7f64.url || _0x4e7f64["open-url"],
              _0x4005e4 = _0x4e7f64.mediaUrl || _0x4e7f64["media-url"];
            return {
              "openUrl": _0x297d0b,
              "mediaUrl": _0x4005e4
            };
          }
          if (this.isQuanX()) {
            let _0xd8130d = _0x4e7f64["open-url"] || _0x4e7f64.url || _0x4e7f64.openUrl,
              _0x1ca006 = _0x4e7f64["media-url"] || _0x4e7f64.mediaUrl;
            return {
              "open-url": _0xd8130d,
              "media-url": _0x1ca006
            };
          }
          if (this.isSurge()) {
            let _0x316e8e = _0x4e7f64.url || _0x4e7f64.openUrl || _0x4e7f64["open-url"];
            return {
              "url": _0x316e8e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1446c4, _0x45722c, _0x28e22b, _0x6a093a(_0x33abcc)) : this.isQuanX() && $notify(_0x1446c4, _0x45722c, _0x28e22b, _0x6a093a(_0x33abcc))), !this.isMuteLog) {
        let _0x156771 = ["", "==============📣系统通知📣=============="];
        _0x156771.push(_0x1446c4);
        _0x45722c && _0x156771.push(_0x45722c);
        _0x28e22b && _0x156771.push(_0x28e22b);
        console.log(_0x156771.join("\n"));
        this.logs = this.logs.concat(_0x156771);
      }
    }
    ["log"](..._0xcc9aed) {
      _0xcc9aed.length > 0 && (this.logs = [...this.logs, ..._0xcc9aed]);
      console.log(_0xcc9aed.join(this.logSeparator));
    }
    ["logErr"](_0x2084d1, _0xfcf982) {
      const _0xb5836 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0xb5836 ? this.log("", "❗️" + this.name + ", 错误!", _0x2084d1.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x2084d1);
    }
    ["wait"](_0x3067f3) {
      return new Promise(_0xfc06ba => setTimeout(_0xfc06ba, _0x3067f3));
    }
    ["done"](_0x19dcb8 = {}) {
      const _0x13675d = new Date().getTime(),
        _0x375a47 = (_0x13675d - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x375a47 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x19dcb8);
    }
  }(_0x1f7a08, _0x30ba7a);
}