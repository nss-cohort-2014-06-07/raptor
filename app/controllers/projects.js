'use strict';

var Project = require('../models/project');

exports.add = function(data){
  Project.add(this, data);
};

exports.reboot = function(){
  Project.reboot(this);
};

exports.deleteAll = function(){
  Project.deleteAll(this);
};

exports.freeMem = function(){
  Project.freeMem(this);
};

