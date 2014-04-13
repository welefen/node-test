//使用shift和普通的i++性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var datas20_1 = [];
for (var i = 0; i < 20; i++) {
  datas20_1.push(i);
}

var datas20_2 = [];
for (var i = 0; i < 20; i++) {
  datas20_2.push(i);
}

function fn(i, callback){}

suite
.add('use shift', function () {
   function callIt(){
      var item = datas20_1.shift();
      if (item === undefined) {
        return;
      };
      fn(item, function(){
        callIt();
      })
   }
   callIt();
})
.add('use i++', function () {
    var length = datas20_2.length;
    var i = 0;
    function callIt(){
       if (i === length) {
          return;
       };
       var item = datas20_2[i++];
       fn(item, function(){
          callIt();
       })
    }
    callIt();
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });