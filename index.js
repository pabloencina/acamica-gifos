/****Funcion para que aparezca el menu hamb */
let boton1 = document.getElementById('boton1')

let menu = document.getElementById('menu')

boton1.addEventListener('click', (event) => {
   if (menu.style.display === 'none') {
      menu.style.display = 'block';
   } else {
      menu.style.display = 'none'
   }
})
/*****Aparicion de boton de cierre de menu hamb****************** */
let boton2 = document.getElementById('boton2')

boton2.addEventListener('click', (event) => {
   if (boton2.style.display = 'none') {
      boton2.style.display = 'block'
      menu.style.display = 'block';
   }else{
      boton2.style.display = 'none'
   }
})
/***CLICK en favoritos**** */
let fav = document.getElementById('fav')

let principal7 = document.getElementById('principal7')

let principal4 = document.getElementById('principal4')

let principal1 = document.getElementById('principal1')

fav.addEventListener('click', (event) => {
   principal7.style.display = 'block'

   menu.style.display = 'none'

   principal4.style.display = 'none'


   principal1.style.display = 'none'
})

/*******Click en Mis GIfos ******* */

let misgif = document.getElementById('misgif')

let principal8 = document.getElementById('principal8')

misgif.addEventListener('click', (event) => {
   principal8.style.display = 'block'

   menu.style.display = 'none'

   principal4.style.display = 'none'


   principal1.style.display = 'none'
})

