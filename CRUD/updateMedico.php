<?php
    include '../CLASSES/conexao.php';
    include '../CLASSES/usuario.php';
    session_start();

    header('content-type: application/json');

    $sql = "UPDATE medicos SET nome = '" .$_POST['nome']. "', especialidade = '" .$_POST['especialidade']. "', crm = '" .$_POST['crm']. "', telefone = '" .$_POST['telefone']. "', email = '" .$_POST['email']. "', usuario_id = ".$_SESSION['user']->codigo. " WHERE medico_id = " .$_POST['medico_id']. "";

    if($conn->query($sql)===true){
        $msg = "Dados atualizados com sucesso";
    }else{
        $msg = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    echo json_encode(['msg'=>$msg]);
?>