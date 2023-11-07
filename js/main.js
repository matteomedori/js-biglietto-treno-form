"use strict";

//seleziono i bottoni su cui poi aggiungere l'event listener
let btnCalcolaPrezzo = document.querySelector("input[type=button]");
let btnReset = document.querySelector("input[type=reset]");

// evento scatenato dal click sul bottone
btnCalcolaPrezzo.addEventListener("click", function () {
  // prende i valori di km da percorrere e età
  const kmDaPercorrere = Number(
    document.getElementById("km-da-percorrere").value
  );
  const eta = Number(document.getElementById("eta").value);

  if (!isNaN(kmDaPercorrere) && !isNaN(eta)) {
    // calcolo prezzo del biglietto senza sconti
    let prezzoBiglietto = kmDaPercorrere * 0.21;

    document.getElementById("offerta").innerHTML = "Nessun offerta";

    // controllo se ci sono sconti da applicare
    if (eta < 18) {
      prezzoBiglietto -= (prezzoBiglietto * 20) / 100;
      document.getElementById("offerta").innerHTML = "Offerta giovani";
    } else if (eta >= 65) {
      prezzoBiglietto -= (prezzoBiglietto * 40) / 100;
      document.getElementById("offerta").innerHTML = "Offerta over";
    }

    //aggiorno i valori nel biglietto
    document.getElementById("nome-biglietto").innerHTML =
      document.getElementById("nome-passeggero").value;
    document.getElementById("carrozza").innerHTML = Math.floor(
      Math.random() * 5
    );
    document.getElementById("codice").innerHTML = Math.floor(
      Math.random() * 100000
    );
    document.getElementById("prezzo").innerHTML = `${prezzoBiglietto.toFixed(
      2
    )} €`;

    //appare il biglietto
    const ticketToDisplay = document.getElementById("display-when-btn");
    ticketToDisplay.classList.remove("d-none");

    // stampo su console
    console.log(`Km da percorrere: ${kmDaPercorrere}
età: ${eta}
prezzo del biglietto: ${prezzoBiglietto.toFixed(2)} €`);
  } else {
    //se parametri errati
    console.log("Hai inserito valori sbagliati");
  }
});

//evento sul bottone reset
btnReset.addEventListener("click", function () {
  const ticketToDisplay = document.getElementById("display-when-btn");
  ticketToDisplay.classList.add("d-none");
});
