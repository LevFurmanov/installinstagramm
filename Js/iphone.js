document.querySelector('.phones-btn3').addEventListener('click' , (event) => {
    event.preventDefault()
    document.querySelector('.modal-iphone').classList.add("modal-open-iphone")
})

document.querySelector('.modal-close-iphone').addEventListener('click' , (event) => {
    event.preventDefault()
    document.querySelector('.modal-iphone').classList.remove("modal-open-iphone")
});


document.querySelector('.phones-btn3').addEventListener('click' , () => {
    document.querySelector('html').style.overflow = 'hidden'
})

document.querySelector('.modal-close-iphone').addEventListener('click' , () => {
    document.querySelector('html').style.overflow = ''
})



