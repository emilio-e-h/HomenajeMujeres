const mujeres = [

{
nombre:"Sor Juana Inés de la Cruz",
foto:"imagenes/sor-juana-ines.png",
descripcion:"Poeta, filósofa y defensora del derecho de las mujeres a la educación."
},

{
nombre:"Leona Vicario",
foto:"imagenes/leona-vicario.png",
descripcion:"Heroína de la Independencia de México y símbolo de compromiso patriótico."
},

{
nombre:"Elvia Carrillo Puerto",
foto:"imagenes/elvia-carrillo.png",
descripcion:"Pionera del feminismo mexicano y promotora del voto femenino."
},

{
nombre:"Frida Kahlo",
foto:"imagenes/frida-kahlo.png",
descripcion:"Artista mexicana universal cuya obra representa identidad y resiliencia."
},

{
nombre:"Rosario Castellanos",
foto:"imagenes/rosario-castellanos.png",
descripcion:"Escritora y diplomática comprometida con la igualdad y la justicia social."
}

];

let indice = 0;

function mostrar(){
document.getElementById("nombre").innerText = mujeres[indice].nombre;
document.getElementById("foto").src = mujeres[indice].foto;
document.getElementById("descripcion").innerText = mujeres[indice].descripcion;
}

function siguiente(){
indice++;
if(indice>=mujeres.length) indice=0;
mostrar();
}

function anterior(){
indice--;
if(indice<0) indice=mujeres.length-1;
mostrar();
}

mostrar();
