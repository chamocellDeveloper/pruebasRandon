let modal = document.getElementById('miModal')
let flex = document.getElementById('flex')
let abrir = document.getElementById('abrir')
let cerrar = document.getElementById('close')
let boton = document.getElementById('.boton') 
let myboton = document.getElementById('myboton')
const contador = 0



abrir.addEventListener('click', () => {
    modal.style.display = 'block'
})

cerrar.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    
    if(e.target === flex) {
        modal.style.display = 'none'
    }
})



const cambio = () => {
    if(contador == 0){

        document.getElementById('demo').innerHTML = 'Ya a cambiado'     
}
}

    myboton.addEventListener('click', cambio, true)

