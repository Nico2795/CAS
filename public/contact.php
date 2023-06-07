<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = "nico2795@gmail.com";
  $subject = "Nuevo formulario de contacto";
  $body = "Nombre: $name\nCorreo electrónico: $email\nTeléfono: $phone\nMensaje: $message";

  if (mail($to, $subject, $body)) {
    echo "¡Gracias! Tu mensaje ha sido enviado.";
  } else {
    echo "Lo sentimos, ha ocurrido un error al enviar el mensaje.";
  }
}
?>
