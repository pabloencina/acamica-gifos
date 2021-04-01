
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
comenzar.addEventListener('click', () => {
   begin();
})

grabar.addEventListener('click', () => {
   record();
})

finalizar.addEventListener('click', () => {
   recorder.stopRecording(async () => {
      let blob = recorder.getBlob()
      let uri = URL.createObjectURL(blob);
      mostrarGif.src = uri;
      let form = new FormData();
      form.append('file', blob, 'myGif.gif');
      createGif(form);
   })
})

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
      width: 360,
      hidden: 240,
      onGifRecordingStarted: function () {
         console.log('Started');
      }
   })
   recorder.startRecording();
}
