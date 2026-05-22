document.getElementById('btnSalvar').addEventListener('click', function() {
    // Pegando valores básicos do formulário
    const titulo = document.getElementById('titulo').value;
    const categoria = document.getElementById('categoria').value;
    
    // Pegando o valor do radio button selecionado
    const prioridade = document.querySelector('input[name="prioridade"]:checked').value;
    
    const msgRetorno = document.getElementById('msg-retorno');

    // Validação super simples
    if(titulo.trim() === '') {
        alert('Por favor, preencha o título.');
        return;
    }

    // Exibindo mensagem de sucesso manipulando as classes e texto
    msgRetorno.textContent = `Item "${titulo}" (Cat: ${categoria}, Prio: ${prioridade}) salvo com sucesso!`;
    msgRetorno.classList.remove('hidden');

    // Resetando o formulário para a próxima inserção
    document.getElementById('formCadastro').reset();
    
    // Escondendo a mensagem após 3 segundos
    setTimeout(() => {
        msgRetorno.classList.add('hidden');
    }, 3000);
});
