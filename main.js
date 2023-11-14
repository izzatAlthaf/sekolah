// Ham List
const mainTogle = document.querySelector(".main-togle input");
const nav = document.querySelector("nav ul")

mainTogle.addEventListener("click", function(){
    nav.classList.toggle('slide')
})

// Scroll Animated

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

// scrool list

document.addEventListener('DOMContentLoaded', function () {
    var listItems = document.querySelectorAll('.list');

    // Mengatur transition-delay dinamis untuk setiap elemen
    listItems.forEach(function (item, index) {
        var delay = (index + 1) * 100; // Menggunakan index untuk menghitung delay
        item.style.transitionDelay = delay + 'ms';
    });
});

// hah

document.addEventListener('DOMContentLoaded', function () {
    var fasItem = document.getElementsByClassName('.fas');

    // Mengatur transition-delay dinamis untuk setiap elemen
    fasItem.forEach(function (items, indexs) {
        var delays = (indexs + 1) * 100; // Menggunakan index untuk menghitung delay
        items.style.transitionDelay = delays + 'ms';
    });
});