//3. Tabla de multiplicar Enunciado: Mostrar la tabla de multiplicar de un número.//
let n: number = parseInt(prompt("Ingrese un número")!);
for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n * i}`);