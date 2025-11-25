type Notifications =
  | { type: "email"; email: string }
  | { type: "sms"; phone: string }
  | { type: "push"; deviceId: string };


  function sendNotification(n: Notifications) {
  if (n.type === "email") {
    console.log(`Sending email to ${n.email}`);
} else if (n.type === "sms") {
    console.log(`Sending SMS to ${n.phone}`);
  } else {
    console.log(`Sending push notification to device ${n.deviceId}`);
  }
}

sendNotification({ type: "email", email: "user@example.com" });
sendNotification({ type: "sms", phone: "123-456-7890" });
sendNotification({ type: "push", deviceId: "device123" });


//types vs interfaces
// An interface Persons with fields:

// id: number

// name: string

// Another interface Employee that extends Persons

// salary: number

// A type JobRole = "dev" | "designer" | "manager"

// A type EmployeeWithRole = Employee & { role: JobRole }

// Make an object of type EmployeeWithRole.

interface Persons {
    id : number,
    name : string
}

interface Employee extends Persons {
    salary : number
}

type JobRole = "dev" | "designer" | "manager"

type EmployeeWithRole = Employee & {role : JobRole}


const employee : EmployeeWithRole = {
    id : 1,
    name : "John",
    salary : 100000,
    role : "dev"
}
console.log(employee);