<!DOCTYPE html>
<html >
<head>
</head>
<body>
<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = 'From: '. $mail . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fué enviado por: " . $nombre . "\r\n";
$mensaje .= "Su e.mail es: " . $mail . "\r\n";
$mensaje  .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
$mensaje .= "Enviado el:" . date('d/m/Y', time());

$para = 'danielgecampos97@hotmail.com';
$asunto = 'Contacto CV';



mail($para,$asunto , utf8_decode($mensaje),$header);


echo"<script> setTimeout(\"location.href='index.html#contacto'\",3000)</script>";

?>  
<!-- Sweetalert-->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="sweetAlert.js"></script>
</body>
</html>


