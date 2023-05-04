
login = document.getElementById("login")
senha = document.getElementById("senha")

btn = document.getElementById("btn")
mensagem = document.getElementById("mensagem")


btn.addEventListener("click", function(evento){
    evento.preventDefault()
    
    if(senha.value == "admin" && login.value == "admin"){
        //console.log(senha.value,login.value)
        senha.classList.remove("invalida")
        mensagem.classList.add("mensagem-sucesso")
        mensagem.innerHTML = "Cadastrado com sucesso"
        mensagem.classList.remove("mensagem-erro")
        
    }else{
        senha.classList.add("invalida")
        mensagem.innerHTML = "Login ou senha incorretos"
        mensagem.classList.add("mensagem-erro")
        
    }
})

