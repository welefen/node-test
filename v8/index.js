//Function that contains the pattern to be inspected (using with statement)
function containsWith(a, b_) {
  var args = new Array(arguments.length);
  for(var i = 0; i < args.length; ++i) {
              // i 始终是 arguments 对象的有效索引
      args[i] = arguments[i];
  }
  return args;
}

function printStatus(fn) {
    switch(%GetOptimizationStatus(fn)) {
        case 1: console.log("Function is optimized"); break;
        case 2: console.log("Function is not optimized"); break;
        case 3: console.log("Function is always optimized"); break;
        case 4: console.log("Function is never optimized"); break;
        case 6: console.log("Function is maybe deoptimized"); break;
    }
}

//Fill type-info
containsWith();
// 2 calls are needed to go from uninitialized -> pre-monomorphic -> monomorphic
containsWith();

%OptimizeFunctionOnNextCall(containsWith);
//The next call
containsWith();

//Check
printStatus(containsWith);