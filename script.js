var toggle = document.querySelector('.menu')
var menu = document.querySelector('.nav-menu')

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    menu.classList.toggle("active")
})

var question_toggle = document.querySelector('.center')
var question = document.querySelector('.question-menu')

question_toggle.addEventListener("click", () => {
    question_toggle.classList.toggle("active")
    question.classList.toggle("active")
})
