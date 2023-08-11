<?php
    class Cliente{
        public $id;
        public $nome;
        public $email;
        public $telefone;
        public $endereco;
        public $cpf;


        function __construct($id, $nome, $email, $telefone, $endereco, $cpf) {
            $this->id = $id;
            $this->nome = $nome;
            $this->email = $email;
            $this->telefone = $telefone;
            $this->endereco = $endereco;
            $this->cpf = $cpf

        }
    }
?>