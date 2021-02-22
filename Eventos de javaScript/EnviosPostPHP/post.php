<?php

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

if($usuario === '' || $pass === ''){
    echo json.parce('llena todos los campos');
}else {
    echo json.parce('Correcto: <br>Usuario:'.$usuario.'<br>Password:'.$pass);
}


