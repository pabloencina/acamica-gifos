
/******************Nombre de las variables**** */
let boton1 = document.getElementById('boton1')

let menu = document.getElementById('menu')

let btn3 = document.getElementById('btn3')

let misgif = document.getElementById('misgif')

let principal8 = document.getElementById('principal8')

let fav = document.getElementById('fav')

let principal7 = document.getElementById('principal7')

let principal4 = document.getElementById('principal4')

let principal12 = document.getElementById('principal12')

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

let limit = 12

let busquedaActual = ''

let buscador1 = document.getElementById('buscador1')

let buscador = document.getElementById('buscador')

let scroll = document.getElementById('scroll')

let mod = document.getElementById('mod')

let btn4 = document.getElementById('btn4')

let creargifos = document.getElementById('creargifos')

let ocultar_todo = document.getElementById('ocultar_todo')

let comenzar = document.getElementById('comenzar')

let finalizar = document.getElementById('finalizar')

let subirgifo = document.getElementById('subirgifo')

let video = document.getElementById('video')

let mostrarGif = document.getElementById('mostrarGif')

let grabar = document.getElementById('grabar')

let cont_cuadrado = document.getElementById('cont_cuadrado')

let acceso00 = document.getElementById('acceso00')

let btnUno = document.getElementById('btnUno')

let btnDos = document.getElementById('btnDos')

let btnTres = document.getElementById('btnTres')
let cuadr = document.getElementsByClassName('cuadr')

let cont802 = document.getElementById('cont802')

let repCaptura = document.getElementById('repCaptura')

let captura = document.getElementById('captura')

let icono = document.getElementById('icono')

let switchThemeDesktop = document.getElementById('switchThemeDesktop')

let switchThemeMob = document.getElementById('switchThemeMob')

let camNoc = document.getElementById('camNoc')

let peliculaNoc = document.getElementById('peliculaNoc')

let scrollLeft = document.getElementById('scrollLeft')

let scrollRigth = document.getElementById('scrollRigth')

let vermas = document.getElementById('vermas')

let redesFace = document.getElementById('redesFace')

let redesTw = document.getElementById('redesTw')

let redesInsta = document.getElementById('redesInsta')

let siguiente1 = document.getElementById('siguiente1')

let scrollLeftImg = document.getElementById('scrollLeftImg')

let btnCrear = document.getElementById('btnCrear')

let sinBusqueda = document.getElementById('sinBusqueda')

let gifFavoritos = []

let principal6 = document.getElementById('principal6')

let contenedorAutocomp = document.getElementById('contenedorAutocomp')

let lupa1 = document.getElementsByClassName('.lupa1')

let pantallaDesktop = window.matchMedia("(min-width: 1440px)")

let react = document.getElementById('react')

let wap = document.getElementById('wap')

let gifTitle = document.querySelector('#modal h3');

let gifUser = document.querySelector('#modal h4');

/**MODO NOCTURNO******************* */

//// Immediately invoked function to set the theme on initial load
/*
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      
   } else {
      setTheme('theme-light');
      
   }
})();
*/

// function to toggle between light and dark theme

switchThemeDesktop.addEventListener('click', (event) => {
   toggleTheme()
})

switchThemeMob.addEventListener('click', (event) => {
   toggleTheme()
})

