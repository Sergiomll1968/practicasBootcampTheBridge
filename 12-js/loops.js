
for (let i = 0; i <= 5; i++) {
  document.write(i + ' ');
}

document.write('<br>');

for (let i = 5; i >= 0; i--) {
  document.write(i + ' ');
}

document.write('<br><br>');

let i = 0;
while (i <= 5) {
  document.write(i + ' ');
  i++;
}

document.write('<br>');

i = 5;
while (i >= 0) {
  document.write(i + ' ');
  i--;
}

document.write('<br><br>');

i = 0;
do {
  document.write(i + ' ');
  i++;
} while (i <= 5);

document.write('<br>');

i = 5;
do {
  document.write(i + ' ');
  i--;
} while (i >= 0);

document.write('<br><br>');

const wantOdd = true;
for (let i = 0; i <= 20; i++) {
  (wantOdd) ? (i % 2) !== 0 ? document.write(i + ' ') : document.write() : (i % 2) === 0 ? document.write(i + ' ') : document.write();
}

document.write('<br><br>');

// Números primos

document.write('Números primos del 1 al 200 (menos efectivo): <br>');
let start = Date.now();
for (let i = 2; i <= 200; i++) {

  let esPrimo = true;

  for (let j = i - 1; j >= 2; j--) {

    if ((i % j) === 0) esPrimo = false;

  }

  if (esPrimo) document.write(i + ' ');
}
let end = Date.now();
document.write('<br>Tiempo en milisegundos: ' + (end - start));

document.write('<br><br>');

document.write('Números primos del 1 al 200 (más efectivo): <br>');
start = Date.now();
for (let i = 2; i <= 200; i++) {

  let esPrimo = true;

  for (let j = 2; j <= i - 1; j++) {

    if ((i % j) === 0) esPrimo = false;

  }

  if (esPrimo) document.write(i + ' ');
}
end = Date.now();
document.write('<br>Tiempo en milisegundos: ' + (end - start));
