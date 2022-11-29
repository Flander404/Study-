var toggle = document.querySelector('#check')
var menu = document.querySelector('.nav-menu')

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    menu.classList.toggle("active")
})