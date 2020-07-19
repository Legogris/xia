/* eslint-disable */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
ttypes.ApplicationType = {
  'IOS' : 16,
  'IOS_RC' : 17,
  'IOS_BETA' : 18,
  'IOS_ALPHA' : 19,
  'ANDROID' : 32,
  'ANDROID_RC' : 33,
  'ANDROID_BETA' : 34,
  'ANDROID_ALPHA' : 35,
  'WAP' : 48,
  'WAP_RC' : 49,
  'WAP_BETA' : 50,
  'WAP_ALPHA' : 51,
  'BOT' : 64,
  'BOT_RC' : 65,
  'BOT_BETA' : 66,
  'BOT_ALPHA' : 67,
  'WEB' : 80,
  'WEB_RC' : 81,
  'WEB_BETA' : 82,
  'WEB_ALPHA' : 83,
  'DESKTOPWIN' : 96,
  'DESKTOPWIN_RC' : 97,
  'DESKTOPWIN_BETA' : 98,
  'DESKTOPWIN_ALPHA' : 99,
  'DESKTOPMAC' : 112,
  'DESKTOPMAC_RC' : 113,
  'DESKTOPMAC_BETA' : 114,
  'DESKTOPMAC_ALPHA' : 115,
  'CHANNELGW' : 128,
  'CHANNELGW_RC' : 129,
  'CHANNELGW_BETA' : 130,
  'CHANNELGW_ALPHA' : 131,
  'CHANNELCP' : 144,
  'CHANNELCP_RC' : 145,
  'CHANNELCP_BETA' : 146,
  'CHANNELCP_ALPHA' : 147,
  'WINPHONE' : 160,
  'WINPHONE_RC' : 161,
  'WINPHONE_BETA' : 162,
  'WINPHONE_ALPHA' : 163,
  'BLACKBERRY' : 176,
  'BLACKBERRY_RC' : 177,
  'BLACKBERRY_BETA' : 178,
  'BLACKBERRY_ALPHA' : 179,
  'WINMETRO' : 192,
  'WINMETRO_RC' : 193,
  'WINMETRO_BETA' : 194,
  'WINMETRO_ALPHA' : 195,
  'S40' : 208,
  'S40_RC' : 209,
  'S40_BETA' : 210,
  'S40_ALPHA' : 211,
  'CHRONO' : 224,
  'CHRONO_RC' : 225,
  'CHRONO_BETA' : 226,
  'CHRONO_ALPHA' : 227,
  'TIZEN' : 256,
  'TIZEN_RC' : 257,
  'TIZEN_BETA' : 258,
  'TIZEN_ALPHA' : 259,
  'VIRTUAL' : 272
};
ttypes.BuddyBannerLinkType = {
  'BUDDY_BANNER_LINK_HIDDEN' : 0,
  'BUDDY_BANNER_LINK_MID' : 1,
  'BUDDY_BANNER_LINK_URL' : 2
};
ttypes.BuddyOnAirType = {
  'NORMAL' : 0,
  'LIVE' : 1,
  'VOIP' : 2
};
ttypes.BuddyResultState = {
  'ACCEPTED' : 1,
  'SUCCEEDED' : 2,
  'FAILED' : 3,
  'CANCELLED' : 4,
  'NOTIFY_FAILED' : 5,
  'STORING' : 11,
  'UPLOADING' : 21,
  'NOTIFYING' : 31
};
ttypes.BuddySearchRequestSource = {
  'NA' : 0,
  'FRIEND_VIEW' : 1,
  'OFFICIAL_ACCOUNT_VIEW' : 2
};
ttypes.CarrierCode = {
  'NOT_SPECIFIED' : 0,
  'JP_DOCOMO' : 1,
  'JP_AU' : 2,
  'JP_SOFTBANK' : 3,
  'KR_SKT' : 17,
  'KR_KT' : 18,
  'KR_LGT' : 19
};
ttypes.ChannelConfiguration = {
  'MESSAGE' : 0,
  'MESSAGE_NOTIFICATION' : 1,
  'NOTIFICATION_CENTER' : 2
};
ttypes.ChannelErrorCode = {
  'ILLEGAL_ARGUMENT' : 0,
  'INTERNAL_ERROR' : 1,
  'CONNECTION_ERROR' : 2,
  'AUTHENTICATIONI_FAILED' : 3,
  'NEED_PERMISSION_APPROVAL' : 4,
  'COIN_NOT_USABLE' : 5
};
ttypes.ChannelSyncType = {
  'SYNC' : 0,
  'REMOVE' : 1
};
ttypes.ContactAttribute = {
  'CONTACT_ATTRIBUTE_CAPABLE_VOICE_CALL' : 1,
  'CONTACT_ATTRIBUTE_CAPABLE_VIDEO_CALL' : 2,
  'CONTACT_ATTRIBUTE_CAPABLE_MY_HOME' : 16,
  'CONTACT_ATTRIBUTE_CAPABLE_BUDDY' : 32
};
ttypes.ContactCategory = {
  'NORMAL' : 0,
  'RECOMMEND' : 1
};
ttypes.ContactRelation = {
  'ONEWAY' : 0,
  'BOTH' : 1,
  'NOT_REGISTERED' : 2
};
ttypes.ContactSetting = {
  'CONTACT_SETTING_NOTIFICATION_DISABLE' : 1,
  'CONTACT_SETTING_DISPLAY_NAME_OVERRIDE' : 2,
  'CONTACT_SETTING_CONTACT_HIDE' : 4,
  'CONTACT_SETTING_FAVORITE' : 8,
  'CONTACT_SETTING_DELETE' : 16
};
ttypes.ContactStatus = {
  'UNSPECIFIED' : 0,
  'FRIEND' : 1,
  'FRIEND_BLOCKED' : 2,
  'RECOMMEND' : 3,
  'RECOMMEND_BLOCKED' : 4,
  'DELETED' : 5,
  'DELETED_BLOCKED' : 6
};
ttypes.ContactType = {
  'MID' : 0,
  'PHONE' : 1,
  'EMAIL' : 2,
  'USERID' : 3,
  'PROXIMITY' : 4,
  'GROUP' : 5,
  'USER' : 6,
  'QRCODE' : 7,
  'PROMOTION_BOT' : 8,
  'REPAIR' : 128,
  'FACEBOOK' : 2305,
  'SINA' : 2306,
  'RENREN' : 2307,
  'FEIXIN' : 2308
};
ttypes.ContentType = {
  'NONE' : 0,
  'IMAGE' : 1,
  'VIDEO' : 2,
  'AUDIO' : 3,
  'HTML' : 4,
  'PDF' : 5,
  'CALL' : 6,
  'STICKER' : 7,
  'PRESENCE' : 8,
  'GIFT' : 9,
  'GROUPBOARD' : 10,
  'APPLINK' : 11,
  'LINK' : 12,
  'CONTACT' : 13,
  'FILE' : 14,
  'LOCATION' : 15,
  'POSTNOTIFICATION' : 16,
  'RICH' : 17,
  'CHATEVENT' : 18
};
ttypes.CustomMode = {
  'PROMOTION_FRIENDS_INVITE' : 1,
  'CAPABILITY_SERVER_SIDE_SMS' : 2,
  'LINE_CLIENT_ANALYTICS_CONFIGURATION' : 3
};
ttypes.EmailConfirmationStatus = {
  'NOT_SPECIFIED' : 0,
  'NOT_YET' : 1,
  'DONE' : 3
};
ttypes.EmailConfirmationType = {
  'SERVER_SIDE_EMAIL' : 0,
  'CLIENT_SIDE_EMAIL' : 1
};
ttypes.ErrorCode = {
  'ILLEGAL_ARGUMENT' : 0,
  'AUTHENTICATION_FAILED' : 1,
  'DB_FAILED' : 2,
  'INVALID_STATE' : 3,
  'EXCESSIVE_ACCESS' : 4,
  'NOT_FOUND' : 5,
  'INVALID_LENGTH' : 6,
  'NOT_AVAILABLE_USER' : 7,
  'NOT_AUTHORIZED_DEVICE' : 8,
  'INVALID_MID' : 9,
  'NOT_A_MEMBER' : 10,
  'INCOMPATIBLE_APP_VERSION' : 11,
  'NOT_READY' : 12,
  'NOT_AVAILABLE_SESSION' : 13,
  'NOT_AUTHORIZED_SESSION' : 14,
  'SYSTEM_ERROR' : 15,
  'NO_AVAILABLE_VERIFICATION_METHOD' : 16,
  'NOT_AUTHENTICATED' : 17,
  'INVALID_IDENTITY_CREDENTIAL' : 18,
  'NOT_AVAILABLE_IDENTITY_IDENTIFIER' : 19,
  'INTERNAL_ERROR' : 20,
  'NO_SUCH_IDENTITY_IDENFIER' : 21,
  'DEACTIVATED_ACCOUNT_BOUND_TO_THIS_IDENTITY' : 22,
  'ILLEGAL_IDENTITY_CREDENTIAL' : 23,
  'UNKNOWN_CHANNEL' : 24,
  'NO_SUCH_MESSAGE_BOX' : 25,
  'NOT_AVAILABLE_MESSAGE_BOX' : 26,
  'CHANNEL_DOES_NOT_MATCH' : 27,
  'NOT_YOUR_MESSAGE' : 28,
  'MESSAGE_DEFINED_ERROR' : 29,
  'USER_CANNOT_ACCEPT_PRESENTS' : 30,
  'USER_NOT_STICKER_OWNER' : 32,
  'MAINTENANCE_ERROR' : 33,
  'ACCOUNT_NOT_MATCHED' : 34,
  'ABUSE_BLOCK' : 35,
  'NOT_FRIEND' : 36,
  'NOT_ALLOWED_CALL' : 37,
  'BLOCK_FRIEND' : 38,
  'INCOMPATIBLE_VOIP_VERSION' : 39,
  'INVALID_SNS_ACCESS_TOKEN' : 40,
  'EXTERNAL_SERVICE_NOT_AVAILABLE' : 41,
  'NOT_ALLOWED_ADD_CONTACT' : 42,
  'NOT_CERTIFICATED' : 43,
  'NOT_ALLOWED_SECONDARY_DEVICE' : 44,
  'INVALID_PIN_CODE' : 45,
  'NOT_FOUND_IDENTITY_CREDENTIAL' : 46,
  'EXCEED_FILE_MAX_SIZE' : 47,
  'EXCEED_DAILY_QUOTA' : 48,
  'NOT_SUPPORT_SEND_FILE' : 49,
  'MUST_UPGRADE' : 50,
  'NOT_AVAILABLE_PIN_CODE_SESSION' : 51
};
ttypes.FeatureType = {
  'OBJECT_STORAGE' : 1
};
ttypes.GroupAttribute = {
  'NAME' : 1,
  'PICTURE_STATUS' : 2,
  'ALL' : 255
};
ttypes.IdentityProvider = {
  'UNKNOWN' : 0,
  'LINE' : 1,
  'NAVER_KR' : 2
};
ttypes.LoginType = {
  'ID_CREDENTIAL' : 0,
  'QRCODE' : 1,
  'ID_CREDENTIAL_WITH_E2EE' : 2
};
ttypes.LoginResultType = {
  'SUCCESS' : 1,
  'REQUIRE_QRCODE' : 2,
  'REQUIRE_DEVICE_CONFIRM' : 3
};
ttypes.MessageOperationType = {
  'SEND_MESSAGE' : 1,
  'RECEIVE_MESSAGE' : 2,
  'READ_MESSAGE' : 3,
  'NOTIFIED_READ_MESSAGE' : 4,
  'NOTIFIED_JOIN_CHAT' : 5,
  'FAILED_SEND_MESSAGE' : 6,
  'SEND_CONTENT' : 7,
  'SEND_CONTENT_RECEIPT' : 8,
  'SEND_CHAT_REMOVED' : 9,
  'REMOVE_ALL_MESSAGES' : 10
};
ttypes.MIDType = {
  'USER' : 0,
  'ROOM' : 1,
  'GROUP' : 2
};
ttypes.ModificationType = {
  'ADD' : 0,
  'REMOVE' : 1,
  'MODIFY' : 2
};
ttypes.NotificationItemFetchMode = {
  'ALL' : 0,
  'APPEND' : 1
};
ttypes.NotificationQueueType = {
  'GLOBAL' : 1,
  'MESSAGE' : 2,
  'PRIMARY' : 3
};
ttypes.NotificationStatus = {
  'NOTIFICATION_ITEM_EXIST' : 1,
  'TIMELINE_ITEM_EXIST' : 2,
  'NOTE_GROUP_NEW_ITEM_EXIST' : 4,
  'TIMELINE_BUDDYGROUP_CHANGED' : 8,
  'NOTE_ONE_TO_ONE_NEW_ITEM_EXIST' : 16,
  'ALBUM_ITEM_EXIST' : 32,
  'TIMELINE_ITEM_DELETED' : 64
};
ttypes.NotificationType = {
  'APPLE_APNS' : 1,
  'GOOGLE_C2DM' : 2,
  'NHN_NNI' : 3,
  'SKT_AOM' : 4,
  'MS_MPNS' : 5,
  'RIM_BIS' : 6,
  'GOOGLE_GCM' : 7,
  'NOKIA_NNAPI' : 8,
  'TIZEN' : 9,
  'LINE_BOT' : 17,
  'LINE_WAP' : 18
};
ttypes.OpStatus = {
  'NORMAL' : 0,
  'ALERT_DISABLED' : 1
};
ttypes.OpType = {
  'END_OF_OPERATION' : 0,
  'UPDATE_PROFILE' : 1,
  'NOTIFIED_UPDATE_PROFILE' : 2,
  'REGISTER_USERID' : 3,
  'ADD_CONTACT' : 4,
  'NOTIFIED_ADD_CONTACT' : 5,
  'BLOCK_CONTACT' : 6,
  'UNBLOCK_CONTACT' : 7,
  'NOTIFIED_RECOMMEND_CONTACT' : 8,
  'CREATE_GROUP' : 9,
  'UPDATE_GROUP' : 10,
  'NOTIFIED_UPDATE_GROUP' : 11,
  'INVITE_INTO_GROUP' : 12,
  'NOTIFIED_INVITE_INTO_GROUP' : 13,
  'LEAVE_GROUP' : 14,
  'NOTIFIED_LEAVE_GROUP' : 15,
  'ACCEPT_GROUP_INVITATION' : 16,
  'NOTIFIED_ACCEPT_GROUP_INVITATION' : 17,
  'KICKOUT_FROM_GROUP' : 18,
  'NOTIFIED_KICKOUT_FROM_GROUP' : 19,
  'CREATE_ROOM' : 20,
  'INVITE_INTO_ROOM' : 21,
  'NOTIFIED_INVITE_INTO_ROOM' : 22,
  'LEAVE_ROOM' : 23,
  'NOTIFIED_LEAVE_ROOM' : 24,
  'SEND_MESSAGE' : 25,
  'RECEIVE_MESSAGE' : 26,
  'SEND_MESSAGE_RECEIPT' : 27,
  'RECEIVE_MESSAGE_RECEIPT' : 28,
  'SEND_CONTENT_RECEIPT' : 29,
  'RECEIVE_ANNOUNCEMENT' : 30,
  'CANCEL_INVITATION_GROUP' : 31,
  'NOTIFIED_CANCEL_INVITATION_GROUP' : 32,
  'NOTIFIED_UNREGISTER_USER' : 33,
  'REJECT_GROUP_INVITATION' : 34,
  'NOTIFIED_REJECT_GROUP_INVITATION' : 35,
  'UPDATE_SETTINGS' : 36,
  'NOTIFIED_REGISTER_USER' : 37,
  'INVITE_VIA_EMAIL' : 38,
  'NOTIFIED_REQUEST_RECOVERY' : 39,
  'SEND_CHAT_CHECKED' : 40,
  'SEND_CHAT_REMOVED' : 41,
  'NOTIFIED_FORCE_SYNC' : 42,
  'SEND_CONTENT' : 43,
  'SEND_MESSAGE_MYHOME' : 44,
  'NOTIFIED_UPDATE_CONTENT_PREVIEW' : 45,
  'REMOVE_ALL_MESSAGES' : 46,
  'NOTIFIED_UPDATE_PURCHASES' : 47,
  'DUMMY' : 48,
  'UPDATE_CONTACT' : 49,
  'NOTIFIED_RECEIVED_CALL' : 50,
  'CANCEL_CALL' : 51,
  'NOTIFIED_REDIRECT' : 52,
  'NOTIFIED_CHANNEL_SYNC' : 53,
  'FAILED_SEND_MESSAGE' : 54,
  'NOTIFIED_READ_MESSAGE' : 55,
  'FAILED_EMAIL_CONFIRMATION' : 56,
  'NOTIFIED_CHAT_CONTENT' : 58,
  'NOTIFIED_PUSH_NOTICENTER_ITEM' : 59
};
ttypes.PayloadType = {
  'PAYLOAD_BUY' : 101,
  'PAYLOAD_CS' : 111,
  'PAYLOAD_BONUS' : 121,
  'PAYLOAD_EVENT' : 131
};
ttypes.PaymentPgType = {
  'PAYMENT_PG_NONE' : 0,
  'PAYMENT_PG_AU' : 1,
  'PAYMENT_PG_AL' : 2
};
ttypes.PaymentType = {
  'PAYMENT_APPLE' : 1,
  'PAYMENT_GOOGLE' : 2
};
ttypes.ProductBannerLinkType = {
  'BANNER_LINK_NONE' : 0,
  'BANNER_LINK_ITEM' : 1,
  'BANNER_LINK_URL' : 2,
  'BANNER_LINK_CATEGORY' : 3
};
ttypes.ProductEventType = {
  'NO_EVENT' : 0,
  'CARRIER_ANY' : 65537,
  'BUDDY_ANY' : 131073,
  'INSTALL_IOS' : 196609,
  'INSTALL_ANDROID' : 196610,
  'MISSION_ANY' : 262145,
  'MUSTBUY_ANY' : 327681
};
ttypes.ProfileAttribute = {
  'EMAIL' : 1,
  'DISPLAY_NAME' : 2,
  'PHONETIC_NAME' : 4,
  'PICTURE' : 8,
  'STATUS_MESSAGE' : 16,
  'ALLOW_SEARCH_BY_USERID' : 32,
  'ALLOW_SEARCH_BY_EMAIL' : 64,
  'BUDDY_STATUS' : 128,
  'ALL' : 255
};
ttypes.PublicType = {
  'HIDDEN' : 0,
  'PUBLIC' : 1000
};
ttypes.RedirectType = {
  'NONE' : 0,
  'EXPIRE_SECOND' : 1
};
ttypes.RegistrationType = {
  'PHONE' : 0,
  'EMAIL_WAP' : 1,
  'FACEBOOK' : 2305,
  'SINA' : 2306,
  'RENREN' : 2307,
  'FEIXIN' : 2308
};
ttypes.SettingsAttribute = {
  'NOTIFICATION_ENABLE' : 1,
  'NOTIFICATION_MUTE_EXPIRATION' : 2,
  'NOTIFICATION_NEW_MESSAGE' : 4,
  'NOTIFICATION_GROUP_INVITATION' : 8,
  'NOTIFICATION_SHOW_MESSAGE' : 16,
  'NOTIFICATION_INCOMING_CALL' : 32,
  'PRIVACY_SYNC_CONTACTS' : 64,
  'PRIVACY_SEARCH_BY_PHONE_NUMBER' : 128,
  'NOTIFICATION_SOUND_MESSAGE' : 256,
  'NOTIFICATION_SOUND_GROUP' : 512,
  'CONTACT_MY_TICKET' : 1024,
  'IDENTITY_PROVIDER' : 2048,
  'IDENTITY_IDENTIFIER' : 4096,
  'PRIVACY_SEARCH_BY_USERID' : 8192,
  'PRIVACY_SEARCH_BY_EMAIL' : 16384,
  'PREFERENCE_LOCALE' : 32768,
  'NOTIFICATION_DISABLED_WITH_SUB' : 65536,
  'SNS_ACCOUNT' : 524288,
  'PHONE_REGISTRATION' : 1048576,
  'PRIVACY_ALLOW_SECONDARY_DEVICE_LOGIN' : 2097152,
  'CUSTOM_MODE' : 4194304,
  'PRIVACY_PROFILE_IMAGE_POST_TO_MYHOME' : 8388608,
  'EMAIL_CONFIRMATION_STATUS' : 16777216,
  'PRIVACY_RECV_MESSAGES_FROM_NOT_FRIEND' : 33554432,
  'ALL' : 2147483647
};
ttypes.SnsIdType = {
  'FACEBOOK' : 1,
  'SINA' : 2,
  'RENREN' : 3,
  'FEIXIN' : 4
};
ttypes.SpammerReason = {
  'OTHER' : 0,
  'ADVERTISING' : 1,
  'GENDER_HARASSMENT' : 2,
  'HARASSMENT' : 3
};
ttypes.SyncActionType = {
  'SYNC' : 0,
  'REPORT' : 1
};
ttypes.SyncCategory = {
  'PROFILE' : 0,
  'SETTINGS' : 1,
  'OPS' : 2,
  'CONTACT' : 3,
  'RECOMMEND' : 4,
  'BLOCK' : 5,
  'GROUP' : 6,
  'ROOM' : 7,
  'NOTIFICATION' : 8
};
ttypes.TMessageBoxStatus = {
  'ACTIVATED' : 1,
  'UNREAD' : 2
};
ttypes.UniversalNotificationServiceErrorCode = {
  'INTERNAL_ERROR' : 0,
  'INVALID_KEY' : 1,
  'ILLEGAL_ARGUMENT' : 2,
  'TOO_MANY_REQUEST' : 3,
  'AUTHENTICATION_FAILED' : 4,
  'NO_WRITE_PERMISSION' : 5
};
ttypes.UnregistrationReason = {
  'UNREGISTRATION_REASON_UNREGISTER_USER' : 1,
  'UNREGISTRATION_REASON_UNBIND_DEVICE' : 2
};
ttypes.UserAgeType = {
  'OVER' : 1,
  'UNDER' : 2,
  'UNDEFINED' : 3
};
ttypes.VerificationMethod = {
  'NO_AVAILABLE' : 0,
  'PIN_VIA_SMS' : 1,
  'CALLERID_INDIGO' : 2,
  'PIN_VIA_TTS' : 4,
  'SKIP' : 10
};
ttypes.VerificationResult = {
  'FAILED' : 0,
  'OK_NOT_REGISTERED_YET' : 1,
  'OK_REGISTERED_WITH_SAME_DEVICE' : 2,
  'OK_REGISTERED_WITH_ANOTHER_DEVICE' : 3
};
ttypes.WapInvitationType = {
  'REGISTRATION' : 1,
  'CHAT' : 2
};
var AgeCheckDocomoResult = module.exports.AgeCheckDocomoResult = function(args) {
  this.authUrl = null;
  this.userAgeType = null;
  if (args) {
    if (args.authUrl !== undefined && args.authUrl !== null) {
      this.authUrl = args.authUrl;
    }
    if (args.userAgeType !== undefined && args.userAgeType !== null) {
      this.userAgeType = args.userAgeType;
    }
  }
};
AgeCheckDocomoResult.prototype = {};
AgeCheckDocomoResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.userAgeType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgeCheckDocomoResult.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckDocomoResult');
  if (this.authUrl !== null && this.authUrl !== undefined) {
    output.writeFieldBegin('authUrl', Thrift.Type.STRING, 1);
    output.writeString(this.authUrl);
    output.writeFieldEnd();
  }
  if (this.userAgeType !== null && this.userAgeType !== undefined) {
    output.writeFieldBegin('userAgeType', Thrift.Type.I32, 2);
    output.writeI32(this.userAgeType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgeCheckRequestResult = module.exports.AgeCheckRequestResult = function(args) {
  this.authUrl = null;
  this.sessionId = null;
  if (args) {
    if (args.authUrl !== undefined && args.authUrl !== null) {
      this.authUrl = args.authUrl;
    }
    if (args.sessionId !== undefined && args.sessionId !== null) {
      this.sessionId = args.sessionId;
    }
  }
};
AgeCheckRequestResult.prototype = {};
AgeCheckRequestResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.sessionId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgeCheckRequestResult.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckRequestResult');
  if (this.authUrl !== null && this.authUrl !== undefined) {
    output.writeFieldBegin('authUrl', Thrift.Type.STRING, 1);
    output.writeString(this.authUrl);
    output.writeFieldEnd();
  }
  if (this.sessionId !== null && this.sessionId !== undefined) {
    output.writeFieldBegin('sessionId', Thrift.Type.STRING, 2);
    output.writeString(this.sessionId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Announcement = module.exports.Announcement = function(args) {
  this.index = null;
  this.forceUpdate = null;
  this.title = null;
  this.text = null;
  this.createdTime = null;
  this.pictureUrl = null;
  this.thumbnailUrl = null;
  if (args) {
    if (args.index !== undefined && args.index !== null) {
      this.index = args.index;
    }
    if (args.forceUpdate !== undefined && args.forceUpdate !== null) {
      this.forceUpdate = args.forceUpdate;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.pictureUrl !== undefined && args.pictureUrl !== null) {
      this.pictureUrl = args.pictureUrl;
    }
    if (args.thumbnailUrl !== undefined && args.thumbnailUrl !== null) {
      this.thumbnailUrl = args.thumbnailUrl;
    }
  }
};
Announcement.prototype = {};
Announcement.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.index = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.BOOL) {
        this.forceUpdate = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.STRING) {
        this.pictureUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.STRING) {
        this.thumbnailUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Announcement.prototype.write = function(output) {
  output.writeStructBegin('Announcement');
  if (this.index !== null && this.index !== undefined) {
    output.writeFieldBegin('index', Thrift.Type.I32, 1);
    output.writeI32(this.index);
    output.writeFieldEnd();
  }
  if (this.forceUpdate !== null && this.forceUpdate !== undefined) {
    output.writeFieldBegin('forceUpdate', Thrift.Type.BOOL, 10);
    output.writeBool(this.forceUpdate);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 11);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 12);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 13);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.pictureUrl !== null && this.pictureUrl !== undefined) {
    output.writeFieldBegin('pictureUrl', Thrift.Type.STRING, 14);
    output.writeString(this.pictureUrl);
    output.writeFieldEnd();
  }
  if (this.thumbnailUrl !== null && this.thumbnailUrl !== undefined) {
    output.writeFieldBegin('thumbnailUrl', Thrift.Type.STRING, 15);
    output.writeString(this.thumbnailUrl);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelProvider = module.exports.ChannelProvider = function(args) {
  this.name = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
  }
};
ChannelProvider.prototype = {};
ChannelProvider.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelProvider.prototype.write = function(output) {
  output.writeStructBegin('ChannelProvider');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelInfo = module.exports.ChannelInfo = function(args) {
  this.channelId = null;
  this.name = null;
  this.entryPageUrl = null;
  this.descriptionText = null;
  this.provider = null;
  this.publicType = null;
  this.iconImage = null;
  this.permissions = null;
  this.iconThumbnailImage = null;
  this.channelConfigurations = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.entryPageUrl !== undefined && args.entryPageUrl !== null) {
      this.entryPageUrl = args.entryPageUrl;
    }
    if (args.descriptionText !== undefined && args.descriptionText !== null) {
      this.descriptionText = args.descriptionText;
    }
    if (args.provider !== undefined && args.provider !== null) {
      this.provider = new ttypes.ChannelProvider(args.provider);
    }
    if (args.publicType !== undefined && args.publicType !== null) {
      this.publicType = args.publicType;
    }
    if (args.iconImage !== undefined && args.iconImage !== null) {
      this.iconImage = args.iconImage;
    }
    if (args.permissions !== undefined && args.permissions !== null) {
      this.permissions = Thrift.copyList(args.permissions, [null]);
    }
    if (args.iconThumbnailImage !== undefined && args.iconThumbnailImage !== null) {
      this.iconThumbnailImage = args.iconThumbnailImage;
    }
    if (args.channelConfigurations !== undefined && args.channelConfigurations !== null) {
      this.channelConfigurations = Thrift.copyList(args.channelConfigurations, [null]);
    }
  }
};
ChannelInfo.prototype = {};
ChannelInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.entryPageUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.descriptionText = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.provider = new ttypes.ChannelProvider();
        this.provider.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.publicType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.iconImage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.permissions = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.permissions.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.iconThumbnailImage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.LIST) {
        var _size7 = 0;
        var _rtmp311;
        this.channelConfigurations = [];
        var _etype10 = 0;
        _rtmp311 = input.readListBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = input.readI32();
          this.channelConfigurations.push(elem13);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelInfo.prototype.write = function(output) {
  output.writeStructBegin('ChannelInfo');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 3);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.entryPageUrl !== null && this.entryPageUrl !== undefined) {
    output.writeFieldBegin('entryPageUrl', Thrift.Type.STRING, 4);
    output.writeString(this.entryPageUrl);
    output.writeFieldEnd();
  }
  if (this.descriptionText !== null && this.descriptionText !== undefined) {
    output.writeFieldBegin('descriptionText', Thrift.Type.STRING, 5);
    output.writeString(this.descriptionText);
    output.writeFieldEnd();
  }
  if (this.provider !== null && this.provider !== undefined) {
    output.writeFieldBegin('provider', Thrift.Type.STRUCT, 6);
    this.provider.write(output);
    output.writeFieldEnd();
  }
  if (this.publicType !== null && this.publicType !== undefined) {
    output.writeFieldBegin('publicType', Thrift.Type.I32, 7);
    output.writeI32(this.publicType);
    output.writeFieldEnd();
  }
  if (this.iconImage !== null && this.iconImage !== undefined) {
    output.writeFieldBegin('iconImage', Thrift.Type.STRING, 8);
    output.writeString(this.iconImage);
    output.writeFieldEnd();
  }
  if (this.permissions !== null && this.permissions !== undefined) {
    output.writeFieldBegin('permissions', Thrift.Type.LIST, 9);
    output.writeListBegin(Thrift.Type.STRING, this.permissions.length);
    for (var iter14 in this.permissions)
    {
      if (this.permissions.hasOwnProperty(iter14))
      {
        iter14 = this.permissions[iter14];
        output.writeString(iter14);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.iconThumbnailImage !== null && this.iconThumbnailImage !== undefined) {
    output.writeFieldBegin('iconThumbnailImage', Thrift.Type.STRING, 11);
    output.writeString(this.iconThumbnailImage);
    output.writeFieldEnd();
  }
  if (this.channelConfigurations !== null && this.channelConfigurations !== undefined) {
    output.writeFieldBegin('channelConfigurations', Thrift.Type.LIST, 12);
    output.writeListBegin(Thrift.Type.I32, this.channelConfigurations.length);
    for (var iter15 in this.channelConfigurations)
    {
      if (this.channelConfigurations.hasOwnProperty(iter15))
      {
        iter15 = this.channelConfigurations[iter15];
        output.writeI32(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ApprovedChannelInfo = module.exports.ApprovedChannelInfo = function(args) {
  this.channelInfo = null;
  this.approvedAt = null;
  if (args) {
    if (args.channelInfo !== undefined && args.channelInfo !== null) {
      this.channelInfo = new ttypes.ChannelInfo(args.channelInfo);
    }
    if (args.approvedAt !== undefined && args.approvedAt !== null) {
      this.approvedAt = args.approvedAt;
    }
  }
};
ApprovedChannelInfo.prototype = {};
ApprovedChannelInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.channelInfo = new ttypes.ChannelInfo();
        this.channelInfo.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.approvedAt = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ApprovedChannelInfo.prototype.write = function(output) {
  output.writeStructBegin('ApprovedChannelInfo');
  if (this.channelInfo !== null && this.channelInfo !== undefined) {
    output.writeFieldBegin('channelInfo', Thrift.Type.STRUCT, 1);
    this.channelInfo.write(output);
    output.writeFieldEnd();
  }
  if (this.approvedAt !== null && this.approvedAt !== undefined) {
    output.writeFieldBegin('approvedAt', Thrift.Type.I64, 2);
    output.writeI64(this.approvedAt);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ApprovedChannelInfos = module.exports.ApprovedChannelInfos = function(args) {
  this.approvedChannelInfos = null;
  this.revision = null;
  if (args) {
    if (args.approvedChannelInfos !== undefined && args.approvedChannelInfos !== null) {
      this.approvedChannelInfos = Thrift.copyList(args.approvedChannelInfos, [ttypes.ApprovedChannelInfo]);
    }
    if (args.revision !== undefined && args.revision !== null) {
      this.revision = args.revision;
    }
  }
};
ApprovedChannelInfos.prototype = {};
ApprovedChannelInfos.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.approvedChannelInfos = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.ApprovedChannelInfo();
          elem22.read(input);
          this.approvedChannelInfos.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.revision = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ApprovedChannelInfos.prototype.write = function(output) {
  output.writeStructBegin('ApprovedChannelInfos');
  if (this.approvedChannelInfos !== null && this.approvedChannelInfos !== undefined) {
    output.writeFieldBegin('approvedChannelInfos', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.approvedChannelInfos.length);
    for (var iter23 in this.approvedChannelInfos)
    {
      if (this.approvedChannelInfos.hasOwnProperty(iter23))
      {
        iter23 = this.approvedChannelInfos[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.revision !== null && this.revision !== undefined) {
    output.writeFieldBegin('revision', Thrift.Type.I64, 2);
    output.writeI64(this.revision);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthQrcode = module.exports.AuthQrcode = function(args) {
  this.qrcode = null;
  this.verifier = null;
  if (args) {
    if (args.qrcode !== undefined && args.qrcode !== null) {
      this.qrcode = args.qrcode;
    }
    if (args.verifier !== undefined && args.verifier !== null) {
      this.verifier = args.verifier;
    }
  }
};
AuthQrcode.prototype = {};
AuthQrcode.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.qrcode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.verifier = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthQrcode.prototype.write = function(output) {
  output.writeStructBegin('AuthQrcode');
  if (this.qrcode !== null && this.qrcode !== undefined) {
    output.writeFieldBegin('qrcode', Thrift.Type.STRING, 1);
    output.writeString(this.qrcode);
    output.writeFieldEnd();
  }
  if (this.verifier !== null && this.verifier !== undefined) {
    output.writeFieldBegin('verifier', Thrift.Type.STRING, 2);
    output.writeString(this.verifier);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyBanner = module.exports.BuddyBanner = function(args) {
  this.buddyBannerLinkType = null;
  this.buddyBannerLink = null;
  this.buddyBannerImageUrl = null;
  if (args) {
    if (args.buddyBannerLinkType !== undefined && args.buddyBannerLinkType !== null) {
      this.buddyBannerLinkType = args.buddyBannerLinkType;
    }
    if (args.buddyBannerLink !== undefined && args.buddyBannerLink !== null) {
      this.buddyBannerLink = args.buddyBannerLink;
    }
    if (args.buddyBannerImageUrl !== undefined && args.buddyBannerImageUrl !== null) {
      this.buddyBannerImageUrl = args.buddyBannerImageUrl;
    }
  }
};
BuddyBanner.prototype = {};
BuddyBanner.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.buddyBannerLinkType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.buddyBannerLink = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.buddyBannerImageUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyBanner.prototype.write = function(output) {
  output.writeStructBegin('BuddyBanner');
  if (this.buddyBannerLinkType !== null && this.buddyBannerLinkType !== undefined) {
    output.writeFieldBegin('buddyBannerLinkType', Thrift.Type.I32, 1);
    output.writeI32(this.buddyBannerLinkType);
    output.writeFieldEnd();
  }
  if (this.buddyBannerLink !== null && this.buddyBannerLink !== undefined) {
    output.writeFieldBegin('buddyBannerLink', Thrift.Type.STRING, 2);
    output.writeString(this.buddyBannerLink);
    output.writeFieldEnd();
  }
  if (this.buddyBannerImageUrl !== null && this.buddyBannerImageUrl !== undefined) {
    output.writeFieldBegin('buddyBannerImageUrl', Thrift.Type.STRING, 3);
    output.writeString(this.buddyBannerImageUrl);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyDetail = module.exports.BuddyDetail = function(args) {
  this.mid = null;
  this.memberCount = null;
  this.onAir = null;
  this.businessAccount = null;
  this.addable = null;
  this.acceptableContentTypes = null;
  this.capableMyhome = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.memberCount !== undefined && args.memberCount !== null) {
      this.memberCount = args.memberCount;
    }
    if (args.onAir !== undefined && args.onAir !== null) {
      this.onAir = args.onAir;
    }
    if (args.businessAccount !== undefined && args.businessAccount !== null) {
      this.businessAccount = args.businessAccount;
    }
    if (args.addable !== undefined && args.addable !== null) {
      this.addable = args.addable;
    }
    if (args.acceptableContentTypes !== undefined && args.acceptableContentTypes !== null) {
      this.acceptableContentTypes = Thrift.copyList(args.acceptableContentTypes, [null]);
    }
    if (args.capableMyhome !== undefined && args.capableMyhome !== null) {
      this.capableMyhome = args.capableMyhome;
    }
  }
};
BuddyDetail.prototype = {};
BuddyDetail.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.memberCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.onAir = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.businessAccount = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.addable = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.SET) {
        var _size24 = 0;
        var _rtmp328;
        this.acceptableContentTypes = [];
        var _etype27 = 0;
        _rtmp328 = input.readSetBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = input.readI32();
          this.acceptableContentTypes.push(elem30);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.BOOL) {
        this.capableMyhome = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyDetail.prototype.write = function(output) {
  output.writeStructBegin('BuddyDetail');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.memberCount !== null && this.memberCount !== undefined) {
    output.writeFieldBegin('memberCount', Thrift.Type.I64, 2);
    output.writeI64(this.memberCount);
    output.writeFieldEnd();
  }
  if (this.onAir !== null && this.onAir !== undefined) {
    output.writeFieldBegin('onAir', Thrift.Type.BOOL, 3);
    output.writeBool(this.onAir);
    output.writeFieldEnd();
  }
  if (this.businessAccount !== null && this.businessAccount !== undefined) {
    output.writeFieldBegin('businessAccount', Thrift.Type.BOOL, 4);
    output.writeBool(this.businessAccount);
    output.writeFieldEnd();
  }
  if (this.addable !== null && this.addable !== undefined) {
    output.writeFieldBegin('addable', Thrift.Type.BOOL, 5);
    output.writeBool(this.addable);
    output.writeFieldEnd();
  }
  if (this.acceptableContentTypes !== null && this.acceptableContentTypes !== undefined) {
    output.writeFieldBegin('acceptableContentTypes', Thrift.Type.SET, 6);
    output.writeSetBegin(Thrift.Type.I32, this.acceptableContentTypes.length);
    for (var iter31 in this.acceptableContentTypes)
    {
      if (this.acceptableContentTypes.hasOwnProperty(iter31))
      {
        iter31 = this.acceptableContentTypes[iter31];
        output.writeI32(iter31);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.capableMyhome !== null && this.capableMyhome !== undefined) {
    output.writeFieldBegin('capableMyhome', Thrift.Type.BOOL, 7);
    output.writeBool(this.capableMyhome);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Contact = module.exports.Contact = function(args) {
  this.mid = null;
  this.createdTime = null;
  this.type = null;
  this.status = null;
  this.relation = null;
  this.displayName = null;
  this.phoneticName = null;
  this.pictureStatus = null;
  this.thumbnailUrl = null;
  this.statusMessage = null;
  this.displayNameOverridden = null;
  this.favoriteTime = null;
  this.capableVoiceCall = null;
  this.capableVideoCall = null;
  this.capableMyhome = null;
  this.capableBuddy = null;
  this.attributes = null;
  this.settings = null;
  this.picturePath = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.relation !== undefined && args.relation !== null) {
      this.relation = args.relation;
    }
    if (args.displayName !== undefined && args.displayName !== null) {
      this.displayName = args.displayName;
    }
    if (args.phoneticName !== undefined && args.phoneticName !== null) {
      this.phoneticName = args.phoneticName;
    }
    if (args.pictureStatus !== undefined && args.pictureStatus !== null) {
      this.pictureStatus = args.pictureStatus;
    }
    if (args.thumbnailUrl !== undefined && args.thumbnailUrl !== null) {
      this.thumbnailUrl = args.thumbnailUrl;
    }
    if (args.statusMessage !== undefined && args.statusMessage !== null) {
      this.statusMessage = args.statusMessage;
    }
    if (args.displayNameOverridden !== undefined && args.displayNameOverridden !== null) {
      this.displayNameOverridden = args.displayNameOverridden;
    }
    if (args.favoriteTime !== undefined && args.favoriteTime !== null) {
      this.favoriteTime = args.favoriteTime;
    }
    if (args.capableVoiceCall !== undefined && args.capableVoiceCall !== null) {
      this.capableVoiceCall = args.capableVoiceCall;
    }
    if (args.capableVideoCall !== undefined && args.capableVideoCall !== null) {
      this.capableVideoCall = args.capableVideoCall;
    }
    if (args.capableMyhome !== undefined && args.capableMyhome !== null) {
      this.capableMyhome = args.capableMyhome;
    }
    if (args.capableBuddy !== undefined && args.capableBuddy !== null) {
      this.capableBuddy = args.capableBuddy;
    }
    if (args.attributes !== undefined && args.attributes !== null) {
      this.attributes = args.attributes;
    }
    if (args.settings !== undefined && args.settings !== null) {
      this.settings = args.settings;
    }
    if (args.picturePath !== undefined && args.picturePath !== null) {
      this.picturePath = args.picturePath;
    }
  }
};
Contact.prototype = {};
Contact.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.I32) {
        this.relation = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.displayName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 23:
      if (ftype == Thrift.Type.STRING) {
        this.phoneticName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 24:
      if (ftype == Thrift.Type.STRING) {
        this.pictureStatus = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 25:
      if (ftype == Thrift.Type.STRING) {
        this.thumbnailUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 26:
      if (ftype == Thrift.Type.STRING) {
        this.statusMessage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 27:
      if (ftype == Thrift.Type.STRING) {
        this.displayNameOverridden = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 28:
      if (ftype == Thrift.Type.I64) {
        this.favoriteTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 31:
      if (ftype == Thrift.Type.BOOL) {
        this.capableVoiceCall = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 32:
      if (ftype == Thrift.Type.BOOL) {
        this.capableVideoCall = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 33:
      if (ftype == Thrift.Type.BOOL) {
        this.capableMyhome = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 34:
      if (ftype == Thrift.Type.BOOL) {
        this.capableBuddy = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 35:
      if (ftype == Thrift.Type.I32) {
        this.attributes = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 36:
      if (ftype == Thrift.Type.I64) {
        this.settings = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 37:
      if (ftype == Thrift.Type.STRING) {
        this.picturePath = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Contact.prototype.write = function(output) {
  output.writeStructBegin('Contact');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 2);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 10);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 11);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.relation !== null && this.relation !== undefined) {
    output.writeFieldBegin('relation', Thrift.Type.I32, 21);
    output.writeI32(this.relation);
    output.writeFieldEnd();
  }
  if (this.displayName !== null && this.displayName !== undefined) {
    output.writeFieldBegin('displayName', Thrift.Type.STRING, 22);
    output.writeString(this.displayName);
    output.writeFieldEnd();
  }
  if (this.phoneticName !== null && this.phoneticName !== undefined) {
    output.writeFieldBegin('phoneticName', Thrift.Type.STRING, 23);
    output.writeString(this.phoneticName);
    output.writeFieldEnd();
  }
  if (this.pictureStatus !== null && this.pictureStatus !== undefined) {
    output.writeFieldBegin('pictureStatus', Thrift.Type.STRING, 24);
    output.writeString(this.pictureStatus);
    output.writeFieldEnd();
  }
  if (this.thumbnailUrl !== null && this.thumbnailUrl !== undefined) {
    output.writeFieldBegin('thumbnailUrl', Thrift.Type.STRING, 25);
    output.writeString(this.thumbnailUrl);
    output.writeFieldEnd();
  }
  if (this.statusMessage !== null && this.statusMessage !== undefined) {
    output.writeFieldBegin('statusMessage', Thrift.Type.STRING, 26);
    output.writeString(this.statusMessage);
    output.writeFieldEnd();
  }
  if (this.displayNameOverridden !== null && this.displayNameOverridden !== undefined) {
    output.writeFieldBegin('displayNameOverridden', Thrift.Type.STRING, 27);
    output.writeString(this.displayNameOverridden);
    output.writeFieldEnd();
  }
  if (this.favoriteTime !== null && this.favoriteTime !== undefined) {
    output.writeFieldBegin('favoriteTime', Thrift.Type.I64, 28);
    output.writeI64(this.favoriteTime);
    output.writeFieldEnd();
  }
  if (this.capableVoiceCall !== null && this.capableVoiceCall !== undefined) {
    output.writeFieldBegin('capableVoiceCall', Thrift.Type.BOOL, 31);
    output.writeBool(this.capableVoiceCall);
    output.writeFieldEnd();
  }
  if (this.capableVideoCall !== null && this.capableVideoCall !== undefined) {
    output.writeFieldBegin('capableVideoCall', Thrift.Type.BOOL, 32);
    output.writeBool(this.capableVideoCall);
    output.writeFieldEnd();
  }
  if (this.capableMyhome !== null && this.capableMyhome !== undefined) {
    output.writeFieldBegin('capableMyhome', Thrift.Type.BOOL, 33);
    output.writeBool(this.capableMyhome);
    output.writeFieldEnd();
  }
  if (this.capableBuddy !== null && this.capableBuddy !== undefined) {
    output.writeFieldBegin('capableBuddy', Thrift.Type.BOOL, 34);
    output.writeBool(this.capableBuddy);
    output.writeFieldEnd();
  }
  if (this.attributes !== null && this.attributes !== undefined) {
    output.writeFieldBegin('attributes', Thrift.Type.I32, 35);
    output.writeI32(this.attributes);
    output.writeFieldEnd();
  }
  if (this.settings !== null && this.settings !== undefined) {
    output.writeFieldBegin('settings', Thrift.Type.I64, 36);
    output.writeI64(this.settings);
    output.writeFieldEnd();
  }
  if (this.picturePath !== null && this.picturePath !== undefined) {
    output.writeFieldBegin('picturePath', Thrift.Type.STRING, 37);
    output.writeString(this.picturePath);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyList = module.exports.BuddyList = function(args) {
  this.classification = null;
  this.displayName = null;
  this.totalBuddyCount = null;
  this.popularContacts = null;
  if (args) {
    if (args.classification !== undefined && args.classification !== null) {
      this.classification = args.classification;
    }
    if (args.displayName !== undefined && args.displayName !== null) {
      this.displayName = args.displayName;
    }
    if (args.totalBuddyCount !== undefined && args.totalBuddyCount !== null) {
      this.totalBuddyCount = args.totalBuddyCount;
    }
    if (args.popularContacts !== undefined && args.popularContacts !== null) {
      this.popularContacts = Thrift.copyList(args.popularContacts, [ttypes.Contact]);
    }
  }
};
BuddyList.prototype = {};
BuddyList.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.classification = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.displayName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.totalBuddyCount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size32 = 0;
        var _rtmp336;
        this.popularContacts = [];
        var _etype35 = 0;
        _rtmp336 = input.readListBegin();
        _etype35 = _rtmp336.etype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var elem38 = null;
          elem38 = new ttypes.Contact();
          elem38.read(input);
          this.popularContacts.push(elem38);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyList.prototype.write = function(output) {
  output.writeStructBegin('BuddyList');
  if (this.classification !== null && this.classification !== undefined) {
    output.writeFieldBegin('classification', Thrift.Type.STRING, 1);
    output.writeString(this.classification);
    output.writeFieldEnd();
  }
  if (this.displayName !== null && this.displayName !== undefined) {
    output.writeFieldBegin('displayName', Thrift.Type.STRING, 2);
    output.writeString(this.displayName);
    output.writeFieldEnd();
  }
  if (this.totalBuddyCount !== null && this.totalBuddyCount !== undefined) {
    output.writeFieldBegin('totalBuddyCount', Thrift.Type.I32, 3);
    output.writeI32(this.totalBuddyCount);
    output.writeFieldEnd();
  }
  if (this.popularContacts !== null && this.popularContacts !== undefined) {
    output.writeFieldBegin('popularContacts', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.popularContacts.length);
    for (var iter39 in this.popularContacts)
    {
      if (this.popularContacts.hasOwnProperty(iter39))
      {
        iter39 = this.popularContacts[iter39];
        iter39.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Location = module.exports.Location = function(args) {
  this.title = null;
  this.address = null;
  this.latitude = null;
  this.longitude = null;
  this.phone = null;
  if (args) {
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.latitude !== undefined && args.latitude !== null) {
      this.latitude = args.latitude;
    }
    if (args.longitude !== undefined && args.longitude !== null) {
      this.longitude = args.longitude;
    }
    if (args.phone !== undefined && args.phone !== null) {
      this.phone = args.phone;
    }
  }
};
Location.prototype = {};
Location.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.address = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.latitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.longitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.phone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Location.prototype.write = function(output) {
  output.writeStructBegin('Location');
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 1);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 2);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.latitude !== null && this.latitude !== undefined) {
    output.writeFieldBegin('latitude', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.latitude);
    output.writeFieldEnd();
  }
  if (this.longitude !== null && this.longitude !== undefined) {
    output.writeFieldBegin('longitude', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.longitude);
    output.writeFieldEnd();
  }
  if (this.phone !== null && this.phone !== undefined) {
    output.writeFieldBegin('phone', Thrift.Type.STRING, 5);
    output.writeString(this.phone);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyMessageRequest = module.exports.BuddyMessageRequest = function(args) {
  this.contentType = null;
  this.text = null;
  this.location = null;
  this.content = null;
  this.contentMetadata = null;
  if (args) {
    if (args.contentType !== undefined && args.contentType !== null) {
      this.contentType = args.contentType;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
    if (args.location !== undefined && args.location !== null) {
      this.location = new ttypes.Location(args.location);
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    }
    if (args.contentMetadata !== undefined && args.contentMetadata !== null) {
      this.contentMetadata = Thrift.copyMap(args.contentMetadata, [null]);
    }
  }
};
BuddyMessageRequest.prototype = {};
BuddyMessageRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.contentType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.location = new ttypes.Location();
        this.location.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.MAP) {
        var _size40 = 0;
        var _rtmp344;
        this.contentMetadata = {};
        var _ktype41 = 0;
        var _vtype42 = 0;
        _rtmp344 = input.readMapBegin();
        _ktype41 = _rtmp344.ktype;
        _vtype42 = _rtmp344.vtype;
        _size40 = _rtmp344.size;
        for (var _i45 = 0; _i45 < _size40; ++_i45)
        {
          var key46 = null;
          var val47 = null;
          key46 = input.readString();
          val47 = input.readString();
          this.contentMetadata[key46] = val47;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyMessageRequest.prototype.write = function(output) {
  output.writeStructBegin('BuddyMessageRequest');
  if (this.contentType !== null && this.contentType !== undefined) {
    output.writeFieldBegin('contentType', Thrift.Type.I32, 1);
    output.writeI32(this.contentType);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 2);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  if (this.location !== null && this.location !== undefined) {
    output.writeFieldBegin('location', Thrift.Type.STRUCT, 3);
    this.location.write(output);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 4);
    output.writeBinary(this.content);
    output.writeFieldEnd();
  }
  if (this.contentMetadata !== null && this.contentMetadata !== undefined) {
    output.writeFieldBegin('contentMetadata', Thrift.Type.MAP, 5);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.contentMetadata));
    for (var kiter48 in this.contentMetadata)
    {
      if (this.contentMetadata.hasOwnProperty(kiter48))
      {
        var viter49 = this.contentMetadata[kiter48];
        output.writeString(kiter48);
        output.writeString(viter49);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyOnAirUrls = module.exports.BuddyOnAirUrls = function(args) {
  this.hls = null;
  this.smoothStreaming = null;
  if (args) {
    if (args.hls !== undefined && args.hls !== null) {
      this.hls = Thrift.copyMap(args.hls, [null]);
    }
    if (args.smoothStreaming !== undefined && args.smoothStreaming !== null) {
      this.smoothStreaming = Thrift.copyMap(args.smoothStreaming, [null]);
    }
  }
};
BuddyOnAirUrls.prototype = {};
BuddyOnAirUrls.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.MAP) {
        var _size50 = 0;
        var _rtmp354;
        this.hls = {};
        var _ktype51 = 0;
        var _vtype52 = 0;
        _rtmp354 = input.readMapBegin();
        _ktype51 = _rtmp354.ktype;
        _vtype52 = _rtmp354.vtype;
        _size50 = _rtmp354.size;
        for (var _i55 = 0; _i55 < _size50; ++_i55)
        {
          var key56 = null;
          var val57 = null;
          key56 = input.readString();
          val57 = input.readString();
          this.hls[key56] = val57;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size58 = 0;
        var _rtmp362;
        this.smoothStreaming = {};
        var _ktype59 = 0;
        var _vtype60 = 0;
        _rtmp362 = input.readMapBegin();
        _ktype59 = _rtmp362.ktype;
        _vtype60 = _rtmp362.vtype;
        _size58 = _rtmp362.size;
        for (var _i63 = 0; _i63 < _size58; ++_i63)
        {
          var key64 = null;
          var val65 = null;
          key64 = input.readString();
          val65 = input.readString();
          this.smoothStreaming[key64] = val65;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyOnAirUrls.prototype.write = function(output) {
  output.writeStructBegin('BuddyOnAirUrls');
  if (this.hls !== null && this.hls !== undefined) {
    output.writeFieldBegin('hls', Thrift.Type.MAP, 1);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.hls));
    for (var kiter66 in this.hls)
    {
      if (this.hls.hasOwnProperty(kiter66))
      {
        var viter67 = this.hls[kiter66];
        output.writeString(kiter66);
        output.writeString(viter67);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.smoothStreaming !== null && this.smoothStreaming !== undefined) {
    output.writeFieldBegin('smoothStreaming', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.smoothStreaming));
    for (var kiter68 in this.smoothStreaming)
    {
      if (this.smoothStreaming.hasOwnProperty(kiter68))
      {
        var viter69 = this.smoothStreaming[kiter68];
        output.writeString(kiter68);
        output.writeString(viter69);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyOnAir = module.exports.BuddyOnAir = function(args) {
  this.mid = null;
  this.freshnessLifetime = null;
  this.onAirId = null;
  this.onAir = null;
  this.text = null;
  this.viewerCount = null;
  this.targetCount = null;
  this.onAirType = null;
  this.onAirUrls = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.freshnessLifetime !== undefined && args.freshnessLifetime !== null) {
      this.freshnessLifetime = args.freshnessLifetime;
    }
    if (args.onAirId !== undefined && args.onAirId !== null) {
      this.onAirId = args.onAirId;
    }
    if (args.onAir !== undefined && args.onAir !== null) {
      this.onAir = args.onAir;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
    if (args.viewerCount !== undefined && args.viewerCount !== null) {
      this.viewerCount = args.viewerCount;
    }
    if (args.targetCount !== undefined && args.targetCount !== null) {
      this.targetCount = args.targetCount;
    }
    if (args.onAirType !== undefined && args.onAirType !== null) {
      this.onAirType = args.onAirType;
    }
    if (args.onAirUrls !== undefined && args.onAirUrls !== null) {
      this.onAirUrls = new ttypes.BuddyOnAirUrls(args.onAirUrls);
    }
  }
};
BuddyOnAir.prototype = {};
BuddyOnAir.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.freshnessLifetime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.onAirId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.onAir = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.viewerCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I64) {
        this.targetCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 31:
      if (ftype == Thrift.Type.I32) {
        this.onAirType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 32:
      if (ftype == Thrift.Type.STRUCT) {
        this.onAirUrls = new ttypes.BuddyOnAirUrls();
        this.onAirUrls.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyOnAir.prototype.write = function(output) {
  output.writeStructBegin('BuddyOnAir');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.freshnessLifetime !== null && this.freshnessLifetime !== undefined) {
    output.writeFieldBegin('freshnessLifetime', Thrift.Type.I64, 3);
    output.writeI64(this.freshnessLifetime);
    output.writeFieldEnd();
  }
  if (this.onAirId !== null && this.onAirId !== undefined) {
    output.writeFieldBegin('onAirId', Thrift.Type.STRING, 4);
    output.writeString(this.onAirId);
    output.writeFieldEnd();
  }
  if (this.onAir !== null && this.onAir !== undefined) {
    output.writeFieldBegin('onAir', Thrift.Type.BOOL, 5);
    output.writeBool(this.onAir);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 11);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  if (this.viewerCount !== null && this.viewerCount !== undefined) {
    output.writeFieldBegin('viewerCount', Thrift.Type.I64, 12);
    output.writeI64(this.viewerCount);
    output.writeFieldEnd();
  }
  if (this.targetCount !== null && this.targetCount !== undefined) {
    output.writeFieldBegin('targetCount', Thrift.Type.I64, 13);
    output.writeI64(this.targetCount);
    output.writeFieldEnd();
  }
  if (this.onAirType !== null && this.onAirType !== undefined) {
    output.writeFieldBegin('onAirType', Thrift.Type.I32, 31);
    output.writeI32(this.onAirType);
    output.writeFieldEnd();
  }
  if (this.onAirUrls !== null && this.onAirUrls !== undefined) {
    output.writeFieldBegin('onAirUrls', Thrift.Type.STRUCT, 32);
    this.onAirUrls.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyProfile = module.exports.BuddyProfile = function(args) {
  this.buddyId = null;
  this.mid = null;
  this.searchId = null;
  this.displayName = null;
  this.statusMessage = null;
  this.contactCount = null;
  if (args) {
    if (args.buddyId !== undefined && args.buddyId !== null) {
      this.buddyId = args.buddyId;
    }
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.searchId !== undefined && args.searchId !== null) {
      this.searchId = args.searchId;
    }
    if (args.displayName !== undefined && args.displayName !== null) {
      this.displayName = args.displayName;
    }
    if (args.statusMessage !== undefined && args.statusMessage !== null) {
      this.statusMessage = args.statusMessage;
    }
    if (args.contactCount !== undefined && args.contactCount !== null) {
      this.contactCount = args.contactCount;
    }
  }
};
BuddyProfile.prototype = {};
BuddyProfile.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.buddyId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.searchId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.displayName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.statusMessage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.contactCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyProfile.prototype.write = function(output) {
  output.writeStructBegin('BuddyProfile');
  if (this.buddyId !== null && this.buddyId !== undefined) {
    output.writeFieldBegin('buddyId', Thrift.Type.STRING, 1);
    output.writeString(this.buddyId);
    output.writeFieldEnd();
  }
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 2);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.searchId !== null && this.searchId !== undefined) {
    output.writeFieldBegin('searchId', Thrift.Type.STRING, 3);
    output.writeString(this.searchId);
    output.writeFieldEnd();
  }
  if (this.displayName !== null && this.displayName !== undefined) {
    output.writeFieldBegin('displayName', Thrift.Type.STRING, 4);
    output.writeString(this.displayName);
    output.writeFieldEnd();
  }
  if (this.statusMessage !== null && this.statusMessage !== undefined) {
    output.writeFieldBegin('statusMessage', Thrift.Type.STRING, 5);
    output.writeString(this.statusMessage);
    output.writeFieldEnd();
  }
  if (this.contactCount !== null && this.contactCount !== undefined) {
    output.writeFieldBegin('contactCount', Thrift.Type.I64, 11);
    output.writeI64(this.contactCount);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddySearchResult = module.exports.BuddySearchResult = function(args) {
  this.mid = null;
  this.displayName = null;
  this.pictureStatus = null;
  this.picturePath = null;
  this.statusMessage = null;
  this.businessAccount = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.displayName !== undefined && args.displayName !== null) {
      this.displayName = args.displayName;
    }
    if (args.pictureStatus !== undefined && args.pictureStatus !== null) {
      this.pictureStatus = args.pictureStatus;
    }
    if (args.picturePath !== undefined && args.picturePath !== null) {
      this.picturePath = args.picturePath;
    }
    if (args.statusMessage !== undefined && args.statusMessage !== null) {
      this.statusMessage = args.statusMessage;
    }
    if (args.businessAccount !== undefined && args.businessAccount !== null) {
      this.businessAccount = args.businessAccount;
    }
  }
};
BuddySearchResult.prototype = {};
BuddySearchResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.displayName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.pictureStatus = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.picturePath = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.statusMessage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BOOL) {
        this.businessAccount = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddySearchResult.prototype.write = function(output) {
  output.writeStructBegin('BuddySearchResult');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.displayName !== null && this.displayName !== undefined) {
    output.writeFieldBegin('displayName', Thrift.Type.STRING, 2);
    output.writeString(this.displayName);
    output.writeFieldEnd();
  }
  if (this.pictureStatus !== null && this.pictureStatus !== undefined) {
    output.writeFieldBegin('pictureStatus', Thrift.Type.STRING, 3);
    output.writeString(this.pictureStatus);
    output.writeFieldEnd();
  }
  if (this.picturePath !== null && this.picturePath !== undefined) {
    output.writeFieldBegin('picturePath', Thrift.Type.STRING, 4);
    output.writeString(this.picturePath);
    output.writeFieldEnd();
  }
  if (this.statusMessage !== null && this.statusMessage !== undefined) {
    output.writeFieldBegin('statusMessage', Thrift.Type.STRING, 5);
    output.writeString(this.statusMessage);
    output.writeFieldEnd();
  }
  if (this.businessAccount !== null && this.businessAccount !== undefined) {
    output.writeFieldBegin('businessAccount', Thrift.Type.BOOL, 6);
    output.writeBool(this.businessAccount);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelDomain = module.exports.ChannelDomain = function(args) {
  this.host = null;
  this.removed = null;
  if (args) {
    if (args.host !== undefined && args.host !== null) {
      this.host = args.host;
    }
    if (args.removed !== undefined && args.removed !== null) {
      this.removed = args.removed;
    }
  }
};
ChannelDomain.prototype = {};
ChannelDomain.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.host = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.removed = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelDomain.prototype.write = function(output) {
  output.writeStructBegin('ChannelDomain');
  if (this.host !== null && this.host !== undefined) {
    output.writeFieldBegin('host', Thrift.Type.STRING, 1);
    output.writeString(this.host);
    output.writeFieldEnd();
  }
  if (this.removed !== null && this.removed !== undefined) {
    output.writeFieldBegin('removed', Thrift.Type.BOOL, 2);
    output.writeBool(this.removed);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelDomains = module.exports.ChannelDomains = function(args) {
  this.channelDomains = null;
  this.revision = null;
  if (args) {
    if (args.channelDomains !== undefined && args.channelDomains !== null) {
      this.channelDomains = Thrift.copyList(args.channelDomains, [ttypes.ChannelDomain]);
    }
    if (args.revision !== undefined && args.revision !== null) {
      this.revision = args.revision;
    }
  }
};
ChannelDomains.prototype = {};
ChannelDomains.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size70 = 0;
        var _rtmp374;
        this.channelDomains = [];
        var _etype73 = 0;
        _rtmp374 = input.readListBegin();
        _etype73 = _rtmp374.etype;
        _size70 = _rtmp374.size;
        for (var _i75 = 0; _i75 < _size70; ++_i75)
        {
          var elem76 = null;
          elem76 = new ttypes.ChannelDomain();
          elem76.read(input);
          this.channelDomains.push(elem76);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.revision = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelDomains.prototype.write = function(output) {
  output.writeStructBegin('ChannelDomains');
  if (this.channelDomains !== null && this.channelDomains !== undefined) {
    output.writeFieldBegin('channelDomains', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.channelDomains.length);
    for (var iter77 in this.channelDomains)
    {
      if (this.channelDomains.hasOwnProperty(iter77))
      {
        iter77 = this.channelDomains[iter77];
        iter77.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.revision !== null && this.revision !== undefined) {
    output.writeFieldBegin('revision', Thrift.Type.I64, 2);
    output.writeI64(this.revision);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelException = module.exports.ChannelException = function(args) {
  Thrift.TException.call(this, "ChannelException");
  this.name = "ChannelException";
  this.code = null;
  this.reason = null;
  this.parameterMap = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.reason !== undefined && args.reason !== null) {
      this.reason = args.reason;
    }
    if (args.parameterMap !== undefined && args.parameterMap !== null) {
      this.parameterMap = Thrift.copyMap(args.parameterMap, [null]);
    }
  }
};
Thrift.inherits(ChannelException, Thrift.TException);
ChannelException.prototype.name = 'ChannelException';
ChannelException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.reason = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size78 = 0;
        var _rtmp382;
        this.parameterMap = {};
        var _ktype79 = 0;
        var _vtype80 = 0;
        _rtmp382 = input.readMapBegin();
        _ktype79 = _rtmp382.ktype;
        _vtype80 = _rtmp382.vtype;
        _size78 = _rtmp382.size;
        for (var _i83 = 0; _i83 < _size78; ++_i83)
        {
          var key84 = null;
          var val85 = null;
          key84 = input.readString();
          val85 = input.readString();
          this.parameterMap[key84] = val85;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelException.prototype.write = function(output) {
  output.writeStructBegin('ChannelException');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.reason !== null && this.reason !== undefined) {
    output.writeFieldBegin('reason', Thrift.Type.STRING, 2);
    output.writeString(this.reason);
    output.writeFieldEnd();
  }
  if (this.parameterMap !== null && this.parameterMap !== undefined) {
    output.writeFieldBegin('parameterMap', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.parameterMap));
    for (var kiter86 in this.parameterMap)
    {
      if (this.parameterMap.hasOwnProperty(kiter86))
      {
        var viter87 = this.parameterMap[kiter86];
        output.writeString(kiter86);
        output.writeString(viter87);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelInfos = module.exports.ChannelInfos = function(args) {
  this.channelInfos = null;
  this.revision = null;
  if (args) {
    if (args.channelInfos !== undefined && args.channelInfos !== null) {
      this.channelInfos = Thrift.copyList(args.channelInfos, [ttypes.ChannelInfo]);
    }
    if (args.revision !== undefined && args.revision !== null) {
      this.revision = args.revision;
    }
  }
};
ChannelInfos.prototype = {};
ChannelInfos.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size88 = 0;
        var _rtmp392;
        this.channelInfos = [];
        var _etype91 = 0;
        _rtmp392 = input.readListBegin();
        _etype91 = _rtmp392.etype;
        _size88 = _rtmp392.size;
        for (var _i93 = 0; _i93 < _size88; ++_i93)
        {
          var elem94 = null;
          elem94 = new ttypes.ChannelInfo();
          elem94.read(input);
          this.channelInfos.push(elem94);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.revision = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelInfos.prototype.write = function(output) {
  output.writeStructBegin('ChannelInfos');
  if (this.channelInfos !== null && this.channelInfos !== undefined) {
    output.writeFieldBegin('channelInfos', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.channelInfos.length);
    for (var iter95 in this.channelInfos)
    {
      if (this.channelInfos.hasOwnProperty(iter95))
      {
        iter95 = this.channelInfos[iter95];
        iter95.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.revision !== null && this.revision !== undefined) {
    output.writeFieldBegin('revision', Thrift.Type.I64, 2);
    output.writeI64(this.revision);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelNotificationSetting = module.exports.ChannelNotificationSetting = function(args) {
  this.channelId = null;
  this.name = null;
  this.notificationReceivable = null;
  this.messageReceivable = null;
  this.showDefault = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.notificationReceivable !== undefined && args.notificationReceivable !== null) {
      this.notificationReceivable = args.notificationReceivable;
    }
    if (args.messageReceivable !== undefined && args.messageReceivable !== null) {
      this.messageReceivable = args.messageReceivable;
    }
    if (args.showDefault !== undefined && args.showDefault !== null) {
      this.showDefault = args.showDefault;
    }
  }
};
ChannelNotificationSetting.prototype = {};
ChannelNotificationSetting.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationReceivable = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.messageReceivable = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.showDefault = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelNotificationSetting.prototype.write = function(output) {
  output.writeStructBegin('ChannelNotificationSetting');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.notificationReceivable !== null && this.notificationReceivable !== undefined) {
    output.writeFieldBegin('notificationReceivable', Thrift.Type.BOOL, 3);
    output.writeBool(this.notificationReceivable);
    output.writeFieldEnd();
  }
  if (this.messageReceivable !== null && this.messageReceivable !== undefined) {
    output.writeFieldBegin('messageReceivable', Thrift.Type.BOOL, 4);
    output.writeBool(this.messageReceivable);
    output.writeFieldEnd();
  }
  if (this.showDefault !== null && this.showDefault !== undefined) {
    output.writeFieldBegin('showDefault', Thrift.Type.BOOL, 5);
    output.writeBool(this.showDefault);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelSyncDatas = module.exports.ChannelSyncDatas = function(args) {
  this.channelInfos = null;
  this.channelDomains = null;
  this.revision = null;
  this.expires = null;
  if (args) {
    if (args.channelInfos !== undefined && args.channelInfos !== null) {
      this.channelInfos = Thrift.copyList(args.channelInfos, [ttypes.ChannelInfo]);
    }
    if (args.channelDomains !== undefined && args.channelDomains !== null) {
      this.channelDomains = Thrift.copyList(args.channelDomains, [ttypes.ChannelDomain]);
    }
    if (args.revision !== undefined && args.revision !== null) {
      this.revision = args.revision;
    }
    if (args.expires !== undefined && args.expires !== null) {
      this.expires = args.expires;
    }
  }
};
ChannelSyncDatas.prototype = {};
ChannelSyncDatas.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size96 = 0;
        var _rtmp3100;
        this.channelInfos = [];
        var _etype99 = 0;
        _rtmp3100 = input.readListBegin();
        _etype99 = _rtmp3100.etype;
        _size96 = _rtmp3100.size;
        for (var _i101 = 0; _i101 < _size96; ++_i101)
        {
          var elem102 = null;
          elem102 = new ttypes.ChannelInfo();
          elem102.read(input);
          this.channelInfos.push(elem102);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size103 = 0;
        var _rtmp3107;
        this.channelDomains = [];
        var _etype106 = 0;
        _rtmp3107 = input.readListBegin();
        _etype106 = _rtmp3107.etype;
        _size103 = _rtmp3107.size;
        for (var _i108 = 0; _i108 < _size103; ++_i108)
        {
          var elem109 = null;
          elem109 = new ttypes.ChannelDomain();
          elem109.read(input);
          this.channelDomains.push(elem109);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.revision = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.expires = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelSyncDatas.prototype.write = function(output) {
  output.writeStructBegin('ChannelSyncDatas');
  if (this.channelInfos !== null && this.channelInfos !== undefined) {
    output.writeFieldBegin('channelInfos', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.channelInfos.length);
    for (var iter110 in this.channelInfos)
    {
      if (this.channelInfos.hasOwnProperty(iter110))
      {
        iter110 = this.channelInfos[iter110];
        iter110.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.channelDomains !== null && this.channelDomains !== undefined) {
    output.writeFieldBegin('channelDomains', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.channelDomains.length);
    for (var iter111 in this.channelDomains)
    {
      if (this.channelDomains.hasOwnProperty(iter111))
      {
        iter111 = this.channelDomains[iter111];
        iter111.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.revision !== null && this.revision !== undefined) {
    output.writeFieldBegin('revision', Thrift.Type.I64, 3);
    output.writeI64(this.revision);
    output.writeFieldEnd();
  }
  if (this.expires !== null && this.expires !== undefined) {
    output.writeFieldBegin('expires', Thrift.Type.I64, 4);
    output.writeI64(this.expires);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelToken = module.exports.ChannelToken = function(args) {
  this.token = null;
  this.obsToken = null;
  this.expiration = null;
  this.refreshToken = null;
  this.channelAccessToken = null;
  if (args) {
    if (args.token !== undefined && args.token !== null) {
      this.token = args.token;
    }
    if (args.obsToken !== undefined && args.obsToken !== null) {
      this.obsToken = args.obsToken;
    }
    if (args.expiration !== undefined && args.expiration !== null) {
      this.expiration = args.expiration;
    }
    if (args.refreshToken !== undefined && args.refreshToken !== null) {
      this.refreshToken = args.refreshToken;
    }
    if (args.channelAccessToken !== undefined && args.channelAccessToken !== null) {
      this.channelAccessToken = args.channelAccessToken;
    }
  }
};
ChannelToken.prototype = {};
ChannelToken.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.token = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.obsToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.expiration = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.refreshToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.channelAccessToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelToken.prototype.write = function(output) {
  output.writeStructBegin('ChannelToken');
  if (this.token !== null && this.token !== undefined) {
    output.writeFieldBegin('token', Thrift.Type.STRING, 1);
    output.writeString(this.token);
    output.writeFieldEnd();
  }
  if (this.obsToken !== null && this.obsToken !== undefined) {
    output.writeFieldBegin('obsToken', Thrift.Type.STRING, 2);
    output.writeString(this.obsToken);
    output.writeFieldEnd();
  }
  if (this.expiration !== null && this.expiration !== undefined) {
    output.writeFieldBegin('expiration', Thrift.Type.I64, 3);
    output.writeI64(this.expiration);
    output.writeFieldEnd();
  }
  if (this.refreshToken !== null && this.refreshToken !== undefined) {
    output.writeFieldBegin('refreshToken', Thrift.Type.STRING, 4);
    output.writeString(this.refreshToken);
    output.writeFieldEnd();
  }
  if (this.channelAccessToken !== null && this.channelAccessToken !== undefined) {
    output.writeFieldBegin('channelAccessToken', Thrift.Type.STRING, 5);
    output.writeString(this.channelAccessToken);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Coin = module.exports.Coin = function(args) {
  this.freeCoinBalance = null;
  this.payedCoinBalance = null;
  this.totalCoinBalance = null;
  this.rewardCoinBalance = null;
  if (args) {
    if (args.freeCoinBalance !== undefined && args.freeCoinBalance !== null) {
      this.freeCoinBalance = args.freeCoinBalance;
    }
    if (args.payedCoinBalance !== undefined && args.payedCoinBalance !== null) {
      this.payedCoinBalance = args.payedCoinBalance;
    }
    if (args.totalCoinBalance !== undefined && args.totalCoinBalance !== null) {
      this.totalCoinBalance = args.totalCoinBalance;
    }
    if (args.rewardCoinBalance !== undefined && args.rewardCoinBalance !== null) {
      this.rewardCoinBalance = args.rewardCoinBalance;
    }
  }
};
Coin.prototype = {};
Coin.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.freeCoinBalance = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.payedCoinBalance = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.totalCoinBalance = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.rewardCoinBalance = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Coin.prototype.write = function(output) {
  output.writeStructBegin('Coin');
  if (this.freeCoinBalance !== null && this.freeCoinBalance !== undefined) {
    output.writeFieldBegin('freeCoinBalance', Thrift.Type.I32, 1);
    output.writeI32(this.freeCoinBalance);
    output.writeFieldEnd();
  }
  if (this.payedCoinBalance !== null && this.payedCoinBalance !== undefined) {
    output.writeFieldBegin('payedCoinBalance', Thrift.Type.I32, 2);
    output.writeI32(this.payedCoinBalance);
    output.writeFieldEnd();
  }
  if (this.totalCoinBalance !== null && this.totalCoinBalance !== undefined) {
    output.writeFieldBegin('totalCoinBalance', Thrift.Type.I32, 3);
    output.writeI32(this.totalCoinBalance);
    output.writeFieldEnd();
  }
  if (this.rewardCoinBalance !== null && this.rewardCoinBalance !== undefined) {
    output.writeFieldBegin('rewardCoinBalance', Thrift.Type.I32, 4);
    output.writeI32(this.rewardCoinBalance);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinPayLoad = module.exports.CoinPayLoad = function(args) {
  this.payCoin = null;
  this.freeCoin = null;
  this.type = null;
  this.rewardCoin = null;
  if (args) {
    if (args.payCoin !== undefined && args.payCoin !== null) {
      this.payCoin = args.payCoin;
    }
    if (args.freeCoin !== undefined && args.freeCoin !== null) {
      this.freeCoin = args.freeCoin;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.rewardCoin !== undefined && args.rewardCoin !== null) {
      this.rewardCoin = args.rewardCoin;
    }
  }
};
CoinPayLoad.prototype = {};
CoinPayLoad.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.payCoin = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.freeCoin = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.rewardCoin = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinPayLoad.prototype.write = function(output) {
  output.writeStructBegin('CoinPayLoad');
  if (this.payCoin !== null && this.payCoin !== undefined) {
    output.writeFieldBegin('payCoin', Thrift.Type.I32, 1);
    output.writeI32(this.payCoin);
    output.writeFieldEnd();
  }
  if (this.freeCoin !== null && this.freeCoin !== undefined) {
    output.writeFieldBegin('freeCoin', Thrift.Type.I32, 2);
    output.writeI32(this.freeCoin);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.rewardCoin !== null && this.rewardCoin !== undefined) {
    output.writeFieldBegin('rewardCoin', Thrift.Type.I32, 4);
    output.writeI32(this.rewardCoin);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinHistory = module.exports.CoinHistory = function(args) {
  this.payDate = null;
  this.coinBalance = null;
  this.coin = null;
  this.price = null;
  this.title = null;
  this.refund = null;
  this.paySeq = null;
  this.currency = null;
  this.currencySign = null;
  this.displayPrice = null;
  this.payload = null;
  this.channelId = null;
  if (args) {
    if (args.payDate !== undefined && args.payDate !== null) {
      this.payDate = args.payDate;
    }
    if (args.coinBalance !== undefined && args.coinBalance !== null) {
      this.coinBalance = args.coinBalance;
    }
    if (args.coin !== undefined && args.coin !== null) {
      this.coin = args.coin;
    }
    if (args.price !== undefined && args.price !== null) {
      this.price = args.price;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.refund !== undefined && args.refund !== null) {
      this.refund = args.refund;
    }
    if (args.paySeq !== undefined && args.paySeq !== null) {
      this.paySeq = args.paySeq;
    }
    if (args.currency !== undefined && args.currency !== null) {
      this.currency = args.currency;
    }
    if (args.currencySign !== undefined && args.currencySign !== null) {
      this.currencySign = args.currencySign;
    }
    if (args.displayPrice !== undefined && args.displayPrice !== null) {
      this.displayPrice = args.displayPrice;
    }
    if (args.payload !== undefined && args.payload !== null) {
      this.payload = new ttypes.CoinPayLoad(args.payload);
    }
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
  }
};
CoinHistory.prototype = {};
CoinHistory.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.payDate = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.coinBalance = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.coin = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.price = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BOOL) {
        this.refund = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.paySeq = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.currency = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.currencySign = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.displayPrice = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRUCT) {
        this.payload = new ttypes.CoinPayLoad();
        this.payload.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinHistory.prototype.write = function(output) {
  output.writeStructBegin('CoinHistory');
  if (this.payDate !== null && this.payDate !== undefined) {
    output.writeFieldBegin('payDate', Thrift.Type.I64, 1);
    output.writeI64(this.payDate);
    output.writeFieldEnd();
  }
  if (this.coinBalance !== null && this.coinBalance !== undefined) {
    output.writeFieldBegin('coinBalance', Thrift.Type.I32, 2);
    output.writeI32(this.coinBalance);
    output.writeFieldEnd();
  }
  if (this.coin !== null && this.coin !== undefined) {
    output.writeFieldBegin('coin', Thrift.Type.I32, 3);
    output.writeI32(this.coin);
    output.writeFieldEnd();
  }
  if (this.price !== null && this.price !== undefined) {
    output.writeFieldBegin('price', Thrift.Type.STRING, 4);
    output.writeString(this.price);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 5);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.refund !== null && this.refund !== undefined) {
    output.writeFieldBegin('refund', Thrift.Type.BOOL, 6);
    output.writeBool(this.refund);
    output.writeFieldEnd();
  }
  if (this.paySeq !== null && this.paySeq !== undefined) {
    output.writeFieldBegin('paySeq', Thrift.Type.STRING, 7);
    output.writeString(this.paySeq);
    output.writeFieldEnd();
  }
  if (this.currency !== null && this.currency !== undefined) {
    output.writeFieldBegin('currency', Thrift.Type.STRING, 8);
    output.writeString(this.currency);
    output.writeFieldEnd();
  }
  if (this.currencySign !== null && this.currencySign !== undefined) {
    output.writeFieldBegin('currencySign', Thrift.Type.STRING, 9);
    output.writeString(this.currencySign);
    output.writeFieldEnd();
  }
  if (this.displayPrice !== null && this.displayPrice !== undefined) {
    output.writeFieldBegin('displayPrice', Thrift.Type.STRING, 10);
    output.writeString(this.displayPrice);
    output.writeFieldEnd();
  }
  if (this.payload !== null && this.payload !== undefined) {
    output.writeFieldBegin('payload', Thrift.Type.STRUCT, 11);
    this.payload.write(output);
    output.writeFieldEnd();
  }
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 12);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinHistoryCondition = module.exports.CoinHistoryCondition = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.eddt = null;
  this.appStoreCode = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.eddt !== undefined && args.eddt !== null) {
      this.eddt = args.eddt;
    }
    if (args.appStoreCode !== undefined && args.appStoreCode !== null) {
      this.appStoreCode = args.appStoreCode;
    }
  }
};
CoinHistoryCondition.prototype = {};
CoinHistoryCondition.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.eddt = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.appStoreCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinHistoryCondition.prototype.write = function(output) {
  output.writeStructBegin('CoinHistoryCondition');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 1);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 2);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 3);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.eddt !== null && this.eddt !== undefined) {
    output.writeFieldBegin('eddt', Thrift.Type.STRING, 4);
    output.writeString(this.eddt);
    output.writeFieldEnd();
  }
  if (this.appStoreCode !== null && this.appStoreCode !== undefined) {
    output.writeFieldBegin('appStoreCode', Thrift.Type.I32, 5);
    output.writeI32(this.appStoreCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinHistoryResult = module.exports.CoinHistoryResult = function(args) {
  this.historys = null;
  this.balance = null;
  this.hasNext = null;
  if (args) {
    if (args.historys !== undefined && args.historys !== null) {
      this.historys = Thrift.copyList(args.historys, [ttypes.CoinHistory]);
    }
    if (args.balance !== undefined && args.balance !== null) {
      this.balance = new ttypes.Coin(args.balance);
    }
    if (args.hasNext !== undefined && args.hasNext !== null) {
      this.hasNext = args.hasNext;
    }
  }
};
CoinHistoryResult.prototype = {};
CoinHistoryResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size112 = 0;
        var _rtmp3116;
        this.historys = [];
        var _etype115 = 0;
        _rtmp3116 = input.readListBegin();
        _etype115 = _rtmp3116.etype;
        _size112 = _rtmp3116.size;
        for (var _i117 = 0; _i117 < _size112; ++_i117)
        {
          var elem118 = null;
          elem118 = new ttypes.CoinHistory();
          elem118.read(input);
          this.historys.push(elem118);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.balance = new ttypes.Coin();
        this.balance.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.hasNext = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinHistoryResult.prototype.write = function(output) {
  output.writeStructBegin('CoinHistoryResult');
  if (this.historys !== null && this.historys !== undefined) {
    output.writeFieldBegin('historys', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.historys.length);
    for (var iter119 in this.historys)
    {
      if (this.historys.hasOwnProperty(iter119))
      {
        iter119 = this.historys[iter119];
        iter119.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.balance !== null && this.balance !== undefined) {
    output.writeFieldBegin('balance', Thrift.Type.STRUCT, 2);
    this.balance.write(output);
    output.writeFieldEnd();
  }
  if (this.hasNext !== null && this.hasNext !== undefined) {
    output.writeFieldBegin('hasNext', Thrift.Type.BOOL, 3);
    output.writeBool(this.hasNext);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinProductItem = module.exports.CoinProductItem = function(args) {
  this.itemId = null;
  this.coin = null;
  this.freeCoin = null;
  this.currency = null;
  this.price = null;
  this.displayPrice = null;
  this.name = null;
  this.desc = null;
  if (args) {
    if (args.itemId !== undefined && args.itemId !== null) {
      this.itemId = args.itemId;
    }
    if (args.coin !== undefined && args.coin !== null) {
      this.coin = args.coin;
    }
    if (args.freeCoin !== undefined && args.freeCoin !== null) {
      this.freeCoin = args.freeCoin;
    }
    if (args.currency !== undefined && args.currency !== null) {
      this.currency = args.currency;
    }
    if (args.price !== undefined && args.price !== null) {
      this.price = args.price;
    }
    if (args.displayPrice !== undefined && args.displayPrice !== null) {
      this.displayPrice = args.displayPrice;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.desc !== undefined && args.desc !== null) {
      this.desc = args.desc;
    }
  }
};
CoinProductItem.prototype = {};
CoinProductItem.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.itemId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.coin = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.freeCoin = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.currency = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.price = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.displayPrice = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.desc = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinProductItem.prototype.write = function(output) {
  output.writeStructBegin('CoinProductItem');
  if (this.itemId !== null && this.itemId !== undefined) {
    output.writeFieldBegin('itemId', Thrift.Type.STRING, 1);
    output.writeString(this.itemId);
    output.writeFieldEnd();
  }
  if (this.coin !== null && this.coin !== undefined) {
    output.writeFieldBegin('coin', Thrift.Type.I32, 2);
    output.writeI32(this.coin);
    output.writeFieldEnd();
  }
  if (this.freeCoin !== null && this.freeCoin !== undefined) {
    output.writeFieldBegin('freeCoin', Thrift.Type.I32, 3);
    output.writeI32(this.freeCoin);
    output.writeFieldEnd();
  }
  if (this.currency !== null && this.currency !== undefined) {
    output.writeFieldBegin('currency', Thrift.Type.STRING, 5);
    output.writeString(this.currency);
    output.writeFieldEnd();
  }
  if (this.price !== null && this.price !== undefined) {
    output.writeFieldBegin('price', Thrift.Type.STRING, 6);
    output.writeString(this.price);
    output.writeFieldEnd();
  }
  if (this.displayPrice !== null && this.displayPrice !== undefined) {
    output.writeFieldBegin('displayPrice', Thrift.Type.STRING, 7);
    output.writeString(this.displayPrice);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 8);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.desc !== null && this.desc !== undefined) {
    output.writeFieldBegin('desc', Thrift.Type.STRING, 9);
    output.writeString(this.desc);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinPurchaseConfirm = module.exports.CoinPurchaseConfirm = function(args) {
  this.orderId = null;
  this.appStoreCode = null;
  this.receipt = null;
  this.signature = null;
  this.seller = null;
  this.requestType = null;
  this.ignoreReceipt = null;
  if (args) {
    if (args.orderId !== undefined && args.orderId !== null) {
      this.orderId = args.orderId;
    }
    if (args.appStoreCode !== undefined && args.appStoreCode !== null) {
      this.appStoreCode = args.appStoreCode;
    }
    if (args.receipt !== undefined && args.receipt !== null) {
      this.receipt = args.receipt;
    }
    if (args.signature !== undefined && args.signature !== null) {
      this.signature = args.signature;
    }
    if (args.seller !== undefined && args.seller !== null) {
      this.seller = args.seller;
    }
    if (args.requestType !== undefined && args.requestType !== null) {
      this.requestType = args.requestType;
    }
    if (args.ignoreReceipt !== undefined && args.ignoreReceipt !== null) {
      this.ignoreReceipt = args.ignoreReceipt;
    }
  }
};
CoinPurchaseConfirm.prototype = {};
CoinPurchaseConfirm.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.orderId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.appStoreCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.receipt = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.signature = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.seller = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.requestType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.BOOL) {
        this.ignoreReceipt = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinPurchaseConfirm.prototype.write = function(output) {
  output.writeStructBegin('CoinPurchaseConfirm');
  if (this.orderId !== null && this.orderId !== undefined) {
    output.writeFieldBegin('orderId', Thrift.Type.STRING, 1);
    output.writeString(this.orderId);
    output.writeFieldEnd();
  }
  if (this.appStoreCode !== null && this.appStoreCode !== undefined) {
    output.writeFieldBegin('appStoreCode', Thrift.Type.I32, 2);
    output.writeI32(this.appStoreCode);
    output.writeFieldEnd();
  }
  if (this.receipt !== null && this.receipt !== undefined) {
    output.writeFieldBegin('receipt', Thrift.Type.STRING, 3);
    output.writeString(this.receipt);
    output.writeFieldEnd();
  }
  if (this.signature !== null && this.signature !== undefined) {
    output.writeFieldBegin('signature', Thrift.Type.STRING, 4);
    output.writeString(this.signature);
    output.writeFieldEnd();
  }
  if (this.seller !== null && this.seller !== undefined) {
    output.writeFieldBegin('seller', Thrift.Type.STRING, 5);
    output.writeString(this.seller);
    output.writeFieldEnd();
  }
  if (this.requestType !== null && this.requestType !== undefined) {
    output.writeFieldBegin('requestType', Thrift.Type.STRING, 6);
    output.writeString(this.requestType);
    output.writeFieldEnd();
  }
  if (this.ignoreReceipt !== null && this.ignoreReceipt !== undefined) {
    output.writeFieldBegin('ignoreReceipt', Thrift.Type.BOOL, 7);
    output.writeBool(this.ignoreReceipt);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinPurchaseReservation = module.exports.CoinPurchaseReservation = function(args) {
  this.productId = null;
  this.country = null;
  this.currency = null;
  this.price = null;
  this.appStoreCode = null;
  this.language = null;
  this.pgCode = null;
  this.redirectUrl = null;
  if (args) {
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.currency !== undefined && args.currency !== null) {
      this.currency = args.currency;
    }
    if (args.price !== undefined && args.price !== null) {
      this.price = args.price;
    }
    if (args.appStoreCode !== undefined && args.appStoreCode !== null) {
      this.appStoreCode = args.appStoreCode;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.pgCode !== undefined && args.pgCode !== null) {
      this.pgCode = args.pgCode;
    }
    if (args.redirectUrl !== undefined && args.redirectUrl !== null) {
      this.redirectUrl = args.redirectUrl;
    }
  }
};
CoinPurchaseReservation.prototype = {};
CoinPurchaseReservation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.currency = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.price = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.appStoreCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.pgCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.redirectUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinPurchaseReservation.prototype.write = function(output) {
  output.writeStructBegin('CoinPurchaseReservation');
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 1);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 2);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.currency !== null && this.currency !== undefined) {
    output.writeFieldBegin('currency', Thrift.Type.STRING, 3);
    output.writeString(this.currency);
    output.writeFieldEnd();
  }
  if (this.price !== null && this.price !== undefined) {
    output.writeFieldBegin('price', Thrift.Type.STRING, 4);
    output.writeString(this.price);
    output.writeFieldEnd();
  }
  if (this.appStoreCode !== null && this.appStoreCode !== undefined) {
    output.writeFieldBegin('appStoreCode', Thrift.Type.I32, 5);
    output.writeI32(this.appStoreCode);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 6);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.pgCode !== null && this.pgCode !== undefined) {
    output.writeFieldBegin('pgCode', Thrift.Type.I32, 7);
    output.writeI32(this.pgCode);
    output.writeFieldEnd();
  }
  if (this.redirectUrl !== null && this.redirectUrl !== undefined) {
    output.writeFieldBegin('redirectUrl', Thrift.Type.STRING, 8);
    output.writeString(this.redirectUrl);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinUseReservationItem = module.exports.CoinUseReservationItem = function(args) {
  this.itemId = null;
  this.itemName = null;
  this.amount = null;
  if (args) {
    if (args.itemId !== undefined && args.itemId !== null) {
      this.itemId = args.itemId;
    }
    if (args.itemName !== undefined && args.itemName !== null) {
      this.itemName = args.itemName;
    }
    if (args.amount !== undefined && args.amount !== null) {
      this.amount = args.amount;
    }
  }
};
CoinUseReservationItem.prototype = {};
CoinUseReservationItem.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.itemId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.itemName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.amount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinUseReservationItem.prototype.write = function(output) {
  output.writeStructBegin('CoinUseReservationItem');
  if (this.itemId !== null && this.itemId !== undefined) {
    output.writeFieldBegin('itemId', Thrift.Type.STRING, 1);
    output.writeString(this.itemId);
    output.writeFieldEnd();
  }
  if (this.itemName !== null && this.itemName !== undefined) {
    output.writeFieldBegin('itemName', Thrift.Type.STRING, 2);
    output.writeString(this.itemName);
    output.writeFieldEnd();
  }
  if (this.amount !== null && this.amount !== undefined) {
    output.writeFieldBegin('amount', Thrift.Type.I32, 3);
    output.writeI32(this.amount);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CoinUseReservation = module.exports.CoinUseReservation = function(args) {
  this.channelId = null;
  this.shopOrderId = null;
  this.appStoreCode = null;
  this.items = null;
  this.country = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.shopOrderId !== undefined && args.shopOrderId !== null) {
      this.shopOrderId = args.shopOrderId;
    }
    if (args.appStoreCode !== undefined && args.appStoreCode !== null) {
      this.appStoreCode = args.appStoreCode;
    }
    if (args.items !== undefined && args.items !== null) {
      this.items = Thrift.copyList(args.items, [ttypes.CoinUseReservationItem]);
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
CoinUseReservation.prototype = {};
CoinUseReservation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.shopOrderId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.appStoreCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size120 = 0;
        var _rtmp3124;
        this.items = [];
        var _etype123 = 0;
        _rtmp3124 = input.readListBegin();
        _etype123 = _rtmp3124.etype;
        _size120 = _rtmp3124.size;
        for (var _i125 = 0; _i125 < _size120; ++_i125)
        {
          var elem126 = null;
          elem126 = new ttypes.CoinUseReservationItem();
          elem126.read(input);
          this.items.push(elem126);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CoinUseReservation.prototype.write = function(output) {
  output.writeStructBegin('CoinUseReservation');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.shopOrderId !== null && this.shopOrderId !== undefined) {
    output.writeFieldBegin('shopOrderId', Thrift.Type.STRING, 2);
    output.writeString(this.shopOrderId);
    output.writeFieldEnd();
  }
  if (this.appStoreCode !== null && this.appStoreCode !== undefined) {
    output.writeFieldBegin('appStoreCode', Thrift.Type.I32, 3);
    output.writeI32(this.appStoreCode);
    output.writeFieldEnd();
  }
  if (this.items !== null && this.items !== undefined) {
    output.writeFieldBegin('items', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.items.length);
    for (var iter127 in this.items)
    {
      if (this.items.hasOwnProperty(iter127))
      {
        iter127 = this.items[iter127];
        iter127.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CompactContact = module.exports.CompactContact = function(args) {
  this.mid = null;
  this.createdTime = null;
  this.modifiedTime = null;
  this.status = null;
  this.settings = null;
  this.displayNameOverridden = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.modifiedTime !== undefined && args.modifiedTime !== null) {
      this.modifiedTime = args.modifiedTime;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.settings !== undefined && args.settings !== null) {
      this.settings = args.settings;
    }
    if (args.displayNameOverridden !== undefined && args.displayNameOverridden !== null) {
      this.displayNameOverridden = args.displayNameOverridden;
    }
  }
};
CompactContact.prototype = {};
CompactContact.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.modifiedTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.settings = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.displayNameOverridden = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CompactContact.prototype.write = function(output) {
  output.writeStructBegin('CompactContact');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 2);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.modifiedTime !== null && this.modifiedTime !== undefined) {
    output.writeFieldBegin('modifiedTime', Thrift.Type.I64, 3);
    output.writeI64(this.modifiedTime);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 4);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.settings !== null && this.settings !== undefined) {
    output.writeFieldBegin('settings', Thrift.Type.I64, 5);
    output.writeI64(this.settings);
    output.writeFieldEnd();
  }
  if (this.displayNameOverridden !== null && this.displayNameOverridden !== undefined) {
    output.writeFieldBegin('displayNameOverridden', Thrift.Type.STRING, 6);
    output.writeString(this.displayNameOverridden);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ContactModification = module.exports.ContactModification = function(args) {
  this.type = null;
  this.luid = null;
  this.phones = null;
  this.emails = null;
  this.userids = null;
  if (args) {
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.luid !== undefined && args.luid !== null) {
      this.luid = args.luid;
    }
    if (args.phones !== undefined && args.phones !== null) {
      this.phones = Thrift.copyList(args.phones, [null]);
    }
    if (args.emails !== undefined && args.emails !== null) {
      this.emails = Thrift.copyList(args.emails, [null]);
    }
    if (args.userids !== undefined && args.userids !== null) {
      this.userids = Thrift.copyList(args.userids, [null]);
    }
  }
};
ContactModification.prototype = {};
ContactModification.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.luid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.LIST) {
        var _size128 = 0;
        var _rtmp3132;
        this.phones = [];
        var _etype131 = 0;
        _rtmp3132 = input.readListBegin();
        _etype131 = _rtmp3132.etype;
        _size128 = _rtmp3132.size;
        for (var _i133 = 0; _i133 < _size128; ++_i133)
        {
          var elem134 = null;
          elem134 = input.readString();
          this.phones.push(elem134);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.LIST) {
        var _size135 = 0;
        var _rtmp3139;
        this.emails = [];
        var _etype138 = 0;
        _rtmp3139 = input.readListBegin();
        _etype138 = _rtmp3139.etype;
        _size135 = _rtmp3139.size;
        for (var _i140 = 0; _i140 < _size135; ++_i140)
        {
          var elem141 = null;
          elem141 = input.readString();
          this.emails.push(elem141);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.LIST) {
        var _size142 = 0;
        var _rtmp3146;
        this.userids = [];
        var _etype145 = 0;
        _rtmp3146 = input.readListBegin();
        _etype145 = _rtmp3146.etype;
        _size142 = _rtmp3146.size;
        for (var _i147 = 0; _i147 < _size142; ++_i147)
        {
          var elem148 = null;
          elem148 = input.readString();
          this.userids.push(elem148);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ContactModification.prototype.write = function(output) {
  output.writeStructBegin('ContactModification');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.luid !== null && this.luid !== undefined) {
    output.writeFieldBegin('luid', Thrift.Type.STRING, 2);
    output.writeString(this.luid);
    output.writeFieldEnd();
  }
  if (this.phones !== null && this.phones !== undefined) {
    output.writeFieldBegin('phones', Thrift.Type.LIST, 11);
    output.writeListBegin(Thrift.Type.STRING, this.phones.length);
    for (var iter149 in this.phones)
    {
      if (this.phones.hasOwnProperty(iter149))
      {
        iter149 = this.phones[iter149];
        output.writeString(iter149);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.emails !== null && this.emails !== undefined) {
    output.writeFieldBegin('emails', Thrift.Type.LIST, 12);
    output.writeListBegin(Thrift.Type.STRING, this.emails.length);
    for (var iter150 in this.emails)
    {
      if (this.emails.hasOwnProperty(iter150))
      {
        iter150 = this.emails[iter150];
        output.writeString(iter150);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.userids !== null && this.userids !== undefined) {
    output.writeFieldBegin('userids', Thrift.Type.LIST, 13);
    output.writeListBegin(Thrift.Type.STRING, this.userids.length);
    for (var iter151 in this.userids)
    {
      if (this.userids.hasOwnProperty(iter151))
      {
        iter151 = this.userids[iter151];
        output.writeString(iter151);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ContactRegistration = module.exports.ContactRegistration = function(args) {
  this.contact = null;
  this.luid = null;
  this.contactType = null;
  this.contactKey = null;
  if (args) {
    if (args.contact !== undefined && args.contact !== null) {
      this.contact = new ttypes.Contact(args.contact);
    }
    if (args.luid !== undefined && args.luid !== null) {
      this.luid = args.luid;
    }
    if (args.contactType !== undefined && args.contactType !== null) {
      this.contactType = args.contactType;
    }
    if (args.contactKey !== undefined && args.contactKey !== null) {
      this.contactKey = args.contactKey;
    }
  }
};
ContactRegistration.prototype = {};
ContactRegistration.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.contact = new ttypes.Contact();
        this.contact.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.luid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.contactType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.contactKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ContactRegistration.prototype.write = function(output) {
  output.writeStructBegin('ContactRegistration');
  if (this.contact !== null && this.contact !== undefined) {
    output.writeFieldBegin('contact', Thrift.Type.STRUCT, 1);
    this.contact.write(output);
    output.writeFieldEnd();
  }
  if (this.luid !== null && this.luid !== undefined) {
    output.writeFieldBegin('luid', Thrift.Type.STRING, 10);
    output.writeString(this.luid);
    output.writeFieldEnd();
  }
  if (this.contactType !== null && this.contactType !== undefined) {
    output.writeFieldBegin('contactType', Thrift.Type.I32, 11);
    output.writeI32(this.contactType);
    output.writeFieldEnd();
  }
  if (this.contactKey !== null && this.contactKey !== undefined) {
    output.writeFieldBegin('contactKey', Thrift.Type.STRING, 12);
    output.writeString(this.contactKey);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ContactReport = module.exports.ContactReport = function(args) {
  this.mid = null;
  this.exists = null;
  this.contact = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.exists !== undefined && args.exists !== null) {
      this.exists = args.exists;
    }
    if (args.contact !== undefined && args.contact !== null) {
      this.contact = new ttypes.Contact(args.contact);
    }
  }
};
ContactReport.prototype = {};
ContactReport.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.exists = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.contact = new ttypes.Contact();
        this.contact.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ContactReport.prototype.write = function(output) {
  output.writeStructBegin('ContactReport');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.exists !== null && this.exists !== undefined) {
    output.writeFieldBegin('exists', Thrift.Type.BOOL, 2);
    output.writeBool(this.exists);
    output.writeFieldEnd();
  }
  if (this.contact !== null && this.contact !== undefined) {
    output.writeFieldBegin('contact', Thrift.Type.STRUCT, 3);
    this.contact.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ContactReportResult = module.exports.ContactReportResult = function(args) {
  this.mid = null;
  this.exists = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.exists !== undefined && args.exists !== null) {
      this.exists = args.exists;
    }
  }
};
ContactReportResult.prototype = {};
ContactReportResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.exists = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ContactReportResult.prototype.write = function(output) {
  output.writeStructBegin('ContactReportResult');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.exists !== null && this.exists !== undefined) {
    output.writeFieldBegin('exists', Thrift.Type.BOOL, 2);
    output.writeBool(this.exists);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DeviceInfo = module.exports.DeviceInfo = function(args) {
  this.deviceName = null;
  this.systemName = null;
  this.systemVersion = null;
  this.model = null;
  this.carrierCode = null;
  this.carrierName = null;
  this.applicationType = null;
  if (args) {
    if (args.deviceName !== undefined && args.deviceName !== null) {
      this.deviceName = args.deviceName;
    }
    if (args.systemName !== undefined && args.systemName !== null) {
      this.systemName = args.systemName;
    }
    if (args.systemVersion !== undefined && args.systemVersion !== null) {
      this.systemVersion = args.systemVersion;
    }
    if (args.model !== undefined && args.model !== null) {
      this.model = args.model;
    }
    if (args.carrierCode !== undefined && args.carrierCode !== null) {
      this.carrierCode = args.carrierCode;
    }
    if (args.carrierName !== undefined && args.carrierName !== null) {
      this.carrierName = args.carrierName;
    }
    if (args.applicationType !== undefined && args.applicationType !== null) {
      this.applicationType = args.applicationType;
    }
  }
};
DeviceInfo.prototype = {};
DeviceInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.deviceName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.systemName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.systemVersion = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.model = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I32) {
        this.carrierCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.carrierName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.I32) {
        this.applicationType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DeviceInfo.prototype.write = function(output) {
  output.writeStructBegin('DeviceInfo');
  if (this.deviceName !== null && this.deviceName !== undefined) {
    output.writeFieldBegin('deviceName', Thrift.Type.STRING, 1);
    output.writeString(this.deviceName);
    output.writeFieldEnd();
  }
  if (this.systemName !== null && this.systemName !== undefined) {
    output.writeFieldBegin('systemName', Thrift.Type.STRING, 2);
    output.writeString(this.systemName);
    output.writeFieldEnd();
  }
  if (this.systemVersion !== null && this.systemVersion !== undefined) {
    output.writeFieldBegin('systemVersion', Thrift.Type.STRING, 3);
    output.writeString(this.systemVersion);
    output.writeFieldEnd();
  }
  if (this.model !== null && this.model !== undefined) {
    output.writeFieldBegin('model', Thrift.Type.STRING, 4);
    output.writeString(this.model);
    output.writeFieldEnd();
  }
  if (this.carrierCode !== null && this.carrierCode !== undefined) {
    output.writeFieldBegin('carrierCode', Thrift.Type.I32, 10);
    output.writeI32(this.carrierCode);
    output.writeFieldEnd();
  }
  if (this.carrierName !== null && this.carrierName !== undefined) {
    output.writeFieldBegin('carrierName', Thrift.Type.STRING, 11);
    output.writeString(this.carrierName);
    output.writeFieldEnd();
  }
  if (this.applicationType !== null && this.applicationType !== undefined) {
    output.writeFieldBegin('applicationType', Thrift.Type.I32, 20);
    output.writeI32(this.applicationType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EmailConfirmation = module.exports.EmailConfirmation = function(args) {
  this.usePasswordSet = null;
  this.email = null;
  this.password = null;
  this.ignoreDuplication = null;
  if (args) {
    if (args.usePasswordSet !== undefined && args.usePasswordSet !== null) {
      this.usePasswordSet = args.usePasswordSet;
    }
    if (args.email !== undefined && args.email !== null) {
      this.email = args.email;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
    if (args.ignoreDuplication !== undefined && args.ignoreDuplication !== null) {
      this.ignoreDuplication = args.ignoreDuplication;
    }
  }
};
EmailConfirmation.prototype = {};
EmailConfirmation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.usePasswordSet = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.ignoreDuplication = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EmailConfirmation.prototype.write = function(output) {
  output.writeStructBegin('EmailConfirmation');
  if (this.usePasswordSet !== null && this.usePasswordSet !== undefined) {
    output.writeFieldBegin('usePasswordSet', Thrift.Type.BOOL, 1);
    output.writeBool(this.usePasswordSet);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 2);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 3);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  if (this.ignoreDuplication !== null && this.ignoreDuplication !== undefined) {
    output.writeFieldBegin('ignoreDuplication', Thrift.Type.BOOL, 4);
    output.writeBool(this.ignoreDuplication);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EmailConfirmationSession = module.exports.EmailConfirmationSession = function(args) {
  this.emailConfirmationType = null;
  this.verifier = null;
  this.targetEmail = null;
  if (args) {
    if (args.emailConfirmationType !== undefined && args.emailConfirmationType !== null) {
      this.emailConfirmationType = args.emailConfirmationType;
    }
    if (args.verifier !== undefined && args.verifier !== null) {
      this.verifier = args.verifier;
    }
    if (args.targetEmail !== undefined && args.targetEmail !== null) {
      this.targetEmail = args.targetEmail;
    }
  }
};
EmailConfirmationSession.prototype = {};
EmailConfirmationSession.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.emailConfirmationType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.verifier = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.targetEmail = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EmailConfirmationSession.prototype.write = function(output) {
  output.writeStructBegin('EmailConfirmationSession');
  if (this.emailConfirmationType !== null && this.emailConfirmationType !== undefined) {
    output.writeFieldBegin('emailConfirmationType', Thrift.Type.I32, 1);
    output.writeI32(this.emailConfirmationType);
    output.writeFieldEnd();
  }
  if (this.verifier !== null && this.verifier !== undefined) {
    output.writeFieldBegin('verifier', Thrift.Type.STRING, 2);
    output.writeString(this.verifier);
    output.writeFieldEnd();
  }
  if (this.targetEmail !== null && this.targetEmail !== undefined) {
    output.writeFieldBegin('targetEmail', Thrift.Type.STRING, 3);
    output.writeString(this.targetEmail);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FriendChannelMatrix = module.exports.FriendChannelMatrix = function(args) {
  this.channelId = null;
  this.representMid = null;
  this.count = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.representMid !== undefined && args.representMid !== null) {
      this.representMid = args.representMid;
    }
    if (args.count !== undefined && args.count !== null) {
      this.count = args.count;
    }
  }
};
FriendChannelMatrix.prototype = {};
FriendChannelMatrix.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.representMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FriendChannelMatrix.prototype.write = function(output) {
  output.writeStructBegin('FriendChannelMatrix');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.representMid !== null && this.representMid !== undefined) {
    output.writeFieldBegin('representMid', Thrift.Type.STRING, 2);
    output.writeString(this.representMid);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I32, 3);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FriendChannelMatricesResponse = module.exports.FriendChannelMatricesResponse = function(args) {
  this.expires = null;
  this.matrices = null;
  if (args) {
    if (args.expires !== undefined && args.expires !== null) {
      this.expires = args.expires;
    }
    if (args.matrices !== undefined && args.matrices !== null) {
      this.matrices = Thrift.copyList(args.matrices, [ttypes.FriendChannelMatrix]);
    }
  }
};
FriendChannelMatricesResponse.prototype = {};
FriendChannelMatricesResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.expires = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size152 = 0;
        var _rtmp3156;
        this.matrices = [];
        var _etype155 = 0;
        _rtmp3156 = input.readListBegin();
        _etype155 = _rtmp3156.etype;
        _size152 = _rtmp3156.size;
        for (var _i157 = 0; _i157 < _size152; ++_i157)
        {
          var elem158 = null;
          elem158 = new ttypes.FriendChannelMatrix();
          elem158.read(input);
          this.matrices.push(elem158);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FriendChannelMatricesResponse.prototype.write = function(output) {
  output.writeStructBegin('FriendChannelMatricesResponse');
  if (this.expires !== null && this.expires !== undefined) {
    output.writeFieldBegin('expires', Thrift.Type.I64, 1);
    output.writeI64(this.expires);
    output.writeFieldEnd();
  }
  if (this.matrices !== null && this.matrices !== undefined) {
    output.writeFieldBegin('matrices', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.matrices.length);
    for (var iter159 in this.matrices)
    {
      if (this.matrices.hasOwnProperty(iter159))
      {
        iter159 = this.matrices[iter159];
        iter159.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Geolocation = module.exports.Geolocation = function(args) {
  this.longitude = null;
  this.latitude = null;
  if (args) {
    if (args.longitude !== undefined && args.longitude !== null) {
      this.longitude = args.longitude;
    }
    if (args.latitude !== undefined && args.latitude !== null) {
      this.latitude = args.latitude;
    }
  }
};
Geolocation.prototype = {};
Geolocation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.DOUBLE) {
        this.longitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.latitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Geolocation.prototype.write = function(output) {
  output.writeStructBegin('Geolocation');
  if (this.longitude !== null && this.longitude !== undefined) {
    output.writeFieldBegin('longitude', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.longitude);
    output.writeFieldEnd();
  }
  if (this.latitude !== null && this.latitude !== undefined) {
    output.writeFieldBegin('latitude', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.latitude);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationTarget = module.exports.NotificationTarget = function(args) {
  this.applicationType = null;
  this.applicationVersion = null;
  this.region = null;
  if (args) {
    if (args.applicationType !== undefined && args.applicationType !== null) {
      this.applicationType = args.applicationType;
    }
    if (args.applicationVersion !== undefined && args.applicationVersion !== null) {
      this.applicationVersion = args.applicationVersion;
    }
    if (args.region !== undefined && args.region !== null) {
      this.region = args.region;
    }
  }
};
NotificationTarget.prototype = {};
NotificationTarget.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.applicationType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.applicationVersion = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.region = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NotificationTarget.prototype.write = function(output) {
  output.writeStructBegin('NotificationTarget');
  if (this.applicationType !== null && this.applicationType !== undefined) {
    output.writeFieldBegin('applicationType', Thrift.Type.STRING, 1);
    output.writeString(this.applicationType);
    output.writeFieldEnd();
  }
  if (this.applicationVersion !== null && this.applicationVersion !== undefined) {
    output.writeFieldBegin('applicationVersion', Thrift.Type.STRING, 2);
    output.writeString(this.applicationVersion);
    output.writeFieldEnd();
  }
  if (this.region !== null && this.region !== undefined) {
    output.writeFieldBegin('region', Thrift.Type.STRING, 3);
    output.writeString(this.region);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var GlobalEvent = module.exports.GlobalEvent = function(args) {
  this.key = null;
  this.targets = null;
  this.createdTime = null;
  this.data = null;
  this.maxDelay = null;
  if (args) {
    if (args.key !== undefined && args.key !== null) {
      this.key = args.key;
    }
    if (args.targets !== undefined && args.targets !== null) {
      this.targets = Thrift.copyList(args.targets, [ttypes.NotificationTarget]);
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = args.data;
    }
    if (args.maxDelay !== undefined && args.maxDelay !== null) {
      this.maxDelay = args.maxDelay;
    }
  }
};
GlobalEvent.prototype = {};
GlobalEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.key = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size160 = 0;
        var _rtmp3164;
        this.targets = [];
        var _etype163 = 0;
        _rtmp3164 = input.readListBegin();
        _etype163 = _rtmp3164.etype;
        _size160 = _rtmp3164.size;
        for (var _i165 = 0; _i165 < _size160; ++_i165)
        {
          var elem166 = null;
          elem166 = new ttypes.NotificationTarget();
          elem166.read(input);
          this.targets.push(elem166);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.data = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.maxDelay = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GlobalEvent.prototype.write = function(output) {
  output.writeStructBegin('GlobalEvent');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.targets !== null && this.targets !== undefined) {
    output.writeFieldBegin('targets', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.targets.length);
    for (var iter167 in this.targets)
    {
      if (this.targets.hasOwnProperty(iter167))
      {
        iter167 = this.targets[iter167];
        iter167.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 3);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.I64, 4);
    output.writeI64(this.data);
    output.writeFieldEnd();
  }
  if (this.maxDelay !== null && this.maxDelay !== undefined) {
    output.writeFieldBegin('maxDelay', Thrift.Type.I32, 5);
    output.writeI32(this.maxDelay);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Group = module.exports.Group = function(args) {
  this.id = null;
  this.createdTime = null;
  this.name = null;
  this.pictureStatus = null;
  this.members = null;
  this.creator = null;
  this.invitee = null;
  this.notificationDisabled = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.pictureStatus !== undefined && args.pictureStatus !== null) {
      this.pictureStatus = args.pictureStatus;
    }
    if (args.members !== undefined && args.members !== null) {
      this.members = Thrift.copyList(args.members, [ttypes.Contact]);
    }
    if (args.creator !== undefined && args.creator !== null) {
      this.creator = new ttypes.Contact(args.creator);
    }
    if (args.invitee !== undefined && args.invitee !== null) {
      this.invitee = Thrift.copyList(args.invitee, [ttypes.Contact]);
    }
    if (args.notificationDisabled !== undefined && args.notificationDisabled !== null) {
      this.notificationDisabled = args.notificationDisabled;
    }
  }
};
Group.prototype = {};
Group.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.pictureStatus = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.LIST) {
        var _size168 = 0;
        var _rtmp3172;
        this.members = [];
        var _etype171 = 0;
        _rtmp3172 = input.readListBegin();
        _etype171 = _rtmp3172.etype;
        _size168 = _rtmp3172.size;
        for (var _i173 = 0; _i173 < _size168; ++_i173)
        {
          var elem174 = null;
          elem174 = new ttypes.Contact();
          elem174.read(input);
          this.members.push(elem174);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.STRUCT) {
        this.creator = new ttypes.Contact();
        this.creator.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.LIST) {
        var _size175 = 0;
        var _rtmp3179;
        this.invitee = [];
        var _etype178 = 0;
        _rtmp3179 = input.readListBegin();
        _etype178 = _rtmp3179.etype;
        _size175 = _rtmp3179.size;
        for (var _i180 = 0; _i180 < _size175; ++_i180)
        {
          var elem181 = null;
          elem181 = new ttypes.Contact();
          elem181.read(input);
          this.invitee.push(elem181);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 31:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationDisabled = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Group.prototype.write = function(output) {
  output.writeStructBegin('Group');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 2);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 10);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.pictureStatus !== null && this.pictureStatus !== undefined) {
    output.writeFieldBegin('pictureStatus', Thrift.Type.STRING, 11);
    output.writeString(this.pictureStatus);
    output.writeFieldEnd();
  }
  if (this.members !== null && this.members !== undefined) {
    output.writeFieldBegin('members', Thrift.Type.LIST, 20);
    output.writeListBegin(Thrift.Type.STRUCT, this.members.length);
    for (var iter182 in this.members)
    {
      if (this.members.hasOwnProperty(iter182))
      {
        iter182 = this.members[iter182];
        iter182.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.creator !== null && this.creator !== undefined) {
    output.writeFieldBegin('creator', Thrift.Type.STRUCT, 21);
    this.creator.write(output);
    output.writeFieldEnd();
  }
  if (this.invitee !== null && this.invitee !== undefined) {
    output.writeFieldBegin('invitee', Thrift.Type.LIST, 22);
    output.writeListBegin(Thrift.Type.STRUCT, this.invitee.length);
    for (var iter183 in this.invitee)
    {
      if (this.invitee.hasOwnProperty(iter183))
      {
        iter183 = this.invitee[iter183];
        iter183.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.notificationDisabled !== null && this.notificationDisabled !== undefined) {
    output.writeFieldBegin('notificationDisabled', Thrift.Type.BOOL, 31);
    output.writeBool(this.notificationDisabled);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IdentityCredential = module.exports.IdentityCredential = function(args) {
  this.provider = null;
  this.identifier = null;
  this.password = null;
  if (args) {
    if (args.provider !== undefined && args.provider !== null) {
      this.provider = args.provider;
    }
    if (args.identifier !== undefined && args.identifier !== null) {
      this.identifier = args.identifier;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
  }
};
IdentityCredential.prototype = {};
IdentityCredential.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.provider = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.identifier = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IdentityCredential.prototype.write = function(output) {
  output.writeStructBegin('IdentityCredential');
  if (this.provider !== null && this.provider !== undefined) {
    output.writeFieldBegin('provider', Thrift.Type.I32, 1);
    output.writeI32(this.provider);
    output.writeFieldEnd();
  }
  if (this.identifier !== null && this.identifier !== undefined) {
    output.writeFieldBegin('identifier', Thrift.Type.STRING, 2);
    output.writeString(this.identifier);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 3);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LastReadMessageId = module.exports.LastReadMessageId = function(args) {
  this.mid = null;
  this.lastReadMessageId = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.lastReadMessageId !== undefined && args.lastReadMessageId !== null) {
      this.lastReadMessageId = args.lastReadMessageId;
    }
  }
};
LastReadMessageId.prototype = {};
LastReadMessageId.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.lastReadMessageId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LastReadMessageId.prototype.write = function(output) {
  output.writeStructBegin('LastReadMessageId');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.lastReadMessageId !== null && this.lastReadMessageId !== undefined) {
    output.writeFieldBegin('lastReadMessageId', Thrift.Type.STRING, 2);
    output.writeString(this.lastReadMessageId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LastReadMessageIds = module.exports.LastReadMessageIds = function(args) {
  this.chatId = null;
  this.lastReadMessageIds = null;
  if (args) {
    if (args.chatId !== undefined && args.chatId !== null) {
      this.chatId = args.chatId;
    }
    if (args.lastReadMessageIds !== undefined && args.lastReadMessageIds !== null) {
      this.lastReadMessageIds = Thrift.copyList(args.lastReadMessageIds, [ttypes.LastReadMessageId]);
    }
  }
};
LastReadMessageIds.prototype = {};
LastReadMessageIds.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.chatId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size184 = 0;
        var _rtmp3188;
        this.lastReadMessageIds = [];
        var _etype187 = 0;
        _rtmp3188 = input.readListBegin();
        _etype187 = _rtmp3188.etype;
        _size184 = _rtmp3188.size;
        for (var _i189 = 0; _i189 < _size184; ++_i189)
        {
          var elem190 = null;
          elem190 = new ttypes.LastReadMessageId();
          elem190.read(input);
          this.lastReadMessageIds.push(elem190);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LastReadMessageIds.prototype.write = function(output) {
  output.writeStructBegin('LastReadMessageIds');
  if (this.chatId !== null && this.chatId !== undefined) {
    output.writeFieldBegin('chatId', Thrift.Type.STRING, 1);
    output.writeString(this.chatId);
    output.writeFieldEnd();
  }
  if (this.lastReadMessageIds !== null && this.lastReadMessageIds !== undefined) {
    output.writeFieldBegin('lastReadMessageIds', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.lastReadMessageIds.length);
    for (var iter191 in this.lastReadMessageIds)
    {
      if (this.lastReadMessageIds.hasOwnProperty(iter191))
      {
        iter191 = this.lastReadMessageIds[iter191];
        iter191.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LoginRequest = module.exports.LoginRequest = function(args) {
  this.type = null;
  this.identityProvider = null;
  this.identifier = null;
  this.password = null;
  this.keepLoggedIn = null;
  this.accessLocation = null;
  this.systemName = null;
  this.certificate = null;
  this.verifier = null;
  this.secret = null;
  this.e2eeVersion = null;
  if (args) {
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.identityProvider !== undefined && args.identityProvider !== null) {
      this.identityProvider = args.identityProvider;
    }
    if (args.identifier !== undefined && args.identifier !== null) {
      this.identifier = args.identifier;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
    if (args.keepLoggedIn !== undefined && args.keepLoggedIn !== null) {
      this.keepLoggedIn = args.keepLoggedIn;
    }
    if (args.accessLocation !== undefined && args.accessLocation !== null) {
      this.accessLocation = args.accessLocation;
    }
    if (args.systemName !== undefined && args.systemName !== null) {
      this.systemName = args.systemName;
    }
    if (args.certificate !== undefined && args.certificate !== null) {
      this.certificate = args.certificate;
    }
    if (args.verifier !== undefined && args.verifier !== null) {
      this.verifier = args.verifier;
    }
    if (args.secret !== undefined && args.secret !== null) {
      this.secret = args.secret;
    }
    if (args.e2eeVersion !== undefined && args.e2eeVersion !== null) {
      this.e2eeVersion = args.e2eeVersion;
    }
  }
};
LoginRequest.prototype = {};
LoginRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.identityProvider = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.identifier = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.keepLoggedIn = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.accessLocation = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.systemName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.certificate = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.verifier = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.secret = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.e2eeVersion = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LoginRequest.prototype.write = function(output) {
  output.writeStructBegin('LoginRequest');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.identityProvider !== null && this.identityProvider !== undefined) {
    output.writeFieldBegin('identityProvider', Thrift.Type.I32, 2);
    output.writeI32(this.identityProvider);
    output.writeFieldEnd();
  }
  if (this.identifier !== null && this.identifier !== undefined) {
    output.writeFieldBegin('identifier', Thrift.Type.STRING, 3);
    output.writeString(this.identifier);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 4);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  if (this.keepLoggedIn !== null && this.keepLoggedIn !== undefined) {
    output.writeFieldBegin('keepLoggedIn', Thrift.Type.BOOL, 5);
    output.writeBool(this.keepLoggedIn);
    output.writeFieldEnd();
  }
  if (this.accessLocation !== null && this.accessLocation !== undefined) {
    output.writeFieldBegin('accessLocation', Thrift.Type.STRING, 6);
    output.writeString(this.accessLocation);
    output.writeFieldEnd();
  }
  if (this.systemName !== null && this.systemName !== undefined) {
    output.writeFieldBegin('systemName', Thrift.Type.STRING, 7);
    output.writeString(this.systemName);
    output.writeFieldEnd();
  }
  if (this.certificate !== null && this.certificate !== undefined) {
    output.writeFieldBegin('certificate', Thrift.Type.STRING, 8);
    output.writeString(this.certificate);
    output.writeFieldEnd();
  }
  if (this.verifier !== null && this.verifier !== undefined) {
    output.writeFieldBegin('verifier', Thrift.Type.STRING, 9);
    output.writeString(this.verifier);
    output.writeFieldEnd();
  }
  if (this.secret !== null && this.secret !== undefined) {
    output.writeFieldBegin('secret', Thrift.Type.STRING, 10);
    output.writeString(this.secret);
    output.writeFieldEnd();
  }
  if (this.e2eeVersion !== null && this.e2eeVersion !== undefined) {
    output.writeFieldBegin('e2eeVersion', Thrift.Type.I32, 11);
    output.writeI32(this.e2eeVersion);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LoginResult = module.exports.LoginResult = function(args) {
  this.authToken = null;
  this.certificate = null;
  this.verifier = null;
  this.pinCode = null;
  this.type = null;
  if (args) {
    if (args.authToken !== undefined && args.authToken !== null) {
      this.authToken = args.authToken;
    }
    if (args.certificate !== undefined && args.certificate !== null) {
      this.certificate = args.certificate;
    }
    if (args.verifier !== undefined && args.verifier !== null) {
      this.verifier = args.verifier;
    }
    if (args.pinCode !== undefined && args.pinCode !== null) {
      this.pinCode = args.pinCode;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
  }
};
LoginResult.prototype = {};
LoginResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.certificate = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.verifier = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.pinCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LoginResult.prototype.write = function(output) {
  output.writeStructBegin('LoginResult');
  if (this.authToken !== null && this.authToken !== undefined) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.certificate !== null && this.certificate !== undefined) {
    output.writeFieldBegin('certificate', Thrift.Type.STRING, 2);
    output.writeString(this.certificate);
    output.writeFieldEnd();
  }
  if (this.verifier !== null && this.verifier !== undefined) {
    output.writeFieldBegin('verifier', Thrift.Type.STRING, 3);
    output.writeString(this.verifier);
    output.writeFieldEnd();
  }
  if (this.pinCode !== null && this.pinCode !== undefined) {
    output.writeFieldBegin('pinCode', Thrift.Type.STRING, 4);
    output.writeString(this.pinCode);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 5);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LoginSession = module.exports.LoginSession = function(args) {
  this.tokenKey = null;
  this.expirationTime = null;
  this.applicationType = null;
  this.systemName = null;
  this.accessLocation = null;
  if (args) {
    if (args.tokenKey !== undefined && args.tokenKey !== null) {
      this.tokenKey = args.tokenKey;
    }
    if (args.expirationTime !== undefined && args.expirationTime !== null) {
      this.expirationTime = args.expirationTime;
    }
    if (args.applicationType !== undefined && args.applicationType !== null) {
      this.applicationType = args.applicationType;
    }
    if (args.systemName !== undefined && args.systemName !== null) {
      this.systemName = args.systemName;
    }
    if (args.accessLocation !== undefined && args.accessLocation !== null) {
      this.accessLocation = args.accessLocation;
    }
  }
};
LoginSession.prototype = {};
LoginSession.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.tokenKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.expirationTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.applicationType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.systemName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.accessLocation = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LoginSession.prototype.write = function(output) {
  output.writeStructBegin('LoginSession');
  if (this.tokenKey !== null && this.tokenKey !== undefined) {
    output.writeFieldBegin('tokenKey', Thrift.Type.STRING, 1);
    output.writeString(this.tokenKey);
    output.writeFieldEnd();
  }
  if (this.expirationTime !== null && this.expirationTime !== undefined) {
    output.writeFieldBegin('expirationTime', Thrift.Type.I64, 3);
    output.writeI64(this.expirationTime);
    output.writeFieldEnd();
  }
  if (this.applicationType !== null && this.applicationType !== undefined) {
    output.writeFieldBegin('applicationType', Thrift.Type.I32, 11);
    output.writeI32(this.applicationType);
    output.writeFieldEnd();
  }
  if (this.systemName !== null && this.systemName !== undefined) {
    output.writeFieldBegin('systemName', Thrift.Type.STRING, 12);
    output.writeString(this.systemName);
    output.writeFieldEnd();
  }
  if (this.accessLocation !== null && this.accessLocation !== undefined) {
    output.writeFieldBegin('accessLocation', Thrift.Type.STRING, 22);
    output.writeString(this.accessLocation);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Message = module.exports.Message = function(args) {
  this.from_ = null;
  this.to = null;
  this.toType = null;
  this.id = null;
  this.createdTime = null;
  this.deliveredTime = null;
  this.text = null;
  this.location = null;
  this.hasContent = null;
  this.contentType = null;
  this.contentPreview = null;
  this.contentMetadata = null;
  if (args) {
    if (args.from_ !== undefined && args.from_ !== null) {
      this.from_ = args.from_;
    }
    if (args.to !== undefined && args.to !== null) {
      this.to = args.to;
    }
    if (args.toType !== undefined && args.toType !== null) {
      this.toType = args.toType;
    }
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.deliveredTime !== undefined && args.deliveredTime !== null) {
      this.deliveredTime = args.deliveredTime;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
    if (args.location !== undefined && args.location !== null) {
      this.location = new ttypes.Location(args.location);
    }
    if (args.hasContent !== undefined && args.hasContent !== null) {
      this.hasContent = args.hasContent;
    }
    if (args.contentType !== undefined && args.contentType !== null) {
      this.contentType = args.contentType;
    }
    if (args.contentPreview !== undefined && args.contentPreview !== null) {
      this.contentPreview = args.contentPreview;
    }
    if (args.contentMetadata !== undefined && args.contentMetadata !== null) {
      this.contentMetadata = Thrift.copyMap(args.contentMetadata, [null]);
    }
  }
};
Message.prototype = {};
Message.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.from_ = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.to = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.toType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.deliveredTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRUCT) {
        this.location = new ttypes.Location();
        this.location.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.BOOL) {
        this.hasContent = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.I32) {
        this.contentType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.contentPreview = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.MAP) {
        var _size192 = 0;
        var _rtmp3196;
        this.contentMetadata = {};
        var _ktype193 = 0;
        var _vtype194 = 0;
        _rtmp3196 = input.readMapBegin();
        _ktype193 = _rtmp3196.ktype;
        _vtype194 = _rtmp3196.vtype;
        _size192 = _rtmp3196.size;
        for (var _i197 = 0; _i197 < _size192; ++_i197)
        {
          var key198 = null;
          var val199 = null;
          key198 = input.readString();
          val199 = input.readString();
          this.contentMetadata[key198] = val199;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Message.prototype.write = function(output) {
  output.writeStructBegin('Message');
  if (this.from_ !== null && this.from_ !== undefined) {
    output.writeFieldBegin('from_', Thrift.Type.STRING, 1);
    output.writeString(this.from_);
    output.writeFieldEnd();
  }
  if (this.to !== null && this.to !== undefined) {
    output.writeFieldBegin('to', Thrift.Type.STRING, 2);
    output.writeString(this.to);
    output.writeFieldEnd();
  }
  if (this.toType !== null && this.toType !== undefined) {
    output.writeFieldBegin('toType', Thrift.Type.I32, 3);
    output.writeI32(this.toType);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 4);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 5);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.deliveredTime !== null && this.deliveredTime !== undefined) {
    output.writeFieldBegin('deliveredTime', Thrift.Type.I64, 6);
    output.writeI64(this.deliveredTime);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 10);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  if (this.location !== null && this.location !== undefined) {
    output.writeFieldBegin('location', Thrift.Type.STRUCT, 11);
    this.location.write(output);
    output.writeFieldEnd();
  }
  if (this.hasContent !== null && this.hasContent !== undefined) {
    output.writeFieldBegin('hasContent', Thrift.Type.BOOL, 14);
    output.writeBool(this.hasContent);
    output.writeFieldEnd();
  }
  if (this.contentType !== null && this.contentType !== undefined) {
    output.writeFieldBegin('contentType', Thrift.Type.I32, 15);
    output.writeI32(this.contentType);
    output.writeFieldEnd();
  }
  if (this.contentPreview !== null && this.contentPreview !== undefined) {
    output.writeFieldBegin('contentPreview', Thrift.Type.STRING, 17);
    output.writeBinary(this.contentPreview);
    output.writeFieldEnd();
  }
  if (this.contentMetadata !== null && this.contentMetadata !== undefined) {
    output.writeFieldBegin('contentMetadata', Thrift.Type.MAP, 18);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.contentMetadata));
    for (var kiter200 in this.contentMetadata)
    {
      if (this.contentMetadata.hasOwnProperty(kiter200))
      {
        var viter201 = this.contentMetadata[kiter200];
        output.writeString(kiter200);
        output.writeString(viter201);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MessageOperation = module.exports.MessageOperation = function(args) {
  this.revision = null;
  this.createdTime = null;
  this.type = null;
  this.reqSeq = null;
  this.status = null;
  this.param1 = null;
  this.param2 = null;
  this.param3 = null;
  this.message = null;
  if (args) {
    if (args.revision !== undefined && args.revision !== null) {
      this.revision = args.revision;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.reqSeq !== undefined && args.reqSeq !== null) {
      this.reqSeq = args.reqSeq;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.param1 !== undefined && args.param1 !== null) {
      this.param1 = args.param1;
    }
    if (args.param2 !== undefined && args.param2 !== null) {
      this.param2 = args.param2;
    }
    if (args.param3 !== undefined && args.param3 !== null) {
      this.param3 = args.param3;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = new ttypes.Message(args.message);
    }
  }
};
MessageOperation.prototype = {};
MessageOperation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.revision = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.reqSeq = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.param1 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.param2 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.param3 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.STRUCT) {
        this.message = new ttypes.Message();
        this.message.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MessageOperation.prototype.write = function(output) {
  output.writeStructBegin('MessageOperation');
  if (this.revision !== null && this.revision !== undefined) {
    output.writeFieldBegin('revision', Thrift.Type.I64, 1);
    output.writeI64(this.revision);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 2);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.reqSeq !== null && this.reqSeq !== undefined) {
    output.writeFieldBegin('reqSeq', Thrift.Type.I32, 4);
    output.writeI32(this.reqSeq);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 5);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.param1 !== null && this.param1 !== undefined) {
    output.writeFieldBegin('param1', Thrift.Type.STRING, 10);
    output.writeString(this.param1);
    output.writeFieldEnd();
  }
  if (this.param2 !== null && this.param2 !== undefined) {
    output.writeFieldBegin('param2', Thrift.Type.STRING, 11);
    output.writeString(this.param2);
    output.writeFieldEnd();
  }
  if (this.param3 !== null && this.param3 !== undefined) {
    output.writeFieldBegin('param3', Thrift.Type.STRING, 12);
    output.writeString(this.param3);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRUCT, 20);
    this.message.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MessageOperations = module.exports.MessageOperations = function(args) {
  this.operations = null;
  this.endFlag = null;
  if (args) {
    if (args.operations !== undefined && args.operations !== null) {
      this.operations = Thrift.copyList(args.operations, [ttypes.MessageOperation]);
    }
    if (args.endFlag !== undefined && args.endFlag !== null) {
      this.endFlag = args.endFlag;
    }
  }
};
MessageOperations.prototype = {};
MessageOperations.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size202 = 0;
        var _rtmp3206;
        this.operations = [];
        var _etype205 = 0;
        _rtmp3206 = input.readListBegin();
        _etype205 = _rtmp3206.etype;
        _size202 = _rtmp3206.size;
        for (var _i207 = 0; _i207 < _size202; ++_i207)
        {
          var elem208 = null;
          elem208 = new ttypes.MessageOperation();
          elem208.read(input);
          this.operations.push(elem208);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.endFlag = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MessageOperations.prototype.write = function(output) {
  output.writeStructBegin('MessageOperations');
  if (this.operations !== null && this.operations !== undefined) {
    output.writeFieldBegin('operations', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.operations.length);
    for (var iter209 in this.operations)
    {
      if (this.operations.hasOwnProperty(iter209))
      {
        iter209 = this.operations[iter209];
        iter209.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.endFlag !== null && this.endFlag !== undefined) {
    output.writeFieldBegin('endFlag', Thrift.Type.BOOL, 2);
    output.writeBool(this.endFlag);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MetaProfile = module.exports.MetaProfile = function(args) {
  this.createTime = null;
  this.regionCode = null;
  this.identities = null;
  if (args) {
    if (args.createTime !== undefined && args.createTime !== null) {
      this.createTime = args.createTime;
    }
    if (args.regionCode !== undefined && args.regionCode !== null) {
      this.regionCode = args.regionCode;
    }
    if (args.identities !== undefined && args.identities !== null) {
      this.identities = Thrift.copyMap(args.identities, [null]);
    }
  }
};
MetaProfile.prototype = {};
MetaProfile.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.createTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.regionCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size210 = 0;
        var _rtmp3214;
        this.identities = {};
        var _ktype211 = 0;
        var _vtype212 = 0;
        _rtmp3214 = input.readMapBegin();
        _ktype211 = _rtmp3214.ktype;
        _vtype212 = _rtmp3214.vtype;
        _size210 = _rtmp3214.size;
        for (var _i215 = 0; _i215 < _size210; ++_i215)
        {
          var key216 = null;
          var val217 = null;
          key216 = input.readI32();
          val217 = input.readString();
          this.identities[key216] = val217;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MetaProfile.prototype.write = function(output) {
  output.writeStructBegin('MetaProfile');
  if (this.createTime !== null && this.createTime !== undefined) {
    output.writeFieldBegin('createTime', Thrift.Type.I64, 1);
    output.writeI64(this.createTime);
    output.writeFieldEnd();
  }
  if (this.regionCode !== null && this.regionCode !== undefined) {
    output.writeFieldBegin('regionCode', Thrift.Type.STRING, 2);
    output.writeString(this.regionCode);
    output.writeFieldEnd();
  }
  if (this.identities !== null && this.identities !== undefined) {
    output.writeFieldBegin('identities', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.I32, Thrift.Type.STRING, Thrift.objectLength(this.identities));
    for (var kiter218 in this.identities)
    {
      if (this.identities.hasOwnProperty(kiter218))
      {
        var viter219 = this.identities[kiter218];
        output.writeI32(kiter218);
        output.writeString(viter219);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationItem = module.exports.NotificationItem = function(args) {
  this.id = null;
  this.from_ = null;
  this.to = null;
  this.fromChannel = null;
  this.toChannel = null;
  this.revision = null;
  this.createdTime = null;
  this.content = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.from_ !== undefined && args.from_ !== null) {
      this.from_ = args.from_;
    }
    if (args.to !== undefined && args.to !== null) {
      this.to = args.to;
    }
    if (args.fromChannel !== undefined && args.fromChannel !== null) {
      this.fromChannel = args.fromChannel;
    }
    if (args.toChannel !== undefined && args.toChannel !== null) {
      this.toChannel = args.toChannel;
    }
    if (args.revision !== undefined && args.revision !== null) {
      this.revision = args.revision;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = Thrift.copyMap(args.content, [null]);
    }
  }
};
NotificationItem.prototype = {};
NotificationItem.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.from_ = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.to = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.fromChannel = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.toChannel = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.revision = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.MAP) {
        var _size220 = 0;
        var _rtmp3224;
        this.content = {};
        var _ktype221 = 0;
        var _vtype222 = 0;
        _rtmp3224 = input.readMapBegin();
        _ktype221 = _rtmp3224.ktype;
        _vtype222 = _rtmp3224.vtype;
        _size220 = _rtmp3224.size;
        for (var _i225 = 0; _i225 < _size220; ++_i225)
        {
          var key226 = null;
          var val227 = null;
          key226 = input.readString();
          val227 = input.readString();
          this.content[key226] = val227;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NotificationItem.prototype.write = function(output) {
  output.writeStructBegin('NotificationItem');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.from_ !== null && this.from_ !== undefined) {
    output.writeFieldBegin('from_', Thrift.Type.STRING, 2);
    output.writeString(this.from_);
    output.writeFieldEnd();
  }
  if (this.to !== null && this.to !== undefined) {
    output.writeFieldBegin('to', Thrift.Type.STRING, 3);
    output.writeString(this.to);
    output.writeFieldEnd();
  }
  if (this.fromChannel !== null && this.fromChannel !== undefined) {
    output.writeFieldBegin('fromChannel', Thrift.Type.STRING, 4);
    output.writeString(this.fromChannel);
    output.writeFieldEnd();
  }
  if (this.toChannel !== null && this.toChannel !== undefined) {
    output.writeFieldBegin('toChannel', Thrift.Type.STRING, 5);
    output.writeString(this.toChannel);
    output.writeFieldEnd();
  }
  if (this.revision !== null && this.revision !== undefined) {
    output.writeFieldBegin('revision', Thrift.Type.I64, 7);
    output.writeI64(this.revision);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 8);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.MAP, 9);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.content));
    for (var kiter228 in this.content)
    {
      if (this.content.hasOwnProperty(kiter228))
      {
        var viter229 = this.content[kiter228];
        output.writeString(kiter228);
        output.writeString(viter229);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationFetchResult = module.exports.NotificationFetchResult = function(args) {
  this.fetchMode = null;
  this.itemList = null;
  if (args) {
    if (args.fetchMode !== undefined && args.fetchMode !== null) {
      this.fetchMode = args.fetchMode;
    }
    if (args.itemList !== undefined && args.itemList !== null) {
      this.itemList = Thrift.copyList(args.itemList, [ttypes.NotificationItem]);
    }
  }
};
NotificationFetchResult.prototype = {};
NotificationFetchResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.fetchMode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size230 = 0;
        var _rtmp3234;
        this.itemList = [];
        var _etype233 = 0;
        _rtmp3234 = input.readListBegin();
        _etype233 = _rtmp3234.etype;
        _size230 = _rtmp3234.size;
        for (var _i235 = 0; _i235 < _size230; ++_i235)
        {
          var elem236 = null;
          elem236 = new ttypes.NotificationItem();
          elem236.read(input);
          this.itemList.push(elem236);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NotificationFetchResult.prototype.write = function(output) {
  output.writeStructBegin('NotificationFetchResult');
  if (this.fetchMode !== null && this.fetchMode !== undefined) {
    output.writeFieldBegin('fetchMode', Thrift.Type.I32, 1);
    output.writeI32(this.fetchMode);
    output.writeFieldEnd();
  }
  if (this.itemList !== null && this.itemList !== undefined) {
    output.writeFieldBegin('itemList', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.itemList.length);
    for (var iter237 in this.itemList)
    {
      if (this.itemList.hasOwnProperty(iter237))
      {
        iter237 = this.itemList[iter237];
        iter237.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Operation = module.exports.Operation = function(args) {
  this.revision = null;
  this.createdTime = null;
  this.type = null;
  this.reqSeq = null;
  this.checksum = null;
  this.status = null;
  this.param1 = null;
  this.param2 = null;
  this.param3 = null;
  this.message = null;
  if (args) {
    if (args.revision !== undefined && args.revision !== null) {
      this.revision = args.revision;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.reqSeq !== undefined && args.reqSeq !== null) {
      this.reqSeq = args.reqSeq;
    }
    if (args.checksum !== undefined && args.checksum !== null) {
      this.checksum = args.checksum;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.param1 !== undefined && args.param1 !== null) {
      this.param1 = args.param1;
    }
    if (args.param2 !== undefined && args.param2 !== null) {
      this.param2 = args.param2;
    }
    if (args.param3 !== undefined && args.param3 !== null) {
      this.param3 = args.param3;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = new ttypes.Message(args.message);
    }
  }
};
Operation.prototype = {};
Operation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.revision = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.reqSeq = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.checksum = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.param1 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.param2 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.param3 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.STRUCT) {
        this.message = new ttypes.Message();
        this.message.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Operation.prototype.write = function(output) {
  output.writeStructBegin('Operation');
  if (this.revision !== null && this.revision !== undefined) {
    output.writeFieldBegin('revision', Thrift.Type.I64, 1);
    output.writeI64(this.revision);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 2);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.reqSeq !== null && this.reqSeq !== undefined) {
    output.writeFieldBegin('reqSeq', Thrift.Type.I32, 4);
    output.writeI32(this.reqSeq);
    output.writeFieldEnd();
  }
  if (this.checksum !== null && this.checksum !== undefined) {
    output.writeFieldBegin('checksum', Thrift.Type.STRING, 5);
    output.writeString(this.checksum);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 7);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.param1 !== null && this.param1 !== undefined) {
    output.writeFieldBegin('param1', Thrift.Type.STRING, 10);
    output.writeString(this.param1);
    output.writeFieldEnd();
  }
  if (this.param2 !== null && this.param2 !== undefined) {
    output.writeFieldBegin('param2', Thrift.Type.STRING, 11);
    output.writeString(this.param2);
    output.writeFieldEnd();
  }
  if (this.param3 !== null && this.param3 !== undefined) {
    output.writeFieldBegin('param3', Thrift.Type.STRING, 12);
    output.writeString(this.param3);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRUCT, 20);
    this.message.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PaymentReservation = module.exports.PaymentReservation = function(args) {
  this.receiverMid = null;
  this.productId = null;
  this.language = null;
  this.location = null;
  this.currency = null;
  this.price = null;
  this.appStoreCode = null;
  this.messageText = null;
  this.messageTemplate = null;
  this.packageId = null;
  if (args) {
    if (args.receiverMid !== undefined && args.receiverMid !== null) {
      this.receiverMid = args.receiverMid;
    }
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.location !== undefined && args.location !== null) {
      this.location = args.location;
    }
    if (args.currency !== undefined && args.currency !== null) {
      this.currency = args.currency;
    }
    if (args.price !== undefined && args.price !== null) {
      this.price = args.price;
    }
    if (args.appStoreCode !== undefined && args.appStoreCode !== null) {
      this.appStoreCode = args.appStoreCode;
    }
    if (args.messageText !== undefined && args.messageText !== null) {
      this.messageText = args.messageText;
    }
    if (args.messageTemplate !== undefined && args.messageTemplate !== null) {
      this.messageTemplate = args.messageTemplate;
    }
    if (args.packageId !== undefined && args.packageId !== null) {
      this.packageId = args.packageId;
    }
  }
};
PaymentReservation.prototype = {};
PaymentReservation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.receiverMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.location = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.currency = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.price = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.appStoreCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.messageText = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.messageTemplate = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I64) {
        this.packageId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PaymentReservation.prototype.write = function(output) {
  output.writeStructBegin('PaymentReservation');
  if (this.receiverMid !== null && this.receiverMid !== undefined) {
    output.writeFieldBegin('receiverMid', Thrift.Type.STRING, 1);
    output.writeString(this.receiverMid);
    output.writeFieldEnd();
  }
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 2);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 3);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.location !== null && this.location !== undefined) {
    output.writeFieldBegin('location', Thrift.Type.STRING, 4);
    output.writeString(this.location);
    output.writeFieldEnd();
  }
  if (this.currency !== null && this.currency !== undefined) {
    output.writeFieldBegin('currency', Thrift.Type.STRING, 5);
    output.writeString(this.currency);
    output.writeFieldEnd();
  }
  if (this.price !== null && this.price !== undefined) {
    output.writeFieldBegin('price', Thrift.Type.STRING, 6);
    output.writeString(this.price);
    output.writeFieldEnd();
  }
  if (this.appStoreCode !== null && this.appStoreCode !== undefined) {
    output.writeFieldBegin('appStoreCode', Thrift.Type.I32, 7);
    output.writeI32(this.appStoreCode);
    output.writeFieldEnd();
  }
  if (this.messageText !== null && this.messageText !== undefined) {
    output.writeFieldBegin('messageText', Thrift.Type.STRING, 8);
    output.writeString(this.messageText);
    output.writeFieldEnd();
  }
  if (this.messageTemplate !== null && this.messageTemplate !== undefined) {
    output.writeFieldBegin('messageTemplate', Thrift.Type.I32, 9);
    output.writeI32(this.messageTemplate);
    output.writeFieldEnd();
  }
  if (this.packageId !== null && this.packageId !== undefined) {
    output.writeFieldBegin('packageId', Thrift.Type.I64, 10);
    output.writeI64(this.packageId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PaymentReservationResult = module.exports.PaymentReservationResult = function(args) {
  this.orderId = null;
  this.confirmUrl = null;
  this.extras = null;
  if (args) {
    if (args.orderId !== undefined && args.orderId !== null) {
      this.orderId = args.orderId;
    }
    if (args.confirmUrl !== undefined && args.confirmUrl !== null) {
      this.confirmUrl = args.confirmUrl;
    }
    if (args.extras !== undefined && args.extras !== null) {
      this.extras = Thrift.copyMap(args.extras, [null]);
    }
  }
};
PaymentReservationResult.prototype = {};
PaymentReservationResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.orderId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.confirmUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size238 = 0;
        var _rtmp3242;
        this.extras = {};
        var _ktype239 = 0;
        var _vtype240 = 0;
        _rtmp3242 = input.readMapBegin();
        _ktype239 = _rtmp3242.ktype;
        _vtype240 = _rtmp3242.vtype;
        _size238 = _rtmp3242.size;
        for (var _i243 = 0; _i243 < _size238; ++_i243)
        {
          var key244 = null;
          var val245 = null;
          key244 = input.readString();
          val245 = input.readString();
          this.extras[key244] = val245;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PaymentReservationResult.prototype.write = function(output) {
  output.writeStructBegin('PaymentReservationResult');
  if (this.orderId !== null && this.orderId !== undefined) {
    output.writeFieldBegin('orderId', Thrift.Type.STRING, 1);
    output.writeString(this.orderId);
    output.writeFieldEnd();
  }
  if (this.confirmUrl !== null && this.confirmUrl !== undefined) {
    output.writeFieldBegin('confirmUrl', Thrift.Type.STRING, 2);
    output.writeString(this.confirmUrl);
    output.writeFieldEnd();
  }
  if (this.extras !== null && this.extras !== undefined) {
    output.writeFieldBegin('extras', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.extras));
    for (var kiter246 in this.extras)
    {
      if (this.extras.hasOwnProperty(kiter246))
      {
        var viter247 = this.extras[kiter246];
        output.writeString(kiter246);
        output.writeString(viter247);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Product = module.exports.Product = function(args) {
  this.productId = null;
  this.packageId = null;
  this.version = null;
  this.authorName = null;
  this.onSale = null;
  this.validDays = null;
  this.saleType = null;
  this.copyright = null;
  this.title = null;
  this.descriptionText = null;
  this.shopOrderId = null;
  this.fromMid = null;
  this.toMid = null;
  this.validUntil = null;
  this.priceTier = null;
  this.price = null;
  this.currency = null;
  this.currencySymbol = null;
  this.paymentType = null;
  this.createDate = null;
  this.ownFlag = null;
  this.eventType = null;
  this.urlSchema = null;
  this.downloadUrl = null;
  this.buddyMid = null;
  this.publishSince = null;
  this.newFlag = null;
  this.missionFlag = null;
  if (args) {
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.packageId !== undefined && args.packageId !== null) {
      this.packageId = args.packageId;
    }
    if (args.version !== undefined && args.version !== null) {
      this.version = args.version;
    }
    if (args.authorName !== undefined && args.authorName !== null) {
      this.authorName = args.authorName;
    }
    if (args.onSale !== undefined && args.onSale !== null) {
      this.onSale = args.onSale;
    }
    if (args.validDays !== undefined && args.validDays !== null) {
      this.validDays = args.validDays;
    }
    if (args.saleType !== undefined && args.saleType !== null) {
      this.saleType = args.saleType;
    }
    if (args.copyright !== undefined && args.copyright !== null) {
      this.copyright = args.copyright;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.descriptionText !== undefined && args.descriptionText !== null) {
      this.descriptionText = args.descriptionText;
    }
    if (args.shopOrderId !== undefined && args.shopOrderId !== null) {
      this.shopOrderId = args.shopOrderId;
    }
    if (args.fromMid !== undefined && args.fromMid !== null) {
      this.fromMid = args.fromMid;
    }
    if (args.toMid !== undefined && args.toMid !== null) {
      this.toMid = args.toMid;
    }
    if (args.validUntil !== undefined && args.validUntil !== null) {
      this.validUntil = args.validUntil;
    }
    if (args.priceTier !== undefined && args.priceTier !== null) {
      this.priceTier = args.priceTier;
    }
    if (args.price !== undefined && args.price !== null) {
      this.price = args.price;
    }
    if (args.currency !== undefined && args.currency !== null) {
      this.currency = args.currency;
    }
    if (args.currencySymbol !== undefined && args.currencySymbol !== null) {
      this.currencySymbol = args.currencySymbol;
    }
    if (args.paymentType !== undefined && args.paymentType !== null) {
      this.paymentType = args.paymentType;
    }
    if (args.createDate !== undefined && args.createDate !== null) {
      this.createDate = args.createDate;
    }
    if (args.ownFlag !== undefined && args.ownFlag !== null) {
      this.ownFlag = args.ownFlag;
    }
    if (args.eventType !== undefined && args.eventType !== null) {
      this.eventType = args.eventType;
    }
    if (args.urlSchema !== undefined && args.urlSchema !== null) {
      this.urlSchema = args.urlSchema;
    }
    if (args.downloadUrl !== undefined && args.downloadUrl !== null) {
      this.downloadUrl = args.downloadUrl;
    }
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
    if (args.publishSince !== undefined && args.publishSince !== null) {
      this.publishSince = args.publishSince;
    }
    if (args.newFlag !== undefined && args.newFlag !== null) {
      this.newFlag = args.newFlag;
    }
    if (args.missionFlag !== undefined && args.missionFlag !== null) {
      this.missionFlag = args.missionFlag;
    }
  }
};
Product.prototype = {};
Product.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.packageId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.version = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.authorName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.onSale = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.validDays = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.saleType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.copyright = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.descriptionText = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.shopOrderId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.fromMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.toMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.I64) {
        this.validUntil = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.I32) {
        this.priceTier = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.STRING) {
        this.price = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.currency = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.STRING) {
        this.currencySymbol = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.I32) {
        this.paymentType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.I64) {
        this.createDate = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.BOOL) {
        this.ownFlag = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.I32) {
        this.eventType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 23:
      if (ftype == Thrift.Type.STRING) {
        this.urlSchema = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 24:
      if (ftype == Thrift.Type.STRING) {
        this.downloadUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 25:
      if (ftype == Thrift.Type.STRING) {
        this.buddyMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 26:
      if (ftype == Thrift.Type.I64) {
        this.publishSince = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 27:
      if (ftype == Thrift.Type.BOOL) {
        this.newFlag = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 28:
      if (ftype == Thrift.Type.BOOL) {
        this.missionFlag = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Product.prototype.write = function(output) {
  output.writeStructBegin('Product');
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 1);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.packageId !== null && this.packageId !== undefined) {
    output.writeFieldBegin('packageId', Thrift.Type.I64, 2);
    output.writeI64(this.packageId);
    output.writeFieldEnd();
  }
  if (this.version !== null && this.version !== undefined) {
    output.writeFieldBegin('version', Thrift.Type.I32, 3);
    output.writeI32(this.version);
    output.writeFieldEnd();
  }
  if (this.authorName !== null && this.authorName !== undefined) {
    output.writeFieldBegin('authorName', Thrift.Type.STRING, 4);
    output.writeString(this.authorName);
    output.writeFieldEnd();
  }
  if (this.onSale !== null && this.onSale !== undefined) {
    output.writeFieldBegin('onSale', Thrift.Type.BOOL, 5);
    output.writeBool(this.onSale);
    output.writeFieldEnd();
  }
  if (this.validDays !== null && this.validDays !== undefined) {
    output.writeFieldBegin('validDays', Thrift.Type.I32, 6);
    output.writeI32(this.validDays);
    output.writeFieldEnd();
  }
  if (this.saleType !== null && this.saleType !== undefined) {
    output.writeFieldBegin('saleType', Thrift.Type.I32, 7);
    output.writeI32(this.saleType);
    output.writeFieldEnd();
  }
  if (this.copyright !== null && this.copyright !== undefined) {
    output.writeFieldBegin('copyright', Thrift.Type.STRING, 8);
    output.writeString(this.copyright);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 9);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.descriptionText !== null && this.descriptionText !== undefined) {
    output.writeFieldBegin('descriptionText', Thrift.Type.STRING, 10);
    output.writeString(this.descriptionText);
    output.writeFieldEnd();
  }
  if (this.shopOrderId !== null && this.shopOrderId !== undefined) {
    output.writeFieldBegin('shopOrderId', Thrift.Type.I64, 11);
    output.writeI64(this.shopOrderId);
    output.writeFieldEnd();
  }
  if (this.fromMid !== null && this.fromMid !== undefined) {
    output.writeFieldBegin('fromMid', Thrift.Type.STRING, 12);
    output.writeString(this.fromMid);
    output.writeFieldEnd();
  }
  if (this.toMid !== null && this.toMid !== undefined) {
    output.writeFieldBegin('toMid', Thrift.Type.STRING, 13);
    output.writeString(this.toMid);
    output.writeFieldEnd();
  }
  if (this.validUntil !== null && this.validUntil !== undefined) {
    output.writeFieldBegin('validUntil', Thrift.Type.I64, 14);
    output.writeI64(this.validUntil);
    output.writeFieldEnd();
  }
  if (this.priceTier !== null && this.priceTier !== undefined) {
    output.writeFieldBegin('priceTier', Thrift.Type.I32, 15);
    output.writeI32(this.priceTier);
    output.writeFieldEnd();
  }
  if (this.price !== null && this.price !== undefined) {
    output.writeFieldBegin('price', Thrift.Type.STRING, 16);
    output.writeString(this.price);
    output.writeFieldEnd();
  }
  if (this.currency !== null && this.currency !== undefined) {
    output.writeFieldBegin('currency', Thrift.Type.STRING, 17);
    output.writeString(this.currency);
    output.writeFieldEnd();
  }
  if (this.currencySymbol !== null && this.currencySymbol !== undefined) {
    output.writeFieldBegin('currencySymbol', Thrift.Type.STRING, 18);
    output.writeString(this.currencySymbol);
    output.writeFieldEnd();
  }
  if (this.paymentType !== null && this.paymentType !== undefined) {
    output.writeFieldBegin('paymentType', Thrift.Type.I32, 19);
    output.writeI32(this.paymentType);
    output.writeFieldEnd();
  }
  if (this.createDate !== null && this.createDate !== undefined) {
    output.writeFieldBegin('createDate', Thrift.Type.I64, 20);
    output.writeI64(this.createDate);
    output.writeFieldEnd();
  }
  if (this.ownFlag !== null && this.ownFlag !== undefined) {
    output.writeFieldBegin('ownFlag', Thrift.Type.BOOL, 21);
    output.writeBool(this.ownFlag);
    output.writeFieldEnd();
  }
  if (this.eventType !== null && this.eventType !== undefined) {
    output.writeFieldBegin('eventType', Thrift.Type.I32, 22);
    output.writeI32(this.eventType);
    output.writeFieldEnd();
  }
  if (this.urlSchema !== null && this.urlSchema !== undefined) {
    output.writeFieldBegin('urlSchema', Thrift.Type.STRING, 23);
    output.writeString(this.urlSchema);
    output.writeFieldEnd();
  }
  if (this.downloadUrl !== null && this.downloadUrl !== undefined) {
    output.writeFieldBegin('downloadUrl', Thrift.Type.STRING, 24);
    output.writeString(this.downloadUrl);
    output.writeFieldEnd();
  }
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 25);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  if (this.publishSince !== null && this.publishSince !== undefined) {
    output.writeFieldBegin('publishSince', Thrift.Type.I64, 26);
    output.writeI64(this.publishSince);
    output.writeFieldEnd();
  }
  if (this.newFlag !== null && this.newFlag !== undefined) {
    output.writeFieldBegin('newFlag', Thrift.Type.BOOL, 27);
    output.writeBool(this.newFlag);
    output.writeFieldEnd();
  }
  if (this.missionFlag !== null && this.missionFlag !== undefined) {
    output.writeFieldBegin('missionFlag', Thrift.Type.BOOL, 28);
    output.writeBool(this.missionFlag);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ProductList = module.exports.ProductList = function(args) {
  this.hasNext = null;
  this.bannerSequence = null;
  this.bannerTargetType = null;
  this.bannerTargetPath = null;
  this.productList = null;
  this.bannerLang = null;
  if (args) {
    if (args.hasNext !== undefined && args.hasNext !== null) {
      this.hasNext = args.hasNext;
    }
    if (args.bannerSequence !== undefined && args.bannerSequence !== null) {
      this.bannerSequence = args.bannerSequence;
    }
    if (args.bannerTargetType !== undefined && args.bannerTargetType !== null) {
      this.bannerTargetType = args.bannerTargetType;
    }
    if (args.bannerTargetPath !== undefined && args.bannerTargetPath !== null) {
      this.bannerTargetPath = args.bannerTargetPath;
    }
    if (args.productList !== undefined && args.productList !== null) {
      this.productList = Thrift.copyList(args.productList, [ttypes.Product]);
    }
    if (args.bannerLang !== undefined && args.bannerLang !== null) {
      this.bannerLang = args.bannerLang;
    }
  }
};
ProductList.prototype = {};
ProductList.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.hasNext = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.bannerSequence = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.bannerTargetType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.bannerTargetPath = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.LIST) {
        var _size248 = 0;
        var _rtmp3252;
        this.productList = [];
        var _etype251 = 0;
        _rtmp3252 = input.readListBegin();
        _etype251 = _rtmp3252.etype;
        _size248 = _rtmp3252.size;
        for (var _i253 = 0; _i253 < _size248; ++_i253)
        {
          var elem254 = null;
          elem254 = new ttypes.Product();
          elem254.read(input);
          this.productList.push(elem254);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.bannerLang = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ProductList.prototype.write = function(output) {
  output.writeStructBegin('ProductList');
  if (this.hasNext !== null && this.hasNext !== undefined) {
    output.writeFieldBegin('hasNext', Thrift.Type.BOOL, 1);
    output.writeBool(this.hasNext);
    output.writeFieldEnd();
  }
  if (this.bannerSequence !== null && this.bannerSequence !== undefined) {
    output.writeFieldBegin('bannerSequence', Thrift.Type.I64, 4);
    output.writeI64(this.bannerSequence);
    output.writeFieldEnd();
  }
  if (this.bannerTargetType !== null && this.bannerTargetType !== undefined) {
    output.writeFieldBegin('bannerTargetType', Thrift.Type.I32, 5);
    output.writeI32(this.bannerTargetType);
    output.writeFieldEnd();
  }
  if (this.bannerTargetPath !== null && this.bannerTargetPath !== undefined) {
    output.writeFieldBegin('bannerTargetPath', Thrift.Type.STRING, 6);
    output.writeString(this.bannerTargetPath);
    output.writeFieldEnd();
  }
  if (this.productList !== null && this.productList !== undefined) {
    output.writeFieldBegin('productList', Thrift.Type.LIST, 7);
    output.writeListBegin(Thrift.Type.STRUCT, this.productList.length);
    for (var iter255 in this.productList)
    {
      if (this.productList.hasOwnProperty(iter255))
      {
        iter255 = this.productList[iter255];
        iter255.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.bannerLang !== null && this.bannerLang !== undefined) {
    output.writeFieldBegin('bannerLang', Thrift.Type.STRING, 8);
    output.writeString(this.bannerLang);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ProductSimple = module.exports.ProductSimple = function(args) {
  this.productId = null;
  this.packageId = null;
  this.version = null;
  this.onSale = null;
  this.validUntil = null;
  if (args) {
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.packageId !== undefined && args.packageId !== null) {
      this.packageId = args.packageId;
    }
    if (args.version !== undefined && args.version !== null) {
      this.version = args.version;
    }
    if (args.onSale !== undefined && args.onSale !== null) {
      this.onSale = args.onSale;
    }
    if (args.validUntil !== undefined && args.validUntil !== null) {
      this.validUntil = args.validUntil;
    }
  }
};
ProductSimple.prototype = {};
ProductSimple.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.packageId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.version = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.onSale = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.validUntil = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ProductSimple.prototype.write = function(output) {
  output.writeStructBegin('ProductSimple');
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 1);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.packageId !== null && this.packageId !== undefined) {
    output.writeFieldBegin('packageId', Thrift.Type.I64, 2);
    output.writeI64(this.packageId);
    output.writeFieldEnd();
  }
  if (this.version !== null && this.version !== undefined) {
    output.writeFieldBegin('version', Thrift.Type.I32, 3);
    output.writeI32(this.version);
    output.writeFieldEnd();
  }
  if (this.onSale !== null && this.onSale !== undefined) {
    output.writeFieldBegin('onSale', Thrift.Type.BOOL, 4);
    output.writeBool(this.onSale);
    output.writeFieldEnd();
  }
  if (this.validUntil !== null && this.validUntil !== undefined) {
    output.writeFieldBegin('validUntil', Thrift.Type.I64, 5);
    output.writeI64(this.validUntil);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ProductSimpleList = module.exports.ProductSimpleList = function(args) {
  this.hasNext = null;
  this.reinvokeHour = null;
  this.lastVersionSeq = null;
  this.productList = null;
  this.recentNewReleaseDate = null;
  this.recentEventReleaseDate = null;
  if (args) {
    if (args.hasNext !== undefined && args.hasNext !== null) {
      this.hasNext = args.hasNext;
    }
    if (args.reinvokeHour !== undefined && args.reinvokeHour !== null) {
      this.reinvokeHour = args.reinvokeHour;
    }
    if (args.lastVersionSeq !== undefined && args.lastVersionSeq !== null) {
      this.lastVersionSeq = args.lastVersionSeq;
    }
    if (args.productList !== undefined && args.productList !== null) {
      this.productList = Thrift.copyList(args.productList, [ttypes.ProductSimple]);
    }
    if (args.recentNewReleaseDate !== undefined && args.recentNewReleaseDate !== null) {
      this.recentNewReleaseDate = args.recentNewReleaseDate;
    }
    if (args.recentEventReleaseDate !== undefined && args.recentEventReleaseDate !== null) {
      this.recentEventReleaseDate = args.recentEventReleaseDate;
    }
  }
};
ProductSimpleList.prototype = {};
ProductSimpleList.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.hasNext = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.reinvokeHour = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.lastVersionSeq = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size256 = 0;
        var _rtmp3260;
        this.productList = [];
        var _etype259 = 0;
        _rtmp3260 = input.readListBegin();
        _etype259 = _rtmp3260.etype;
        _size256 = _rtmp3260.size;
        for (var _i261 = 0; _i261 < _size256; ++_i261)
        {
          var elem262 = null;
          elem262 = new ttypes.ProductSimple();
          elem262.read(input);
          this.productList.push(elem262);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.recentNewReleaseDate = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.recentEventReleaseDate = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ProductSimpleList.prototype.write = function(output) {
  output.writeStructBegin('ProductSimpleList');
  if (this.hasNext !== null && this.hasNext !== undefined) {
    output.writeFieldBegin('hasNext', Thrift.Type.BOOL, 1);
    output.writeBool(this.hasNext);
    output.writeFieldEnd();
  }
  if (this.reinvokeHour !== null && this.reinvokeHour !== undefined) {
    output.writeFieldBegin('reinvokeHour', Thrift.Type.I32, 2);
    output.writeI32(this.reinvokeHour);
    output.writeFieldEnd();
  }
  if (this.lastVersionSeq !== null && this.lastVersionSeq !== undefined) {
    output.writeFieldBegin('lastVersionSeq', Thrift.Type.I64, 3);
    output.writeI64(this.lastVersionSeq);
    output.writeFieldEnd();
  }
  if (this.productList !== null && this.productList !== undefined) {
    output.writeFieldBegin('productList', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.productList.length);
    for (var iter263 in this.productList)
    {
      if (this.productList.hasOwnProperty(iter263))
      {
        iter263 = this.productList[iter263];
        iter263.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.recentNewReleaseDate !== null && this.recentNewReleaseDate !== undefined) {
    output.writeFieldBegin('recentNewReleaseDate', Thrift.Type.I64, 5);
    output.writeI64(this.recentNewReleaseDate);
    output.writeFieldEnd();
  }
  if (this.recentEventReleaseDate !== null && this.recentEventReleaseDate !== undefined) {
    output.writeFieldBegin('recentEventReleaseDate', Thrift.Type.I64, 6);
    output.writeI64(this.recentEventReleaseDate);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Profile = module.exports.Profile = function(args) {
  this.mid = null;
  this.userid = null;
  this.phone = null;
  this.email = null;
  this.regionCode = null;
  this.displayName = null;
  this.phoneticName = null;
  this.pictureStatus = null;
  this.thumbnailUrl = null;
  this.statusMessage = null;
  this.allowSearchByUserid = null;
  this.allowSearchByEmail = null;
  this.picturePath = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.userid !== undefined && args.userid !== null) {
      this.userid = args.userid;
    }
    if (args.phone !== undefined && args.phone !== null) {
      this.phone = args.phone;
    }
    if (args.email !== undefined && args.email !== null) {
      this.email = args.email;
    }
    if (args.regionCode !== undefined && args.regionCode !== null) {
      this.regionCode = args.regionCode;
    }
    if (args.displayName !== undefined && args.displayName !== null) {
      this.displayName = args.displayName;
    }
    if (args.phoneticName !== undefined && args.phoneticName !== null) {
      this.phoneticName = args.phoneticName;
    }
    if (args.pictureStatus !== undefined && args.pictureStatus !== null) {
      this.pictureStatus = args.pictureStatus;
    }
    if (args.thumbnailUrl !== undefined && args.thumbnailUrl !== null) {
      this.thumbnailUrl = args.thumbnailUrl;
    }
    if (args.statusMessage !== undefined && args.statusMessage !== null) {
      this.statusMessage = args.statusMessage;
    }
    if (args.allowSearchByUserid !== undefined && args.allowSearchByUserid !== null) {
      this.allowSearchByUserid = args.allowSearchByUserid;
    }
    if (args.allowSearchByEmail !== undefined && args.allowSearchByEmail !== null) {
      this.allowSearchByEmail = args.allowSearchByEmail;
    }
    if (args.picturePath !== undefined && args.picturePath !== null) {
      this.picturePath = args.picturePath;
    }
  }
};
Profile.prototype = {};
Profile.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.userid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.phone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.regionCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.STRING) {
        this.displayName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.STRING) {
        this.phoneticName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.pictureStatus = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 23:
      if (ftype == Thrift.Type.STRING) {
        this.thumbnailUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 24:
      if (ftype == Thrift.Type.STRING) {
        this.statusMessage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 31:
      if (ftype == Thrift.Type.BOOL) {
        this.allowSearchByUserid = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 32:
      if (ftype == Thrift.Type.BOOL) {
        this.allowSearchByEmail = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 33:
      if (ftype == Thrift.Type.STRING) {
        this.picturePath = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Profile.prototype.write = function(output) {
  output.writeStructBegin('Profile');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.userid !== null && this.userid !== undefined) {
    output.writeFieldBegin('userid', Thrift.Type.STRING, 3);
    output.writeString(this.userid);
    output.writeFieldEnd();
  }
  if (this.phone !== null && this.phone !== undefined) {
    output.writeFieldBegin('phone', Thrift.Type.STRING, 10);
    output.writeString(this.phone);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 11);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.regionCode !== null && this.regionCode !== undefined) {
    output.writeFieldBegin('regionCode', Thrift.Type.STRING, 12);
    output.writeString(this.regionCode);
    output.writeFieldEnd();
  }
  if (this.displayName !== null && this.displayName !== undefined) {
    output.writeFieldBegin('displayName', Thrift.Type.STRING, 20);
    output.writeString(this.displayName);
    output.writeFieldEnd();
  }
  if (this.phoneticName !== null && this.phoneticName !== undefined) {
    output.writeFieldBegin('phoneticName', Thrift.Type.STRING, 21);
    output.writeString(this.phoneticName);
    output.writeFieldEnd();
  }
  if (this.pictureStatus !== null && this.pictureStatus !== undefined) {
    output.writeFieldBegin('pictureStatus', Thrift.Type.STRING, 22);
    output.writeString(this.pictureStatus);
    output.writeFieldEnd();
  }
  if (this.thumbnailUrl !== null && this.thumbnailUrl !== undefined) {
    output.writeFieldBegin('thumbnailUrl', Thrift.Type.STRING, 23);
    output.writeString(this.thumbnailUrl);
    output.writeFieldEnd();
  }
  if (this.statusMessage !== null && this.statusMessage !== undefined) {
    output.writeFieldBegin('statusMessage', Thrift.Type.STRING, 24);
    output.writeString(this.statusMessage);
    output.writeFieldEnd();
  }
  if (this.allowSearchByUserid !== null && this.allowSearchByUserid !== undefined) {
    output.writeFieldBegin('allowSearchByUserid', Thrift.Type.BOOL, 31);
    output.writeBool(this.allowSearchByUserid);
    output.writeFieldEnd();
  }
  if (this.allowSearchByEmail !== null && this.allowSearchByEmail !== undefined) {
    output.writeFieldBegin('allowSearchByEmail', Thrift.Type.BOOL, 32);
    output.writeBool(this.allowSearchByEmail);
    output.writeFieldEnd();
  }
  if (this.picturePath !== null && this.picturePath !== undefined) {
    output.writeFieldBegin('picturePath', Thrift.Type.STRING, 33);
    output.writeString(this.picturePath);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ProximityMatchCandidateResult = module.exports.ProximityMatchCandidateResult = function(args) {
  this.users = null;
  this.buddies = null;
  if (args) {
    if (args.users !== undefined && args.users !== null) {
      this.users = Thrift.copyList(args.users, [ttypes.Contact]);
    }
    if (args.buddies !== undefined && args.buddies !== null) {
      this.buddies = Thrift.copyList(args.buddies, [ttypes.Contact]);
    }
  }
};
ProximityMatchCandidateResult.prototype = {};
ProximityMatchCandidateResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size264 = 0;
        var _rtmp3268;
        this.users = [];
        var _etype267 = 0;
        _rtmp3268 = input.readListBegin();
        _etype267 = _rtmp3268.etype;
        _size264 = _rtmp3268.size;
        for (var _i269 = 0; _i269 < _size264; ++_i269)
        {
          var elem270 = null;
          elem270 = new ttypes.Contact();
          elem270.read(input);
          this.users.push(elem270);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size271 = 0;
        var _rtmp3275;
        this.buddies = [];
        var _etype274 = 0;
        _rtmp3275 = input.readListBegin();
        _etype274 = _rtmp3275.etype;
        _size271 = _rtmp3275.size;
        for (var _i276 = 0; _i276 < _size271; ++_i276)
        {
          var elem277 = null;
          elem277 = new ttypes.Contact();
          elem277.read(input);
          this.buddies.push(elem277);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ProximityMatchCandidateResult.prototype.write = function(output) {
  output.writeStructBegin('ProximityMatchCandidateResult');
  if (this.users !== null && this.users !== undefined) {
    output.writeFieldBegin('users', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.users.length);
    for (var iter278 in this.users)
    {
      if (this.users.hasOwnProperty(iter278))
      {
        iter278 = this.users[iter278];
        iter278.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.buddies !== null && this.buddies !== undefined) {
    output.writeFieldBegin('buddies', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.buddies.length);
    for (var iter279 in this.buddies)
    {
      if (this.buddies.hasOwnProperty(iter279))
      {
        iter279 = this.buddies[iter279];
        iter279.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RegisterWithSnsIdResult = module.exports.RegisterWithSnsIdResult = function(args) {
  this.authToken = null;
  this.userCreated = null;
  if (args) {
    if (args.authToken !== undefined && args.authToken !== null) {
      this.authToken = args.authToken;
    }
    if (args.userCreated !== undefined && args.userCreated !== null) {
      this.userCreated = args.userCreated;
    }
  }
};
RegisterWithSnsIdResult.prototype = {};
RegisterWithSnsIdResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.userCreated = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RegisterWithSnsIdResult.prototype.write = function(output) {
  output.writeStructBegin('RegisterWithSnsIdResult');
  if (this.authToken !== null && this.authToken !== undefined) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.userCreated !== null && this.userCreated !== undefined) {
    output.writeFieldBegin('userCreated', Thrift.Type.BOOL, 2);
    output.writeBool(this.userCreated);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RequestTokenResponse = module.exports.RequestTokenResponse = function(args) {
  this.requestToken = null;
  this.returnUrl = null;
  if (args) {
    if (args.requestToken !== undefined && args.requestToken !== null) {
      this.requestToken = args.requestToken;
    }
    if (args.returnUrl !== undefined && args.returnUrl !== null) {
      this.returnUrl = args.returnUrl;
    }
  }
};
RequestTokenResponse.prototype = {};
RequestTokenResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.requestToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.returnUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RequestTokenResponse.prototype.write = function(output) {
  output.writeStructBegin('RequestTokenResponse');
  if (this.requestToken !== null && this.requestToken !== undefined) {
    output.writeFieldBegin('requestToken', Thrift.Type.STRING, 1);
    output.writeString(this.requestToken);
    output.writeFieldEnd();
  }
  if (this.returnUrl !== null && this.returnUrl !== undefined) {
    output.writeFieldBegin('returnUrl', Thrift.Type.STRING, 2);
    output.writeString(this.returnUrl);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Room = module.exports.Room = function(args) {
  this.mid = null;
  this.createdTime = null;
  this.contacts = null;
  this.notificationDisabled = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.createdTime !== undefined && args.createdTime !== null) {
      this.createdTime = args.createdTime;
    }
    if (args.contacts !== undefined && args.contacts !== null) {
      this.contacts = Thrift.copyList(args.contacts, [ttypes.Contact]);
    }
    if (args.notificationDisabled !== undefined && args.notificationDisabled !== null) {
      this.notificationDisabled = args.notificationDisabled;
    }
  }
};
Room.prototype = {};
Room.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.createdTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.LIST) {
        var _size280 = 0;
        var _rtmp3284;
        this.contacts = [];
        var _etype283 = 0;
        _rtmp3284 = input.readListBegin();
        _etype283 = _rtmp3284.etype;
        _size280 = _rtmp3284.size;
        for (var _i285 = 0; _i285 < _size280; ++_i285)
        {
          var elem286 = null;
          elem286 = new ttypes.Contact();
          elem286.read(input);
          this.contacts.push(elem286);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 31:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationDisabled = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Room.prototype.write = function(output) {
  output.writeStructBegin('Room');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.createdTime !== null && this.createdTime !== undefined) {
    output.writeFieldBegin('createdTime', Thrift.Type.I64, 2);
    output.writeI64(this.createdTime);
    output.writeFieldEnd();
  }
  if (this.contacts !== null && this.contacts !== undefined) {
    output.writeFieldBegin('contacts', Thrift.Type.LIST, 10);
    output.writeListBegin(Thrift.Type.STRUCT, this.contacts.length);
    for (var iter287 in this.contacts)
    {
      if (this.contacts.hasOwnProperty(iter287))
      {
        iter287 = this.contacts[iter287];
        iter287.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.notificationDisabled !== null && this.notificationDisabled !== undefined) {
    output.writeFieldBegin('notificationDisabled', Thrift.Type.BOOL, 31);
    output.writeBool(this.notificationDisabled);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RSAKey = module.exports.RSAKey = function(args) {
  this.keynm = null;
  this.nvalue = null;
  this.evalue = null;
  this.sessionKey = null;
  if (args) {
    if (args.keynm !== undefined && args.keynm !== null) {
      this.keynm = args.keynm;
    }
    if (args.nvalue !== undefined && args.nvalue !== null) {
      this.nvalue = args.nvalue;
    }
    if (args.evalue !== undefined && args.evalue !== null) {
      this.evalue = args.evalue;
    }
    if (args.sessionKey !== undefined && args.sessionKey !== null) {
      this.sessionKey = args.sessionKey;
    }
  }
};
RSAKey.prototype = {};
RSAKey.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.keynm = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.nvalue = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.evalue = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.sessionKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RSAKey.prototype.write = function(output) {
  output.writeStructBegin('RSAKey');
  if (this.keynm !== null && this.keynm !== undefined) {
    output.writeFieldBegin('keynm', Thrift.Type.STRING, 1);
    output.writeString(this.keynm);
    output.writeFieldEnd();
  }
  if (this.nvalue !== null && this.nvalue !== undefined) {
    output.writeFieldBegin('nvalue', Thrift.Type.STRING, 2);
    output.writeString(this.nvalue);
    output.writeFieldEnd();
  }
  if (this.evalue !== null && this.evalue !== undefined) {
    output.writeFieldBegin('evalue', Thrift.Type.STRING, 3);
    output.writeString(this.evalue);
    output.writeFieldEnd();
  }
  if (this.sessionKey !== null && this.sessionKey !== undefined) {
    output.writeFieldBegin('sessionKey', Thrift.Type.STRING, 4);
    output.writeString(this.sessionKey);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SendBuddyMessageResult = module.exports.SendBuddyMessageResult = function(args) {
  this.requestId = null;
  this.state = null;
  this.messageId = null;
  this.eventNo = null;
  this.receiverCount = null;
  this.successCount = null;
  this.failCount = null;
  this.cancelCount = null;
  this.blockCount = null;
  this.unregisterCount = null;
  this.timestamp = null;
  this.message = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.state !== undefined && args.state !== null) {
      this.state = args.state;
    }
    if (args.messageId !== undefined && args.messageId !== null) {
      this.messageId = args.messageId;
    }
    if (args.eventNo !== undefined && args.eventNo !== null) {
      this.eventNo = args.eventNo;
    }
    if (args.receiverCount !== undefined && args.receiverCount !== null) {
      this.receiverCount = args.receiverCount;
    }
    if (args.successCount !== undefined && args.successCount !== null) {
      this.successCount = args.successCount;
    }
    if (args.failCount !== undefined && args.failCount !== null) {
      this.failCount = args.failCount;
    }
    if (args.cancelCount !== undefined && args.cancelCount !== null) {
      this.cancelCount = args.cancelCount;
    }
    if (args.blockCount !== undefined && args.blockCount !== null) {
      this.blockCount = args.blockCount;
    }
    if (args.unregisterCount !== undefined && args.unregisterCount !== null) {
      this.unregisterCount = args.unregisterCount;
    }
    if (args.timestamp !== undefined && args.timestamp !== null) {
      this.timestamp = args.timestamp;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
SendBuddyMessageResult.prototype = {};
SendBuddyMessageResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.state = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.messageId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.eventNo = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.receiverCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.successCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I64) {
        this.failCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.I64) {
        this.cancelCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.I64) {
        this.blockCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.I64) {
        this.unregisterCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SendBuddyMessageResult.prototype.write = function(output) {
  output.writeStructBegin('SendBuddyMessageResult');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.state !== null && this.state !== undefined) {
    output.writeFieldBegin('state', Thrift.Type.I32, 2);
    output.writeI32(this.state);
    output.writeFieldEnd();
  }
  if (this.messageId !== null && this.messageId !== undefined) {
    output.writeFieldBegin('messageId', Thrift.Type.STRING, 3);
    output.writeString(this.messageId);
    output.writeFieldEnd();
  }
  if (this.eventNo !== null && this.eventNo !== undefined) {
    output.writeFieldBegin('eventNo', Thrift.Type.I32, 4);
    output.writeI32(this.eventNo);
    output.writeFieldEnd();
  }
  if (this.receiverCount !== null && this.receiverCount !== undefined) {
    output.writeFieldBegin('receiverCount', Thrift.Type.I64, 11);
    output.writeI64(this.receiverCount);
    output.writeFieldEnd();
  }
  if (this.successCount !== null && this.successCount !== undefined) {
    output.writeFieldBegin('successCount', Thrift.Type.I64, 12);
    output.writeI64(this.successCount);
    output.writeFieldEnd();
  }
  if (this.failCount !== null && this.failCount !== undefined) {
    output.writeFieldBegin('failCount', Thrift.Type.I64, 13);
    output.writeI64(this.failCount);
    output.writeFieldEnd();
  }
  if (this.cancelCount !== null && this.cancelCount !== undefined) {
    output.writeFieldBegin('cancelCount', Thrift.Type.I64, 14);
    output.writeI64(this.cancelCount);
    output.writeFieldEnd();
  }
  if (this.blockCount !== null && this.blockCount !== undefined) {
    output.writeFieldBegin('blockCount', Thrift.Type.I64, 15);
    output.writeI64(this.blockCount);
    output.writeFieldEnd();
  }
  if (this.unregisterCount !== null && this.unregisterCount !== undefined) {
    output.writeFieldBegin('unregisterCount', Thrift.Type.I64, 16);
    output.writeI64(this.unregisterCount);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 21);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 22);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SetBuddyOnAirResult = module.exports.SetBuddyOnAirResult = function(args) {
  this.requestId = null;
  this.state = null;
  this.eventNo = null;
  this.receiverCount = null;
  this.successCount = null;
  this.failCount = null;
  this.cancelCount = null;
  this.unregisterCount = null;
  this.timestamp = null;
  this.message = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.state !== undefined && args.state !== null) {
      this.state = args.state;
    }
    if (args.eventNo !== undefined && args.eventNo !== null) {
      this.eventNo = args.eventNo;
    }
    if (args.receiverCount !== undefined && args.receiverCount !== null) {
      this.receiverCount = args.receiverCount;
    }
    if (args.successCount !== undefined && args.successCount !== null) {
      this.successCount = args.successCount;
    }
    if (args.failCount !== undefined && args.failCount !== null) {
      this.failCount = args.failCount;
    }
    if (args.cancelCount !== undefined && args.cancelCount !== null) {
      this.cancelCount = args.cancelCount;
    }
    if (args.unregisterCount !== undefined && args.unregisterCount !== null) {
      this.unregisterCount = args.unregisterCount;
    }
    if (args.timestamp !== undefined && args.timestamp !== null) {
      this.timestamp = args.timestamp;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
SetBuddyOnAirResult.prototype = {};
SetBuddyOnAirResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.state = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.eventNo = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.receiverCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.successCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I64) {
        this.failCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.I64) {
        this.cancelCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.I64) {
        this.unregisterCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SetBuddyOnAirResult.prototype.write = function(output) {
  output.writeStructBegin('SetBuddyOnAirResult');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.state !== null && this.state !== undefined) {
    output.writeFieldBegin('state', Thrift.Type.I32, 2);
    output.writeI32(this.state);
    output.writeFieldEnd();
  }
  if (this.eventNo !== null && this.eventNo !== undefined) {
    output.writeFieldBegin('eventNo', Thrift.Type.I32, 3);
    output.writeI32(this.eventNo);
    output.writeFieldEnd();
  }
  if (this.receiverCount !== null && this.receiverCount !== undefined) {
    output.writeFieldBegin('receiverCount', Thrift.Type.I64, 11);
    output.writeI64(this.receiverCount);
    output.writeFieldEnd();
  }
  if (this.successCount !== null && this.successCount !== undefined) {
    output.writeFieldBegin('successCount', Thrift.Type.I64, 12);
    output.writeI64(this.successCount);
    output.writeFieldEnd();
  }
  if (this.failCount !== null && this.failCount !== undefined) {
    output.writeFieldBegin('failCount', Thrift.Type.I64, 13);
    output.writeI64(this.failCount);
    output.writeFieldEnd();
  }
  if (this.cancelCount !== null && this.cancelCount !== undefined) {
    output.writeFieldBegin('cancelCount', Thrift.Type.I64, 14);
    output.writeI64(this.cancelCount);
    output.writeFieldEnd();
  }
  if (this.unregisterCount !== null && this.unregisterCount !== undefined) {
    output.writeFieldBegin('unregisterCount', Thrift.Type.I64, 15);
    output.writeI64(this.unregisterCount);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 21);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 22);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Settings = module.exports.Settings = function(args) {
  this.notificationEnable = null;
  this.notificationMuteExpiration = null;
  this.notificationNewMessage = null;
  this.notificationGroupInvitation = null;
  this.notificationShowMessage = null;
  this.notificationIncomingCall = null;
  this.notificationSoundMessage = null;
  this.notificationSoundGroup = null;
  this.notificationDisabledWithSub = null;
  this.privacySyncContacts = null;
  this.privacySearchByPhoneNumber = null;
  this.privacySearchByUserid = null;
  this.privacySearchByEmail = null;
  this.privacyAllowSecondaryDeviceLogin = null;
  this.privacyProfileImagePostToMyhome = null;
  this.privacyReceiveMessagesFromNotFriend = null;
  this.contactMyTicket = null;
  this.identityProvider = null;
  this.identityIdentifier = null;
  this.snsAccounts = null;
  this.phoneRegistration = null;
  this.emailConfirmationStatus = null;
  this.preferenceLocale = null;
  this.customModes = null;
  if (args) {
    if (args.notificationEnable !== undefined && args.notificationEnable !== null) {
      this.notificationEnable = args.notificationEnable;
    }
    if (args.notificationMuteExpiration !== undefined && args.notificationMuteExpiration !== null) {
      this.notificationMuteExpiration = args.notificationMuteExpiration;
    }
    if (args.notificationNewMessage !== undefined && args.notificationNewMessage !== null) {
      this.notificationNewMessage = args.notificationNewMessage;
    }
    if (args.notificationGroupInvitation !== undefined && args.notificationGroupInvitation !== null) {
      this.notificationGroupInvitation = args.notificationGroupInvitation;
    }
    if (args.notificationShowMessage !== undefined && args.notificationShowMessage !== null) {
      this.notificationShowMessage = args.notificationShowMessage;
    }
    if (args.notificationIncomingCall !== undefined && args.notificationIncomingCall !== null) {
      this.notificationIncomingCall = args.notificationIncomingCall;
    }
    if (args.notificationSoundMessage !== undefined && args.notificationSoundMessage !== null) {
      this.notificationSoundMessage = args.notificationSoundMessage;
    }
    if (args.notificationSoundGroup !== undefined && args.notificationSoundGroup !== null) {
      this.notificationSoundGroup = args.notificationSoundGroup;
    }
    if (args.notificationDisabledWithSub !== undefined && args.notificationDisabledWithSub !== null) {
      this.notificationDisabledWithSub = args.notificationDisabledWithSub;
    }
    if (args.privacySyncContacts !== undefined && args.privacySyncContacts !== null) {
      this.privacySyncContacts = args.privacySyncContacts;
    }
    if (args.privacySearchByPhoneNumber !== undefined && args.privacySearchByPhoneNumber !== null) {
      this.privacySearchByPhoneNumber = args.privacySearchByPhoneNumber;
    }
    if (args.privacySearchByUserid !== undefined && args.privacySearchByUserid !== null) {
      this.privacySearchByUserid = args.privacySearchByUserid;
    }
    if (args.privacySearchByEmail !== undefined && args.privacySearchByEmail !== null) {
      this.privacySearchByEmail = args.privacySearchByEmail;
    }
    if (args.privacyAllowSecondaryDeviceLogin !== undefined && args.privacyAllowSecondaryDeviceLogin !== null) {
      this.privacyAllowSecondaryDeviceLogin = args.privacyAllowSecondaryDeviceLogin;
    }
    if (args.privacyProfileImagePostToMyhome !== undefined && args.privacyProfileImagePostToMyhome !== null) {
      this.privacyProfileImagePostToMyhome = args.privacyProfileImagePostToMyhome;
    }
    if (args.privacyReceiveMessagesFromNotFriend !== undefined && args.privacyReceiveMessagesFromNotFriend !== null) {
      this.privacyReceiveMessagesFromNotFriend = args.privacyReceiveMessagesFromNotFriend;
    }
    if (args.contactMyTicket !== undefined && args.contactMyTicket !== null) {
      this.contactMyTicket = args.contactMyTicket;
    }
    if (args.identityProvider !== undefined && args.identityProvider !== null) {
      this.identityProvider = args.identityProvider;
    }
    if (args.identityIdentifier !== undefined && args.identityIdentifier !== null) {
      this.identityIdentifier = args.identityIdentifier;
    }
    if (args.snsAccounts !== undefined && args.snsAccounts !== null) {
      this.snsAccounts = Thrift.copyMap(args.snsAccounts, [null]);
    }
    if (args.phoneRegistration !== undefined && args.phoneRegistration !== null) {
      this.phoneRegistration = args.phoneRegistration;
    }
    if (args.emailConfirmationStatus !== undefined && args.emailConfirmationStatus !== null) {
      this.emailConfirmationStatus = args.emailConfirmationStatus;
    }
    if (args.preferenceLocale !== undefined && args.preferenceLocale !== null) {
      this.preferenceLocale = args.preferenceLocale;
    }
    if (args.customModes !== undefined && args.customModes !== null) {
      this.customModes = Thrift.copyMap(args.customModes, [null]);
    }
  }
};
Settings.prototype = {};
Settings.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 10:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationEnable = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.notificationMuteExpiration = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationNewMessage = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationGroupInvitation = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationShowMessage = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationIncomingCall = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.STRING) {
        this.notificationSoundMessage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.notificationSoundGroup = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.BOOL) {
        this.notificationDisabledWithSub = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.BOOL) {
        this.privacySyncContacts = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.BOOL) {
        this.privacySearchByPhoneNumber = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.BOOL) {
        this.privacySearchByUserid = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 23:
      if (ftype == Thrift.Type.BOOL) {
        this.privacySearchByEmail = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 24:
      if (ftype == Thrift.Type.BOOL) {
        this.privacyAllowSecondaryDeviceLogin = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 25:
      if (ftype == Thrift.Type.BOOL) {
        this.privacyProfileImagePostToMyhome = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 26:
      if (ftype == Thrift.Type.BOOL) {
        this.privacyReceiveMessagesFromNotFriend = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 30:
      if (ftype == Thrift.Type.STRING) {
        this.contactMyTicket = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 40:
      if (ftype == Thrift.Type.I32) {
        this.identityProvider = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 41:
      if (ftype == Thrift.Type.STRING) {
        this.identityIdentifier = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 42:
      if (ftype == Thrift.Type.MAP) {
        var _size288 = 0;
        var _rtmp3292;
        this.snsAccounts = {};
        var _ktype289 = 0;
        var _vtype290 = 0;
        _rtmp3292 = input.readMapBegin();
        _ktype289 = _rtmp3292.ktype;
        _vtype290 = _rtmp3292.vtype;
        _size288 = _rtmp3292.size;
        for (var _i293 = 0; _i293 < _size288; ++_i293)
        {
          var key294 = null;
          var val295 = null;
          key294 = input.readI32();
          val295 = input.readString();
          this.snsAccounts[key294] = val295;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 43:
      if (ftype == Thrift.Type.BOOL) {
        this.phoneRegistration = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 44:
      if (ftype == Thrift.Type.I32) {
        this.emailConfirmationStatus = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 50:
      if (ftype == Thrift.Type.STRING) {
        this.preferenceLocale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 60:
      if (ftype == Thrift.Type.MAP) {
        var _size296 = 0;
        var _rtmp3300;
        this.customModes = {};
        var _ktype297 = 0;
        var _vtype298 = 0;
        _rtmp3300 = input.readMapBegin();
        _ktype297 = _rtmp3300.ktype;
        _vtype298 = _rtmp3300.vtype;
        _size296 = _rtmp3300.size;
        for (var _i301 = 0; _i301 < _size296; ++_i301)
        {
          var key302 = null;
          var val303 = null;
          key302 = input.readI32();
          val303 = input.readString();
          this.customModes[key302] = val303;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Settings.prototype.write = function(output) {
  output.writeStructBegin('Settings');
  if (this.notificationEnable !== null && this.notificationEnable !== undefined) {
    output.writeFieldBegin('notificationEnable', Thrift.Type.BOOL, 10);
    output.writeBool(this.notificationEnable);
    output.writeFieldEnd();
  }
  if (this.notificationMuteExpiration !== null && this.notificationMuteExpiration !== undefined) {
    output.writeFieldBegin('notificationMuteExpiration', Thrift.Type.I64, 11);
    output.writeI64(this.notificationMuteExpiration);
    output.writeFieldEnd();
  }
  if (this.notificationNewMessage !== null && this.notificationNewMessage !== undefined) {
    output.writeFieldBegin('notificationNewMessage', Thrift.Type.BOOL, 12);
    output.writeBool(this.notificationNewMessage);
    output.writeFieldEnd();
  }
  if (this.notificationGroupInvitation !== null && this.notificationGroupInvitation !== undefined) {
    output.writeFieldBegin('notificationGroupInvitation', Thrift.Type.BOOL, 13);
    output.writeBool(this.notificationGroupInvitation);
    output.writeFieldEnd();
  }
  if (this.notificationShowMessage !== null && this.notificationShowMessage !== undefined) {
    output.writeFieldBegin('notificationShowMessage', Thrift.Type.BOOL, 14);
    output.writeBool(this.notificationShowMessage);
    output.writeFieldEnd();
  }
  if (this.notificationIncomingCall !== null && this.notificationIncomingCall !== undefined) {
    output.writeFieldBegin('notificationIncomingCall', Thrift.Type.BOOL, 15);
    output.writeBool(this.notificationIncomingCall);
    output.writeFieldEnd();
  }
  if (this.notificationSoundMessage !== null && this.notificationSoundMessage !== undefined) {
    output.writeFieldBegin('notificationSoundMessage', Thrift.Type.STRING, 16);
    output.writeString(this.notificationSoundMessage);
    output.writeFieldEnd();
  }
  if (this.notificationSoundGroup !== null && this.notificationSoundGroup !== undefined) {
    output.writeFieldBegin('notificationSoundGroup', Thrift.Type.STRING, 17);
    output.writeString(this.notificationSoundGroup);
    output.writeFieldEnd();
  }
  if (this.notificationDisabledWithSub !== null && this.notificationDisabledWithSub !== undefined) {
    output.writeFieldBegin('notificationDisabledWithSub', Thrift.Type.BOOL, 18);
    output.writeBool(this.notificationDisabledWithSub);
    output.writeFieldEnd();
  }
  if (this.privacySyncContacts !== null && this.privacySyncContacts !== undefined) {
    output.writeFieldBegin('privacySyncContacts', Thrift.Type.BOOL, 20);
    output.writeBool(this.privacySyncContacts);
    output.writeFieldEnd();
  }
  if (this.privacySearchByPhoneNumber !== null && this.privacySearchByPhoneNumber !== undefined) {
    output.writeFieldBegin('privacySearchByPhoneNumber', Thrift.Type.BOOL, 21);
    output.writeBool(this.privacySearchByPhoneNumber);
    output.writeFieldEnd();
  }
  if (this.privacySearchByUserid !== null && this.privacySearchByUserid !== undefined) {
    output.writeFieldBegin('privacySearchByUserid', Thrift.Type.BOOL, 22);
    output.writeBool(this.privacySearchByUserid);
    output.writeFieldEnd();
  }
  if (this.privacySearchByEmail !== null && this.privacySearchByEmail !== undefined) {
    output.writeFieldBegin('privacySearchByEmail', Thrift.Type.BOOL, 23);
    output.writeBool(this.privacySearchByEmail);
    output.writeFieldEnd();
  }
  if (this.privacyAllowSecondaryDeviceLogin !== null && this.privacyAllowSecondaryDeviceLogin !== undefined) {
    output.writeFieldBegin('privacyAllowSecondaryDeviceLogin', Thrift.Type.BOOL, 24);
    output.writeBool(this.privacyAllowSecondaryDeviceLogin);
    output.writeFieldEnd();
  }
  if (this.privacyProfileImagePostToMyhome !== null && this.privacyProfileImagePostToMyhome !== undefined) {
    output.writeFieldBegin('privacyProfileImagePostToMyhome', Thrift.Type.BOOL, 25);
    output.writeBool(this.privacyProfileImagePostToMyhome);
    output.writeFieldEnd();
  }
  if (this.privacyReceiveMessagesFromNotFriend !== null && this.privacyReceiveMessagesFromNotFriend !== undefined) {
    output.writeFieldBegin('privacyReceiveMessagesFromNotFriend', Thrift.Type.BOOL, 26);
    output.writeBool(this.privacyReceiveMessagesFromNotFriend);
    output.writeFieldEnd();
  }
  if (this.contactMyTicket !== null && this.contactMyTicket !== undefined) {
    output.writeFieldBegin('contactMyTicket', Thrift.Type.STRING, 30);
    output.writeString(this.contactMyTicket);
    output.writeFieldEnd();
  }
  if (this.identityProvider !== null && this.identityProvider !== undefined) {
    output.writeFieldBegin('identityProvider', Thrift.Type.I32, 40);
    output.writeI32(this.identityProvider);
    output.writeFieldEnd();
  }
  if (this.identityIdentifier !== null && this.identityIdentifier !== undefined) {
    output.writeFieldBegin('identityIdentifier', Thrift.Type.STRING, 41);
    output.writeString(this.identityIdentifier);
    output.writeFieldEnd();
  }
  if (this.snsAccounts !== null && this.snsAccounts !== undefined) {
    output.writeFieldBegin('snsAccounts', Thrift.Type.MAP, 42);
    output.writeMapBegin(Thrift.Type.I32, Thrift.Type.STRING, Thrift.objectLength(this.snsAccounts));
    for (var kiter304 in this.snsAccounts)
    {
      if (this.snsAccounts.hasOwnProperty(kiter304))
      {
        var viter305 = this.snsAccounts[kiter304];
        output.writeI32(kiter304);
        output.writeString(viter305);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.phoneRegistration !== null && this.phoneRegistration !== undefined) {
    output.writeFieldBegin('phoneRegistration', Thrift.Type.BOOL, 43);
    output.writeBool(this.phoneRegistration);
    output.writeFieldEnd();
  }
  if (this.emailConfirmationStatus !== null && this.emailConfirmationStatus !== undefined) {
    output.writeFieldBegin('emailConfirmationStatus', Thrift.Type.I32, 44);
    output.writeI32(this.emailConfirmationStatus);
    output.writeFieldEnd();
  }
  if (this.preferenceLocale !== null && this.preferenceLocale !== undefined) {
    output.writeFieldBegin('preferenceLocale', Thrift.Type.STRING, 50);
    output.writeString(this.preferenceLocale);
    output.writeFieldEnd();
  }
  if (this.customModes !== null && this.customModes !== undefined) {
    output.writeFieldBegin('customModes', Thrift.Type.MAP, 60);
    output.writeMapBegin(Thrift.Type.I32, Thrift.Type.STRING, Thrift.objectLength(this.customModes));
    for (var kiter306 in this.customModes)
    {
      if (this.customModes.hasOwnProperty(kiter306))
      {
        var viter307 = this.customModes[kiter306];
        output.writeI32(kiter306);
        output.writeString(viter307);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SimpleChannelClient = module.exports.SimpleChannelClient = function(args) {
  this.applicationType = null;
  this.applicationVersion = null;
  this.locale = null;
  if (args) {
    if (args.applicationType !== undefined && args.applicationType !== null) {
      this.applicationType = args.applicationType;
    }
    if (args.applicationVersion !== undefined && args.applicationVersion !== null) {
      this.applicationVersion = args.applicationVersion;
    }
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
  }
};
SimpleChannelClient.prototype = {};
SimpleChannelClient.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.applicationType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.applicationVersion = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SimpleChannelClient.prototype.write = function(output) {
  output.writeStructBegin('SimpleChannelClient');
  if (this.applicationType !== null && this.applicationType !== undefined) {
    output.writeFieldBegin('applicationType', Thrift.Type.STRING, 1);
    output.writeString(this.applicationType);
    output.writeFieldEnd();
  }
  if (this.applicationVersion !== null && this.applicationVersion !== undefined) {
    output.writeFieldBegin('applicationVersion', Thrift.Type.STRING, 2);
    output.writeString(this.applicationVersion);
    output.writeFieldEnd();
  }
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 3);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SimpleChannelContact = module.exports.SimpleChannelContact = function(args) {
  this.mid = null;
  this.displayName = null;
  this.pictureStatus = null;
  this.picturePath = null;
  this.statusMessage = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
    if (args.displayName !== undefined && args.displayName !== null) {
      this.displayName = args.displayName;
    }
    if (args.pictureStatus !== undefined && args.pictureStatus !== null) {
      this.pictureStatus = args.pictureStatus;
    }
    if (args.picturePath !== undefined && args.picturePath !== null) {
      this.picturePath = args.picturePath;
    }
    if (args.statusMessage !== undefined && args.statusMessage !== null) {
      this.statusMessage = args.statusMessage;
    }
  }
};
SimpleChannelContact.prototype = {};
SimpleChannelContact.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.displayName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.pictureStatus = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.picturePath = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.statusMessage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SimpleChannelContact.prototype.write = function(output) {
  output.writeStructBegin('SimpleChannelContact');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 1);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  if (this.displayName !== null && this.displayName !== undefined) {
    output.writeFieldBegin('displayName', Thrift.Type.STRING, 2);
    output.writeString(this.displayName);
    output.writeFieldEnd();
  }
  if (this.pictureStatus !== null && this.pictureStatus !== undefined) {
    output.writeFieldBegin('pictureStatus', Thrift.Type.STRING, 3);
    output.writeString(this.pictureStatus);
    output.writeFieldEnd();
  }
  if (this.picturePath !== null && this.picturePath !== undefined) {
    output.writeFieldBegin('picturePath', Thrift.Type.STRING, 4);
    output.writeString(this.picturePath);
    output.writeFieldEnd();
  }
  if (this.statusMessage !== null && this.statusMessage !== undefined) {
    output.writeFieldBegin('statusMessage', Thrift.Type.STRING, 5);
    output.writeString(this.statusMessage);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsFriend = module.exports.SnsFriend = function(args) {
  this.snsUserId = null;
  this.snsUserName = null;
  this.snsIdType = null;
  if (args) {
    if (args.snsUserId !== undefined && args.snsUserId !== null) {
      this.snsUserId = args.snsUserId;
    }
    if (args.snsUserName !== undefined && args.snsUserName !== null) {
      this.snsUserName = args.snsUserName;
    }
    if (args.snsIdType !== undefined && args.snsIdType !== null) {
      this.snsIdType = args.snsIdType;
    }
  }
};
SnsFriend.prototype = {};
SnsFriend.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.snsUserId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.snsUserName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.snsIdType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsFriend.prototype.write = function(output) {
  output.writeStructBegin('SnsFriend');
  if (this.snsUserId !== null && this.snsUserId !== undefined) {
    output.writeFieldBegin('snsUserId', Thrift.Type.STRING, 1);
    output.writeString(this.snsUserId);
    output.writeFieldEnd();
  }
  if (this.snsUserName !== null && this.snsUserName !== undefined) {
    output.writeFieldBegin('snsUserName', Thrift.Type.STRING, 2);
    output.writeString(this.snsUserName);
    output.writeFieldEnd();
  }
  if (this.snsIdType !== null && this.snsIdType !== undefined) {
    output.writeFieldBegin('snsIdType', Thrift.Type.I32, 3);
    output.writeI32(this.snsIdType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsFriendContactRegistration = module.exports.SnsFriendContactRegistration = function(args) {
  this.contact = null;
  this.snsIdType = null;
  this.snsUserId = null;
  if (args) {
    if (args.contact !== undefined && args.contact !== null) {
      this.contact = new ttypes.Contact(args.contact);
    }
    if (args.snsIdType !== undefined && args.snsIdType !== null) {
      this.snsIdType = args.snsIdType;
    }
    if (args.snsUserId !== undefined && args.snsUserId !== null) {
      this.snsUserId = args.snsUserId;
    }
  }
};
SnsFriendContactRegistration.prototype = {};
SnsFriendContactRegistration.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.contact = new ttypes.Contact();
        this.contact.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.snsIdType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.snsUserId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsFriendContactRegistration.prototype.write = function(output) {
  output.writeStructBegin('SnsFriendContactRegistration');
  if (this.contact !== null && this.contact !== undefined) {
    output.writeFieldBegin('contact', Thrift.Type.STRUCT, 1);
    this.contact.write(output);
    output.writeFieldEnd();
  }
  if (this.snsIdType !== null && this.snsIdType !== undefined) {
    output.writeFieldBegin('snsIdType', Thrift.Type.I32, 2);
    output.writeI32(this.snsIdType);
    output.writeFieldEnd();
  }
  if (this.snsUserId !== null && this.snsUserId !== undefined) {
    output.writeFieldBegin('snsUserId', Thrift.Type.STRING, 3);
    output.writeString(this.snsUserId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsFriendModification = module.exports.SnsFriendModification = function(args) {
  this.type = null;
  this.snsFriend = null;
  if (args) {
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.snsFriend !== undefined && args.snsFriend !== null) {
      this.snsFriend = new ttypes.SnsFriend(args.snsFriend);
    }
  }
};
SnsFriendModification.prototype = {};
SnsFriendModification.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.snsFriend = new ttypes.SnsFriend();
        this.snsFriend.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsFriendModification.prototype.write = function(output) {
  output.writeStructBegin('SnsFriendModification');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.snsFriend !== null && this.snsFriend !== undefined) {
    output.writeFieldBegin('snsFriend', Thrift.Type.STRUCT, 2);
    this.snsFriend.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsFriends = module.exports.SnsFriends = function(args) {
  this.snsFriends = null;
  this.hasMore = null;
  if (args) {
    if (args.snsFriends !== undefined && args.snsFriends !== null) {
      this.snsFriends = Thrift.copyList(args.snsFriends, [ttypes.SnsFriend]);
    }
    if (args.hasMore !== undefined && args.hasMore !== null) {
      this.hasMore = args.hasMore;
    }
  }
};
SnsFriends.prototype = {};
SnsFriends.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size308 = 0;
        var _rtmp3312;
        this.snsFriends = [];
        var _etype311 = 0;
        _rtmp3312 = input.readListBegin();
        _etype311 = _rtmp3312.etype;
        _size308 = _rtmp3312.size;
        for (var _i313 = 0; _i313 < _size308; ++_i313)
        {
          var elem314 = null;
          elem314 = new ttypes.SnsFriend();
          elem314.read(input);
          this.snsFriends.push(elem314);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.hasMore = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsFriends.prototype.write = function(output) {
  output.writeStructBegin('SnsFriends');
  if (this.snsFriends !== null && this.snsFriends !== undefined) {
    output.writeFieldBegin('snsFriends', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.snsFriends.length);
    for (var iter315 in this.snsFriends)
    {
      if (this.snsFriends.hasOwnProperty(iter315))
      {
        iter315 = this.snsFriends[iter315];
        iter315.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.hasMore !== null && this.hasMore !== undefined) {
    output.writeFieldBegin('hasMore', Thrift.Type.BOOL, 2);
    output.writeBool(this.hasMore);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsIdUserStatus = module.exports.SnsIdUserStatus = function(args) {
  this.userExisting = null;
  this.phoneNumberRegistered = null;
  this.sameDevice = null;
  if (args) {
    if (args.userExisting !== undefined && args.userExisting !== null) {
      this.userExisting = args.userExisting;
    }
    if (args.phoneNumberRegistered !== undefined && args.phoneNumberRegistered !== null) {
      this.phoneNumberRegistered = args.phoneNumberRegistered;
    }
    if (args.sameDevice !== undefined && args.sameDevice !== null) {
      this.sameDevice = args.sameDevice;
    }
  }
};
SnsIdUserStatus.prototype = {};
SnsIdUserStatus.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.userExisting = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.phoneNumberRegistered = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.sameDevice = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsIdUserStatus.prototype.write = function(output) {
  output.writeStructBegin('SnsIdUserStatus');
  if (this.userExisting !== null && this.userExisting !== undefined) {
    output.writeFieldBegin('userExisting', Thrift.Type.BOOL, 1);
    output.writeBool(this.userExisting);
    output.writeFieldEnd();
  }
  if (this.phoneNumberRegistered !== null && this.phoneNumberRegistered !== undefined) {
    output.writeFieldBegin('phoneNumberRegistered', Thrift.Type.BOOL, 2);
    output.writeBool(this.phoneNumberRegistered);
    output.writeFieldEnd();
  }
  if (this.sameDevice !== null && this.sameDevice !== undefined) {
    output.writeFieldBegin('sameDevice', Thrift.Type.BOOL, 3);
    output.writeBool(this.sameDevice);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsProfile = module.exports.SnsProfile = function(args) {
  this.snsUserId = null;
  this.snsUserName = null;
  this.email = null;
  this.thumbnailUrl = null;
  if (args) {
    if (args.snsUserId !== undefined && args.snsUserId !== null) {
      this.snsUserId = args.snsUserId;
    }
    if (args.snsUserName !== undefined && args.snsUserName !== null) {
      this.snsUserName = args.snsUserName;
    }
    if (args.email !== undefined && args.email !== null) {
      this.email = args.email;
    }
    if (args.thumbnailUrl !== undefined && args.thumbnailUrl !== null) {
      this.thumbnailUrl = args.thumbnailUrl;
    }
  }
};
SnsProfile.prototype = {};
SnsProfile.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.snsUserId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.snsUserName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.thumbnailUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsProfile.prototype.write = function(output) {
  output.writeStructBegin('SnsProfile');
  if (this.snsUserId !== null && this.snsUserId !== undefined) {
    output.writeFieldBegin('snsUserId', Thrift.Type.STRING, 1);
    output.writeString(this.snsUserId);
    output.writeFieldEnd();
  }
  if (this.snsUserName !== null && this.snsUserName !== undefined) {
    output.writeFieldBegin('snsUserName', Thrift.Type.STRING, 2);
    output.writeString(this.snsUserName);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 3);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.thumbnailUrl !== null && this.thumbnailUrl !== undefined) {
    output.writeFieldBegin('thumbnailUrl', Thrift.Type.STRING, 4);
    output.writeString(this.thumbnailUrl);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SystemConfiguration = module.exports.SystemConfiguration = function(args) {
  this.endpoint = null;
  this.endpointSsl = null;
  this.updateUrl = null;
  this.c2dmAccount = null;
  this.nniServer = null;
  if (args) {
    if (args.endpoint !== undefined && args.endpoint !== null) {
      this.endpoint = args.endpoint;
    }
    if (args.endpointSsl !== undefined && args.endpointSsl !== null) {
      this.endpointSsl = args.endpointSsl;
    }
    if (args.updateUrl !== undefined && args.updateUrl !== null) {
      this.updateUrl = args.updateUrl;
    }
    if (args.c2dmAccount !== undefined && args.c2dmAccount !== null) {
      this.c2dmAccount = args.c2dmAccount;
    }
    if (args.nniServer !== undefined && args.nniServer !== null) {
      this.nniServer = args.nniServer;
    }
  }
};
SystemConfiguration.prototype = {};
SystemConfiguration.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.endpoint = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.endpointSsl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.updateUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.c2dmAccount = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.nniServer = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SystemConfiguration.prototype.write = function(output) {
  output.writeStructBegin('SystemConfiguration');
  if (this.endpoint !== null && this.endpoint !== undefined) {
    output.writeFieldBegin('endpoint', Thrift.Type.STRING, 1);
    output.writeString(this.endpoint);
    output.writeFieldEnd();
  }
  if (this.endpointSsl !== null && this.endpointSsl !== undefined) {
    output.writeFieldBegin('endpointSsl', Thrift.Type.STRING, 2);
    output.writeString(this.endpointSsl);
    output.writeFieldEnd();
  }
  if (this.updateUrl !== null && this.updateUrl !== undefined) {
    output.writeFieldBegin('updateUrl', Thrift.Type.STRING, 3);
    output.writeString(this.updateUrl);
    output.writeFieldEnd();
  }
  if (this.c2dmAccount !== null && this.c2dmAccount !== undefined) {
    output.writeFieldBegin('c2dmAccount', Thrift.Type.STRING, 11);
    output.writeString(this.c2dmAccount);
    output.writeFieldEnd();
  }
  if (this.nniServer !== null && this.nniServer !== undefined) {
    output.writeFieldBegin('nniServer', Thrift.Type.STRING, 12);
    output.writeString(this.nniServer);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TalkException = module.exports.TalkException = function(args) {
  Thrift.TException.call(this, "TalkException");
  this.name = "TalkException";
  this.code = null;
  this.reason = null;
  this.parameterMap = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.reason !== undefined && args.reason !== null) {
      this.reason = args.reason;
    }
    if (args.parameterMap !== undefined && args.parameterMap !== null) {
      this.parameterMap = Thrift.copyMap(args.parameterMap, [null]);
    }
  }
};
Thrift.inherits(TalkException, Thrift.TException);
TalkException.prototype.name = 'TalkException';
TalkException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.reason = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size316 = 0;
        var _rtmp3320;
        this.parameterMap = {};
        var _ktype317 = 0;
        var _vtype318 = 0;
        _rtmp3320 = input.readMapBegin();
        _ktype317 = _rtmp3320.ktype;
        _vtype318 = _rtmp3320.vtype;
        _size316 = _rtmp3320.size;
        for (var _i321 = 0; _i321 < _size316; ++_i321)
        {
          var key322 = null;
          var val323 = null;
          key322 = input.readString();
          val323 = input.readString();
          this.parameterMap[key322] = val323;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TalkException.prototype.write = function(output) {
  output.writeStructBegin('TalkException');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.reason !== null && this.reason !== undefined) {
    output.writeFieldBegin('reason', Thrift.Type.STRING, 2);
    output.writeString(this.reason);
    output.writeFieldEnd();
  }
  if (this.parameterMap !== null && this.parameterMap !== undefined) {
    output.writeFieldBegin('parameterMap', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.parameterMap));
    for (var kiter324 in this.parameterMap)
    {
      if (this.parameterMap.hasOwnProperty(kiter324))
      {
        var viter325 = this.parameterMap[kiter324];
        output.writeString(kiter324);
        output.writeString(viter325);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Ticket = module.exports.Ticket = function(args) {
  this.id = null;
  this.expirationTime = null;
  this.maxUseCount = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.expirationTime !== undefined && args.expirationTime !== null) {
      this.expirationTime = args.expirationTime;
    }
    if (args.maxUseCount !== undefined && args.maxUseCount !== null) {
      this.maxUseCount = args.maxUseCount;
    }
  }
};
Ticket.prototype = {};
Ticket.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I64) {
        this.expirationTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.I32) {
        this.maxUseCount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Ticket.prototype.write = function(output) {
  output.writeStructBegin('Ticket');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.expirationTime !== null && this.expirationTime !== undefined) {
    output.writeFieldBegin('expirationTime', Thrift.Type.I64, 10);
    output.writeI64(this.expirationTime);
    output.writeFieldEnd();
  }
  if (this.maxUseCount !== null && this.maxUseCount !== undefined) {
    output.writeFieldBegin('maxUseCount', Thrift.Type.I32, 21);
    output.writeI32(this.maxUseCount);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TMessageBox = module.exports.TMessageBox = function(args) {
  this.id = null;
  this.channelId = null;
  this.lastSeq = null;
  this.unreadCount = null;
  this.lastModifiedTime = null;
  this.status = null;
  this.midType = null;
  this.lastMessages = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.lastSeq !== undefined && args.lastSeq !== null) {
      this.lastSeq = args.lastSeq;
    }
    if (args.unreadCount !== undefined && args.unreadCount !== null) {
      this.unreadCount = args.unreadCount;
    }
    if (args.lastModifiedTime !== undefined && args.lastModifiedTime !== null) {
      this.lastModifiedTime = args.lastModifiedTime;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.midType !== undefined && args.midType !== null) {
      this.midType = args.midType;
    }
    if (args.lastMessages !== undefined && args.lastMessages !== null) {
      this.lastMessages = Thrift.copyList(args.lastMessages, [ttypes.Message]);
    }
  }
};
TMessageBox.prototype = {};
TMessageBox.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.lastSeq = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.unreadCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.lastModifiedTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.midType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.LIST) {
        var _size326 = 0;
        var _rtmp3330;
        this.lastMessages = [];
        var _etype329 = 0;
        _rtmp3330 = input.readListBegin();
        _etype329 = _rtmp3330.etype;
        _size326 = _rtmp3330.size;
        for (var _i331 = 0; _i331 < _size326; ++_i331)
        {
          var elem332 = null;
          elem332 = new ttypes.Message();
          elem332.read(input);
          this.lastMessages.push(elem332);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TMessageBox.prototype.write = function(output) {
  output.writeStructBegin('TMessageBox');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 2);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.lastSeq !== null && this.lastSeq !== undefined) {
    output.writeFieldBegin('lastSeq', Thrift.Type.I64, 5);
    output.writeI64(this.lastSeq);
    output.writeFieldEnd();
  }
  if (this.unreadCount !== null && this.unreadCount !== undefined) {
    output.writeFieldBegin('unreadCount', Thrift.Type.I64, 6);
    output.writeI64(this.unreadCount);
    output.writeFieldEnd();
  }
  if (this.lastModifiedTime !== null && this.lastModifiedTime !== undefined) {
    output.writeFieldBegin('lastModifiedTime', Thrift.Type.I64, 7);
    output.writeI64(this.lastModifiedTime);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 8);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.midType !== null && this.midType !== undefined) {
    output.writeFieldBegin('midType', Thrift.Type.I32, 9);
    output.writeI32(this.midType);
    output.writeFieldEnd();
  }
  if (this.lastMessages !== null && this.lastMessages !== undefined) {
    output.writeFieldBegin('lastMessages', Thrift.Type.LIST, 10);
    output.writeListBegin(Thrift.Type.STRUCT, this.lastMessages.length);
    for (var iter333 in this.lastMessages)
    {
      if (this.lastMessages.hasOwnProperty(iter333))
      {
        iter333 = this.lastMessages[iter333];
        iter333.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TMessageBoxWrapUp = module.exports.TMessageBoxWrapUp = function(args) {
  this.messageBox = null;
  this.name = null;
  this.contacts = null;
  this.pictureRevision = null;
  if (args) {
    if (args.messageBox !== undefined && args.messageBox !== null) {
      this.messageBox = new ttypes.TMessageBox(args.messageBox);
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.contacts !== undefined && args.contacts !== null) {
      this.contacts = Thrift.copyList(args.contacts, [ttypes.Contact]);
    }
    if (args.pictureRevision !== undefined && args.pictureRevision !== null) {
      this.pictureRevision = args.pictureRevision;
    }
  }
};
TMessageBoxWrapUp.prototype = {};
TMessageBoxWrapUp.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.messageBox = new ttypes.TMessageBox();
        this.messageBox.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size334 = 0;
        var _rtmp3338;
        this.contacts = [];
        var _etype337 = 0;
        _rtmp3338 = input.readListBegin();
        _etype337 = _rtmp3338.etype;
        _size334 = _rtmp3338.size;
        for (var _i339 = 0; _i339 < _size334; ++_i339)
        {
          var elem340 = null;
          elem340 = new ttypes.Contact();
          elem340.read(input);
          this.contacts.push(elem340);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.pictureRevision = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TMessageBoxWrapUp.prototype.write = function(output) {
  output.writeStructBegin('TMessageBoxWrapUp');
  if (this.messageBox !== null && this.messageBox !== undefined) {
    output.writeFieldBegin('messageBox', Thrift.Type.STRUCT, 1);
    this.messageBox.write(output);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.contacts !== null && this.contacts !== undefined) {
    output.writeFieldBegin('contacts', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.contacts.length);
    for (var iter341 in this.contacts)
    {
      if (this.contacts.hasOwnProperty(iter341))
      {
        iter341 = this.contacts[iter341];
        iter341.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.pictureRevision !== null && this.pictureRevision !== undefined) {
    output.writeFieldBegin('pictureRevision', Thrift.Type.STRING, 4);
    output.writeString(this.pictureRevision);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TMessageBoxWrapUpResponse = module.exports.TMessageBoxWrapUpResponse = function(args) {
  this.messageBoxWrapUpList = null;
  this.totalSize = null;
  if (args) {
    if (args.messageBoxWrapUpList !== undefined && args.messageBoxWrapUpList !== null) {
      this.messageBoxWrapUpList = Thrift.copyList(args.messageBoxWrapUpList, [ttypes.TMessageBoxWrapUp]);
    }
    if (args.totalSize !== undefined && args.totalSize !== null) {
      this.totalSize = args.totalSize;
    }
  }
};
TMessageBoxWrapUpResponse.prototype = {};
TMessageBoxWrapUpResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size342 = 0;
        var _rtmp3346;
        this.messageBoxWrapUpList = [];
        var _etype345 = 0;
        _rtmp3346 = input.readListBegin();
        _etype345 = _rtmp3346.etype;
        _size342 = _rtmp3346.size;
        for (var _i347 = 0; _i347 < _size342; ++_i347)
        {
          var elem348 = null;
          elem348 = new ttypes.TMessageBoxWrapUp();
          elem348.read(input);
          this.messageBoxWrapUpList.push(elem348);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.totalSize = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TMessageBoxWrapUpResponse.prototype.write = function(output) {
  output.writeStructBegin('TMessageBoxWrapUpResponse');
  if (this.messageBoxWrapUpList !== null && this.messageBoxWrapUpList !== undefined) {
    output.writeFieldBegin('messageBoxWrapUpList', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.messageBoxWrapUpList.length);
    for (var iter349 in this.messageBoxWrapUpList)
    {
      if (this.messageBoxWrapUpList.hasOwnProperty(iter349))
      {
        iter349 = this.messageBoxWrapUpList[iter349];
        iter349.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.totalSize !== null && this.totalSize !== undefined) {
    output.writeFieldBegin('totalSize', Thrift.Type.I32, 2);
    output.writeI32(this.totalSize);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UniversalNotificationServiceException = module.exports.UniversalNotificationServiceException = function(args) {
  Thrift.TException.call(this, "UniversalNotificationServiceException");
  this.name = "UniversalNotificationServiceException";
  this.code = null;
  this.reason = null;
  this.parameterMap = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.reason !== undefined && args.reason !== null) {
      this.reason = args.reason;
    }
    if (args.parameterMap !== undefined && args.parameterMap !== null) {
      this.parameterMap = Thrift.copyMap(args.parameterMap, [null]);
    }
  }
};
Thrift.inherits(UniversalNotificationServiceException, Thrift.TException);
UniversalNotificationServiceException.prototype.name = 'UniversalNotificationServiceException';
UniversalNotificationServiceException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.reason = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size350 = 0;
        var _rtmp3354;
        this.parameterMap = {};
        var _ktype351 = 0;
        var _vtype352 = 0;
        _rtmp3354 = input.readMapBegin();
        _ktype351 = _rtmp3354.ktype;
        _vtype352 = _rtmp3354.vtype;
        _size350 = _rtmp3354.size;
        for (var _i355 = 0; _i355 < _size350; ++_i355)
        {
          var key356 = null;
          var val357 = null;
          key356 = input.readString();
          val357 = input.readString();
          this.parameterMap[key356] = val357;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UniversalNotificationServiceException.prototype.write = function(output) {
  output.writeStructBegin('UniversalNotificationServiceException');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.reason !== null && this.reason !== undefined) {
    output.writeFieldBegin('reason', Thrift.Type.STRING, 2);
    output.writeString(this.reason);
    output.writeFieldEnd();
  }
  if (this.parameterMap !== null && this.parameterMap !== undefined) {
    output.writeFieldBegin('parameterMap', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.parameterMap));
    for (var kiter358 in this.parameterMap)
    {
      if (this.parameterMap.hasOwnProperty(kiter358))
      {
        var viter359 = this.parameterMap[kiter358];
        output.writeString(kiter358);
        output.writeString(viter359);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UpdateBuddyProfileResult = module.exports.UpdateBuddyProfileResult = function(args) {
  this.requestId = null;
  this.state = null;
  this.eventNo = null;
  this.receiverCount = null;
  this.successCount = null;
  this.failCount = null;
  this.cancelCount = null;
  this.unregisterCount = null;
  this.timestamp = null;
  this.message = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.state !== undefined && args.state !== null) {
      this.state = args.state;
    }
    if (args.eventNo !== undefined && args.eventNo !== null) {
      this.eventNo = args.eventNo;
    }
    if (args.receiverCount !== undefined && args.receiverCount !== null) {
      this.receiverCount = args.receiverCount;
    }
    if (args.successCount !== undefined && args.successCount !== null) {
      this.successCount = args.successCount;
    }
    if (args.failCount !== undefined && args.failCount !== null) {
      this.failCount = args.failCount;
    }
    if (args.cancelCount !== undefined && args.cancelCount !== null) {
      this.cancelCount = args.cancelCount;
    }
    if (args.unregisterCount !== undefined && args.unregisterCount !== null) {
      this.unregisterCount = args.unregisterCount;
    }
    if (args.timestamp !== undefined && args.timestamp !== null) {
      this.timestamp = args.timestamp;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
UpdateBuddyProfileResult.prototype = {};
UpdateBuddyProfileResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.state = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.eventNo = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.receiverCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.successCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I64) {
        this.failCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.I64) {
        this.cancelCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.I64) {
        this.unregisterCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UpdateBuddyProfileResult.prototype.write = function(output) {
  output.writeStructBegin('UpdateBuddyProfileResult');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.state !== null && this.state !== undefined) {
    output.writeFieldBegin('state', Thrift.Type.I32, 2);
    output.writeI32(this.state);
    output.writeFieldEnd();
  }
  if (this.eventNo !== null && this.eventNo !== undefined) {
    output.writeFieldBegin('eventNo', Thrift.Type.I32, 3);
    output.writeI32(this.eventNo);
    output.writeFieldEnd();
  }
  if (this.receiverCount !== null && this.receiverCount !== undefined) {
    output.writeFieldBegin('receiverCount', Thrift.Type.I64, 11);
    output.writeI64(this.receiverCount);
    output.writeFieldEnd();
  }
  if (this.successCount !== null && this.successCount !== undefined) {
    output.writeFieldBegin('successCount', Thrift.Type.I64, 12);
    output.writeI64(this.successCount);
    output.writeFieldEnd();
  }
  if (this.failCount !== null && this.failCount !== undefined) {
    output.writeFieldBegin('failCount', Thrift.Type.I64, 13);
    output.writeI64(this.failCount);
    output.writeFieldEnd();
  }
  if (this.cancelCount !== null && this.cancelCount !== undefined) {
    output.writeFieldBegin('cancelCount', Thrift.Type.I64, 14);
    output.writeI64(this.cancelCount);
    output.writeFieldEnd();
  }
  if (this.unregisterCount !== null && this.unregisterCount !== undefined) {
    output.writeFieldBegin('unregisterCount', Thrift.Type.I64, 15);
    output.writeI64(this.unregisterCount);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 21);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 22);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserAuthStatus = module.exports.UserAuthStatus = function(args) {
  this.phoneNumberRegistered = null;
  this.registeredSnsIdTypes = null;
  if (args) {
    if (args.phoneNumberRegistered !== undefined && args.phoneNumberRegistered !== null) {
      this.phoneNumberRegistered = args.phoneNumberRegistered;
    }
    if (args.registeredSnsIdTypes !== undefined && args.registeredSnsIdTypes !== null) {
      this.registeredSnsIdTypes = Thrift.copyList(args.registeredSnsIdTypes, [null]);
    }
  }
};
UserAuthStatus.prototype = {};
UserAuthStatus.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.phoneNumberRegistered = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size360 = 0;
        var _rtmp3364;
        this.registeredSnsIdTypes = [];
        var _etype363 = 0;
        _rtmp3364 = input.readListBegin();
        _etype363 = _rtmp3364.etype;
        _size360 = _rtmp3364.size;
        for (var _i365 = 0; _i365 < _size360; ++_i365)
        {
          var elem366 = null;
          elem366 = input.readI32();
          this.registeredSnsIdTypes.push(elem366);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserAuthStatus.prototype.write = function(output) {
  output.writeStructBegin('UserAuthStatus');
  if (this.phoneNumberRegistered !== null && this.phoneNumberRegistered !== undefined) {
    output.writeFieldBegin('phoneNumberRegistered', Thrift.Type.BOOL, 1);
    output.writeBool(this.phoneNumberRegistered);
    output.writeFieldEnd();
  }
  if (this.registeredSnsIdTypes !== null && this.registeredSnsIdTypes !== undefined) {
    output.writeFieldBegin('registeredSnsIdTypes', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.I32, this.registeredSnsIdTypes.length);
    for (var iter367 in this.registeredSnsIdTypes)
    {
      if (this.registeredSnsIdTypes.hasOwnProperty(iter367))
      {
        iter367 = this.registeredSnsIdTypes[iter367];
        output.writeI32(iter367);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var VerificationSessionData = module.exports.VerificationSessionData = function(args) {
  this.sessionId = null;
  this.method = null;
  this.callback = null;
  this.normalizedPhone = null;
  this.countryCode = null;
  this.nationalSignificantNumber = null;
  this.availableVerificationMethods = null;
  if (args) {
    if (args.sessionId !== undefined && args.sessionId !== null) {
      this.sessionId = args.sessionId;
    }
    if (args.method !== undefined && args.method !== null) {
      this.method = args.method;
    }
    if (args.callback !== undefined && args.callback !== null) {
      this.callback = args.callback;
    }
    if (args.normalizedPhone !== undefined && args.normalizedPhone !== null) {
      this.normalizedPhone = args.normalizedPhone;
    }
    if (args.countryCode !== undefined && args.countryCode !== null) {
      this.countryCode = args.countryCode;
    }
    if (args.nationalSignificantNumber !== undefined && args.nationalSignificantNumber !== null) {
      this.nationalSignificantNumber = args.nationalSignificantNumber;
    }
    if (args.availableVerificationMethods !== undefined && args.availableVerificationMethods !== null) {
      this.availableVerificationMethods = Thrift.copyList(args.availableVerificationMethods, [null]);
    }
  }
};
VerificationSessionData.prototype = {};
VerificationSessionData.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.sessionId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.method = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.callback = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.normalizedPhone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.countryCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.nationalSignificantNumber = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.LIST) {
        var _size368 = 0;
        var _rtmp3372;
        this.availableVerificationMethods = [];
        var _etype371 = 0;
        _rtmp3372 = input.readListBegin();
        _etype371 = _rtmp3372.etype;
        _size368 = _rtmp3372.size;
        for (var _i373 = 0; _i373 < _size368; ++_i373)
        {
          var elem374 = null;
          elem374 = input.readI32();
          this.availableVerificationMethods.push(elem374);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

VerificationSessionData.prototype.write = function(output) {
  output.writeStructBegin('VerificationSessionData');
  if (this.sessionId !== null && this.sessionId !== undefined) {
    output.writeFieldBegin('sessionId', Thrift.Type.STRING, 1);
    output.writeString(this.sessionId);
    output.writeFieldEnd();
  }
  if (this.method !== null && this.method !== undefined) {
    output.writeFieldBegin('method', Thrift.Type.I32, 2);
    output.writeI32(this.method);
    output.writeFieldEnd();
  }
  if (this.callback !== null && this.callback !== undefined) {
    output.writeFieldBegin('callback', Thrift.Type.STRING, 3);
    output.writeString(this.callback);
    output.writeFieldEnd();
  }
  if (this.normalizedPhone !== null && this.normalizedPhone !== undefined) {
    output.writeFieldBegin('normalizedPhone', Thrift.Type.STRING, 4);
    output.writeString(this.normalizedPhone);
    output.writeFieldEnd();
  }
  if (this.countryCode !== null && this.countryCode !== undefined) {
    output.writeFieldBegin('countryCode', Thrift.Type.STRING, 5);
    output.writeString(this.countryCode);
    output.writeFieldEnd();
  }
  if (this.nationalSignificantNumber !== null && this.nationalSignificantNumber !== undefined) {
    output.writeFieldBegin('nationalSignificantNumber', Thrift.Type.STRING, 6);
    output.writeString(this.nationalSignificantNumber);
    output.writeFieldEnd();
  }
  if (this.availableVerificationMethods !== null && this.availableVerificationMethods !== undefined) {
    output.writeFieldBegin('availableVerificationMethods', Thrift.Type.LIST, 7);
    output.writeListBegin(Thrift.Type.I32, this.availableVerificationMethods.length);
    for (var iter375 in this.availableVerificationMethods)
    {
      if (this.availableVerificationMethods.hasOwnProperty(iter375))
      {
        iter375 = this.availableVerificationMethods[iter375];
        output.writeI32(iter375);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var WapInvitation = module.exports.WapInvitation = function(args) {
  this.type = null;
  this.inviteeEmail = null;
  this.inviterMid = null;
  this.roomMid = null;
  if (args) {
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.inviteeEmail !== undefined && args.inviteeEmail !== null) {
      this.inviteeEmail = args.inviteeEmail;
    }
    if (args.inviterMid !== undefined && args.inviterMid !== null) {
      this.inviterMid = args.inviterMid;
    }
    if (args.roomMid !== undefined && args.roomMid !== null) {
      this.roomMid = args.roomMid;
    }
  }
};
WapInvitation.prototype = {};
WapInvitation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.inviteeEmail = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.inviterMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.roomMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WapInvitation.prototype.write = function(output) {
  output.writeStructBegin('WapInvitation');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.inviteeEmail !== null && this.inviteeEmail !== undefined) {
    output.writeFieldBegin('inviteeEmail', Thrift.Type.STRING, 10);
    output.writeString(this.inviteeEmail);
    output.writeFieldEnd();
  }
  if (this.inviterMid !== null && this.inviterMid !== undefined) {
    output.writeFieldBegin('inviterMid', Thrift.Type.STRING, 11);
    output.writeString(this.inviterMid);
    output.writeFieldEnd();
  }
  if (this.roomMid !== null && this.roomMid !== undefined) {
    output.writeFieldBegin('roomMid', Thrift.Type.STRING, 12);
    output.writeString(this.roomMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

