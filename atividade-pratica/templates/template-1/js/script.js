// Captura o formulário pelo ID
const formulario = document.getElementById('meuFormulario');
const feedback = document.getElementById('formFeedback');

// Adiciona o evento de 'submit' (envio)
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue

    // Coletando dados (exemplo simples)
    const nome = document.getElementById('nome').value;

    // Lógica básica de validação (o HTML já possui required, mas aqui é um reforço)
    if (nome.length < 3) {
        feedback.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        feedback.className = 'feedback-msg erro';
        return;
    }

    // Feedback de sucesso (Simulação)
    feedback.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`;
    feedback.className = 'feedback-msg sucesso';

    // Limpar os campos do formulário
    formulario.reset();
});
