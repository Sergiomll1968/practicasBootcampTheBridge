// Pide la edad y si es mayor de 18 años indica que ya puede conducir.

const age = parseInt(prompt('Dime tu edad: '));
age > 18 ? console.log('Ya puedes conducir') : console.log('Todavía no puedes conducir');

// Pide una nota (número). Muestra la calificación según la nota:
//   0-2: Muy deficiente
//   3-4: Insuficiente
//   5: Suficiente
//   6: Bien
//   7-8: Notable
//   9-10: Sobresaliente

const grade = parseInt(prompt('Dame tu nota: '));
switch (grade) {
  case 0:
  case 1:
  case 2:
    console.log('Muy deficiente');
    break;
  case 3:
  case 4:
    console.log('Insuficiente');
    break;
  case 5:
    console.log('Suficiente');
    break;
  case 6:
    console.log('Bien');
    break;
  case 7:
  case 8:
    console.log('Notable');
    break;
  case 9:
  case 10:
    console.log('Sobresaliente');
    break;
  default:
    console.log('Nota no válida');
    break;
}

// Completa las condiciones de los if, del siguiente script para que los mensajes se muestren siempre de forma correcta

// const numero1 = 5;
// const numero2 = 8;

// if(...) {
//   console.log('numero1 no es mayor que numero2');
// }

// if(...) {
//   console.log('numero2 es positivo');
// }

// if(...) {
//   console.log('numero1 es negativo o distinto de cero');
// }

// if(...) {
//   console.log('Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2');
// }

// Solución:

const numero1 = 5;
const numero2 = 8;

if (numero2 > numero1) {
  console.log('numero1 no es mayor que numero2');
}

if (numero2 > 0) {
  console.log('numero2 es positivo');
}

if (numero1 < 0 || numero1 !== 0) {
  console.log('numero1 es negativo o distinto de cero');
}

if ((numero1 + 1) < numero2) {
  console.log('Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2');
}

// Escribir un script que simule el juego de los lanzamiento de tres dardos.
// Hacer uso de la de la diana para obtener números aleatorios entre 1 y 20
// (como es una diana) para cada uno de los lanzamientos de los dardos.
// Una vez obtenidos los números de los dardos, sumar, multiplicar según
// sea el caso. Y obtener el resultado final de la partida.

// Solución sin arrays de objetos ni funciones

const minNumber = 1, maxNumber = 20;
const multipliers = ['simple', 'doble', 'triple', 'diana simple', 'diana doble'];
const minMultiplier = 0, maxMultiplier = multipliers.length - 1;
const points = [1, 2, 3, 25, 50];

let dart1, dart2, dart3;
let multiplier1, multiplier2, multiplier3;
let point1, point2, point3;
let menuOption;

do {

  menuOption = parseInt(prompt('Elige -> 1 - Tirar los dardos y 0 - Terminar : '));

  if (menuOption === 1) {

    dart1 = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    multiplier1 = Math.floor(Math.random() * (maxMultiplier - minMultiplier) + minMultiplier);
    point1 = dart1 * points[multiplier1];

    dart2 = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    multiplier2 = Math.floor(Math.random() * (maxMultiplier - minMultiplier) + minMultiplier);
    point2 = dart2 * points[multiplier2];

    dart3 = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    multiplier3 = Math.floor(Math.random() * (maxMultiplier - minMultiplier) + minMultiplier);
    point3 = dart3 * points[multiplier3];

    console.log('Dardo 1: ' + dart1 + ' Zona: ' + multipliers[multiplier1] + ' - Puntos: ' + point1);
    console.log('Dardo 2: ' + dart2 + ' Zona: ' + multipliers[multiplier2] + ' - Puntos: ' + point2);
    console.log('Dardo 3: ' + dart3 + ' Zona: ' + multipliers[multiplier3] + ' - Puntos: ' + point3);

    console.log('Total puntos: ' + (point1 + point2 + point3));

  }

} while (menuOption != 0);
