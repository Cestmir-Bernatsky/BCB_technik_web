<?php

$hi = "blalbdalbdla";

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];

    $mailTo = "cestajunior@seznam.cz";
    $header =  "From: ".$email;
    $txt = "Obdrželi jste zprávu od ".$name.".\n\n".$message."\n\n"."Telefonní číslo: ".$number;
    $subject = "Odesláno z webu BCB technik";


    mail($mailTo, $subject, $txt, $header);
    header("Location: kontakty.html?mailsend");
}
  

