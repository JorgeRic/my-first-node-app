'use strict'
const chalk = require('chalk');
//accede al paquete que hemos descargado en npm
const getNames = require ('./myModul');
//accede a la carpeta que queramos

//Los requiere simpre van arriba y los exports abajo
//Los node moduls siempre se ponen arriba 


const estudiantes = [
  {name: 'ana',
  age: 28},
  {name: 'paolo',
  age: 25},
]
for( var i= 0; i < estudiantes.length; i++){
  console.log(estudiantes[i].name)
}
console.log(chalk.blue(getNames(estudiantes)));
//llamamos a chalk y le pedimos el color deseado
