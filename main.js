document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("nome-telefone");
    const tabela = document.querySelector("table tbody");

    // Função para adicionar uma nova linha
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que a página recarregue

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;

        // Cria uma nova linha
        const novaLinha = document.createElement("tr");
        
        // Cria as células para o nome e telefone
        const colunaNome = document.createElement("td");
        const colunaTelefone = document.createElement("td");

        colunaNome.textContent = nome;
        colunaTelefone.textContent = telefone;

        // Adiciona as células na nova linha
        novaLinha.appendChild(colunaNome);
        novaLinha.appendChild(colunaTelefone);

        // Adiciona a nova linha na tabela
        tabela.appendChild(novaLinha);

        // Limpa os campos do formulário
        form.reset();
    });
});