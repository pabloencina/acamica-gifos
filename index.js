/******************Nombre de las variables**** */
let boton1 = document.getElementById('boton1');

let nav = document.getElementById('nav');

let btn1 = document.getElementById('btn1');

let botonVerMas = document.getElementById('botonVerMas');

let vermas = document.getElementById('vermas');

let menu = document.getElementById('menu');

let btn3 = document.getElementById('btn3');

let misgifsMobile = document.getElementById('misgifsMobile');

let misgifs1 = document.getElementById('misgifs1');

let principal8 = document.getElementById('principal8');

let fav = document.getElementById('fav');

let principal7 = document.getElementById('principal7');

let principal4 = document.getElementById('principal4');

let principal12 = document.getElementById('principal12');

let principal1 = document.getElementById('principal1');

let ilustracion = document.getElementById('ilustracion');

let inspiracion1 = document.getElementById('inspiracion1');

let mascotas = document.getElementById('mascotas');

let principal5 = document.getElementById('principal5');

let principal3 = document.getElementById('principal3');

let principal2 = document.getElementById('principal2');

let lupa = document.getElementById('lupa');

let cierre = document.getElementById('cierre');

let offset = 0;

let limit = 12;

let busquedaActual = '';

let buscador1 = document.getElementById('buscador1');

let buscador = document.getElementById('buscador');

let scroll = document.getElementById('scroll');

let mod = document.getElementById('mod');

let btn4 = document.getElementById('btn4');

let creargifos = document.getElementById('creargifos');

let ocultar_todo = document.getElementById('ocultar_todo');

let comenzar = document.getElementById('comenzar');

let finalizar = document.getElementById('finalizar');

let subirgifo = document.getElementById('subirgifo');

let video = document.getElementById('video');

let mostrarGif = document.getElementById('mostrarGif');

let mostrarCamara = document.getElementById('mostrarCamara');

let grabar = document.getElementById('grabar');

let cont_cuadrado = document.getElementById('cont_cuadrado');

let acceso00 = document.getElementById('acceso00');

let btnUno = document.getElementById('btnUno');

let btnDos = document.getElementById('btnDos');

let btnTres = document.getElementById('btnTres');

let cuadr = document.getElementsByClassName('cuadr');

let cont802 = document.getElementById('cont802');

let repCaptura = document.getElementById('repCaptura');

let captura = document.getElementById('captura');

let icono = document.getElementById('icono');

let switchThemeDesktop = document.getElementById('switchThemeDesktop');

let switchThemeMob = document.getElementById('switchThemeMob');

let camNoc = document.getElementById('camNoc');

let peliculaNoc = document.getElementById('peliculaNoc');

let scrollLeft = document.getElementById('scrollLeft');

let scrollRigth = document.getElementById('scrollRigth');
let redesFace = document.getElementById('redesFace');

let redesTw = document.getElementById('redesTw');

let redesInsta = document.getElementById('redesInsta');

let siguiente1 = document.getElementById('siguiente1');

let scrollLeftImg = document.getElementById('scrollLeftImg');

let btnCrear = document.getElementById('btnCrear');

let sinBusqueda = document.getElementById('sinBusqueda');

let gifFavoritos = [];

let principal6 = document.getElementById('principal6');

let lupa1 = document.getElementById('lupa1');

let fotoTrending = document.getElementsByClassName('.fotoTrending');

let pantallaDesktop = window.matchMedia("(min-width: 1440px)");

let react = document.getElementById('react');

let wap = document.getElementById('wap');

let gifUser = document.querySelector('#modal h4');

let seleccion23 = document.getElementsByClassName('seleccion23');

let SinFavoritos = document.getElementById('SinFavoritos');

let favoritoOracion = document.getElementById('favoritoOracion');

let imgSinFavoritos = document.getElementById('imgSinFavoritos');

let gifos = document.getElementById('gifos');

let contenedor1 = document.getElementById('contenedor1');

let cont44 = document.getElementById('cont44');

let contenedor2 = document.getElementById('contenedor2');

let contAutocompletar = document.getElementById('contAutocompletar');

let parr1 = document.getElementById('parr1');

let contenidoSubiendoGifo = document.getElementById('contenidoSubiendoGifo');

let contenidoGifSubido = document.getElementById('contenidoGifSubido');

let botonDescargaGifo = document.getElementById('botonDescargaGifo');

let botonLinkGIfo = document.getElementById('botonLinkGIfo');

let principal9 = document.getElementById('principal9');

let imgSinGifos = document.getElementById('imgSinGifos');

let parrafoGifos = document.getElementById('parrafoGifos');

let btnDescartar = document.getElementById('btnDescartar');

let contenedor3 = document.getElementById('contenedor3');

let linkGifo = document.getElementById('linkGifo');

switchThemeDesktop.addEventListener('click', () => {
   toggleTheme()
})

switchThemeMob.addEventListener('click', () => {
   toggleTheme()
})

