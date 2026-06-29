const button = document.getElementById("startButton");
const title = document.getElementById("title");
const text = document.getElementById("text");
const music = document.getElementById("music");
music.volume = 0.15;
const hearts = document.getElementById("hearts");
const imagenHistoria =
document.getElementById("imagenHistoria");
const buttons = document.getElementById("buttons");

let intentosNo = 0;
let pagina = 0;
let escribiendo = false;



const historia = [



{

titulo:"Hola... ",

texto:"Quería hacer algo diferente para ti.",

imagen:""

},



{

titulo:"Porque eres tú 🐨",

texto:"Me gustan esas pequeñas cosas que te hacen especial.",

imagen:"assets/koala.png"

},



{

titulo:"Momentos tranquilos 📚",

texto:"Los libros, las historias y esos momentos que se quedan.",

imagen:"assets/libros.png"

},



{

titulo:"Pequeños detalles 🍓",

texto:"Una limonada de fresa tan rica como tu.",

imagen:"assets/limonada.png"

},



{

titulo:"Algo dulce 🎂",

texto:"Porque siempre hay sitio para un pastel.",

imagen:"assets/pastel.png"

}


];





button.onclick=function(){



if(escribiendo) return;



music.play().catch(()=>{});



if(pagina < historia.length){


title.innerHTML =
historia[pagina].titulo;


escribirTexto(
historia[pagina].texto
);


imagenHistoria.src =
historia[pagina].imagen;


pagina++;



}else{


pregunta();


}



};








function escribirTexto(frase){


escribiendo=true;


button.disabled=true;


text.innerHTML="";



let i=0;



let intervalo=setInterval(()=>{


text.innerHTML += frase[i];


i++;



if(i>=frase.length){


clearInterval(intervalo);


escribiendo=false;


button.disabled=false;


}



},50);



}









function pregunta(){


title.innerHTML =
"❤️ Tengo una pregunta para ti";


text.innerHTML =
"¿Quieres salir conmigo?";


imagenHistoria.src = "assets/gatoojitos.png";
buttons.innerHTML = `


<button onclick="aceptar()">

❤️ Sí

</button>



<button onclick="rechazar()">

❌ No

</button>


`;



}


function rechazar(){


const mensajes = [


{
texto:"¿De verdad? 🥺",
imagen:"assets/triste.png"
},


{
texto:"Vale... pero piénsalo un segundo",
imagen:"assets/bebe.png"
},


{
texto:"Piénsalo otra vez...",
imagen:"assets/negro.png"
},


{
texto:"Mira ese koala... él dice que pulses Sí 🐨",
imagen:"assets/koala.png"
},


{
texto:"El botón No parece tener dudas",
imagen:"assets/gato.png"
},


{
texto:"Última comprobación... ¿seguro que quieres pulsar No? 👀",
imagen:"assets/perro.png"
},


{
texto:"No creo que ese botón funcione...",
imagen:"assets/perrosonriendo.png"
},


{
texto:"Error 404: opción no disponible",
imagen:"assets/tejodes.png"
}


];



text.innerHTML =
mensajes[intentosNo % mensajes.length].texto;


imagenHistoria.src =
mensajes[intentosNo % mensajes.length].imagen;



intentosNo++;


}






function final(){



title.innerHTML =
"🥹❤️";



text.innerHTML=

`
Gracias por este momento.

Prometo compartir contigo:

📚 libros

🌲 aventuras

🍓 limonadas de fresa

🎂 algún pastel

❤️ muchos recuerdos
`;



buttons.style.display="none";



lluvia();

}

function aceptar(){



title.innerHTML =
"🥹❤️";


text.innerHTML =

`
Sabía que eras especial.

Gracias por este momento.

Nos esperan:

📚 libros

🌲 aventuras

🍓 limonadas de fresa

🎂 pasteles

❤️ muchos recuerdos
`;



buttons.style.display="none";


lluvia();



}


function crearCorazon(){


let corazon=document.createElement("div");


corazon.className="heart";


corazon.innerHTML="❤️";


corazon.style.left =
Math.random()*100+"%";



corazon.style.animationDuration =
(Math.random()*3+3)+"s";



hearts.appendChild(corazon);



setTimeout(()=>{

corazon.remove();

},6000);



}




function lluvia(){


for(let i=0;i<120;i++){


setTimeout(()=>{


crearCorazon();


},i*40);



}



}
const hojas = document.getElementById("hojas");


function crearHoja(){

let hoja=document.createElement("div");

hoja.className="hoja";

hoja.innerHTML="🍃";


hoja.style.left=Math.random()*100+"%";

hoja.style.animationDuration=
(Math.random()*5+5)+"s";


hoja.style.fontSize=
(Math.random()*20+15)+"px";


hojas.appendChild(hoja);


setTimeout(()=>{

hoja.remove();

},10000);


}


setInterval(()=>{

crearHoja();

},300);