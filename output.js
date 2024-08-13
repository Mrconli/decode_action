//Tue Aug 13 2024 10:40:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
 * @平行绳 飞机频道：https://t.me/tigerorrose
 * 抢券变量：elmqqck 需要抢券的 ck
 * 定时建议提前5秒，多账号用 conc elmqqck 并发
 * cron: 55 59 23 * * *
 * 2023.7.11 首次发布
 * 2023.7.30 优化抢券逻辑，提升了成功率
 * 2023.8.17 内置定时，23:59:58 开始抢券；显示 USERID
 * 2023.9.29 修改提前抢券时间，提前 50毫秒开始抢
 * 2023.10.17 添加自定义抢券提前时间和间隔时间，单位毫秒
 * 环境变量：couponValue 可以设置抢券的面值，默认是 39
 * 环境变量：threadCount 可以设置多线程抢券，默认 1
 * 环境变量：BEFORE_TIME 提前多少毫秒获取券列表，开始抢券，默认 1000毫秒
 * 环境变量：BETWEEN_TIME 两次抢券时间间隔，默认 200毫秒
 */
const $ = new Env("\u997F\u4E86\u4E48\u62A2\u5238");
var version_ = "pingxingsheng";
function _0xf1d9() {
  const _0x28a11d = function () {
    return [...[version_, "ayIpNiRvnJgvRAxiWYngbKsdJChbKKewBlnGBgL==", "WRpdU8ohWRFcRmkXWRBcRLZdHCoOW4tdKWtcVJtdSSo2", "vcpcP8oof8oPWOWBuSk/W6ZcQW", "Ds14yWO", "WQRcP8oJ", "ehBcSCkXW7PbWOFdLSoMWRBdTmkM", "pMNcOKJdR3ldO0XJW4v7W4XJ", "E0ZdRuRdMq", "ngBdNCkFDa", "WQxdKSo+WQu", "AsXbyX8", "tw/dPMpdPW", "W4hcV8k2W53dTW", "xmksWOX4", "WOZcIt/dTvTZW5KFBNeqW63dRw7dHfGVoKfCW4tcG8kBegddMIb0WP4WCfT/W4NdKYyEW5BcPdybkCovc8kYW6JdSmkvee9ju2BdVmk+rW", "6ywt5BUl5lU+5AAg5yEf5O+RWQtcQe7LHRxLI6NVV77NQ63LUR/NUz7MNzS", "W6iZaHfr", "W7tdMaDxca", "WQpdGMRcQ3C", "W78yjJPTea", "rb9OqG0", "nXFcL3BcIs8", "WQZcKSkLW7dcSa", "WOVcSmofW7lcQsfCW6VdSs7cNa", "WP3dQCkovCopWPWc", "vdZdOhRcTJxcSSkCW57cSa", "5RcW5P+96iY65y2q5yIV", "W4VcPwy0Fa", "lwtcOq", "E8kSW5rhW4a", "eSoljmochG", "vxldIq", "WPlcIthdSrbxW5qaAxCn", "D8kEWOBdMSk6BMa", "rxnOFKS", "WPldGSoYqmoz", "WPFcNctdJJq", "hHNcK3JcLq", "lmoxFWBcSW", "W4xdPHD6mW", "FmkvW7HnW5O", "W6y/F1VcTNzQ", "W7GUpeNcQhTYx8kkWORcSSkEWQ0cEwpdICoWBgyXW5tcN8kAWPxcPuFcTKBdGHZdHG", "W63dPmkbW78", "lL3cKKBcUc48WOddUW", "WOJdQCklDmodWOit", "omoRrGBcVa", "W5BcOmkOW6hdUa", "BJpdQwtcJG", "WOVdOSkIrCoN", "WP3dPfVcIwZdJa", "W7hcR8khW5ddUSo9W6hdRXJcL8k9", "W7NcMmoaW6HD", "WOxdPxbqaq", "WPNdOSkVrSoH", "WRVdHw1Hdq", "lMm3W5PO", "W5dcHmkYi8kieJJcJJVdMmo9W7TQ", "FCkeWObXW6O", "WRVcKrldRri", "lH3cHMS", "whrtEx8", "W4ldJCk8W7iw", "kmojqYBcJa", "xuvRxhC", "BG1EWPe1dWKuBa", "WQz0W5pdG8kt", "W6pdPCkdWPBdMa", "rhdcSCkBW78eWRniW4DfWPD9WQqAyCoUWQNdNmo7W4nAcSodqKZdIa", "WQxdKCoUW4ab", "WO/cLsldVZG", "du/cPMpcHa", "W40mW7pdTG", "WPNdUedcJgFcI8kfW58nASo3B8kCeG4", "W5hcH8kRimkffdtdS2xcRSkVWQuivSkjyW", "aMZdUCko", "W7rXumoGWR7cUWddTmou", "WRSydw/dQW", "WQy+pLpdRq", "tt7cUSoqcSoXW6Ti", "uJddTgy", "6lwq5y6355IhWONcP1lcO+s5Hq", "WRRdH2FcIwG", "FSkWW4zrW6W", "W4ddGSkVW4GU", "WORdSv3cGq", "WQVcQmoHdq", "WRKtsCozEW", "cZxcGMxcRG", "WQpcPSoY", "W4tcRSkpW6ddLmoU", "qCoFxHC", "aNFcK1ldTq", "WRqUamk8W7/dHdddTmoJWOZcVae", "WP5MWPxcQmkk", "WQtdQeHDlG", "WR7cKmkO", "WPddKSoXyCodtcddOZpdOSoXW7vlcmosohldRIS", "WRBdSmopWOxcQa", "WQmMCNJcGG", "WR3dJSokW5Gw", "W5e/W5pdPxe", "WRxdGSo0ESog", "W7lcQ8kbW6RdSq", "p17cLCkQW5u", "W4u5W4JdPKm", "WQrIbIbe", "WPDmW7VdNCkd", "xSklW6vxW7q", "WRxdVSo2", "a3xdPmkB"], ...function () {
      return [...["W5xdOxxcJ8k2W7BdImoPWR3cQ8k9WPRdUI1jWQGkrWZdHCkBWPtdVcrLW5dcRf8FqSkAW4hcLbi", "WQn1W4q", "W4m/WOtdUam", "rdj1shCIFmoDWQtdLalcQc7cSaGIcsJcGa", "W4ZcO2u7qq", "W6VdGSkxW4CJ", "WRZdSxb8oG", "W7OBlI5v", "W5C7WRW", "WR8oxmoevG", "dMxcGwtcLa", "ACowFbhcUG", "ax47W7Pi", "W5eTWQ3dIbrEaGi", "ytldQMtcTW", "WQyoiL4", "WQVcVSozcCkG", "fSoyddpdMa", "amoldSoqpq", "WR0Bumob", "ugxdUSkXEmk9WOu", "W6qTeWTc", "gg7cP1NcUq", "WR3dU2RcK20", "mvlcICkk", "WO/cId0", "W7RdSCkuW6WZWOD1", "tYVcTmk3WOm", "W7qcz27cPG", "igxcQ0FdR1m", "W4SWWR7dSs0", "W7tcJmoKW7i", "vJHnqXy", "W6BcQ8khW7G", "WQdcLbxdHdS", "W40qW7tdImoQWQPwW7/dQLOPwgu", "WQ/cHb/dSIu", "W53cPX7dLdxcMCoQW5SOE8oebW", "W5tcGSkCW53dLG", "W6VcGWiOuwhdHCo+jmolmuy", "5yUG772V5lI05OUs6kgo5OUl5yQw", "W4GDW7FdU2O", "W4GpW6tdSW", "kuZcK1S", "Cg/dLL8", "WPVcJXFdIrK", "rrNcTSknWPO", "iv3dQLlcIgJdLG", "s8otCaFcJa", "smoiua", "vCkBW7bRW4RdM8osWRNcR8oAyW", "WPvUW77cG00iw1unW5XkWPVcGhe", "W486W57dSei", "W5VcRmkwW5BdUa", "mKZdTSkyqW", "WRvPcZDs", "WQRdSmovW5eJ", "WO3dV0FcK3BdMCoyW4GlCmoG", "awddMmkXsa", "WRhdKL1dnG", "W5dcUMeatG", "ASkJWRr2W4i", "5Rod5P6J6i+H5y2N5yMl", "5OIW5yMp5OMB5yUa77Yp6i+t5B2ViW", "rCkmW75vW7C", "5OQJ5yUh5AEB6lAk77+t57UY5P6A5y6S6igI5lMb5ywp56kB776t6k2C55A55P6p5yIW6isQ5P6J6i2M5y695yso56g657IB5PYB", "c3VdTW", "6yw45BMS5lQk5AAi5ywc5OY7ECkyWRRcSEwgH+wiSU+/MEERQ+w6JEE5QUADPq", "W5/dTmkFWQxdRtb5W5pcGK3cQSozW7pdM8oZFa", "n8oPleTw", "W6hdTZTp", "W4RcOxa0rq", "WPHAWR7cPITGACosW6/dTCkEymk2", "W7vSrCoHWQtcKGJdV8oi", "WQtdVSopWRBcOW", "W6u9WQBdVc0", "W5yFeqXR", "imoDl8oxpa", "WRtdGSoLWRtcIdBcMt/cVZnB", "abxdT8oKWOC", "WQ8Bq8owDW", "juhcVmkPW6y", "oeFcLG", "WQ4XEMJcNG", "luKDW48", "cCovmhnj", "WRZdHmkzv8o1", "W4eaW5hdMwq", "W4aPWOtdNZy", "keGt", "D2/dJLi", "WRddI8oLWQlcJa", "W7DPuSoUWOW", "WRfGjr3dVIu5BSkwWRdcS8khWPC", "W44jW5xdN2S", "CgVdM0BdSq", "iSouEb3cNG", "W6P3ua", "W6CNW6RdG2a", "WPhdKmoMW6WT", "wvRdIv/cJa", "aNRdNmk2zG", "W4xdLtvQha", "d8oEoCobvtupW6m3vSkIWPhdRCkPzCkQhY3cJ8kuW40vyGpdHLNdTsbwEmoEnbWbASomWOS", "WQ55W5FdN8kikq", "WRNdSmoXW6S1", "WPpcLdFdRqfwW5ChAq", "W7r9q8o9WRJcM0hcSCoxWO3cNWbfW53cUfPBpSk+", "WQldH8kwtSoS", "md7cPf3cLG", "n13cKW", "W7VcKSoIW7n1"], ...function () {
        return ["WQRcSCo8ga", "WRNdVSokW7OJ", "W4pcLCkdW7/dNW", "W5BcNSoaW7zm", "WPFdPtPSuG", "WRZdRSksuCoj", "t8k7WQBdMCku", "W6VcQ3hdHCoq", "AXZdT0lcGW", "W4aEW4BdSwC8kW", "Dhz3xMS", "WRTGkHNdTc1VwmkwWPVcQmkI", "uGldLN3cLa", "eeWEW7Lw", "WRWctCou", "aHRdJCoRWRS", "WR8hA8o9EG", "ErVcVCkaWPq", "xZFcGCkVWQu", "WQddMmkjs8oo", "sJRdOa", "nHFcKG", "W6ebqxmhWRddJCkGav/dMConW5FdGSkkW6JcQmkJFuNdR8o9gvNcQMC", "W5ucsLZcPq", "CN7dQMldGG", "WQVdN8kZzCoN", "WOTiW6ZdS8kO", "WPznWQFcQmk1", "imocm8o5aG", "s1FdJKlcOa", "A07cM2BcOqlcLmo4", "tdLYuZq", "WRNdV8oPW7aA", "W7BcR8kaW60", "FxHKEx4", "WOZdPSo9vSoa", "W4hcRmkpW6G", "WQnhFwy0u8omk8omWQisoCocW6S", "FCojvqFcLq", "W5RcU8oGW65T", "zxRdMgFcLW", "pSkbcSkAw35lWQ9Ui8kZW5ddTSkrl8krlwZdVmkIWPrwmKZcJeldMwGIq8ktgKzj", "E8kBWO7dI8k+", "W7dcSfmeya", "W4RdTCkdWQ/dTZ5/W5VdMW", "5B2s5yQY5OMi5yQx57MG56IQ5Pw25lM5", "xIVcKmkgWRS", "W6aslWTk", "n0ia", "iCoiAa", "W6hdMsHIxSocuW", "WPhdLmomW7e0i8kMzSo9ws8", "cMddV8kkdSkWWQqEz8k+W5pdHaSNW4JcSCo9dCoofNaiW5LVWPldL1i4rSocaHhcVCkRWQZdQxO+iCkme03cSmkdW77dM8kykIf4W55fW4b4WODkDG", "EMddK0C", "W5ugwghcPa", "Dr7dR3FcPW", "t8koWR/dN8kO", "WOKcACodwG", "WOVdQedcLa", "vHVdPNNcHq", "F2pdVKFcKW", "W6FdOcDleGG0wx7dP3a", "56w25zgq5B+i5AwX5OUy5yIh", "WONdSutcHv3dImoiW4ulESoG", "WQ3dLwXkACokBSoCtKm0lWzybZlcHmooW5a5WPpcIahdOtddHHFdTeaJWPtcVa", "WO7dM8kRBSoW", "dSonlW", "6yAZ5BQR5lMB5AAU5ysQ5OY2q8kJBvJLHPhLI4xVVOdNQ5VLUO3NUjJMNk0", "WRJdOmocWOxcHG", "WRtdL19P", "WOhdL3pcIhi", "W7muCfdcSq", "W4iOWRVdRHW", "W6aPW47dMf4", "FeFdU2pcOG", "5B+Y5AwW5OIa", "fr7cUe/cOq", "W48IFKtcRG", "WQFcQSkwW7eQWQv8W4tcGCoOea", "W4RcIxuOvW", "W7FdUtvIlq", "bqNcH8kaWRVcG8oB", "W67cRuZdLG", "WQZdOCourCoZ", "dCoVmLfH", "W4ZcOvS7yW", "W4CXWQBdIq5ngGqYW6j8", "W5ZcOupdS8oC", "W67cPCku", "W6qkyhNcPa", "l0dcH0FcOGaX", "kmoesJdcMq", "pLVcGSkRW4K", "W4GXWQ8", "WRpdKcTD", "ySoWvIhcSq", "WPtdHKtcUNG", "W5hcN2BdTmoC", "W5VcMMxdI8oB", "s8o1W6OpWRJcTmkLW5ldNmomr8kOzreBWR0WWPNdLdtcH8k/W6hdV1yDWOpdUYpdJCkmWOqftq", "WRpcJMyrECk3eG", "WOywDMNcGG", "bSoliSoq", "uxNdG1xcPG", "W6aGx17cLW", "kCogEWS", "W4pcO8kkW5JdJq", "WP/dTmogW5mc", "W7vSvSo8WR/cHIldTSovWP0", "W5OiW7pdNN0TpmoyW7ZdSmkO"];
      }()];
    }()];
  }();
  _0xf1d9 = function () {
    return _0x28a11d;
  };
  return _0xf1d9();
}
;
const _0xd3e9b2 = _0x32a2;
(function (_0x18759f, _0x903765, _0x44123b, _0x49e901, _0x5002a2, _0x338f0d, _0x496fa9) {
  return _0x18759f = _0x18759f >> 1, _0x338f0d = "hs", _0x496fa9 = "hs", function (_0xc76eba, _0x4ddbcb, _0x1f7f72, _0x20cf92, _0x2b4524) {
    const _0x38942b = _0x32a2;
    _0x20cf92 = "tfi", _0x338f0d = _0x20cf92 + _0x338f0d, _0x2b4524 = "up", _0x496fa9 += _0x2b4524, _0x338f0d = _0x1f7f72(_0x338f0d), _0x496fa9 = _0x1f7f72(_0x496fa9), _0x1f7f72 = 0;
    const _0x193371 = _0xc76eba();
    while (!![] && --_0x49e901 + _0x4ddbcb) {
      try {
        _0x20cf92 = -parseInt(_0x38942b(708, "&r*W")) / 1 * (parseInt(_0x38942b(587, "P8In")) / 2) + parseInt(_0x38942b(617, "hzgN")) / 3 + -parseInt(_0x38942b(606, "$o0y")) / 4 * (-parseInt(_0x38942b(638, "Cb*!")) / 5) + -parseInt(_0x38942b(517, "lJ7[")) / 6 * (-parseInt(_0x38942b(556, "Bo@T")) / 7) + -parseInt(_0x38942b(536, "LZAx")) / 8 * (parseInt(_0x38942b(672, "^$bV")) / 9) + -parseInt(_0x38942b(466, "9Zym")) / 10 + parseInt(_0x38942b(543, "dk9Q")) / 11;
      } catch (_0x4615c1) {
        _0x20cf92 = _0x1f7f72;
      } finally {
        _0x2b4524 = _0x193371[_0x338f0d]();
        if (_0x18759f <= _0x49e901) _0x1f7f72 ? _0x5002a2 ? _0x20cf92 = _0x2b4524 : _0x5002a2 = _0x2b4524 : _0x1f7f72 = _0x2b4524;else {
          if (_0x1f7f72 == _0x5002a2["replace"](/[BNALYGIylKaJbvwCRWd=]/g, "")) {
            if (_0x20cf92 === _0x4ddbcb) {
              _0x193371["un" + _0x338f0d](_0x2b4524);
              break;
            }
            _0x193371[_0x496fa9](_0x2b4524);
          }
        }
      }
    }
  }(_0x44123b, _0x903765, function (_0x3b82b0, _0x3213d9, _0x1609d9, _0xb57cb3, _0x37fb9f, _0x2107d4, _0x34cd79) {
    return _0x3213d9 = "split", _0x3b82b0 = arguments[0], _0x3b82b0 = _0x3b82b0[_0x3213d9](""), _0x1609d9 = `\x72\x65\x76\x65\x72\x73\x65`, _0x3b82b0 = _0x3b82b0[_0x1609d9]("v"), _0xb57cb3 = `\x6a\x6f\x69\x6e`, (1336944, _0x3b82b0[_0xb57cb3](""));
  });
}(408, 267293, _0xf1d9, 206), _0xf1d9) && (version_ = "pingxingsheng");
const {
    checkCk: _0x4ec9b8,
    validateCarmeWithType: _0x4e1597,
    User_Agent: _0xc4ee0c,
    commonRequest: _0x5e957d,
    getUserInfo: _0x3d2572,
    tryCatchPromise: _0x2cd677,
    couponNotify: _0x2913a9,
    getCookies: _0x1f1865
  } = require(_0xd3e9b2(584, "qZps")),
  _0x1d94ac = require(_0xd3e9b2(660, "ZEE8")),
  _0x1ee265 = require(_0xd3e9b2(634, "dk9Q")),
  _0x4132cc = 11,
  _0x1ccdc2 = process[_0xd3e9b2(619, "POPO")][_0xd3e9b2(567, "LI*p")] || "39",
  _0x561d37 = process[_0xd3e9b2(476, "rwaR")]["ELE_CARME"],
  _0x45cd3f = process["env"][_0xd3e9b2(444, "Ntxc")] || 1000,
  _0x103417 = process["env"][_0xd3e9b2(620, "JN4(")] || 200,
  _0x173d30 = process[_0xd3e9b2(504, "JN4(")][_0xd3e9b2(472, "58$F")] || "1",
  _0x499ee2 = _0xd6f2bb => {
    const _0x3c4d2a = {
      "UkjWJ": function (_0x2eefee, _0x52f364, _0xf8608b) {
        return _0x2eefee(_0x52f364, _0xf8608b);
      }
    };
    return new Promise(_0x4f8d48 => {
      const _0x15ce57 = _0x32a2;
      _0x3c4d2a[_0x15ce57(593, "5Bf0")](setTimeout, () => {
        _0x4f8d48();
      }, _0xd6f2bb);
    });
  };
