console.log('conectado')

const page = document.querySelector('.page')
const menuopen = document.querySelector('.menu_open')
const menuclose = document.querySelector('.menu_close')

// page.addEventListener('click', function() {
//     document.getElementById('sidebar').classList.toggle('shazam');
// })



menuopen.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('shazam');   
})

menuclose.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('shazam');   
})