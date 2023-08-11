const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")
const nome = urlParams.get("nome")
const email = urlParams.get("email")
const telefone = urlParams.get("telefone")
const endereco = urlParams.get("endereco")
const cpf = urlParams.get("cpf")

alert('deu certo')

var formulario = document.querySelector('form');
var inputId = formulario.idCliente
var inputNome = formulario.nomeCliente
var inputEmail = formulario.emailCliente
var inputTelefone = formulario.telefoneCLiente
var inputEndereco = formulario.enderecoCliente
var inputCpf = formulario.cpfCliente

var btn = document.querySelector('.btn')

inputId.value = id
inputNome.value = nome
inputEmail.value = email
inputTelefone.value = telefone
inputEndereco.value = endereco
inputCpf.value = cpf



btn.addEventListener('click', buscarCliente)


function buscarCliente(event) {
    event.preventDefault();
    
    let id = inputId.value
    let nome = inputNome.value
    let email = inputEmail.value
    let telefone = inputTelefone.value
    let endereco = inputEndereco.value
    let cpf = inputCpf.value
    
    formulario.reset()

    let cliente = {
        id: id,
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cpf: cpf
        
    }

    let url = "http://localhost/api_rest_sw2/controller/PUT_Cliente.php"

    fetch(url,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        console.log(response)
        window.location.href = 'http://localhost/api_rest_sw2/view/all/'
    })
    
}