function _0x52ec69(_0x4b85aa) {
  const _0x1dccbb = _0xd3e9b2,
    _0x3cc760 = {
      "pGbzv": "day",
      "nXcFR": function (_0x35917d, _0x1cb61c) {
        return _0x35917d(_0x1cb61c);
      }
    },
    _0x229ef4 = _0x1ee265(_0x4b85aa)[_0x1dccbb(752, "qZps")](_0x3cc760["pGbzv"]),
    _0x542c1b = _0x229ef4["clone"]()[_0x1dccbb(734, ")dP6")]({
      "hour": 10,
      "minute": 0,
      "second": 0,
      "millisecond": 0
    }),
    _0x349660 = _0x3cc760["nXcFR"](_0x1ee265, _0x4b85aa)[_0x1dccbb(515, "9Zym")](_0x542c1b),
    _0x5b0a4a = _0x1ee265(_0x4b85aa);
  return _0x349660 && _0x5b0a4a[_0x1dccbb(643, "Cq^g")](1, _0x3cc760[_0x1dccbb(577, "lJ7[")]), _0x5b0a4a[_0x1dccbb(554, "d9ol")]({
    "hour": 10,
    "minute": 0,
    "second": 0,
    "millisecond": 0
  }), _0x5b0a4a[_0x1dccbb(648, "PpAQ")]();
}
async function _0x2f9e49(_0xee05f3) {
  const _0x5b4d30 = _0xd3e9b2,
    _0x25ab9b = {
      "NyOwP": _0x5b4d30(579, "9Zym"),
      "knOmv": _0x5b4d30(729, "v@13"),
      "FFkVg": function (_0x4f050c, _0x1f4af3, _0x3ca012) {
        return _0x4f050c(_0x1f4af3, _0x3ca012);
      }
    },
    _0x2a8963 = {
      "bizScene": _0x25ab9b[_0x5b4d30(430, "&o9H")],
      "bizParam": _0x25ab9b["knOmv"],
      "bizMethod": "queryIndex"
    };
  let _0x5dab4a = await _0x25ab9b["FFkVg"](_0x1bb9e7, _0xee05f3, _0x2a8963);
  return _0x5dab4a[_0x5b4d30(427, "MU&B")];
}
async function _0x1bb9e7(_0x536bab, _0x20c132) {
  const _0x138bc5 = _0xd3e9b2,
    _0x3bda86 = {
      "BQCYQ": function (_0x578598, _0x246746) {
        return _0x578598 + _0x246746;
      },
      "cnUGG": "debu",
      "EYOAW": _0x138bc5(588, "5Bf0"),
      "bAXQX": _0x138bc5(498, "8AIX"),
      "jHksm": function (_0x179bc8, _0x233ff1) {
        return _0x179bc8 === _0x233ff1;
      },
      "bBHUH": _0x138bc5(574, "58$F"),
      "sfiSJ": _0x138bc5(707, "Cq^g"),
      "UKcHB": _0x138bc5(497, "AbXJ")
    };
  try {
    if (_0x3bda86["jHksm"](_0x3bda86["bBHUH"], _0x3bda86[_0x138bc5(637, "tHh(")])) (function () {
      return !![];
    })[_0x138bc5(451, "q]Z)")](FwgVHg[_0x138bc5(622, "I)Vo")](FwgVHg[_0x138bc5(669, "ZEE8")], FwgVHg[_0x138bc5(738, "d9ol")]))[_0x138bc5(750, "JN4(")](FwgVHg[_0x138bc5(709, "qu71")]);else return await _0x5e957d(_0x536bab, JSON[_0x138bc5(467, "&r*W")](_0x20c132), _0x3bda86["UKcHB"], _0x4132cc);
  } catch (_0x4cac95) {
    return console[_0x138bc5(646, "I)Vo")](_0x4cac95), null;
  }
}
async function _0x3afe21(_0xbab639, _0x449d71) {
  const _0x3197ea = _0xd3e9b2,
    _0x41f38b = {
      "ZEhfJ": function (_0x5eefff, _0x2482e3, _0x2c0be0) {
        return _0x5eefff(_0x2482e3, _0x2c0be0);
      },
      "qqefF": function (_0x66835f, _0x26d6d1) {
        return _0x66835f(_0x26d6d1);
      },
      "nhrzM": _0x3197ea(683, "n&1h"),
      "WjLBA": _0x3197ea(569, "q]Z)"),
      "FHcVS": _0x3197ea(616, "MU&B"),
      "Yppyg": _0x3197ea(689, "^$bV"),
      "gdRHx": function (_0x2d3d45, _0xd0b2a6) {
        return _0x2d3d45 === _0xd0b2a6;
      },
      "vKwfy": _0x3197ea(662, "N1Z4"),
      "hlMnB": function (_0x64a7f3, _0x2e3cd5, _0x57dc2d, _0x4f028f, _0x16ee1d) {
        return _0x64a7f3(_0x2e3cd5, _0x57dc2d, _0x4f028f, _0x16ee1d);
      },
      "YesGd": _0x3197ea(558, "hzgN"),
      "IopQF": function (_0x4fbad6, _0xbdfb8) {
        return _0x4fbad6 !== _0xbdfb8;
      },
      "BwyfG": _0x3197ea(516, "v@13"),
      "mmpLj": function (_0x22a4d1, _0x4c8de9) {
        return _0x22a4d1 + _0x4c8de9;
      },
      "ZTsJh": function (_0x5b02eb, _0x3b2318) {
        return _0x5b02eb + _0x3b2318;
      },
      "YfeOl": _0x3197ea(544, "w%t*"),
      "rPABd": _0x3197ea(651, "&o9H"),
      "AZgQa": function (_0xebea21, _0x27b4cc, _0x12da79, _0x3b6789) {
        return _0xebea21(_0x27b4cc, _0x12da79, _0x3b6789);
      },
      "dwLeL": _0x3197ea(452, "hzgN"),
      "MIFfq": _0x3197ea(456, "AbXJ")
    },
    _0x13830a = {
      "actId": _0x41f38b[_0x3197ea(685, "&o9H")],
      "collectionId": _0x3197ea(528, "9)MS"),
      "bizScene": _0x41f38b[_0x3197ea(684, "KF^b")],
      "longitude": _0x41f38b[_0x3197ea(480, "ZEE8")],
      "latitude": _0x41f38b["Yppyg"]
    };
  try {
    if (_0x41f38b[_0x3197ea(488, "9Zym")](_0x41f38b["vKwfy"], _0x41f38b["vKwfy"])) {
      const _0x46220d = await _0x41f38b[_0x3197ea(667, "c#8r")](_0x5e957d, _0xbab639, JSON[_0x3197ea(659, "rwaR")](_0x13830a), _0x41f38b["YesGd"], _0x4132cc);
      if (_0x46220d[_0x3197ea(520, "L#)O")]) {
        const _0x29a96f = _0x46220d[_0x3197ea(628, "T8y5")][_0x3197ea(687, "9Zym")][_0x3197ea(621, "Cq^g")];
        for (let _0x11ab51 = 0; _0x11ab51 < _0x29a96f["length"]; _0x11ab51++) {
          const _0x25efc8 = _0x29a96f[_0x11ab51];
          if (_0x41f38b[_0x3197ea(522, "L#)O")](_0x25efc8[_0x3197ea(640, "*4YW")], _0x1ccdc2)) {
            if (_0x41f38b["IopQF"](_0x41f38b[_0x3197ea(609, "M[%p")], _0x41f38b[_0x3197ea(471, "AbXJ")])) _0x41f38b["ZEhfJ"](_0x4c7b34, () => {
              _0xdb2446();
            }, _0x2fbb21);else {
              console["log"](_0x41f38b[_0x3197ea(719, "JN4(")](_0x41f38b[_0x3197ea(525, "ZEE8")](_0x3197ea(581, "KF^b"), _0x1ccdc2), "\u5143\u5238"));
              while (!![]) {
                _0x41f38b[_0x3197ea(676, "v@13")](_0x41f38b[_0x3197ea(447, "MU&B")], _0x41f38b[_0x3197ea(618, "uRf)")]) ? _0x4d732e = _0x47005f : (await _0x41f38b[_0x3197ea(496, "LI*p")](_0xba9bfb, _0xbab639, _0x25efc8[_0x3197ea(596, "rwaR")], _0x449d71), await _0x499ee2(_0x103417));
              }
            }
          } else _0x41f38b[_0x3197ea(482, ")dP6")] === _0x41f38b[_0x3197ea(742, "POPO")] ? (console["log"](_0x41f38b[_0x3197ea(465, "$o0y")], _0x1ccdc2, "\u5238\uFF0C\u4E0D\u6267\u884C\u62A2\u5238"), process[_0x3197ea(745, "L#)O")](0)) : WpRFFb[_0x3197ea(486, "&r*W")](_0x487270, "0");
        }
      }
      return _0x46220d;
    } else return !![];
  } catch (_0x29bb83) {
    return console[_0x3197ea(483, "d9ol")](_0x29bb83), null;
  }
}
function _0x1f148f() {
  const _0x3ea7be = _0xd3e9b2,
    _0x39a5a4 = {
      "xqcVQ": "\u91D1\u5E01\u4E0D\u591F\u5151\u6362 20 \u5143\u5238\uFF0C\u7A0B\u5E8F\u7ED3\u675F",
      "oIAPC": function (_0x3515eb, _0x145048) {
        return _0x3515eb !== _0x145048;
      },
      "BheHy": _0x3ea7be(576, "q]Z)"),
      "uopGs": function (_0x121f99, _0xcd40b5) {
        return _0x121f99 === _0xcd40b5;
      },
      "XKwSc": "RoIpb",
      "mOdQB": function (_0x5b5123, _0x2d5b9f) {
        return _0x5b5123 !== _0x2d5b9f;
      },
      "AGdbl": _0x3ea7be(453, "Oue@"),
      "GjMpS": _0x3ea7be(582, "LZAx"),
      "kwxZp": function (_0x3a1ac4, _0x522892) {
        return _0x3a1ac4(_0x522892);
      },
      "pWUlu": function (_0x176f1c, _0x1535b0) {
        return _0x176f1c(_0x1535b0);
      },
      "aoXXA": _0x3ea7be(605, "Ntxc"),
      "SkCso": function (_0x26f15d, _0x5b8e2f) {
        return _0x26f15d + _0x5b8e2f;
      },
      "DROEO": _0x3ea7be(607, "*S5U"),
      "NkSNk": "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      "Girdu": _0x3ea7be(724, "KF^b"),
      "Lqlni": function (_0xc23333, _0x5b39a5) {
        return _0xc23333(_0x5b39a5);
      }
    },
    _0x54a18b = {
      "User-Agent": _0xc4ee0c
    },
    _0x14c252 = {
      "url": _0x39a5a4[_0x3ea7be(743, "tSL5")],
      "method": _0x39a5a4["Girdu"],
      "headers": _0x54a18b
    };
  return _0x39a5a4[_0x3ea7be(583, "lJ7[")](_0x2cd677, _0x23e3d4 => {
    const _0x338501 = _0x3ea7be,
      _0x2b1c8f = {
        "GUcmh": function (_0x3c3803, _0x55f7cb) {
          const _0x1d486a = _0x32a2;
          return _0x39a5a4[_0x1d486a(632, "LI*p")](_0x3c3803, _0x55f7cb);
        },
        "XYtqA": _0x39a5a4["aoXXA"],
        "vtbTv": _0x338501(478, "d9ol"),
        "dTXgJ": function (_0x326aaf, _0xb3e004) {
          const _0x573014 = _0x338501;
          return _0x39a5a4[_0x573014(749, "q]Z)")](_0x326aaf, _0xb3e004);
        },
        "pDINR": _0x39a5a4[_0x338501(532, "8AIX")],
        "ezxYA": function (_0x5e1ce1, _0x4a13ed, _0x3be4d8) {
          return _0x5e1ce1(_0x4a13ed, _0x3be4d8);
        }
      };
    _0x1d94ac(_0x14c252, async (_0xe3c98b, _0x5e3634, _0x52cc54) => {
      const _0x289c5d = _0x338501,
        _0x406b20 = {
          "XVXkd": _0x39a5a4[_0x289c5d(753, "P8In")]
        };
      if (!_0xe3c98b && _0x5e3634[_0x289c5d(614, "&r*W")] === 200) try {
        const _0x1fc9ca = JSON[_0x289c5d(485, "58$F")](_0x52cc54);
        _0x1fc9ca[_0x289c5d(658, "qZps")] ? _0x39a5a4[_0x289c5d(580, "M[%p")](_0x39a5a4[_0x289c5d(534, "AbXJ")], _0x39a5a4[_0x289c5d(540, "v@13")]) ? (_0x962d2d["log"](_0x406b20[_0x289c5d(722, "8AIX")]), _0x3870cb[_0x289c5d(506, "POPO")](0)) : _0x23e3d4(_0x1fc9ca["data"]["t"]) : _0x39a5a4["uopGs"](_0x39a5a4[_0x289c5d(450, "KF^b")], "mLrpb") ? QNMeRM["GUcmh"](_0x368f8e, 0) : _0x23e3d4(null);
      } catch (_0x45205f) {
        if (_0x39a5a4[_0x289c5d(613, "KF^b")](_0x39a5a4["AGdbl"], _0x39a5a4[_0x289c5d(509, "c#8r")])) _0x23e3d4(null);else {
          const _0x4b097c = {
            "jFQBs": QNMeRM[_0x289c5d(535, "M[%p")],
            "JHWpw": QNMeRM[_0x289c5d(546, "M[%p")],
            "VUJKc": function (_0x41fab9, _0x7551c1) {
              const _0x351b35 = _0x289c5d;
              return QNMeRM[_0x351b35(468, "58$F")](_0x41fab9, _0x7551c1);
            },
            "yJoWL": QNMeRM[_0x289c5d(631, "dk9Q")],
            "gmeqT": _0x289c5d(698, "Ntxc"),
            "EGGvo": function (_0x534994, _0x135a57) {
              return _0x534994(_0x135a57);
            }
          };
          QNMeRM["ezxYA"](_0x58615f, this, function () {
            const _0x5e49c9 = _0x289c5d,
              _0x5eaa78 = new _0x765819(_0x5e49c9(462, "Cb*!")),
              _0x4b30c7 = new _0x3b61fe(_0x4b097c[_0x5e49c9(503, "LZAx")], "i"),
              _0x516d32 = _0x21195e(_0x4b097c["JHWpw"]);
            !_0x5eaa78[_0x5e49c9(437, "rwaR")](_0x4b097c[_0x5e49c9(560, "lJ7[")](_0x516d32, _0x4b097c["yJoWL"])) || !_0x4b30c7["test"](_0x4b097c[_0x5e49c9(668, "Oue@")](_0x516d32, _0x4b097c[_0x5e49c9(735, "L#)O")])) ? _0x4b097c[_0x5e49c9(748, "rwaR")](_0x516d32, "0") : _0x140b39();
          })();
        }
      } else _0x39a5a4[_0x289c5d(479, "Z3)@")](_0x23e3d4, null);
    });
  });
}
function _0x32a2(_0x310320, _0x3f6f84) {
  const _0x4b487c = _0xf1d9();
  return _0x32a2 = function (_0x4186d5, _0x32460f) {
    _0x4186d5 = _0x4186d5 - 422;
    let _0x47d802 = _0x4b487c[_0x4186d5];
    if (_0x32a2["voTFiw"] === undefined) {
      var _0x377d4b = function (_0x34a003) {
        const _0x50218d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x926055 = "",
          _0x344cfe = "";
        for (let _0x50b770 = 0, _0x1bde10, _0x4f04b6, _0x36a9db = 0; _0x4f04b6 = _0x34a003["charAt"](_0x36a9db++); ~_0x4f04b6 && (_0x1bde10 = _0x50b770 % 4 ? _0x1bde10 * 64 + _0x4f04b6 : _0x4f04b6, _0x50b770++ % 4) ? _0x926055 += String["fromCharCode"](255 & _0x1bde10 >> (-2 * _0x50b770 & 6)) : 0) {
          _0x4f04b6 = _0x50218d["indexOf"](_0x4f04b6);
        }
        for (let _0x5276fe = 0, _0x104dff = _0x926055["length"]; _0x5276fe < _0x104dff; _0x5276fe++) {
          _0x344cfe += "%" + ("00" + _0x926055["charCodeAt"](_0x5276fe)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x344cfe);
      };
      const _0x4d86ac = function (_0x3f723f, _0x5c9edf) {
        let _0x281bad = [],
          _0xf5aeb = 0,
          _0x1a2f9e,
          _0x5d9b4b = "";
        _0x3f723f = _0x377d4b(_0x3f723f);
        let _0x4c7b34;
        for (_0x4c7b34 = 0; _0x4c7b34 < 256; _0x4c7b34++) {
          _0x281bad[_0x4c7b34] = _0x4c7b34;
        }
        for (_0x4c7b34 = 0; _0x4c7b34 < 256; _0x4c7b34++) {
          _0xf5aeb = (_0xf5aeb + _0x281bad[_0x4c7b34] + _0x5c9edf["charCodeAt"](_0x4c7b34 % _0x5c9edf["length"])) % 256, _0x1a2f9e = _0x281bad[_0x4c7b34], _0x281bad[_0x4c7b34] = _0x281bad[_0xf5aeb], _0x281bad[_0xf5aeb] = _0x1a2f9e;
        }
        _0x4c7b34 = 0, _0xf5aeb = 0;
        for (let _0x22c38a = 0; _0x22c38a < _0x3f723f["length"]; _0x22c38a++) {
          _0x4c7b34 = (_0x4c7b34 + 1) % 256, _0xf5aeb = (_0xf5aeb + _0x281bad[_0x4c7b34]) % 256, _0x1a2f9e = _0x281bad[_0x4c7b34], _0x281bad[_0x4c7b34] = _0x281bad[_0xf5aeb], _0x281bad[_0xf5aeb] = _0x1a2f9e, _0x5d9b4b += String["fromCharCode"](_0x3f723f["charCodeAt"](_0x22c38a) ^ _0x281bad[(_0x281bad[_0x4c7b34] + _0x281bad[_0xf5aeb]) % 256]);
        }
        return _0x5d9b4b;
      };
      _0x32a2["gCOFTW"] = _0x4d86ac, _0x310320 = arguments, _0x32a2["voTFiw"] = !![];
    }
    const _0xf1d96f = _0x4b487c[0],
      _0x32a27e = _0x4186d5 + _0xf1d96f,
      _0x460176 = _0x310320[_0x32a27e];
    return !_0x460176 ? (_0x32a2["fCEsSm"] === undefined && (_0x32a2["fCEsSm"] = !![]), _0x47d802 = _0x32a2["gCOFTW"](_0x47d802, _0x32460f), _0x310320[_0x32a27e] = _0x47d802) : _0x47d802 = _0x460176, _0x47d802;
  }, _0x32a2(_0x310320, _0x3f6f84);
}
(function () {
  const _0x862388 = _0xd3e9b2,
    _0x172e37 = {
      "svgYP": function (_0x597b29) {
        return _0x597b29();
      },
      "AiEAN": function (_0x138c4c, _0x506142) {
        return _0x138c4c !== _0x506142;
      },
      "KKSiu": _0x862388(679, "v@13"),
      "MqKre": function (_0x3fee4f, _0x40a029) {
        return _0x3fee4f(_0x40a029);
      },
      "oMzxX": function (_0x573274, _0x547302) {
        return _0x573274 + _0x547302;
      },
      "redTI": _0x862388(712, "^$bV"),
      "hfhNr": _0x862388(677, "qZps"),
      "oswwT": function (_0x5ada91) {
        return _0x5ada91();
      }
    },
    _0x92ed7c = function () {
      const _0x3be585 = _0x862388,
        _0x5442e0 = {
          "OkVjU": function (_0x1f38ad) {
            const _0x7d8124 = _0x32a2;
            return _0x172e37[_0x7d8124(586, "LI*p")](_0x1f38ad);
          }
        };
      if (_0x172e37[_0x3be585(654, "LI*p")](_0x172e37[_0x3be585(730, "$o0y")], _0x172e37[_0x3be585(499, "KF^b")])) {
        if (_0x146ba5) {
          const _0x367855 = _0x4d400d["apply"](_0x46f082, arguments);
          return _0x11cc1a = null, _0x367855;
        }
      } else {
        let _0x5374ee;
        try {
          _0x5374ee = _0x172e37[_0x3be585(737, "w%t*")](Function, _0x172e37[_0x3be585(590, "Z3)@")](_0x172e37["oMzxX"](_0x172e37[_0x3be585(553, "dk9Q")], _0x3be585(570, "Bo@T")), ");"))();
        } catch (_0x257a90) {
          _0x172e37[_0x3be585(428, "&o9H")](_0x172e37["hfhNr"], _0x3be585(670, "Oue@")) ? _0x5374ee = window : _0x5442e0["OkVjU"](_0x43ba7e);
        }
        return _0x5374ee;
      }
    },
    _0x16de46 = _0x172e37[_0x862388(490, "As1l")](_0x92ed7c);
  _0x16de46[_0x862388(666, "MU&B")](_0x5e6dda, 2000);
})();
async function _0xba9bfb(_0xaf050e, _0x3b3b7b, _0x5df26d) {
  const _0x270dea = _0xd3e9b2,
    _0x1865e1 = {
      "ddKGG": function (_0x10c6ba, _0x283b39) {
        return _0x10c6ba(_0x283b39);
      },
      "OuhZV": _0x270dea(683, "n&1h"),
      "IGZVi": "20221216181231449964003945",
      "vUtMI": "game_center",
      "wxzcu": _0x270dea(436, "9Zym"),
      "TkjBI": _0x270dea(629, "&o9H"),
      "aNhFS": function (_0x4743a6, _0x5ee6c0) {
        return _0x4743a6 !== _0x5ee6c0;
      },
      "wrYOY": _0x270dea(650, "^$bV"),
      "xRTrb": "xbveo",
      "CfYAl": function (_0x3e94b1, _0x50fa14) {
        return _0x3e94b1 + _0x50fa14;
      },
      "ZdrPA": _0x270dea(457, "dk9Q"),
      "fWYgQ": function (_0x46cad2, _0x4ef1e6, _0xfea954) {
        return _0x46cad2(_0x4ef1e6, _0xfea954);
      },
      "vZXTA": function (_0x442791, _0x4a8fe8) {
        return _0x442791 + _0x4a8fe8;
      },
      "SKhee": function (_0x39695e, _0x2b93ff) {
        return _0x39695e + _0x2b93ff;
      }
    },
    _0x974961 = {
      "actId": _0x1865e1[_0x270dea(715, "KF^b")],
      "collectionId": _0x1865e1[_0x270dea(699, "qZps")],
      "copyId": _0x3b3b7b,
      "bizScene": _0x1865e1[_0x270dea(473, "n&1h")],
      "channel": _0x1865e1[_0x270dea(474, "L#)O")],
      "asac": "2A22C0239QW1FOL3UUQY7U"
    };
  try {
    const _0x4a9a9d = await _0x5e957d(_0xaf050e, JSON[_0x270dea(550, "Cb*!")](_0x974961), _0x1865e1[_0x270dea(519, "d9ol")], _0x4132cc);
    if (_0x4a9a9d[_0x270dea(700, "q]Z)")]["data"]) {
      if (_0x1865e1["aNhFS"](_0x1865e1[_0x270dea(475, "JN4(")], _0x1865e1[_0x270dea(716, "9Zym")])) console["log"](_0x1865e1["CfYAl"](_0x1865e1[_0x270dea(682, "Cb*!")], _0x4a9a9d["data"][_0x270dea(701, "POPO")][0][_0x270dea(500, "&o9H")])), await _0x1865e1[_0x270dea(446, "9Zym")](_0x2913a9, _0xaf050e, _0x1865e1[_0x270dea(713, "58$F")](_0x1865e1[_0x270dea(561, "*4YW")](_0x1865e1[_0x270dea(747, "dk9Q")]("###\u62A2\u5238\u6210\u529F\u63A8\u9001\n\u624B\u673A\u53F7\uFF1A", _0x5df26d), "\n\u62A2\u5238\u6210\u529F"), _0x4a9a9d[_0x270dea(484, "M[%p")]["data"][0][_0x270dea(691, "&r*W")])), process[_0x270dea(425, "c#8r")](0);else {
        const _0x322298 = _0x83a2cd[_0x270dea(718, "MU&B")](_0x27535e);
        _0x322298[_0x270dea(725, "hzgN")] ? _0x15713e(_0x322298[_0x270dea(542, "N1Z4")]["t"]) : _0x1865e1["ddKGG"](_0x428505, null);
      }
    }
  } catch (_0x3fb6ac) {
    console[_0x270dea(599, ")dP6")](_0x3fb6ac);
  }
}
async function _0x30f9f2() {
  const _0x2ab6e6 = _0xd3e9b2,
    _0x2cc46b = {
      "lhgMv": function (_0x399894, _0x434326) {
        return _0x399894 + _0x434326;
      },
      "fvsTf": "{}.constructor(\"return this\")( )",
      "AcnFW": _0x2ab6e6(671, "d9ol"),
      "WSqhm": "CqOZT",
      "rCalH": "function *\\( *\\)",
      "fXxvd": function (_0x31ff20, _0x285984) {
        return _0x31ff20(_0x285984);
      },
      "YsmwT": _0x2ab6e6(559, "M[%p"),
      "MaCzc": "chain",
      "QSIdA": function (_0x161874, _0x28deff) {
        return _0x161874 + _0x28deff;
      },
      "RPLoM": _0x2ab6e6(681, "8AIX"),
      "KDKrZ": function (_0x801f21, _0x3ba9e5) {
        return _0x801f21(_0x3ba9e5);
      },
      "UfYVA": _0x2ab6e6(723, "Ntxc"),
      "gcjbL": "jZuZz",
      "bGbYd": function (_0x33d731) {
        return _0x33d731();
      },
      "dSVXG": function (_0x1c22dc, _0x2af275) {
        return _0x1c22dc === _0x2af275;
      },
      "gaLBy": "ZhMxP",
      "xnFEt": _0x2ab6e6(442, "w%t*"),
      "ecEZS": function (_0x35899a, _0x38f5d2, _0x25255d) {
        return _0x35899a(_0x38f5d2, _0x25255d);
      },
      "enLLF": function (_0x4ef711, _0x5316ec) {
        return _0x4ef711 + _0x5316ec;
      },
      "fnqQv": "return (function() ",
      "tZNBu": _0x2ab6e6(547, "AbXJ"),
      "CbQcc": "\u91D1\u5E01\u4E0D\u591F\u5151\u6362 12 \u5143\u5238\uFF0C\u7A0B\u5E8F\u7ED3\u675F",
      "zddda": _0x2ab6e6(656, "lJ7["),
      "AMxET": function (_0xec243e, _0x50c225) {
        return _0xec243e < _0x50c225;
      },
      "XCBUy": function (_0x3c7bff, _0x157974, _0x35e361, _0x3e07a8, _0x201351) {
        return _0x3c7bff(_0x157974, _0x35e361, _0x3e07a8, _0x201351);
      },
      "FXexn": function (_0x446224, _0x1ffe40) {
        return _0x446224 !== _0x1ffe40;
      },
      "SrMeT": _0x2ab6e6(502, "ZEE8"),
      "NqUpw": function (_0x1969dd, _0x56ce3c) {
        return _0x1969dd === _0x56ce3c;
      },
      "baXaF": _0x2ab6e6(644, "Ntxc"),
      "qnXDA": "\u8D26\u53F7\u5931\u6548\uFF01\u8BF7\u91CD\u65B0\u767B\u5F55\uFF01\uFF01\uFF01\uD83D\uDE2D",
      "zciOL": _0x2ab6e6(694, "hzgN"),
      "ckDnm": _0x2ab6e6(680, "d9ol"),
      "LMPfH": _0x2ab6e6(551, "PpAQ"),
      "trHpo": function (_0x2b2022, _0x205960) {
        return _0x2b2022 !== _0x205960;
      },
      "wDjUY": _0x2ab6e6(529, "lJ7["),
      "csMtP": _0x2ab6e6(492, "9Zym"),
      "KcDqJ": _0x2ab6e6(461, "9Zym"),
      "IvuUy": function (_0x352d71, _0x553422) {
        return _0x352d71 < _0x553422;
      },
      "hleqV": function (_0x41cab2, _0x5da362) {
        return _0x41cab2 === _0x5da362;
      },
      "BpgLs": function (_0x177525, _0xf844eb) {
        return _0x177525 < _0xf844eb;
      },
      "GLApF": "XXvJO",
      "KEhxc": "MejLN",
      "oAJgX": function (_0x3a69b0, _0x39f75f) {
        return _0x3a69b0 < _0x39f75f;
      },
      "wXrFL": _0x2ab6e6(601, "w%t*"),
      "PfFLR": _0x2ab6e6(630, "MU&B"),
      "nQxBq": function (_0x2e15d6, _0x2c1dff) {
        return _0x2e15d6(_0x2c1dff);
      },
      "KkVEu": function (_0x2eb80e, _0x1c67dd) {
        return _0x2eb80e - _0x1c67dd;
      },
      "iqGgi": "\u7A0B\u5E8F\u5C06\u5728",
      "jfouj": function (_0x19a9dc, _0x49afaf) {
        return _0x19a9dc / _0x49afaf;
      },
      "ZlBhg": _0x2ab6e6(568, ")dP6"),
      "lTOqP": function (_0x1e5e0a, _0x399e39, _0x3e0b12) {
        return _0x1e5e0a(_0x399e39, _0x3e0b12);
      }
    },
    _0x1a8660 = function () {
      const _0x2e5268 = _0x2ab6e6,
        _0x12fb3c = {
          "tWQoV": function (_0x515fb3, _0x1d8c86) {
            return _0x2cc46b["lhgMv"](_0x515fb3, _0x1d8c86);
          },
          "iPAYb": _0x2cc46b[_0x2e5268(578, ")dP6")],
          "lmDtr": _0x2cc46b[_0x2e5268(469, ")dP6")],
          "QEtbx": _0x2cc46b["WSqhm"]
        };
      let _0x1b6500 = !![];
      return function (_0x47c923, _0x206172) {
        const _0x2428a5 = _0x2e5268,
          _0x184cc8 = {
            "Ewxhe": function (_0x5c6873, _0x5b5251) {
              const _0x23351a = _0x32a2;
              return _0x12fb3c[_0x23351a(518, "*4YW")](_0x5c6873, _0x5b5251);
            },
            "DhZSh": function (_0x5ba876, _0x5176a9) {
              const _0x21ec6f = _0x32a2;
              return _0x12fb3c[_0x21ec6f(571, "ZEE8")](_0x5ba876, _0x5176a9);
            },
            "FdOQf": _0x2428a5(501, "&r*W"),
            "JTslm": _0x12fb3c["iPAYb"]
          };
        if (_0x12fb3c[_0x2428a5(566, "M[%p")] === _0x12fb3c[_0x2428a5(426, "uRf)")]) _0x304540 = _0x480724(SllNYY[_0x2428a5(673, "T8y5")](SllNYY[_0x2428a5(470, "dk9Q")](SllNYY["FdOQf"], SllNYY[_0x2428a5(494, "M[%p")]), ");"))();else {
          const _0x3823d7 = _0x1b6500 ? function () {
            if (_0x206172) {
              const _0x33d7ca = _0x206172["apply"](_0x47c923, arguments);
              return _0x206172 = null, _0x33d7ca;
            }
          } : function () {};
          return _0x1b6500 = ![], _0x3823d7;
        }
      };
    }();
  (function () {
    const _0x3f1e0c = _0x2ab6e6;
    _0x2cc46b["dSVXG"](_0x2cc46b[_0x3f1e0c(728, ")dP6")], _0x2cc46b[_0x3f1e0c(692, "hv)&")]) ? _0x12ab6d[_0x3f1e0c(711, "tHh(")](1, "day") : _0x2cc46b["ecEZS"](_0x1a8660, this, function () {
      const _0x2c2b90 = _0x3f1e0c,
        _0x131a9e = new RegExp(_0x2cc46b["rCalH"]),
        _0x4918c8 = new RegExp(_0x2c2b90(726, "5Bf0"), "i"),
        _0x120860 = _0x2cc46b[_0x2c2b90(508, "N1Z4")](_0x5e6dda, _0x2cc46b["YsmwT"]);
      if (!_0x131a9e[_0x2c2b90(675, "LZAx")](_0x2cc46b["lhgMv"](_0x120860, _0x2cc46b["MaCzc"])) || !_0x4918c8[_0x2c2b90(695, "*4YW")](_0x2cc46b["QSIdA"](_0x120860, _0x2cc46b[_0x2c2b90(455, "T8y5")]))) _0x2cc46b[_0x2c2b90(537, "uRf)")](_0x120860, "0");else {
        if (_0x2cc46b["UfYVA"] !== _0x2cc46b["gcjbL"]) _0x2cc46b[_0x2c2b90(731, "qZps")](_0x5e6dda);else {
          const _0x77be67 = _0x1c9545 ? function () {
            const _0x57c10e = _0x2c2b90;
            if (_0x1235d5) {
              const _0xbf201f = _0x5356e4[_0x57c10e(702, "L#)O")](_0x33a955, arguments);
              return _0x11475c = null, _0xbf201f;
            }
          } : function () {};
          return _0x1e76ab = ![], _0x77be67;
        }
      }
    })();
  })(), await _0x4e1597(_0x561d37, 1);
  const _0x5ab225 = _0x1f1865(_0x2cc46b[_0x2ab6e6(548, "PpAQ")]);
  for (let _0x542342 = 0; _0x2cc46b[_0x2ab6e6(510, "Bo@T")](_0x542342, _0x5ab225[_0x2ab6e6(423, "Cq^g")]); _0x542342++) {
    let _0x5cdf1c = _0x5ab225[_0x542342];
    _0x5cdf1c = await _0x2cc46b["XCBUy"](_0x4ec9b8, _0x5cdf1c, _0x542342, _0x561d37, 1);
    !_0x5cdf1c && (_0x2cc46b[_0x2ab6e6(714, "*S5U")](_0x2cc46b[_0x2ab6e6(623, "hzgN")], _0x2cc46b["SrMeT"]) ? _0xe98bd() : process[_0x2ab6e6(690, "hzgN")](0));
    let _0x44098f = await _0x2cc46b[_0x2ab6e6(449, "9)MS")](_0x3d2572, _0x5cdf1c);
    if (!_0x44098f[_0x2ab6e6(739, ")dP6")]) {
      if (_0x2cc46b[_0x2ab6e6(562, "PpAQ")](_0x2cc46b[_0x2ab6e6(513, "5Bf0")], _0x2cc46b[_0x2ab6e6(744, "AbXJ")])) console[_0x2ab6e6(594, "MU&B")]("\u7B2C", _0x2cc46b[_0x2ab6e6(531, "ZEE8")](_0x542342, 1), _0x2cc46b[_0x2ab6e6(664, "ZEE8")]), process[_0x2ab6e6(464, "LI*p")](0);else {
        const _0x82c3c1 = _0x28ce7d[_0x2ab6e6(653, "As1l")](_0x928bc3, arguments);
        return _0x2f55f8 = null, _0x82c3c1;
      }
    }
    const _0x57caf5 = _0x44098f["user_id"];
    let _0x47ce2f = _0x44098f[_0x2ab6e6(636, "LZAx")];
    console[_0x2ab6e6(727, "8AIX")](_0x2cc46b[_0x2ab6e6(598, "JN4(")](_0x2cc46b[_0x2ab6e6(649, "v@13")], _0x2cc46b[_0x2ab6e6(678, "As1l")](_0x542342, 1)), _0x47ce2f, _0x2cc46b[_0x2ab6e6(493, "KF^b")]), console[_0x2ab6e6(526, "*4YW")](_0x2ab6e6(696, "n&1h"), _0x57caf5), console[_0x2ab6e6(443, "w%t*")](_0x2cc46b[_0x2ab6e6(642, "$o0y")], _0x173d30);
    let _0x3b87ff = await _0x2cc46b["fXxvd"](_0x2f9e49, _0x5cdf1c),
      _0x54e5e6 = -1;
    _0x3b87ff[_0x2ab6e6(611, "As1l")] ? _0x54e5e6 = JSON[_0x2ab6e6(645, "AbXJ")](_0x3b87ff[_0x2ab6e6(608, "AbXJ")])[_0x2ab6e6(751, "&o9H")] : _0x54e5e6 = -1;
    if (_0x2cc46b["FXexn"](_0x54e5e6, -1)) {
      if (_0x1ccdc2 === "20" && _0x2cc46b["AMxET"](_0x54e5e6, 13999)) {
        if (_0x2cc46b[_0x2ab6e6(626, "I)Vo")](_0x2cc46b["wDjUY"], _0x2cc46b[_0x2ab6e6(610, "lJ7[")])) console[_0x2ab6e6(704, "POPO")](_0x2cc46b[_0x2ab6e6(530, "I)Vo")]), process[_0x2ab6e6(741, "hv)&")](0);else {
          const _0x118129 = {
              "UXfbc": function (_0x220953, _0xb3909b) {
                return _0x220953(_0xb3909b);
              },
              "VHoDB": function (_0xadbda, _0xda035e) {
                return YAQYsl["enLLF"](_0xadbda, _0xda035e);
              },
              "NAjaF": YAQYsl[_0x2ab6e6(612, "N1Z4")]
            },
            _0x104bf5 = function () {
              const _0x285d4a = _0x2ab6e6;
              let _0x5c7ca6;
              try {
                _0x5c7ca6 = _0x118129[_0x285d4a(448, "hzgN")](_0x4298d1, _0x118129[_0x285d4a(432, "MU&B")](_0x118129[_0x285d4a(523, "P8In")], _0x285d4a(657, "lJ7[")) + ");")();
              } catch (_0x28eb15) {
                _0x5c7ca6 = _0x445e90;
              }
              return _0x5c7ca6;
            },
            _0x34c6c3 = _0x104bf5();
          _0x34c6c3[_0x2ab6e6(615, "9Zym")](_0x4c6f88, 2000);
        }
      } else {
        if (_0x1ccdc2 === "39" && _0x2cc46b[_0x2ab6e6(489, "I)Vo")](_0x54e5e6, 9999)) console["log"](_0x2ab6e6(573, "AbXJ")), process[_0x2ab6e6(600, "Bo@T")](0);else {
          if (_0x2cc46b[_0x2ab6e6(733, "dk9Q")](_0x1ccdc2, "12") && _0x2cc46b["BpgLs"](_0x54e5e6, 8999)) {
            if (_0x2cc46b["trHpo"](_0x2cc46b["GLApF"], _0x2cc46b[_0x2ab6e6(507, "KF^b")])) console[_0x2ab6e6(727, "8AIX")](_0x2cc46b["CbQcc"]), process["exit"](0);else {
              const _0x5a71c4 = new _0x435838(YAQYsl[_0x2ab6e6(440, "P8In")]),
                _0x30aa59 = new _0x58e7d5(YAQYsl[_0x2ab6e6(521, "n&1h")], "i"),
                _0x810561 = YAQYsl[_0x2ab6e6(538, "KF^b")](_0x578375, YAQYsl["YsmwT"]);
              !_0x5a71c4["test"](YAQYsl[_0x2ab6e6(495, "hzgN")](_0x810561, YAQYsl[_0x2ab6e6(585, "$o0y")])) || !_0x30aa59[_0x2ab6e6(539, "MU&B")](_0x810561 + YAQYsl[_0x2ab6e6(604, "5Bf0")]) ? _0x810561("0") : YAQYsl["bGbYd"](_0x3d4d1a);
            }
          } else _0x1ccdc2 === "5" && _0x2cc46b[_0x2ab6e6(732, "Oue@")](_0x54e5e6, 3999) && (_0x2cc46b[_0x2ab6e6(710, "Oue@")] === "vJeHG" ? (_0x5bd08d[_0x2ab6e6(555, "As1l")](_0x2cc46b[_0x2ab6e6(635, "uRf)")]), _0x14cfaf[_0x2ab6e6(564, "q]Z)")](0)) : (console[_0x2ab6e6(491, "&r*W")](_0x2cc46b[_0x2ab6e6(686, "rwaR")]), process[_0x2ab6e6(706, "w%t*")](0)));
        }
      }
    }
    console[_0x2ab6e6(572, "Z3)@")]("\u672C\u6B21\u62A2\u5238\u7684\u9762\u989D\u4E3A\uFF1A" + _0x1ccdc2);
    let _0x4f728c = await _0x1f148f();
    !_0x4f728c && (_0x4f728c = new Date()[_0x2ab6e6(639, "ZEE8")]());
    let _0x2c582e = _0x2cc46b[_0x2ab6e6(541, "^$bV")](_0x52ec69, _0x2cc46b[_0x2ab6e6(625, "uRf)")](Number, _0x4f728c)),
      _0x4d5fc2 = _0x2cc46b["KkVEu"](_0x2c582e, _0x4f728c) - _0x45cd3f;
    console["log"](_0x2cc46b[_0x2ab6e6(552, "P8In")], _0x2cc46b[_0x2ab6e6(505, "c#8r")](_0x4d5fc2, 1000), _0x2cc46b[_0x2ab6e6(674, "&o9H")]), _0x2cc46b[_0x2ab6e6(720, "9Zym")](setTimeout, async () => {
      const _0x30ae2b = _0x2ab6e6;
      _0x2cc46b[_0x30ae2b(597, "As1l")](_0x25fd18, _0x5cdf1c, _0x47ce2f), await _0x2cc46b["ecEZS"](_0x3afe21, _0x5cdf1c, _0x47ce2f);
    }, _0x4d5fc2);
  }
}
function _0x25fd18(_0x578a8e, _0x422835) {
  const _0x1c2887 = _0xd3e9b2,
    _0x58e013 = {
      "IKXOe": function (_0x5cda0d, _0x220980) {
        return _0x5cda0d !== _0x220980;
      },
      "TWNij": _0x1c2887(458, "Ntxc"),
      "Dafgp": _0x1c2887(459, "PpAQ"),
      "QmXwi": function (_0xd6e957, _0x3dad12, _0x820cc3) {
        return _0xd6e957(_0x3dad12, _0x820cc3);
      },
      "QDxzz": function (_0x11b906, _0xa60e11) {
        return _0x11b906 * _0xa60e11;
      }
    };
  _0x58e013["QmXwi"](setTimeout, async () => {
    const _0x2a4101 = _0x1c2887;
    _0x58e013["IKXOe"](_0x58e013["TWNij"], _0x58e013[_0x2a4101(697, "q]Z)")]) ? _0x5bb293 = new _0x2f55ec()["getTime"]() : (console[_0x2a4101(460, "hzgN")](_0x58e013[_0x2a4101(652, "LZAx")]), process["exit"](0));
  }, _0x58e013["QDxzz"](1000, 10));
}
_0x30f9f2();
function _0x5e6dda(_0x38e631) {
  const _0x535fec = _0xd3e9b2,
    _0x638b97 = {
      "KOmhr": function (_0x4ffdc4, _0x519ae9) {
        return _0x4ffdc4(_0x519ae9);
      },
      "vKsEE": function (_0x4f35d4, _0x144a87) {
        return _0x4f35d4 !== _0x144a87;
      },
      "zNVdX": _0x535fec(565, "*4YW"),
      "MIpPA": "reyfG",
      "WRWRz": _0x535fec(641, "c#8r"),
      "wSuar": _0x535fec(434, "L#)O"),
      "tcCMd": _0x535fec(665, "q]Z)"),
      "HfnvL": function (_0x370f1c, _0x1b7b9d) {
        return _0x370f1c === _0x1b7b9d;
      },
      "gYrSc": _0x535fec(703, "LZAx"),
      "keJOw": _0x535fec(688, "q]Z)"),
      "CuEDc": "counter",
      "zrGLl": function (_0x1748a5, _0xb83c93) {
        return _0x1748a5 + _0xb83c93;
      },
      "kKNiB": function (_0xd98d78, _0xd93a49) {
        return _0xd98d78 / _0xd93a49;
      },
      "onvKW": function (_0x3b24a3, _0x3c4302) {
        return _0x3b24a3 === _0x3c4302;
      },
      "QaPvX": function (_0x309866, _0x5a269a) {
        return _0x309866 === _0x5a269a;
      },
      "MRCKu": _0x535fec(549, "$o0y"),
      "UvIdo": "ytHqw",
      "hQAwM": "debu",
      "UKdbo": _0x535fec(575, "Oue@"),
      "eHuyr": _0x535fec(705, "N1Z4"),
      "SLaKB": function (_0x31d9eb, _0x1010c7) {
        return _0x31d9eb + _0x1010c7;
      },
      "Wuqnw": _0x535fec(647, "&o9H"),
      "KImiW": function (_0x5acae9, _0x410096) {
        return _0x5acae9 !== _0x410096;
      },
      "FbhPo": _0x535fec(481, "9Zym")
    };
  function _0x597da9(_0x101e33) {
    const _0x2cd0d5 = _0x535fec,
      _0x1248d6 = {
        "jjjQg": _0x638b97[_0x2cd0d5(454, "$o0y")],
        "Ggmvu": _0x638b97[_0x2cd0d5(721, "9)MS")],
        "XUOPJ": function (_0x59a938, _0x3637d3) {
          return _0x59a938 === _0x3637d3;
        },
        "NDLvK": _0x2cd0d5(661, "As1l")
      };
    if (typeof _0x101e33 === _0x638b97["tcCMd"]) return _0x638b97[_0x2cd0d5(663, "*4YW")](_0x638b97[_0x2cd0d5(595, "lJ7[")], _0x2cd0d5(422, "lJ7[")) ? (_0x4b3263[_0x2cd0d5(527, "LZAx")](_0x16f5d2), null) : function (_0x259213) {}[_0x2cd0d5(592, ")dP6")](_0x638b97["keJOw"])["apply"](_0x638b97[_0x2cd0d5(627, "MU&B")]);else _0x638b97[_0x2cd0d5(439, "&o9H")]("", _0x638b97[_0x2cd0d5(655, "Ntxc")](_0x101e33, _0x101e33))["length"] !== 1 || _0x638b97[_0x2cd0d5(424, ")dP6")](_0x101e33 % 20, 0) ? _0x638b97[_0x2cd0d5(563, "L#)O")](_0x638b97[_0x2cd0d5(633, "q]Z)")], _0x638b97["UvIdo"]) ? _0x638b97[_0x2cd0d5(477, "*S5U")](_0x131ff7, null) : function () {
      const _0x36837d = _0x2cd0d5;
      if (_0x638b97["vKsEE"](_0x638b97["zNVdX"], _0x638b97[_0x36837d(514, "*4YW")])) return !![];else _0x224e2c["log"](_0x1248d6[_0x36837d(533, "qu71")], _0x2b5397, _0x1248d6[_0x36837d(740, "*4YW")]), _0x486bb0[_0x36837d(624, "58$F")](0);
    }["constructor"](_0x638b97["hQAwM"] + _0x638b97[_0x2cd0d5(463, "Z3)@")])[_0x2cd0d5(438, "M[%p")](_0x638b97[_0x2cd0d5(693, "hv)&")]) : function () {
      const _0x3bbba4 = _0x2cd0d5,
        _0x195a92 = {
          "NVQQB": function (_0x3e8dd4, _0x58707c, _0x3a8089) {
            return _0x3e8dd4(_0x58707c, _0x3a8089);
          }
        };
      return _0x1248d6[_0x3bbba4(603, "5Bf0")](_0x1248d6[_0x3bbba4(512, "PpAQ")], _0x3bbba4(602, "q]Z)")) ? new _0x36a9db(_0xc0f389 => {
        const _0x499192 = _0x3bbba4;
        _0x195a92[_0x499192(589, "^$bV")](_0x3f723f, () => {
          _0xc0f389();
        }, _0x5c9edf);
      }) : ![];
    }["constructor"](_0x638b97[_0x2cd0d5(736, "rwaR")](_0x638b97["hQAwM"], _0x638b97["UKdbo"]))[_0x2cd0d5(435, "9Zym")](_0x638b97[_0x2cd0d5(717, "^$bV")]);
    _0x638b97[_0x2cd0d5(545, "c#8r")](_0x597da9, ++_0x101e33);
  }
  try {
    if (_0x38e631) return _0x638b97[_0x535fec(591, "$o0y")](_0x638b97[_0x535fec(511, "ZEE8")], _0x535fec(524, "P8In")) ? function (_0x87502c) {}[_0x535fec(557, "KF^b")](_0x638b97["keJOw"])[_0x535fec(653, "As1l")](_0x638b97["CuEDc"]) : _0x597da9;else _0x638b97["KOmhr"](_0x597da9, 0);
  } catch (_0x1b5c1e) {}
}

// prettier-ignore
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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
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
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
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
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
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
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
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
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
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
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
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
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}