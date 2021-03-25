
/******************Nombre de las variables**** */
let boton1 = document.getElementById('boton1')

let menu = document.getElementById('menu')

let btn3 = document.getElementById('btn3')

let misgif = document.getElementById('misgif')

let principal8 = document.getElementById('principal8')

let fav = document.getElementById('fav')

let principal7 = document.getElementById('principal7')

let principal4 = document.getElementById('principal4')

let principal1 = document.getElementById('principal1')

let ilustracion = document.getElementById('ilustracion')

let inspiracion1 = document.getElementById('inspiracion1')

let mascotas = document.getElementById('mascotas')

let principal5 = document.getElementById('principal5')

let principal3 = document.getElementById('principal3')

let principal2 = document.getElementById('principal2')

let lupa = document.getElementById('lupa')

let cierre = document.getElementById('cierre')

let boton = document.getElementById('boton')

let offset = 0

let buscador1 = document.getElementById('buscador1')

let scroll = document.getElementById('scroll')

let mod = document.getElementById('mod')



/**MODO NOCTURNO******************* */

// function to set a given theme/color-scheme
function setTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName;
}// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      
   } else {
      setTheme('theme-dark');

   }
}// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
   } else {
      setTheme('theme-light');

   }
})();

// function to set a given theme/color-scheme
function setTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();
mod.addEventListener('click', ()=>{
   if (localStorage.getItem('theme') === 'theme-dark'){
      menu.style.display === 'none'
   }else{
      mod.innerHTML = 'Modo Diurno'
      menu.style.display === 'none'
   }
})
/****Funcion para que aparezca el menu hamb */
boton1.addEventListener('click', (event) => {
   if (menu.style.display === 'none') {
      menu.style.display = 'block';

   } else {
      menu.style.display = 'none'
      boton1.style.display = 'block'
   }
})
btn3.addEventListener('click', () => {
   if (btn3.style.visibility === 'hidden') {
      btn3.style.visibility = 'visible'
      boton1.style.display = 'none'
      menu.style.display = 'block'
   } else {
      menu.style.display = 'none'
      boton1.style.display = 'block'
   }

})

/***CLICK en favoritos**Mobile** */
fav.addEventListener('click', (event) => {

   menu.style.display = 'none'

   principal4.style.display = 'none'

   principal1.style.display = 'none'

   principal7.style.display = 'block'
   // }
})
/*******Click en Mis GIfos ****Mobile*** */

misgif.addEventListener('click', (event) => {
   principal8.style.display = 'block'

   menu.style.display = 'none'

   principal4.style.display = 'none'


   principal1.style.display = 'none'
})
/**Consumir gifs desde la  API */
'api.giphy.com/v1/gifs/trending?api_key='

'api.giphy.com/v1/gifs/search'

'https://api.giphy.com/v1/gifs/trending?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY&limit=25&rating=g'

const api_key = 'boZGHaAmzirlZl5OiViZEx7vayQzDZoY'

const url_base = 'https://api.giphy.com/v1/gifs/trending?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY&limit=12&search=mascotas'

let mostrartrending = async () => {
   try {
      let resultado = await fetch(url_base + api_key)

      let json = await resultado.json()

      json.data.forEach(trending => {

         principal2.innerHTML += `
         <div class='foto1'>
            <img class='foto' src='${trending.images.fixed_height.url}>
         
            <img src='${trending.images.fixed_height.url}>
         </div>
         
         `
      });
   } catch (error) {
   }
}
mostrartrending()
/**Buscador desde la API */

const url_base_buscador = 'https://api.giphy.com/v1/gifs/search?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY&limit=12&q='

buscador1.addEventListener('keypress', async (e) => {
   const urls = url_base_buscador + offset + '&q=' + e.target.value
   if (e.key === 'Enter') {

      principal5.style.display = 'block'

      lupa.style.display = 'none'
      cierre.style.display = 'block'
      cierre.style.position = 'relative'
      principal2.innerHTML = ``
      let resultado = await fetch(url_base_buscador + e.target.value)

      let json = await resultado.json()
      json.data.forEach(trending => {
         principal2.innerHTML += `

         <h1 id='mascotas'>
         <div class='foto1'>
            <img class='foto' src='${trending.images.fixed_height.url}>
         
            <img src='${trending.images.fixed_height.url}>
         </div>

         <div id='favcor'
            <img class="seleccion" id="corazon"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">

            <img id="descarga" class="seleccion"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg" alt="descarga">

            <img id="expancion" class="seleccion"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg" alt="expander">

            <img class="seleccion" id="corazon"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">
         </div>
         `
         mascotas.innerHTML = ''
         mascotas.innerHTML = e.target.value

         principal3.style.display = 'block'
         principal3.style.display = 'flex'
         principal3.style.alignItems = 'center'
         inspiracion1.style.display = 'none'

      });
   }
})
/******Funcionalidad Boton Ver Mas */
lupa.addEventListener('click', () => {
   offset = 0;
   principal2.innerHTML = '';
   mostrartrending(buscador1.value, offset);
});

principal3.addEventListener('click', () => {
   offset += 12;
   mostrartrending(buscador1.value, offset);
})
/********Buscador CIERRE  y LUPA */
cierre.addEventListener('click', (e) => {

   cierre.style.display = 'none'
   lupa.style.display = 'block'
   inspiracion1.style.display = 'block'
   principal3.style.display = 'none'
   principal2.innerHTML = ''
   mascotas.innerHTML = ''
   buscador1.value.innerHTML = ''

})
/**Creación del carrusell */

scroll.style.overflow = 'scroll'

const url_BASE = 'https://api.giphy.com/v1/gifs/trending?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY&limit=12&offset=12'

let mostrarscroll = async () => {
   try {
      let resultado = await fetch(url_base + api_key)

      let json = await resultado.json()

      json.data.forEach(scrolls => {

         scroll.innerHTML += `
         <div class='foto1'>
            <img class='fotos5' src='${scrolls.images.fixed_height.url}>
         
            <img src='${scrolls.images.fixed_height.url}>
         </div>
         `

      });
   } catch (error) {
   }
}

mostrarscroll()
/*
let agrandar =document.getElementById('expancion')
agrandar.addEventListener('click', () =>{
   trending.images.fixed_height.url.width = '500px'

})
*/

