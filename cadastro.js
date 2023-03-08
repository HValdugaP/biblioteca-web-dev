let nome = document.querySelector('#Nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#Email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let user = document.querySelector('#User')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let senha = document.querySelector('#inputSenha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#inputConfirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validConfirmarSenha = false

 


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '*Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'color: red')
        nome.innerHTML = ''
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = '(Ok)'
        nome.setAttribute('style', 'color: green')
        nome.innerHTML = ''
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = '(Ok)'
    email.setAttribute('style', 'color: green')
    validEmail = true
})

user.addEventListener('keyup', () => {
    if(user.value.length <= 4){
        labelUser.setAttribute('style', 'color:red')
        labelUser.innerHTML = 'usuario precisa ter pelo menos 5 caracteres'
        user.setAttribute('style', 'border-color:red')
        validUser = false
    }else{
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML = '(Ok)'
        user.setAttribute('style', 'color: green')
        user.innerHTML = ''
        validUser = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = '(A senha precisa ter 8 caracteres e pelo menos um numero e caractere especial)'
        senha.setAttribute('style', 'color: red')
        senha.innerHTML = ''
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = '(Ok)'
        senha.setAttribute('style', 'color: green')
        senha.innerHTML = ''
        validSenha = true
    }
})

confirmarSenha.addEventListener('keyup', () => {
    if(senha.value != confirmarSenha.value){
        labelConfirmarSenha.setAttribute('style', 'color: red')
        labelConfirmarSenha.innerHTML = '(As senhas precisam ser iguais)'
        confirmarSenha.setAttribute('style', 'color: red')
        confirmarSenha.innerHTML = ''
        validConfirmarSenha = false
    }else{
        labelConfirmarSenha.setAttribute('style', 'color: green')
        labelConfirmarSenha.innerHTML = '(Ok)'
        confirmarSenha.setAttribute('style', 'color: green')
        confirmarSenha.innerHTML = ''
        validConfirmarSenha = true
    }
})

function cadastrar(){
    if(validNome && validEmail && validUser && validSenha && validConfirmarSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            nomeCad: nome.value,
            emailCad: email.value,
            userCad: user.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        window.alert("Cadastrando usuário...")

        window.location.href = 'Login.html'
        
    } else {
        window.alert("Erro\nPreencha os campos corretamente!")
        user.focus()
    }
}