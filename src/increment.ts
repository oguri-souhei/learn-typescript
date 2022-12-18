const foo = {
  a: "foo",
  b: {
    c: "bar",
    d: "bazz"
  }
}
const {
  a,
  b: { c, d }
} = foo;

console.log(a, c, d);
