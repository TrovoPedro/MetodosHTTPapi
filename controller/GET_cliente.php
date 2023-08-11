<?php
    
    require_once './ler.php';
    
    $dados = json_decode(file_get_contents('php://input'));

    $id = $dados->id;
    
    $clientes = json_decode(realizarLeitura());
    
    foreach($clientes as $p) {
        if($p->id == $id){
            $cliente = $p;
            break;
        }
    }
    echo json_encode($cliente);
?>