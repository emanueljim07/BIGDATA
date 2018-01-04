
/*------------------- Ejercicio Lección 2 ----------------------------------------*/

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


function mostrarContenido(elemento){
  alert("hola");
  for (var i = 0; i < document.querySelectorAll("[class^='item-']").length; i++) {
    document.querySelectorAll("[class^='item-']")[i].style.width = "4%";
    document.querySelectorAll("[class^='item-']")[i].style.background = "#4d62d0";
  }
  for (var i = 0; i < document.querySelectorAll("[class^='item-'] *").length; i++) {
    document.querySelectorAll("[class^='item-'] *")[i].style.display = "none";
  }
  elemento.style.width = "96%";
  elemento.style.background = "#fff";
  for (var i = 0; i < elemento.children.length; i++) {
    elemento.children[i].style.display = "block";
  }
}
/*
function reducirTamañoBotonAccion(elemento){
  elemento.style.width = "18%";
}
function aumentarTamañoBotonAccion(elemento){
  elemento.style.width = "20%";
}*/
/*
function reducirTamañoLetra(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "small";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "small";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "small";
}*/
/*
function aumentarTamañoLetra{
alert("hola");
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "xx-large";
}*/

function displayNumber(number){
//alert('hola');
  /*document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "xx-large";
*/
//alert('hola'+number);
  document.getElementById('display').innerHTML =number; 
}

/*-------------------------------------------------------------------------------*/



/*------------------- Ejercicio Lección 3 ----------------------------------------*/
function activarVolumen(){
  document.getElementById('speaker-radio').checked = false;
  document.querySelector('.audio img').setAttribute("src", "img/speaker.png");
}

function desactivarVolumen(){
  document.getElementById('speaker-radio').checked = true;
  document.querySelector('.audio img').setAttribute("src", "img/mute.png");
}

function saludoInicial(){
  var nombreUsuario = document.getElementsByName('nombre')[0].value;
  var nuevoSaludo = document.createElement('H2');
  var contenidoSaludo = document.createTextNode("Bienvenido "+nombreUsuario);
  nuevoSaludo.appendChild(contenidoSaludo);
  document.getElementsByClassName('container-saludo')[0].appendChild(nuevoSaludo);
}

function addContenido(element){
  var nuevoTexto = document.createElement('P');
  var contenidoTexto = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  nuevoTexto.appendChild(contenidoTexto);
  element.appendChild(nuevoTexto);
}

function modificarTitulo(element, texto){
  element.innerHTML=texto;
}


/*-------------------------------------------------------------------------------*/



/*------------------- Ejercicio Lección 4 ----------------------------------------*/

var Eventos = {
  init: function(){
  
   
   //alert("dasdas");
    document.getElementById('display').innerHTML ='9'; 
    document.onkeypress = this.eventoSonido;
    this.asignarEventosBotones('tecla');
    //this.asignarEventosBotones('boton-next');
    this.asignarEventoMostrar();
       document.getElementById('1').onclick = displayNumber ("1");
	   document.getElementById('2').onclick = displayNumber ('2');
	   document.getElementById('3').onclick = displayNumber ('3');
	   document.getElementById('4').onclick = displayNumber ('4');
	   document.getElementById('5').onclick = displayNumber ('5');
	   document.getElementById('6').onclick = displayNumber ('6');
	   document.getElementById('7').onclick =displayNumber ('7');
	   document.getElementById('8').onclick = displayNumber ('8');
	   document.getElementById('9').onclick = displayNumber ('9');
	   //document.getElementById('0').onclick = displayNumber ('0');
	   
    //document.getElementById('decrease-font').onclick = reducirTamañoLetra;
   
  },
  asignarEventosBotones: function(selector){
    var botonesPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onmouseover = this.eventoColorBotones;
      botonesPagina[i].onmouseleave = this.eventoRetornarColorBotones;
    }
  },
  eventoColorBotones: function(event){
    cambiarColorBotonesAccion(event.target);
  },
  eventoRetornarColorBotones: function(event){
    retornarColorBotonesAccion(event.target);
  },
  eventoMostrarContenido: function(event){
    mostrarContenido(event.target);
  },
  asignarEventoMostrar: function(){
    var bloques = document.querySelectorAll("[id^='item-']");
    for (var i = 0; i < bloques.length; i++) {
      bloques[i].onclick = this.eventoMostrarContenido;
      bloques[i].ondblclick = this.eventoAddTexto;
    }
  },
  eventoSonido: function(event){
    if (event.which==48) {
      desactivarVolumen();
    }else if (event.which==57) {
      activarVolumen();
    }
  },

  eventoAddTexto: function(event){
    addContenido(event.target);
  }

}

Eventos.init();
