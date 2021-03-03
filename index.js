let boton1 = document.getElementById('boton1')

let menu = document.getElementById('menu')

boton1.addEventListener('click', (event) => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
})


