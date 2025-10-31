function calcularTotal() {
    //getElementByID, varre o html e procura algum elemento que tenha o mesmo nome
    //parseInt: Conveter o valor para INT
    let precoPrato = parseInt(document.getElementById('prato').value)
    //Vou pegar o valor atribuido ao campo quantidade
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if (precoPrato === 0) {
        document.getElementById('resultado').textContent = 'Selecione um prato, por favor' 
    
    
    }else if (quantidade <= 0) {
        document.getElementById('resultado').textContent = 'Quantidade inválida'  
    
    }else {
        let total = precoPrato * quantidade;
        //Faço a varredura do meu HTML e vejo onde tem uma tag chamada "resultado"
        //Insiro o texto com o textContent
        //toFixed(2) são duas casas decimais 
        document.getElementById('resultado').textContent = 'O total a pagar é ' + total.toFixed(2)
    }

   if(quantidade){

   }
}    