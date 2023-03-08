// const cashRequested = 162.39;
const cash = [500, 200, 100, 50, 20, 10, 5, 2, 1];

const start = 'bill';

for (let i = 0; i < cash.length; i++) {
  document.write(cash[i] + '<br>');
  // eval('let ' + start + cash[i] + ' = ' + 'zzz' + ';');
}

var k = 'value';
var i = 0;
for (i = 1; i < 5; i++) {
  eval('var ' + k + i + '= ' + i + ';');
}
console.log("value1=" + value1);
console.log("value2=" + value2);
console.log("value3=" + value3);
console.log("value4=" + value4);
