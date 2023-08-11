<?php
    
    require_once './ler.php';
    require_once './escrever.php';
    
    $dados = json_decode(file_get_contents('php://input'));

    $id = $dados->id;
    $nome = $dados->nome;
    $email = $dados->email;
    $telefone = $dados->telefone;
    $endereco = $dados->endereco;
    $cpf = $dados->cpf;

    $clientes = json_decode(realizarLeitura());
    
    foreach($clientes as $p) {
        if($p->id == $id){
            $p->nome = $nome;
            $p->email = $email;
            $p->telefone = $telefone;
            $p->endereco = $endereco;
            $p->cpf = $cpf;
            break;
        }
    }

    $json = json_encode($clientes);
    escrever($json);

    echo json_encode($json);
    
    
?>