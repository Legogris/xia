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


var ttypes = require('./line_types');
//HELPER FUNCTIONS AND STRUCTURES

var AccountSupervisorService_getRSAKey_args = function(args) {
};
AccountSupervisorService_getRSAKey_args.prototype = {};
AccountSupervisorService_getRSAKey_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AccountSupervisorService_getRSAKey_args.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_getRSAKey_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_getRSAKey_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.RSAKey(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
AccountSupervisorService_getRSAKey_result.prototype = {};
AccountSupervisorService_getRSAKey_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.RSAKey();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
        this.e.read(input);
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

AccountSupervisorService_getRSAKey_result.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_getRSAKey_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_notifyEmailConfirmationResult_args = function(args) {
  this.parameterMap = null;
  if (args) {
    if (args.parameterMap !== undefined && args.parameterMap !== null) {
      this.parameterMap = Thrift.copyMap(args.parameterMap, [null]);
    }
  }
};
AccountSupervisorService_notifyEmailConfirmationResult_args.prototype = {};
AccountSupervisorService_notifyEmailConfirmationResult_args.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size376 = 0;
        var _rtmp3380;
        this.parameterMap = {};
        var _ktype377 = 0;
        var _vtype378 = 0;
        _rtmp3380 = input.readMapBegin();
        _ktype377 = _rtmp3380.ktype;
        _vtype378 = _rtmp3380.vtype;
        _size376 = _rtmp3380.size;
        for (var _i381 = 0; _i381 < _size376; ++_i381)
        {
          var key382 = null;
          var val383 = null;
          key382 = input.readString();
          val383 = input.readString();
          this.parameterMap[key382] = val383;
        }
        input.readMapEnd();
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

AccountSupervisorService_notifyEmailConfirmationResult_args.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_notifyEmailConfirmationResult_args');
  if (this.parameterMap !== null && this.parameterMap !== undefined) {
    output.writeFieldBegin('parameterMap', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.parameterMap));
    for (var kiter384 in this.parameterMap)
    {
      if (this.parameterMap.hasOwnProperty(kiter384))
      {
        var viter385 = this.parameterMap[kiter384];
        output.writeString(kiter384);
        output.writeString(viter385);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_notifyEmailConfirmationResult_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
AccountSupervisorService_notifyEmailConfirmationResult_result.prototype = {};
AccountSupervisorService_notifyEmailConfirmationResult_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
        this.e.read(input);
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

AccountSupervisorService_notifyEmailConfirmationResult_result.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_notifyEmailConfirmationResult_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_registerVirtualAccount_args = function(args) {
  this.locale = null;
  this.encryptedVirtualUserId = null;
  this.encryptedPassword = null;
  if (args) {
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
    if (args.encryptedVirtualUserId !== undefined && args.encryptedVirtualUserId !== null) {
      this.encryptedVirtualUserId = args.encryptedVirtualUserId;
    }
    if (args.encryptedPassword !== undefined && args.encryptedPassword !== null) {
      this.encryptedPassword = args.encryptedPassword;
    }
  }
};
AccountSupervisorService_registerVirtualAccount_args.prototype = {};
AccountSupervisorService_registerVirtualAccount_args.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.encryptedVirtualUserId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.encryptedPassword = input.readString();
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

AccountSupervisorService_registerVirtualAccount_args.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_registerVirtualAccount_args');
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 2);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  if (this.encryptedVirtualUserId !== null && this.encryptedVirtualUserId !== undefined) {
    output.writeFieldBegin('encryptedVirtualUserId', Thrift.Type.STRING, 3);
    output.writeString(this.encryptedVirtualUserId);
    output.writeFieldEnd();
  }
  if (this.encryptedPassword !== null && this.encryptedPassword !== undefined) {
    output.writeFieldBegin('encryptedPassword', Thrift.Type.STRING, 4);
    output.writeString(this.encryptedPassword);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_registerVirtualAccount_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
AccountSupervisorService_registerVirtualAccount_result.prototype = {};
AccountSupervisorService_registerVirtualAccount_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
        this.e.read(input);
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

AccountSupervisorService_registerVirtualAccount_result.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_registerVirtualAccount_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_requestVirtualAccountPasswordChange_args = function(args) {
  this.virtualMid = null;
  this.encryptedVirtualUserId = null;
  this.encryptedOldPassword = null;
  this.encryptedNewPassword = null;
  if (args) {
    if (args.virtualMid !== undefined && args.virtualMid !== null) {
      this.virtualMid = args.virtualMid;
    }
    if (args.encryptedVirtualUserId !== undefined && args.encryptedVirtualUserId !== null) {
      this.encryptedVirtualUserId = args.encryptedVirtualUserId;
    }
    if (args.encryptedOldPassword !== undefined && args.encryptedOldPassword !== null) {
      this.encryptedOldPassword = args.encryptedOldPassword;
    }
    if (args.encryptedNewPassword !== undefined && args.encryptedNewPassword !== null) {
      this.encryptedNewPassword = args.encryptedNewPassword;
    }
  }
};
AccountSupervisorService_requestVirtualAccountPasswordChange_args.prototype = {};
AccountSupervisorService_requestVirtualAccountPasswordChange_args.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.virtualMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.encryptedVirtualUserId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.encryptedOldPassword = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.encryptedNewPassword = input.readString();
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

AccountSupervisorService_requestVirtualAccountPasswordChange_args.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_requestVirtualAccountPasswordChange_args');
  if (this.virtualMid !== null && this.virtualMid !== undefined) {
    output.writeFieldBegin('virtualMid', Thrift.Type.STRING, 2);
    output.writeString(this.virtualMid);
    output.writeFieldEnd();
  }
  if (this.encryptedVirtualUserId !== null && this.encryptedVirtualUserId !== undefined) {
    output.writeFieldBegin('encryptedVirtualUserId', Thrift.Type.STRING, 3);
    output.writeString(this.encryptedVirtualUserId);
    output.writeFieldEnd();
  }
  if (this.encryptedOldPassword !== null && this.encryptedOldPassword !== undefined) {
    output.writeFieldBegin('encryptedOldPassword', Thrift.Type.STRING, 4);
    output.writeString(this.encryptedOldPassword);
    output.writeFieldEnd();
  }
  if (this.encryptedNewPassword !== null && this.encryptedNewPassword !== undefined) {
    output.writeFieldBegin('encryptedNewPassword', Thrift.Type.STRING, 5);
    output.writeString(this.encryptedNewPassword);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_requestVirtualAccountPasswordChange_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
AccountSupervisorService_requestVirtualAccountPasswordChange_result.prototype = {};
AccountSupervisorService_requestVirtualAccountPasswordChange_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
        this.e.read(input);
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

AccountSupervisorService_requestVirtualAccountPasswordChange_result.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_requestVirtualAccountPasswordChange_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_requestVirtualAccountPasswordSet_args = function(args) {
  this.virtualMid = null;
  this.encryptedVirtualUserId = null;
  this.encryptedNewPassword = null;
  if (args) {
    if (args.virtualMid !== undefined && args.virtualMid !== null) {
      this.virtualMid = args.virtualMid;
    }
    if (args.encryptedVirtualUserId !== undefined && args.encryptedVirtualUserId !== null) {
      this.encryptedVirtualUserId = args.encryptedVirtualUserId;
    }
    if (args.encryptedNewPassword !== undefined && args.encryptedNewPassword !== null) {
      this.encryptedNewPassword = args.encryptedNewPassword;
    }
  }
};
AccountSupervisorService_requestVirtualAccountPasswordSet_args.prototype = {};
AccountSupervisorService_requestVirtualAccountPasswordSet_args.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.virtualMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.encryptedVirtualUserId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.encryptedNewPassword = input.readString();
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

AccountSupervisorService_requestVirtualAccountPasswordSet_args.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_requestVirtualAccountPasswordSet_args');
  if (this.virtualMid !== null && this.virtualMid !== undefined) {
    output.writeFieldBegin('virtualMid', Thrift.Type.STRING, 2);
    output.writeString(this.virtualMid);
    output.writeFieldEnd();
  }
  if (this.encryptedVirtualUserId !== null && this.encryptedVirtualUserId !== undefined) {
    output.writeFieldBegin('encryptedVirtualUserId', Thrift.Type.STRING, 3);
    output.writeString(this.encryptedVirtualUserId);
    output.writeFieldEnd();
  }
  if (this.encryptedNewPassword !== null && this.encryptedNewPassword !== undefined) {
    output.writeFieldBegin('encryptedNewPassword', Thrift.Type.STRING, 4);
    output.writeString(this.encryptedNewPassword);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_requestVirtualAccountPasswordSet_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
AccountSupervisorService_requestVirtualAccountPasswordSet_result.prototype = {};
AccountSupervisorService_requestVirtualAccountPasswordSet_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
        this.e.read(input);
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

AccountSupervisorService_requestVirtualAccountPasswordSet_result.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_requestVirtualAccountPasswordSet_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_unregisterVirtualAccount_args = function(args) {
  this.virtualMid = null;
  if (args) {
    if (args.virtualMid !== undefined && args.virtualMid !== null) {
      this.virtualMid = args.virtualMid;
    }
  }
};
AccountSupervisorService_unregisterVirtualAccount_args.prototype = {};
AccountSupervisorService_unregisterVirtualAccount_args.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.virtualMid = input.readString();
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

AccountSupervisorService_unregisterVirtualAccount_args.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_unregisterVirtualAccount_args');
  if (this.virtualMid !== null && this.virtualMid !== undefined) {
    output.writeFieldBegin('virtualMid', Thrift.Type.STRING, 2);
    output.writeString(this.virtualMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorService_unregisterVirtualAccount_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
AccountSupervisorService_unregisterVirtualAccount_result.prototype = {};
AccountSupervisorService_unregisterVirtualAccount_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
        this.e.read(input);
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

AccountSupervisorService_unregisterVirtualAccount_result.prototype.write = function(output) {
  output.writeStructBegin('AccountSupervisorService_unregisterVirtualAccount_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AccountSupervisorServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
AccountSupervisorServiceClient.prototype = {};
AccountSupervisorServiceClient.prototype.seqid = function() { return this._seqid; };
AccountSupervisorServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
AccountSupervisorServiceClient.prototype.getRSAKey = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getRSAKey();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getRSAKey();
  }
};

AccountSupervisorServiceClient.prototype.send_getRSAKey = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getRSAKey', Thrift.MessageType.CALL, this.seqid());
  var args = new AccountSupervisorService_getRSAKey_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AccountSupervisorServiceClient.prototype.recv_getRSAKey = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AccountSupervisorService_getRSAKey_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getRSAKey failed: unknown result');
};
AccountSupervisorServiceClient.prototype.notifyEmailConfirmationResult = function(parameterMap, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_notifyEmailConfirmationResult(parameterMap);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_notifyEmailConfirmationResult(parameterMap);
  }
};

AccountSupervisorServiceClient.prototype.send_notifyEmailConfirmationResult = function(parameterMap) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('notifyEmailConfirmationResult', Thrift.MessageType.CALL, this.seqid());
  var params = {
    parameterMap: parameterMap
  };
  var args = new AccountSupervisorService_notifyEmailConfirmationResult_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AccountSupervisorServiceClient.prototype.recv_notifyEmailConfirmationResult = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AccountSupervisorService_notifyEmailConfirmationResult_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
AccountSupervisorServiceClient.prototype.registerVirtualAccount = function(locale, encryptedVirtualUserId, encryptedPassword, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_registerVirtualAccount(locale, encryptedVirtualUserId, encryptedPassword);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_registerVirtualAccount(locale, encryptedVirtualUserId, encryptedPassword);
  }
};

AccountSupervisorServiceClient.prototype.send_registerVirtualAccount = function(locale, encryptedVirtualUserId, encryptedPassword) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('registerVirtualAccount', Thrift.MessageType.CALL, this.seqid());
  var params = {
    locale: locale,
    encryptedVirtualUserId: encryptedVirtualUserId,
    encryptedPassword: encryptedPassword
  };
  var args = new AccountSupervisorService_registerVirtualAccount_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AccountSupervisorServiceClient.prototype.recv_registerVirtualAccount = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AccountSupervisorService_registerVirtualAccount_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('registerVirtualAccount failed: unknown result');
};
AccountSupervisorServiceClient.prototype.requestVirtualAccountPasswordChange = function(virtualMid, encryptedVirtualUserId, encryptedOldPassword, encryptedNewPassword, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_requestVirtualAccountPasswordChange(virtualMid, encryptedVirtualUserId, encryptedOldPassword, encryptedNewPassword);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_requestVirtualAccountPasswordChange(virtualMid, encryptedVirtualUserId, encryptedOldPassword, encryptedNewPassword);
  }
};

AccountSupervisorServiceClient.prototype.send_requestVirtualAccountPasswordChange = function(virtualMid, encryptedVirtualUserId, encryptedOldPassword, encryptedNewPassword) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('requestVirtualAccountPasswordChange', Thrift.MessageType.CALL, this.seqid());
  var params = {
    virtualMid: virtualMid,
    encryptedVirtualUserId: encryptedVirtualUserId,
    encryptedOldPassword: encryptedOldPassword,
    encryptedNewPassword: encryptedNewPassword
  };
  var args = new AccountSupervisorService_requestVirtualAccountPasswordChange_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AccountSupervisorServiceClient.prototype.recv_requestVirtualAccountPasswordChange = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AccountSupervisorService_requestVirtualAccountPasswordChange_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
AccountSupervisorServiceClient.prototype.requestVirtualAccountPasswordSet = function(virtualMid, encryptedVirtualUserId, encryptedNewPassword, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_requestVirtualAccountPasswordSet(virtualMid, encryptedVirtualUserId, encryptedNewPassword);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_requestVirtualAccountPasswordSet(virtualMid, encryptedVirtualUserId, encryptedNewPassword);
  }
};

AccountSupervisorServiceClient.prototype.send_requestVirtualAccountPasswordSet = function(virtualMid, encryptedVirtualUserId, encryptedNewPassword) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('requestVirtualAccountPasswordSet', Thrift.MessageType.CALL, this.seqid());
  var params = {
    virtualMid: virtualMid,
    encryptedVirtualUserId: encryptedVirtualUserId,
    encryptedNewPassword: encryptedNewPassword
  };
  var args = new AccountSupervisorService_requestVirtualAccountPasswordSet_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AccountSupervisorServiceClient.prototype.recv_requestVirtualAccountPasswordSet = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AccountSupervisorService_requestVirtualAccountPasswordSet_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
AccountSupervisorServiceClient.prototype.unregisterVirtualAccount = function(virtualMid, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_unregisterVirtualAccount(virtualMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_unregisterVirtualAccount(virtualMid);
  }
};

AccountSupervisorServiceClient.prototype.send_unregisterVirtualAccount = function(virtualMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('unregisterVirtualAccount', Thrift.MessageType.CALL, this.seqid());
  var params = {
    virtualMid: virtualMid
  };
  var args = new AccountSupervisorService_unregisterVirtualAccount_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AccountSupervisorServiceClient.prototype.recv_unregisterVirtualAccount = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AccountSupervisorService_unregisterVirtualAccount_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
var AccountSupervisorServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
AccountSupervisorServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
AccountSupervisorServiceProcessor.prototype.process_getRSAKey = function(seqid, input, output) {
  var args = new AccountSupervisorService_getRSAKey_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getRSAKey.length === 0) {
    Q.fcall(this._handler.getRSAKey.bind(this._handler))
      .then(function(result) {
        var result_obj = new AccountSupervisorService_getRSAKey_result({success: result});
        output.writeMessageBegin("getRSAKey", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AccountSupervisorService_getRSAKey_result(err);
          output.writeMessageBegin("getRSAKey", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getRSAKey", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getRSAKey(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AccountSupervisorService_getRSAKey_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getRSAKey", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getRSAKey", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AccountSupervisorServiceProcessor.prototype.process_notifyEmailConfirmationResult = function(seqid, input, output) {
  var args = new AccountSupervisorService_notifyEmailConfirmationResult_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.notifyEmailConfirmationResult.length === 1) {
    Q.fcall(this._handler.notifyEmailConfirmationResult.bind(this._handler), args.parameterMap)
      .then(function(result) {
        var result_obj = new AccountSupervisorService_notifyEmailConfirmationResult_result({success: result});
        output.writeMessageBegin("notifyEmailConfirmationResult", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AccountSupervisorService_notifyEmailConfirmationResult_result(err);
          output.writeMessageBegin("notifyEmailConfirmationResult", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyEmailConfirmationResult", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.notifyEmailConfirmationResult(args.parameterMap, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AccountSupervisorService_notifyEmailConfirmationResult_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("notifyEmailConfirmationResult", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("notifyEmailConfirmationResult", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AccountSupervisorServiceProcessor.prototype.process_registerVirtualAccount = function(seqid, input, output) {
  var args = new AccountSupervisorService_registerVirtualAccount_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.registerVirtualAccount.length === 3) {
    Q.fcall(this._handler.registerVirtualAccount.bind(this._handler), args.locale, args.encryptedVirtualUserId, args.encryptedPassword)
      .then(function(result) {
        var result_obj = new AccountSupervisorService_registerVirtualAccount_result({success: result});
        output.writeMessageBegin("registerVirtualAccount", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AccountSupervisorService_registerVirtualAccount_result(err);
          output.writeMessageBegin("registerVirtualAccount", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("registerVirtualAccount", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.registerVirtualAccount(args.locale, args.encryptedVirtualUserId, args.encryptedPassword, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AccountSupervisorService_registerVirtualAccount_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("registerVirtualAccount", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("registerVirtualAccount", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AccountSupervisorServiceProcessor.prototype.process_requestVirtualAccountPasswordChange = function(seqid, input, output) {
  var args = new AccountSupervisorService_requestVirtualAccountPasswordChange_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.requestVirtualAccountPasswordChange.length === 4) {
    Q.fcall(this._handler.requestVirtualAccountPasswordChange.bind(this._handler), args.virtualMid, args.encryptedVirtualUserId, args.encryptedOldPassword, args.encryptedNewPassword)
      .then(function(result) {
        var result_obj = new AccountSupervisorService_requestVirtualAccountPasswordChange_result({success: result});
        output.writeMessageBegin("requestVirtualAccountPasswordChange", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AccountSupervisorService_requestVirtualAccountPasswordChange_result(err);
          output.writeMessageBegin("requestVirtualAccountPasswordChange", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("requestVirtualAccountPasswordChange", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.requestVirtualAccountPasswordChange(args.virtualMid, args.encryptedVirtualUserId, args.encryptedOldPassword, args.encryptedNewPassword, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AccountSupervisorService_requestVirtualAccountPasswordChange_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("requestVirtualAccountPasswordChange", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("requestVirtualAccountPasswordChange", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AccountSupervisorServiceProcessor.prototype.process_requestVirtualAccountPasswordSet = function(seqid, input, output) {
  var args = new AccountSupervisorService_requestVirtualAccountPasswordSet_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.requestVirtualAccountPasswordSet.length === 3) {
    Q.fcall(this._handler.requestVirtualAccountPasswordSet.bind(this._handler), args.virtualMid, args.encryptedVirtualUserId, args.encryptedNewPassword)
      .then(function(result) {
        var result_obj = new AccountSupervisorService_requestVirtualAccountPasswordSet_result({success: result});
        output.writeMessageBegin("requestVirtualAccountPasswordSet", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AccountSupervisorService_requestVirtualAccountPasswordSet_result(err);
          output.writeMessageBegin("requestVirtualAccountPasswordSet", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("requestVirtualAccountPasswordSet", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.requestVirtualAccountPasswordSet(args.virtualMid, args.encryptedVirtualUserId, args.encryptedNewPassword, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AccountSupervisorService_requestVirtualAccountPasswordSet_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("requestVirtualAccountPasswordSet", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("requestVirtualAccountPasswordSet", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AccountSupervisorServiceProcessor.prototype.process_unregisterVirtualAccount = function(seqid, input, output) {
  var args = new AccountSupervisorService_unregisterVirtualAccount_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.unregisterVirtualAccount.length === 1) {
    Q.fcall(this._handler.unregisterVirtualAccount.bind(this._handler), args.virtualMid)
      .then(function(result) {
        var result_obj = new AccountSupervisorService_unregisterVirtualAccount_result({success: result});
        output.writeMessageBegin("unregisterVirtualAccount", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AccountSupervisorService_unregisterVirtualAccount_result(err);
          output.writeMessageBegin("unregisterVirtualAccount", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("unregisterVirtualAccount", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.unregisterVirtualAccount(args.virtualMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AccountSupervisorService_unregisterVirtualAccount_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("unregisterVirtualAccount", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("unregisterVirtualAccount", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