function toggleTheme() {

   if (localStorage.getItem('theme') === 'theme-dark') {

      icono.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/logo-desktop.svg'

      boton1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/burger.svg'

      btn4.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-crear-gifo.svg'

      lupa.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search.svg'

      camNoc.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/camara.svg'

      peliculaNoc.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/pelicula.svg'

      vermas.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-ver-mas.svg'
      vermas.addEventListener('mouseover', () => {
         vermas.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-ver-mas-hover.svg'
      })
      vermas.addEventListener('mouseout', () => {
         vermas.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-ver-mas.svg'
      })

      cierre.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close.svg'

      siguiente1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/Button-Slider-right.svg'

      siguiente1.addEventListener('mouseover', () => {
         siguiente1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/Button-Slider-right-hover.svg'
      })
      siguiente1.addEventListener('mouseout', () => {
         siguiente1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/Button-Slider-right.svg'
      })
      scrollLeftImg.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-left.svg'

      scrollLeftImg.addEventListener('mouseover', () => {
         scrollLeftImg.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-left-hover.svg'
      })
      scrollLeftImg.addEventListener('mouseout', () => {
         scrollLeftImg.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-left.svg'
      })

      btnCrear.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-crear-gifo.svg'

      btnCrear.addEventListener('mouseover', () => {
         btnCrear.src = '/Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crear-gifo-hover.svg'
      })
      btnCrear.addEventListener('mouseout', () => {
         btnCrear.src = '/Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-crear-gifo.svg'
      })

      switchThemeDesktop.innerHTML = 'Modo Nocturno'

      switchThemeDesktop.style.color = 'var(--gifos)'

      switchThemeDesktop.style.textDecoration = 'none'

      switchThemeDesktop.style.fontWeight = 'bold'

      switchThemeDesktop.style.fontSize = '13px'

      switchThemeDesktop.style.letterSpacing = '0'

      switchThemeDesktop.style.textAlign = 'center'

      switchThemeMob.innerHTML = 'Modo Nocturno'

      switchThemeMob.style.cursor = 'pointer'

      switchThemeMob.style.color = 'white'

      switchThemeMob.style.fontFamily = 'Montserrat Alternates'

      switchThemeMob.style.fontWeight = 'bold'

      switchThemeMob.style.fontSize = '20px'

      switchThemeMob.style.textAlign = 'center'

      switchThemeMob.style.lineHeight = '60px'

      menu.style.display = 'none'

      setTheme('theme-light');
   } else {
      icono.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/logo-mobile-modo-noct.svg'

      boton1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/burger-modo-noct.svg'

      btn4.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crear-gifo-active-modo-noc.svg'

      lupa.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search-mod-noc.svg'

      camNoc.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/camara-modo-noc.svg'

      peliculaNoc.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/pelicula-modo-noc.svg'

      vermas.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-ver+-modo-noc.svg'

      vermas.addEventListener('mouseover', () => {
         vermas.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-ver+hover-modo-noc.svg'
      })
      vermas.addEventListener('mouseout', () => {
         vermas.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-ver+-modo-noc.svg'
      })


      cierre.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close-modo-noct.svg'

      scrollLeftImg.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-left-md-noct.svg'
      scrollLeftImg.addEventListener('mouseover', () => {
         scrollLeftImg.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-left-hover.svg'
      })
      scrollLeftImg.addEventListener('mouseout', () => {
         scrollLeftImg.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-left-md-noct.svg'
      })

      siguiente1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-right-md-noct.svg'
      siguiente1.addEventListener('mouseover', () => {
         siguiente1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/Button-Slider-right-hover.svg'
      })
      siguiente1.addEventListener('mouseout', () => {
         siguiente1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-right-md-noct.svg'
      })

      btnCrear.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crear-gifo-modo-noc.svg'

      btnCrear.addEventListener('mouseover', () => {
         btnCrear.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crear-gifo-modo-noc.svg'
      })
      btnCrear.addEventListener('mouseout', () => {
         btnCrear.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crar-gifo-modo-noc.svg'
      })

      switchThemeDesktop.innerHTML = 'Modo Diurno'

      switchThemeMob.innerHTML = 'Modo Diurno'

      menu.style.display = 'none'

      setTheme('theme-dark');


   }
}
focusMethod = function getFocus() {
   switchThemeDesktop.focus();
   switchThemeMob.focus();
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName;

}
/****Funcion para que aparezca el menu hamb */
boton1.addEventListener('click', (event) => {
   if (menu.style.display === 'none') {
      menu.style.display = 'block';
      lupa.style.visibility = 'hidden'
      //btn3.style.display = 'block'
      //boton1.style.visibility = 'hidden'

   } else {
      menu.style.display = 'none'
      lupa.style.visibility = 'visible'
      //boton1.style.visibility = 'visible'
      //btn3.style.display = 'none'

   }
})
/*
btn3.addEventListener('click', () => {
if (menu.style.display === 'block') {
   btn3.style.display = 'block'
   
   boton1.style.display = 'none'
   
} else {
   menu.style.display = 'none'
   boton1.style.display = 'block'
   btn3.style.display
    = 'none'
}
})

/**Consumir gifs desde la  API */
'api.giphy.com/v1/gifs/trending?api_key='

'api.giphy.com/v1/gifs/search'

'https://api.giphy.com/v1/gifs/trending?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY&limit=25&rating=g'

const api_key = 'boZGHaAmzirlZl5OiViZEx7vayQzDZoY'

const url_trending = 'https://api.giphy.com/v1/gifs/trending'

const url_buscador = 'https://api.giphy.com/v1/gifs/search'

const url_wordTrending = 'https://api.giphy.com/v1/trending/searches'

