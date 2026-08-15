//25. Contar palabras en una frase Enunciado: Leer una frase y contar cuántas palabras tiene.//
let frase: string = prompt("Ingrese una frase")!;
console.log(frase.trim().split(/\s+/).length);