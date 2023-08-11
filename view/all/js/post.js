

export default function enviarDados(event){
    event.preventDefault();
    // selecionando objetos html
    let form = document.querySelector("form")
    
    let inputId = form.idCliente
    let inputNome = form.nomeCliente
    let inputEmail = form.emailCliente
    let inputTelefone = form.telefoneCliente
    let inputEndereco = form.enderecoTelefone
    let inputCpf = form.cpfCliente
    
    // obtendo o conteúdo de texto
    let id = inputId.value
    let nome = inputNome.value
    let email = inputEmail.value
    let telefone = inputTelefone.value
    let endereco = inputEndereco.value
    let cpf = inputCpf.value

    let cliente = {
        id: id,
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cpf: cpf
        
    }
    form.reset()
    console.log(cliente)
    incluirDados(cliente)
}

function incluirDados(cliente){
    let url = "http://localhost/api_rest_sw2/controller/POST_cliente.php"
    fetch(url,{
        method: "POST",
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
        setTimeout(location.reload(), 5000)
    })
}