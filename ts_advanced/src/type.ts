
type User = {
    name : string,
    class : number,
    mailid : string,
    subjects : string[]

}

let userOne : User  = {
    name : "Bimal",
    class : 12,
    mailid : "biml@gmail.com",
    subjects : ["science","maths","english"]
}

const display = () => [
  console.log(JSON.stringify(userOne))
]
display()

//sending the fucntion type

function typeCheck(u  : User) {
    //only prints if the type check is succesfull
    console.log(u)
}

typeCheck({
    name : "kkk",
    class : 3,
    mailid : "kdgmr@gmail.com",

    //fails
    // subjects : "english"
    subjects: ["nepali"]
})