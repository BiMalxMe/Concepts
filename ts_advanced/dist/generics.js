"use strict";
function wrapResult(value) {
    return {
        success: true,
        data: value
    };
}
const res1 = wrapResult("hello");
const res2 = wrapResult(123);
const res3 = wrapResult({ name: "Bimal", role: "dev" });
console.log(res1);
console.log(res2);
console.log(res3);
