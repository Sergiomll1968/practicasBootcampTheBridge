const hour = {
  hours : 3,
  minutes : 3,
  phrase:'',
  isPm : false,
};

// let hours = 3;
// let minutes = 3;
// let phrase;
// const isPm = false;

if (hour.isPm) {
  hour.hours += 12;
}

hour.minutes *= 5;

switch (hour.minutes) {
  case 0:
    hour.phrase = 'Son las ' + hour.hours + ' en punto.';
    break;

  case 15:
    hour.phrase = 'Son las ' + hour.hours + ' y cuarto.';
    break;

  case 30:
    hour.phrase = 'Son las ' + hour.hours + ' y media.';
    break;

  case 45:
    hour.hours++;
    hour.phrase = 'Son las ' + hour.hours + ' menos cuarto.';
    break;

  default:
    if (hour.minutes <= 30) {
      hour.phrase = 'Son las ' + hour.hours + ' horas y ' + hour.minutes + ' minutos.';
    } else {
      hour.hours++;
      hour.minutes = 60 - hour.minutes;
      hour.phrase = 'Son las ' + hour.hours + ' menos ' + hour.minutes + ' minutos.';
    }
    break;
}

console.log(hour.phrase);
document.write(hour.phrase);
