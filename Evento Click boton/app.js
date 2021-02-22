const btn = document.getElementById('btn')
const caja = document.getElementById('caja')
const contador = 0

const cambio = () => {
    if(contador == 0){
        caja.classList.toggle('azul')
        console.log(contador)
    }
}

btn.addEventListener('click',cambio,true)