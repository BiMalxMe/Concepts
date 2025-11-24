"use strict";
//normally interfaces can be used as types
//as a type
let data = {
    name: "Bimal",
    class: 12,
    mailid: "biml@gmail.com",
    subjects: ["science", "maths", "english"]
};
let bank1 = {
    userID: 1,
    name: "bimal"
};
let userwithLoan = {
    loanAmount: 123000,
    loanNumber: 111,
    totallyPaid: false,
    name: "kim",
    userID: 10
};
//trying to change the raddonly
//ERror
// Cannot assign to 'userID' because it is a read-only property.ts(2540)
// userwithLoan.userID = 90
