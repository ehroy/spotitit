function _0x2960(_0x2d919c, _0x59ab0a) {
  const _0x19eb63 = _0x19eb();
  return (
    (_0x2960 = function (_0x2960d5, _0x2b8d9f) {
      _0x2960d5 = _0x2960d5 - 0x176;
      let _0x233946 = _0x19eb63[_0x2960d5];
      return _0x233946;
    }),
    _0x2960(_0x2d919c, _0x59ab0a)
  );
}
function _0x19eb() {
  const _0x4c6dcf = [
    "4.27.2",
    "okhttp/3.12.13",
    "application/json",
    "1:UNKNOWN,2:UNKNOWN,3:1631626880354-3511426940583375156,4:12756,5:|UNKNOWN|4,6:UNKNOWN,7:\x22WiredSSID\x22,8:768x1184,9:,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2002,14:1631627063",
    "https://customer.gopayapi.com/v2/payments/",
    "greenBright",
    "tokengojek",
    "AKUN\x20GOJEK\x20STATUS\x20AKTIF",
    "api.gojekapi.com",
    "QR_CODE",
    "customer.gopayapi.com",
    "5298636YXFLTf",
    "4QgZZsL",
    "4EwKeLM",
    "Fri,\x2011\x20Feb\x202022\x2013:40:11\x20GMT",
    "symbol",
    "floor",
    "6148824dDhHUf",
    "Android",
    "17:AC:A3:A5:AD:0B:5E:27:A1:A1:42:32:FF:CF:15:CB:2C:11:C6:8C:BB:8E:6B:BB:F2:70:DA:EE:38:47:BE:60",
    "random",
    "metadata",
    "charAt",
    "1:UNKNOWN,2:UNKNOWN,3:1634552877872-4410887987191940410,4:15193,5:gmin|2400|4,6:10:D0:FF:51:13:26,7:\x22cnqwjfk403\x22,8:720x1280,9:passive,gps,network,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2001,14:1644586815",
    "PATCH",
    "application/json;\x20charset=UTF-8",
    "checksum",
    "en-ID",
    "2236",
    "en_ID",
    "FCM",
    "customer",
    "delay",
    "log",
    "918006vHWbsa",
    "Bearer\x20",
    "then",
    "yellowBright",
    "http://api.qrserver.com/v1/read-qr-code/?fileurl=",
    "token",
    "length",
    "Android,xiaomi\x20redmi\x20note\x207",
    "0.0",
    "309258wvlqpG",
    "Android,7.0",
    "json",
    "gzip",
    "redBright",
    "jumlahpay",
    "2369435beSYEY",
    "balance",
    "./data.json",
    "/capture",
    "65.9667,-18.",
    "Keep-Alive",
    "payment_id",
    "12330711croPZa",
    "GET",
    "data",
    "619705nihsNz",
    "Asia/Jakarta",
    "chalk",
    "stringify",
    "https://customer.gopayapi.com/v1/explore",
    "DYNAMIC_QR",
    "unknown",
    "GENERATE\x20PAY\x20BY\x20LINK\x20",
    "NO_PROMO_APPLIED",
    "catch",
  ];
  _0x19eb = function () {
    return _0x4c6dcf;
  };
  return _0x19eb();
}
const _0x4c44d4 = _0x2960;
(function (_0x4c3b85, _0x47f5b5) {
  const _0x828148 = _0x2960,
    _0x544203 = _0x4c3b85();
  while (!![]) {
    try {
      const _0x2ea285 =
        parseInt(_0x828148(0x179)) / 0x1 +
        (-parseInt(_0x828148(0x18f)) / 0x2) *
          (-parseInt(_0x828148(0x1a5)) / 0x3) +
        (-parseInt(_0x828148(0x190)) / 0x4) *
          (-parseInt(_0x828148(0x1b4)) / 0x5) +
        parseInt(_0x828148(0x1ae)) / 0x6 +
        -parseInt(_0x828148(0x18e)) / 0x7 +
        parseInt(_0x828148(0x194)) / 0x8 +
        -parseInt(_0x828148(0x176)) / 0x9;
      if (_0x2ea285 === _0x47f5b5) break;
      else _0x544203["push"](_0x544203["shift"]());
    } catch (_0xc01673) {
      _0x544203["push"](_0x544203["shift"]());
    }
  }
})(_0x19eb, 0x6157b);
const chalk = require(_0x4c44d4(0x17b)),
  fetch = require("node-fetch"),
  { v4: uuidv4 } = require("uuid"),
  readlineSync = require("readline-sync"),
  delay = require(_0x4c44d4(0x1a3)),
  datajson = require(_0x4c44d4(0x1b6)),
  randstring = (_0x4a58f2) =>
    new Promise((_0x3822f1, _0x3f2448) => {
      const _0x5ca4ce = _0x4c44d4;
      var _0x49ad94 = "",
        _0x345700 = "1234567890";
      for (var _0xc61c05 = 0x0; _0xc61c05 < _0x4a58f2; _0xc61c05++)
        _0x49ad94 += _0x345700[_0x5ca4ce(0x199)](
          Math[_0x5ca4ce(0x193)](
            Math[_0x5ca4ce(0x197)]() * _0x345700[_0x5ca4ce(0x1ab)]
          )
        );
      _0x3822f1(_0x49ad94);
    }),
  genUniqueId = (_0x2921de) =>
    new Promise((_0x2eb9f4, _0x5d6a41) => {
      const _0x5839c2 = _0x4c44d4;
      var _0x52f775 = "",
        _0x242fb8 = "abcdefghijklmnopqrstuvwxyz1234567890";
      for (var _0x2c19b4 = 0x0; _0x2c19b4 < _0x2921de; _0x2c19b4++)
        _0x52f775 += _0x242fb8[_0x5839c2(0x199)](
          Math["floor"](Math[_0x5839c2(0x197)]() * _0x242fb8[_0x5839c2(0x1ab)])
        );
      _0x2eb9f4(_0x52f775);
    }),
  GetdataAccount = (_0x3811b1, _0x2e203c, _0x48d6b2) =>
    new Promise((_0x423023, _0x584ca6) => {
      const _0x2bb48a = _0x4c44d4;
      fetch("https://api.gojekapi.com/gojek/v2/customer", {
        method: _0x2bb48a(0x177),
        headers: {
          "X-AppVersion": _0x2bb48a(0x183),
          "X-AppId": "com.gojek.app",
          "X-Platform": _0x2bb48a(0x195),
          "X-UniqueId": _0x2e203c,
          Accept: _0x2bb48a(0x185),
          "Content-Type": _0x2bb48a(0x185),
          "X-Session-ID": _0x48d6b2,
          D1: _0x2bb48a(0x196),
          "X-DeviceOS": _0x2bb48a(0x1af),
          "X-User-Type": _0x2bb48a(0x1a2),
          "X-PhoneMake": _0x2bb48a(0x17f),
          "X-DeviceToken": "",
          "X-PhoneModel": _0x2bb48a(0x1ac),
          "X-PushTokenType": "FCM",
          "User-uuid": "",
          Authorization: _0x2bb48a(0x1a6) + _0x3811b1,
          "Accept-Language": _0x2bb48a(0x19e),
          "X-User-Locale": _0x2bb48a(0x1a0),
          "X-Location": _0x2bb48a(0x1b8) + randstring(0x4),
          "X-Location-Accuracy": "10.0",
          "Gojek-Country-Code": "ID",
          "Gojek-Service-Area": "58",
          "Gojek-Timezone": _0x2bb48a(0x17a),
          "X-M1": _0x2bb48a(0x186),
          Host: _0x2bb48a(0x18b),
          Connection: _0x2bb48a(0x1b9),
          "Accept-Encoding": _0x2bb48a(0x1b1),
          "User-Agent": _0x2bb48a(0x184),
        },
      })
        [_0x2bb48a(0x1a7)]((_0x38de41) => _0x38de41["json"]())
        [_0x2bb48a(0x1a7)]((_0x2f8ea6) => {
          _0x423023(_0x2f8ea6);
        })
        ["catch"]((_0x53e37b) => {
          _0x584ca6(_0x53e37b);
        });
    }),
  QR = (_0x590dcb, _0x262b5c, _0x34960a, _0x9d3710, _0x1d1d1b) =>
    new Promise((_0x17f15d, _0x1339b4) => {
      const _0x2bc4cd = _0x4c44d4;
      fetch(_0x2bc4cd(0x17d), {
        method: "POST",
        headers: {
          "X-Session-ID": _0x590dcb,
          D1: _0x2bc4cd(0x196),
          Accept: "application/json",
          "Content-Type": _0x2bc4cd(0x185),
          "X-Platform": _0x2bc4cd(0x195),
          "X-UniqueId": _0x9d3710,
          "X-AppVersion": _0x2bc4cd(0x183),
          "X-AppId": "com.gojek.app",
          "X-DeviceOS": _0x2bc4cd(0x1af),
          "X-User-Type": "customer",
          "X-PhoneMake": _0x2bc4cd(0x17f),
          "X-DeviceToken": "",
          "X-PushTokenType": "FCM",
          "X-PhoneModel": _0x2bc4cd(0x1ac),
          "User-uuid": _0x34960a,
          Authorization: _0x2bc4cd(0x1a6) + _0x262b5c,
          "Accept-Language": _0x2bc4cd(0x19e),
          "X-User-Locale": "en_ID",
          "X-Location": "65.9667,-18." + randstring(0x4),
          "X-Location-Accuracy": _0x2bc4cd(0x1ad),
          "Gojek-Country-Code": "ID",
          "X-M1": _0x2bc4cd(0x186),
          "Content-Type": _0x2bc4cd(0x19c),
          "Content-Length": "2228",
          Host: "customer.gopayapi.com",
          Connection: _0x2bc4cd(0x1b9),
          "Accept-Encoding": "gzip",
          "User-Agent": _0x2bc4cd(0x184),
        },
        body: JSON[_0x2bc4cd(0x17c)]({
          data: _0x1d1d1b,
          type: _0x2bc4cd(0x18c),
        }),
      })
        [_0x2bc4cd(0x1a7)]((_0x393d66) => _0x393d66[_0x2bc4cd(0x1b0)]())
        [_0x2bc4cd(0x1a7)]((_0x3bf65b) => {
          _0x17f15d(_0x3bf65b);
        })
        [_0x2bc4cd(0x182)]((_0x1de9e8) => {
          _0x1339b4(_0x1de9e8);
        });
    }),
  Paycok = (_0xe5ca74, _0x4b9294, _0x5c134a, _0x5dd1a3, _0x512f2a, _0x20987a) =>
    new Promise((_0x11b8c1, _0x1f54f0) => {
      const _0x35ef4a = _0x4c44d4;
      fetch(
        "https://customer.gopayapi.com/v2/payments/" +
          _0x512f2a +
          _0x35ef4a(0x1b7),
        {
          method: _0x35ef4a(0x19b),
          headers: {
            pin: "",
            D1: _0x35ef4a(0x196),
            Accept: _0x35ef4a(0x185),
            "X-Platform": _0x35ef4a(0x195),
            "X-UniqueId": _0x5dd1a3,
            "X-Session-ID": _0xe5ca74,
            "X-AppVersion": "4.27.2",
            "X-AppId": "com.gojek.app",
            "X-DeviceOS": _0x35ef4a(0x1af),
            "X-User-Type": _0x35ef4a(0x1a2),
            "X-PhoneMake": _0x35ef4a(0x17f),
            "X-DeviceToken": "",
            "X-PushTokenType": _0x35ef4a(0x1a1),
            "X-PhoneModel": "Android,xiaomi\x20redmi\x20note\x207",
            "User-uuid": _0x5c134a,
            Authorization: _0x35ef4a(0x1a6) + _0x4b9294,
            "Accept-Language": _0x35ef4a(0x19e),
            "X-User-Locale": _0x35ef4a(0x1a0),
            "X-Location": _0x35ef4a(0x1b8) + randstring(0x4),
            "X-Location-Accuracy": "0.0",
            "Gojek-Country-Code": "ID",
            "X-M1": _0x35ef4a(0x186),
            "Content-Type": _0x35ef4a(0x19c),
            "Content-Length": "2236",
            Host: _0x35ef4a(0x18d),
            Connection: _0x35ef4a(0x1b9),
            "Accept-Encoding": _0x35ef4a(0x1b1),
            "User-Agent": "okhttp/3.12.13",
          },
          body: JSON["stringify"](_0x20987a),
        }
      )
        [_0x35ef4a(0x1a7)]((_0x52f6fe) => _0x52f6fe[_0x35ef4a(0x1b0)]())
        [_0x35ef4a(0x1a7)]((_0x32f7d8) => {
          _0x11b8c1(_0x32f7d8);
        })
        ["catch"]((_0x42116f) => {
          _0x1f54f0(_0x42116f);
        });
    }),
  Paycok2 = (
    _0x3ec651,
    _0x3b552b,
    _0x34f4e4,
    _0x1a78d0,
    _0x5e0120,
    _0x2b5d0a
  ) =>
    new Promise((_0x4b7fdb, _0x28dce2) => {
      const _0xaebf0a = _0x4c44d4;
      fetch(_0xaebf0a(0x187) + _0x5e0120 + _0xaebf0a(0x1b7), {
        method: _0xaebf0a(0x19b),
        headers: {
          pin: 0x1b669,
          D1: _0xaebf0a(0x196),
          Accept: _0xaebf0a(0x185),
          "X-Session-ID": _0x3ec651,
          "X-Platform": _0xaebf0a(0x195),
          "X-UniqueId": _0x1a78d0,
          "X-AppVersion": _0xaebf0a(0x183),
          "X-AppId": "com.gojek.app",
          "X-DeviceOS": "Android,7.0",
          "X-User-Type": _0xaebf0a(0x1a2),
          "X-PhoneMake": _0xaebf0a(0x17f),
          "X-DeviceToken": "",
          "X-PushTokenType": _0xaebf0a(0x1a1),
          "X-PhoneModel": "Android,xiaomi\x20redmi\x20note\x207",
          "User-uuid": _0x34f4e4,
          Authorization: _0xaebf0a(0x1a6) + _0x3b552b,
          "Accept-Language": "en-ID",
          "X-User-Locale": "en_ID",
          "X-Location": "65.9667,-18." + randstring(0x4),
          "X-Location-Accuracy": "10.0",
          "Gojek-Country-Code": "ID",
          "X-M1": _0xaebf0a(0x186),
          "Content-Type": "application/json;\x20charset=UTF-8",
          "Content-Length": _0xaebf0a(0x19f),
          Host: _0xaebf0a(0x18d),
          Connection: _0xaebf0a(0x1b9),
          "Accept-Encoding": _0xaebf0a(0x1b1),
          "User-Agent": _0xaebf0a(0x184),
        },
        body: JSON[_0xaebf0a(0x17c)](_0x2b5d0a),
      })
        [_0xaebf0a(0x1a7)]((_0x482082) => _0x482082[_0xaebf0a(0x1b0)]())
        [_0xaebf0a(0x1a7)]((_0x1b6dfe) => {
          _0x4b7fdb(_0x1b6dfe);
        })
        [_0xaebf0a(0x182)]((_0x5850ba) => {
          _0x28dce2(_0x5850ba);
        });
    }),
  balance = (_0x44a6f5, _0x13eebf, _0x323026, _0x4f384d) =>
    new Promise((_0x3ad911, _0x184a89) => {
      const _0x330aab = _0x4c44d4;
      fetch("https://customer.gopayapi.com/v1/payment-options/balances", {
        method: _0x330aab(0x177),
        headers: {
          "X-Session-ID": _0x44a6f5,
          D1: _0x330aab(0x196),
          Accept: _0x330aab(0x185),
          "Content-Type": _0x330aab(0x185),
          "X-Platform": _0x330aab(0x195),
          "X-UniqueId": _0x4f384d,
          "X-AppVersion": _0x330aab(0x183),
          "X-AppId": "com.gojek.app",
          "X-DeviceOS": "Android,7.0",
          "X-User-Type": "customer",
          "X-PhoneMake": "Samsung",
          "X-DeviceToken": "",
          "X-PushTokenType": _0x330aab(0x1a1),
          "X-PhoneModel": _0x330aab(0x1ac),
          "User-uuid": _0x323026,
          Authorization: _0x330aab(0x1a6) + _0x13eebf,
          "Accept-Language": "en-ID",
          "X-User-Locale": _0x330aab(0x1a0),
          "X-Location": "65.9667,-18." + randstring(0x4),
          "X-Location-Accuracy": _0x330aab(0x1ad),
          "Gojek-Country-Code": "ID",
          "X-M1": _0x330aab(0x19a),
          Host: _0x330aab(0x18d),
          Connection: _0x330aab(0x1b9),
          "Accept-Encoding": _0x330aab(0x1b1),
          "User-Agent": _0x330aab(0x184),
          "If-Modified-Since": _0x330aab(0x191),
        },
      })
        [_0x330aab(0x1a7)]((_0x454a10) => _0x454a10[_0x330aab(0x1b0)]())
        [_0x330aab(0x1a7)]((_0x38370d) => {
          _0x3ad911(_0x38370d);
        })
        [_0x330aab(0x182)]((_0x282cf3) => {
          _0x184a89(_0x282cf3);
        });
    }),
  Generateurl = (_0x44829b) =>
    new Promise((_0x2af624, _0x493387) => {
      const _0x3b8edc = _0x4c44d4;
      fetch(_0x3b8edc(0x1a9) + _0x44829b, {
        body: null,
        method: _0x3b8edc(0x177),
      })
        ["then"]((_0x5aefc7) => _0x5aefc7["json"]())
        ["then"]((_0x162bf4) => {
          _0x2af624(_0x162bf4);
        })
        [_0x3b8edc(0x182)]((_0x5b7cda) => _0x493387(_0x5b7cda));
    });
