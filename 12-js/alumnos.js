const alumnos = [
  {
    nombre: 'Sergio',
    mates: 2,
    lengua: 7,
    historia: 10,
  },
  {
    nombre: 'Carlos',
    mates: 7,
    lengua: 7,
    historia: 7,
  },
  {
    nombre: 'Paulo',
    mates: 3,
    lengua: 7,
    historia: 10,
  },
  {
    nombre: 'Sergio2',
    mates: 9,
    lengua: 9,
    historia: 1,
  },
  {
    nombre: 'Juan',
    mates: 10,
    lengua: 10,
    historia: 10,
  },
];

for (let i = 0; i < alumnos.length; i++) {

  const notamedia = (alumnos[i].mates + alumnos[i].mates + alumnos[i].mates) / 3;
  let valoracion;

  if (notamedia < 5) {
    valoracion = 'Suspendido';
  } else if (notamedia < 8) {
    valoracion = 'Muy bien';
  } else if (notamedia < 10) {
    valoracion = 'No sé que nota darte';
  } else {
    valoracion = 'Excelente';
  }
  console.log('Alumno: ' + alumnos[i].nombre + ' - Nota media: ' + notamedia + ' - Valoración: ' + valoracion);
}