let mostrartrending = async () => {
   try {
      let resultado = await fetch(url_trending + '?api_key=' + api_key + '&limit=' + limit)

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
/*******TRENDING WORD AND phrases*******/
let mostrartrendingWord = async () => {
   let wordsAndPhases = ''
   console.log(url_wordTrending)
   try {
      let result = await fetch(url_wordTrending + '?api_key=' + api_key)
      console.log(result)
      let js = await result.json()
      console.log(js)
      js.data.forEach(word => {
         wordsAndPhases += word + ' , '

      });

      react.innerHTML = `<p class="blanco" id="react">${wordsAndPhases}</p>`



   } catch (error) {
      console.log(error)
   }

}
mostrartrendingWord()

function capitalize(word) {
   return word[0].toUpperCase() + word.slice(1);
}
/********AutoCompletado********* */
let autocompletar = async () => {
   try {
      let resultado = await fetch(urls + '?api_key=' + api_key + '&limit=' + limit)

      //let resultado = await fetch(urls)
      let json = await resultado.json()

      autocompletar(json)
   } catch (error) {
   }
}



/**Mostrar los siguiente 12 *************/
let mostrarSiguientes = async (q, offset) => {
   try {
      let urls = url_buscador + '?' + 'api_key=' + api_key + '&offset=' + offset + '&limit=' + limit + '&q=' + q;
      let resultados = await fetch(urls)

      let json = await resultados.json()

      mostrarGifs(json)
   } catch (error) {
   }
}

/*********sin Busqueda*********** */
/*
if(buscarGifs() === null){
   sinBusqueda.style.display = 'block'
}


/**Buscador desde la API */

buscador.addEventListener('keypress', async (e) => {

   if (e.key === 'Enter') {
      contenedorAutocomp.style.display = 'none'
      buscador.style.borderRadius = '1.6875rem'
      /*trending.style.display = 'none'
      wap.style.display = 'none'*/

      buscarGifs()
   } else {
      contenedorAutocomp.style.display = 'block'
      buscador.style.borderTopLeftRadius = '1.6875rem'
      buscador.style.borderTopRightRadius = '1.6875rem'
      buscador.style.borderBottomLeftRadius = '0rem'
      buscador.style.borderBottomRightRadius = '0rem'
   }
})
async function buscarGifs() {
   let urls = url_buscador + '?' + 'api_key=' + api_key + '&offset=' + offset + '&limit=' + limit + '&q=' + buscador.value;

   //buscador1.style.marginTop = '-100px'
   //principal1.style.marginTop = '-100px'
   principal5.style.display = 'block'
   lupa.style.display = 'none'
   cierre.style.display = 'block'
   cierre.style.position = 'relative'
   principal2.innerHTML = ``
   let resultado = await fetch(urls)
   let json = await resultado.json()
   mostrarGifs(json)
   mascotas.innerHTML = ''
   mascotas.innerHTML = buscador.value
   mascotas.style.textTransform = 'capitalize'
   principal3.style.display = 'block'
   principal3.style.display = 'flex'
   principal3.style.alignItems = 'center'
   inspiracion1.style.display = 'none'
}

function mostrarGifs(json) {
   json.data.forEach(gifJson => {
      console.log(gifJson)
      console.log(gifJson.title)
      console.log(gifJson.source)
      principal2.innerHTML += `

      <h1 id='mascotas'>
      <div class='foto1'>
         <img key='${gifJson.id}' class='foto' src='${gifJson.images.fixed_height.url}>
      
         <img src='${gifJson.images.fixed_height.url}>

      <div id='${gifJson.id}' class='divHover'></div>
      </div>

      <div id='favcor${gifJson.id}' class="favcor"
         <img class="seleccion" id="corazon"
      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">

         <img id="down${gifJson.id}" class="seleccion"
      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg" alt="descarga">

         <img id="exp${gifJson.id}" class="seleccion"
      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg" alt="expander">

      <img id="exp2${gifJson.id}" class="seleccion"
      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg" alt="expander">

         <img id="like${gifJson.id}" class="seleccion" 
      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">

      <img id="unlike${gifJson.id}" class="seleccion" 
      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav-active.svg" alt="corazon">
      
     
      
      `
   });
   asociarHoverFotos()
}

function asociarHover(gifElement) {
   // if (typeof HTMLElement === 'HTMLElement')

}

function asociarHoverFotos() {
   let arrayImagenes = document.querySelectorAll('.foto')

   //let favcor = document.getElementById('favcor')
   arrayImagenes.forEach(gifElement => {

      let gifKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      let divHover = document.getElementById(gifKey)
      let favcor = document.getElementById('favcor' + gifKey)
      let like = document.getElementById('like' + gifKey)
      let unlike = document.getElementById('unlike' + gifKey)
      let exp = document.getElementById('exp' + gifKey)
      let exp2 = document.getElementById('exp2' + gifKey)
      let down = document.getElementById('down' + gifKey)

      if (pantallaDesktop.matches) {

         gifElement.style.width = '260px'
         gifElement.style.height = '200px'

         gifElement.addEventListener('mouseover', (e) => {
            divHover.style.display = 'block'
            favcor.style.display = 'block'
         })
         gifElement.addEventListener('mouseout', (e) => {

         })
         divHover.addEventListener('mouseout', () => {
            divHover.style.display = 'none'
            favcor.style.display = 'none'
         })

      } else {

         gifElement.addEventListener('click', () => {
            console.log(gifElement.style.width)
            if (gifElement.style.width == '318px') {
               gifElement.style.width = '156px'
               gifElement.style.height = '120px'
               exp.style.display = 'none'
               exp2.style.display = 'none'
               favcor.style.display = 'block'
               favcor.style.display = 'none'
            } else {
               gifElement.style.width = '318px'
               gifElement.style.height = '245px'
               exp.style.display = 'none'
               exp2.style.display = 'none'
               favcor.style.display = 'block'
               favcor.style.marginLeft = '200px'
               favcor.style.marginTop = '-50px'

            }
         })
      }

      unlike.style.display = 'none'
      unlike.style.background = 'white'
      unlike.style.borderRadius = '5px'
      unlike.style.marginLeft = '-37px'
      unlike.style.width = '30px'

      exp2.style.visibility = 'hidden'
      exp2.style.marginLeft = '-37px'
      exp2.style.width = '30px'



      like.addEventListener('mouseover', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav-hover.svg'
      })

      like.addEventListener('mouseout', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg'
      })

      like.addEventListener('click', () => {
         // Buscar el array de gifKey en el localStorage.
         // Agregar la gifKey nueva en el array.
         //Guardar el array acutalizado en el localStorage.
         let keysString = localStorage.getItem('arrayK')
         let keys
         if (keysString == null) {
            keys = []
         } else {
            keys = keysString.split(",")
         }

         keys.push(gifKey)
         localStorage.setItem('arrayK', keys)

         //Guardar el sorce del gifcon el gifkey correspondiente en el localStorage.
         localStorage.setItem(gifKey, gifSrc)

         console.log(gifKey)
      })

      exp.addEventListener('mouseover', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg'
      })
      exp.addEventListener('mouseout', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg'

      })
      exp.addEventListener('click', () => {
         if (gifElement.style.width == '260px') {
            console.log(divHover)
            favcor.style.marginTop = '-380px'
            favcor.style.marginLeft = '50px'
            favcor.style.display = 'inline'
            divHover.style.width = '350px'
            divHover.style.height = '300px'
            divHover.style.top = '-100px'
            gifElement.style.width = '350px'
            gifElement.style.height = '300px'
            exp.style.visibility = 'hidden'
            exp2.style.visibility = 'visible'
         } else {
            gifElement.style.width = '260px'
            gifElement.style.height = '200px'
            favcor.style.marginTop = '-11.25rem'
            favcor.style.marginLeft = '-8.75rem'
         }

      })
      exp2.addEventListener('click', () => {
         favcor.style.marginTop = '-11.25rem'
         favcor.style.marginLeft = '8.75rem';
         favcor.style.zIndex = '10'
         favcor.style.display = 'inline'
         divHover.style.width = '260px'
         divHover.style.height = '200px'
         divHover.style.top = '0px'
         gifElement.style.width = '260px'
         gifElement.style.height = '200px'
         exp.style.visibility = 'visible'
         exp2.style.visibility = 'hidden'

      })

      down.addEventListener('mouseover', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
      })
      down.addEventListener('mouseout', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
      })
   })
}

