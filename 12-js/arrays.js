
const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

document.write(monthsOfYear[0] + '<br>');
document.write(monthsOfYear[2] + '<br>');
document.write(monthsOfYear[10] + '<br>');
document.write(monthsOfYear[11] + '<br>');


document.write('<br>');

for (let index = 1; index < monthsOfYear.length; index+=3) {
  document.write(monthsOfYear[index] + ' ');
}

document.write('<br>');

for (let index = monthsOfYear.length; index>=1; index-=3) {
  document.write(monthsOfYear[index-3] + ' ');
}
