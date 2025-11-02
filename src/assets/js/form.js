document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    // Limpar mensagens de erro anteriores
    limparErros();

    let isValid = true;

    // Validar Nome
    const nome = document.getElementById('nome').value.trim();
    if (!nome) {
        mostrarErro('nomeError', 'Por favor, digite seu nome');
        isValid = false;
    }

    // Validar Endereço
    const endereco = document.getElementById('endereco').value.trim();
    if (!endereco) {
        mostrarErro('enderecoError', 'Por favor, digite seu endereço');
        isValid = false;
    }

    // Validar Sexo
    const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    if (!sexoSelecionado) {
        mostrarErro('sexoError', 'Por favor, selecione seu sexo');
        isValid = false;
    }

    // Validar Telefone
    const telefone = document.getElementById('telefone').value.trim();
    if (!telefone) {
        mostrarErro('telefoneError', 'Por favor, digite seu telefone');
        isValid = false;
    }

    // Validar Celular
    const celular = document.getElementById('celular').value.trim();
    if (!celular) {
        mostrarErro('celularError', 'Por favor, digite seu celular');
        isValid = false;
    }

    // Validar Email
    const email = document.getElementById('email').value.trim();
    if (!email) {
        mostrarErro('emailError', 'Por favor, digite seu email');
        isValid = false;
    } else if (!validarEmail(email)) {
        mostrarErro('emailError', 'Por favor, digite um email válido');
        isValid = false;
    }

    // Se tudo estiver válido
    if (isValid) {
        alert('Formulário enviado com sucesso!\n\nDados cadastrados:\n' +
              `Nome: ${nome}\n` +
              `Endereço: ${endereco}\n` +
              `Sexo: ${sexoSelecionado.value}\n` +
              `Telefone: ${telefone}\n` +
              `Celular: ${celular}\n` +
              `Email: ${email}`);
        
        limparFormulario();
    }
}

function mostrarErro(elementId, mensagem) {
    const elemento = document.getElementById(elementId);
    elemento.textContent = mensagem;
    
    // Adicionar classe de erro ao input correspondente
    const campo = elemento.previousElementSibling;
    if (campo && campo.tagName === 'INPUT') {
        campo.classList.add('error');
    }
}

function limparErros() {
    // Limpar todas as mensagens de erro
    const erros = document.querySelectorAll('.error-message');
    erros.forEach(erro => {
        erro.textContent = '';
    });

    // Remover classes de erro dos inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function limparFormulario() {
    document.getElementById('formCadastro').reset();
    limparErros();
}

// Máscaras para telefone e celular (opcional)
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    e.target.value = value;
});

document.getElementById('celular').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    e.target.value = value;
});