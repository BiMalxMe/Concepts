interface AAA {
  id: number;
  name: string;
}

const AAA: Readonly<AAA> = { id: 1, name: "Bimal" };
// AAA.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
console.log(AAA);



//pick only certain properties
interface Users {
  id: number;
  name: string;
  email: string;
}

type UserPreviews = Pick<Users, "id" | "name">;

const previews: UserPreviews = { id: 1, name: "Bimal" }; 


//remove certain properties
type UserWithoutEmail = Omit<Users, "email">;

const userWithoutEmail: UserWithoutEmail = { id: 2, name: "Kumar" };
console.log(userWithoutEmail);


//get object keys as union type
type UserKeys = keyof Users; // "id" | "name" | "email"

const key: UserKeys = "email";




//conditional types

type AdminCheck<T> = T extends { isAdmin: true } ? "Admin" : "User";

type A = AdminCheck<{ isAdmin: true }>;  // "Admin"
type B = AdminCheck<{ isAdmin: false }>; // "User"
