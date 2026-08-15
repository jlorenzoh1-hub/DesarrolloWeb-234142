//8. Serie Fibonacci Enunciado: Mostrar los primeros 20 números de la serie Fibonacci.//
let a: number = 0, b: number = 1;
for (let i = 0; i < 20; i++) {
  console.log(a);
  let temp: number = a + b; a = b; b = temp;
}