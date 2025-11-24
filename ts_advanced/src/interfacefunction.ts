
interface Details {
    username : string,
    password : string,
    login() : boolean
}


const user: Details = {
  username: "admin",
  password: "123",
  login() {
    return this.password === "123";
  }
};

console.log(user.login())

interface Payload {


    //index signatures
    
    // /definde key type
  [key: string]: string | number;
}

const dataa: Payload = {
  id: 1,
  name: "Bimal",
  city: "Pokhara"
};
