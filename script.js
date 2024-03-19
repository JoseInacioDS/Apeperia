document.getElementById('myForm').addEventListener('submit', function (event) {
    var nome = document.getElementById('nome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var email = document.getElementById('email').value;
    var rg = document.getElementById('rg').value;
    var areaAtuacao = document.getElementById('areaAtuacao').value;

    if (!nome || !dataNascimento || !email || !rg || !areaAtuacao) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    } else if (!moment(dataNascimento, 'DD/MM/YYYY', true).isValid()) {
        alert('Formato inválido para Data de Nascimento. Use dd/mm/aa.');
        event.preventDefault();
    } else if (!EmailValidator.validate(email)) {
        alert('Formato de email inválido.');
        event.preventDefault();
    } else if (!BrazilianIdentificationValidator.validateRG(rg)) {
        alert('Formato de RG inválido. Use xx.xxx.xxx-x.');
        event.preventDefault();
    }
});

document.getElementById("myForm").addEventListener("submit", function (event) {
    // event.preventDefault(); <-- remove this line
    alert("Formulário enviado!");
});