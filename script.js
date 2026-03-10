const mujeres = [
    {
        nombre: "Sor Juana Inés de la Cruz",
        foto: "imagenes/sor-juana-ines.png",
        descripcion: "Poeta, filósofa y defensora del derecho de las mujeres a la educación.",
        nacimiento: "12 de noviembre de 1648",
        lugar: "San Miguel Nepantla, México",
        fallecimiento: "17 de abril de 1695",
        representante: "Sánchez Germán Emma Sofia"
    },
    {
        nombre: "Leona Vicario",
        foto: "imagenes/leona-vicario.png",
        descripcion: "Heroína de la Independencia de México y símbolo de compromiso patriótico.",
        nacimiento: "10 de abril de 1789",
        lugar: "Ciudad de México",
        fallecimiento: "21 de agosto de 1842",
        representante: "Jiménez López Karla Daniela"
    },
    {
        nombre: "Elvia Carrillo Puerto",
        foto: "imagenes/elvia-carrillo.png",
        descripcion: "Pionera del feminismo mexicano y promotora del voto femenino.",
        nacimiento: "30 de enero de 1881",
        lugar: "Motul, Yucatán",
        fallecimiento: "18 de abril de 1965",
        representante: "Gutiérrez Velarde Mayte Maclovia"
    },
    {
        nombre: "Frida Kahlo",
        foto: "imagenes/frida-kahlo.png",
        descripcion: "Artista mexicana universal cuya obra representa identidad y resiliencia.",
        nacimiento: "6 de julio de 1907",
        lugar: "Coyoacán, Ciudad de México",
        fallecimiento: "13 de julio de 1954",
        representante: "González Rodríguez Frida Alejandra"
    },
    {
        nombre: "Rosario Castellanos",
        foto: "imagenes/rosario-castellanos.png",
        descripcion: "Escritora y diplomática comprometida con la igualdad y la justicia social.",
        nacimiento: "25 de mayo de 1925",
        lugar: "Ciudad de México",
        fallecimiento: "7 de agosto de 1974",
        representante: "Escarrega Gil Ninfa Lynneth"
    }
];

let indice = 0;

function mostrar(){
    const m = mujeres[indice];
    document.getElementById("nombre").innerText = m.nombre;
    document.getElementById("foto").src = m.foto;
    document.getElementById("descripcion").innerText = m.descripcion;
    document.getElementById("nacimiento").innerText = m.nacimiento;
    document.getElementById("lugar").innerText = m.lugar;
    document.getElementById("fallecimiento").innerText = m.fallecimiento;
    document.getElementById("representante").innerText = m.representante;
}

function siguiente(){
    indice = (indice + 1) % mujeres.length;
    mostrar();
}

function anterior(){
    indice = (indice - 1 + mujeres.length) % mujeres.length;
    mostrar();
}

function showSection(sectionId) {
    document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.menu a').forEach(l => l.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    if(document.getElementById('link-' + sectionId)) {
        document.getElementById('link-' + sectionId).classList.add('active');
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onload = function() {
    lucide.createIcons();
    mostrar();
    // Asignar event listeners a las imágenes del collage
    document.querySelectorAll('.collage img').forEach(img => {
        img.addEventListener('click', function() {
            abrirLightbox(this.src);
        });
    });
};

function abrirLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

function cerrarLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}