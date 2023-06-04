document.querySelector('.burger-button').addEventListener('click' , () => {
    document.querySelector('.modal').classList.add("modal_open")
})

document.querySelector('.modal__close').addEventListener('click' , () => {
    document.querySelector('.modal').classList.remove("modal_open")
})

document.querySelector('.modal__inme').addEventListener('click' , () => {
    document.querySelector('.modal').classList.remove("modal_open")
})

document.querySelector('.modal__program').addEventListener('click' , () => {
    document.querySelector('.modal').classList.remove("modal_open")
})

document.querySelector('.modal__retes').addEventListener('click' , () => {
    document.querySelector('.modal').classList.remove("modal_open")
})
