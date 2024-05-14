let menuBar = document.querySelector(".menu-bar");
let navBar = document.querySelector(".navbar");

menuBar.onclick = function () {
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
};

window.onscroll = function () {
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
    if (window.scrollY > 60) {
        document.querySelector(".scroolTop").classList.add("active");
    } else {
        document.querySelector(".scroolTop").classList.remove("active");
    }
};
