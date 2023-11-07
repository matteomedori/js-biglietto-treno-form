"use strict";

//seleziono il bottone su cui poi aggiungere l'event listener
let btnCalcolaPrezzo = document.querySelector("input[type=button]");

// evento scatenato dal click sul bottone
btnCalcolaPrezzo.addEventListener("click", function () {
  // prende i valori di km da percorrere e eta
  const kmDaPercorrere = Number(
    document.getElementById("km-da-percorrere").value
  );
  const eta = Number(document.getElementById("eta").value);

  if (!isNaN(kmDaPercorrere) && !isNaN(eta)) {
    // calcolo prezzo del biglietto senza sconti
    let prezzoBiglietto = kmDaPercorrere * 0.21;

    // controllo se ci sono sconti da applicare
    if (eta < 18) {
      prezzoBiglietto -= (prezzoBiglietto * 20) / 100;
    } else if (eta >= 65) {
      prezzoBiglietto -= (prezzoBiglietto * 40) / 100;
    }

    // stampo su console
    console.log(`Km da percorrere: ${kmDaPercorrere}
età: ${eta}
prezzo del biglietto: ${prezzoBiglietto.toFixed(2)} €`);
  } else {
    //se parametri errati
    console.log("Hai inserito valori sbagliati");
  }
});
