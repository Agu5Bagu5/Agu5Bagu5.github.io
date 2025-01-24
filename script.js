const hamburgerMenu = document.querySelector('.hamburgermenu a')
const shortCute = document.getElementsByClassName('shortcute')[0]
const hMenu1 = document.getElementsByClassName('hm1')[0]
const hMenu2 = document.getElementsByClassName('hm2')[0]
const hMenu3 = document.getElementsByClassName('hm3')[0]
const gHM = document.querySelectorAll('.hamburgermenu a div')


hamburgerMenu.addEventListener('click', e => {
    e.preventDefault()
    shortCute.classList.toggle('active')
    hMenu1.classList.toggle('cHM1')
    hMenu2.classList.toggle('cHM2')
    hMenu3.classList.toggle('cHM3')
    if (hMenu1.classList.contains('cHM1')) {
        gHM.forEach(v => {
            v.style.backgroundColor = 'rgb(255, 0, 0)'
        })
    } else {
        gHM.forEach(v => {
            v.style.backgroundColor = 'rgb(0, 0, 0)'
        })
    }
})