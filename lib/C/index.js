var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var _config = {};
global.C1 = function(name, value){
	"use strict";
	if (name === undefined) {
		return _config;
	}
	if (typeof name === 'string') {
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
		//C = extend(C, name);
	}
};

global.C = function(name, value){
	"use strict";
	if (name === undefined) {
		var result = {};
		for(name in C){
			result[name] = C[name];
		}
		return result;
	}
	if (typeof name === 'string') {
		if (name.indexOf('.') === -1) {
			if (value === undefined) {
				return C[name];
			}
			C[name] = value;
			return;
		}
		name = name.split(".");
		if (value === undefined) {
			value = C[name[0]] || {};
			return value[name[1]];
		}
		if (!C[name[0]]) {
			C[name[0]] = {};
		}
		C[name[0]][name[1]] = value;
	}else{
		//C = extend(C, name);
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
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });