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

var UniversalNotificationService_notify_args = function(args) {
  this.event = null;
  if (args) {
    if (args.event !== undefined && args.event !== null) {
      this.event = new ttypes.GlobalEvent(args.event);
    }
  }
};
UniversalNotificationService_notify_args.prototype = {};
UniversalNotificationService_notify_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.event = new ttypes.GlobalEvent();
        this.event.read(input);
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

UniversalNotificationService_notify_args.prototype.write = function(output) {
  output.writeStructBegin('UniversalNotificationService_notify_args');
  if (this.event !== null && this.event !== undefined) {
    output.writeFieldBegin('event', Thrift.Type.STRUCT, 2);
    this.event.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UniversalNotificationService_notify_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.UniversalNotificationServiceException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
UniversalNotificationService_notify_result.prototype = {};
UniversalNotificationService_notify_result.prototype.read = function(input) {
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
        this.e = new ttypes.UniversalNotificationServiceException();
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

UniversalNotificationService_notify_result.prototype.write = function(output) {
  output.writeStructBegin('UniversalNotificationService_notify_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UniversalNotificationServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
UniversalNotificationServiceClient.prototype = {};
UniversalNotificationServiceClient.prototype.seqid = function() { return this._seqid; };
UniversalNotificationServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
UniversalNotificationServiceClient.prototype.notify = function(event, callback) {
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
    this.send_notify(event);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_notify(event);
  }
};

UniversalNotificationServiceClient.prototype.send_notify = function(event) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('notify', Thrift.MessageType.CALL, this.seqid());
  var params = {
    event: event
  };
  var args = new UniversalNotificationService_notify_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UniversalNotificationServiceClient.prototype.recv_notify = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UniversalNotificationService_notify_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
var UniversalNotificationServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
UniversalNotificationServiceProcessor.prototype.process = function(input, output) {
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
UniversalNotificationServiceProcessor.prototype.process_notify = function(seqid, input, output) {
  var args = new UniversalNotificationService_notify_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.notify.length === 1) {
    Q.fcall(this._handler.notify.bind(this._handler), args.event)
      .then(function(result) {
        var result_obj = new UniversalNotificationService_notify_result({success: result});
        output.writeMessageBegin("notify", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.UniversalNotificationServiceException) {
          result = new UniversalNotificationService_notify_result(err);
          output.writeMessageBegin("notify", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notify", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.notify(args.event, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.UniversalNotificationServiceException) {
        result_obj = new UniversalNotificationService_notify_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("notify", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("notify", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
