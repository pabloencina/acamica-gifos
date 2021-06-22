
/******************Nombre de las variables**** */
let boton1 = document.getElementById('boton1')

let nav = document.getElementById('nav')

let btn1 = document.getElementById('btn1')

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

let lupa1 = document.getElementById('lupa1')

let fotoTrending = document.getElementsByClassName('.fotoTrending')

let pantallaDesktop = window.matchMedia("(min-width: 1440px)")

let react = document.getElementById('react')

let wap = document.getElementById('wap')

let gifTitle = document.querySelector('#modal h3');

let gifUser = document.querySelector('#modal h4');

let seleccion23 = document.getElementsByClassName('.seleccion23')

let SinFavoritos = document.getElementById('SinFavoritos')

let favoritoOracion = document.getElementById('favoritoOracion')

let imgSinFavoritos = document.getElementById('imgSinFavoritos')

let gifos = document.getElementById('gifos')

let contenedor1 = document.getElementById('contenedor1')

let cont44 = document.getElementById('cont44')
let contenedor2 = document.getElementById('contenedor2')

let contAutocompletar = document.getElementById('contAutocompletar')

let parr1 = document.getElementById('parr1')

/**MODO NOCTURNO******************* */

//// Immediately invoked function to set the theme on initial load
/*
function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      
   } else {
      setTheme('theme-light');
      
   }
})();
*/

// function to toggle between light and dark theme

switchThemeDesktop.addEventListener('click', () => {
   toggleTheme()
})

switchThemeMob.addEventListener('click', () => {
   toggleTheme()
})