function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-light') {
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
      seleccion23.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close-modo-noct.svg'
      scrollLeftImg.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-left-md-noct.svg'
      btnCrear.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crear-gifo-modo-noc.svg'

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

      btnCrear.addEventListener('mouseover', () => {
         btnCrear.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crear-gifo-modo-noc.svg'
      })
      btnCrear.addEventListener('mouseout', () => {
         btnCrear.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crar-gifo-modo-noc.svg'
      })

      switchThemeDesktop.innerHTML = 'Modo Diurno'
      switchThemeDesktop.style.color = 'white'

      switchThemeMob.innerHTML = 'Modo Diurno'
      switchThemeMob.style.color = 'white'
      menu.style.display = 'none'

      setTheme('theme-dark');
   } else {
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
      seleccion23.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close.svg'
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
      switchThemeDesktop.style.cursor = 'pointer'
      switchThemeDesktop.style.color = 'var(--gifos)'
      switchThemeDesktop.style.textDecoration = 'none'
      switchThemeDesktop.style.fontWeight = 'bold'
      switchThemeDesktop.style.fontSize = '13px'
      switchThemeDesktop.style.letterSpacing = '0'
      switchThemeDesktop.style.textAlign = 'center'

      switchThemeMob.innerHTML = 'Modo Nocturno'
      switchThemeMob.style.cursor = 'pointer'
      switchThemeMob.style.fontFamily = 'Montserrat Alternates'
      switchThemeMob.style.fontWeight = 'bold'
      switchThemeMob.style.fontSize = '20px'
      switchThemeMob.style.textAlign = 'center'
      switchThemeMob.style.lineHeight = '60px'
      menu.style.display = 'none'

      setTheme('theme-light');
   }
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName;
}
/****Funcion para que aparezca el menu hamb */
boton1.addEventListener('click', () => {
   if (menu.style.display === 'block') {
      menu.style.display = 'none'
      lupa.style.visibility = 'visible'
   } else {
      menu.style.display = 'block';
      lupa.style.visibility = 'hidden'
   }
})

/**Consumir gifs desde la  API */
const api_key = 'boZGHaAmzirlZl5OiViZEx7vayQzDZoY'
const url_trending = 'https://api.giphy.com/v1/gifs/trending'
const url_buscador = 'https://api.giphy.com/v1/gifs/search'
const url_wordTrending = 'https://api.giphy.com/v1/trending/searches'
const URL_Autocompletar = 'https://api.giphy.com/v1/gifs/search/tags'


