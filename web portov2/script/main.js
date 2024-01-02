// TOOGLE and responsive navigation
const navSlide =() => {
    const burger = document.querySelector(".Burger")
    const navLists =document.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
}

navSlide();

// clear before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}