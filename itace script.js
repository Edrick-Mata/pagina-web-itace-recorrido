// Función para alternar el Modo Oscuro / Modo Claro en la página mediante el botón
function alternarModoOscuro() {
    let body = document.body;
    if (body.style.backgroundColor === "rgb(240, 240, 240)") {
        body.style.backgroundColor = "#565555e3";
        body.style.color = "#ffffff";
    } else {
        body.style.backgroundColor = "#f0f0f0";
        body.style.color = "#111111";
    }
} 

// Función 2: Mostrar u Ocultar información al hacer clic en el botón
function toggleInformacion() {
    let contenido = document.getElementById("infoSecreta");
    // Verifica si el elemento está oculto o visible para invertir su estado
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
}

// Escuchamos el evento 'play' en toda la ventana del navegador
window.addEventListener('play', (evento) => {
    
    // Buscamos al instante todos los audios y videos de la página
    const elementos = document.querySelectorAll('video, audio');
    
    // Recorremos cada elemento encontrado
    elementos.forEach((elementoActual) => {
        
        // Si el elemento no es el que el usuario acaba de reproducir, lo pausamos
        if (elementoActual !== evento.target) {
            elementoActual.pause();
        }
        
    });
    
}, true); // El 'true' asegura que capture la reproducción sin importar cómo inició