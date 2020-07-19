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

var AgeCheckService_checkUserAge_args = function(args) {
  this.carrier = null;
  this.sessionId = null;
  this.verifier = null;
  this.standardAge = null;
  if (args) {
    if (args.carrier !== undefined && args.carrier !== null) {
      this.carrier = args.carrier;
    }
    if (args.sessionId !== undefined && args.sessionId !== null) {
      this.sessionId = args.sessionId;
    }
    if (args.verifier !== undefined && args.verifier !== null) {
      this.verifier = args.verifier;
    }
    if (args.standardAge !== undefined && args.standardAge !== null) {
      this.standardAge = args.standardAge;
    }
  }
};
AgeCheckService_checkUserAge_args.prototype = {};
AgeCheckService_checkUserAge_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.carrier = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.sessionId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.verifier = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.standardAge = input.readI32();
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

AgeCheckService_checkUserAge_args.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckService_checkUserAge_args');
  if (this.carrier !== null && this.carrier !== undefined) {
    output.writeFieldBegin('carrier', Thrift.Type.I32, 2);
    output.writeI32(this.carrier);
    output.writeFieldEnd();
  }
  if (this.sessionId !== null && this.sessionId !== undefined) {
    output.writeFieldBegin('sessionId', Thrift.Type.STRING, 3);
    output.writeString(this.sessionId);
    output.writeFieldEnd();
  }
  if (this.verifier !== null && this.verifier !== undefined) {
    output.writeFieldBegin('verifier', Thrift.Type.STRING, 4);
    output.writeString(this.verifier);
    output.writeFieldEnd();
  }
  if (this.standardAge !== null && this.standardAge !== undefined) {
    output.writeFieldBegin('standardAge', Thrift.Type.I32, 5);
    output.writeI32(this.standardAge);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgeCheckService_checkUserAge_result = function(args) {
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
AgeCheckService_checkUserAge_result.prototype = {};
AgeCheckService_checkUserAge_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
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

AgeCheckService_checkUserAge_result.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckService_checkUserAge_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
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

var AgeCheckService_checkUserAgeWithDocomo_args = function(args) {
  this.openIdRedirectUrl = null;
  this.standardAge = null;
  this.verifier = null;
  if (args) {
    if (args.openIdRedirectUrl !== undefined && args.openIdRedirectUrl !== null) {
      this.openIdRedirectUrl = args.openIdRedirectUrl;
    }
    if (args.standardAge !== undefined && args.standardAge !== null) {
      this.standardAge = args.standardAge;
    }
    if (args.verifier !== undefined && args.verifier !== null) {
      this.verifier = args.verifier;
    }
  }
};
AgeCheckService_checkUserAgeWithDocomo_args.prototype = {};
AgeCheckService_checkUserAgeWithDocomo_args.prototype.read = function(input) {
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
        this.openIdRedirectUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.standardAge = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
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

AgeCheckService_checkUserAgeWithDocomo_args.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckService_checkUserAgeWithDocomo_args');
  if (this.openIdRedirectUrl !== null && this.openIdRedirectUrl !== undefined) {
    output.writeFieldBegin('openIdRedirectUrl', Thrift.Type.STRING, 2);
    output.writeString(this.openIdRedirectUrl);
    output.writeFieldEnd();
  }
  if (this.standardAge !== null && this.standardAge !== undefined) {
    output.writeFieldBegin('standardAge', Thrift.Type.I32, 3);
    output.writeI32(this.standardAge);
    output.writeFieldEnd();
  }
  if (this.verifier !== null && this.verifier !== undefined) {
    output.writeFieldBegin('verifier', Thrift.Type.STRING, 4);
    output.writeString(this.verifier);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgeCheckService_checkUserAgeWithDocomo_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.AgeCheckDocomoResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
AgeCheckService_checkUserAgeWithDocomo_result.prototype = {};
AgeCheckService_checkUserAgeWithDocomo_result.prototype.read = function(input) {
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
        this.success = new ttypes.AgeCheckDocomoResult();
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

AgeCheckService_checkUserAgeWithDocomo_result.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckService_checkUserAgeWithDocomo_result');
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

var AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_args = function(args) {
};
AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_args.prototype = {};
AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_args.prototype.read = function(input) {
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

AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_args.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result = function(args) {
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
AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result.prototype = {};
AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result.prototype.read = function(input) {
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

AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result');
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

var AgeCheckService_retrieveRequestToken_args = function(args) {
  this.carrier = null;
  if (args) {
    if (args.carrier !== undefined && args.carrier !== null) {
      this.carrier = args.carrier;
    }
  }
};
AgeCheckService_retrieveRequestToken_args.prototype = {};
AgeCheckService_retrieveRequestToken_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.carrier = input.readI32();
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

AgeCheckService_retrieveRequestToken_args.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckService_retrieveRequestToken_args');
  if (this.carrier !== null && this.carrier !== undefined) {
    output.writeFieldBegin('carrier', Thrift.Type.I32, 2);
    output.writeI32(this.carrier);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgeCheckService_retrieveRequestToken_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.AgeCheckRequestResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
AgeCheckService_retrieveRequestToken_result.prototype = {};
AgeCheckService_retrieveRequestToken_result.prototype.read = function(input) {
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
        this.success = new ttypes.AgeCheckRequestResult();
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

AgeCheckService_retrieveRequestToken_result.prototype.write = function(output) {
  output.writeStructBegin('AgeCheckService_retrieveRequestToken_result');
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

var AgeCheckServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
AgeCheckServiceClient.prototype = {};
AgeCheckServiceClient.prototype.seqid = function() { return this._seqid; };
AgeCheckServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
AgeCheckServiceClient.prototype.checkUserAge = function(carrier, sessionId, verifier, standardAge, callback) {
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
    this.send_checkUserAge(carrier, sessionId, verifier, standardAge);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_checkUserAge(carrier, sessionId, verifier, standardAge);
  }
};

AgeCheckServiceClient.prototype.send_checkUserAge = function(carrier, sessionId, verifier, standardAge) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('checkUserAge', Thrift.MessageType.CALL, this.seqid());
  var params = {
    carrier: carrier,
    sessionId: sessionId,
    verifier: verifier,
    standardAge: standardAge
  };
  var args = new AgeCheckService_checkUserAge_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AgeCheckServiceClient.prototype.recv_checkUserAge = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgeCheckService_checkUserAge_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('checkUserAge failed: unknown result');
};
AgeCheckServiceClient.prototype.checkUserAgeWithDocomo = function(openIdRedirectUrl, standardAge, verifier, callback) {
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
    this.send_checkUserAgeWithDocomo(openIdRedirectUrl, standardAge, verifier);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_checkUserAgeWithDocomo(openIdRedirectUrl, standardAge, verifier);
  }
};

AgeCheckServiceClient.prototype.send_checkUserAgeWithDocomo = function(openIdRedirectUrl, standardAge, verifier) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('checkUserAgeWithDocomo', Thrift.MessageType.CALL, this.seqid());
  var params = {
    openIdRedirectUrl: openIdRedirectUrl,
    standardAge: standardAge,
    verifier: verifier
  };
  var args = new AgeCheckService_checkUserAgeWithDocomo_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AgeCheckServiceClient.prototype.recv_checkUserAgeWithDocomo = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgeCheckService_checkUserAgeWithDocomo_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('checkUserAgeWithDocomo failed: unknown result');
};
AgeCheckServiceClient.prototype.retrieveOpenIdAuthUrlWithDocomo = function(callback) {
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
    this.send_retrieveOpenIdAuthUrlWithDocomo();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_retrieveOpenIdAuthUrlWithDocomo();
  }
};

AgeCheckServiceClient.prototype.send_retrieveOpenIdAuthUrlWithDocomo = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('retrieveOpenIdAuthUrlWithDocomo', Thrift.MessageType.CALL, this.seqid());
  var args = new AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AgeCheckServiceClient.prototype.recv_retrieveOpenIdAuthUrlWithDocomo = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('retrieveOpenIdAuthUrlWithDocomo failed: unknown result');
};
AgeCheckServiceClient.prototype.retrieveRequestToken = function(carrier, callback) {
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
    this.send_retrieveRequestToken(carrier);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_retrieveRequestToken(carrier);
  }
};

AgeCheckServiceClient.prototype.send_retrieveRequestToken = function(carrier) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('retrieveRequestToken', Thrift.MessageType.CALL, this.seqid());
  var params = {
    carrier: carrier
  };
  var args = new AgeCheckService_retrieveRequestToken_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AgeCheckServiceClient.prototype.recv_retrieveRequestToken = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgeCheckService_retrieveRequestToken_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('retrieveRequestToken failed: unknown result');
};
var AgeCheckServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
AgeCheckServiceProcessor.prototype.process = function(input, output) {
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
AgeCheckServiceProcessor.prototype.process_checkUserAge = function(seqid, input, output) {
  var args = new AgeCheckService_checkUserAge_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.checkUserAge.length === 4) {
    Q.fcall(this._handler.checkUserAge.bind(this._handler), args.carrier, args.sessionId, args.verifier, args.standardAge)
      .then(function(result) {
        var result_obj = new AgeCheckService_checkUserAge_result({success: result});
        output.writeMessageBegin("checkUserAge", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AgeCheckService_checkUserAge_result(err);
          output.writeMessageBegin("checkUserAge", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("checkUserAge", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.checkUserAge(args.carrier, args.sessionId, args.verifier, args.standardAge, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AgeCheckService_checkUserAge_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("checkUserAge", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("checkUserAge", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AgeCheckServiceProcessor.prototype.process_checkUserAgeWithDocomo = function(seqid, input, output) {
  var args = new AgeCheckService_checkUserAgeWithDocomo_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.checkUserAgeWithDocomo.length === 3) {
    Q.fcall(this._handler.checkUserAgeWithDocomo.bind(this._handler), args.openIdRedirectUrl, args.standardAge, args.verifier)
      .then(function(result) {
        var result_obj = new AgeCheckService_checkUserAgeWithDocomo_result({success: result});
        output.writeMessageBegin("checkUserAgeWithDocomo", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AgeCheckService_checkUserAgeWithDocomo_result(err);
          output.writeMessageBegin("checkUserAgeWithDocomo", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("checkUserAgeWithDocomo", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.checkUserAgeWithDocomo(args.openIdRedirectUrl, args.standardAge, args.verifier, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AgeCheckService_checkUserAgeWithDocomo_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("checkUserAgeWithDocomo", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("checkUserAgeWithDocomo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AgeCheckServiceProcessor.prototype.process_retrieveOpenIdAuthUrlWithDocomo = function(seqid, input, output) {
  var args = new AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.retrieveOpenIdAuthUrlWithDocomo.length === 0) {
    Q.fcall(this._handler.retrieveOpenIdAuthUrlWithDocomo.bind(this._handler))
      .then(function(result) {
        var result_obj = new AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result({success: result});
        output.writeMessageBegin("retrieveOpenIdAuthUrlWithDocomo", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result(err);
          output.writeMessageBegin("retrieveOpenIdAuthUrlWithDocomo", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("retrieveOpenIdAuthUrlWithDocomo", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.retrieveOpenIdAuthUrlWithDocomo(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AgeCheckService_retrieveOpenIdAuthUrlWithDocomo_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("retrieveOpenIdAuthUrlWithDocomo", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("retrieveOpenIdAuthUrlWithDocomo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AgeCheckServiceProcessor.prototype.process_retrieveRequestToken = function(seqid, input, output) {
  var args = new AgeCheckService_retrieveRequestToken_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.retrieveRequestToken.length === 1) {
    Q.fcall(this._handler.retrieveRequestToken.bind(this._handler), args.carrier)
      .then(function(result) {
        var result_obj = new AgeCheckService_retrieveRequestToken_result({success: result});
        output.writeMessageBegin("retrieveRequestToken", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new AgeCheckService_retrieveRequestToken_result(err);
          output.writeMessageBegin("retrieveRequestToken", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("retrieveRequestToken", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.retrieveRequestToken(args.carrier, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new AgeCheckService_retrieveRequestToken_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("retrieveRequestToken", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("retrieveRequestToken", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
