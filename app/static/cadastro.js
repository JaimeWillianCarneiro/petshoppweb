let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let Cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCPF')
let validCpf = true

let Cell = document.querySelector('#cell')
let labelCelular = document.querySelector('#labelCelular')
let validCell = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelEmail')
let validEmail = true



let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *Senhas diferentes'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

cell.addEventListener('keyup', () => {
  if(cell.value.length <11 || cell.value.length>13){
      labelCelular.setAttribute('style', 'color: red')
      labelCelular.innerHTML = 'Celular *Insira no mínimo 11 caracteres'
      cell.setAttribute('style', 'border-color: red')
      validCell = false
  } else {
    labelCelular.setAttribute('style', 'color: green')
    labelCelular.innerHTML = 'Celular'
    cell.setAttribute('style', 'border-color: green')
    validCell = true
}
})

cpf.addEventListener('keyup', () => {
  if(cpf.value.length <11 || cpf.value.length>11){
      labelCpf.setAttribute('style', 'color: red')
      labelCpf.innerHTML = 'CPF *Insira 11 caracteres'
      cpf.setAttribute('style', 'border-color: red')
      validCpf = false
  } else {
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'CPF'
    cpf.setAttribute('style', 'border-color: green')
    validCpf = true
}
})

email.addEventListener('keyup', () => {
  if(email.value.length <15 ){
      labelemail.setAttribute('style', 'color: red')
      labelemail.innerHTML = 'Email *Insira no mínimo 15 caracteres'
      email.setAttribute('style', 'border-color: red')
      validEmail = false
  } else {
    labelemail.setAttribute('style', 'color: green')
    labelemail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
}
})



function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha&& validCell&&validEmail&&validCpf){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value,
      cpfCad: Cpf.value,
      emailCad: email.value,
      celularCad: cell.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
       window.location.href = 'signin.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})


