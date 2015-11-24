// 启动 --harmony 参数
// alias node='node --harmony --harmony_shipping --harmony_modules --harmony_array_includes --harmony_regexps --harmony_proxies --harmony_sloppy --harmony_unicode_regexps --harmony_reflect --harmony_destructuring --harmony_sharedarraybuffer --harmony_atomics --harmony_new_target --harmony_tostring --harmony_concat_spreadable --harmony_rest_parameters --harmony_spreadcalls --harmony_spread_arrays --harmony_arrow_functions --harmony_computed_property_names --harmony_unicode --harmony_object'

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var babelCompiled = require('./babel_compiled.js');
var generators = require('./generators.js')


var promiseFn = function(){
  return Promise.resolve(1).then(function(data){
    return data + 2;
  })
}

suite.add('es6 generators', function (defer) {
  generators().then(function(){
    defer.resolve();
  })
}, {defer: true})
.add('babel compiled', function (defer) {
   babelCompiled().then(function(){
    defer.resolve();
  })
}, {defer: true})
.add('promise', function (defer) {
   promiseFn().then(function(){
    defer.resolve();
  })
}, {defer: true})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });