
/*---------------------------------CHANGE SCALA TECLAS-----------------------------------*/
function cambiarColorBotonesAccion(elemento){
  elemento.style.transform = "scale3d(0.95,0.95,0.95)";
  }
  

function retornarColorBotonesAccion(elemento){
   elemento.style.transform = "initial";
}
/*-----------------------------FUNTION OF CALCULATE--------------------------------------------------*/
var x="0"; //número en pantalla
var xi=1; //iniciar número en pantalla: 1=si; 0=no;
var coma=0; //estado coma decimal 0=no, 1=si;
var ni=0; //número oculto o en espera.
var opera=0; //operación en curso; "no" =  sin operación.
var num1=0; //operación en curso; "no" =  sin operación.
var num2=0; 
var aux=0; 
var auxValorPrimerIgual=0; 
var resultado=0; 
var dijitos='';	
function capturaTecla(elemento){
    
   valor=devuelveSignoPunto(elemento.id);
   if(valor=='on')
   {
   encerarC();
   }else{ if(valor=="mas"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   		  if(resultado!=0 || num1!=0 || num2!=0)
		  {
		document.getElementById('display').innerHTML="";
		}
	   	
        if(  resultado==0)
		{
	   resultado+=num1;
	   }else{
		  if(auxValorPrimerIgual==0){
		  operacionCadena();
		  }
	   }
	  auxValorPrimerIgual=0;
	   opera=1;
	   x=0;
	   xi=1;
	   coma=0;
	   dijitos='';
	   
   }
    else{ if(valor=="menos"){
       
       num1 = parseFloat(document.getElementById("display").innerText);   
	     if (resultado==0 )
		 {
		  resultado=num1;
		 }
		 else{
		  if(auxValorPrimerIgual==0){
		  operacionCadena();
		  }
		 }
		  auxValorPrimerIgual=0;
		  if(resultado!=0 || num1!=0 || num2!=0)
		  {
		document.getElementById('display').innerHTML="";
		}

	   
	   opera=2;
	   x=0;
	   xi=1;
	   coma=0;
	   dijitos='';
	   
   }
    else{  if(valor=="por"){
       
       num1 = parseFloat(document.getElementById("display").innerText);	 
        alert("num1= "+num1);	   
	   		  if(resultado!=0 || num1!=0 || num2!=0)
		  {
		document.getElementById('display').innerHTML="";
		}    
	   if(resultado==0)
	   {
	   resultado=num1*1;
	   }		 else{
		  if(auxValorPrimerIgual==0){
		  operacionCadena();
		  }
		 }
	    auxValorPrimerIgual=0;//validar
	   opera=3;
	   x=0;
	   xi=1;
	   coma=0;
	   dijitos='';
	   
   }
    else{  if(valor=="dividido"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	
	   	   if(resultado==0)
	   {
	   resultado=num1/1;
	   }		 else{
		  if(auxValorPrimerIgual==0){
		  operacionCadena();
		  }
		 }
	   auxValorPrimerIgual=0;//validar
	  		  if(resultado!=0 || num1!=0 || num2!=0)
		  {
		document.getElementById('display').innerHTML="";
		}
	   opera=4;
	   x=0;
	   xi=1;
	   coma=0;
	   dijitos='';
	   
   }
    else{   if(valor=="potencia"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   	if(resultado==0)
	   {
	   resultado=num1
	   
	   }else{
	     
		  resultado= Math.pow(num2, resultado);
	   }
	   		  if(resultado!=0 || num1!=0 || num2!=0)
		  {
		document.getElementById('display').innerHTML="";
		}
	   opera=5;
	   x=0;
	   xi=1;
	   coma=0;
	   dijitos='';
	   
   }
    else{   if(valor=="raiz"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   	 if(resultado==0)
	   {
	   resultado=num1;
	   }
	    opera=6;
	   x=0;
	   xi=1;
	   coma=0;
	   dijitos='';
	   obtenerResultado();
	   
   }
    else{   if(valor=="sign"){
       
       num1 = parseFloat(document.getElementById("display").innerText);

	  document.getElementById('display').innerHTML = num1*(-1);

    
		 if(aux==0){

		 aux=num1*(-1);
		}

	
	   
   }
    else{    if(valor=="igual"){
	
       num2 = parseFloat(document.getElementById("display").innerText);
	   

	   if(auxValorPrimerIgual==0)
	   {
	      auxValorPrimerIgual=num2;
	   }
	   	   if(auxValorPrimerIgual>0)
	   {
	      num2=auxValorPrimerIgual;
	   }
	   x=0;
	   xi=1;
	     obtenerResultado();
		 coma=0;
		 dijitos='';
	   
   }
    else{
   numero(valor);
   }
   }
   }
   }
   }
   }
   }
   }
   }
  
}

