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

const obtenerCotizacion = async() => {
    const data = await fetch (
       `https://min-api.cryptocompare.com/data/price?fsym=MXN&tsyms=MXN,USD,ETH,EUR,BTC,XRP,LTC&api_key=6dba1ec3ae2979e468c477b43e2d049184c531f8f58b10d0bf47fc6e4e7bfa16`
    )
    const criptoData = await data.json()
    

    resultado = criptoData

    operacion(criptoData)
}

obtenerCotizacion()


const operacion = (criptoData) => {

    resultadoStr = JSON.stringify(resultado)
     

    resultado2 = JSON.parse(resultadoStr)
     
    const btc = resultado2.BTC.toFixed(8)
    const eth = resultado2.ETH.toFixed(8)
    const mxn = resultado2.MXN.toFixed(2)
    const usd = resultado2.USD.toFixed(2)
    const ltc = resultado2.LTC.toFixed(8)
    const xrp = resultado2.XRP.toFixed(8)

    

    

    const newArray = [
        {nombre: 'Bitcoin', valor: btc},
        {nombre: 'Etherem', valor: eth},
        {nombre: 'Dolar', valor: usd},
        {nombre: 'XRP', valor: xrp},

    ]

    newArray.push({
        nombre: 'Leticoin', valor: ltc,
        nombre: 'Pesos', valor: mxn 
    })

    console.log(newArray)
}