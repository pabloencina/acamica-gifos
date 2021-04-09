
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
   console.log('toggleTheme')
   console.log(localStorage.getItem('theme'))
   if (localStorage.getItem('theme') === 'theme-dark') {
      
      icono.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/logo-desktop.svg'

      boton1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/burger.svg'

      btn4.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/button-crear-gifo.svg'

      lupa.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search.svg'

      camNoc.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/camara.svg'

      peliculaNoc.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/pelicula.svg'
     
      console.log(icono.src)
      setTheme('theme-light');
   } else {
      icono.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/logo-mobile-modo-noct.svg'

      boton1.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/burger-modo-noct.svg'

      btn4.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crear-gifo-active-modo-noc.svg'

      lupa.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search-mod-noc.svg'

      camNoc.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/camara-modo-noc.svg'

      peliculaNoc.src = './Prototipos-Gifos/GIFOS-UI-Desktop+Mobile-Update/assets/pelicula-modo-noc.svg'
      
      console.log(icono.src)
      setTheme('theme-dark'); 
   }
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
            <img key='${trending.id}' class='foto' src='${trending.images.fixed_height.url}>
         
            <img src='${trending.images.fixed_height.url}>

            <div id='${trending.id}' class='divHover'></div>
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
         mascotas.innerHTML = ' '
         mascotas.innerHTML = e.target.value
         mascotas.style.textTransform = 'capitalize'
         

         principal3.style.display = 'block'
         principal3.style.display = 'flex'
         principal3.style.alignItems = 'center'
         inspiracion1.style.display = 'none'

      });
      let arrayImagenes = document.querySelectorAll('.foto')
      arrayImagenes.forEach(imagenesGaleria => {
         console.log(imagenesGaleria)
         imagenesGaleria.addEventListener('mouseover', (eventoPintar)=>{
            console.log(eventoPintar.target.getAttribute('key'))
            let divHover = document.getElementById(eventoPintar.target.getAttribute('key'))
            divHover.style.display ='block'

            divHover.addEventListener('mouseout',()=>{
               console.log('mouseout')
               divHover.style.display = 'none'

            })
         })
      })
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
cierre.addEventListener('click', () => {

   cierre.style.display = 'none'
   lupa.style.display = 'block'
   inspiracion1.style.display = 'block'
   principal3.style.display = 'none'
   principal2.innerHTML = ' '
   mascotas.innerHTML = ' '
   buscador1.value.innerHTML = ' '

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

/*Funcionalidad boton CREAR Gifs*****/

btn4.addEventListener('click', (event) => {
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


let pathSubirGif = `https://upload.giphy.com/v1/gifs?api_key=${api_key}`

window.onload = () => {
   let gifs = JSON.parse(localStorage.getItem('myGifs'));
   if (gifs) {
      myGifs = gifs;
   }
   console.log('Mis gifs cargados');
   console.log(myGifs);
   download();
}

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
   console.log(result);
   myGifs.push(result.data.id);
   localStorage.setItem('myGifs', JSON.stringify(myGifs));
   console.log(myGifs);
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
      console.log('click')
   })
   
}
capturar()
/***Funcionalidad de los botones de Crear GIFS PROPIOS */
