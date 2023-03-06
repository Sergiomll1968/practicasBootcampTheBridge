function getIfIsPrime (number) {
  let esPrimo = true;

  for (let j = 2; j <= number - 1; j++) {

    if ((number % j) === 0) esPrimo = false;

  }

  return esPrimo;
}

document.write('Números primos del 1 al 200: <br>');

for (let i = 2; i <= 200; i++) {
  if (getIfIsPrime(i)) document.write(i + ' ');
}
