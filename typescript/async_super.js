class a {
    test() {
        return 1;
    }
}
class b extends a {
    test() {
        //let value: number = super.test();
        //let b = Promise.resolve(111);
        return 222;
    }
}
export default b;
