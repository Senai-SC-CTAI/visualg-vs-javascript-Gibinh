function calculateScore() {
  var throw1 = parseInt(document.getElementById("throw1").value);
  var throw2 = parseInt(document.getElementById("throw2").value);
  var throw3 = parseInt(document.getElementById("throw3").value);
  var score = throw1 + throw2 + throw3;
  var classification = "";

  if (score === 15) {
      classification = "Deus da Peteca";
  } else if (score >= 10) {
      classification = "petequeiro profissa";
  } else if (score >= 5) {
      classification = "Petequeiro de Final de Semana";
  } else if (score >= 1) {
      classification = "Pseudo-Petequeiro";
  } else {
      classification = "Nunca Petecou";
  }

  document.getElementById("score").textContent = "Pontuação: " + score + " pontos";
  document.getElementById("classification").textContent = "Classificação: " + classification;
}

document.getElementById("calculateScoreButton").addEventListener("click", calculateScore);
