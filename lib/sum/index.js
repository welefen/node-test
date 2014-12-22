var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

function sum1(x) {
    var result = x;
    while (x >= 1) {
        result += --x;
    }
    return result;
}

function sum2(x) {
    if (x === 1) {
        return 1;
    }
    return x + sum2(--x);
}

function sum3(x, total) {
  //total = total || 0;
  if (x === 1) {
      return x + total;
  }
  return sum3(--x, x + total);
}


//console.log(insertSort(getData(10).slice(0)))


suite.add('sum while', function () {
  sum1(100)
}).add('sum recursive', function () {
  sum2(100)
}).add('sum foot recursive', function () {
  sum3(100, 0)
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();