var Benchmark = require('benchmark');
var fs = require("fs");
var path = require("path");
var util = require("util");
var crypto = require("crypto");
var net = require("net");

/**
 * 由于非常依赖promise，所以将promise设置为全局变量
 * @type {[type]}
 */
global.Promise = require('es6-promise').Promise;

/**
 * 动态创建一个类
 * 提供了继承、扩展、调用父级别方法等方法
 * @return {[type]} [description]
 */
global.Class = function (prop) {
	"use strict";
	var cls = function () {
		function T(args) {
			if(typeof this.init === 'function'){
				//获取init返回值，如果返回一个promise，可以让后续执行在then之后
				this.__initReturn = this.init.apply(this, args);
			}
			return this;
		}
		var t = cls;
		T.prototype = t.prototype;
		T.constructor = t;
		return new T(arguments);
	};
	cls.extend = function(pro){
		extend(this.prototype, pro);
		return this;
	};
	cls.inherits = function(superCls){
		util.inherits(this, superCls);
		return this;
	};
	//调用父级方法
	cls.prototype.super_ = function(name, data){
		if (!this[name]) {
			return false;
		}
		if (!isArray(data)) {
			data = [data];
		}
		var super_ = this.constructor.super_;
		while(1){
			if (this[name] === super_.prototype[name] && super_.super_) {
				super_ = super_.super_;
			}else{
				break;
			}
		}
		var method = super_.prototype[name];
		delete super_.prototype[name];
		var ret =  method.apply(this, data);
		super_.prototype[name] = method;
		return ret;
	};
	extend(cls.prototype, prop);
	return cls;
};
/**
 * extend, from jquery，具有深度复制功能
 * @return {[type]} [description]
 */
global.extend = function(){
	"use strict";
	var args = [].slice.call(arguments);
	var deep = true;
	var target = args.shift();
	if (isBoolean(target)) {
		deep = target;
		target = args.shift();
	}
	target = target || {};
	var length = args.length;
	var options, name, src, copy, copyAsArray, clone;
	for(var i = 0; i < length; i++){
		options = args[i] || {};
		if (isFunction(options)) {
			options = options();
		}
		for(name in options){
			src = target[name];
			copy = options[name];
			if (src === copy) {
				continue;
			}
			if (deep && copy && (isObject(copy) || (copyAsArray = isArray(copy) ))) {
				if (copyAsArray) {
					copyAsArray = false;
					clone = src && isArray(src) ? src : [];
				}else{
					clone = src && isObject(src) ? src : {}; 
				}
				target[name] = extend(deep, clone, copy);
			}else if (copy !== undefined) {
				target[name] = copy;
			}
		}
	}
	return target;
};
/**
 * 是否是boolean
 * @param  {[type]}  obj
 * @return {Boolean}
 */
global.isBoolean = function(obj){
	"use strict";
	return obj === true || obj === false;
};


/**
 * 是否是boolean
 * @param  {[type]}  obj
 * @return {Boolean}
 */
global.isBoolean = function(obj){
	"use strict";
	return obj === true || obj === false;
};
//Object上toString方法
var toString = Object.prototype.toString;
/**
 * 是否是数字
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
global.isNumber = function(obj){
	"use strict";
	return toString.call(obj) === '[object Number]';
};
/**
 * 是否是个对象
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
global.isObject = function(obj){
	"use strict";
	return toString.call(obj) === '[object Object]';
};
/**
 * 是否是字符串
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
global.isString = function(obj){
	"use strict";
	return toString.call(obj) === '[object String]';
};
/**
 * 是否是个function
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
global.isFunction = function(obj){
	"use strict";
	return typeof obj === 'function';
};


/**
 * 是否是日期
 * @return {Boolean} [description]
 */
global.isDate = function(obj){
	"use strict";
	return util.isDate(obj);
};
/**
 * 是否是正则
 * @param  {[type]}  reg [description]
 * @return {Boolean}     [description]
 */
global.isRegexp = function(obj){
	"use strict";
	return util.isRegExp(obj);
};
/**
 * 是否是个错误
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
global.isError = function(obj){
	"use strict";
	return util.isError(obj);
};
/**
 * 判断对象是否为空
 * @param  {[type]}  obj
 * @return {Boolean}
 */
global.isEmpty = function(obj){
	"use strict";
	if (isObject(obj)) {
		return Object.keys(obj).length === 0;
	}else if (isArray(obj)) {
		return obj.length === 0;
	}else if (isString(obj)) {
		return obj.length === 0;
	}else if (isNumber(obj)) {
		return obj === 0;
	}else if (obj === null || obj === undefined) {
		return true;
	}else if (isBoolean(obj)) {
		return !obj;
	}
	return false;
};
/**
 * 是否是个标量
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
global.isScalar = function(obj){
	"use strict";
	return isBoolean(obj) || isNumber(obj) || isString(obj);
};
/**
 * 是否是个数组
 * @type {Boolean}
 */
global.isArray = Array.isArray;
/**
 * 是否是IP
 * @type {Boolean}
 */
global.isIP = net.isIP;
global.isIP4 = net.isIP4;
global.isIP6 = net.isIP6;
/**
 * 是否是个文件
 * @param  {[type]}  p [description]
 * @return {Boolean}   [description]
 */
global.isFile = function(p){
	"use strict";
	if (!fs.existsSync(p)) {
		return false;
	}
	var stats = fs.statSync(p);
	return stats.isFile();
};
/**
 * 是否是个目录
 * @param  {[type]}  p [description]
 * @return {Boolean}   [description]
 */
global.isDir = function(p){
	"use strict";
	if (!fs.existsSync(p)) {
		return false;
	}
	var stats = fs.statSync(p);
	return stats.isDirectory();
};
/**
 * 是否是buffer
 * @type {Boolean}
 */
global.isBuffer = Buffer.isBuffer;


var content = fs.readFileSync("page.html", {
	encoding: "utf-8"
});

var Chars = Class(function(){
	return {
		init: function(str){
			this.str = str;
			this.length = str.length
			this.pos = 0;
		},
		run: function(){
			while(this.pos ++ < this.length){
				var chr = this.str[this.pos - 1];
			}
		}
	}
})
var start = Date.now();
var instance = new Chars(content);
instance.run();
var end = Date.now();
console.log(end - start);
