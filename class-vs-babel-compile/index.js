// 启动 --harmony 参数
// alias node='node --harmony --harmony_shipping --harmony_modules --harmony_array_includes --harmony_regexps --harmony_proxies --harmony_sloppy --harmony_unicode_regexps --harmony_reflect --harmony_destructuring --harmony_sharedarraybuffer --harmony_atomics --harmony_new_target --harmony_tostring --harmony_concat_spreadable --harmony_rest_parameters --harmony_spreadcalls --harmony_spread_arrays --harmony_arrow_functions --harmony_computed_property_names --harmony_unicode --harmony_object'

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var babelCompiled = require('./babel_compiled.js');
var Class = require('./class.js')
var babelCompiledWithoutLoose = require('./babel_compile_without_loose.js');


var fn1 = function(){
  var instance = new Class();
  var data = instance.test();
}


var fn2 = function(){
  var instance = new babelCompiled();
  var data = instance.test();
}

var fn3 = function(){
  var instance = new babelCompiledWithoutLoose();
  var data = instance.test();
}


suite.add('es6 class', function () {
   fn1()
})
.add('babel compiled', function () {
   fn2()
})
.add('babel compiled without loose', function () {
   fn3()
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });