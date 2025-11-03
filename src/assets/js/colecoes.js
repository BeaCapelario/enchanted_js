// Exercício 01 - Dobro dos valores
document.getElementById('ex01').addEventListener('click', function () {
    const vetor = [2, 5, 8, 10, 15];
    const dobro = vetor.map(num => num * 2);
    alert(`Vetor original: [${vetor}]\nDobro dos valores: [${dobro}]`);
});

// Exercício 02 - Média aritmética
document.getElementById('ex02').addEventListener('click', function () {
    const vetor = [10, 20, 30, 40, 50, 60, 70, 80];
    const soma = vetor.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / vetor.length;
    alert(`Vetor: [${vetor}]\nMédia aritmética: ${media.toFixed(2)}`);
});

// Exercício 03 - Idades acima da média
document.getElementById('ex03').addEventListener('click', function () {
    let idades = [];
    
    for (let i = 0; i < 20; i++) {
        let idade = Number(prompt(`Digite a idade da ${i + 1}ª pessoa:`));
        idades.push(idade);
    }
    
    const soma = idades.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / idades.length;
    const acimaDaMedia = idades.filter(idade => idade > media);
    
    alert(`Idades informadas: [${idades}]\nMédia: ${media.toFixed(2)}\nIdades acima da média: [${acimaDaMedia}]`);
});

// Exercício 04 - Números pares
document.getElementById('ex04').addEventListener('click', function () {
    let numeros = [];
    
    for (let i = 0; i < 10; i++) {
        let numero = Number(prompt(`Digite o ${i + 1}º número:`));
        numeros.push(numero);
    }
    
    const pares = numeros.filter(num => num % 2 === 0);
    
    if (pares.length > 0) {
        alert(`Números informados: [${numeros}]\nNúmeros pares: [${pares}]`);
    } else {
        alert(`Números informados: [${numeros}]\nTodos os números são ímpares.`);
    }
});

// Exercício 05 - Busca de nome
document.getElementById('ex05').addEventListener('click', function () {
    const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Julia"];
    const nomeBusca = prompt("Digite um nome para buscar:");
    
    const indice = nomes.findIndex(nome => nome.toLowerCase() === nomeBusca.toLowerCase());
    
    if (indice !== -1) {
        alert(`Nome encontrado!\nPosição no vetor: ${indice}\nVetor de nomes: [${nomes}]`);
    } else {
        alert(`Nome não encontrado!\nVetor de nomes: [${nomes}]`);
    }
});