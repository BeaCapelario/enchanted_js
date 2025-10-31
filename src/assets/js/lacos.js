document.getElementById('ex01').addEventListener('click', function () {
    let num = Number(prompt("Digite o número desejado:"));

    for (let i = 1; i <= 10; i++) {
        alert(`${num} x ${i} = ${num * i}`);
    }

});

document.getElementById('ex02').addEventListener('click', function () {
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];

    let jogarNovamente = true;

    while (jogarNovamente) {
        const computador = opcoes[Math.floor(Math.random() * 3)];

        let jogador = prompt("Digite sua jogada! (Pedra, Papel ou Tesoura)");
        if (!jogador) break; // se cancelar, sai do jogo
        jogador = jogador.charAt(0).toUpperCase() + jogador.slice(1).toLowerCase();

        alert(`Você jogou: ${jogador}, Computador jogou: ${computador}`);

        if (jogador === computador) {
            alert("Empate!");
        } else if (
            (jogador === "Pedra" && computador === "Tesoura") ||
            (jogador === "Papel" && computador === "Pedra") ||
            (jogador === "Tesoura" && computador === "Papel")
        ) {
            alert("Você venceu!");
        } else {
            alert("Computador venceu!");
        }

        let resposta = prompt("Deseja jogar novamente? (Sim ou Não)");
        if (!resposta || resposta.toLowerCase() !== "sim") {
            jogarNovamente = false;
            alert("Obrigado por jogar!");
        }
    }

});

document.getElementById('ex03').addEventListener('click', function () {
    let num = Number(prompt("Digite um número inteiro para calcular o fatorial:"));

    let fatorial = 1;

    for (let i = 1; i <= num; i++) {
        fatorial *= i; // fatorial = fatorial * i
    }

    alert(`O fatorial de ${num} é ${fatorial}`);

});

