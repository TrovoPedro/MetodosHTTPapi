
export default function _delete(event) {
    let tr = event.target.parentNode.parentNode

    let idCliente = tr.children[0].textContent

    let cliente = {
        id: idCliente
    }

    let url = "http://localhost/api_rest_sw2/controller/DELETE_cliente.php"

    fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        //console.log(response)
        location.reload()
    })
    
}