document.getElementById("botonsorpresa").addEventListener("click", function() {
    let mensaje = document.getElementById("mensajesorpresa");
    mensaje.classList.remove("hidden");
    mensaje.style.display = "block";
    this.style.display = "none";
});

document.querySelector("#botonsorpresa").addEventListener("mouseover", function() {
    document.body.style.cursor = "url(img/peace-cursor.png), auto";
});

document.querySelector("#botonsorpresa").addEventListener("mouseout", function() {
    document.body.style.cursor = "url(img/josuke-cursor.png), auto";
});

document.querySelectorAll("#fondo-personajes img").forEach(img => img.remove());

document.getElementById("botonsorpresa").addEventListener("click", function() {
    // Lanzar confetti desde diferentes direcciones
    confetti({ particleCount: 400, spread: 470, origin: { x: 0, y: 0 } }); // Izquierda arriba
    confetti({ particleCount: 400, spread: 470, origin: { x: 1, y: 0 } }); // Derecha arriba
    confetti({ particleCount: 400, spread: 470, origin: { x: 0, y: 1 } }); // Izquierda abajo
    confetti({ particleCount: 400, spread: 470, origin: { x: 1, y: 1 } }); // Derecha abajo
});