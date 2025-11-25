"use strict";
function updateABC(id, data) {
    // now data can have only some fields
    console.log(`Updating ABC ${id}`, data);
}
updateABC(1, { name: "Bimal" });
updateABC(2, { email: "bimal@example.com" });
