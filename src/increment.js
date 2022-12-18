var foo = {
    a: "foo",
    b: {
        c: "bar",
        d: "bazz"
    }
};
var a = foo.a, _a = foo.b, c = _a.c, d = _a.d;
console.log(a, c, d);
