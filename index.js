let boton1 = document.getElementById('boton1')

let menu = document.getElementById('menu')

let btn3 = document.getElementById('btn3')

boton1.addEventListener('click', (event) => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        btn3.style.display = 'block'
        boton1.style.opacity = ''
    }else{
        btn3.style.opacity = ''
        menu.style.display = 'none' 
        boton1.style.display = 'block'
        
    }
})

btn3.addEventListener('click', (event)=>{
    if(menu.style.display === 'block'){
        btn3.style.display = 'block'
    }else{
        btn3.style.display = 'none'
    }
})

