
/*---------------------------------CAMBIAR COLOR TECLAS-----------------------------------*/
function cambiarColorBotonesAccion(elemento){
  elemento.style.background = "#4d62d0";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";

  }
}
function retornarColorBotonesAccion(elemento){
  elemento.style.background = "#149c5f";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";
  }
}
/*-----------------------------FUNCIONES DE CALCULADORA--------------------------------------------------*/
var x="0"; //número en pantalla
var xi=1; //iniciar número en pantalla: 1=si; 0=no;
var coma=0; //estado coma decimal 0=no, 1=si;
var ni=0; //número oculto o en espera.
var opera=0; //operación en curso; "no" =  sin operación.
var num1=0; //operación en curso; "no" =  sin operación.
var num2=0; 
var aux=0; 
var dijitos='';	
function capturaTecla(elemento){
    
   valor=devuelveSignoPunto(elemento.id);
   if(valor=='on')
   {
   encerarC();
   }else{ if(valor=="mas"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   document.getElementById('display').innerHTML="";
	   opera=1;
	   x=0;
	   xi=1;
	   dijitos='';
	   
   }
    else{ if(valor=="menos"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   document.getElementById('display').innerHTML="";
	   opera=2;
	   x=0;
	   xi=1;
	   dijitos='';
	   
   }
    else{  if(valor=="por"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   
	   document.getElementById('display').innerHTML="";
	   opera=3;
	   x=0;
	   xi=1;
	   dijitos='';
	   
   }
    else{  if(valor=="dividido"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   document.getElementById('display').innerHTML="";
	   opera=4;
	   x=0;
	   xi=1;
	   dijitos='';
	   
   }
    else{   if(valor=="potencia"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   document.getElementById('display').innerHTML="";
	   opera=5;
	   x=0;
	   xi=1;
	   dijitos='';
	   
   }
    else{   if(valor=="raiz"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	    opera=6;
	   x=0;
	   xi=1;
	   obtenerResultado();
	   
   }
    else{   if(valor=="sign"){
       
       num1 = parseFloat(document.getElementById("display").innerText);
	   opera=3;
	   num1*=-1;

		 if(aux==0){
	    aux=num1;
		}
	     refrescar();
	   
   }
    else{    if(valor=="igual"){
	
       num2 = parseFloat(document.getElementById("display").innerText);
	   	   x=0;
	   xi=1;
	     obtenerResultado();
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
			}
            }
         else { //continuar un número
		     if(xx=="."){
			 controlarComas(xx);
			 }
			 else{
			  dijitos=dijitos+xx.toString();
			
			   if(dijitos.length<=7)
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
            if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
			         dijitos=dijitos+xx.toString();
			
			       if(dijitos.length<=7)
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
            num1 = 0;
            num2 = 0;
            refrescar();
        }
        function refrescar(){
            document.getElementById('display').innerHTML = num1;
        }

        function obtenerResultado(){
		  if(aux!=0){
		  num1=aux;
		  }
		
            num1 = parseFloat(num1);
            switch (opera){
                case 1:
                    num1 += num2;
                break;
                case 2:
                    num1 = num1 - num2;
                break;
                case 3:
                    num1 *= num2;
                break;
                case 4:
                    num1 = num1 / num2;
                break;
                case 5:
                    num1 = Math.pow(num2, num1);
                break;
				case 6:
                    num1 = Math.sqrt(num1);
                break;
            }
			/*
			var auxi = num1.toString();
			
			 if(auxi.length>8){
			 num1 = auxi.substring(0, 8);
			 }
*/			
			num1=truncarNumero(num1);
			
            refrescar();
			
            num2 = parseFloat(num1);
             num1 = 0;
			 aux=0;
        }	
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
      botonesPagina[i].onmouseleave = this.eventoRetornarColorBotones;
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
