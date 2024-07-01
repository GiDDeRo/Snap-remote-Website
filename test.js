const links = document.querySelectorAll(".dropdown");
const arrow = document.querySelectorAll(".arrow");
const options = document.querySelectorAll(".options");

function dropdown (element, index) {
    element.addEventListener("click", e=> {
        options[index].classList.toggle("active");
        if(options[index].classList.contains("active")) {
            links[index].style.color = "black";
            options[index].style.opacity = "1";
            options[index].style.display = "block";
            arrow[index].style.transform = "rotate(180deg)";
            options[index].style.animation = "dropdown ease .5s";
        } else {
            links[index].style.color = "";
            options[index].style.display = "none";
            options[index].style.opacity = "0";
            arrow[index].style.transform = "rotate(0deg)";
            options[index].style.animation = "backup ease-in .3s ";
        }
    })
}
links.forEach(dropdown)

const open = document.getElementById("open");
const close = document.getElementById("close");
const icon = document.getElementById("icons");
const sideBar = document.querySelector("nav")

function sideBarToggle () {
    icon.classList.toggle("active")
    if (icon.classList.contains("active")) {
        icon.style.position = "fixed";
        icon.style.right = "1rem";
        open.style.display = "none";
        close.style.display = "block";
        close.style.animation = "closeAnimation .2s linear";
        sideBar.style.display = "flex";
        sideBar.style.right = "0";
        sideBar.style.transition = "all .15s ease";
        sideBar.style.boxShadow = "0 0 0 10000px rgba(0, 0, 0, .5)";
    } else {
        icon.style.position = "relative";
        open.style.display = "block";
        open.style.animation = "openAnimation .2s linear";
        close.style.display = "none";
        sideBar.style.right = "-30rem";
        sideBar.style.transition = "all .1s ease";
        sideBar.style.boxShadow = "none";
    }
}

icon.addEventListener("click", e => {
        sideBarToggle();
});