function toggleTheme() {

   if (localStorage.getItem('theme') === 'theme-dark') {

      icono.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/logo-desktop.svg'

      boton1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/burger.svg'

      btn4.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-crear-gifo.svg'

      lupa.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search.svg'

      //lupa1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search.svg'

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

      //lupa1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search-mod-noc.svg'

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
boton1.addEventListener('click', () => {
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
const api_key = 'boZGHaAmzirlZl5OiViZEx7vayQzDZoY'
const url_trending = 'https://api.giphy.com/v1/gifs/trending'
const url_buscador = 'https://api.giphy.com/v1/gifs/search'
const url_wordTrending = 'https://api.giphy.com/v1/trending/searches'
const url_descarga = 'https://upload.giphy.com/v1/gifs'
const URL_Autocompletar = 'https://api.giphy.com/v1/gifs/search/tags'//?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9&limit=5&q=';


/*******TRENDING WORD AND phrases*******/
let mostrarTrendingWord = async () => {
   const wap = document.getElementById('wap')
   let words = document.getElementsByClassName('words')

   // let gifKey = gifElement.getAttribute('key')
   try {
      let result = await fetch(url_wordTrending + '?api_key=' + api_key)

      let js = await result.json()
      let count = 0
      js.data.forEach(word => {
         let pointMark
         if (count < js.data.length - 1) {
            pointMark = ', '
         } else {
            pointMark = '.'
         }

         wap.innerHTML +=
            `
         <div id= "wordElement-${word.replaceAll(" ", "-")}" class="words" >${word + pointMark}</div>
         `
         count += 1
      });

      js.data.forEach(word => {

         let wordElement = document.getElementById("wordElement-" + word.replaceAll(" ", "-"))

         wordElement.addEventListener('click', () => {

            buscador.value = word
            buscarGifs()
            //cierre.style.marginTop = '100px'
         })
      });
   } catch (error) {
      console.log(error)
   }

}

mostrarTrendingWord()

buscador.addEventListener('keyup', async (autocompletar) => {
   let sugerencias = document.getElementById('sugerencias')

   if (autocompletar.key) {
      let limit = 5
      let urlAutocompletar = URL_Autocompletar + '?' + 'api_key=' + api_key + '&offset=' + offset + '&limit=' + limit + '&q=' + autocompletar.target.value;

      buscador.style.margin = "0";

      principal1.style.display = 'none'
      sugerencias.style.display = 'block'
      principal12.style.marginTop = '300px'
      let resultadoBusqueda = await fetch(urlAutocompletar);

      let json = await resultadoBusqueda.json();

      sugerencias.innerHTML = ""

      json.data.forEach(gifJson => {
         //contadorOffset++;
         sugerencias.innerHTML += `

         <div class="linea_Compl">
         <img id="lupa1" src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search.svg" alt="lupa">
         </div>
         <p class="itemListaBuscar" id="sugerenciaId${gifJson.name}" >${gifJson.name}</p>
           `;
      });

      json.data.forEach(gifJson => {
         let itemListaBuscar = document.getElementById('sugerenciaId' + gifJson.name)

         itemListaBuscar.addEventListener('click', () => {
            console.log(gifJson.name)
            buscador.style.borderRadius = '1.6875rem'
            buscador.innerHTML = gifJson.name
            mascotas.innerHTML = gifJson.name
            buscador.style.opacity = '1'
            buscador.value = gifJson.name
            principal3.style.display = 'block'
            vermas.style.display = 'block'
            buscarGifs()

         })
      });
   }
});

/**Mostrar los siguiente 12 *************/
let mostrarSiguientes = async (q, offset) => {
   try {
      let urls = url_buscador + '?' + 'api_key=' + api_key + '&offset=' + offset + '&limit=' + limit + '&q=' + q;
      let resultados = await fetch(urls)

      let json = await resultados.json()

      mostrarGifsBusqueda(json)
   } catch (error) {
   }
}

/**Buscador desde la API */
function buscarDesdeApi() {
   buscador.addEventListener('keypress', async (e) => {

      if (e.key === 'Enter') {
         trending.style.display = 'none'
         wap.style.display = 'none'
         sugerencias.style.opacity = '0'
         buscarGifs()
      } else {
         buscador.style.borderTopLeftRadius = '1.6875rem'
         buscador.style.borderTopRightRadius = '1.6875rem'
         buscador.style.borderBottomLeftRadius = '0rem'
         buscador.style.borderBottomRightRadius = '0rem'
      }
   })
}
buscarDesdeApi()

/********Buscador CIERRE  y LUPA */
cierre.addEventListener('click', () => {

   principal1.style.display = 'block'
   principal1.style.position = 'relative'
   cierre.style.display = 'none'
   lupa.style.display = 'block'
   principal3.style.display = 'none'
   principal2.innerHTML = ''
   mascotas.innerHTML = ''
   buscador.value = ''
   wap.style.display = 'block'
   sinBusqueda.style.display = 'none'
})

/**Lupa */
lupa.addEventListener('click', () => {
   buscarGifs()
});

/********************* */
async function buscarGifs() {
   let urls = url_buscador + '?' + 'api_key=' + api_key + '&offset=' + offset + '&limit=' + limit + '&q=' + buscador.value;
   buscador.style.borderRadius = '1.6875rem'
   principal1.style.display = 'none'
   principal5.style.display = 'block'
   lupa.style.display = 'none'
   cierre.style.display = 'block'
   sinBusqueda.style.display = 'none'

   principal2.innerHTML = ``
   let resultado = await fetch(urls)
   let json = await resultado.json()
   

   mascotas.innerHTML = ''
   mascotas.innerHTML = buscador.value
   mascotas.style.textTransform = 'capitalize'
   principal12.style.marginTop = '-20px'

   //inspiracion1.style.display = 'none'
   sugerencias.style.display = 'none'
   if(json.data.length === 0){
      sinBusqueda.style.display = 'block'
   }else{
      mostrarGifsBusqueda(json)
      principal3.style.display = 'block'
      principal3.style.display = 'flex'
      principal3.style.alignItems = 'center'
   }
}

function mostrarGifsBusqueda(json) {

   json.data.forEach(gifJson => {

      principal2.innerHTML += `
      <div class='foto1'>

         <img key='${gifJson.id}' class='fotoBusqueda' src='${gifJson.images.fixed_height.url}'>
      
         <div id='${gifJson.id}' class='divHover'>
      
            <div id='favcor${gifJson.id}' class="favcor">
               
               <img id="close12${gifJson.id}" class="seleccion23"
                  src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close.svg">

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

               <p id="gifTitle${gifJson.id}" class="gifTitle">${gifJson.title}</p>
            </div>
         </div>
      </div>
      `
   });

   let gifsBusqueda = document.querySelectorAll('.fotoBusqueda')
   if (pantallaDesktop.matches) {
      asociarEventosFotosDesktop(gifsBusqueda, 'busqueda')
   } else {
      asociarEventosFotosMobile(gifsBusqueda, 'busqueda')
   }

}

function asociarEventosFotosDesktop(gifElements, caller) {
   //let favcor = document.getElementById('favcor')
   gifElements.forEach(gifElement => {

      let gifKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      let divHover = document.getElementById(gifKey)
      let favcor = document.getElementById('favcor' + gifKey)
      let like = document.getElementById('like' + gifKey)
      let unlike = document.getElementById('unlike' + gifKey)
      let gifTitle = document.getElementById('gifTitle' + gifKey)
      let exp = document.getElementById('exp' + gifKey)
      let close12 = document.getElementById('close12' + gifKey)
      let down = document.getElementById('down' + gifKey)
      let exp2 = document.getElementById('exp2' + gifKey)

      gifElement.addEventListener('mouseover', () => {
         divHover.style.display = 'block'
         favcor.style.display = 'block'
      })

      divHover.addEventListener('mouseout', () => {
         divHover.style.display = 'none'
         favcor.style.display = 'none'
      })

      //Traer el array de keys
      //Usar el metodo includes() de la clase array para saber si el gifkey esta incluido.
      //si esta incluido mostrar el unlike y ocultar el like. Si no ocltar el unlike y mostrar el like.
      let keysString = localStorage.getItem('arrayK')
      let keys
      if (keysString == null || keysString == "") {
         keys = []
      } else {
         keys = keysString.split(",")
      }

      if (keys.includes(gifKey)) {
         unlike.style.display = 'block'
         like.style.display = 'none'
      } else {
         unlike.style.display = 'none'
         like.style.display = 'block'
      }

      unlike.style.background = 'white'
      unlike.style.borderRadius = '5px'
      unlike.style.marginLeft = '-37px'
      unlike.style.marginTop = '-35px'
      unlike.style.width = '30px'
      favcor.style.position = 'relative'
      favcor.style.marginLeft = '140px'
      exp2.style.visibility = 'hidden'
      exp2.style.display = 'none'
      close12.style.display = 'none'
      like.style.marginTop = '-35px'
      like.style.marginLeft = '-37px'
      gifTitle.style.color = 'white'
      gifTitle.style.marginLeft = '-135px'
      gifTitle.style.marginTop = '120px'
      gifTitle.style.fontSize = '14px'

      unlike.addEventListener('click', () => {

         let keysString = localStorage.getItem('arrayK')
         let keys = keysString.split(",")

         let keysFiltered = keys.filter(key => {
            return key !== gifKey
         })

         localStorage.setItem('arrayK', keysFiltered)
         mostrarFavoritos()
      })

      like.addEventListener('mouseover', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav-hover.svg'
      })

      like.addEventListener('mouseout', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg'
      })

      like.addEventListener('click', () => {

         unlike.style.display = 'block'
         unlike.style.marginLeft = '-35px'
         // seleccion23.style.display = 'none'
         unlike.style.marginTop = '-33px'
         like.style.display = 'none'
         favcor.style.marginLeft = '160px'
         // Buscar el array de gifKey en el localStorage.
         // Agregar la gifKey nueva en el array.
         //Guardar el array acutalizado en el localStorage.
         let keysString = localStorage.getItem('arrayK')
         let keys
         if (keysString == null || keysString == "") {
            keys = []
         } else {
            keys = keysString.split(",")
         }

         keys.push(gifKey)
         localStorage.setItem('arrayK', keys)

         //Guardar el sorce del gifcon el gifkey correspondiente en el localStorage.
         localStorage.setItem(gifKey, gifSrc)
         let titleKey = gifKey + '.title'
         localStorage.setItem(titleKey, gifTitle.innerHTML)

      })

      exp.addEventListener('mouseover', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg'
      })

      exp.addEventListener('mouseout', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg'
      })


      if (caller == 'busqueda') {
         exp.addEventListener('click', () => {
            console.log(gifTitle)
            favcor.style.marginTop = '250px'
            favcor.style.marginLeft = '650px'
            close12.style.display = 'block'
            close12.style.position = 'absolute'
            close12.style.marginTop = '-530px'
            close12.style.marginLeft = '50px'
            gifTitle.style.marginTop = '-20px'
            gifTitle.style.marginLeft = '-650px'
            gifTitle.style.color = 'black'
            gifTitle.style.fontSize = '14px'
            gifElement.style.width = '695px'
            gifElement.style.height = '385px'
            exp.style.visibility = 'hidden'
            like.style.marginTop = '-53px'
            unlike.style.marginTop = '-53px'
            down.style.marginTop = '-30px'
            mascotas.style.opacity = '0'
            principal3.style.opacity = '0'
            principal1.style.opacity = '0'
            principal4.style.opacity = '0'
            inspiracion1.style.opacity = '0'
            buscador1.style.opacity = '0'
            nav.style.opacity = '0'
            cont44.style.opacity = '0'
            principal12.style.opacity = '0'
            divHover.style.width = '0'
            contenedor2.style.opacity = '0'

            let otrosGifs = document.querySelectorAll('.fotoBusqueda')
            otrosGifs.forEach(gifElement => {
               if (gifElement.getAttribute('key') !== gifKey) {

                  gifElement.style.display = 'none'

               }
            })

         })
         close12.addEventListener('click', () => {
            //gifElement.style.display = 'block'
            gifElement.style.width = '260px'
            gifElement.style.height = '200px'
            divHover.style.width = '260px'
            divHover.style.height = '200px'
            close12.style.display = 'none'
            favcor.style.marginTop = '25px'
            favcor.style.marginLeft = '150px'
            exp.style.marginLeft = '15px'
            exp.style.marginTop = '-17px'
            //exp.style.display = 'block'
            exp.style.visibility = 'visible'
            exp.style.position = 'absolute'
            gifos.style.opacity = '1'
            contenedor1.style.opacity = '1'
            unlike.style.marginLeft = '-37px'
            unlike.style.marginTop = '-35px'
            gifTitle.style.color = 'white'
            gifTitle.style.marginLeft = '-135px'
            gifTitle.style.marginTop = '120px'
            down.style.marginTop = '-75px'
            like.style.marginTop = '-35px'
            principal1.style.opacity = '1'
            principal4.style.opacity = '1'
            inspiracion1.style.opacity = '1'
            buscador1.style.opacity = '1'
            nav.style.opacity = '1'
            cont44.style.opacity = '1'
            principal5.style.opacity = '1'
            principal12.style.opacity = '1'
            mascotas.style.opacity = '1'
            principal3.style.opacity = '1'
            principal2.style.opacity = '1'
            contenedor2.style.opacity = '1'

            let otrosGifs = document.querySelectorAll('.fotoBusqueda')
            otrosGifs.forEach(gifElement => {
               if (gifElement.getAttribute('key') !== gifKey) {

                  gifElement.style.display = 'block'

               }
            })
         })

      } else if (caller == 'favoritos') {

         exp.addEventListener('click', () => {
            favcor.style.marginTop = '250px'
            favcor.style.marginLeft = '650px'
            close12.style.display = 'block'
            close12.style.position = 'absolute'
            close12.style.marginTop = '-530px'
            close12.style.marginLeft = '50px'
            gifTitle.style.marginTop = '-20px'
            gifTitle.style.marginLeft = '-650px'
            gifTitle.style.color = 'black'
            gifTitle.style.fontSize = '14px'
            gifElement.style.width = '695px'
            gifElement.style.height = '385px'
            exp.style.visibility = 'hidden'
            like.style.marginTop = '-53px'
            unlike.style.marginTop = '-53px'
            down.style.marginTop = '-30px'
            mascotas.style.opacity = '0'
            principal3.style.opacity = '0'
            principal1.style.opacity = '0'
            principal4.style.opacity = '0'
            inspiracion1.style.opacity = '0'
            buscador1.style.opacity = '0'
            nav.style.opacity = '0'
            cont44.style.opacity = '0'
            principal12.style.opacity = '0'
            divHover.style.width = '0'
            contenedor2.style.opacity = '0'

            unlike.addEventListener('click', () => {
               console.log('unlike')

               let keysString = localStorage.getItem('arrayK')
               let keys = keysString.split(",")

               let keysFiltered = keys.filter(key => {
                  return key !== gifKey
               })

               localStorage.setItem('arrayK', keysFiltered)
               mostrarFavoritos()
               imagen1.style.display = 'block'
               principal7.style.display = 'block'
               contenedor2.style.opacity = '1'
               titulo1.style.display = 'block'
               cont44.style.opacity = '1'
               nav.style.opacity = '1'
               principal12.style.opacity = '1'
            })

            let otrosGifs = document.querySelectorAll('.fotoFavorito')
            otrosGifs.forEach(gifElement => {
               if (gifElement.getAttribute('key') !== gifKey) {

                  gifElement.style.display = 'none'

               }
            })

         })
         close12.addEventListener('click', () => {
            //gifElement.style.display = 'block'
            gifElement.style.width = '260px'
            gifElement.style.height = '200px'
            divHover.style.width = '260px'
            divHover.style.height = '200px'
            close12.style.display = 'none'
            favcor.style.marginTop = '25px'
            favcor.style.marginLeft = '150px'
            exp.style.marginLeft = '15px'
            exp.style.marginTop = '-17px'
            //exp.style.display = 'block'
            exp.style.visibility = 'visible'
            exp.style.position = 'absolute'
            gifos.style.opacity = '1'
            contenedor1.style.opacity = '1'
            unlike.style.marginLeft = '-37px'
            unlike.style.marginTop = '-35px'
            gifTitle.style.color = 'white'
            gifTitle.style.marginLeft = '-135px'
            gifTitle.style.marginTop = '120px'
            down.style.marginTop = '-75px'
            like.style.marginTop = '-35px'
            principal1.style.opacity = '1'
            principal4.style.opacity = '1'
            inspiracion1.style.opacity = '1'
            buscador1.style.opacity = '1'
            nav.style.opacity = '1'
            cont44.style.opacity = '1'
            principal5.style.opacity = '1'
            principal12.style.opacity = '1'
            mascotas.style.opacity = '1'
            principal3.style.opacity = '1'
            principal2.style.opacity = '1'
            contenedor2.style.opacity = '1'

            let otrosGifs = document.querySelectorAll('.fotoFavorito')
            otrosGifs.forEach(gifElement => {
               if (gifElement.getAttribute('key') !== gifKey) {

                  gifElement.style.display = 'block'

               }
            })
         })

      }
      down.addEventListener('mouseover', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
      })

      down.addEventListener('mouseout', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
      })
   })
}

