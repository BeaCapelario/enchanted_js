// Exercício 1 - Jogo de Adivinhação
document.getElementById("ex01").addEventListener("click", jogar_adivinhacao);
function jogar_adivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 10;
  let min = 1;
  let max = 100;
  
  alert("Jogo de Adivinhação!\nEu escolhi um número entre 1 e 100.\nVocê tem 10 tentativas para adivinhar!");
  
  for (let i = 1; i <= 10; i++) {
    let palpite = parseInt(prompt(`Tentativa ${i} de ${tentativas}\nDica: O número está entre ${min} e ${max}\nDigite seu palpite:`));
    
    
    if (isNaN(palpite)) {
      alert("Por favor, digite um número válido!");
      i--; 
      continue;
    }
    
    if (palpite < min || palpite > max) {
      alert(`Por favor, digite um número entre ${min} e ${max}!`);
      i--; 
      continue;
    }
    
    if (palpite === numeroSecreto) {
      alert(`Parabéns! Você acertou!\nO número era ${numeroSecreto}.\nVocê usou ${i} tentativa(s).`);
      return i;
    } else if (palpite < numeroSecreto) {
      min = palpite + 1; 
      alert(`Errou! O número é MAIOR que ${palpite}.\nNova dica: O número está entre ${min} e ${max}`);
    } else {
      max = palpite - 1; 
      alert(`Errou! O número é MENOR que ${palpite}.\nNova dica: O número está entre ${min} e ${max}`);
    }
    
    tentativas--;
    
    if (min > max) {
      alert("💡 Dica extra: Você já deveria ter acertado! Reveja seus palpites.");
      min = max = numeroSecreto;
    }
  }
  
  alert(`Game Over! Você perdeu todas as tentativas.\nO número era ${numeroSecreto}.`);
  return 0;
}