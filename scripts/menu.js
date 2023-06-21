// ANIMACOES DOS BOTOES

function playerUp() {
  document.getElementById("tra-3").classList.remove("traClick");
  document.getElementById("tra-4").classList.remove("traClick");
  document.getElementById("bt-play").classList.remove("traClick");
}

function playerDown() {
  document.getElementById("tra-3").classList.add("traClick");
  document.getElementById("tra-4").classList.add("traClick");
  document.getElementById("bt-play").classList.add("traClick");
}

function stopUp() {
  document.getElementById("tra-1").classList.remove("traClick");
  document.getElementById("tra-2").classList.remove("traClick");
  document.getElementById("bt-stop").classList.remove("traClick");
}

function stopDown() {
  document.getElementById("tra-1").classList.add("traClick");
  document.getElementById("tra-2").classList.add("traClick");
  document.getElementById("bt-stop").classList.add("traClick");
}

function nextUp() {
  document.getElementById("tra-2").classList.remove("traClick");
  document.getElementById("tra-4").classList.remove("traClick");
  document.getElementById("bt-next").classList.remove("traClick");
}

function nextDown() {
  document.getElementById("tra-2").classList.add("traClick");
  document.getElementById("tra-4").classList.add("traClick");
  document.getElementById("bt-next").classList.add("traClick");
}

function backUp() {
  document.getElementById("tra-3").classList.remove("traClick");
  document.getElementById("tra-1").classList.remove("traClick");
  document.getElementById("bt-back").classList.remove("traClick");
}

function backDown() {
  document.getElementById("tra-3").classList.add("traClick");
  document.getElementById("tra-1").classList.add("traClick");
  document.getElementById("bt-back").classList.add("traClick");
}

// -------------------