function asociarEventosFotosTrendingDesktop(gifElements) {

   gifElements.forEach(gifElement => {

      let gifKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      let divHover = document.getElementById(gifKey)
      let favcor = document.getElementById('favcor' + gifKey)
      let like = document.getElementById('like' + gifKey)
      let unlike = document.getElementById('unlike' + gifKey)
      let exp = document.getElementById('exp' + gifKey)
      let exp2 = document.getElementById('exp2' + gifKey)
      let down = document.getElementById('down' + gifKey)
      let close12 = document.getElementById('close12' + gifKey)
      let gifTitle = document.getElementById('gifTitle' + gifKey)

      gifElement.addEventListener('mouseover', () => {
         divHover.style.display = 'block'
         favcor.style.display = 'block'
      })

      divHover.addEventListener('mouseout', () => {
         divHover.style.display = 'none'
         favcor.style.display = 'none'
      })

      //Traer el array de keys
      //Usar el metodo includes() de la clase array para saber si el gifkey esta incluido.
      //si esta incluido mostrar el unlike y ocultar el like. Si no ocltar el unlike y mostrar el like.
      let keysString = localStorage.getItem('arrayK')
      let keys
      if (keysString == null || keysString == "") {
         keys = []
      } else {
         keys = keysString.split(",")
      }

      if (keys.includes(gifKey)) {
         unlike.style.display = 'block'
         like.style.display = 'none'
      } else {
         unlike.style.display = 'none'
         like.style.display = 'block'
      }

      unlike.style.background = 'white'
      unlike.style.borderRadius = '5px'
      unlike.style.marginLeft = '-37px'
      unlike.style.marginTop = '-35px'
      unlike.style.width = '30px'
      favcor.style.position = 'relative'
      favcor.style.marginLeft = '250px'
      favcor.style.marginTop = '30px'
      favcor.style.position = 'relative'
      exp2.style.visibility = 'hidden'
      exp2.style.marginLeft = '-37px'
      exp2.style.width = '30px'
      like.style.marginTop = '-37px'
      like.style.marginLeft = '-37px'
      gifTitle.style.color = 'white'
      gifTitle.style.marginTop = '180px'
      gifTitle.style.marginLeft = '-220px'
      gifTitle.style.position = 'relative'
      close12.style.display = 'none'

      unlike.addEventListener('click', () => {

         let keysString = localStorage.getItem('arrayK')
         let keys = keysString.split(",")

         let keysFiltered = keys.filter(key => {
            return key !== gifKey
         })

         localStorage.setItem('arrayK', keysFiltered)
         mostrarFavoritos()
      })

      like.addEventListener('mouseover', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav-hover.svg'
      })

      like.addEventListener('mouseout', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg'
      })

      like.addEventListener('click', () => {

         unlike.style.display = 'block'
         unlike.style.marginLeft = '-40px'
         unlike.style.marginTop = '-35px'
         like.style.display = 'none'
         favcor.style.marginLeft = '250px'
         // Buscar el array de gifKey en el localStorage.
         // Agregar la gifKey nueva en el array.
         //Guardar el array acutalizado en el localStorage.
         let keysString = localStorage.getItem('arrayK')
         let keys
         if (keysString == null || keysString == "") {
            keys = []
         } else {
            keys = keysString.split(",")
         }

         keys.push(gifKey)
         localStorage.setItem('arrayK', keys)

         //Guardar el sorce del gif con el gifkey correspondiente en el localStorage.
         localStorage.setItem(gifKey, gifSrc)


      })

      exp.addEventListener('mouseover', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg'
      })

      exp.addEventListener('mouseout', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg'
      })

      let principal7DisplayBeforeExpand
      let pricipal1DisplayBeforeExpand
      let principal4DisplayBeforeExpand
      let navDisplayBeforeExpand
      let cont44DisplayBeforeExpand
      let principal5DisplayBeforeExpand

      exp.addEventListener('click', () => {
         principal7DisplayBeforeExpand = principal7.style.display
         pricipal1DisplayBeforeExpand = principal1.style.display
         principal4DisplayBeforeExpand = principal4.style.display
         navDisplayBeforeExpand = nav.style.display
         cont44DisplayBeforeExpand = cont44.style.display
         principal5DisplayBeforeExpand = principal5.style.display
         favcor.style.marginTop = '300px'
         favcor.style.marginLeft = '650px'
         like.style.marginTop = '-75px'
         favcor.style.display = 'inline'
         divHover.style.width = '0px'

         gifElement.style.zIndex = '1'
         scroll.style.height = '100%'
         gifElement.style.width = '695px'
         gifElement.style.height = '365px'
         exp.style.opacity = '0'
         close12.style.display = 'block'
         close12.style.marginLeft = '55px'
         close12.style.marginTop = '-420px'
         close12.style.opacity = '1'
         close12.style.position = 'absolute'
         unlike.style.marginTop = '-70px'
         gifTitle.style.color = 'black'
         gifTitle.style.marginLeft = '-720px'
         gifTitle.style.marginTop = '-35px'

         siguiente1.style.display = 'none'
         scrollLeftImg.style.display = 'none'
         gifos.style.display = 'none'
         contenedor1.style.display = 'none'

         principal1.style.display = 'none'
         principal4.style.display = 'none'
         //inspiracion1.style.opacity = '0'
         //buscador1.style.opacity = '0'
         nav.style.display = 'none'
         cont44.style.display = 'none'
         principal5.style.display = 'none'
         principal7.style.display = 'none'

         let otrosGifs = document.querySelectorAll('.fotoTrending')
         otrosGifs.forEach(gifElement => {
            if (gifElement.getAttribute('key') !== gifKey) {

               gifElement.style.display = 'none'
               scroll.style.width = '55%'
            }
         })

      })

      close12.addEventListener('click', () => {
         //gifElement.style.display = 'block'
         gifElement.style.width = '357px'
         gifElement.style.height = '275px'
         divHover.style.width = '357px'
         divHover.style.height = '275px'
         close12.style.display = 'none'
         favcor.style.marginTop = '30px'
         favcor.style.marginLeft = '260px'
         exp.style.marginLeft = '45px'
         exp.style.top = '-20px'
         exp.style.opacity = '1'
         exp.style.position = 'relative'
         //unlike.style.marginTop = '-73px'
         gifTitle.style.color = 'white'
         gifTitle.style.marginTop = '190px'
         gifTitle.style.marginLeft = '-250px'
         like.style.marginTop = '-55px'
         unlike.style.marginTop = '-35px'

         // siguiente1.style.marginLeft = '60px'

         siguiente1.style.display = 'block'
         scrollLeftImg.style.display = 'block'
         gifos.style.display = 'block'
         contenedor1.style.display = 'block'

         principal1.style.display = pricipal1DisplayBeforeExpand
         principal4.style.display = principal4DisplayBeforeExpand
         //inspiracion1.style.opacity = '1'
         //buscador1.style.opacity = '1'
         nav.style.display = navDisplayBeforeExpand
         cont44.style.display = cont44DisplayBeforeExpand
         principal5.style.display = principal5DisplayBeforeExpand
         principal7.style.display = principal7DisplayBeforeExpand

         let otrosGifs = document.querySelectorAll('.fotoTrending')
         otrosGifs.forEach(gifElement => {
            if (gifElement.getAttribute('key') !== gifKey) {

               gifElement.style.display = 'block'
               scroll.style.width = '78%'

            }
         })

      })

      down.addEventListener('mouseover', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
      })

      down.addEventListener('mouseout', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
      })

   })

}

