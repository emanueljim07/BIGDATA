<?php
$data = file_get_contents("data-1.json");
$products = json_decode($data, true);
echo '<option value="0">Seleccionar</option>';
foreach ($products as $product) {
   echo '<option value="'.$fila["Id"].'">'.$fila["Ciudad"].'</option>';
}

?>
