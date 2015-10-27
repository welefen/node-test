var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var _config = {};
global.C1 = function(name, value){
	"use strict";
	//获取所有的配置
	if (arguments.length === 0) {
		return _config;
	}
	//清除所有的配置
	if (name === null) {
		_config = {};
	}
	if (isString(name)) {
		if (name.indexOf('.') === -1) {
			name = name.toLowerCase();
			if (value === undefined) {
				return _config[name];
			}
			_config[name] = value;
			return;
		}
		name = name.split(".");
		name[0] = name[0].toLowerCase();
		if (value === undefined) {
			value = _config[name[0]] || {};
			return value[name[1]];
		}
		if (!_config[name[0]]) {
			_config[name[0]] = {};
		}
		_config[name[0]][name[1]] = value;
	}else{
		_config = extend(_config, name);
	}
};

global.C = function(name, value){
	"use strict";
	//获取所有的配置
	if (arguments.length === 0) {
		return _config;
	}
	//清除所有的配置
	if (name === null) {
		_config = {};
	}
	if (isString(name)) {
		if (name.indexOf('.') === -1) {
			name = name.toLowerCase();
			if (value === undefined) {
				return _config[name];
			}
			_config[name] = value;
			return;
		}
		name = name.split(".");
		name[0] = name[0].toLowerCase();
		if (value === undefined) {
			value = _config[name[0]] || {};
			return value[name[1]];
		}
		if (!_config[name[0]]) {
			_config[name[0]] = {};
		}
		_config[name[0]][name[1]] = value;
	}else{
		_config = extend(_config, name);
	}
};

for(var i = 0;i<10000;i++){
	var name = "name:" +i;
	C1(name, "value:" + Math.random());
	C(name, "value:" + Math.random());
}



suite.add('c1', function () {
   var content = C1('name')
}).add('c2', function (defer) {
   var content = C.name;
})// add listeners
.add('c3', function (defer) {
   var content = C('name');
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });