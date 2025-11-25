"use strict";
const user = {
    username: "admin",
    password: "123",
    login() {
        return this.password === "123";
    }
};
console.log(user.login());
const dataa = {
    id: 1,
    name: "Bimal",
    city: "Pokhara"
};
