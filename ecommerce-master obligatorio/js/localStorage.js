function guardarDatos() {
    localStorage.nombre = document.getElementById("usuario").value;
}
document.getElementById("nombre").innerHTML = localStorage.nombre