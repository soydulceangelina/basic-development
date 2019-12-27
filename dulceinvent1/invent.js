//var usuario_nacimiento = prompt("Tu año de nacimiento");
//var usuario_futuro = prompt("Cuantos años tendre en el: ");

//console.log(n.value, f.value);

var result = document.getElementById('resultado')
var n = document.getElementById("nacimiento");
var f = document.getElementById('futuro');

function mostrar(){
  var nac = parseInt(n.value);
  var fut = parseInt(f.value);
  var edadFinal = fut - nac;

  result.innerHTML = "Tu edad sera: " + edadFinal;
}

var b = document.getElementById("botonEnviar");
b.addEventListener("click", mostrar);