/*******TRENDING WORD AND phrases*******/
let mostrarTrendingWord = async () => {
   const wap = document.getElementById('wap')
   let words = document.getElementsByClassName('words')
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
            buscador.style.borderRadius = '1.6875rem'
            buscador.innerHTML = gifJson.name
            mascotas.innerHTML = gifJson.name
            buscador.style.opacity = '1'
            buscador.value = gifJson.name
            botonVerMas.style.display = 'block'
            botonVerMas.style.display = 'block'
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
      console.log(error)
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
if (pantallaDesktop.matches) {
   cierre.addEventListener('click', () => {
      principal1.style.display = 'block'
      principal1.style.position = 'relative'
      principal1.style.width = '800px'
      principal1.style.marginLeft = '300px'
      principal1.style.height = '264px'
      principal1.style.display = 'flex'
      principal1.style.justifyContent = 'center'
      principal1.style.alignItems = 'center'
      cierre.style.display = 'none'
      lupa.style.display = 'block'
      botonVerMas.style.display = 'none'
      principal2.innerHTML = ''
      mascotas.innerHTML = ''
      buscador.value = ''
      wap.style.display = 'block'
      sinBusqueda.style.display = 'none'
   })
} else {
   cierre.addEventListener('click', () => {
      principal1.style.display = 'block'
      principal1.style.position = 'relative'
      principal1.style.height = '200px'
      principal1.style.display = 'flex'
      principal1.style.justifyContent = 'center'
      principal1.style.alignItems = 'center'
      cierre.style.display = 'none'
      lupa.style.display = 'block'
      botonVerMas.style.display = 'none'
      principal2.innerHTML = ''
      mascotas.innerHTML = ''
      buscador.value = ''
      wap.style.display = 'block'
      sinBusqueda.style.display = 'none'
   })
}


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

   sugerencias.style.display = 'none'
   if (json.data.length === 0) {
      sinBusqueda.style.display = 'block'
   } else {
      mostrarGifsBusqueda(json)
      botonVerMas.style.display = 'block'
      botonVerMas.style.display = 'flex'
      botonVerMas.style.alignItems = 'center'
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
                  src="./Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close-modo-noct.svg">

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
   gifElements.forEach(gifElement => {

      let gifKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      let divHover = document.getElementById(gifKey)
      let favcor = document.getElementById('favcor' + gifKey)
      let like = document.getElementById('like' + gifKey)
      let unlike = document.getElementById('unlike' + gifKey)
      let exp = document.getElementById('exp' + gifKey)
      let close12 = document.getElementById('close12' + gifKey)
      let down = document.getElementById('down' + gifKey)
      let exp2 = document.getElementById('exp2' + gifKey)
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
      favcor.style.marginLeft = '140px'
      exp2.style.visibility = 'hidden'
      exp2.style.display = 'none'
      close12.style.display = 'none'
      like.style.marginTop = '-35px'
      like.style.marginLeft = '-37px'
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
         like.style.display = 'none'

         let keysString = localStorage.getItem('arrayK')
         let keys
         if (keysString == null || keysString == "") {
            keys = []
         } else {
            keys = keysString.split(",")
         }

         keys.push(gifKey)
         localStorage.setItem('arrayK', keys)

         //Guardar el source del gif con el gifkey correspondiente en el localStorage.
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
            favcor.style.marginTop = '250px'
            favcor.style.marginLeft = '650px'
            close12.style.display = 'block'
            close12.style.position = 'absolute'
            close12.style.marginTop = '-530px'
            close12.style.marginLeft = '50px'
            gifTitle.style.marginTop = '-20px'
            gifTitle.style.marginLeft = '-650px'
            gifTitle.style.fontSize = '14px'
            gifElement.style.width = '695px'
            gifElement.style.height = '385px'
            exp.style.visibility = 'hidden'
            like.style.marginTop = '-53px'
            unlike.style.marginTop = '-53px'
            down.style.marginTop = '-30px'
            mascotas.style.opacity = '0'
            botonVerMas.style.opacity = '0'
            principal1.style.opacity = '0'
            principal4.style.opacity = '0'
            inspiracion1.style.opacity = '0'
            buscador1.style.opacity = '0'
            nav.style.opacity = '0'
            cont44.style.opacity = '0'
            principal12.style.opacity = '0'
            divHover.style.width = '0'
            contenedor2.style.opacity = '0'

            gifElement.addEventListener('mouseover', () => {
               divHover.style.display = 'block'
               favcor.style.display = 'block'
            })

            divHover.addEventListener('mouseout', () => {
               divHover.style.display = 'block'
               favcor.style.display = 'block'
            })

            let otrosGifs = document.querySelectorAll('.fotoBusqueda')
            otrosGifs.forEach(gifElement => {
               if (gifElement.getAttribute('key') !== gifKey) {

                  gifElement.style.display = 'none'

               }
            })

         })
         close12.addEventListener('click', () => {
            gifElement.style.width = '260px'
            gifElement.style.height = '200px'
            divHover.style.width = '260px'
            divHover.style.height = '200px'
            close12.style.display = 'none'
            favcor.style.marginTop = '25px'
            favcor.style.marginLeft = '150px'
            exp.style.marginLeft = '15px'
            exp.style.marginTop = '-17px'
            exp.style.visibility = 'visible'
            exp.style.position = 'absolute'
            gifos.style.opacity = '1'
            contenedor1.style.opacity = '1'
            unlike.style.marginLeft = '-37px'
            unlike.style.marginTop = '-35px'
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
            botonVerMas.style.opacity = '1'
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
            gifTitle.style.fontSize = '14px'
            gifElement.style.width = '695px'
            gifElement.style.height = '385px'
            exp.style.visibility = 'hidden'
            like.style.marginTop = '-53px'
            unlike.style.marginTop = '-53px'
            down.style.marginTop = '-30px'
            mascotas.style.opacity = '0'
            botonVerMas.style.opacity = '0'
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
            gifElement.style.width = '260px'
            gifElement.style.height = '200px'
            divHover.style.width = '260px'
            divHover.style.height = '200px'
            close12.style.display = 'none'
            favcor.style.marginTop = '25px'
            favcor.style.marginLeft = '150px'
            exp.style.marginLeft = '15px'
            exp.style.marginTop = '-17px'
            exp.style.visibility = 'visible'
            exp.style.position = 'absolute'
            gifos.style.opacity = '1'
            contenedor1.style.opacity = '1'
            unlike.style.marginLeft = '-37px'
            unlike.style.marginTop = '-35px'
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
            botonVerMas.style.opacity = '1'
            principal2.style.opacity = '1'
            contenedor2.style.opacity = '1'

            let otrosGifs = document.querySelectorAll('.fotoFavorito')
            otrosGifs.forEach(gifElement => {
               if (gifElement.getAttribute('key') !== gifKey) {

                  gifElement.style.display = 'block'

               }
            })
         })

      } else if (caller == 'misGifos') {
         exp.addEventListener('click', () => {
            favcor.style.marginTop = '250px'
            favcor.style.marginLeft = '650px'
            close12.style.display = 'block'
            close12.style.position = 'absolute'
            close12.style.marginTop = '-530px'
            close12.style.marginLeft = '50px'
            gifElement.style.width = '695px'
            gifElement.style.height = '385px'
            exp.style.visibility = 'hidden'
            down.style.marginTop = '-30px'
            mascotas.style.opacity = '0'
            botonVerMas.style.opacity = '0'
            principal1.style.opacity = '0'
            principal4.style.opacity = '0'
            inspiracion1.style.opacity = '0'
            buscador1.style.opacity = '0'
            nav.style.opacity = '0'
            cont44.style.opacity = '0'
            principal12.style.opacity = '0'
            divHover.style.width = '0'
            contenedor2.style.opacity = '0'
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
            btnDescartar.style.marginLeft = '-37px'
            btnDescartar.style.marginTop = '-35px'
            down.style.marginTop = '-75px'
            principal1.style.opacity = '1'
            principal4.style.opacity = '1'
            inspiracion1.style.opacity = '1'
            buscador1.style.opacity = '1'
            nav.style.opacity = '1'
            cont44.style.opacity = '1'
            principal5.style.opacity = '1'
            principal12.style.opacity = '1'
            mascotas.style.opacity = '1'
            botonVerMas.style.opacity = '1'
            principal2.style.opacity = '1'
            contenedor2.style.opacity = '1'

            let otrosGifs = document.querySelectorAll('.fotosMisGifos')
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
      down.addEventListener('click', () => {
         descargarGif(gifKey, gifTitle.innerHTML)
      })
   })
}

function asociarEventosFotosMisGifosDesktop(gifElements) {
   gifElements.forEach(gifElement => {

      let gifoKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      let divHover = document.getElementById(gifoKey)
      let favcor = document.getElementById('favcor' + gifoKey)
      let btnDescartar = document.getElementById('btnDescartar' + gifoKey)
      let exp = document.getElementById('exp' + gifoKey)
      let down = document.getElementById('down' + gifoKey)
      let close12 = document.getElementById('close12' + gifoKey)

      gifElement.addEventListener('mouseover', () => {
         divHover.style.display = 'block'
         favcor.style.display = 'block'
      })
      divHover.addEventListener('mouseout', () => {
         divHover.style.display = 'none'
         favcor.style.display = 'none'
      })
      btnDescartar.addEventListener('mouseover', () => {
         btnDescartar.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-trash-hover.svg'
      })

      btnDescartar.addEventListener('mouseout', () => {
         btnDescartar.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-trash-normal.svg'
      })
      close12.style.display = 'none'

      exp.addEventListener('mouseover', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg'
      })

      exp.addEventListener('mouseout', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg'
      })

      exp.addEventListener('click', () => {
         close12.style.display = 'block'
         close12.style.position = 'absolute'
         close12.style.marginTop = '-410px'
         close12.style.marginLeft = '200px'
         gifElement.style.width = '695px'
         gifElement.style.height = '385px'
         exp.style.visibility = 'hidden'
         down.style.marginTop = '-30px'
         mascotas.style.opacity = '0'
         contenedor3.style.display = 'none'
         btnDescartar.style.marginTop = '-300px'
         favcor.style.width = '120px'
         favcor.style.height = '50px'
         favcor.style.marginTop = '200px'
         favcor.style.marginLeft = '600px'
         botonVerMas.style.opacity = '0'
         principal1.style.opacity = '0'
         principal4.style.opacity = '0'
         inspiracion1.style.opacity = '0'
         buscador1.style.opacity = '0'
         nav.style.opacity = '0'
         cont44.style.opacity = '0'
         principal12.style.opacity = '0'
         divHover.style.width = '0'
         contenedor2.style.opacity = '0'

         let otrosGifs = document.querySelectorAll('.fotosMisGifos')
         otrosGifs.forEach(gifElement => {
            if (gifElement.getAttribute('key') !== gifoKey) {
               gifElement.style.display = 'none'
            }
         })
      })
      btnDescartar.addEventListener('click', () => {
         let keysStringGifo = localStorage.getItem('arrayKGifo')
         let keysGifo = keysStringGifo.split(",")

         let keysFilteredGifo = keysGifo.filter(keyGifo => {
            return keyGifo !== gifoKey
         })

         localStorage.setItem('arrayKGifo', keysFilteredGifo)
         mostrarMisGifos()
      })


      down.addEventListener('click', () => {
         descargarGif(gifoKey, gifTitle.innerHTML)
      })
      down.addEventListener('mouseover', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
      })

      down.addEventListener('mouseout', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
      })
      close12.addEventListener('click', () => {
         gifElement.style.width = '260px'
         gifElement.style.height = '200px'
         divHover.style.width = '260px'
         divHover.style.height = '200px'
         close12.style.display = 'none'
         favcor.style.marginTop = '25px'
         favcor.style.marginLeft = '180px'
         favcor.style.width = '50px'
         exp.style.marginLeft = '15px'
         exp.style.marginTop = '-17px'
         exp.style.visibility = 'visible'
         exp.style.position = 'absolute'
         gifos.style.opacity = '1'
         contenedor1.style.opacity = '1'
         contenedor3.style.display = 'block'
         btnDescartar.style.marginLeft = '-37px'
         btnDescartar.style.marginTop = '-35px'
         principal1.style.opacity = '1'
         principal4.style.opacity = '1'
         inspiracion1.style.opacity = '1'
         buscador1.style.opacity = '1'
         nav.style.opacity = '1'
         cont44.style.opacity = '1'
         principal5.style.opacity = '1'
         principal12.style.opacity = '1'
         mascotas.style.opacity = '1'
         botonVerMas.style.opacity = '1'
         principal2.style.opacity = '1'
         contenedor2.style.opacity = '1'
         //down.style.display = 'block'
         //down.style.marginTop = '20px'

         let otrosGifs = document.querySelectorAll('.fotosMisGifos')
         otrosGifs.forEach(gifElement => {
            if (gifElement.getAttribute('key') !== gifoKey) {
               gifElement.style.display = 'block'
            }
         })
      })
   })
}

