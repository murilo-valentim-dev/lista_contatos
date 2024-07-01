document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário (comportamento padrão)

    // Pegando os valores do formulário
    let name = document.getElementById('nameInput').value.trim();
    let phone = document.getElementById('phoneInput').value.trim();

    // Verificando se os campos estão preenchidos
    if (name === '' || phone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Criando uma nova linha na tabela
    let table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    // Inserindo células na nova linha
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Adicionando os valores do formulário às células
    cell1.textContent = name;
    cell2.textContent = phone;

    // Limpa os campos do formulário após adicionar o contato
    document.getElementById('nameInput').value = '';
    document.getElementById('phoneInput').value = '';
});
