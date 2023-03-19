const arr1 = ['a', 'b', 'c'];
const arr2 = [{ name: 'jona' }, { name: 'matias' }, { name: 'sergio' }];
const matrix = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9']
];

arr1[0];

arr2[0].name;

const row1 = matrix[0];
const row2 = matrix[1];
const row3 = matrix[2];

matrix[2][1];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
