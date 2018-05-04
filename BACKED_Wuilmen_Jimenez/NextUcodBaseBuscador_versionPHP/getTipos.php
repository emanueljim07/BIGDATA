<?php

$data = file_get_contents("data-1.json");
$products = json_decode($data, true);
$temp_array = array();
$id=$_REQUEST["ciudad"];
echo 'id: '.$id;
echo '<option value="0">Seleccionar</option>';
foreach ($products as $product) {
   
   
       if (!isset($temp_array[$product["Tipo"]]))
	     {
           $temp_array[$product["Tipo"]] =& $product;
		   echo '<option value="'.$product["Id"].'">'.$product["Tipo"].'</option>';
		   }
}

?>