/**
 * muestra la lista actual de favoritos
*/

function mostrarFavoritosTest() {
   principal6.innerHTML = '' // Limpiar la seccion para que no muestre el contenido anterior que tenia.
   console.log('mostrarFavoritosTest!!')

   let keysString = localStorage.getItem('arrayK')//busca en el localStorage un array de gifkey de los gif donde le fueron dando like.
   let keys = keysString.split(",") // Convertir toda la cadena en arreglos de strings.
   console.log(keys)

   keys.forEach(gifKey => {// el for each recorre cada gifKey

      let gifSrc = localStorage.getItem(gifKey)//con el gifkey se busca el gifsource correspondiente a ese gifkey.
      console.log(gifSrc)

      principal6.innerHTML += `
         <div id='principal6' class='foto1'>
            <img key='${gifKey}' class='foto' src='${gifSrc}'>
         
         <div id='${gifKey}' class='divHover'></div>
   
         </div>
         <div id='favcor${gifKey}' class="favcor"
            <img class="seleccion" id="corazon"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">
   
            <img id="down${gifKey}" class="seleccion"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg" alt="descarga">
   
            <img id="exp${gifKey}" class="seleccion"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg" alt="expander">
   
         <img id="exp2${gifKey}" class="seleccion"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg" alt="expander">
   
   
            <img id="like${gifKey}" class="seleccion" 
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">
   
         <img id="unlike${gifKey}" class="seleccion" 
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav-active.svg" alt="corazon">   
         </div>
         `
   });

}
/***********Pagina de favoritos ********/

