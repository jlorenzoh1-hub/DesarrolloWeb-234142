//19. División Enunciado: Leer un número y mostrar su tabla de división entre 1 y 10.//
let n: number = parseInt(prompt("Ingrese un número")!);
for (let i = 1; i <= 10; i++) console.log(`${n}/${i} = ${n / i}`);