function asociarEventosFotosMobile(gifElements, caller) {
   //let favcor = document.getElementById('favcor')
   gifElements.forEach(gifElement => {

      let gifKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      gifElement.setAttribute('expanded', '0')
      //let divHover = document.getElementById(gifKey)
      let favcor = document.getElementById('favcor' + gifKey)
      let like = document.getElementById('like' + gifKey)
      let unlike = document.getElementById('unlike' + gifKey)
      let close12 = document.getElementById('close12' + gifKey)
      let gifTitle = document.getElementById('gifTitle' + gifKey)
      let exp = document.getElementById('exp' + gifKey)
      let exp2 = document.getElementById('exp2' + gifKey)
      let down = document.getElementById('down' + gifKey)

      if (caller == 'busqueda') {

         gifElement.addEventListener('click', () => {
            //if (gifElement.style.width == '318px') {
            if (gifElement.getAttribute('expanded') == '0') {
               favcor.style.display = 'block'
               favcor.style.marginTop = '-50px'
               favcor.style.display = 'flex'
               favcor.style.marginTop = '110px'
               favcor.style.marginLeft = '290px'
               close12.style.marginLeft = '20px'
               close12.style.marginTop = '-780px'
               gifTitle.style.marginLeft = '-550px'
               gifTitle.style.marginTop = '-70px'
               like.style.marginTop = '-95px'
               exp.style.display = 'none'
               like.style.marginLeft = '10px'
               unlike.style.marginLeft = '20px'
               unlike.style.marginTop = '-90px'
               down.style.marginTop = '-90px'
               down.style.marginLeft = '-60px'
               cont44.style.opacity = '0'
               gifElement.style.width = '375px'
               gifElement.style.height = '245px'
               principal4.style.display = 'none'
               principal1.style.display = 'none'
               nav.style.opacity = '0.09'
               gifElement.style.position = 'relative'
               principal12.style.display = 'none'
               principal3.style.display = 'none'
               mascotas.style.display = 'none'

               let otrosGifs = document.querySelectorAll('.fotoBusqueda')
               otrosGifs.forEach(gifElement => {
                  if (gifElement.getAttribute('key') !== gifKey) {
                     gifElement.style.display = 'none'
                  }
               })
               gifElement.setAttribute('expanded', '1')
            } else {
               gifElement.setAttribute('expanded', '0')
            }

         })

         close12.addEventListener('click', () => {
            gifElement.style.width = '156px'
            gifElement.style.height = '120px'
            favcor.style.display = 'none'
            principal4.style.display = 'block'
            principal1.style.display = 'block'
            nav.style.opacity = '1'
            cont44.style.opacity = '1'
            principal12.style.display = 'block'
            principal3.style.display = 'block'
            mascotas.style.display = 'block'
            contenedor1.style.marginLeft = '80px'
            let otrosGifs = document.querySelectorAll('.fotoBusqueda')
            otrosGifs.forEach(gifElement => {
               gifElement.style.display = 'block'
            })
         })

      } else if (caller == 'favoritos') {
         gifElement.addEventListener('click', () => {
            if (gifElement.getAttribute('expanded') == '0') {
               gifElement.style.width = '375px'
               gifElement.style.height = '245px'
               favcor.style.display = 'block'
               favcor.style.marginTop = '-50px'
               favcor.style.display = 'flex'
               favcor.style.marginTop = '110px'
               favcor.style.marginLeft = '290px'
               close12.style.marginLeft = '20px'
               close12.style.marginTop = '-780px'
               gifTitle.style.marginLeft = '-300px'
               gifTitle.style.marginTop = '-60px'
               like.style.marginTop = '-95px'
               exp.style.display = 'none'
               like.style.marginLeft = '10px'
               unlike.style.marginLeft = '20px'
               unlike.style.marginTop = '-90px'
               down.style.marginTop = '-90px'
               down.style.marginLeft = '-60px'
               cont44.style.opacity = '0'
               principal4.style.display = 'none'
               principal1.style.display = 'none'
               nav.style.opacity = '0.09'
               gifElement.style.position = 'relative'
               principal12.style.display = 'none'
               principal3.style.display = 'none'
               mascotas.style.display = 'none'
               contenedor2.style.opacity = '0'

               let otrosGifs = document.querySelectorAll('.fotoFavorito')
               otrosGifs.forEach(gifElement => {
                  if (gifElement.getAttribute('key') !== gifKey) {
                     gifElement.style.display = 'none'
                  }
               })
               gifElement.setAttribute('expanded', '1')

            } else {
               gifElement.setAttribute('expanded', '0')
            }
         })
         close12.addEventListener('click', () => {
            gifElement.style.width = '156px'
            gifElement.style.height = '120px'
            favcor.style.display = 'none'
            principal4.style.display = 'none'
            principal1.style.display = 'none'
            vermas.style.display = 'none'
            nav.style.opacity = '1'
            cont44.style.opacity = '1'
            principal12.style.display = 'none'
            principal3.style.display = 'block'
            mascotas.style.display = 'block'
            contenedor1.style.marginLeft = '80px'
            contenedor2.style.opacity = '1'
            let otrosGifs = document.querySelectorAll('.fotoFavorito')
            otrosGifs.forEach(gifElement => {
               gifElement.style.display = 'block'
            })
         })

      }

      //Traer el array de keys
      //Usar el metodo includes() de la clase array para saber si el gifkey esta incluido.
      //si esta incluido mostrar el unlike y ocultar el like. Si no ocltar el unlike y mostrar el like.
      let keysString = localStorage.getItem('arrayK')
      let keys
      if (keysString == null || keysString == "") {
         keys = []
      } else {
         keys = keysString.split(",")
      }

      if (keys.includes(gifKey)) {
         unlike.style.display = 'block'
         like.style.display = 'none'
      } else {
         unlike.style.display = 'none'
         like.style.display = 'block'
      }

      unlike.style.background = 'white'
      unlike.style.borderRadius = '5px'
      unlike.style.marginLeft = '-37px'
      unlike.style.marginTop = '-35px'
      unlike.style.width = '30px'
      favcor.style.position = 'relative'
      favcor.style.marginLeft = '150px'
      exp2.style.visibility = 'hidden'
      exp2.style.marginLeft = '-37px'
      exp2.style.width = '30px'
      like.style.marginTop = '-37px'
      like.style.marginLeft = '-20px'

      unlike.addEventListener('click', () => {
         console.log('unlike')

         let keysString = localStorage.getItem('arrayK')
         let keys = keysString.split(",")

         let keysFiltered = keys.filter(key => {
            return key !== gifKey
         })

         localStorage.setItem('arrayK', keysFiltered)
         mostrarFavoritos()
         imagen1.style.display = 'block'
         principal7.style.display = 'block'
         contenedor2.style.opacity = '1'
         titulo1.style.display = 'block'
         cont44.style.opacity = '1'
         nav.style.opacity = '1'
      })

      like.addEventListener('mouseover', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav-hover.svg'
      })

      like.addEventListener('mouseout', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg'
      })

      like.addEventListener('click', () => {

         unlike.style.display = 'block'
         unlike.style.marginLeft = '20px'
         unlike.style.marginTop = '-90px'
         like.style.display = 'none'
         // Buscar el array de gifKey en el localStorage.
         // Agregar la gifKey nueva en el array.
         //Guardar el array acutalizado en el localStorage.
         let keysString = localStorage.getItem('arrayK')
         let keys
         if (keysString == null || keysString == "") {
            keys = []
         } else {
            keys = keysString.split(",")
         }

         keys.push(gifKey)
         localStorage.setItem('arrayK', keys)

         //Guardar el sorce del gifcon el gifkey correspondiente en el localStorage.
         localStorage.setItem(gifKey, gifSrc)


      })

      exp.addEventListener('mouseover', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg'
      })
      exp.addEventListener('mouseout', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg'

      })

      down.addEventListener('mouseover', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
      })
      down.addEventListener('mouseout', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
      })
      down.addEventListener('click', () => {
         console.log('click here')
         descargar_gifs()
         console.log(descargar_gifs())
         console.log(url_descarga)
      })
   })
}

