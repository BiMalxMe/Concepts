

//normally interfaces can be used as types

interface Person{
    name : string,
    class : number,
    mailid : string,
    subjects : string[]
}

//as a type
let data : Person = { 
    name : "Bimal",
    class : 12,
    mailid : "biml@gmail.com",
    subjects : ["science","maths","english"]
}

// But also it can be extended as interface extend interface

interface Bank{
    readonly userID : number,
    name : string
}

let bank1 :Bank= {
    userID :1,
    name : "bimal"
}

//extending
interface Loan extends Bank{
    loanNumber : number,
    loanAmount : number,
    totallyPaid : boolean
}

let userwithLoan : Loan = {
    loanAmount : 123000,
    loanNumber : 111,
    totallyPaid : false,
    name : "kim",
    userID : 10
}

//trying to change the raddonly

//ERror
// Cannot assign to 'userID' because it is a read-only property.ts(2540)

// userwithLoan.userID = 90


