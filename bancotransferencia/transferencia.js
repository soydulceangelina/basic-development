var numCliente = 12345;
var numDestino = 6789;
var nuevoSaldo;
var bancoCliente = "BancoCOL";
var bDesplegar = document.getElementById('boton_realizarTransf');
var formulario = document.getElementById("divFormulario");
var resultTransfer = document.getElementById('resultado');
var cajaCliente = document.getElementById('txtCliente');
var cajaDestino = document.getElementById('txtDestino');
var cajaValor = document.getElementById('txtValor');
var cajaBanco = document.getElementById('txtBanco');
var bOk = document.getElementById('botonOk');
var saldoDisponible = 1000110;




bDesplegar.addEventListener("click", desplegar);

function desplegar(){
  formulario.style.display = "inline";
  cajaCliente.focus();
}


function transferir(){
  var cli = parseInt(cajaCliente.value);
  var des = parseInt(cajaDestino.value);
  var val = parseInt(cajaValor.value);
  var bank = (cajaBanco.value);

  if (numCliente == cli && numDestino == des && val < saldoDisponible) {
    if(bank == bancoCliente){
    var nuevoSaldo = saldoDisponible - val;
    resultTransfer.innerHTML = "Trasferencia realizada <br/> Y tu nuevo saldo es: " + nuevoSaldo;
    }
    else if (bank != bancoCliente) {
    var nuevoSaldo = saldoDisponible - val - 100;
    resultTransfer.innerHTML = "Trasferencia realizada <br/> Y tu nuevo saldo con el cobro de $ 100 por tranferencia a otros bancos es: " + nuevoSaldo;
    }
  }
  else {
    if (numCliente != cli && numDestino != des) {
      resultTransfer.innerHTML = "Datos como: Cuenta Cliente y Cuenta Destino incorrectos";
    }
    else{
      resultTransfer.innerHTML = "Saldo insuficiente";
    }
  }
}


bOk.addEventListener("click", dar);

function dar(){
  transferir();
}