function asociarEventosFotosMisGifosMobile(gifElements) {
   gifElements.forEach(gifElement => {
      let gifoKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      let favcor = document.getElementById('favcor' + gifoKey)
      let btnDescartar = document.getElementById('btnDescartar' + gifoKey)
      let close12 = document.getElementById('close12' + gifoKey)
      let down = document.getElementById('down' + gifoKey)
      let exp = document.getElementById('exp' + gifoKey)

      gifElement.style.width = '156px'
      gifElement.style.height = '120px'
      principal9.style.marginTop = '-250px'

      gifElement.addEventListener('click', () => {
         if (gifElement.getAttribute('expanded') == '0') {
            exp.style.opacity = '0'
            favcor.style.marginLeft = '250px'
            gifElement.style.width = '375px'
            gifElement.style.height = '245px'
            favcor.style.display = 'block'
            close12.style.display = 'block'
            close12.style.cursor = 'pointer'
            btnDescartar.style.cursor = 'pointer'
            down.style.cursor = 'pointer'
            close12.style.marginLeft = '100px'
            close12.style.marginTop = '-280px'
            close12.style.position = 'absolute'
            cont44.style.opacity = '0'
            principal4.style.display = 'none'
            principal1.style.display = 'none'
            nav.style.opacity = '0.09'
            principal12.style.display = 'none'
            botonVerMas.style.display = 'none'
            mascotas.style.display = 'none'
            contenedor2.style.opacity = '0'
            contenedor3.style.opacity = '0'

            let otrosGifs = document.querySelectorAll('.fotosMisGifos')
            otrosGifs.forEach(gifElement => {
               if (gifElement.getAttribute('key') !== gifoKey) {
                  gifElement.style.display = 'none'
               }
            })
            gifElement.setAttribute('expanded', '1')

         } else {
            gifElement.setAttribute('expanded', '0')
         }
      })

      btnDescartar.addEventListener('mouseover', () => {
         btnDescartar.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-trash-hover.svg'
      })

      btnDescartar.addEventListener('mouseout', () => {
         btnDescartar.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-trash-normal.svg'
      })
      close12.style.display = 'none'

      btnDescartar.addEventListener('click', () => {
         let keysStringGifo = localStorage.getItem('arrayKGifo')
         let keysGifo = keysStringGifo.split(",")

         let keysFilteredGifo = keysGifo.filter(keyGifo => {
            return keyGifo !== gifoKey
         })

         localStorage.setItem('arrayKGifo', keysFilteredGifo)
         mostrarMisGifos()
      })

      close12.addEventListener('click', () => {
         gifElement.style.width = '156px'
         gifElement.style.height = '120px'
         favcor.style.display = 'none'
         principal4.style.display = 'none'
         principal1.style.display = 'none'
         botonVerMas.style.display = 'none'
         nav.style.opacity = '1'
         cont44.style.opacity = '1'
         principal12.style.display = 'none'
         botonVerMas.style.display = 'none'
         mascotas.style.display = 'block'
         contenedor2.style.opacity = '1'
         contenedor3.style.opacity = '1'

         let otrosGifs = document.querySelectorAll('.fotosMisGifos')
         otrosGifs.forEach(gifElement => {
            if (gifElement.getAttribute('key') !== gifoKey) {
               gifElement.style.display = 'block'
            }
         })
      })

      down.addEventListener('mouseover', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
      })
      down.addEventListener('mouseout', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
      })
      down.addEventListener('click', () => {
         descargarGif(gifoKey, gifTitle.innerHTML)
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
      gifTitle.style.marginTop = '180px'
      gifTitle.style.marginLeft = '-220px'
      gifTitle.style.position = 'relative'
      close12.style.display = 'none'
      gifTitle.style.color = 'white'
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
         //Guardar el sorce del gif con el gifkey correspondiente en el localStorage.
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
         gifTitle.style.marginLeft = '-720px'
         gifTitle.style.marginTop = '-35px'
         siguiente1.style.display = 'none'
         scrollLeftImg.style.display = 'none'
         gifos.style.display = 'none'
         contenedor1.style.display = 'none'
         principal1.style.display = 'none'
         principal4.style.display = 'none'
         nav.style.display = 'none'
         cont44.style.display = 'none'
         principal5.style.display = 'none'
         principal7.style.display = 'none'
         botonVerMas.style.display = 'none'

         gifElement.addEventListener('mouseover', () => {
            divHover.style.display = 'block'
            favcor.style.display = 'block'
         })

         divHover.addEventListener('mouseout', () => {
            divHover.style.display = 'block'
            favcor.style.display = 'block'
         })


         let otrosGifs = document.querySelectorAll('.fotoTrending')
         otrosGifs.forEach(gifElement => {
            if (gifElement.getAttribute('key') !== gifKey) {

               gifElement.style.display = 'none'
               scroll.style.width = '55%'
            }
         })

      })

      close12.addEventListener('click', () => {
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
         unlike.style.marginTop = '-52px'
         gifTitle.style.marginTop = '190px'
         gifTitle.style.marginLeft = '-250px'
         like.style.marginTop = '-55px'
         siguiente1.style.marginLeft = '60px'
         siguiente1.style.display = 'block'
         scrollLeftImg.style.display = 'block'
         gifos.style.display = 'block'
         contenedor1.style.display = 'block'
         principal1.style.display = pricipal1DisplayBeforeExpand
         principal4.style.display = principal4DisplayBeforeExpand
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
      down.addEventListener('click', () => {
         descargarGif(gifKey, gifTitle.innerHTML)
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
   gifElements.forEach(gifElement => {

      let gifKey = gifElement.getAttribute('key')
      let gifSrc = gifElement.getAttribute('src')
      gifElement.setAttribute('expanded', '0')
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
            if (gifElement.getAttribute('expanded') == '0') {
               favcor.style.display = 'block'
               favcor.style.marginTop = '-50px'
               favcor.style.display = 'flex'
               favcor.style.marginTop = '110px'
               favcor.style.marginLeft = '290px'
               close12.style.marginLeft = '20px'
               close12.style.marginTop = '-780px'
               gifTitle.style.marginTop = '-80px'
               gifTitle.style.marginLeft = '-280px'
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
               botonVerMas.style.display = 'none'
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
            botonVerMas.style.display = 'block'
            mascotas.style.display = 'block'
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
               gifTitle.style.marginLeft = '-270px'
               gifTitle.style.marginTop = '-80px'
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
               botonVerMas.style.display = 'none'
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
            botonVerMas.style.display = 'none'
            nav.style.opacity = '1'
            cont44.style.opacity = '1'
            principal12.style.display = 'none'
            botonVerMas.style.display = 'none'
            mascotas.style.display = 'block'
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
         favcor.style.display = 'none'
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
         let titleKey = gifKey + '.title'
         localStorage.setItem(titleKey, gifTitle.innerHTML)

      })

      exp.addEventListener('mouseover', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-hover.svg'
      })
      exp.addEventListener('mouseout', () => {
         exp.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg'

      })
      down.addEventListener('click', () => {
         descargarGif(gifKey, gifTitle.innerHTML)
      })
      down.addEventListener('mouseover', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
      })
      down.addEventListener('mouseout', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
      })
   })
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
            favcor.style.display = 'block'
            favcor.style.marginTop = '500px'
            divHover.style.display = 'block'
            divHover.style.marginTop = '-450px'
            close12.style.position = 'absolute'
            close12.style.display = 'block'
            close12.style.marginLeft = '190px'
            close12.style.marginTop = '-350px'
            like.style.marginLeft = '180px'
            unlike.style.marginLeft = '180px'
            down.style.marginLeft = '50px'
            exp.style.display = 'none'
            gifTitle.style.marginLeft = '-140px'
            principal4.style.display = 'none'
            principal1.style.display = 'none'
            nav.style.opacity = '0.09'
            botonVerMas.style.display = 'none'
            mascotas.style.display = 'none'
            cont44.style.opacity = '1'
            scroll.style.overflow = 'visible'
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
            botonVerMas.style.display = 'block'
            mascotas.style.display = 'block'
            gifos.style.display = 'block'
            contenedor1.style.display = 'flex'
            contenedor1.style.justifyContent = 'center'
            contenedor1.style.alignItems = 'center'
            botonVerMas.style.display = 'none'
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
         let titleKey = gifKey + '.title'
         localStorage.setItem(titleKey, gifTitle.innerHTML)

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
      down.addEventListener('click', () => {
         descargarGif(gifKey, gifTitle.innerHTML)
      })
      down.addEventListener('mouseover', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
      })
      down.addEventListener('mouseout', () => {
         down.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
      })
   })
}

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
   botonVerMas.style.display = 'none'
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
   principal7.style.display = 'block'
   principal12.style.display = 'block'
   principal12.style.marginTop = '50px'
   principal8.style.display = 'none'
   scroll.style.width = '78%'
   scroll.style.marginLeft = '120px'
   scrollLeft.style.marginLeft = '50px'
   scrollRigth.style.marginTop = '115px'
   scrollLeft.style.marginTop = '115px'
   scrollRigth.style.marginLeft = '0px'
   mostrarFavoritos()
})
/******Funcionalidad Boton Ver Mas */

