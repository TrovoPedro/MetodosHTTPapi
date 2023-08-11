var formulario = document.querySelector('form');
var inputId = formulario.idCliente
var inputNome = formulario.nomeCliente
var inputEmail = formulario.emailCliente
var inputTelefone = formulario.telefoneCliente
var inputEndereco = formulario.enderecoCliente
var inputCpf = formulario.cpfCliente

var btn = document.querySelector('.btn')

btn.addEventListener('click', buscarCliente)


function buscarCliente(event) {
    event.preventDefault();
    
    let idCliente = inputId.value
    let nomeCliente = inputNome.value
    let emailCliente = inputEmail.value
    let telefoneCliente = inputTelefone.value
    let enderecoCliente = inputEndereco.value
    let cpfCliente = inputCpf.value

    
    formulario.reset()

    let cliente = {
        id: idCliente,
        nome: nomeCliente,
        email: emailCliente,
        telefone: telefoneCliente,
        endereco: enderecoCliente,
        cpf: cpfCliente

    }

    let url = "http://localhost/api_rest_sw2/controller/PATCH_cliente.php"

    fetch(url,{
        method: "PATCH",
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
    })
    
}




