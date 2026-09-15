const juan = {
  id: 1,
  nombre: "Juan",
  email: "juan@example.com",
  username: "1234",
  password: "password123",
  avatar: "./assets/avatar/1.png",
  admin: true,
};

console.log(juan);
console.log(juan.nombre);

juan.nombre = 33;

console.log(juan);
console.log(juan.nombre);
