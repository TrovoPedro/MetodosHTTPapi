<?php
    require_once '../model/Cliente.php';
    require_once './ler.php';
    require_once './escrever.php';
   
    // recebendo os dados do front
    $dados = json_decode(file_get_contents('php://input'));
    $cliente = new Cliente($dados->id, $dados->nome, $dados->email, $dados->telefone, $dados->endereco, $dados->cpf);
   
    // lendo o arquivo de dados
    $clientes = json_decode(realizarLeitura());
    array_push($clientes, $cliente);
    
        
    $json = json_encode($clientes);
    escrever($json);


    echo json_encode($cliente);
?>