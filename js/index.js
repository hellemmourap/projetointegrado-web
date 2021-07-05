var senha = documento.getElementById('senha');
if (senha.type == 'senha') {
    senha.type = 'texto';
}
else {
    senha.type = 'senha';
}
function verificar(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    let verificarEmail = "projetoweb@gmail.com";
    let verificarSenha = "projetoweb";

    if (email == verificarEmail && password == verificarSenha) {
        alert("Success");
    }
    else {
        alert("Login incorreto");
    }
}


/*email.addEventListener('focus',()=>{
    email.style.borderColor = "#4A5F6A"
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc"
});
password.addEventListener('focus',()=>{
    password.style.borderColor = "#4A5F6A"
});
password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc"
});   */

