function entrar(){
    let user = document.querySelector('#inputUser')
    let labelUser = document.querySelector('#labelUser')

    let senha = document.querySelector('#inputSenha')
    let labelSenha = document.querySelector('#labelSenha')

    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) =>{
        if(user.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(user.value == userValid.user && senha.value == userValid.senha){
        window.alert("Logando...")
        window.location.href = 'Index.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

    }else{
        window.alert("Usuário e/ou senha incorretos")
        user.focus()
    }

}
