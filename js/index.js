/*
4- Crear una web con un reloj que muestre la siguiente información:

*/

let d = document
let informacion = d.getElementById('informacion')

let date = new Date()

let dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
const mesesDelAno = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ];
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

informacion.innerHTML = `${dias[date.getDay()]} ${date.getDate()} de ${mesesDelAno[date.getMonth()]} del ${date.getFullYear()} `
informacion.innerHTML += `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `