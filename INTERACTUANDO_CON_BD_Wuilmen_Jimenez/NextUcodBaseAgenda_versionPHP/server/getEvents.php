<?php
  require('./conector.php');

   // $con = new ConectorBD('localhost','wjimenez','1abacola2');
$con = new ConectorBD();

  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {
   $flag=true;
    $resultado_consulta = $con->consultar(['event'],
    ['id', 'titulo','start_date','end_date','start_hour','end_hour','allDay'], 'WHERE 1=1');
	
while ($rows = $resultado_consulta->fetch_assoc()) {
			   
	$eventos[]= array("id"=>$rows['id'],"title"=>$rows['titulo'],"start"=>$rows['start_date'],"end"=>$rows['end_date'],"start_hour"=>$rows['start_hour'],"end_hour"=>$rows['end_hour'],"allDay"=>$rows['allDay']);
      $flag=false;
	}
if($flag)
{
    $php_response=array("msg"=>"SD"); 
	echo json_encode($php_response,JSON_FORCE_OBJECT);
}else{
    $php_response=array("msg"=>"OK","eventos"=>$eventos); 	
	echo json_encode($php_response,JSON_FORCE_OBJECT);
}
}
  $con->cerrarConexion();
?>