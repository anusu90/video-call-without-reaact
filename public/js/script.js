let hamburger = document.querySelector(".hamburger");
let navUL = document.querySelector(".nav-ul");

hamburger.addEventListener('click', (e) => {

    navUL.classList.toggle("nav-ul-active")

    document.querySelectorAll('.nav-links').forEach((link, index) => {

        if (link.style.animation) {
            link.style.animation = ""
        } else {

            link.style.animation = `nav-links-fade 1s ease-in ${index / 5}s 1 normal forwards`
        }

    })
})