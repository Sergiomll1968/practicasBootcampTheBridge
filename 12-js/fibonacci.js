
const maxSum = 500;
const numOfDigits = 20;
let numberPosMinus2 = 0;
let numberPosMinus1 = 1;
let sum = 1;
let i = 1;

document.write(numOfDigits + ' números de la serie fibonnaci:<br>');

document.write(numberPosMinus2 + ' - ' + numberPosMinus1);

do {

  numberPosMinus2 = numberPosMinus1;
  numberPosMinus1 = sum;
  sum = numberPosMinus2 + numberPosMinus1;
  document.write(' - ' + sum);
  i++;

} while (i < numOfDigits - 1);

// ----------------------------------------------------------------------

document.write('<br><br>');

numberPosMinus2 = 0;
numberPosMinus1 = 1;
sum = 1;
i = 1;

document.write(numOfDigits + ' números de la serie fibonnaci anteriores a que la suma del siguiente sea mayor de '+maxSum+':<br>');

document.write(numberPosMinus2 + ' - ' + numberPosMinus1);
while ((i < numOfDigits - 1) && ((sum+numberPosMinus1) <= maxSum)) {

  numberPosMinus2 = numberPosMinus1;
  numberPosMinus1 = sum;
  sum = numberPosMinus2 + numberPosMinus1;
  document.write(' - ' + sum);
  i++;

}

// ----------------------------------------------------------------------

document.write('<br><br>');

numberPosMinus2 = 0;
numberPosMinus1 = 1;
sum = 1;
i = 1;

document.write(numOfDigits + ' números de la serie fibonnaci:<br>');

document.write(numberPosMinus2 + ' - ' + numberPosMinus1);

for (let i = 1; i < numOfDigits -1; i++) {

  numberPosMinus2 = numberPosMinus1;
  numberPosMinus1 = sum;
  sum = numberPosMinus2 + numberPosMinus1;
  document.write(' - ' + sum);

}
