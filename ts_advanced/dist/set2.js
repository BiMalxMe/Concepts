"use strict";
function sendNotification(n) {
    if (n.type === "email") {
        console.log(`Sending email to ${n.email}`);
    }
    else if (n.type === "sms") {
        console.log(`Sending SMS to ${n.phone}`);
    }
    else {
        console.log(`Sending push notification to device ${n.deviceId}`);
    }
}
sendNotification({ type: "email", email: "user@example.com" });
sendNotification({ type: "sms", phone: "123-456-7890" });
sendNotification({ type: "push", deviceId: "device123" });
const employee = {
    id: 1,
    name: "John",
    salary: 100000,
    role: "dev"
};
console.log(employee);
