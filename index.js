let boton1 = document.getElementById('boton1')

let menu = document.getElementById('menu')

let btn3 = document.getElementById('btn3')
/****Funcion para que aparezca el menu hamb */ 
boton1.addEventListener('click', (event) => {
    if (menu.style.display === 'none') {
       return menu.style.display = 'block'; 
    }else{
       return menu.style.display = 'none' 
    }
})

btn3.addEventListener('click', (event)=> {
    if(btn3.style.display === 'none'){
       return btn3.style.display = 'block'
    }else{
       return menu.style.display = 'none'
    }
})
