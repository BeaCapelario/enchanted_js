// Exercício 1 - Sistema Bancário
document.getElementById("ex01").addEventListener("click", simular_banco);

function simular_banco() {
    let contas = {};
    let contaAtual = null;
    
    function criarConta() {
        const numeroConta = Object.keys(contas).length + 1;
        contas[numeroConta] = {
            saldo: 0,
            extrato: []
        };
        return numeroConta;
    }
    
    function depositar(conta, valor) {
        if (isNaN(valor) || valor <= 0) {
            alert("Erro: Valor de depósito deve ser um número positivo!");
            return false;
        }
        contas[conta].saldo += valor;
        contas[conta].extrato.push(`Depósito: +R$ ${valor.toFixed(2)}`);
        alert(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        return true;
    }
    
    function sacar(conta, valor) {
        if (isNaN(valor) || valor <= 0) {
            alert("Erro: Valor de saque deve ser um número positivo!");
            return false;
        }
        if (valor > contas[conta].saldo) {
            alert("Erro: Saldo insuficiente!");
            return false;
        }
        contas[conta].saldo -= valor;
        contas[conta].extrato.push(`Saque: -R$ ${valor.toFixed(2)}`);
        alert(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        return true;
    }
    
    function exibirSaldo(conta) {
        alert(`Saldo da conta ${conta}: R$ ${contas[conta].saldo.toFixed(2)}`);
    }
    
    function exibirExtrato(conta) {
        if (contas[conta].extrato.length === 0) {
            alert(`Extrato da conta ${conta}:\nNenhuma operação realizada.\n\nSaldo atual: R$ ${contas[conta].saldo.toFixed(2)}`);
            return;
        }
        
        let extratoTexto = `Extrato da conta ${conta}:\n\n`;
        contas[conta].extrato.forEach(operacao => {
            extratoTexto += `${operacao}\n`;
        });
        extratoTexto += `\nSaldo atual: R$ ${contas[conta].saldo.toFixed(2)}`;
        alert(extratoTexto);
    }
    
    // Cria uma conta inicial para o usuário
    if (Object.keys(contas).length === 0) {
        contaAtual = criarConta();
        alert(`Conta criada com sucesso!\nNúmero da conta: ${contaAtual}\nSaldo inicial: R$ 0,00`);
    }
    
    let executando = true;
    
    while (executando) {
        const opcao = prompt(
            `SISTEMA BANCÁRIO - Conta: ${contaAtual}\n\n` +
            `1 - Depositar\n` +
            `2 - Sacar\n` +
            `3 - Exibir Saldo\n` +
            `4 - Exibir Extrato\n` +
            `5 - Criar Nova Conta\n` +
            `6 - Trocar de Conta\n` +
            `0 - Sair\n\n` +
            `Digite a opção desejada:`
        );
        
        switch (opcao) {
            case "1":
                const valorDeposito = parseFloat(prompt("Digite o valor para depósito:"));
                depositar(contaAtual, valorDeposito);
                break;
                
            case "2":
                const valorSaque = parseFloat(prompt("Digite o valor para saque:"));
                sacar(contaAtual, valorSaque);
                break;
                
            case "3":
                exibirSaldo(contaAtual);
                break;
                
            case "4":
                exibirExtrato(contaAtual);
                break;
                
            case "5":
                const novaConta = criarConta();
                alert(`Nova conta criada!\nNúmero: ${novaConta}\nSaldo inicial: R$ 0,00`);
                break;
                
            case "6":
                const numeroConta = parseInt(prompt("Digite o número da conta:"));
                if (contas[numeroConta]) {
                    contaAtual = numeroConta;
                    alert(`Conta alterada para: ${contaAtual}`);
                } else {
                    alert("Erro: Conta não encontrada!");
                }
                break;
                
            case "0":
                executando = false;
                let resumo = "Resumo das contas:\n\n";
                Object.keys(contas).forEach(conta => {
                    resumo += `Conta ${conta}: R$ ${contas[conta].saldo.toFixed(2)}\n`;
                });
                alert(resumo + "\n Obrigado por usar nosso sistema bancário!");
                break;
                
            default:
                alert("Opção inválida! Tente novamente.");
        }
    }
    
    return contas;
}