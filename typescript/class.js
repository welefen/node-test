var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
/**
 * base adapter
 */
var default_1 = (function () {
    function default_1() {
    }
    default_1.prototype.printDelayed = function (elements) {
        for (var _i = 0; _i < elements.length; _i++) {
            var element = elements[_i];
            yield this.delay(200);
            console.log(element);
        }
    };
    default_1.prototype.delay = function (milliseconds) {
        return new Promise(function (resolve) {
            setTimeout(resolve, milliseconds);
        });
    };
    return default_1;
})();
exports["default"] = default_1;
