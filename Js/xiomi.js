document.querySelector('.phones-btn2').addEventListener('click' , (event) => {
    event.preventDefault()
    document.querySelector('.modal-xiomi').classList.add("modal-open-xiomi")
})

document.querySelector('.modal-close-xiomi').addEventListener('click' , (event) => {
    event.preventDefault()
    document.querySelector('.modal-xiomi').classList.remove("modal-open-xiomi")
})

document.querySelector('.phones-btn2').addEventListener('click' , () => {
    document.querySelector('html').style.overflow = 'hidden'
})

document.querySelector('.modal-close-xiomi').addEventListener('click' , () => {
    document.querySelector('html').style.overflow = ''
})