fav.addEventListener('click', () => {
   console.log('click')

   if (principal7.style.display === 'block') {
      console.log(principal7)
      principal7.style.display = 'none'
      menu.style.display = 'none'
      principal4.style.display = 'block'
      principal1.style.display = 'block'
      principal5.style.display = 'block'
   } else {

   }
   menu.style.display = 'none'
   principal4.style.display = 'none'
   principal1.style.display = 'none'
   principal5.style.display = 'none'
   principal3.style.display = 'none'
   principal7.style.display = 'block'
   principal12.style.marginTop = '50px'
   mostrarFavoritosTest()
})
/******Funcionalidad Boton Ver Mas */

principal3.addEventListener('click', () => {
   offset += 12;
   mostrarSiguientes(buscador.value, offset);
})

/********Buscador CIERRE  y LUPA */
cierre.addEventListener('click', () => {

   cierre.style.display = 'none'
   lupa.style.display = 'block'
   inspiracion1.style.display = 'block'
   principal3.style.display = 'none'
   principal2.innerHTML = ''
   mascotas.innerHTML = ''
   buscador.value = ''
})
/**Lupa */
lupa.addEventListener('click', () => {
   buscarGifs()
});

/**Creación del carrusell */

scroll.style.overflow = 'scroll'

/*const url_BASE = 'https://api.giphy.com/v1/gifs/trending?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY&limit=12&offset=12'*/

let mostrarscroll = async () => {
   try {
      let resultado = await fetch(url_trending + '?api_key=' + api_key + '&limit=24' + limit)

      let json = await resultado.json()

      json.data.forEach(gif => {

         scroll.innerHTML += `
         
      <div class='foto1Scroll'>
            <img key='${gif.id}' class='fotos4' src='${gif.images.fixed_height.url}>

            <img  src='${gif.images.fixed_height.url}>

            <div  id='${gif.id}' class='hoverScroll'></div>

         <div id='favcor1'
         <img class="seleccion1" id="corazon1"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">

         <img id="descarga1" class="seleccion1"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg" alt="descarga">

         <img id="expancion1" class="seleccion1"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg" alt="expander">

         <img class="seleccion1" id="corazon1"
         src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">
      </div>
         </div>
         `
      });
   } catch (error) {
   }

}
mostrarscroll()
asociarHoverScroll()

function asociarHoverScroll() {
   let arrayImagenes = document.querySelectorAll('.fotos4')

   arrayImagenes.forEach(gif => {

      gif.addEventListener('mouseover', (eventoPintarScroll) => {
         console.log('click')
         let hoverScroll = document.getElementsbyId(eventoPintarScroll.target.getAttribute('key'))

         hoverScroll.style.display = 'block'

         hoverScroll.addEventListener('mouseout', () => {
            console.log('click')
            hoverScroll.style.display = 'none'
         })
      })

   })
}

/***Scroll*********** */

scrollLeft.addEventListener('click', () => {
   scroll.scrollBy(-740, 0)
})

scrollRigth.addEventListener('click', () => {
   scroll.scrollBy(740, 0)
})
/*Funcionalidad boton CREAR Gifs*****/

btn4.addEventListener('click', () => {
   if (creargifos.style.display === 'none') {
      creargifos.style.display = 'block';
      ocultar_todo.style.display = 'none'
   } else {
      ocultar_todo.style.display = 'block'
      creargifos.style.display = 'none'

   }
})
/**Funcionalidad seccion de CREAR GIFOS***** */
let recorder = null
let myGifs = []