botonVerMas.addEventListener('click', () => {
   offset += 12;
   mostrarSiguientes(buscador.value, offset);
})

/**Creación del carrusell */
scroll.style.overflow = 'scroll'

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

                    
                     <img id="down${trending.id}" class="seleccion"
                        src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg" alt="descarga">
                  
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
      console.log(error)
   }

   let gifsScrolls = document.querySelectorAll('.fotoTrending')

   if (pantallaDesktop.matches) {
      asociarEventosFotosTrendingDesktop(gifsScrolls)
   } else {
      asociarEventosFotosTrendingMobile(gifsScrolls)
   }

}

mostrarTrendingScroll()

/***Scroll*********** */
scrollLeft.addEventListener('click', () => {
   scroll.scrollBy(-380, 0)
})

scrollRigth.addEventListener('click', () => {
   scroll.scrollBy(380, 0)
})

/*Funcionalidad boton CREAR Gifs*****/
btnCrear.addEventListener('click', () => {
   if (creargifos.style.display === 'none') {
      creargifos.style.display = 'block';
      ocultar_todo.style.display = 'none'
      principal12.style.display = 'none'
      principal1.style.display = 'none'
      principal8.style.display = 'none'
      principal7.style.display = 'none'
   } else {
      ocultar_todo.style.display = 'block'
      creargifos.style.display = 'none'
      principal12.style.display = 'block'
      principal1.style.display = 'block'
      principal4.style.display = 'block'
   }
})

