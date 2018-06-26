<?php
  require('./conector.php');
  $con = new ConectorBD('localhost','wjimenez','1abacola2');
  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {  
    $resultado_consulta = $con->consultar(['user'],
    ['email', 'contrasenia'], 'WHERE email="'.$_POST['username'].'"');
	
  	while ($rows = $resultado_consulta->fetch_array()) {		 
		if(password_verify($_POST['password'],$rows["contrasenia"])) {
			$_SESSION['username'] = $rows["email"];
	    	$php_response=array("msg"=>"OK","data"=>"2");	 		
		}else{
			$php_response=array("msg"=>"NO existe el Usuario","data"=>"2"); 
		}
		echo json_encode($php_response,JSON_FORCE_OBJECT);
	}	
}	
 
  $con->cerrarConexion();
?>
