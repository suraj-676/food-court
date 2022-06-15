 console.log('Hello, World')
let menu_tem = document.getElementById("menu_item")
let bars = document.getElementById("bars")

bars.addEventListener("click", () => {
    if(menu_item.style.opacity == "0") {
        menu_item.style.opacity = "1";
        menu_item.style.height = "70vh";
    } else {
        menu_item.style.opacity = "0";
        menu_item.style.height = "0vh";


    }


})