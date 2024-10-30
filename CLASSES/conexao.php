<?php
$servername = "localhost";
$username = "root";
$password = "marcos2024";
$dbname = "hospital";

//$servername = "localhost";
//$username = "root";
//$password = "root";
//$dbname = "hospital";


$conn = mysqli_connect ($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Falha na conexão: " . $conn->connect_error);
}
?>
