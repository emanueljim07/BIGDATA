<?php

  
    require('./conector.php');

 // $con = new ConectorBD('localhost','wjimenez','1abacola2');
$con = new ConectorBD();
  if ($con->initConexion('agenda_db')=='OK') {
  
  //Array con tres usuarios para ingresar en la BD
    $users = array(
	             array('Jose Sangurima','jsangurima@hotmail.com','admin','1980-02-26'),
	           array('Carlos Benitez','cbenitez@hotmail.com','auditor1','1989-10-01'),
			   array('Wuilliam Salavatierra','wsalvatierra@hotmail.com','auditor2','1982-12-04')
			   );

//Insertar los datos en la tabla user de la base datos agenda_db
for ($row = 0; $row < 3; $row++) {

      for ($col = 0; $col < 4; $col++) {
	 switch($col) 
	 {
	case 0: $datos['nombre'] = "'".$users[$row][$col]."'"; break;
	case 1: $datos['email'] = "'".$users[$row][$col]."'";  break;
	case 2: $datos['contrasenia'] = "'".password_hash($users[$row][$col],PASSWORD_DEFAULT)."'";  
			 break;
	case 3: $datos['fecha_nacimiento'] = "'".$users[$row][$col]."'";  break;
	default: break;
	}
   }
     $item=($row+1);
     if ($con->insertData('user', $datos)) {
      echo "<br> Registro $item, se insertó correctamente. ";
    }else echo "<br> Registro $item, presentó un error en la inserción. ";	
	
}

    $con->cerrarConexion();

  }else {
    echo "Se presentó un error en la conexión";
  }




 ?>
