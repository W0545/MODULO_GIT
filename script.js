document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    if (!validatePhone(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    var table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.textContent = nome;
    cell2.textContent = telefone;

    document.getElementById('contactForm').reset();
});

function validatePhone(phone) {
    var phoneRegex = /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/;
    return phoneRegex.test(phone);
}