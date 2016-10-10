function showMenu() {
    var menu = document.getElementById("menu");
    var btn = document.getElementById("menuButton");

    if (menu.classList.contains("overlay--opened")) {
        btn.classList.remove("menu--opened");
        menu.classList.remove("overlay--opened");
    }
    else {
        btn.classList.add("menu--opened");
        menu.classList.add("overlay--opened");
    }
}
