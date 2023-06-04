document.querySelector('.phones-btn').addEventListener('click' , (event) => {
    event.preventDefault()
    document.querySelector('.modal-nokia').classList.add("modal-open-nokia")
})

document.querySelector('.modal-close').addEventListener('click' , (event) => {
    event.preventDefault()
    document.querySelector('.modal-nokia').classList.remove("modal-open-nokia")
})

