/* Descrizione:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 */


/* Chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.*/
const firstQuestion = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(firstQuestion);

const secondQuestion = parseInt(prompt('Quanti anni hai?'));
console.log(secondQuestion);

let ticketPrice = firstQuestion * 0.21 ;

const firstDiscount = ticketPrice - (ticketPrice * 20 / 100);

const secondDiscount = ticketPrice - (ticketPrice * 40 / 100);

 /* Calcolo prezzo biglietto  */
if (secondQuestion <= 17) {
   document.getElementById('output').innerHTML = firstDiscount.toFixed(2) + ' euro';
} else if (secondQuestion >=65) {
   document.getElementById('output').innerHTML = secondDiscount.toFixed(2) + ' euro';

} else {
   document.getElementById('output').innerHTML = ticketPrice.toFixed(2) + ' euro';

}








