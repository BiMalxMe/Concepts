"use strict";
function dooSomething(p) {
    console.log("Original type:", p.role);
    if ("canManageUsers" in p) {
        // TypeScript knows p is Admin here
        console.log("Admin Controls UI");
        console.log("Can manage users:", p.canManageUsers); // This works!
    }
    else {
        // TypeScript knows p is Userrr here
        console.log("User UI");
        console.log("Credits:", p.credits); // This would work for Userrr
    }
}
// Test with Admin
dooSomething({
    canManageUsers: false,
    role: "admin"
});
// Test with Userrr
dooSomething({
    credits: 100,
    role: "user"
});