(async () => {
  const _0x1f667d = _0x4c44d4;
  console[_0x1f667d(0x1a4)](
    chalk["blueBright"](
      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20=================================================================\x0a\x20\x20\x20\x20\x20\x20\x20\x20=========================\x20PAY\x20LINK\x20QR\x20===========================\x0a\x20\x20\x20\x20\x20\x20\x20\x20=================================================================\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20version\x20:\x201.0\x0a\x20\x20\x20\x20\x20\x20\x20\x20by\x20:\x20w"
    )
  );
  const _0x8acab0 = datajson[_0x1f667d(0x189)],
    _0x3da065 = datajson["id"];
  for (
    let _0x1b8e85 = 0x1;
    _0x1b8e85 < datajson[_0x1f667d(0x1b3)];
    _0x1b8e85++
  ) {
    const _0x434ba3 = await Generateurl(urlqr),
      _0x521c87 = _0x434ba3[0x0][_0x1f667d(0x192)][0x0]["data"],
      _0x5b1f4a = uuidv4(),
      _0x2a4174 = await genUniqueId(0x10),
      _0x5c21c9 = await GetdataAccount(_0x8acab0, _0x2a4174, _0x5b1f4a);
    if (_0x5c21c9["message"] == "OK") {
      console["log"](chalk[_0x1f667d(0x1a8)](_0x1f667d(0x18a)));
      const _0x4761aa = await balance(
        _0x5b1f4a,
        _0x8acab0,
        _0x3da065,
        _0x2a4174
      );
      console[_0x1f667d(0x1a4)](
        chalk["greenBright"](
          JSON[_0x1f667d(0x17c)](_0x4761aa["data"][0x0][_0x1f667d(0x1b5)])
        )
      );
      const _0x3c68cf = await QR(
        _0x5b1f4a,
        _0x8acab0,
        _0x3da065,
        _0x2a4174,
        _0x521c87
      );
      console[_0x1f667d(0x1a4)](chalk[_0x1f667d(0x1a8)](_0x1f667d(0x180)));
      const _0x131f6d = _0x3c68cf[_0x1f667d(0x178)]["additional_data"],
        _0x27c11c = _0x3c68cf[_0x1f667d(0x178)][_0x1f667d(0x19d)],
        _0xe12c7d = _0x3c68cf[_0x1f667d(0x178)][_0x1f667d(0x198)],
        _0x37113c = {
          additional_data: _0x131f6d,
          applied_promo_code: [_0x1f667d(0x181)],
          channel_type: _0x1f667d(0x17e),
          checksum: _0x27c11c,
          metadata: _0xe12c7d,
          order_signature: {
            partner_id: "",
            reason: "",
            customer_fulfillment_type: "",
            partner_name: "",
            transaction_type: "",
            source: "",
            channel_type: "",
          },
          payment_token: _0x4761aa[_0x1f667d(0x178)][0x0][_0x1f667d(0x1aa)],
        },
        _0x2e48a7 = _0x3c68cf["data"][_0x1f667d(0x1ba)],
        _0x15491b = await Paycok(
          _0x5b1f4a,
          _0x8acab0,
          _0x3da065,
          _0x2a4174,
          _0x2e48a7,
          _0x37113c
        );
      await delay(0xbb8);
      const _0x1f2971 = await Paycok2(
        _0x5b1f4a,
        _0x8acab0,
        _0x3da065,
        _0x2a4174,
        _0x2e48a7,
        _0x37113c
      );
      console[_0x1f667d(0x1a4)](
        chalk[_0x1f667d(0x188)](JSON[_0x1f667d(0x17c)](_0x1f2971))
      );
    } else
      console[_0x1f667d(0x1a4)](
        chalk[_0x1f667d(0x1b2)]("AKUN\x20NOT\x20VALID")
      );
  }
})();