//FUNCION PARA ENCADENAR OPERACION
function operacionCadena()
{   
		  if(opera==1){
		  resultado=resultado+num1;
		  }
		  if(opera==2){
		  resultado=resultado-num1;
		  }
		  
		  if(opera==3){
		  resultado=resultado*num1;
		  }
		   if(opera==4){
		  resultado=resultado/num1;
		  }
}
//METODO PARA DEVOVER QUE SIGNO TIENE EL NUMERO
function devuelveSignoPunto(signoParametro)
{

    var signo='';
	  if(signoParametro=='punto')
	  {
	   signo='.';
	   }else{
	   signo=signoParametro;
	   }
   return signo;
}

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el número pulsado en el argumento.
     	
     
         if (x=="0" || xi==1  ) {  // inicializar un número, 
		     if(xx=="."){
			 comaInicial(xx);
			 }
			 else{
            document.getElementById('display').innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número;
			 dijitos=xx.toString();
			}
            }
         else { //continuar un número
		     if(xx=="."){
			 controlarComas(xx);
			 }
			 else{
			  dijitos=dijitos+xx.toString();
			
			   if(dijitos.length<=8)
				   {
			  document.getElementById('display').innerHTML+=xx; //añadimos y mostramos en pantalla.
			  }
             
            x+=xx; //añadimos y guardamos
			}
            }
         xi=0 //el número está iniciado y podemos ampliarlo.
         }

//CONTROLAR QUE EXISTA UNA SOLA COMA
function controlarComas(xx)
{
     //alert("coma: "+coma+"dijitos: "+dijitos);
            if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
			         dijitos=dijitos+xx.toString();
			
			       if(dijitos.length<=8)
				   {
                   document.getElementById('display').innerHTML+=xx;
				   }
                   x+=xx;
                   coma=1; //cambiar el estado de la coma  
               }
    

}
//CONTROLAR COMA INICIAL
function comaInicial(xx)
{
            if (xx==".") { //si escribimos una coma al principio del número
               document.getElementById('display').innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; 
			   }

}

//Función que encera  pantalla al presionar EL botón C
        function encerarC(){
		     	   x=0;
	   xi=1;
	   coma=0;
	   dijitos='';
            num1 = 0;
            num2 = 0;
			auxValorPrimerIgual=0;
			resultado=0;
			document.getElementById('display').innerHTML = "0";
         
        }
//MOSTRAR VALOR EN PANTALLA		
function refrescar(){
            
			document.getElementById('display').innerHTML = resultado;	
			
        }
//CALCULAR OPERACION
 function obtenerResultado(){
		  if(aux!=0){
		  num1=aux;
 }
		   
            num1 = parseFloat(num1);
            switch (opera){
                case 1:
                    num1 += num2;
					resultado += num2;
                break;
                case 2:
                    num1 = num1 - num2;
					resultado =resultado- num2;
                break;
                case 3:
                    num1 *= num2;
				
					resultado *= num2;
					alert("resultado= "+resultado+" num2= "+num2);
                break;
                case 4:
				
                    num1 = num1 / num2;
					resultado=resultado/num2
                break;
                case 5:
                    num1 = Math.pow(num2, num1);
					resultado = Math.pow(num2, resultado);
					
                break;
				case 6:
            
					
					 resultado = Math.sqrt(resultado);
				
                break;
            }
		
			num1=truncarNumero(num1);
			resultado=truncarNumero(resultado);
			
            refrescar();
			
            num2 = parseFloat(num1);
             num1 = 0;
			 aux=0;
        }	
//TRUNCAR VALOR 		
function truncarNumero(num)
{
			var auxi = num.toString();
			
			 if(auxi.length>8){
			 num = auxi.substring(0, 8);
			 }
	return num;		 
}		
/*----------------------PATRON MODULO-------------------------*/

var Calculadora = {
  init: function(){  
    
    this.asignarEventosBotones('tecla');     
   
  },
  asignarEventosBotones: function(selector){
    var botonesPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < botonesPagina.length; i++) {
       botonesPagina[i].onmouseover = this.eventoColorBotones;
      botonesPagina[i].onmouseout = this.eventoRetornarColorBotones;
	  botonesPagina[i].onclick = this.eventoCapturaTecla;
    }
  },
  eventoColorBotones: function(event){
    cambiarColorBotonesAccion(event.target);
  },
  eventoRetornarColorBotones: function(event){
    retornarColorBotonesAccion(event.target);
  },
    eventoCapturaTecla: function(event){
    capturaTecla(event.target);
  }
}

Calculadora.init();
