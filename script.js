document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".contact-form");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            // Impede o envio padrão do formulário para podermos processar com o JavaScript
            evento.preventDefault();

            // Pega os valores digitados pelos usuários
            const nome = formulario.querySelector('input[type="text"]').value.trim();
            const email = formulario.querySelector('input[type="email"]').value.trim();
            const mensagem = formulario.querySelector('textarea').value.trim();

            // Validação simples para garantir que nenhum campo foi enviado apenas com espaços
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar sua ideia!");
                return;
            }

            // Exibe uma mensagem de agradecimento personalizada na tela
            alert(`Obrigado, ${nome}! Sua ideia sustentável foi enviada com sucesso para o Projeto Agrinho. Juntos vamos mudar o futuro! 🌍🌱`);

            // Limpa o formulário após o envio bem-sucedido
            formulario.reset();
        });
    }
});