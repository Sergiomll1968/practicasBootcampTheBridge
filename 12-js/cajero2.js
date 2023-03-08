const cashRequested = 162.39;
const cash = ['500','200','100','50','20','10','5','2','1','05','02','01','005','002','001'];

const start = 'bill';
const end = 'Quantity';

for (let i = 0; i < cash.length; i++) {
  console.log(cash[i]);
  eval('let ' + start + cash[i] + end + '= ' + cashRequested + ';');
  console.log(eval('let ' + start + cash[i] + end + '= ' + cashRequested + ';'));
}
