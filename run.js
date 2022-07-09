function _0x4de9(_0x132fc7, _0x8977e0) {
  const _0x46ecb3 = _0x46ec();
  return (
    (_0x4de9 = function (_0x4de972, _0x535a26) {
      _0x4de972 = _0x4de972 - 0x1ed;
      let _0x3d9712 = _0x46ecb3[_0x4de972];
      return _0x3d9712;
    }),
    _0x4de9(_0x132fc7, _0x8977e0)
  );
}
const _0x21e8df = _0x4de9;
(function (_0x3999a4, _0x3a25cd) {
  const _0xd0bbcc = _0x4de9,
    _0xc1944f = _0x3999a4();
  while (!![]) {
    try {
      const _0x26a2f8 =
        -parseInt(_0xd0bbcc(0x25a)) / 0x1 +
        (parseInt(_0xd0bbcc(0x24d)) / 0x2) *
          (-parseInt(_0xd0bbcc(0x212)) / 0x3) +
        parseInt(_0xd0bbcc(0x243)) / 0x4 +
        (parseInt(_0xd0bbcc(0x214)) / 0x5) *
          (-parseInt(_0xd0bbcc(0x213)) / 0x6) +
        (-parseInt(_0xd0bbcc(0x237)) / 0x7) *
          (parseInt(_0xd0bbcc(0x20f)) / 0x8) +
        parseInt(_0xd0bbcc(0x215)) / 0x9 +
        parseInt(_0xd0bbcc(0x24c)) / 0xa;
      if (_0x26a2f8 === _0x3a25cd) break;
      else _0xc1944f["push"](_0xc1944f["shift"]());
    } catch (_0x217c10) {
      _0xc1944f["push"](_0xc1944f["shift"]());
    }
  }
})(_0x46ec, 0xc2cf9);
const fetch = require("node-fetch"),
  readline = require("readline-sync"),
  datajson = require(_0x21e8df(0x235)),
  { v4: uuidv4 } = require(_0x21e8df(0x254)),
  chalk = require("chalk"),
  delay = require(_0x21e8df(0x210)),
  genUniqueId = (_0xd9bf62) =>
    new Promise((_0x46a94e, _0x5e6eed) => {
      const _0x2fe4f5 = _0x21e8df;
      var _0x58071b = "",
        _0x48bd8e = _0x2fe4f5(0x1ed);
      for (var _0x2ef324 = 0x0; _0x2ef324 < _0xd9bf62; _0x2ef324++)
        _0x58071b += _0x48bd8e[_0x2fe4f5(0x247)](
          Math[_0x2fe4f5(0x23c)](Math[_0x2fe4f5(0x222)]() * _0x48bd8e["length"])
        );
      _0x46a94e(_0x58071b);
    }),
  randstring = (_0x50f846) =>
    new Promise((_0x3aadad, _0x2a0d0e) => {
      const _0x525db9 = _0x21e8df;
      var _0x2ef15a = "",
        _0x10d2ce = _0x525db9(0x256);
      for (var _0x28026c = 0x0; _0x28026c < _0x50f846; _0x28026c++)
        _0x2ef15a += _0x10d2ce[_0x525db9(0x247)](
          Math[_0x525db9(0x23c)](Math["random"]() * _0x10d2ce["length"])
        );
      _0x3aadad(_0x2ef15a);
    }),
  getToken = (_0x394ba7, _0x58c9f9, _0x317aed, _0x306dfc) =>
    new Promise((_0x450655, _0x1e1e3f) => {
      const _0x455974 = _0x21e8df;
      fetch(_0x455974(0x253), {
        headers: {
          accept: "*/*",
          "accept-language": _0x455974(0x22b),
          "content-type": _0x455974(0x239) + _0x394ba7,
          "sec-ch-ua": _0x455974(0x25b),
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\x22Windows\x22",
          "sec-fetch-dest": _0x455974(0x23f),
          "sec-fetch-mode": _0x455974(0x1f2),
          "sec-fetch-site": _0x455974(0x223),
          "x-csrf-token": _0x58c9f9,
          cookie: _0x317aed,
          Referer: _0x455974(0x1ee),
          "Referrer-Policy": _0x455974(0x21e),
        },
        body:
          "------WebKitFormBoundary" +
          _0x306dfc +
          _0x455974(0x1ef) +
          _0x306dfc +
          _0x455974(0x221) +
          _0x306dfc +
          _0x455974(0x22f) +
          _0x306dfc +
          _0x455974(0x229) +
          _0x306dfc +
          _0x455974(0x25c) +
          _0x306dfc +
          _0x455974(0x259) +
          _0x306dfc +
          "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.originUrl\x22\x0d\x0a\x0d\x0ahttps://www.spotify.com/id/purchase/offer/2022-artist-mini-premium-mini-7d/?campaign=artist&fbclid=IwAR1LhE5GUIVsnBrz2Vu9R2cm3-1hGlxwTEoe6-ffQdyCMP1tLLAHpAdjqyA\x0d\x0a------WebKitFormBoundary" +
          _0x306dfc +
          _0x455974(0x20a) +
          _0x306dfc +
          _0x455974(0x23d) +
          _0x306dfc +
          _0x455974(0x20d) +
          _0x306dfc +
          _0x455974(0x216) +
          _0x306dfc +
          "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.isChangeDetails\x22\x0d\x0a\x0d\x0afalse\x0d\x0a------WebKitFormBoundary" +
          _0x306dfc +
          _0x455974(0x1f1),
        method: _0x455974(0x205),
      })
        [_0x455974(0x1f0)]((_0x593b2f) => _0x593b2f[_0x455974(0x23e)]())
        [_0x455974(0x1f0)]((_0x241da4) => {
          _0x450655(_0x241da4);
        })
        ["catch"]((_0x23d9f4) => {
          _0x1e1e3f(_0x23d9f4);
        });
    }),
  memek = (_0x4787a7) =>
    new Promise((_0x18ade4, _0x713822) => {
      const _0x5cbaaa = _0x21e8df;
      fetch(_0x5cbaaa(0x252) + _0x4787a7 + _0x5cbaaa(0x200), {
        headers: {
          accept: _0x5cbaaa(0x21d),
          "accept-language": _0x5cbaaa(0x22b),
          "content-type": _0x5cbaaa(0x23a),
          "sec-ch-ua": _0x5cbaaa(0x25b),
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": _0x5cbaaa(0x24e),
          "sec-fetch-dest": _0x5cbaaa(0x23f),
          "sec-fetch-mode": _0x5cbaaa(0x1f2),
          "sec-fetch-site": _0x5cbaaa(0x223),
          cookie: _0x5cbaaa(0x1f7),
          Referer: "https://buy2.boku.com/checkout/" + _0x4787a7,
          "Referrer-Policy": _0x5cbaaa(0x21e),
        },
        body: _0x5cbaaa(0x22c),
        method: _0x5cbaaa(0x205),
      })
        [_0x5cbaaa(0x1f0)]((_0x593829) => _0x593829[_0x5cbaaa(0x23e)]())
        [_0x5cbaaa(0x1f0)]((_0xd32c86) => {
          _0x18ade4(_0xd32c86);
        })
        [_0x5cbaaa(0x240)]((_0x5b8d39) => {
          _0x713822(_0x5b8d39);
        });
    }),
  asu = (_0xab979e) =>
    new Promise((_0x34dba7, _0x2d04cd) => {
      const _0x8831f = _0x21e8df;
      fetch(
        "https://buy.boku.com/checkout-aux/receive-carrier-flow/transaction-status?transaction-id=" +
          _0xab979e,
        {
          headers: {
            accept: _0x8831f(0x21d),
            "accept-language": _0x8831f(0x22b),
            "content-type": _0x8831f(0x23a),
            "sec-ch-ua": _0x8831f(0x25b),
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": _0x8831f(0x24e),
            "sec-fetch-dest": _0x8831f(0x23f),
            "sec-fetch-mode": _0x8831f(0x1f2),
            "sec-fetch-site": _0x8831f(0x223),
            cookie: _0x8831f(0x1f7),
            Referer: _0x8831f(0x202) + _0xab979e,
            "Referrer-Policy": _0x8831f(0x21e),
          },
          method: _0x8831f(0x24f),
        }
      )
        [_0x8831f(0x1f0)]((_0x39e4e2) => _0x39e4e2[_0x8831f(0x23e)]())
        [_0x8831f(0x1f0)]((_0x58bfbb) => {
          _0x34dba7(_0x58bfbb);
        })
        ["catch"]((_0x4bf8ab) => {
          _0x2d04cd(_0x4bf8ab);
        });
    }),
  GetdataAccount = (_0x1ef4d1, _0x594f98, _0x23619a) =>
    new Promise((_0x3070b7, _0x20b270) => {
      const _0x150628 = _0x21e8df;
      fetch(_0x150628(0x227), {
        method: _0x150628(0x24f),
        headers: {
          "X-AppVersion": _0x150628(0x224),
          "X-AppId": _0x150628(0x234),
          "X-Platform": _0x150628(0x232),
          "X-UniqueId": _0x594f98,
          Accept: _0x150628(0x23b),
          "Content-Type": _0x150628(0x23b),
          "X-Session-ID": _0x23619a,
          D1: _0x150628(0x1fb),
          "X-DeviceOS": "Android,7.0",
          "X-User-Type": _0x150628(0x238),
          "X-PhoneMake": "unknown",
          "X-DeviceToken": "",
          "X-PhoneModel": "Android,xiaomi\x20redmi\x20note\x207",
          "X-PushTokenType": _0x150628(0x246),
          "User-uuid": "",
          Authorization: _0x150628(0x249) + _0x1ef4d1,
          "Accept-Language": _0x150628(0x25f),
          "X-User-Locale": "en_ID",
          "X-Location": _0x150628(0x1f5) + randstring(0x4),
          "X-Location-Accuracy": "10.0",
          "Gojek-Country-Code": "ID",
          "Gojek-Service-Area": "58",
          "Gojek-Timezone": _0x150628(0x24a),
          "X-M1":
            "1:UNKNOWN,2:UNKNOWN,3:1631626880354-3511426940583375156,4:12756,5:|UNKNOWN|4,6:UNKNOWN,7:\x22WiredSSID\x22,8:768x1184,9:,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2002,14:1631627063",
          Host: _0x150628(0x231),
          Connection: "Keep-Alive",
          "Accept-Encoding": _0x150628(0x24b),
          "User-Agent": _0x150628(0x251),
        },
      })
        [_0x150628(0x1f0)]((_0x669c81) => _0x669c81[_0x150628(0x23e)]())
        [_0x150628(0x1f0)]((_0x4adfe9) => {
          _0x3070b7(_0x4adfe9);
        })
        [_0x150628(0x240)]((_0x15feab) => {
          _0x20b270(_0x15feab);
        });
    }),
  QR = (_0x123313, _0x5b8cfb, _0xa1dacc, _0x4433f1, _0x1fd2c8) =>
    new Promise((_0x1820c8, _0x4df339) => {
      const _0x3d9494 = _0x21e8df;
      fetch(_0x3d9494(0x1f4), {
        method: _0x3d9494(0x205),
        headers: {
          "X-Session-ID": _0x123313,
          D1: _0x3d9494(0x1fb),
          Accept: _0x3d9494(0x23b),
          "Content-Type": "application/json",
          "X-Platform": "Android",
          "X-UniqueId": _0x4433f1,
          "X-AppVersion": _0x3d9494(0x224),
          "X-AppId": "com.gojek.app",
          "X-DeviceOS": _0x3d9494(0x1fc),
          "X-User-Type": "customer",
          "X-PhoneMake": _0x3d9494(0x21a),
          "X-DeviceToken": "",
          "X-PushTokenType": "FCM",
          "X-PhoneModel": _0x3d9494(0x22d),
          "User-uuid": _0xa1dacc,
          Authorization: "Bearer\x20" + _0x5b8cfb,
          "Accept-Language": _0x3d9494(0x25f),
          "X-User-Locale": _0x3d9494(0x25d),
          "X-Location": _0x3d9494(0x1f5) + randstring(0x4),
          "X-Location-Accuracy": _0x3d9494(0x255),
          "Gojek-Country-Code": "ID",
          "X-M1": _0x3d9494(0x1f9),
          "Content-Type": _0x3d9494(0x204),
          "Content-Length": _0x3d9494(0x1f6),
          Host: "customer.gopayapi.com",
          Connection: _0x3d9494(0x20b),
          "Accept-Encoding": _0x3d9494(0x24b),
          "User-Agent": _0x3d9494(0x251),
        },
        body: JSON[_0x3d9494(0x220)]({
          data: _0x1fd2c8,
          type: _0x3d9494(0x22e),
        }),
      })
        [_0x3d9494(0x1f0)]((_0xe59a19) => _0xe59a19[_0x3d9494(0x23e)]())
        [_0x3d9494(0x1f0)]((_0xbe9806) => {
          _0x1820c8(_0xbe9806);
        })
        [_0x3d9494(0x240)]((_0x23aff0) => {
          _0x4df339(_0x23aff0);
        });
    }),
  Paycok = (_0x296848, _0x388ca0, _0x1dc99b, _0x541fc5, _0xdae9fe, _0x3309e2) =>
    new Promise((_0x35a8be, _0x54d890) => {
      const _0x8e7a63 = _0x21e8df;
      fetch(_0x8e7a63(0x203) + _0xdae9fe + _0x8e7a63(0x226), {
        method: _0x8e7a63(0x211),
        headers: {
          pin: "",
          D1: _0x8e7a63(0x1fb),
          Accept: _0x8e7a63(0x23b),
          "X-Platform": "Android",
          "X-UniqueId": _0x541fc5,
          "X-Session-ID": _0x296848,
          "X-AppVersion": _0x8e7a63(0x224),
          "X-AppId": _0x8e7a63(0x234),
          "X-DeviceOS": _0x8e7a63(0x1fc),
          "X-User-Type": _0x8e7a63(0x238),
          "X-PhoneMake": "unknown",
          "X-DeviceToken": "",
          "X-PushTokenType": _0x8e7a63(0x246),
          "X-PhoneModel": _0x8e7a63(0x22d),
          "User-uuid": _0x1dc99b,
          Authorization: "Bearer\x20" + _0x388ca0,
          "Accept-Language": "en-ID",
          "X-User-Locale": _0x8e7a63(0x25d),
          "X-Location": _0x8e7a63(0x1f5) + randstring(0x4),
          "X-Location-Accuracy": _0x8e7a63(0x255),
          "Gojek-Country-Code": "ID",
          "X-M1": _0x8e7a63(0x1f9),
          "Content-Type": _0x8e7a63(0x204),
          "Content-Length": _0x8e7a63(0x260),
          Host: _0x8e7a63(0x248),
          Connection: _0x8e7a63(0x20b),
          "Accept-Encoding": _0x8e7a63(0x24b),
          "User-Agent": _0x8e7a63(0x251),
        },
        body: JSON[_0x8e7a63(0x220)](_0x3309e2),
      })
        [_0x8e7a63(0x1f0)]((_0x52d815) => _0x52d815[_0x8e7a63(0x23e)]())
        ["then"]((_0x52115d) => {
          _0x35a8be(_0x52115d);
        })
        [_0x8e7a63(0x240)]((_0x20a3b2) => {
          _0x54d890(_0x20a3b2);
        });
    }),
  Paycok2 = (
    _0x4679b4,
    _0x1b38f3,
    _0x5b1c2f,
    _0x5ccb46,
    _0x4bdb2c,
    _0x12c808
  ) =>
    new Promise((_0x5626f5, _0xa67598) => {
      const _0x378a36 = _0x21e8df;
      fetch(
        "https://customer.gopayapi.com/v2/payments/" +
          _0x4bdb2c +
          _0x378a36(0x226),
        {
          method: _0x378a36(0x211),
          headers: {
            pin: 0x1b669,
            D1: "17:AC:A3:A5:AD:0B:5E:27:A1:A1:42:32:FF:CF:15:CB:2C:11:C6:8C:BB:8E:6B:BB:F2:70:DA:EE:38:47:BE:60",
            Accept: _0x378a36(0x23b),
            "X-Session-ID": _0x4679b4,
            "X-Platform": _0x378a36(0x232),
            "X-UniqueId": _0x5ccb46,
            "X-AppVersion": "4.27.2",
            "X-AppId": _0x378a36(0x234),
            "X-DeviceOS": _0x378a36(0x1fc),
            "X-User-Type": _0x378a36(0x238),
            "X-PhoneMake": _0x378a36(0x21a),
            "X-DeviceToken": "",
            "X-PushTokenType": _0x378a36(0x246),
            "X-PhoneModel": _0x378a36(0x22d),
            "User-uuid": _0x5b1c2f,
            Authorization: _0x378a36(0x249) + _0x1b38f3,
            "Accept-Language": _0x378a36(0x25f),
            "X-User-Locale": _0x378a36(0x25d),
            "X-Location": _0x378a36(0x1f5) + randstring(0x4),
            "X-Location-Accuracy": _0x378a36(0x20c),
            "Gojek-Country-Code": "ID",
            "X-M1":
              "1:UNKNOWN,2:UNKNOWN,3:1631626880354-3511426940583375156,4:12756,5:|UNKNOWN|4,6:UNKNOWN,7:\x22WiredSSID\x22,8:768x1184,9:,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2002,14:1631627063",
            "Content-Type": "application/json;\x20charset=UTF-8",
            "Content-Length": _0x378a36(0x260),
            Host: _0x378a36(0x248),
            Connection: _0x378a36(0x20b),
            "Accept-Encoding": "gzip",
            "User-Agent": _0x378a36(0x251),
          },
          body: JSON[_0x378a36(0x220)](_0x12c808),
        }
      )
        [_0x378a36(0x1f0)]((_0x5a80b4) => _0x5a80b4[_0x378a36(0x23e)]())
        [_0x378a36(0x1f0)]((_0x122224) => {
          _0x5626f5(_0x122224);
        })
        [_0x378a36(0x240)]((_0x15f43c) => {
          _0xa67598(_0x15f43c);
        });
    }),
  balance = (_0x412b1a, _0xb717a, _0x2bd3e0, _0xe0429e) =>
    new Promise((_0x5efef1, _0x9e44aa) => {
      const _0x2d507f = _0x21e8df;
      fetch(_0x2d507f(0x1fd), {
        method: _0x2d507f(0x24f),
        headers: {
          "X-Session-ID": _0x412b1a,
          D1: _0x2d507f(0x1fb),
          Accept: _0x2d507f(0x23b),
          "Content-Type": _0x2d507f(0x23b),
          "X-Platform": _0x2d507f(0x232),
          "X-UniqueId": _0xe0429e,
          "X-AppVersion": _0x2d507f(0x224),
          "X-AppId": _0x2d507f(0x234),
          "X-DeviceOS": _0x2d507f(0x1fc),
          "X-User-Type": _0x2d507f(0x238),
          "X-PhoneMake": _0x2d507f(0x209),
          "X-DeviceToken": "",
          "X-PushTokenType": "FCM",
          "X-PhoneModel": _0x2d507f(0x22d),
          "User-uuid": _0x2bd3e0,
          Authorization: _0x2d507f(0x249) + _0xb717a,
          "Accept-Language": "en-ID",
          "X-User-Locale": _0x2d507f(0x25d),
          "X-Location": _0x2d507f(0x1f5) + randstring(0x4),
          "X-Location-Accuracy": _0x2d507f(0x255),
          "Gojek-Country-Code": "ID",
          "X-M1": _0x2d507f(0x257),
          Host: _0x2d507f(0x248),
          Connection: "Keep-Alive",
          "Accept-Encoding": _0x2d507f(0x24b),
          "User-Agent": "okhttp/3.12.13",
          "If-Modified-Since": _0x2d507f(0x1ff),
        },
      })
        [_0x2d507f(0x1f0)]((_0x10efcb) => _0x10efcb["json"]())
        [_0x2d507f(0x1f0)]((_0xca6a7a) => {
          _0x5efef1(_0xca6a7a);
        })
        [_0x2d507f(0x240)]((_0x1aae36) => {
          _0x9e44aa(_0x1aae36);
        });
    }),
  Generateurl = (_0x20ceae) =>
    new Promise((_0x472afe, _0x5a1e50) => {
      const _0x44943f = _0x21e8df;
      fetch(_0x44943f(0x236) + _0x20ceae, {
        body: null,
        method: _0x44943f(0x24f),
      })
        [_0x44943f(0x1f0)]((_0x255d97) => _0x255d97["json"]())
        ["then"]((_0x2fbe3c) => {
          _0x472afe(_0x2fbe3c);
        })
        ["catch"]((_0xa27a00) => _0x5a1e50(_0xa27a00));
    });
