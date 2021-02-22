const lista = document.getElementById('lista')


 const obtenerCotizacion = async() => {
     const data = await fetch (
        `https://min-api.cryptocompare.com/data/price?fsym=MXN&tsyms=MXN,USD,ETH,EUR,BTC,XRP,LTC&api_key=6dba1ec3ae2979e468c477b43e2d049184c531f8f58b10d0bf47fc6e4e7bfa16`
     )
     const criptoData = await data.json()
     

     resultado = criptoData
    
    //console.log(Object.keys(criptoData) instanceof Array)

    /*Object.keys(resultado).forEach((item) => {
        console.log(item)
        document.body.classList.add('contenedor')
       const li = document.createElement('li')
       
      li.textContent = `llave pricipal ${item}`
      lista.appendChild(li)
    })*/

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

    console.log(newArray)

    newArray.forEach((item) => {
        const li = document.createElement('li')
       
        li.textContent = `${item.nombre} ${item.valor}`
        lista.appendChild(li)
        
        
        
    })

}

obtenerCotizacion()







    


