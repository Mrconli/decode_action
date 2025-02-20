//Thu Feb 20 2025 10:50:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios"),
  redis = require("redis"),
  JSONbig = require("json-bigint")({
    "storeAsString": true
  });
module.exports = class Gewechat {
  constructor(_0x3cc668, _0x572a91, _0x16eed5, _0xa6c9c7 = "redis://localhost:6379", _0x55ec03 = 7200) {
    const _0x1f7f39 = _0x55ec03 > 0 ? _0x55ec03 : 7200,
      _0x20d184 = redis.createClient({
        "url": _0xa6c9c7
      });
    _0x20d184.findFirstKeyWithPattern = async _0x1ffb3c => {
      {
        let _0x5150a5 = "0";
        do {
          {
            const _0x519c87 = await _0x20d184.scan(_0x5150a5, {
              "MATCH": _0x1ffb3c,
              "COUNT": 100
            });
            if (_0x519c87.keys.length > 0) return _0x519c87.keys[0];
            _0x5150a5 = _0x519c87.cursor;
          }
        } while (_0x5150a5 > 0);
        return undefined;
      }
    };
    _0x20d184.on("error", _0x4d6350 => console.error("【Gewechat】【redis】发生错误:", _0x4d6350));
    _0x20d184.connect();
    this.redis = _0x20d184;
    this.expirationSeconds = _0x1f7f39;
    const _0x4e3c82 = axios.create({
        "baseURL": _0x3cc668 + "/v2/api",
        "headers": {
          "X-GEWE-TOKEN": _0x572a91,
          "Content-Type": "application/json"
        },
        "transformResponse": [_0x3e65e7 => JSONbig.parse(_0x3e65e7)]
      }),
      _0x4110ae = (_0x44f46d, _0x3c126a = undefined) => _0x4e3c82.post(_0x44f46d, {
        ...{
          "appId": _0x16eed5
        },
        ..._0x3c126a
      }).then(_0x8c5dc2 => console.log("【Gewechat】【" + _0x44f46d + "】", JSON.stringify(_0x3c126a), "==>", JSON.stringify(_0x8c5dc2?.["data"])) || _0x8c5dc2?.["data"]).catch(({
        message: _0x2d3927,
        name: _0x1fd7a8,
        code: _0x3b15b8,
        config: _0x1d6801,
        request: _0x19a141
      }) => console.error("【Gewechat】【" + _0x44f46d + "】", _0x1fd7a8, _0x3b15b8, _0x2d3927) || {});
    this.downloadImage = (_0x273507, _0x4538b5 = 2) => _0x4110ae("/message/downloadImage", {
      "xml": _0x273507,
      "type": _0x4538b5
    });
    this.messageModule = class _0x5a7af9 {
      constructor(_0x4a00b3 = "", _0x2b72ee = undefined) {
        {
          this.toWxid = _0x4a00b3;
          this.callBack = _0x2b72ee ? _0x2b72ee : () => {};
          const _0x27da03 = (_0x480b38, _0x2a0ec6, _0xb3b4e8 = " ") => _0x4e3c82.post(_0x480b38, {
            ...{
              "appId": _0x16eed5,
              "toWxid": _0x4a00b3
            },
            ..._0x2a0ec6
          }, {
            "timeout": 2800
          }).then(_0x23c636 => {
            {
              if (!_0x480b38.endsWith("revokeMsg")) {
                const {
                  createTime = 0,
                  msgId = 0,
                  newMsgId = 0,
                  type = 0
                } = _0x23c636.data.data;
                _0x20d184.setEx("gw:history:" + _0x16eed5 + "_" + msgId + "_" + newMsgId + "_" + createTime + "_" + type, _0x1f7f39, _0xb3b4e8);
                this.callBack(msgId, newMsgId, createTime, type);
              }
              console.log("【Gewechat】【" + _0x480b38 + "】", JSON.stringify(_0x2a0ec6), "==>", JSON.stringify(_0x23c636?.["data"]));
              return _0x23c636?.["data"];
            }
          }).catch(({
            message: _0x18f7b4,
            name: _0x5b8897,
            code: _0xb922c,
            config: _0x5ade09,
            request: _0x3c3807
          }) => console.error("【Gewechat】【" + _0x480b38 + "】", _0x5b8897, _0xb922c, _0x18f7b4) || {});
          this.postText = (_0x3ae063, _0x2dbfb3 = null) => _0x27da03("/message/postText", {
            "content": _0x3ae063,
            "ats": _0x2dbfb3
          }, _0x3ae063);
          this.postFile = (_0x248be7, _0x688c92) => _0x27da03("/message/postFile", {
            "fileUrl": _0x248be7,
            "fileName": _0x688c92
          }, "[文件]");
          this.postImage = _0x4176f3 => _0x27da03("/message/postImage", {
            "imgUrl": _0x4176f3
          }, "[图片]");
          this.postVoice = (_0x4ebc3a, _0x550bdb) => _0x27da03("/message/postVoice", {
            "voiceUrl": _0x4ebc3a,
            "voiceDuration": _0x550bdb
          }, "[语音]");
          this.postVideo = (_0x26122d, _0x41078c, _0x2ea71b) => _0x27da03("/message/postVideo", {
            "videoUrl": _0x26122d,
            "thumbUrl": _0x41078c,
            "videoDuration": _0x2ea71b
          }, "[视频]");
          this.postLink = (_0x5dee48, _0x4cbe3c, _0x24667a, _0x2fbebb) => _0x27da03("/message/postLink", {
            "title": _0x5dee48,
            "desc": _0x4cbe3c,
            "linkUrl": _0x24667a,
            "thumbUrl": _0x2fbebb
          }, "[链接]");
          this.postNameCard = (_0x39002a, _0x5af47b) => _0x27da03("/message/postNameCard", {
            "nickName": _0x39002a,
            "nameCardWxid": _0x5af47b
          }, "[名片]");
          this.postEmoji = (_0x47aa57, _0x26e88a) => _0x27da03("/message/postEmoji", {
            "emojiMd5": _0x47aa57,
            "emojiSize": _0x26e88a
          }, "[动画表情]");
          this.postAppMsg = _0x3f1944 => _0x27da03("/message/postAppMsg", {
            "appmsg": _0x3f1944
          }, _0x3f1944);
          this.postMiniApp = (_0x5c07b0, _0xd6a2e3, _0x48ac67, _0x5e7489, _0x5627c4, _0x430e89) => _0x27da03("/message/postMiniApp", {
            "miniAppId": _0x5c07b0,
            "displayName": _0xd6a2e3,
            "pagePath": _0x48ac67,
            "coverImgUrl": _0x5e7489,
            "title": _0x5627c4,
            "userName": _0x430e89
          }, "[小程序]");
          this.forwardFile = _0x479e6d => _0x27da03("/message/forwardFile", {
            "xml": _0x479e6d
          }, "[文件]");
          this.forwardImage = _0xcdfd63 => _0x27da03("/message/forwardImage", {
            "xml": _0xcdfd63
          }, "[图片]");
          this.forwardVideo = _0x2b7a2b => _0x27da03("/message/forwardVideo", {
            "xml": _0x2b7a2b
          }, "[视频]");
          this.forwardUrl = _0x44c041 => _0x27da03("/message/forwardUrl", {
            "xml": _0x44c041
          }, "[链接]");
          this.forwardMiniApp = (_0x5d29cb, _0x3e6e39) => _0x27da03("/message/forwardMiniApp", {
            "xml": _0x5d29cb,
            "coverImgUrl": _0x3e6e39
          }, "[小程序]");
          this.revokeMsg = (_0x546d14, _0x508e94, _0x38dd1c) => _0x27da03("/message/revokeMsg", {
            "msgId": _0x546d14,
            "newMsgId": _0x508e94,
            "createTime": _0x38dd1c
          });
        }
      }
    };
    this.contactsModule = class _0x4e4f85 {
      static ["fetchContactsList"] = async (_0x52e441 = false) => _0x2609d7("gw:fetchContactsList:" + contactsInfo, _0x52e441, () => _0x4110ae("/contacts/fetchContactsList"));
      static ["fetchContactsListCache"] = () => _0x4110ae("/contacts/fetchContactsListCache");
      static ["search"] = async (_0x2579c5, _0x5647af = false) => _0x2609d7("gw:search:" + _0x2579c5, _0x5647af, () => _0x4110ae("/contacts/search", {
        "contactsInfo": _0x2579c5
      }));
      static ["addContacts"] = (_0x1cace1, _0x137c50, _0x1e5a96, _0x593a34, _0x544cae) => _0x4110ae("/contacts/addContacts", {
        "scene": _0x1cace1,
        "option": _0x137c50,
        "v3": _0x1e5a96,
        "v4": _0x593a34,
        "content": _0x544cae
      });
      static ["deleteFriend"] = _0x81c302 => _0x4110ae("/contacts/deleteFriend", {
        "wxid": _0x81c302
      });
      static ["uploadPhoneAddressList"] = (_0x2abdd7, _0x141fc1) => _0x4110ae("/contacts/uploadPhoneAddressList", {
        "phones": _0x2abdd7,
        "opType": _0x141fc1
      });
      static ["getBriefInfo"] = async (_0x45634a, _0x54ab33 = false) => _0x2609d7("gw:getBriefInfo:" + _0x45634a.sort().join(","), _0x54ab33, () => _0x4110ae("/contacts/getBriefInfo", {
        "wxids": _0x45634a
      }));
      static ["getDetailInfo"] = async (_0x44d361, _0x11decb = false) => _0x2609d7("gw:getDetailInfo:" + _0x44d361.sort().join(","), _0x11decb, () => _0x4110ae("/contacts/getDetailInfo", {
        "wxids": _0x44d361
      }));
      static ["setFriendPermissions"] = (_0x556e88, _0x6f5f4a) => _0x4110ae("/contacts/setFriendPermissions", {
        "wxid": _0x556e88,
        "onlyChat": _0x6f5f4a
      });
      static ["setFriendRemark"] = (_0xb58988, _0x534d94) => _0x4110ae("/contacts/setFriendRemark", {
        "wxid": _0xb58988,
        "remark": _0x534d94
      });
      static ["getPhoneAddressList"] = async (_0x37ad66, _0x12ac3 = false) => _0x2609d7("gw:getPhoneAddressList:" + _0x37ad66.sort().join(","), _0x12ac3, () => _0x4110ae("/contacts/getPhoneAddressList", {
        "phones": _0x37ad66
      }));
    };
    this.groupModule = class _0x159908 {
      static ["createChatroom"] = _0x211a3f => _0x4110ae("/group/createChatroom", {
        "wxids": _0x211a3f
      });
      static ["agreeJoinRoom"] = _0x4556e0 => _0x4110ae("/group/agreeJoinRoom", {
        "url": _0x4556e0
      });
      static ["joinRoomUsingQRCode"] = _0x2fa8f9 => _0x4110ae("/group/joinRoomUsingQRCode", {
        "qrUrl": _0x2fa8f9
      });
      constructor(_0x51e78e) {
        this.modifyChatroomName = _0x3ed087 => _0x4110ae("/group/modifyChatroomName", {
          "chatroomName": _0x3ed087,
          "chatroomId": _0x51e78e
        });
        this.modifyChatroomRemark = _0x4bd3de => _0x4110ae("/group/modifyChatroomRemark", {
          "chatroomRemark": _0x4bd3de,
          "chatroomId": _0x51e78e
        });
        this.modifyChatroomNickNameForSelf = _0x5df86a => _0x4110ae("/group/modifyChatroomNickNameForSelf", {
          "nickName": _0x5df86a,
          "chatroomId": _0x51e78e
        });
        this.inviteMember = (_0x46a916, _0x3eb3a1) => _0x4110ae("/group/inviteMember", {
          "wxids": _0x46a916,
          "chatroomId": _0x51e78e,
          "reason": _0x3eb3a1
        });
        this.removeMember = _0x2a17f0 => _0x4110ae("/group/removeMember", {
          "wxids": _0x2a17f0,
          "chatroomId": _0x51e78e
        });
        this.quitChatroom = () => _0x4110ae("/group/quitChatroom", {
          "chatroomId": _0x51e78e
        });
        this.disbandChatroom = () => _0x4110ae("/group/disbandChatroom", {
          "chatroomId": _0x51e78e
        });
        this.getChatroomInfo = async (_0x2716cf = false) => _0x2609d7("gw:getChatroomInfo:" + _0x51e78e, _0x2716cf, () => _0x4110ae("/group/getChatroomInfo", {
          "chatroomId": _0x51e78e
        }));
        this.getChatroomMemberList = async (_0x516776 = false) => _0x2609d7("gw:getChatroomMemberList:" + _0x51e78e, _0x516776, () => _0x4110ae("/group/getChatroomMemberList", {
          "chatroomId": _0x51e78e
        }));
        this.getChatroomMemberDetail = async (_0x4a4bb7, _0x32f0b7 = false) => _0x2609d7("gw:getChatroomMemberDetail:" + _0x51e78e + ":" + _0x4a4bb7.sort().join(","), _0x32f0b7, () => _0x4110ae("/group/getChatroomMemberDetail", {
          "chatroomId": _0x51e78e,
          "memberWxids": _0x4a4bb7
        }));
        this.getChatroomAnnouncement = async (_0x58feb3 = false) => _0x2609d7("gw:getChatroomAnnouncement:" + _0x51e78e, _0x58feb3, () => _0x4110ae("/group/getChatroomAnnouncement", {
          "chatroomId": _0x51e78e
        }));
        this.setChatroomAnnouncement = _0x6f3e4d => _0x4110ae("/group/setChatroomAnnouncement", {
          "chatroomId": _0x51e78e,
          "content": _0x6f3e4d
        });
        this.addGroupMemberAsFriend = (_0x53789a, _0x13a866) => _0x4110ae("/group/addGroupMemberAsFriend", {
          "chatroomId": _0x51e78e,
          "memberWxid": _0x53789a,
          "content": _0x13a866
        });
        this.getChatroomQrCode = async (_0x20d14e = false) => _0x2609d7("gw:getChatroomQrCode:" + _0x51e78e, _0x20d14e, () => _0x4110ae("/group/getChatroomQrCode", {
          "chatroomId": _0x51e78e
        }));
        this.saveContractList = _0x4488c9 => _0x4110ae("/group/saveContractList", {
          "chatroomId": _0x51e78e,
          "operType": _0x4488c9
        });
        this.adminOperate = (_0x29a9e2, _0x4a00f) => _0x4110ae("/group/adminOperate", {
          "chatroomId": _0x51e78e,
          "operType": _0x29a9e2,
          "wxids": _0x4a00f
        });
        this.pinChat = _0x402d6e => _0x4110ae("/group/pinChat", {
          "chatroomId": _0x51e78e,
          "top": _0x402d6e
        });
        this.setMsgSilence = _0x50fb53 => _0x4110ae("/group/setMsgSilence", {
          "chatroomId": _0x51e78e,
          "silence": _0x50fb53
        });
        this.roomAccessApplyCheckApprove = (_0x3d1eac, _0x1fa65f) => _0x4110ae("/group/roomAccessApplyCheckApprove", {
          "chatroomId": _0x51e78e,
          "newMsgId": _0x3d1eac,
          "msgContent": _0x1fa65f
        });
      }
    };
    const _0x2609d7 = async (_0x4845e5, _0x3950f3, _0x56c411) => {
      {
        if (!_0x3950f3) try {
          {
            const _0x5d5495 = await _0x20d184.get(_0x4845e5);
            if (_0x5d5495) return console.log("【Gewechat】【redis】从缓存获取数据：" + _0x4845e5), JSON.parse(_0x5d5495);
          }
        } catch (_0x561088) {
          console.error("【Gewechat】【redis】获取缓存失败:", _0x561088);
        }
        try {
          {
            const _0x30de61 = await _0x56c411();
            await _0x20d184.setEx(_0x4845e5, _0x1f7f39, JSON.stringify(_0x30de61));
            console.log("【Gewechat】【redis】缓存已更新：" + _0x4845e5);
            return _0x30de61;
          }
        } catch (_0xcd742a) {
          {
            console.error("【Gewechat】【redis】获取数据失败:", _0xcd742a);
            throw _0xcd742a;
          }
        }
      }
    };
    return this;
  }
};