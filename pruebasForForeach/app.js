console.log('conectado')

const formVenta = document.getElementById('formVenta')
const inputs = document.querySelectorAll('#formVenta input');

const expresiones = {
    venta: /\d+\.\d{4,8}$/,
    valor: /\d+\.\d{2}$/
}

const campos = {
    venta: false,
    valor: false
}

const varias = []

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "venta":
         validarCampo(expresiones.venta, e.target, 'venta')
        const venta = e.target.value
        varias["venta"] = venta
        break
        case "valor":
        validarCampo(expresiones.valor, e.target, 'valor')
        const valor = e.target.value
        varias["valor"] = valor
        break
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} .veta__group-error`).classList.remove('veta__group-error-active')
        campos[campo] = true
      }else {
          document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
          document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
          document.querySelector(`#grupo__${campo} .veta__group-error`).classList.add('veta__group-error-active')
          campos[campo] = false
      } 
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formVenta.addEventListener('submit', (e) => {
    e.preventDefault() 
    
    if(campos.venta && campos.valor){
        formVenta.reset()
        datosValidados()

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        },5000)
    }else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        },5000)
    }
})

const datosValidados = () =>{

    // operacion cuando cambias bitcoin por pesos 

const number1 = varias.venta 
const number2 = varias.valor
const number3 = 0.0050


const res1 = number1 * number2 //monto que vendistes *document.querySelectorAll('#formVenta input')

const res2 = res1 * number3   // comicion de la venta en Pesos

const res3 = res1 -res2      // cuanto te llego pesos

    console.log(res1)
    console.log(res2)
    console.log(res3)
    document.getElementById('descri1').innerHTML = `Vendistes:<span>${number1}</span>`
    document.getElementById('descri2').innerHTML = `Valor de Mercado: <span>${number2}</span>`
    document.getElementById('descri3').innerHTML = `Comicion del <span>0.65%</span>` 
    document.getElementById('descri4').innerHTML = `Total de la venta: <span>${res1.toFixed(2)}</span>`
    document.getElementById('descri5').innerHTML = `Total de la comicion: <span>${res2.toFixed(2)}</span>`
    document.getElementById('descri6').innerHTML = `Total a recibir <span>${res3.toFixed(2)}</span>`
    
}





// operacion cuando compras BTC con pesos 
const number4 = 123.26
const number5 = 1060718.69
const number6 = 0.0065

const res4 = number4 / number5 // monto comprado/posentage
const res5 = res4 * number6  //comicsion
const res6 = res4 - res5     // cuanto te dan

// operacion de ganacia 
const number7 = 1060718.69
const number8 = res6
const number9 = res4  //monto que yo deveria tener

const number10 =  number9 - number8 //diferencia entre compara y lo que dan
const number11 =  number10 + number8 // monto para estar en el monto que tenia que tener

// si yo vendo

const venta = number11

const porcetaje = 0.018
const valorPorce = number7 * porcetaje
const valor2 = number7 + valorPorce  // monto de venta

const valor3 = number11 * valor2  //monto de recuperacion

/* -----------------------------------------------------*/


// operacion cuando compras BTC con pesos 
const number12 = valor3
const number13 = valor2
const number14 = 0.0065

const res12 = number12 / number13 // monto comprado/porsentage
const res13 = res12 * number14  //comicsion
const res14 = res12 - res13     // cuanto te dan


/* ------------------------------------------------------------*/

const ganacia1 = res14  // monto de recuperacion
const comicion = 0.0065

const resulganacia = ganacia1 * comicion  //retamos la comicion
const ganacia2 = ganacia1 + resulganacia  //incrementamos la comision

const ganacia3 = valor2 * comicion  //incremento para optener ganacia

const ganacia4 = valor2 + ganacia3 //este es el precio para la veta con ganacia


/* -----------------------------------------------------------*/

//cuanto me gane

const ganacia5 = ganacia1 * ganacia4 

const ganaciatotal = ganacia5 - number4