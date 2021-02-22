
let modal = document.getElementById('miModal')
let flex = document.getElementById('flex')
let abrir = document.getElementById('abrir')
let cerrar = document.getElementById('close')
let boton = document.getElementById('.boton') 


abrir.addEventListener('click', () => {
    modal.style.display = 'block'
})

cerrar.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target === flex) {
        modal.style.display = 'none'
    }
})