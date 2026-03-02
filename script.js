const burgerMenu = document.getElementById("burger")
const offScreenMenu = document.getElementById("off-screen-menu")

burgerMenu.addEventListener("click", function(e){
e.preventDefault
    burgerMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
})