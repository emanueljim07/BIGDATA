<?php
  require('./conector.php');

  //$con = new ConectorBD('localhost','wjimenez','1abacola2');
 $con = new ConectorBD();
  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {

      $data['titulo'] = "'".$_POST['titulo']."'";
	  $data['start_date'] = "'".$_POST['start_date']."'";
	  $data['end_date'] = "'".$_POST['end_date']."'";
	  $data['start_hour'] = "'".$_POST['start_hour']."'";
	  $data['end_hour'] = "'".$_POST['end_hour']."'";
	  $data['allDay'] =  "'".$_POST['allDay']."'";
	 
	 $resultado_insert = $con->insertData('event', $data);

 if($resultado_insert) {
 
		$php_response=array("msg"=>"OK","data"=>"2");  
	
	}else{
	$php_response=array("msg"=>"No se pudo insertar .".$_POST['start_hour'],"data"=>"2");  
	}
	 
	echo json_encode($php_response,JSON_FORCE_OBJECT);
 
}

  $con->cerrarConexion();
?>
