<?php
  require('./conector.php');

   // $con = new ConectorBD('localhost','wjimenez','1abacola2');
$con = new ConectorBD();

  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {
  
        $data['titulo'] = "'".$_POST['titulo']."'";
	  $data['start_date'] = "'".$_POST['start_date']."'";
	  $data['end_date'] = "'".$_POST['end_date']."'";

  
    $result_update = $con->actualizarRegistro('event',$data,' id="'.$_POST['id'].'"');
	
	if($result_update)
	{
	$php_response=array("msg"=>"OK"); 
	}else{
	$php_response=array("msg"=>"ERROR"); 
	}


    //$php_response=array("msg"=>"OK"); 	
	echo json_encode($php_response,JSON_FORCE_OBJECT);
 
}

  $con->cerrarConexion();
?>
