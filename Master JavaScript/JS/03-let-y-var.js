'use strict'

// Pruebas con Let y var

// PRUEBA CON VAR
var numero = 40;
console.log(numero); // valor 40

if (true) {
  var numero = 50;
  console.log(numero); // valor 50
}

console.log(numero); // valor 50


// PRUEBA CON LET
var texto = "Estoy aprendiendo JavaScript";
console.log(texto); // Valor JS

if (true) {
  let texto = "Curso de Laravel 5"
  console.log(texto); // Valor Laravel
}

console.log(texto); // Valor JS