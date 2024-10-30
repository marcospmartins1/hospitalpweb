<?php
    include '../CLASSES/conexao.php';

    header('content-type: application/json');

    $sql = "DELETE FROM medicos WHERE medico_id = " . $_POST['medico_id'];

    if($conn->query($sql) === true){
        $msg = "Dados deletados com sucesso!";
    }else{
    $msg = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    echo json_encode(['msg'=>$msg]);
?>