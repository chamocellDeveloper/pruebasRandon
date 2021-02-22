console.log('conectado')

const ObtenerData = async () => {
    const data = await fetch (
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=MXN,USD&tsyms=BTC,ETH'
    )
    const mxn = await data.json()
    optenerbalores(mxn)
} 

ObtenerData()

const optenerbalores = (mxn) => {

       const mxnBtc = mxn.MXN.BTC.toFixed(8)
       const mxnEth = mxn.MXN.ETH.toFixed(8)
       const usdBtc = mxn.MXN.BTC.toFixed(8)
       const usdEth = mxn.MXN.ETH.toFixed(8)

    document.getElementById('lista').innerHTML = `<li>${mxnBtc}</li>
                                                  <li>${mxnEth}</li>
                                                  <li>${usdBtc}</li>
                                                  <li>${usdEth}</li>`
       
}
