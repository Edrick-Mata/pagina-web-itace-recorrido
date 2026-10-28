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

// Lista completa de tus profesores con todos los campos requeridos por la rúbrica
const listaDocentes = [
    {
        nombre: "Bertha Alicia Zapata Aldape",
        academia: "Matemáticas",
        materias: "Matemáticas",
        semestre: "1 y 3",
        avatar: "imagenes/bertha.jpeg",
        perfil: "2 años y medio en el Itace con titulo de Doctorado"
    },
    {
        nombre: "Carlos Melecio Carmona Olivares",
        academia: "módulo profesional en diseño gráfico e ingles",
        materias: "Diseño gráfico",
        semestre: "1 y 3",
        avatar: "imagenes/carmona.jpeg",
        perfil: "2 años en el Itace con maestría en educación básica, upn, licenciatura en diseño gráfico Uvb"
    },
    {
        nombre: "Erick Ramirez Solis",
        academia: "Matematicas",
        materias: "Pensamiento matemático",
        semestre: "1, 3 y 5",
        avatar: "imagenes/erik.jpeg",
        perfil: "21 años en el Itace con Lic. Ingeniería Electromecánica y Maestría en Educación"
    },
    {
        nombre: "Grecia Ávalos Ramos",
        academia: "Docente, Lengua y comunicación ",
        materias: "Lengua y comunicación ",
        semestre: "1 y 3",
        avatar: "imagenes/sin-prof.png",
        perfil: "3 años en el Itace con Lic y maestria"
    },
    {
        nombre: "Sandra Catalina Silva Camacho",
        academia: "Comunicación",
        materias: "Estudios Literarios",
        semestre: "5",
        avatar: "imagenes/sandra.jpeg",
        perfil: "25 años en el Itace con Maestría en metodología de la enseñanza "
    },
    {
        nombre: "Liliana Rosas Pacheco",
        academia: "Humanidades, pensamiento filosófico, conciencia historia, lengua y comunicación 1 y formación socio emocional ",
        materias: "Humanidades",
        semestre: "1 y 5",
        avatar: "imagenes/liliana.jpeg",
        perfil: "5 años en el Itace con Lic en pedagogía, maestría en educación media superior y doctorado en educación "
    },
    {
        nombre: "Carla Valeria Moran Lerma",
        academia: "Pensamiento filósofo y ciencias sociales y cultura digital",
        materias: "Matematicas, ciencias sociales y cultura digital",
        semestre: "1 y 3",
        avatar: "imagenes/carla valeria.jpeg",
        perfil: "33 años en el Itace con Maestría"
    },
    {
        nombre: "Benjamin Limón Martinez",
        academia: "Informática, módulo de programación e inteligencia artificial y cultura digital ",
        materias: "Informática, módulo de programación e inteligencia artificial y cultura digital ",
        semestre: "1, 3 y 5",
        avatar: "imagenes/sin-prof.png",
        perfil: "5 años en el Itace con titulos en Administración en productividad y calidad. Maestría en educación "
    },
    {
        nombre: "Isidro de león flores",
        academia: "Lic. En psicopedagogía lic en pedagogía ",
        materias: "Educación Fisica Premilitar",
        semestre: "1, 3 y 5",
        avatar: "imagenes/isidro.jpeg",
        perfil: "29 años en el Itace con Lic. En psicopedagogía lic en pedagogía"
    },
    {
        nombre: "Norma Elena Torres Quiñones ",
        academia: "Docente de ciencias naturales e it",
        materias: "Ciencias naturales e it",
        semestre: "1, 3 y 5",
        avatar: "imagenes/sin-prof.png",
        perfil: "26 años en el Itace con  Ing química y maestria en docencia"
    },
    {
        nombre: "Prof. Luis Enrique Lerma Martínez.",
        academia: "Presidente de la academia de conciencia histórica.",
        materias: "1er socio emocionales l y lengua y comunicacion l. 3er semestre lengua y comunicación lll. 5to conciencia histórica ll",
        semestre: "1 y 3",
        avatar: "imagenes/luis enrique.jpeg",
        perfil: "33 años en el Itace con Lic. en pedagogía. ing. Petrolero. Diplomado en competencias docentes"
    },
    {
        nombre: "Brenda Itzel Herrera García",
        academia: "Informática",
        materias: "Cultura Digital, IA",
        semestre: "1 y 3",
        avatar: "imagenes/sin-prof.png",
        perfil: "4 años en el Itace con titulos de Técnica en informática ,Ingeniera en sistemas computacionales y maestría en educación "
    },
    {
        nombre: "Walter Allan Barrera Cerda",
        academia: "comunicación",
        materias: "Ingles III, club de rondalla",
        semestre: "Inglés 3 y club 1, 2 ,3",
        avatar: "imagenes/walter.jpeg",
        perfil: "13 años en el Itace con titulos en ingenieria industrial y administración"
    },
    {
        nombre: "Gerardo de la Rosa Ortega",
        academia: "Ingles",
        materias: "Inglés",
        semestre: "5",
        avatar: "imagenes/sin-prof.png",
        perfil: "Licenciado en Contaduría"
    },
    {
        nombre: "Erika Aidé Pérez Abrego",
        academia: "Ciencias Naturales y Humanidades",
        materias: "Ciencias Naturales y Humanidades",
        semestre: "3 y 5",
        avatar: "imagenes/sin-prof.png",
        perfil: "Ingeniería Industrial en Sistemas y Maestría en Educación"
    },
    {
        nombre: "Samuel Gonzales de la Fuente",
        academia: "Pensamiento Filosófico, Ciencias Sociales y Estudios Literarios",
        materias: "Pensamiento Filosófico 1 y 3, Ciencias Sociales 1 y Estudios Literarios",
        semestre: "1 y 3",
        avatar: "imagenes/sin-prof.png",
        perfil: "Licenciatura en Administración de Empresas y carrera técnica en Ebanistería"
    },
    {
        nombre: "Laura Esmeralda Heredia Blanco",
        academia: "Ciencias",
        materias: "Ciencias",
        semestre: "1, 3 y 5",
        avatar: "imagenes/sin-prof.png",
        perfil: "Bióloga, especializada en Física y Química"
    },
    {
        nombre: "Felipe Hernández González",
        academia: "Lengua y comunicacion y Conciencia historica",
        materias: "Lengua y Comunicación 1 y 3; Conciencia Histórica 2. Modulo de Electrónica y Semiconductores",
        semestre: "1, 3 y 5",
        avatar: "imagenes/sin-prof.png",
        perfil: "Ingeniería en Electrónica"
    },
    {
        nombre: "Yuridia Lizbeth Cepeda Ramos",
        academia: "Ingles y Matematicas",
        materias: "Inglés y Temas Selectos de Matemáticas 2",
        semestre: "5",
        avatar: "imagenes/sin-prof.png",
        perfil: "Ingeniera Industrial, Licenciada en Matemáticas, Maestría en Educación e Innovación Educativa y actualmente estudia un Doctorado en Educación"
    },
    {
        nombre: "Juan Pablo Torres Adame",
        academia: "Cultura digital",
        materias: "Programación y Cultura Digital, Club: Robótica, Cursos ICAT Excel",
        semestre: "1, 3 y 5",
        avatar: "imagenes/sin-prof.png",
        perfil: "Licenciatura en Información Administrativa y Maestría en Ciencias de la Enseñanza"
    },
    {
        nombre: "Romualdo Guadalupe de la Cruz",
        academia: "Matematicas",
        materias: "Pensamiento Matemático 1 y 3",
        semestre: "1 y 3",
        avatar: "imagenes/sin-prof.png",
        perfil: "Mantenimiento Industrial y Mantenimiento en Instalaciones Petroleras"
    },
    {
        nombre: "Nohemí Quintanilla Arcos",
        academia: "Sin definir",
        materias: "Prefecta",
        semestre: "Sin dfinir",
        avatar: "imagenes/sin-prof.png",
        perfil: "Sin definir"
    },
    {
        nombre: "Ulises Solís Rieboles",
        academia: "Ciencias",
        materias: "Ciencias Naturales 1, 3 y 5",
        semestre: "1, 3 y 5",
        avatar: "imagenes/sin-prof.png",
        perfil: "Químico Farmacéutico Biólogo, con dos maestrías: Análisis Clínicos y Educación. Actualmente estudia un Doctorado en Educación"
    },
    {
        nombre: "Trinidad Hernades Barrera",
        academia: "Ciencias",
        materias: "Ciencias Naturales, Experimentales y Tecnología 1, 3 y 5",
        semestre: "1, 3 y 5",
        avatar: "imagenes/sin-prof.png",
        perfil: "Biólogo"
    },
    {
        nombre: "Mildred Yasmín Reyes Norberto",
        academia: "Matematicas",
        materias: "Temas Selectos de Matemáticas II",
        semestre: "5",
        avatar: "imagenes/sin-prof.png",
        perfil: " Ingeniería Química y Maestría en Docencia"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const contenedorDocentes = document.getElementById("contenedor-docentes");
    const buscador = document.getElementById("buscadorDocente");
    const mensajeSinResultados = document.getElementById("mensaje-sin-resultados");

    if (!contenedorDocentes) return;

    // Función para mostrar las tarjetas con todos los datos solicitados
    function mostrarDocentes(docentes) {
        contenedorDocentes.innerHTML = "";
        
        if (docentes.length === 0) {
            mensajeSinResultados.style.display = "block";
            return;
        } else {
            mensajeSinResultados.style.display = "none";
        }

        docentes.forEach(docente => {
            const tarjeta = document.createElement("section");
            tarjeta.classList.add("tarjeta"); // Mantiene la adaptabilidad responsiva
            
            tarjeta.innerHTML = `
                <img src="${docente.avatar}" alt="${docente.nombre}" class="imagen-tarjeta" onerror="this.src='imagenes/itace_pared.jpeg'">
                <h3>${docente.nombre}</h3>
                <p><strong>Academia:</strong> ${docente.academia}</p>
                <p><strong>Materia(s):</strong> ${docente.materias}</p>
                <p><strong>Semestre:</strong> ${docente.semestre}</p>
                <p><strong>Perfil:</strong> ${docente.perfil}</p>
            `;
            contenedorDocentes.appendChild(tarjeta);
        });
    }

    // Cargar todos los profesores al iniciar
    mostrarDocentes(listaDocentes);

    // Búsqueda dinámica ampliada (incluye nombre, materia, academia y perfil)
    if (buscador) {
        buscador.addEventListener("input", (e) => {
            const textoBusqueda = e.target.value.toLowerCase();
            
            const docentesFiltrados = listaDocentes.filter(docente => {
                const coincideNombre = docente.nombre.toLowerCase().includes(textoBusqueda);
                const coincideMateria = docente.materias.toLowerCase().includes(textoBusqueda);
                const coincideAcademia = docente.academia.toLowerCase().includes(textoBusqueda);
                const coincidePerfil = docente.perfil.toLowerCase().includes(textoBusqueda);
                return coincideNombre || coincideMateria || coincideAcademia || coincidePerfil;
            });

            mostrarDocentes(docentesFiltrados);
        });
    }
});

// Función para limpiar la búsqueda
function limpiarBusqueda() {
    const buscador = document.getElementById("buscadorDocente");
    if (buscador) {
        buscador.value = "";
        buscador.dispatchEvent(new Event("input"));
    }
}