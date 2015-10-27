// 包含需要审查的用法的函数 (这里是 with 语句)
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

function containsWith() {
    var result;
    return _regeneratorRuntime.async(function containsWith$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return _regeneratorRuntime.awrap(_Promise.resolve(1));

            case 2:
                result = context$1$0.sent;
                return context$1$0.abrupt("return", result);

            case 4:
            case "end":
                return context$1$0.stop();
        }
    }, null, this);
};

function printStatus(fn){
    switch(%GetOptimizationStatus(fn)) {
        case 1: console.log("Function is optimized"); break;
        case 2: console.log("Function is not optimized"); break;
        case 3: console.log("Function is always optimized"); break;
        case 4: console.log("Function is never optimized"); break;
        case 6: console.log("Function is maybe deoptimized"); break;
    }
};

// 告诉编译器类型信息
containsWith();
// 为了使状态从 uninitialized 变为 pre-monomorphic, 再变为 monomorphic, 两次调用是必要的
containsWith();

%OptimizeFunctionOnNextCall(containsWith);
// 下一次调用
containsWith();

// 检查
printStatus(containsWith);

//node --trace_opt --trace_deopt --allow-natives-syntax test.js

