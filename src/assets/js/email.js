// Seleciona o formulário
const form = document.querySelector("form");

// Função para validar o formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado sem validação

    // Pega os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const estado = document.getElementById("estado").value;

    // Validação dos campos de texto
    if (!nome) {
        alert("Por favor, preencha o campo Nome.");
        return;
    }

    if (!cpf) {
        alert("Por favor, preencha o campo CPF.");
        return;
    }

    if (!email) {
        alert("Por favor, preencha o campo Email.");
        return;
    }

    if (!senha) {
        alert("Por favor, preencha o campo Senha.");
        return;
    }

    if (!estado) {
        alert("Por favor, selecione o Estado.");
        return;
    }

    // Validação do gênero (radio button)
    const genero = document.querySelector('input[name="genero"]:checked');
    if (!genero) {
        alert("Por favor, selecione o Gênero.");
        return;
    }

    // Validação dos interesses (checkbox)
    const interesses = document.querySelectorAll('input[name="interesses"]:checked');
    if (interesses.length === 0) {
        alert("Por favor, selecione pelo menos um Interesse.");
        return;
    }

    // Se passou por todas as validações
    alert("Cadastro realizado com sucesso!");
    form.reset(); // Limpa o formulário
});
