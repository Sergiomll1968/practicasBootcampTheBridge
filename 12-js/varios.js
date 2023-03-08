const fruits = [
  {
    name: 'lima',
    size: 'pequeña',
    color: 'verde',
  },
  {
    name: 'naranja',
    size: 'pequeña',
    color: 'naranja',
  },
  {
    name: 'pera',
    size: 'pequeña',
    color: 'verde',
  },
  {
    name: 'sandia',
    size: 'grande',
    color: 'verde',
  },
  {
    name: 'manzana',
    size: 'pequeña',
    color: 'roja',
  },
  {
    name: 'melon',
    size: 'grande',
    color: 'verde',
  },
];

for (let i = 0; i < fruits.length; i++) {

  if (fruits[i].color === 'verde' && fruits[i].size === 'pequeña') {
    console.log('La fruta "' + fruits[i].name + '" es ' + fruits[i].color + ' y ' + fruits[i].size);
  }

}

fruits.forEach(fruit => {
  if (fruit.color === 'verde' && fruit.size === 'pequeña') {
    console.log('La fruta "' + fruit.name + '" es ' + fruit.color + ' y ' + fruit.size);
  }

});
