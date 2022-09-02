// Oppgave 1
const fjernTekstKnapp = document.getElementById("remove-btn");
fjernTekstKnapp.addEventListener("click", fjernTekstFunksjon);

function fjernTekstFunksjon() {
  document.getElementById("remove").innerHTML = "";
}

// Oppgave 2
const endreTekstKnapp = document.getElementById("change-btn");
endreTekstKnapp.addEventListener("click", endreTekstFunksjon);

function endreTekstFunksjon() {
  document.getElementById("change").innerHTML = "Ny tekst";
}
// Oppgave 3

const skriveUtFelt = document.getElementById("input");
skriveUtFelt.addEventListener("input", skriveUtFunksjon);

function skriveUtFunksjon(event) {
  document.getElementById("input-text").innerHTML = event.target.value;
}

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const skriveUt = document.getElementById("write-list");
skriveUt.addEventListener("click", skriveFunksjon);

function skriveFunksjon() {
  let text = "";
  for (let i = 0; i < myList.length; i++) {
    text += "<li>" + myList[i] + "</li>";
  }
  document.getElementById("ul").innerHTML = text;
}

// Oppgave 5

const lageTekst = document.getElementById("create");
lageTekst.addEventListener("click", lageTekstFunksjon);

function lageTekstFunksjon(event) {
  const testInput = document.getElementById("text");
  const skriftType = document.getElementById("select");
  document.getElementById("placeholder").innerHTML =
    "<" +
    skriftType.value +
    ">" +
    testInput.value +
    "</" +
    skriftType.value +
    ">";
}

// Oppgave 6

const fjerneElement = document.getElementById("remove-li");
fjerneElement.addEventListener("click", fjerneFunksjon);
const listUl = document.getElementById("list");

function fjerneFunksjon() {
  listUl.lastElementChild.remove();
  //document.getElementById("list").innerHTML = "";
}

// Oppgave 7
const lagEndring = document.getElementById("name");
lagEndring.addEventListener("input", endreFunksjon);

function endreFunksjon(event) {
  const inputText = event.target.value;
  if (inputText.length > 4) {
    document.getElementById("order").style.borderColor = "red";
  }
}

// Oppgave 8

const endreFarge = document.getElementById("color");
endreFarge.addEventListener("click", fargeFunksjon);

function fargeFunksjon() {
  console.log("HOI!");
}
