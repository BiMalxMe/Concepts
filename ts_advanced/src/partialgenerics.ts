interface ABC {
  id: number;
  name: string;
  email: string;
}

function updateABC(id: number, data: Partial<ABC>) {
  // now data can have only some fields
  console.log(`Updating ABC ${id}`, data);
}

updateABC(1, { name: "Bimal" });
updateABC(2, { email: "bimal@example.com" });
