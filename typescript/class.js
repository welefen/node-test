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
class {
    constructor() {
        this.list = [1, 2, 3];
    }
    printDelayed(elements) {
        return __awaiter(this, void 0, Promise, function* () {
            for (const element of elements) {
                yield this.delay(200);
                console.log(element);
            }
        });
    }
    delay(milliseconds, ...args) {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise(resolve => {
                setTimeout(resolve, milliseconds);
            });
        });
    }
}
exports. = default_1;
