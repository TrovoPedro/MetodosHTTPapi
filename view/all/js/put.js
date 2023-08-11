
export default function editar(event){
    let tr = event.target.parentNode.parentNode

    let id = tr.children[0].textContent
    let nome = tr.children[1].textContent
    let email = tr.children[2].textContent
    let telefone = tr.children[3].textContent
    let endereco = tr.children[4].textContent
    let cpf = tr.children[5].textContent


    //console.log(tr.children[0].value)
    window.location.href = `http://localhost/api_rest_sw2/view/all/put.html?id=${id}&nome=${nome}&email=${email}&telefone=${telefone}&endereco=${endereco}&cpf=${cpf}`
    //console.log(`${id}  -  ${nome}   -   ${email}   -   ${yelefone}   -   ${endereco}   -   ${cpf}`)
}