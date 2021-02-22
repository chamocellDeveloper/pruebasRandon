console.log('conectado')

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Me distes un click')

    let datos = new FormData(formulario)

    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    const obtenerDatos = async() => {
        const data = await fetch (
            'post.php', {
                method: 'POST',
                body: datos
            }
        )
        const respuesta = await data.json()

        console.log(respuesta)
    }

    obtenerDatos()
})
