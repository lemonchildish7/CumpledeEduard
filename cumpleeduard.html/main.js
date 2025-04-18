document.getElementById("botonsorpresa").addEventListener("click", function() {
    let mensaje = document.getElementById("mensajesorpresa");
    mensaje.classList.remove("hidden");
    mensaje.style.display = "block";
    this.style.display = "none";
});