let descargar_gifs = async () => {
   try {

      let url_upload = url_descarga + '?' + 'api_key=' + api_key + 'username=' + username + 'source_image_url=' + source_image_url + '&limit=' + limit + '&q=' + q;
      let resultados = await fetch(url_upload)

      let json = await resultados.json()
      console.log(resultados)
      console.log(url_upload)
      mostrarGifsBusqueda(json)
   } catch (error) {
   }
}

function asociarEventosFotosTrendingMobile(gifElements) {
   //let favcor = document.getElementById('favcor')
   gifElements.forEach(gifElement => {

      let gifKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      gifElement.setAttribute('expanded', '0')
      let divHover = document.getElementById(gifKey)
      let favcor = document.getElementById('favcor' + gifKey)
      let like = document.getElementById('like' + gifKey)
      let unlike = document.getElementById('unlike' + gifKey)
      let close12 = document.getElementById('close12' + gifKey)
      let gifTitle = document.getElementById('gifTitle' + gifKey)
      let exp = document.getElementById('exp' + gifKey)
      let exp2 = document.getElementById('exp2' + gifKey)
      let down = document.getElementById('down' + gifKey)


      gifElement.addEventListener('click', () => {
         if (gifElement.getAttribute('expanded') == '0') {
            gifElement.style.width = '375px'
            gifElement.style.height = '245px'
            gifElement.style.marginTop = '100px'
            gifElement.style.marginLeft = '0px'
            favcor.style.display = 'block'
            favcor.style.marginTop = '500px'
            divHover.style.display = 'block'
            divHover.style.marginTop = '-450px'
            close12.style.position = 'absolute'
            close12.style.display = 'block'
            close12.style.marginLeft = '190px'
            close12.style.marginTop = '-350px'
            //like.style.marginTop = '-35px'
            like.style.marginLeft = '180px'
            unlike.style.marginLeft = '180px'
            //down.style.marginTop = '260px'
            down.style.marginLeft = '50px'
            exp.style.display = 'none'
            gifTitle.style.marginLeft = '-140px'
            //gifTitle.style.marginTop = '-25px'
            principal4.style.display = 'none'
            principal1.style.display = 'none'
            nav.style.opacity = '0.09'
            principal3.style.display = 'none'
            mascotas.style.display = 'none'
            cont44.style.opacity = '1'
            //principal6.style.display = 'none'
            //contenedor2.style.display = 'none'

            //scroll Fotos
            let otrosGifs = document.querySelectorAll('.fotoTrending')
            otrosGifs.forEach(gifElement => {
               if (gifElement.getAttribute('key') !== gifKey) {
                  gifElement.style.display = 'none'
                  principal5.style.display = 'none'
                  gifos.style.display = 'none'
                  contenedor1.style.display = 'none'
                  btn3.style.display = 'none'
                  cont44.style.opacity = '0'
                  favcor.style.display = 'block'
               }
            })
            gifElement.setAttribute('expanded', '1')
         }
         close12.addEventListener('click', () => {
            gifElement.style.width = '243px'
            gifElement.style.height = '187px'
            gifElement.style.marginTop = '20px'
            favcor.style.display = 'none'
            principal4.style.display = 'block'
            principal1.style.display = 'block'
            nav.style.opacity = '1'
            menu.style.display = 'none'
            contenedor1.style.display = 'none'
            btn3.style.display = 'block'
            cont44.style.opacity = '1'
            principal3.style.display = 'block'
            mascotas.style.display = 'block'
            gifos.style.display = 'block'
            contenedor1.style.display = 'block'
            vermas.style.display = 'none'
            parr1.style.marginLeft = '0px'

            let otrosGifs = document.querySelectorAll('.fotoTrending')
            otrosGifs.forEach(gifElement => {
               gifElement.style.display = 'block'
            })
            gifElement.setAttribute('expanded', '0')

         })

      })
      //Traer el array de keys
      //Usar el metodo includes() de la clase array para saber si el gifkey esta incluido.
      //si esta incluido mostrar el unlike y ocultar el like. Si no ocltar el unlike y mostrar el like.
      let keysString = localStorage.getItem('arrayK')
      let keys
      if (keysString == null || keysString == "") {
         keys = []
      } else {
         keys = keysString.split(",")
      }
      if (keys.includes(gifKey)) {
         unlike.style.display = 'block'
         like.style.display = 'none'
      } else {
         unlike.style.display = 'none'
         like.style.display = 'block'
      }
      unlike.style.background = 'white'
      unlike.style.borderRadius = '5px'
      unlike.style.marginLeft = '-37px'
      unlike.style.marginTop = '-35px'
      unlike.style.width = '30px'
      favcor.style.position = 'relative'
      favcor.style.marginLeft = '150px'
      exp2.style.visibility = 'hidden'
      exp2.style.marginLeft = '-37px'
      exp2.style.width = '30px'
      like.style.marginTop = '-37px'
      like.style.marginLeft = '-20px'

      unlike.addEventListener('click', () => {
         console.log('gggggg')
         let keysString = localStorage.getItem('arrayK')
         let keys = keysString.split(",")
         let keysFiltered = keys.filter(key => {
            return key !== gifKey
         })

         localStorage.setItem('arrayK', keysFiltered)
         mostrarFavoritos()
      })

      like.addEventListener('mouseover', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav-hover.svg'
      })

      like.addEventListener('mouseout', () => {
         like.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg'
      })

      like.addEventListener('click', () => {

         unlike.style.display = 'block'
         //unlike.style.marginLeft = '300px'
         //unlike.style.marginTop = '-35px'
         like.style.display = 'none'
         // Buscar el array de gifKey en el localStorage.
         // Agregar la gifKey nueva en el array.
         //Guardar el array acutalizado en el localStorage.
         let keysString = localStorage.getItem('arrayK')
         let keys
         if (keysString == null || keysString == "") {
            keys = []
         } else {
            keys = keysString.split(",")
         }

         keys.push(gifKey)
         localStorage.setItem('arrayK', keys)

         //Guardar el sorce del gifcon el gifkey correspondiente en el localStorage.
         localStorage.setItem(gifKey, gifSrc)


      })

      exp.addEventListener('mouseover', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg'
      })
      exp.addEventListener('mouseout', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg'

      })
      exp.addEventListener('click', () => {
         if (gifElement.style.width == '260px') {

            favcor.style.marginTop = '20px'
            favcor.style.marginLeft = '200px'
            favcor.style.display = 'inline'
            divHover.style.width = '350px'
            divHover.style.height = '300px'
            divHover.style.top = '220px'
            gifElement.style.width = '350px'
            gifElement.style.height = '300px'
            exp.style.visibility = 'hidden'
            exp2.style.visibility = 'visible'
         } else {
            gifElement.style.width = '260px'
            gifElement.style.height = '200px'
            favcor.style.marginTop = '200px'
            favcor.style.marginLeft = '-140px'
         }

      })
      exp2.addEventListener('click', () => {
         favcor.style.marginTop = '20px'
         favcor.style.marginLeft = '100px';
         favcor.style.zIndex = '10'
         favcor.style.display = 'inline'
         divHover.style.width = '260px'
         divHover.style.height = '200px'
         divHover.style.top = '220px'
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

/* muestra la lista actual de favoritos*/
function mostrarFavoritos() {

   principal6.innerHTML = '' // Limpiar la seccion para que no muestre el contenido anterior que tenia.

   let keysString = localStorage.getItem('arrayK')//busca en el localStorage un array de gifkey de los gif donde le fueron dando like.
   if (keysString == null || keysString == "") {
      keys = []
   } else {
      keys = keysString.split(",")
   } // Convertir toda la cadena en arreglos de strings.


   /***NO HAY FAVORITOS **********/
   if (keysString === "") {
      imgSinFavoritos.style.display = 'block'
      favoritoOracion.style.display = 'block'
      cont44.style.marginTop = '350px'
      //principal12.style.display = 'none'
   } else {
      imgSinFavoritos.style.display = 'none'
      favoritoOracion.style.display = 'none'
   }

   keys.forEach(gifKey => {// el for each recorre cada gifKey
      console.log(gifKey)
      let gifSrc = localStorage.getItem(gifKey)//con el gifkey se busca el gifsource correspondiente a ese gifkey.
      let titleKey = gifKey + '.title'
      let gifTitle = localStorage.getItem(titleKey)


      principal6.innerHTML += `
      <div class='foto1'>
          <img key='${gifKey}' class='fotoFavorito' src='${gifSrc}'>
          <div id='${gifKey}' class='divHover'>
      
              <div id='favcor${gifKey}' class="favcor">

              <img id="close12${gifKey}" class="seleccion23" src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close.svg">
      
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

                  <p id="gifTitle${gifKey}" class="gifTitle">${gifTitle}</p>
                       
              </div>
          </div>
      </div>
      `

   });

   let gifsFavoritos = document.querySelectorAll('.fotoFavorito')

   if (pantallaDesktop.matches) {
      asociarEventosFotosDesktop(gifsFavoritos, 'favoritos')

   } else {
      asociarEventosFotosMobile(gifsFavoritos, 'favoritos')
   }
}

/***********Pagina de favoritos ********/
//mostrar seccion favoritos en modo mobile
fav.addEventListener('click', () => {

   if (principal7.style.display === 'block') {
      principal7.style.display = 'none'
      menu.style.display = 'none'
      principal12.style.display = 'block'
      principal4.style.display = 'block'
      principal1.style.display = 'block'
      principal5.style.display = 'block'


   }
   principal12.style.display = 'none'
   menu.style.display = 'none'
   principal4.style.display = 'none'
   principal1.style.display = 'none'
   principal5.style.display = 'none'
   principal3.style.display = 'none'
   principal7.style.display = 'block'
   mostrarFavoritos()
})

//Mostrar seccion favoritos en modo desktop
fav1.addEventListener('click', () => {

   if (principal7.style.display === 'block') {
      principal7.style.display = 'none'
      menu.style.display = 'none'
      principal4.style.display = 'block'
      principal1.style.display = 'block'
      principal5.style.display = 'block'
   }
   menu.style.display = 'none'
   principal4.style.display = 'none'
   principal1.style.display = 'none'
   principal5.style.display = 'none'
   principal3.style.display = 'none'
   principal7.style.display = 'block'
   principal12.style.marginTop = '50px'

   mostrarFavoritos()
})
/******Funcionalidad Boton Ver Mas */

principal3.addEventListener('click', () => {
   offset += 12;
   mostrarSiguientes(buscador.value, offset);
})


/**Creación del carrusell */


// https://stackoverflow.com/questions/24523532/how-do-i-convert-an-image-to-a-base64-encoded-data-url-in-sails-js-or-generally
// https://stackoverflow.com/questions/21298458/base64-encode-an-animated-gif-with-javascript

scroll.style.overflow = 'scroll'
//scroll.style.overflow = 'hidden'

let mostrarTrendingScroll = async () => {

   try {
      let resultado = await fetch(url_trending + '?api_key=' + api_key + '&limit=' + limit)

      let json = await resultado.json()

      json.data.forEach(trending => {


         scroll.innerHTML += `
         <div class='foto4'>
            <img key=${trending.id} class='fotoTrending' src='${trending.images.fixed_height.url}'>
         
            <div id=${trending.id} class='divHover'>
         
               <div id='favcor${trending.id}' class="favcor">
                  <img id="close12${trending.id}" class="seleccion23"
                     src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close.svg">

                  <a id="a${trending.id}" target="_blank" href="${trending.images.original.mp4}">  
                     <img id="down${trending.id}" class="seleccion"
                        src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg" alt="descarga">
                  </a>
                  <img id="exp${trending.id}" class="seleccion"
                     src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg" alt="expander">
                  <img id="exp2${trending.id}" class="seleccion"
                     src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg" alt="expander">
                  <img id="like${trending.id}" class="seleccion"
                     src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav.svg" alt="corazon">
                  <img id="unlike${trending.id}" class="seleccion"
                     src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-fav-active.svg" alt="corazon">
                  <p id="gifTitle${trending.id}" class="gifTitle">${trending.title}</p>
               </div>

            </div>
         </div>
         `

      });

   } catch (error) {
      console.log('error')
   }

   let gifsScrolls = document.querySelectorAll('.fotoTrending')

   // https://www.tutorialspoint.com/converting-images-to-a-base64-data-url-using-javascript
   // https://stackoverflow.com/questions/25753754/canvas-todataurl-security-error-the-operation-is-insecure
   /*
      gifsScrolls.forEach(gif => {
         gif.crossOrigin = 'anonymous'
         gif.addEventListener('load', function (event) {
            const dataUrl = getDataUrl(event.currentTarget);
            console.log(dataUrl);
         });
      })
   */

   if (pantallaDesktop.matches) {
      asociarEventosFotosTrendingDesktop(gifsScrolls)
   } else {
      asociarEventosFotosTrendingMobile(gifsScrolls)
   }

}
/*

// function to encode file data to base64 encoded string
function getDataUrl(img) {
   // Create canvas
   const canvas = document.createElement('canvas');
   const ctx = canvas.getContext('2d');
   // Set width and height
   //canvas.width = img.width;
   //canvas.height = img.height;
   // Draw the image
   ctx.drawImage(img, 0, 0);
   return canvas.toDataURL('image/gif');
}
*/

mostrarTrendingScroll()

/***Scroll*********** */

scrollLeft.addEventListener('click', () => {
   scroll.scrollBy(-380, 0)
})

scrollRigth.addEventListener('click', () => {
   scroll.scrollBy(380, 0)
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

/**Volver a la Pagina principal */

btn1.addEventListener('click', () => {
   if ((principal7.style.display == 'block')) {
      principal7.style.display = 'none'
      principal4.style.display = 'block'
      principal1.style.display = 'block'
      principal12.style.display = 'block'
      cont44.style.marginTop = '0px'
      //contenedor1.style.marginLeft = '80px'
   }
})

btn1.addEventListener('click', () => {
   if (creargifos.style.display == 'block') {
      creargifos.style.display = 'none'
      ocultar_todo.style.display = 'block'
   }
})

