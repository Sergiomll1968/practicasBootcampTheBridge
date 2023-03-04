
let hours = 3;
let minutes = 3;
let phrase;
const isPm = false;

if (isPm) {
  hours += 12;
}

minutes *= 5;

switch (minutes) {
  case 0:
    phrase = 'Son las ' + hours + ' en punto.';
    break;

  case 15:
    phrase = 'Son las ' + hours + ' y cuarto.';
    break;

  case 30:
    phrase = 'Son las ' + hours + ' y media.';
    break;

  case 45:
    hours++;
    phrase = 'Son las ' + hours + ' menos cuarto.';
    break;

  default:
    if (minutes <= 30) {
      phrase = 'Son las ' + hours + ' horas y ' + minutes + ' minutos.';
    } else {
      hours++;
      minutes = 60 - minutes;
      phrase = 'Son las ' + hours + ' menos ' + minutes + ' minutos.';
    }
    break;
}

console.log(phrase);
document.write(phrase);