/**Funcionalidad seccion de CREAR GIFOS***** */
let recorder = null
let myGifs
let pathSubirGif = `https://upload.giphy.com/v1/gifs?api_key=${api_key}`

async function descargarGif(gifId, gifTitle) {
   const a = document.createElement("a");
   let URL = "https://api.giphy.com/v1/gifs/" + gifId + '?api_key=' + api_key
   a.href = await download(URL)
   a.download = gifTitle + '.gif';
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
}

async function download(gifSrc) {
   let response = await fetch(gifSrc);
   let info = await response.json();
   return fetch(info.data.images.downsized_large.url).then((response) => {
      return response.blob();
   }).then(blob => {
      return URL.createObjectURL(blob);
   });

}

function comenzando() {
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

let cronometroGifos = document.getElementById('cronometroGifos')

grabar.addEventListener('click', () => {

   iniciarReloj()
   record();
})

function iniciarReloj() {
   contador_s = 0;
   contador_m = 0;
   s = document.getElementById("segundos");
   m = document.getElementById("minutos");

   s.innerHTML = "00"
   m.innerHTML = "00"

   cronometro = setInterval(
      function () {
         if (contador_s == 60) {
            contador_s = 0;

            contador_m++;
            if (contador_m < 10) {
               m.innerHTML = "0" + contador_m;
            } else {
               m.innerHTML = contador_m;
            }
         }
         contador_s++;
         if (contador_s < 10) {
            s.innerHTML = "0" + contador_s;
         } else {
            s.innerHTML = contador_s;
         }
      }
      , 1000);
   cronometroGifos.style.display = 'block'
}

let blob

finalizar.addEventListener('click', () => {
   recorder.stopRecording(async () => {
      blob = recorder.getBlob()
      let uri = URL.createObjectURL(blob);
      mostrarGif.src = uri;
   })
   video.style.display = 'none'
   finalizar.style.display = 'none'
   mostrarGif.style.display = 'block'
   subirgifo.style.display = 'block'
   repCaptura.style.display = 'block'
   btnUno.style.background = 'var(--color-primary)'
   cronometroGifos.style.display = 'none'
   detenerse()
})

subirgifo.addEventListener('click', () => {
   subirGifo()
})

async function subirGifo() {
   let form = new FormData();
   form.append('file', blob, 'myGif.gif');
   mostrarSubiendoGif()

   const response = await fetch(pathSubirGif, {
      method: 'POST',
      body: form
   });

   const result = await response.json();

   guardarMiGif(result.data.id)
   mostrarGifSubido()

   btnDos.style.backgroundColor = 'var(--color-primary)'
   btnDos.style.color = 'var(--gifos)'
   btnTres.style.backgroundColor = 'var(--gifos)'
   btnTres.style.color = 'var(--color-primary)'
}

function mostrarSubiendoGif() {
   contenidoSubiendoGifo.style.display = 'block'
   mostrarCamara.style.opacity = 0.6
   mostrarCamara.style.backgroundColor = '#572EE5'
   subirgifo.style.display = 'none'
   repCaptura.style.display = 'none'
}

function mostrarGifSubido() {
   contenidoSubiendoGifo.style.display = 'none'
   contenidoGifSubido.style.display = 'block'
   mostrarCamara.style.opacity = 0.6
   mostrarCamara.style.backgroundColor = '#572ee5'
   subirgifo.style.display = 'none'
   repCaptura.style.display = 'none'

}

function guardarMiGif(gifId) {
   // Buscar el array de gifKey en el localStorage.
   // Agregar la gifKey nueva en el array.
   //Guardar el array acutalizado en el localStorage.
   let keysStringGifo = localStorage.getItem('arrayKGifo')
   let keysGifo
   if (keysStringGifo == null || keysStringGifo == "") {
      keysGifo = []
   } else {
      keysGifo = keysStringGifo.split(",")
   }

   keysGifo.push(gifId)
   localStorage.setItem('arrayKGifo', keysGifo)

   //Guardar el source del gif con el gifkey correspondiente en el localStorage.
   let gifSrc = 'https://media4.giphy.com/media/' + gifId + '/200.gif'
   linkGifo.href = gifSrc
   localStorage.setItem(gifId, gifSrc)
}

botonDescargaGifo.addEventListener('mouseover', () => {
   botonDescargaGifo.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download-hover.svg'
})

botonDescargaGifo.addEventListener('mouseout', () => {
   botonDescargaGifo.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg'
})

botonLinkGIfo.addEventListener('mouseover', () => {
   botonLinkGIfo.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-link-hover.svg'
})

botonLinkGIfo.addEventListener('mouseout', () => {
   botonLinkGIfo.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-link-normal.svg'
})

var cronometro;
function detenerse() {
   clearInterval(cronometro);
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

repCaptura.addEventListener('click', () => {
   creargifos.style.display = 'block';
   mostrarGif.style.display = 'block'
   repCaptura.style.display = 'none'
   grabar.style.display = 'block'
   subirgifo.style.display = 'none'
   video.style.display = 'block'
   mostrarCamara.style.display = 'block'
   ocultar_todo.style.display = 'none'
   principal12.style.display = 'none'
   principal1.style.display = 'none'

})

/*Seccion MIS GIFOS Modo Desktop */
misgifs1.addEventListener('click', () => {

   if (principal8.style.display === 'block') {
      principal8.style.display = 'none'
      menu.style.display = 'none'
      principal4.style.display = 'block'
      principal1.style.display = 'block'
      principal5.style.display = 'block'
   }
   menu.style.display = 'none'
   principal4.style.display = 'none'
   principal1.style.display = 'none'
   principal5.style.display = 'none'
   botonVerMas.style.display = 'none'
   principal8.style.display = 'block'
   principal12.style.marginTop = '50px'
   principal7.style.display = 'none'
   creargifos.style.display = 'none'
   mostrarMisGifos()
})

misgifsMobile.addEventListener('click', () => {

   if (principal8.style.display === 'block') {
      principal8.style.display = 'none'
      menu.style.display = 'none'
      principal4.style.display = 'block'
      principal1.style.display = 'block'
      principal5.style.display = 'block'
   }

   menu.style.display = 'none'
   principal4.style.display = 'none'
   principal1.style.display = 'none'
   principal5.style.display = 'none'
   botonVerMas.style.display = 'none'
   principal8.style.display = 'block'
   principal12.style.display = 'none'
   principal7.style.display = 'none'
   creargifos.style.display = 'none'
   mostrarMisGifos()

})

function mostrarMisGifos() {
   principal9.innerHTML = '' // Limpiar la seccion para que no muestre el contenido anterior que tenia.

   let keysStringGifo = localStorage.getItem('arrayKGifo')//busca en el localStorage un array de gifkey de los gif donde le fueron dando like.
   if (keysStringGifo == null || keysStringGifo == "") {
      keysGifo = []
   } else {
      keysGifo = keysStringGifo.split(",")
   } // Convertir toda la cadena en arreglos de strings.

   /***NO HAY GIFOS **********/
   if (keysStringGifo === "") {
      imgSinGifos.style.display = 'block'
      parrafoGifos.style.display = 'block'

   } else {
      imgSinGifos.style.display = 'none'
      parrafoGifos.style.display = 'none'
      nav.style.opacity = '1'
   }
   keysGifo.forEach(gifoKey => {// el for each recorre cada gifoKey
      let gifoSrc = localStorage.getItem(gifoKey)//con el gifokey se busca el gifosource correspondiente a ese gifokey.

      principal9.innerHTML += `
      <div class='foto6'>
          <img key='${gifoKey}' class='fotosMisGifos' src='${gifoSrc}'>
          <div id='${gifoKey}' class='divHover'>
      
              <div id='favcor${gifoKey}' class="favcorGifos">

              <img id="close12${gifoKey}" class="seleccion23Gifos" src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/close.svg">
      
                  <img id="down${gifoKey}" class="seleccionGifos"
                      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-download.svg" alt="descarga">
      
                  <img id="btnDescartar${gifoKey}" class="seleccionGifos"
                      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-trash-normal.svg">

                      <img id="exp${gifoKey}" class="seleccionGifos"
                      src="Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-max-normal.svg" alt="expander">
      
              </div>
          </div>
      </div>
      `
   });

   let misGifsSeccion = document.querySelectorAll('.fotosMisGifos')

   if (pantallaDesktop.matches) {
      asociarEventosFotosMisGifosDesktop(misGifsSeccion)

   } else {
      asociarEventosFotosMisGifosMobile(misGifsSeccion, 'misGifos')
   }
}
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

if (pantallaDesktop.matches) {
   /*Seccion Favoritos desktop*/
   btn1.addEventListener('click', () => {
      if ((principal7.style.display == 'block')) {
         principal7.style.display = 'none'
         principal4.style.display = 'block'
         principal1.style.display = 'block'
         principal1.style.width = '800px'
         principal1.style.marginLeft = '300px'
         principal1.style.height = '264px'
         principal1.style.display = 'flex'
         principal1.style.justifyContent = 'center'
         principal1.style.alignItems = 'center'
         principal12.style.display = 'block'
         cont44.style.marginTop = '0px'
         scroll.style.width = '78%'
         scroll.style.marginLeft = '120px'
         scrollLeft.style.marginLeft = '50px'
         scrollRigth.style.marginTop = '115px'
         scrollLeft.style.marginTop = '115px'
         scrollRigth.style.marginLeft = '0px'
         botonVerMas.style.display = 'none'
      }
   })
   /**Volver a la Pagina principal */
   /*Seccion Crear Gifos desktop*/
   btn1.addEventListener('click', () => {
      if (creargifos.style.display == 'block') {
         creargifos.style.display = 'none'
         ocultar_todo.style.display = 'block'
         principal12.style.display = 'block'
         principal1.style.display = 'block'
         principal1.style.display = 'flex'
         principal1.style.justifyContent = 'center'
         principal1.style.alignItems = 'center'
         scroll.style.width = '78%'
         scroll.style.marginLeft = '120px'
         scrollLeft.style.marginLeft = '50px'
         scrollRigth.style.marginTop = '115px'
         scrollLeft.style.marginTop = '115px'
         scrollRigth.style.marginLeft = '0px'
         principal4.style.display = 'block'
         principal1.style.width = '800px'
         principal1.style.marginLeft = '300px'
      }
   })
   /**Volver a la Pagina principal */
   /*Seccion Mis Gifos desktop*/
   btn1.addEventListener('click', () => {
      if (principal8.style.display == 'block') {
         principal8.style.display = 'none'
         ocultar_todo.style.display = 'block'
         principal12.style.display = 'block'
         principal1.style.display = 'block'
         principal1.style.width = '800px'
         principal1.style.marginLeft = '300px'
         principal1.style.display = 'flex'
         principal1.style.justifyContent = 'center'
         principal1.style.alignItems = 'center'
         scroll.style.width = '78%'
         scroll.style.marginLeft = '120px'
         scrollLeft.style.marginLeft = '50px'
         scrollRigth.style.marginTop = '115px'
         scrollLeft.style.marginTop = '115px'
         scrollRigth.style.marginLeft = '0px'
         principal4.style.display = 'block'
      }
   })
} else {
   /*Seccion Favoritos mobile*/
   btn1.addEventListener('click', () => {
      if ((principal7.style.display == 'block')) {
         principal7.style.display = 'none'
         principal4.style.display = 'block'
         principal1.style.display = 'block'
         principal1.style.display = 'flex'
         principal1.style.justifyContent = 'center'
         principal1.style.alignItems = 'center'
         principal12.style.display = 'block'
         cont44.style.marginTop = '0px'
         contenedor1.style.display = 'flex'
         contenedor1.style.justifyContent = 'center'
         contenedor1.style.alignItems = 'center'
      }
   })
   /**Volver a la Pagina principal */
   /*Seccion Mis Gifos mobile*/
   btn1.addEventListener('click', () => {
      if (principal8.style.display == 'block') {
         principal8.style.display = 'none'
         ocultar_todo.style.display = 'block'
         principal12.style.display = 'block'
         principal1.style.display = 'block'
         principal1.style.display = 'flex'
         principal1.style.justifyContent = 'center'
         principal1.style.alignItems = 'center'
         principal4.style.display = 'block'
      }
   })
}