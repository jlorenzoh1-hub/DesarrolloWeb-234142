//15. Contar negativos Enunciado: Leer 10 números y contar cuántos son negativos.//
let cont: number = 0;
for (let i = 0; i < 10; i++) if (parseInt(prompt("Ingrese un número")!) < 0) cont++;
console.log(cont);