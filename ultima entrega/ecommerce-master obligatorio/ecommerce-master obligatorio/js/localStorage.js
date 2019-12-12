function guardarDatos() {
    localStorage.nombre = document.getElementById("usuario").value;
}

function mostrarNombre(){
    document.getElementById("nombre").innerHTML = localStorage.nombre
}

document.addEventListener("DOMContentLoaded", function(e){
mostrarNombre();
    });