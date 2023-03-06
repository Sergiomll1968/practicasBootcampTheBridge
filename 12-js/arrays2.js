
const daysOfWeek = ['L ', 'M ', 'X ', 'J ', 'V ', 'S ', 'D '];
const monthDays = 31;
const startDay = 3;
let day;

for (let i = 1; i < monthDays; i++) {

  if (daysOfWeek[(i % daysOfWeek.length) - 1] === undefined) {

    day = 'D';

  } else {

    day = daysOfWeek[(i % daysOfWeek.length) - 1];

  }

  console.log((i - startDay + 1) + ' => ' + day);
}
