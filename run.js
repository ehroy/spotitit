const _0x3a1dc8 = _0xdb07;
function _0xdb07(_0x29316b, _0x325812) {
  const _0x145b65 = _0x145b();
  return (
    (_0xdb07 = function (_0xdb07dd, _0x4e3758) {
      _0xdb07dd = _0xdb07dd - 0x167;
      let _0x1994f3 = _0x145b65[_0xdb07dd];
      return _0x1994f3;
    }),
    _0xdb07(_0x29316b, _0x325812)
  );
}
(function (_0x189077, _0x576fb1) {
  const _0x58b8c0 = _0xdb07,
    _0x53fc77 = _0x189077();
  while (!![]) {
    try {
      const _0x3ba1d6 =
        parseInt(_0x58b8c0(0x176)) / 0x1 +
        parseInt(_0x58b8c0(0x1b6)) / 0x2 +
        -parseInt(_0x58b8c0(0x1d5)) / 0x3 +
        (parseInt(_0x58b8c0(0x17e)) / 0x4) *
          (parseInt(_0x58b8c0(0x1be)) / 0x5) +
        -parseInt(_0x58b8c0(0x169)) / 0x6 +
        parseInt(_0x58b8c0(0x19d)) / 0x7 +
        -parseInt(_0x58b8c0(0x1ce)) / 0x8;
      if (_0x3ba1d6 === _0x576fb1) break;
      else _0x53fc77["push"](_0x53fc77["shift"]());
    } catch (_0x270acf) {
      _0x53fc77["push"](_0x53fc77["shift"]());
    }
  }
})(_0x145b, 0xd3757);
const fetch = require("node-fetch"),
  readline = require(_0x3a1dc8(0x16b)),
  datajson = require("./data.json"),
  { v4: uuidv4 } = require(_0x3a1dc8(0x171)),
  chalk = require("chalk"),
  delay = require(_0x3a1dc8(0x18f)),
  genUniqueId = (_0x1864b3) =>
    new Promise((_0x1b6dfa, _0x1be737) => {
      const _0x5d548a = _0x3a1dc8;
      var _0x36e466 = "",
        _0x20dd63 = _0x5d548a(0x1a3);
      for (var _0x462d33 = 0x0; _0x462d33 < _0x1864b3; _0x462d33++)
        _0x36e466 += _0x20dd63[_0x5d548a(0x179)](
          Math[_0x5d548a(0x173)](
            Math[_0x5d548a(0x1a1)]() * _0x20dd63[_0x5d548a(0x19b)]
          )
        );
      _0x1b6dfa(_0x36e466);
    }),
  randstring = (_0x3bb1f5) =>
    new Promise((_0x5a7e79, _0x3ca38c) => {
      const _0x3e2605 = _0x3a1dc8;
      var _0x5c1a6f = "",
        _0x381423 = _0x3e2605(0x1c7);
      for (var _0x589d86 = 0x0; _0x589d86 < _0x3bb1f5; _0x589d86++)
        _0x5c1a6f += _0x381423["charAt"](
          Math[_0x3e2605(0x173)](
            Math[_0x3e2605(0x1a1)]() * _0x381423[_0x3e2605(0x19b)]
          )
        );
      _0x5a7e79(_0x5c1a6f);
    }),
  getToken = (_0x5ea946, _0x2a7e73, _0x45617b, _0x66b22b) =>
    new Promise((_0x108217, _0x4fd442) => {
      const _0x5c3d52 = _0x3a1dc8;
      fetch(_0x5c3d52(0x199), {
        headers: {
          accept: _0x5c3d52(0x1cd),
          "accept-language": _0x5c3d52(0x1d2),
          "content-type": "multipart/form-data;" + _0x5ea946,
          "sec-ch-ua": _0x5c3d52(0x18a),
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\x22Windows\x22",
          "sec-fetch-dest": _0x5c3d52(0x181),
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-csrf-token": _0x2a7e73,
          cookie: _0x45617b,
          Referer:
            "https://www.spotify.com/id/purchase/offer/2022-artist-mini-premium-mini-7d/?campaign=artist&fbclid=IwAR1LhE5GUIVsnBrz2Vu9R2cm3-1hGlxwTEoe6-ffQdyCMP1tLLAHpAdjqyA",
          "Referrer-Policy": _0x5c3d52(0x1a0),
        },
        body:
          _0x5c3d52(0x19a) +
          _0x66b22b +
          _0x5c3d52(0x192) +
          _0x66b22b +
          _0x5c3d52(0x187) +
          _0x66b22b +
          _0x5c3d52(0x17c) +
          _0x66b22b +
          "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.flowId\x22\x0d\x0a\x0d\x0a623a47b7-b2e5-4db9-b097-8ea1ed1bbd42\x0d\x0a------WebKitFormBoundary" +
          _0x66b22b +
          _0x5c3d52(0x1c4) +
          _0x66b22b +
          _0x5c3d52(0x16e) +
          _0x66b22b +
          _0x5c3d52(0x1af) +
          _0x66b22b +
          _0x5c3d52(0x1ca) +
          _0x66b22b +
          "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.offerUuid\x22\x0d\x0a\x0d\x0aaa72c91c-7e0a-463e-b026-1ce46b9b3b5d\x0d\x0a------WebKitFormBoundary" +
          _0x66b22b +
          _0x5c3d52(0x1c6) +
          _0x66b22b +
          _0x5c3d52(0x1bb) +
          _0x66b22b +
          _0x5c3d52(0x1b4) +
          _0x66b22b +
          _0x5c3d52(0x185),
        method: _0x5c3d52(0x1b0),
      })
        [_0x5c3d52(0x194)]((_0x4575af) => _0x4575af[_0x5c3d52(0x1c0)]())
        [_0x5c3d52(0x194)]((_0x5e9762) => {
          _0x108217(_0x5e9762);
        })
        [_0x5c3d52(0x16d)]((_0x580bd9) => {
          _0x4fd442(_0x580bd9);
        });
    }),
  memek = (_0x23dd7c) =>
    new Promise((_0x2d8054, _0x2ee2b9) => {
      const _0x41d732 = _0x3a1dc8;
      fetch(_0x41d732(0x1ac) + _0x23dd7c + _0x41d732(0x191), {
        headers: {
          accept: _0x41d732(0x183),
          "accept-language": _0x41d732(0x1d2),
          "content-type": _0x41d732(0x1a8),
          "sec-ch-ua":
            "\x22.Not/A)Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22103\x22,\x20\x22Chromium\x22;v=\x22103\x22",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": _0x41d732(0x18b),
          "sec-fetch-dest": _0x41d732(0x181),
          "sec-fetch-mode": _0x41d732(0x190),
          "sec-fetch-site": _0x41d732(0x19f),
          cookie: _0x41d732(0x1d4),
          Referer: _0x41d732(0x1cf) + _0x23dd7c,
          "Referrer-Policy": _0x41d732(0x1a0),
        },
        body: "network=id-gopay&remember-msisdn=0&deviceFingerprint=undefined",
        method: _0x41d732(0x1b0),
      })
        [_0x41d732(0x194)]((_0x2dadde) => _0x2dadde[_0x41d732(0x1c0)]())
        [_0x41d732(0x194)]((_0x3691dd) => {
          _0x2d8054(_0x3691dd);
        })
        [_0x41d732(0x16d)]((_0x155d31) => {
          _0x2ee2b9(_0x155d31);
        });
    }),
  asu = (_0x354fb3) =>
    new Promise((_0x21e68c, _0x185e00) => {
      const _0x2b5f41 = _0x3a1dc8;
      fetch(_0x2b5f41(0x1d3) + _0x354fb3, {
        headers: {
          accept: _0x2b5f41(0x183),
          "accept-language": _0x2b5f41(0x1d2),
          "content-type": "application/x-www-form-urlencoded;\x20charset=UTF-8",
          "sec-ch-ua":
            "\x22.Not/A)Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22103\x22,\x20\x22Chromium\x22;v=\x22103\x22",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": _0x2b5f41(0x18b),
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": _0x2b5f41(0x190),
          "sec-fetch-site": _0x2b5f41(0x19f),
          cookie: _0x2b5f41(0x1d4),
          Referer: "https://buy2.boku.com/checkout/" + _0x354fb3,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        method: _0x2b5f41(0x167),
      })
        [_0x2b5f41(0x194)]((_0x1bbe31) => _0x1bbe31["json"]())
        ["then"]((_0x36de10) => {
          _0x21e68c(_0x36de10);
        })
        [_0x2b5f41(0x16d)]((_0x1ae3e5) => {
          _0x185e00(_0x1ae3e5);
        });
    }),
  GetdataAccount = (_0x2ddbeb, _0x44fa56, _0x2791fc) =>
    new Promise((_0x4ccbfd, _0xde97d8) => {
      const _0x4f2b3d = _0x3a1dc8;
      fetch(_0x4f2b3d(0x197), {
        method: _0x4f2b3d(0x167),
        headers: {
          "X-AppVersion": _0x4f2b3d(0x178),
          "X-AppId": _0x4f2b3d(0x1a4),
          "X-Platform": "Android",
          "X-UniqueId": _0x44fa56,
          Accept: _0x4f2b3d(0x16f),
          "Content-Type": _0x4f2b3d(0x16f),
          "X-Session-ID": _0x2791fc,
          D1: _0x4f2b3d(0x1b1),
          "X-DeviceOS": "Android,7.0",
          "X-User-Type": "customer",
          "X-PhoneMake": _0x4f2b3d(0x1ae),
          "X-DeviceToken": "",
          "X-PhoneModel": _0x4f2b3d(0x195),
          "X-PushTokenType": _0x4f2b3d(0x1a9),
          "User-uuid": "",
          Authorization: _0x4f2b3d(0x1a5) + _0x2ddbeb,
          "Accept-Language": _0x4f2b3d(0x193),
          "X-User-Locale": "en_ID",
          "X-Location": _0x4f2b3d(0x1b9) + randstring(0x4),
          "X-Location-Accuracy": _0x4f2b3d(0x175),
          "Gojek-Country-Code": "ID",
          "Gojek-Service-Area": "58",
          "Gojek-Timezone": _0x4f2b3d(0x1cc),
          "X-M1": _0x4f2b3d(0x1b3),
          Host: _0x4f2b3d(0x1c2),
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": _0x4f2b3d(0x19e),
        },
      })
        [_0x4f2b3d(0x194)]((_0x43c162) => _0x43c162[_0x4f2b3d(0x1c0)]())
        [_0x4f2b3d(0x194)]((_0x359518) => {
          _0x4ccbfd(_0x359518);
        })
        [_0x4f2b3d(0x16d)]((_0x3a22c4) => {
          _0xde97d8(_0x3a22c4);
        });
    }),
  QR = (_0x3661d2, _0x2bb213, _0x192ce0, _0x3a3317, _0x4fb2b5) =>
    new Promise((_0x4a1bab, _0x480709) => {
      const _0x60b114 = _0x3a1dc8;
      fetch(_0x60b114(0x174), {
        method: _0x60b114(0x1b0),
        headers: {
          "X-Session-ID": _0x3661d2,
          D1: "17:AC:A3:A5:AD:0B:5E:27:A1:A1:42:32:FF:CF:15:CB:2C:11:C6:8C:BB:8E:6B:BB:F2:70:DA:EE:38:47:BE:60",
          Accept: _0x60b114(0x16f),
          "Content-Type": "application/json",
          "X-Platform": "Android",
          "X-UniqueId": _0x3a3317,
          "X-AppVersion": _0x60b114(0x178),
          "X-AppId": "com.gojek.app",
          "X-DeviceOS": _0x60b114(0x1aa),
          "X-User-Type": "customer",
          "X-PhoneMake": _0x60b114(0x1ae),
          "X-DeviceToken": "",
          "X-PushTokenType": _0x60b114(0x1a9),
          "X-PhoneModel": _0x60b114(0x195),
          "User-uuid": _0x192ce0,
          Authorization: _0x60b114(0x1a5) + _0x2bb213,
          "Accept-Language": _0x60b114(0x193),
          "X-User-Locale": "en_ID",
          "X-Location": _0x60b114(0x1b9) + randstring(0x4),
          "X-Location-Accuracy": _0x60b114(0x16c),
          "Gojek-Country-Code": "ID",
          "X-M1": _0x60b114(0x1b3),
          "Content-Type": _0x60b114(0x1d6),
          "Content-Length": _0x60b114(0x1cb),
          Host: _0x60b114(0x168),
          Connection: _0x60b114(0x1ba),
          "Accept-Encoding": _0x60b114(0x1c3),
          "User-Agent": "okhttp/3.12.13",
        },
        body: JSON[_0x60b114(0x17f)]({ data: _0x4fb2b5, type: "QR_CODE" }),
      })
        [_0x60b114(0x194)]((_0x2758d9) => _0x2758d9["json"]())
        [_0x60b114(0x194)]((_0x1c7c7d) => {
          _0x4a1bab(_0x1c7c7d);
        })
        [_0x60b114(0x16d)]((_0x409914) => {
          _0x480709(_0x409914);
        });
    }),
  Paycok = (_0x47ef77, _0x2fec2e, _0xab1bff, _0x1234ce, _0x3af45a, _0x4812cf) =>
    new Promise((_0x220b59, _0x474fa0) => {
      const _0x55215f = _0x3a1dc8;
      fetch(_0x55215f(0x18c) + _0x3af45a + "/capture", {
        method: _0x55215f(0x1a2),
        headers: {
          pin: "",
          D1: _0x55215f(0x1b1),
          Accept: "application/json",
          "X-Platform": _0x55215f(0x16a),
          "X-UniqueId": _0x1234ce,
          "X-Session-ID": _0x47ef77,
          "X-AppVersion": "4.27.2",
          "X-AppId": _0x55215f(0x1a4),
          "X-DeviceOS": _0x55215f(0x1aa),
          "X-User-Type": _0x55215f(0x1d0),
          "X-PhoneMake": _0x55215f(0x1ae),
          "X-DeviceToken": "",
          "X-PushTokenType": "FCM",
          "X-PhoneModel": _0x55215f(0x195),
          "User-uuid": _0xab1bff,
          Authorization: "Bearer\x20" + _0x2fec2e,
          "Accept-Language": _0x55215f(0x193),
          "X-User-Locale": "en_ID",
          "X-Location": _0x55215f(0x1b9) + randstring(0x4),
          "X-Location-Accuracy": "0.0",
          "Gojek-Country-Code": "ID",
          "X-M1": _0x55215f(0x1b3),
          "Content-Type": _0x55215f(0x1d6),
          "Content-Length": _0x55215f(0x196),
          Host: "customer.gopayapi.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": _0x55215f(0x1c3),
          "User-Agent": _0x55215f(0x19e),
        },
        body: JSON["stringify"](_0x4812cf),
      })
        ["then"]((_0x534757) => _0x534757[_0x55215f(0x1c0)]())
        ["then"]((_0x1271ff) => {
          _0x220b59(_0x1271ff);
        })
        [_0x55215f(0x16d)]((_0x313bc0) => {
          _0x474fa0(_0x313bc0);
        });
    }),
  Paycok2 = (
    _0x152e5c,
    _0x351eee,
    _0x497a16,
    _0xbc7ebd,
    _0x145905,
    _0x3e7fb1
  ) =>
    new Promise((_0x504776, _0x1c1791) => {
      const _0x277881 = _0x3a1dc8;
      fetch(
        "https://customer.gopayapi.com/v2/payments/" + _0x145905 + "/capture",
        {
          method: _0x277881(0x1a2),
          headers: {
            pin: 0x1b669,
            D1: _0x277881(0x1b1),
            Accept: "application/json",
            "X-Session-ID": _0x152e5c,
            "X-Platform": _0x277881(0x16a),
            "X-UniqueId": _0xbc7ebd,
            "X-AppVersion": _0x277881(0x178),
            "X-AppId": _0x277881(0x1a4),
            "X-DeviceOS": _0x277881(0x1aa),
            "X-User-Type": "customer",
            "X-PhoneMake": _0x277881(0x1ae),
            "X-DeviceToken": "",
            "X-PushTokenType": _0x277881(0x1a9),
            "X-PhoneModel": "Android,xiaomi\x20redmi\x20note\x207",
            "User-uuid": _0x497a16,
            Authorization: _0x277881(0x1a5) + _0x351eee,
            "Accept-Language": _0x277881(0x193),
            "X-User-Locale": _0x277881(0x1b8),
            "X-Location": _0x277881(0x1b9) + randstring(0x4),
            "X-Location-Accuracy": _0x277881(0x175),
            "Gojek-Country-Code": "ID",
            "X-M1":
              "1:UNKNOWN,2:UNKNOWN,3:1631626880354-3511426940583375156,4:12756,5:|UNKNOWN|4,6:UNKNOWN,7:\x22WiredSSID\x22,8:768x1184,9:,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2002,14:1631627063",
            "Content-Type": "application/json;\x20charset=UTF-8",
            "Content-Length": "2236",
            Host: _0x277881(0x168),
            Connection: _0x277881(0x1ba),
            "Accept-Encoding": _0x277881(0x1c3),
            "User-Agent": _0x277881(0x19e),
          },
          body: JSON[_0x277881(0x17f)](_0x3e7fb1),
        }
      )
        [_0x277881(0x194)]((_0x28b46a) => _0x28b46a[_0x277881(0x1c0)]())
        [_0x277881(0x194)]((_0x534944) => {
          _0x504776(_0x534944);
        })
        [_0x277881(0x16d)]((_0x481f31) => {
          _0x1c1791(_0x481f31);
        });
    }),
  balance = (_0x4fa2e1, _0x36bd35, _0x57853f, _0x4003d6) =>
    new Promise((_0x59f787, _0x5802d1) => {
      const _0x2cf7b5 = _0x3a1dc8;
      fetch(_0x2cf7b5(0x1c5), {
        method: _0x2cf7b5(0x167),
        headers: {
          "X-Session-ID": _0x4fa2e1,
          D1: _0x2cf7b5(0x1b1),
          Accept: _0x2cf7b5(0x16f),
          "Content-Type": "application/json",
          "X-Platform": _0x2cf7b5(0x16a),
          "X-UniqueId": _0x4003d6,
          "X-AppVersion": "4.27.2",
          "X-AppId": _0x2cf7b5(0x1a4),
          "X-DeviceOS": _0x2cf7b5(0x1aa),
          "X-User-Type": "customer",
          "X-PhoneMake": _0x2cf7b5(0x1c9),
          "X-DeviceToken": "",
          "X-PushTokenType": _0x2cf7b5(0x1a9),
          "X-PhoneModel": _0x2cf7b5(0x195),
          "User-uuid": _0x57853f,
          Authorization: _0x2cf7b5(0x1a5) + _0x36bd35,
          "Accept-Language": _0x2cf7b5(0x193),
          "X-User-Locale": _0x2cf7b5(0x1b8),
          "X-Location": _0x2cf7b5(0x1b9) + randstring(0x4),
          "X-Location-Accuracy": _0x2cf7b5(0x16c),
          "Gojek-Country-Code": "ID",
          "X-M1": _0x2cf7b5(0x198),
          Host: _0x2cf7b5(0x168),
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": _0x2cf7b5(0x19e),
          "If-Modified-Since": _0x2cf7b5(0x17d),
        },
      })
        ["then"]((_0x5d835e) => _0x5d835e[_0x2cf7b5(0x1c0)]())
        [_0x2cf7b5(0x194)]((_0x164c36) => {
          _0x59f787(_0x164c36);
        })
        [_0x2cf7b5(0x16d)]((_0x319cff) => {
          _0x5802d1(_0x319cff);
        });
    }),
  Generateurl = (_0x3ea877) =>
    new Promise((_0x2fd4a4, _0x44d522) => {
      const _0x78bc31 = _0x3a1dc8;
      fetch(_0x78bc31(0x1c8) + _0x3ea877, { body: null, method: "GET" })
        [_0x78bc31(0x194)]((_0x419b23) => _0x419b23[_0x78bc31(0x1c0)]())
        [_0x78bc31(0x194)]((_0x5c2121) => {
          _0x2fd4a4(_0x5c2121);
        })
        [_0x78bc31(0x16d)]((_0x48e200) => _0x44d522(_0x48e200));
    });
function _0x145b() {
  const _0x361240 = [
    "application/json",
    "yellowBright",
    "uuid",
    "IN_PROGRESS\x20PAYMENT",
    "floor",
    "https://customer.gopayapi.com/v1/explore",
    "10.0",
    "569372KyRhzy",
    "payment_id",
    "4.27.2",
    "charAt",
    "AKUN\x20GOJEK\x20STATUS\x20AKTIF",
    "LIMIT\x20PAY",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.attemptId\x22\x0d\x0a\x0d\x0ac78072b0-2f36-4c5e-8cc7-8d670410028a\x0d\x0a------WebKitFormBoundary",
    "Fri,\x2011\x20Feb\x202022\x2013:40:11\x20GMT",
    "11964eIYydp",
    "stringify",
    "split",
    "empty",
    "WebKitFormBoundary",
    "application/json,\x20text/plain,\x20*/*",
    "token",
    "--\x0d\x0a",
    "url",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.checkoutViewId\x22\x0d\x0a\x0d\x0a05a0f608-c043-4b44-9882-f5606e783803\x0d\x0a------WebKitFormBoundary",
    "DYNAMIC_QR",
    "message",
    "\x22.Not/A)Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22103\x22,\x20\x22Chromium\x22;v=\x22103\x22",
    "\x22Windows\x22",
    "https://customer.gopayapi.com/v2/payments/",
    "\x0a\x20\x20\x20\x20=================================================================\x0a\x20\x20\x20\x20========================\x20SPOTITIT\x20PAY\x20===========================\x0a\x20\x20\x20\x20=================================================================\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20version\x20:\x201.0\x0a\x20\x20\x20\x20by\x20:\x20w",
    "metadata",
    "delay",
    "cors",
    "/purchase",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.paymentProviderId\x22\x0d\x0a\x0d\x0abilling_boku_gopay_rpsp\x0d\x0a------WebKitFormBoundary",
    "en-ID",
    "then",
    "Android,xiaomi\x20redmi\x20note\x207",
    "2236",
    "https://api.gojekapi.com/gojek/v2/customer",
    "1:UNKNOWN,2:UNKNOWN,3:1634552877872-4410887987191940410,4:15193,5:gmin|2400|4,6:10:D0:FF:51:13:26,7:\x22cnqwjfk403\x22,8:720x1280,9:passive,gps,network,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2001,14:1644586815",
    "https://www.spotify.com/id/api/payment-sdk/prepare/premium/?clientName=premium-www-checkout&clientContext=premium-checkout&version=4.8.0",
    "------WebKitFormBoundary",
    "length",
    "greenBright",
    "8858528wPLHYJ",
    "okhttp/3.12.13",
    "same-origin",
    "strict-origin-when-cross-origin",
    "random",
    "PATCH",
    "abcdefghijklmnopqrstuvwxyz1234567890",
    "com.gojek.app",
    "Bearer\x20",
    "transaction-status",
    "tokengojek",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "FCM",
    "Android,7.0",
    "boundary",
    "https://buy2.boku.com/transaction/",
    "redBright",
    "unknown",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.originUrl\x22\x0d\x0a\x0d\x0ahttps://www.spotify.com/id/purchase/offer/2022-artist-mini-premium-mini-7d/?campaign=artist&fbclid=IwAR1LhE5GUIVsnBrz2Vu9R2cm3-1hGlxwTEoe6-ffQdyCMP1tLLAHpAdjqyA\x0d\x0a------WebKitFormBoundary",
    "POST",
    "17:AC:A3:A5:AD:0B:5E:27:A1:A1:42:32:FF:CF:15:CB:2C:11:C6:8C:BB:8E:6B:BB:F2:70:DA:EE:38:47:BE:60",
    "blueBright",
    "1:UNKNOWN,2:UNKNOWN,3:1631626880354-3511426940583375156,4:12756,5:|UNKNOWN|4,6:UNKNOWN,7:\x22WiredSSID\x22,8:768x1184,9:,10:1,11:UNKNOWN,12:VALUE_NOT_PRESENT,13:2002,14:1631627063",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.isChangeDetails\x22\x0d\x0a\x0d\x0afalse\x0d\x0a------WebKitFormBoundary",
    "STATUS\x20PROMO\x20AKTIF",
    "3241546mRjbUn",
    "data",
    "en_ID",
    "65.9667,-18.",
    "Keep-Alive",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.productDescription\x22\x0d\x0a\x0d\x0aSpotify\x207\x20hari\x0d\x0a------WebKitFormBoundary",
    "success",
    "checkout",
    "2285HWYhMp",
    "log",
    "json",
    "symbol",
    "api.gojekapi.com",
    "gzip",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.country\x22\x0d\x0a\x0d\x0aID\x0d\x0a------WebKitFormBoundary",
    "https://customer.gopayapi.com/v1/payment-options/balances",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.offerKey\x22\x0d\x0a\x0d\x0apremium_mini_7d\x0d\x0a------WebKitFormBoundary",
    "1234567890",
    "http://api.qrserver.com/v1/read-qr-code/?fileurl=",
    "Samsung",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.offerCountryProductId\x22\x0d\x0a\x0d\x0adefault:premium-mini-7d:3\x0d\x0a------WebKitFormBoundary",
    "2228",
    "Asia/Jakarta",
    "*/*",
    "21444992CjVMXT",
    "https://buy2.boku.com/checkout/",
    "customer",
    "transaction-response",
    "en-US,en;q=0.9",
    "https://buy.boku.com/checkout-aux/receive-carrier-flow/transaction-status?transaction-id=",
    "SD-rememberUserInfo=0",
    "810141LtjDQM",
    "application/json;\x20charset=UTF-8",
    "GET",
    "customer.gopayapi.com",
    "6034380zZurOh",
    "Android",
    "readline-sync",
    "0.0",
    "catch",
    "\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22checkout.returnUrl\x22\x0d\x0a\x0d\x0ahttps://www.spotify.com/id/purchase/continue/purchase/premium_mini_7d/?orderReference={checkoutId}&offerId=premium-mini-7d\x0d\x0a------WebKitFormBoundary",
  ];
  _0x145b = function () {
    return _0x361240;
  };
  return _0x145b();
}
(async () => {
  const _0x51adec = _0x3a1dc8;
  console[_0x51adec(0x1bf)](chalk[_0x51adec(0x1b2)](_0x51adec(0x18d)));
  try {
    for (let _0x2721e3 = 0x1; _0x2721e3 < datajson["jumlahpay"]; _0x2721e3++) {
      console["log"]("[" + _0x2721e3 + "]");
      const _0x58265a = datajson[_0x51adec(0x1ab)],
        _0x599a74 = _0x58265a[_0x51adec(0x180)](_0x51adec(0x182))[0x1],
        _0x5b2a4e = datajson["crf"],
        _0x2e47d7 = datajson["cookie"],
        _0x22aa06 = await getToken(_0x58265a, _0x5b2a4e, _0x2e47d7, _0x599a74);
      if (_0x22aa06[_0x51adec(0x1bc)] == !![]) {
        console[_0x51adec(0x1bf)](chalk[_0x51adec(0x170)](_0x51adec(0x1b5)));
        const _0x4e8c09 = _0x22aa06["data"]["url"]["split"]("/")[0x4],
          _0x17cbbb = await memek(_0x4e8c09),
          _0x27520c =
            _0x17cbbb[_0x51adec(0x1d1)][_0x51adec(0x1bd)][_0x51adec(0x1a6)];
        if (_0x27520c == "IN_PROGRESS") {
          console[_0x51adec(0x1bf)](chalk[_0x51adec(0x170)](_0x51adec(0x172)));
          const _0x103462 = await asu(_0x4e8c09),
            _0x114729 = decodeURI(_0x103462[_0x51adec(0x186)]),
            _0x7a7d2 = decodeURIComponent(_0x114729),
            _0x1f582b = datajson[_0x51adec(0x1a7)],
            _0x2ad002 = datajson["id"],
            _0x3f63d0 = await Generateurl(_0x7a7d2[_0x51adec(0x180)]("?")[0x0]),
            _0x5c1ba9 = _0x3f63d0[0x0][_0x51adec(0x1c1)][0x0]["data"],
            _0x1184f5 = uuidv4(),
            _0x3b4d6f = await genUniqueId(0x10),
            _0x58f950 = await GetdataAccount(_0x1f582b, _0x3b4d6f, _0x1184f5);
          if (_0x58f950[_0x51adec(0x189)] == "OK") {
            console["log"](chalk[_0x51adec(0x170)](_0x51adec(0x17a)));
            const _0x58d65b = await balance(
              _0x1184f5,
              _0x1f582b,
              _0x2ad002,
              _0x3b4d6f
            );
            console[_0x51adec(0x1bf)](
              chalk[_0x51adec(0x19c)](
                JSON[_0x51adec(0x17f)](
                  _0x58d65b[_0x51adec(0x1b7)][0x0]["balance"]
                )
              )
            );
            const _0x2680ac = await QR(
              _0x1184f5,
              _0x1f582b,
              _0x2ad002,
              _0x3b4d6f,
              _0x5c1ba9
            );
            console[_0x51adec(0x1bf)](
              chalk[_0x51adec(0x170)]("GENERATE\x20PAY\x20BY\x20LINK\x20")
            );
            const _0x7b07e1 = _0x2680ac[_0x51adec(0x1b7)]["additional_data"],
              _0x50c515 = _0x2680ac[_0x51adec(0x1b7)]["checksum"],
              _0x41fa51 = _0x2680ac[_0x51adec(0x1b7)][_0x51adec(0x18e)],
              _0x112bac = {
                additional_data: _0x7b07e1,
                applied_promo_code: ["NO_PROMO_APPLIED"],
                channel_type: _0x51adec(0x188),
                checksum: _0x50c515,
                metadata: _0x41fa51,
                order_signature: {
                  partner_id: "",
                  reason: "",
                  customer_fulfillment_type: "",
                  partner_name: "",
                  transaction_type: "",
                  source: "",
                  channel_type: "",
                },
                payment_token: _0x58d65b["data"][0x0][_0x51adec(0x184)],
              },
              _0x23f04f = _0x2680ac["data"][_0x51adec(0x177)],
              _0x4f2d0f = await Paycok(
                _0x1184f5,
                _0x1f582b,
                _0x2ad002,
                _0x3b4d6f,
                _0x23f04f,
                _0x112bac
              );
            await delay(0xbb8);
            const _0x578e7d = await Paycok2(
              _0x1184f5,
              _0x1f582b,
              _0x2ad002,
              _0x3b4d6f,
              _0x23f04f,
              _0x112bac
            );
            console["log"](
              chalk[_0x51adec(0x19c)](JSON["stringify"](_0x578e7d))
            );
          } else
            console[_0x51adec(0x1bf)](
              chalk[_0x51adec(0x1ad)]("AKUN\x20NOT\x20VALID")
            );
        } else console["log"](_0x4e8c09);
      } else {
        console[_0x51adec(0x1bf)](chalk[_0x51adec(0x1ad)](_0x51adec(0x17b))),
          console[_0x51adec(0x1bf)](_0x22aa06);
        break;
      }
    }
  } catch (_0x41baed) {}
})();
