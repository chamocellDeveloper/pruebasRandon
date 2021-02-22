console.log('conectado')



const seleccion = (lenguaje) => {
    if(lenguaje === 'selec'){
        document.getElementById('lblLenguajeSeleccinado').innerText = `Ud. no a seleccionado un lenguaje`
    }
}


function seleccionLenguaje() {
    let cbxLenguajes = document.getElementById('cbxLenguajes');
    let lenguaje = cbxLenguajes.value;

    document.getElementById('lblLenguajeSeleccinado').innerText = `Ud. ha seleccionado el lenguaje de lenguaje ${lenguaje}.`

   
    seleccion(lenguaje)
}

