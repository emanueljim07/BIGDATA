<?php

 

 session_start();
 
  if (isset($_SESSION['username'])) {
 
    session_destroy();
    echo "OK";
	
  }else{
  Header( "Location: http://localhost/NextUcodBaseAgenda_versionPHP/client/index.html" );
  }



 ?>
