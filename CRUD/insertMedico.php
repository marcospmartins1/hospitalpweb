<?php
    include '../CLASSES/conexao.php';
    include '../CLASSES/usuario.php';
    session_start();

    header('content-type: application/json');

    $sql = "INSERT INTO medicos (nome, especialidade, crm, telefone, email, usuario_id) VALUES ('" . $_POST['nome'] . "', '" . $_POST['especialidade'] . "', '" . $_POST['crm'] . "', '" . $_POST['telefone'] . "', '" . $_POST['email'] . "', " .  $_SESSION['user']->codigo . ")";

    if($conn->query($sql) === true){
        $msg = "Medico cadastrado com sucesso!";
    }else{
        $msg = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    echo json_encode(['msg'=>$msg]);
?>