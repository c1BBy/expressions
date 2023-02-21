/* 
проект заключается в том, что он выводит ответ нужного вам выражения
с помощью "document.querySelector" я находил классы из html и переносил их в js 
а с помощью шпиона(add.eventListener) я заставлял кнопку работать
с помощью "eval" я сделал так, чтобы код считал все нужные мне выражения
в переменной otvetik находится выражение которое мы пишем
в переменной otvet хрантся ответ
в переменной poshitat находится document.querySelector
*/
let otvetik
let otvet = document.querySelector(".otvet")
let poschitat = document.querySelector('.poschitat')
poschitat.addEventListener('click', () => {
    otvetik = document.querySelector('.poleDlyaVvoda').value
    otvet.textContent = eval(otvetik)
    
})

