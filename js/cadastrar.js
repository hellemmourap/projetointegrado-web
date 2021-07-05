function validarInputs(event) {
    event.preventDefault();
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var passConfirmation = document.getElementById('passConfirmation').value;

    if (userName.length >= 6) {
        if (password.length >= 8) {
            if (password.length == passConfirmation.length) {
                alert("Cadastro efetuado!");
            }
            else{
                alert("As senhas não condizem!!!");
            }
        }
        else{
            alert("A senha precisa ter no mínimo 8 caracteres");
        }
    }
    else{
        alert("Seu nome de usuário precisa ter no mínimo 6 caracteres");
    }
}