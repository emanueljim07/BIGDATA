<?php
  require('./conector.php');

 // $con = new ConectorBD('localhost','wjimenez','1abacola2');
$con = new ConectorBD();

  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {
  
    $result_delete = $con->eliminarRegistro('event',' id="'.$_POST['id'].'"');
	
	if($result_delete)
	{
	$php_response=array("msg"=>"OK"); 
	}else{
	$php_response=array("msg"=>"ERROR eliminar"); 
	}

	// $php_response=array("msg"=>"ERROR eliminar","select"=>$result_delete); 

    //$php_response=array("msg"=>"OK"); 	
	echo json_encode($php_response,JSON_FORCE_OBJECT);
 
}

  $con->cerrarConexion();
?>