/*
let pathSubirGif = `https://upload.giphy.com/v1/gifs?api_key=${api_key}`
 
window.onload = () => {
   let gifs = JSON.parse(localStorage.getItem('myGifs'));
   if (gifs) {
      myGifs = gifs;
   }
   download();
}
/*
async function download() {
   const a = document.createElement("a");
   a.href = await descargarGif();
   a.download = "myImage.gif";
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
}
/*
async function descargarGif() {
   var source = 'https://api.giphy.com/v1/gifs/cRfP1TiNrxLDtRrkPl?api_key=boZGHaAmzirlZl5OiViZEx7vayQzDZoY';
   let response = await fetch(source);
   let info = await response.json();
 
   return fetch(info.data.images.downsized_large.url).then((response) => {
      return response.blob();
   }).then(blob => {
      return URL.createObjectURL(blob);
   });
}
*/
function comenzando(params) {
   comenzar.addEventListener('click', () => {
      cont_cuadrado.style.display = 'none'
      acceso00.style.display = 'block'
      btnUno.style.background = 'var(--gifos)'
      btnUno.style.color = 'var(--color-primary)'
      comenzar.style.display = 'none'
      begin();

   })
}
comenzando()

grabar.addEventListener('click', () => {
   record();
})

function finalizando(params) {


   finalizar.addEventListener('click', () => {
      recorder.stopRecording(async () => {
         let blob = recorder.getBlob()
         let uri = URL.createObjectURL(blob);
         mostrarGif.src = uri;
         let form = new FormData();
         form.append('file', blob, 'myGif.gif');
         createGif(form);
      })
      video.style.display = 'none'
      finalizar.style.display = 'none'
      subirgifo.style.display = 'block'
      repCaptura.style.display = 'block'
      btnUno.style.background = 'var(--color-primary)'
   })
}
finalizando()

async function createGif(formData) {
   const response = await fetch(pathSubirGif, {
      method: 'POST',
      body: formData
   });
   const result = await response.json();

   myGifs.push(result.data.id);
   localStorage.setItem('myGifs', JSON.stringify(myGifs));
}

let stream
let streamStarted = false

function begin() {
   if (streamStarted) {
      video.play();
      return;
   }
   if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
      startStream();
   }

}

async function startStream() {

   stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
         height: { max: 480 }
      }
   });

   console.log('stream obtenido');
   video.srcObject = stream;
   streamStarted = true;
   showVideo();
}

function showVideo() {
   video.style.display = 'block'
   acceso00.style.display = 'none'
   btnDos.style.background = 'var(--gifos)'
   btnDos.style.color = 'var(--color-primary)'
   btnUno.style.background = 'var(--color-primary)'
   btnUno.style.color = ''
   grabar.style.display = 'block'
}

async function record() {

   if (stream === undefined) {
      console.log('stream is undefined')
      return;
   }

   recorder = RecordRTC(stream, {
      type: 'gif',
      frameRate: 1,
      quality: 10,
      width: 480,
      height: 320,
      hidden: 240,
      onGifRecordingStarted: function () {
         console.log('Started');
      }
   })
   grabar.style.display = 'none'
   finalizar.style.display = 'block'
   recorder.startRecording();
}

function capturar(params) {

   captura.addEventListener('click', () => {

      cont_cuadrado.style.display = 'block'
      comenzar.style.display = 'block'
      repCaptura.style.display = 'none'
      subirgifo.style.display = 'none'
      video.style.display = 'none'
      btnDos.style.background = 'var(--color-primary)'
      btnDos.style.color = ''
      finalizando()

   })

}
capturar()

/*************Imagenes Hover*********** */

redesFace.addEventListener('mouseover', () => {
   redesFace.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon_facebook_hover.svg'
})
redesFace.addEventListener('mouseout', () => {
   redesFace.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon_facebook.svg'
})

redesTw.addEventListener('mouseover', () => {
   redesTw.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-twitter-hover.svg'
})
redesTw.addEventListener('mouseout', () => {
   redesTw.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-twitter.svg'
})

redesInsta.addEventListener('mouseover', () => {
   redesInsta.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon_instagram-hover.svg'
})
redesInsta.addEventListener('mouseout', () => {
   redesInsta.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon_instagram.svg'
})

/**botones de Favorito, like y descargas ******/