function _0x46ec() {
  const _0x2ef0df = [
    "4402800EbHujy",
    "yellowBright",
    "symbol",
    "FCM",
    "charAt",
    "customer.gopayapi.com",
    "Bearer\x20",
    "Asia/Jakarta",
    "gzip",
    "18696800tygBNp",
    "928638EJkato",
    "\x22Windows\x22",
    "GET",
    "AKUN\x20GOJEK\x20STATUS\x20AKTIF",
    "okhttp/3.12.13",
    "https://buy2.boku.com/transaction/",
    "https://www.spotify.com/id/api/payment-sdk/prepare/premium/?clientName=premium-www-checkout&clientContext=premium-checkout&version=4.8.0",
    "uuid",
    "0.0",
    "1234567890",
    "1:UNKNOWN,2:UNKNOWN,3:1634552877872-4410887987191940410,4:15193,5:gmin|2400|4,6:10:D0:FF:51:13:26,7:\x22cnqwjfk403\x22,8:720x1280,9:passive,gps,network,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2001,14:1644586815",
    "greenBright",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.returnUrl\x22\x0d\x0a\x0d\x0ahttps://www.spotify.com/id/purchase/continue/purchase/premium_mini_7d/?orderReference={checkoutId}&offerId=premium-mini-7d\x0d\x0a------WebKitFormBoundary",
    "805734ANlhgW",
    "\x22.Not/A)Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22103\x22,\x20\x22Chromium\x22;v=\x22103\x22",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.country\x22\x0d\x0a\x0d\x0aID\x0d\x0a------WebKitFormBoundary",
    "en_ID",
    "success",
    "en-ID",
    "2236",
    "abcdefghijklmnopqrstuvwxyz1234567890",
    "https://www.spotify.com/id/purchase/offer/2022-artist-mini-premium-mini-7d/?campaign=artist&fbclid=IwAR1LhE5GUIVsnBrz2Vu9R2cm3-1hGlxwTEoe6-ffQdyCMP1tLLAHpAdjqyA",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.paymentProviderId\x22\x0d\x0a\x0d\x0abilling_boku_gopay_rpsp\x0d\x0a------WebKitFormBoundary",
    "then",
    "--\x0d\x0a",
    "cors",
    "GENERATE\x20PAY\x20BY\x20LINK\x20",
    "https://customer.gopayapi.com/v1/explore",
    "65.9667,-18.",
    "2228",
    "SD-rememberUserInfo=0",
    "AKUN\x20NOT\x20VALID",
    "1:UNKNOWN,2:UNKNOWN,3:1631626880354-3511426940583375156,4:12756,5:|UNKNOWN|4,6:UNKNOWN,7:\x22WiredSSID\x22,8:768x1184,9:,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2002,14:1631627063",
    "checkout",
    "17:AC:A3:A5:AD:0B:5E:27:A1:A1:42:32:FF:CF:15:CB:2C:11:C6:8C:BB:8E:6B:BB:F2:70:DA:EE:38:47:BE:60",
    "Android,7.0",
    "https://customer.gopayapi.com/v1/payment-options/balances",
    "NO_PROMO_APPLIED",
    "Fri,\x2011\x20Feb\x202022\x2013:40:11\x20GMT",
    "/purchase",
    "boundary",
    "https://buy2.boku.com/checkout/",
    "https://customer.gopayapi.com/v2/payments/",
    "application/json;\x20charset=UTF-8",
    "POST",
    "token",
    "IN_PROGRESS\x20PAYMENT",
    "transaction-response",
    "Samsung",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.offerCountryProductId\x22\x0d\x0a\x0d\x0adefault:premium-mini-7d:3\x0d\x0a------WebKitFormBoundary",
    "Keep-Alive",
    "10.0",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.offerKey\x22\x0d\x0a\x0d\x0apremium_mini_7d\x0d\x0a------WebKitFormBoundary",
    "STATUS\x20PROMO\x20AKTIF",
    "3026744TRqXcG",
    "delay",
    "PATCH",
    "3OqOiye",
    "6JKwiiM",
    "6736245HtXrpd",
    "10813977IKWYrJ",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.productDescription\x22\x0d\x0a\x0d\x0aSpotify\x207\x20hari\x0d\x0a------WebKitFormBoundary",
    "DYNAMIC_QR",
    "url",
    "log",
    "unknown",
    "crf",
    "cookie",
    "application/json,\x20text/plain,\x20*/*",
    "strict-origin-when-cross-origin",
    "jumlahpay",
    "stringify",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.checkoutViewId\x22\x0d\x0a\x0d\x0a05a0f608-c043-4b44-9882-f5606e783803\x0d\x0a------WebKitFormBoundary",
    "random",
    "same-origin",
    "4.27.2",
    "LIMIT\x20PAY",
    "/capture",
    "https://api.gojekapi.com/gojek/v2/customer",
    "split",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.flowId\x22\x0d\x0a\x0d\x0a623a47b7-b2e5-4db9-b097-8ea1ed1bbd42\x0d\x0a------WebKitFormBoundary",
    "\x0a\x20\x20\x20\x20\x20\x20=================================================================\x0a\x20\x20\x20\x20\x20\x20========================\x20SPOTITIT\x20PAY\x20===========================\x0a\x20\x20\x20\x20\x20\x20=================================================================\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20version\x20:\x201.0\x0a\x20\x20\x20\x20\x20\x20by\x20:\x20w",
    "en-US,en;q=0.9",
    "network=id-gopay&remember-msisdn=0&deviceFingerprint=undefined",
    "Android,xiaomi\x20redmi\x20note\x207",
    "QR_CODE",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.attemptId\x22\x0d\x0a\x0d\x0ac78072b0-2f36-4c5e-8cc7-8d670410028a\x0d\x0a------WebKitFormBoundary",
    "tokengojek",
    "api.gojekapi.com",
    "Android",
    "data",
    "com.gojek.app",
    "./data.json",
    "http://api.qrserver.com/v1/read-qr-code/?fileurl=",
    "14kAeTur",
    "customer",
    "multipart/form-data;",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "application/json",
    "floor",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.offerUuid\x22\x0d\x0a\x0d\x0aaa72c91c-7e0a-463e-b026-1ce46b9b3b5d\x0d\x0a------WebKitFormBoundary",
    "json",
    "empty",
    "catch",
    "message",
    "metadata",
  ];
  _0x46ec = function () {
    return _0x2ef0df;
  };
  return _0x46ec();
}
function brutal() {
  (async () => {
    const _0x42e37e = _0x4de9;
    try {
      const _0x1d83fd = datajson[_0x42e37e(0x201)],
        _0x3edc53 = _0x1d83fd[_0x42e37e(0x228)]("WebKitFormBoundary")[0x1],
        _0x45c4a7 = datajson[_0x42e37e(0x21b)],
        _0x539585 = datajson[_0x42e37e(0x21c)],
        _0x465d89 = await getToken(_0x1d83fd, _0x45c4a7, _0x539585, _0x3edc53);
      if (_0x465d89[_0x42e37e(0x25e)] == !![]) {
        console["log"](chalk["yellowBright"](_0x42e37e(0x20e)));
        const _0x15475b =
            _0x465d89[_0x42e37e(0x233)][_0x42e37e(0x218)]["split"]("/")[0x4],
          _0x34f41b = await memek(_0x15475b),
          _0x38dae9 =
            _0x34f41b[_0x42e37e(0x208)][_0x42e37e(0x1fa)]["transaction-status"];
        if (_0x38dae9 == "IN_PROGRESS") {
          console[_0x42e37e(0x219)](chalk[_0x42e37e(0x244)](_0x42e37e(0x207)));
          const _0xb2ca72 = await asu(_0x15475b),
            _0x28ae55 = decodeURI(_0xb2ca72["url"]),
            _0x28c180 = decodeURIComponent(_0x28ae55),
            _0x5ae8a9 = datajson[_0x42e37e(0x230)],
            _0x1cffa0 = datajson["id"],
            _0x22f327 = await Generateurl(
              _0x28c180[_0x42e37e(0x228)]("?")[0x0]
            ),
            _0x1af4d9 = _0x22f327[0x0][_0x42e37e(0x245)][0x0]["data"],
            _0x2b73d9 = uuidv4(),
            _0x46870b = await genUniqueId(0x10),
            _0x44a4f7 = await GetdataAccount(_0x5ae8a9, _0x46870b, _0x2b73d9);
          if (_0x44a4f7[_0x42e37e(0x241)] == "OK") {
            console["log"](chalk[_0x42e37e(0x244)](_0x42e37e(0x250)));
            const _0x2f21ed = await balance(
              _0x2b73d9,
              _0x5ae8a9,
              _0x1cffa0,
              _0x46870b
            );
            console["log"](
              chalk[_0x42e37e(0x258)](
                JSON[_0x42e37e(0x220)](
                  _0x2f21ed[_0x42e37e(0x233)][0x0]["balance"]
                )
              )
            );
            const _0x573977 = await QR(
              _0x2b73d9,
              _0x5ae8a9,
              _0x1cffa0,
              _0x46870b,
              _0x1af4d9
            );
            console["log"](chalk["yellowBright"](_0x42e37e(0x1f3)));
            const _0x1f751c = _0x573977["data"]["additional_data"],
              _0x40fd6b = _0x573977["data"]["checksum"],
              _0xbd95b8 = _0x573977[_0x42e37e(0x233)][_0x42e37e(0x242)],
              _0x28f845 = {
                additional_data: _0x1f751c,
                applied_promo_code: [_0x42e37e(0x1fe)],
                channel_type: _0x42e37e(0x217),
                checksum: _0x40fd6b,
                metadata: _0xbd95b8,
                order_signature: {
                  partner_id: "",
                  reason: "",
                  customer_fulfillment_type: "",
                  partner_name: "",
                  transaction_type: "",
                  source: "",
                  channel_type: "",
                },
                payment_token:
                  _0x2f21ed[_0x42e37e(0x233)][0x0][_0x42e37e(0x206)],
              },
              _0x2773fb = _0x573977["data"]["payment_id"],
              _0x18434f = await Paycok(
                _0x2b73d9,
                _0x5ae8a9,
                _0x1cffa0,
                _0x46870b,
                _0x2773fb,
                _0x28f845
              );
            await delay(0xbb8);
            const _0x1470f4 = await Paycok2(
              _0x2b73d9,
              _0x5ae8a9,
              _0x1cffa0,
              _0x46870b,
              _0x2773fb,
              _0x28f845
            );
            console[_0x42e37e(0x219)](
              chalk[_0x42e37e(0x258)](JSON[_0x42e37e(0x220)](_0x1470f4))
            );
          } else console["log"](chalk["redBright"](_0x42e37e(0x1f8)));
        } else console["log"](_0x15475b);
      } else
        console[_0x42e37e(0x219)](chalk["redBright"](_0x42e37e(0x225))),
          console[_0x42e37e(0x219)](_0x465d89);
    } catch (_0x2c2744) {}
  })();
}
(async () => {
  const _0x488ee9 = _0x21e8df;
  console[_0x488ee9(0x219)](chalk["blueBright"](_0x488ee9(0x22a)));
  for (
    let _0x10ce95 = 0x1;
    _0x10ce95 < datajson[_0x488ee9(0x21f)];
    _0x10ce95++
  ) {
    const _0x3d15ef = await brutal();
  }
})();
