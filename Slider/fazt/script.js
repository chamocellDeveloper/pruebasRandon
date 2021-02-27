window.addEventListener('load', () => {
    console.log('Contenido Cargado')

    const imagenes = []

    imagenes[0] = 'img/img1.jpeg'
    imagenes[1] = 'img/img2.jpeg'
    imagenes[2] = 'img/img3.jpeg'
    imagenes[3] = 'img/img4.jpeg'
    imagenes[4] = 'img/img5.jpeg'

    let indiceImagenes = 0
    let tiempo = 3000

    const cambiarImagenes = () => {
        
        document.slider.src = imagenes[indiceImagenes]
        if(indiceImagenes < 4){
            indiceImagenes++
        }else {
            indiceImagenes = 0
        }
    }

    setInterval(cambiarImagenes, tiempo)
})