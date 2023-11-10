const mainTogle = document.querySelector(".main-togle input");
const nav = document.querySelector("nav ul")

mainTogle.addEventListener("click", function(){
    nav.classList.toggle('slide')
})