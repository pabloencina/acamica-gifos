/**MODO NOCTURNO */
/*
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

   principal7.style.display = 'block'
   // }

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

/**Consumir gifs desde la  API */
'api.giphy.com/v1/gifs/trending?api_key='

'api.giphy.com/v1/gifs/search'

'https://api.giphy.com/v1/gifs/trending?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY&limit=25&rating=g'


let principal2 = document.getElementById('principal2')

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

let buscador1 = document.getElementById('buscador1')

const url_base_buscador = 'https://api.giphy.com/v1/gifs/search?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY&limit=12&q='

buscador1.addEventListener('keypress', async (e) => {

   if (e.key === 'Enter') {

      principal2.innerHTML = ``
      let resultado = await fetch(url_base_buscador + e.target.value)

      let json = await resultado.json()
      json.data.forEach(trending => {
         principal2.innerHTML += `
         <div class='foto1'>
            <img class='foto' src='${trending.images.fixed_height.url}>
         
            <img src='${trending.images.fixed_height.url}>
         </div>
         `
      });
   
   }
})

