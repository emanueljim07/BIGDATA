$(document).ready(function(){
    
    //1.- Al hacer click sobre cualquier elemento que tenga el atributo search.....
    $('[search]').click(function(e){
        //Detenemos el comportamiento normal del evento click sobre el elemento clicado
        e.preventDefault();		
		$('.response-container').empty();
		 
        //Mostramos texto de que la solicitud está en curso
        $(".response-container").html("<p>Search...</p>");	
		
		if($("#selectCiudad option:selected").text()=="Seleccionar")
		{

		// Get the modal
		var modal = document.getElementById('myModal');
		modal.style.display = "block";
		document.getElementById("selectCiudad").style.color="red"; 
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];				   
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		   document.getElementById("selectCiudad").style.color="black"; 	
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		} 
		}else
		{
		
		// Saving it's instance to var
        var slider = $("#rangoPrecio").data("ionRangeSlider");
		var form_data = {
                        is_ajax: 1,
  					    idCiudad: $("#selectCiudad option:selected").text(),
					    idTipo: $("#selectTipo option:selected").text(),
						from: slider.result.from,
						to: slider.result.to
                        };						
		 $.ajax({
                 type: "POST",
                  url: "buscador.php",
				 data: form_data,
              success: function(response)
                      {
                                $('.response-container').html(response).fadeIn();							  
                      }
                    });
		}			
    });
	
	 //2.- Al hacer click sobre cualquier elemento que tenga el atributo all-search...........
	$('[all-search]').click(function(e){
        //Detenemos el comportamiento normal del evento click sobre el elemento clicado
        e.preventDefault();	
        //Limpiamos componente 		
		$('.response-container').empty();
		 
        //Mostramos texto de que la solicitud está en curso
        $(".response-container").html("<p>Search...</p>");	
		
		// Saving it's instance to var of the range the price
        var slider = $("#rangoPrecio").data("ionRangeSlider");
		var form_data = {
                        is_ajax: 1,
  					    idCiudad: 'Seleccionar',
					    idTipo:  'Seleccionar',
						from: slider.result.from,
						to: slider.result.to
                        };						
		 $.ajax({
                 type: "POST",
                  url: "buscador.php",
				 data: form_data,
              success: function(response)
                      {
                                $('.response-container').html(response).fadeIn();							  
                      }
                    });
    });
	//3.- Para llenar el select Ciudades
	 $.ajax({
                            type: "POST",
                            url: "getCiudades.php",
                            success: function(response)
                            {
								
                                $('.filtroCiudad select').html(response).fadeIn();
							 
                            }
                    });
	
	//4.- Para llenar el select Tipos
	 $(".filtroCiudad select").change(function() {
		
                        var form_data = {
                                is_ajax: 1,
                                ciudad: +$(".filtroCiudad select").val()
                        };
						/*console.log('test: '+form_data);
						
						$.each(form_data, function(key,value) {
    
                    }); */

                        $.ajax({
                                type: "POST",
                                url: "getTipos.php",
                                data: form_data,
                                success: function(response)
                                {
                                    $('.filtroTipo select').html(response).fadeIn();
                                }
                        });
                    });
					

});        