<?php
$data = file_get_contents("data-1.json");
$products = json_decode($data, true);
$IdCiudad=$_REQUEST["idCiudad"]; //Obtener ciudad seleccionada
$IdTipo=$_REQUEST["idTipo"]; //Obtener tipo seleccionado
$RangeUpper=number_format($_REQUEST["to"]); //Obtener rango precio inferior
$RangeLower=number_format($_REQUEST["from"]); //Obtener rango precio superior

foreach ($products as $product) { 
      
		   //1.- Consultar todos los datos 
		   if ($IdCiudad=='Seleccionar' and $IdTipo='Seleccionar')
		   {
           echo "<img src='img/home.jpg' width=100 />";
		   echo 'Id : '.$product["Id"];
		   echo "<br>"; //* Esto es un salto de linea
		   echo 'Direccion : '.$product["Direccion"];
		   echo "<br>"; //* Esto es un salto de linea
           echo 'Ciudad : '.$product["Ciudad"];
           echo "<br>"; //* Esto es un salto de linea 		   
		   echo 'Telefono : '.$product["Telefono"];
		   echo "<br>"; //* Esto es un salto de linea
		   echo 'Codigo_Postal : '.$product["Codigo_Postal"];
           echo "<br>"; //* Esto es un salto de linea		   
		   echo 'Tipo : '.$product["Tipo"];
           echo "<br>"; //* Esto es un salto de linea		   
           echo 'Precio : '.$product["Precio"];
           echo "<br>"; //* Esto es un salto de linea

			echo " &nbsp; "; 	   
			echo " <br>"; //* Esto es un salto de linea
			echo " &nbsp; "; 	 
			echo " <br>"; //* Esto es un salto de linea
			echo " &nbsp; "; 	 
			echo " <br>"; //* Esto es un salto de linea		
			
		   }
           else{
			    //2.- Consultar filtrando por ciudad, tipos de vivienda y rangos de precios
			   if ($IdCiudad==$product["Ciudad"] and $IdTipo==$product["Tipo"])
			   {
				    $precio= str_replace ( '$' , '',$product["Precio"]);
					
				   if( $precio>=$RangeLower and  $precio<=$RangeUpper )
				   {
			          echo "<img src='img/home.jpg' width=100 />";
		   echo 'Id : '.$product["Id"];
		   echo "<br>"; //* Esto es un salto de linea
		   echo 'Direccion : '.$product["Direccion"];
		   echo "<br>"; //* Esto es un salto de linea
           echo 'Ciudad : '.$product["Ciudad"];
           echo "<br>"; //* Esto es un salto de linea 		   
		   echo 'Telefono : '.$product["Telefono"];
		   echo "<br>"; //* Esto es un salto de linea
		   echo 'Codigo_Postal : '.$product["Codigo_Postal"];
           echo "<br>"; //* Esto es un salto de linea		   
		   echo 'Tipo : '.$product["Tipo"];
           echo "<br>"; //* Esto es un salto de linea		   
           echo 'Precio : '.$product["Precio"];
           echo "<br>"; //* Esto es un salto de linea
		   
		   	echo " &nbsp; "; 	   
			echo " <br>"; //* Esto es un salto de linea
			echo " &nbsp; "; 	 
			echo " <br>"; //* Esto es un salto de linea
			echo " &nbsp; "; 	 
			echo " <br>"; //* Esto es un salto de linea
	
				   }
				   
			   }	else{
				   
				   //3.- Consultar filtrando unicamente ciudad y rangos de precios
		   if ($IdCiudad==$product["Ciudad"] and $IdTipo=='Seleccionar')
		   {
			   	 $precio= str_replace ( '$' , '',$product["Precio"]);
					
				   if( $precio>=$RangeLower and  $precio<=$RangeUpper )
				   {
           echo "<img src='img/home.jpg' width=100 />";
		   echo 'Id : '.$product["Id"];
		   echo "<br>"; //* Esto es un salto de linea
		   echo 'Direccion : '.$product["Direccion"];
		   echo "<br>"; //* Esto es un salto de linea
           echo 'Ciudad : '.$product["Ciudad"];
           echo "<br>"; //* Esto es un salto de linea 		   
		   echo 'Telefono : '.$product["Telefono"];
		   echo "<br>"; //* Esto es un salto de linea
		   echo 'Codigo_Postal : '.$product["Codigo_Postal"];
           echo "<br>"; //* Esto es un salto de linea		   
		   echo 'Tipo : '.$product["Tipo"];
           echo "<br>"; //* Esto es un salto de linea		   
           echo 'Precio : '.$product["Precio"];
           echo "<br>"; //* Esto es un salto de linea
		   
		   	echo " &nbsp; "; 	   
			echo " <br>"; //* Esto es un salto de linea
			echo " &nbsp; "; 	 
			echo " <br>"; //* Esto es un salto de linea
			echo " &nbsp; "; 	 
			echo " <br>"; //* Esto es un salto de linea
	
				   }		   
		   }
		   
				   
			   }	   
			   
		   }		   
      


}

?>