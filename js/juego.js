const opciones = ["Piedra", "Papel" , "Tijeras"];
const contadorJugador = document.getElementById("ContadorJugador");
const contadorIA = document.getElementById("ContadorIA");
const contadorResultado = document.getElementById("resultado");
const ContpuntajeJugador = document.getElementById("puntajeJugador");
const ContpuntajeIA = document.getElementById("puntajeIA");

let puntajeJugador = 0;
let puntajeIA = 0;

function jugar(opcionJugador){

    const opcionIA = opciones[Math.floor(Math.random() * 3)];
    console.log(opcionIA)

    let resultado = "";

    if(opcionJugador === opcionIA){
        resultado = "Es un Empate!"
    } else {
        switch(opcionJugador){
            case "Piedra":
                resultado = (opcionIA === "Tijeras") ? "GANASTE LECHUO!!!!" : "PERDISTE PAJUO!!!!"
                break;
            case "Papel":
                resultado = (opcionIA === "Piedra") ? "GANASTE LECHUO!!!!" : "PERDISTE PAJUO!!!!"
                break;
            case "Tijeras":
                resultado = (opcionIA === "Papel") ? "GANASTE LECHUO!!!!" : "PERDISTE PAJUO!!!!"
                break;
        }
    }

    contadorJugador.textContent = `Tu: ${opcionJugador}`;
    contadorIA.textContent = `La IA: ${opcionIA}`;
    contadorResultado.textContent = resultado;

    contadorResultado.classList.remove("textoVerde", "textoRojo")

    switch(resultado){
        case "GANASTE LECHUO!!!!":
            contadorResultado.classList.add("textoVerde");
            puntajeJugador++;
            ContpuntajeJugador.textContent = puntajeJugador;
            break;
        case "PERDISTE PAJUO!!!!":
            contadorResultado.classList.add("textoRojo");
            puntajeIA++;
            ContpuntajeIA.textContent = puntajeIA;
            break;
    }
}