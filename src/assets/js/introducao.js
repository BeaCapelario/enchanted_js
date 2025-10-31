document.getElementById('ex01').addEventListener('click', function () {
    alert("Olá!")
    let nome = prompt("Qual seu o nome?")
    alert("Bem vindo(a), " + nome + "!");
});

document.getElementById('ex02').addEventListener('click', function () {
    materia = prompt("Qual sua disciplina preferida?")
    alert(`A materia ${materia} realmente é ótima!`);
});

document.getElementById('ex03').addEventListener('click', function () {
    let dataHoje = prompt("Por favor, informe a data de hoje (DD/MM/AAAA):");
    alert(`Obrigado! Você informou que a data de hoje é ${dataHoje}.`);
});

document.getElementById('ex04').addEventListener('click', function () {
    let resposta = prompt("Está preparado para o segundo semestre de desenvolvimento de sistemas?");
    alert("Ótimo! Continue se esforçando que você vai se sair muito bem!");
});



