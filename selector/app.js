console.log('conectado')



const template = (criptodb) => {
    return `<i class="fas fa-dollar-sign"></i> ${criptodb.MXN} Pesos Mexicanos`
}

const otenerDatoCripto = () => {

    const cripto = document.getElementById('cripto')
    
    
        cripto.addEventListener('change', (Event) => { 
    
            const valorUno = cripto.value
            
    
            const valor = document.getElementById('valor')
            valor.textContent = `Valor del selector ${Event.target.value}`
    
            const obtenerPrecio = async (valorUno) => {
                if(valorUno === 'neutro'){
                    const valor = document.getElementById('valor')
                   valor.textContent = `Seleccione una Cotisacion`
    
                   const USD = document.getElementById('USD')
                   USD.textContent = ``
                   return
                }else {
                    const data = await fetch (
                        `https://min-api.cryptocompare.com/data/price?fsym=${valorUno}&tsyms=MXN,USD,ETH,EUR,BTC,XRP,LTC&api_key=6dba1ec3ae2979e468c477b43e2d049184c531f8f58b10d0bf47fc6e4e7bfa16`
                    )
                    const criptodb = await data.json()
                    
                    console.log(criptodb)
                    const valor = document.getElementById('valor')
                    valor.textContent = `Pesos Méxicanos ${criptodb.MXN} `
    
                    const USD = document.getElementById('USD')
                    USD.textContent = `Dolar ${criptodb.USD} `

                    
                }
                   
            }

            const retardo = () => {
                setTimeout(() => {
                    console.log('Actualizando')
                    obtenerPrecio()
                },600000);
            }
           
            
            obtenerPrecio(valorUno)
                 
        })
        Event
}

otenerDatoCripto()

    

 /*const cotisacion = () => {

    
    const select = document.getElementById('cripto')
    const valio = select.value

    if(valio == "neutro"){
       const valorR = document.getElementById('valor').innerHTML = "Selecciones una Criptomoneda"
       return 
    }else {
        const valorR = document.getElementById('cripto')
        const valorS = valorR.value


        const obtenerData = async () => {
            const data = await fetch (
                `https://min-api.cryptocompare.com/data/price?fsym=${valorS}&tsyms=ETH,EUR,BTC,MXN,XRP,LTC&api_key=6dba1ec3ae2979e468c477b43e2d049184c531f8f58b10d0bf47fc6e4e7bfa16` 
            )
            const criptodb = await data.json()
            
            
            if(criptodb.BTC == 1){

                document.getElementById('valor').innerHTML =  template(criptodb)
                return 
            }else if(criptodb.ETH == 1){
                document.getElementById('valor').innerHTML = template(criptodb)
                return
            } 
            else if(criptodb.XRP == 1){
            document.getElementById('valor').innerHTML = template(criptodb)
            return
            }else{
                document.getElementById('valor').innerHTML = template(criptodb)
                return
            }

            
        }
        
        obtenerData()
        
    }
    
    retardo()
}*/









/*option[0].addEventListener('change' , () => {
    option.[0].style.color = 'red';
})*/

/*compraventa.addEventListener('change', (Event) => {
    const seleccion = compraventa.value

    alert(`Has seleccionado ${seleccion}`)
});*/
