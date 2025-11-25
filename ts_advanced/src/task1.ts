interface Userr {
    username : number,
    name : string
}
interface Admin extends Userr {

    admin_count : number
    is_admin : true

}
interface LoggerFn {
  (msg: string): void;
}


const admin: Admin = {
    username : 1,
    name : "Bimal",
    admin_count : 3,
    is_admin : true
};

const log: LoggerFn = (msg) => {
  console.log("LOG:", msg);
};

log("Hello from TypeScript!");
