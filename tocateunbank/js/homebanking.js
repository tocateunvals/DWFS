// Declaración de variables

var nombreUsuario = 'Latrice Bebéh';
var saldoCuenta = 3800;
var limiteExtraccion = 1000; 
var cuentaAmiga;
var extraccion;
var cambio;

// Funciones auxiliares

function sumarDinero(cash) {
    saldoCuenta = saldoCuenta + cash;
}

function sacarDinero(cash) {
    saldoCuenta = saldoCuenta - cash;
}


// Cambiar el límite de extracción

function cambiarLimiteDeExtraccion(limite) {

    var stringLimite = prompt('Ingresa tu nuevo límite de extracción:');
    var limite = parseInt(stringLimite);
    limiteExtraccion = limite;

    if(!isNaN(limite)){ 
        limiteExtraccion = limite;
        alert('Tu nuevo límite de extracción es: $' + limiteExtraccion);
        actualizarLimiteEnPantalla();
      }else{
        alert('Por favor, ingresá un valor válido.');
      }

}

// Extraer dinero

function extraerDinero(extraccion) {

    var stringExtraccion = prompt('Ingresa el valor a extraer:');
    var extraccion = parseInt(stringExtraccion);
    var saldoAnterior = saldoCuenta;
    var cambio = extraccion % 100;

    if (extraccion <= saldoCuenta && extraccion <= limiteExtraccion && cambio <= 0) {
        sacarDinero(extraccion);
        alert('Tu saldo anterior: $' +   saldoAnterior + '\n' + 'Tu extracción: $' + extraccion + '\n' + 'Tu saldo actual: $' + saldoCuenta );
        actualizarSaldoEnPantalla();
    } else if (extraccion > limiteExtraccion){
        alert('No es posible hacer esa operación.' + '\n' + 'Tu límite de extracción es: $' +   limiteExtraccion );
    } else if (extraccion > saldoCuenta && extraccion <= limiteExtraccion) {
        alert('Saldo insuficiente! ');
    } else if (cambio >= 0) {
        alert('Solo puedes extraer billetes de $100!');
    } else if (isNaN(extraccion)) {
        alert('Por favor, ingresá un valor válido.');
    } 

}

// Hacer un depósito

function depositarDinero(deposito) {

    var stringDeposito = prompt('Ingresa el valor a depositar:');
    var deposito = parseInt(stringDeposito);
    var saldoAnterior = saldoCuenta;
    sumarDinero(deposito);
    if (saldoCuenta = saldoAnterior + deposito) {
        alert('Tu saldo anterior: $' +   saldoAnterior + '\n' + 'Tu deposito: $' + deposito + '\n' + 'Tu saldo actual: $' + saldoCuenta );
        actualizarSaldoEnPantalla();
    } else if (isNaN(deposito)) {
        alert('Por favor, ingresá un valor válido.');
    } 

}


// Pagar servicios

function pagarServicio(servicio) {

    var tarifaAgua = 350;
    var tarifaTelefono = 425;
    var tarifaLuz = 210;
    var tarifaInternet = 570;

    var servicio = prompt('Ingresa el número que corresponde al servicio que quieres pagar:' + '\n' + '1 · Agua' + '\n' + '2 · Teléfono' + '\n' + '3 · Luz' + '\n' + '4 · Internet')
    var saldoAnterior = saldoCuenta;

    switch(servicio) {

        case '1':  sacarDinero(tarifaAgua);
        if (saldoCuenta > servicio) {
            sacarDinero(tarifaAgua);
            alert('Has pagado pagado el servicio de Agua' + '\n' + 'Tu saldo anterior: $' + saldoAnterior + '\n' + 'Tu pago: $' + tarifaAgua + '\n' + 'Tu saldo actual: $' + saldoCuenta )
            actualizarSaldoEnPantalla();
        } else {
            alert('No tienes suficientes fondos para hacer el pago.');
        }
        break;

        case '2': sacarDinero(tarifaTelefono);
        if (saldoCuenta > servicio) {
            sacarDinero(tarifaTelefono);
            alert('Has pagado pagado el servicio de Teléfono' + '\n' + 'Tu saldo anterior: $' + saldoAnterior + '\n' + 'Tu pago: $' + tarifaTelefono + '\n' + 'Tu saldo actual: $' + saldoCuenta )
            actualizarSaldoEnPantalla();
        } else {
            alert('No tienes suficientes fondos para hacer el pago.');
        }
        break;

        case '3': sacarDinero(tarifaLuz);
        if (saldoCuenta > servicio) {
            sacarDinero(tarifaLuz);
            alert('Has pagado pagado el servicio de Luz' + '\n' + 'Tu saldo anterior: $' + saldoAnterior + '\n' + 'Tu pago: $' + tarifaLuz + '\n' + 'Tu saldo actual: $' + saldoCuenta )
            actualizarSaldoEnPantalla();
        } else {
            alert('No tienes suficientes fondos para hacer el pago.');
        }

        break;
        case '4': sacarDinero(tarifaInternet);
        if (saldoCuenta > servicio) {
            sacarDinero(tarifaInternet);
            alert('Has pagado pagado el servicio de Internet' + '\n' + 'Tu saldo anterior: $' + saldoAnterior + '\n' + 'Tu pago: $' + tarifaInternet + '\n' + 'Tu saldo actual: $' + saldoCuenta )
            actualizarSaldoEnPantalla();
        } else {
            alert('No tienes suficientes fondos para hacer el pago.');
        }
        break;

        default: alert("Por favor, seleccioná un servicio válido.");

    }

}

// Hacer una transferencia

function validarCuenta(cuentaAmiga) {

    var cuenta1 = 1234567;
    var cuenta2 = 7654321;

    var cuentaIngresada = prompt('Ingresa el número de cuenta a la que quieres transferir');

    if (cuentaIngresada == cuenta1 || cuentaIngresada == cuenta2) {
        cuentaAmiga = cuentaIngresada;

        return cuentaAmiga;
    } else {
        alert('Esa cuenta no está en tu agenda.')
    }

}

function transferirDinero() {

    var stringTransferencia = prompt('Ingresa el valor a transferir:');
    var transferencia = parseInt(stringTransferencia);
    var saldoAnterior = saldoCuenta;

    if (transferencia > saldoCuenta) {
        alert('Saldo insuficiente! ');
    }   else if (transferencia <= saldoCuenta) {
        var cuentaAmiga = validarCuenta(cuentaAmiga);
        sacarDinero(transferencia);
        alert('Se han transferido: $' +   transferencia + '\n' + 'a tu cuenta amiga: ' + cuentaAmiga );
        actualizarSaldoEnPantalla();
    } else if (isNaN(transferencia)) {
        alert('Por favor, ingresá un valor válido.');
    } 

}

// Iniciar sesión

function iniciarSesion() {

    var clave = 2309;
    var claveIngresada = prompt('Ingresa la clave 2309 ;) para empezar a operar:');

    if (claveIngresada == clave) {
        alert('Bienvenide Latrice, ya puedes empezar a operar.');
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    } else {
        alert('Clave incorrecta, tu dinero ha sido retenido por seguridad');
        sacarDinero(saldoCuenta);
        actualizarSaldoEnPantalla();
    }

}

// Al iniciar el Homebanking

window.onload = function() {
    iniciarSesion();
}

//Funciones que actualizan el valor de las variables en el HTML

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenide " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
