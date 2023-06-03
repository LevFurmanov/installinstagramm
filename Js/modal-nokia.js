const phoneBtn = document.querySelector('.phones-btn');
const html = document.querySelector('html');
const modalClose = document.querySelector('.modal-close');

phoneBtn.addEventListener('click' , () => {
    html.style.overflow = 'hidden'
})  

modalClose.addEventListener('click' , () => {
    html.style.overflow = ''
})