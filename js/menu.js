window.addEventListener('load', inicio);
function inicio() {
    const menu = document.querySelector(".menu");
const menuNavegacion = document.querySelector(".menu-navegacion");
const cerrar = document.querySelector(".d");
console.log(menu);
console.log(menuNavegacion);
menu.addEventListener('click', mostrar);
cerrar.addEventListener("click", ocultar);
function mostrar() {
        menuNavegacion.className="menu-navegacion spread";
        console.log("uno");  
    //.classList.toggle("spread");
}
function ocultar() {
    menuNavegacion.className="menu-navegacion";
}
window.addEventListener('click', function (e) {
    console.log(e.target);
    if(menuNavegacion.classList.contains("spread") && e.target != menu && e.target != menuNavegacion){
        menuNavegacion.className="menu-navegacion";
    }
});
}

