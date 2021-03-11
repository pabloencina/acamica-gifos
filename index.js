/**MODO NOCTURNO */
const mod = document.getElementById('mod');
 
mod.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    mod.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});


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

/***CLICK en favoritos**Mobile** */

let fav = document.getElementById('fav')

let principal7 = document.getElementById('principal7')

let principal4 = document.getElementById('principal4')

let principal1 = document.getElementById('principal1')

fav.addEventListener('click', (event) => {

    menu.style.display = 'none'

    principal4.style.display = 'none'


    principal1.style.display = 'none'

   return principal7.style.display = 'block'
})

/*******Click en Mis GIfos ****Mobile*** */

let misgif = document.getElementById('misgif')

let principal8 = document.getElementById('principal8')

misgif.addEventListener('click', (event) => {
   principal8.style.display = 'block'

   menu.style.display = 'none'

   principal4.style.display = 'none'


   principal1.style.display = 'none'
})
