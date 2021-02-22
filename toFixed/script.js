console.log('conectado')

const saldo = 0.00081789

const getdData = (evt) => {
    evt.preventDefault()
    const name = document.getElementById('name').textContent
    const price = document.getElementById('price').textContent


    const pedido = price
    const articulo = name

    

    if(pedido < saldo)
    {
        document.getElementById('message').innerHTML = `<div class="alert alert-success" role="alert">
                                                           <h3>Articulo (${articulo}) Fue compardo Con exíto</h3>
                                                          </div>`
        res = saldo - pedido    
        
        console.log(res)
    }else {

        document.getElementById('message').innerHTML =  `<div class="alert alert-danger" role="alert">
                                                            <h3>Saldo Insuficiente
                                                            <a href="http://127.0.0.1:5500/javascript/toFixed/assSaldo.html"
                                                             type="button" class="btn btn-primary ml-5">Continuar</a> 
                                                            </h3>
                                                            </div>`
    }
}

const obtenerbase = async () => {
    const data = await fetch(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=MXN,USD&tsyms=BTC,ETH'
    )
    const datos = await data.json();

    const btc = datos.MXN.BTC

    const con8Decimal = btc

    const compensa = con8Decimal + 0.000000131

    let result = compensa.toFixed(8);
    
    let camara = result * 100
    const reval = document.getElementById('price').innerText = camara.toFixed(8);
   
    retardo()


}
obtenerbase()

const retardo = () => {
    setTimeout(() => {
        console.log('actualizando')
        obtenerbase();
    },60000)
}


