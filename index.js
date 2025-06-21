let generarCarta = () => {
    let palos = ["♠", "♥", "♦", "♣"];
    let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let palo = palos[Math.floor(Math.random() * palos.length)];
    let valor = valores[Math.floor(Math.random() * valores.length)];

    let simboloArriba = document.querySelector("#simbolo-arriba");
    let simboloAbajo = document.querySelector("#simbolo-abajo");
    let valorCarta = document.querySelector("#value");

    simboloArriba.textContent = palo;
    simboloAbajo.textContent = palo;
    valorCarta.textContent = valor;

    if (palo === "♥" || palo === "♦") {
        simboloArriba.style.color = "red";
        simboloAbajo.style.color = "red";
        valorCarta.style.color = "red";
    } else {
        simboloArriba.style.color = "black";
        simboloAbajo.style.color = "black";
        valorCarta.style.color = "black";
    }
};

// BOTON

let boton = document.createElement("button");
boton.textContent = "Nueva carta";
boton.className = "btn btn-dark position-absolute top-0 start-0 m-3";
boton.addEventListener("click", generarCarta);
document.body.appendChild(boton);

// TEMPORIZADOR AUTOMATICO CADA 10 SEGUNDOS
  setInterval(generarCarta, 10000);