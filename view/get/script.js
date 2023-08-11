let url = "http://localhost/api_rest_sw2/controller/GET_clientes.php"

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        incluirNaTela(response)
    })


    
    function incluirNaTela(response){
        let corpo_tabela = document.querySelector("#corpo_tabela")
        
        var listTags = []
        response.forEach(element => {
            
            let textTags = ['tr','td','td', 'td', 'td', 'td', 'td']
            
            listTags = criarTags(textTags, listTags)
            listTags = editarTags(listTags, element)
            listTags = incluir(listTags)

            corpo_tabela.appendChild(listTags[0])
            listTags = []
        });
          
    }

    function criarTags(textTags, listTags){    
        textTags.forEach(tag => {
            let newTag = document.createElement(tag)
            listTags.push(newTag)  
        });
        return listTags
    }

    function editarTags(listTags, element){
        listTags[1].textContent = element.id
        listTags[2].textContent = element.nome
        listTags[3].textContent = element.email
        listTags[4].textContent = element.telefone
        listTags[5].textContent = element.endereco
        listTags[6].textContent = element.cpf


        return listTags
    }

    function incluir(listTags){
        listTags[0].appendChild(listTags[1])
        listTags[0].appendChild(listTags[2])
        listTags[0].appendChild(listTags[3])
        listTags[0].appendChild(listTags[4])
        listTags[0].appendChild(listTags[5])
        listTags[0].appendChild(listTags[6])


        return listTags
    }