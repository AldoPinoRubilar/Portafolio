fetch('https://raw.githubusercontent.com/AldoPinoRubilar/Portafolio/refs/heads/main/enlace_portafolio.txt')
  .then(response => response.text())
  .then(text => {
    document.getElementById('dynamicLink').setAttribute('href', text);
  })
  .catch(error => console.error('Error al leer el archivo:', error));


  // Función para obtener el enlace desde el archivo en GitHub
async function obtenerEnlace() {
  try {
     const response = await fetch("https://raw.githubusercontent.com/AldoPinoRubilar/Portafolio/refs/heads/main/enlace_portafolio.txt");
     if (response.ok) {
        const url = await response.text();
        // Asigna la URL obtenida al formulario
        document.getElementById("form-volver").action = url.trim();
     } else {
        console.error("Error al obtener el enlace");
     }
  } catch (error) {
     console.error("Error de conexión:", error);
  }
}

// Llamar a la función al cargar la página
obtenerEnlace();
