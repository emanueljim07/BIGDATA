<?php
$data = file_get_contents("data-1.json");
$products = json_decode($data, true);

$temp_array = array();

echo '<option value="0">Seleccionar</option>';
foreach ($products as $product) {
  
   
    if (!isset($temp_array[$product["Ciudad"]]))
	{
           $temp_array[$product["Ciudad"]] =& $product;
		   echo '<option value="'.$product["Id"].'">'.$product["Ciudad"].'</option>'; 
		   }
}

?>
