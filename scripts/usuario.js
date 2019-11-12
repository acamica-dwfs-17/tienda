//Código de Albano, Valeria y Ramiro:
// ----------------------------------
//Variable que cuenta las instancias existentes de la clase usuario y con ello designa automáticamente un id numérico
var contadorUsuarios = 0

//Clase para registrar usuarios nuevos
class usuario {
    constructor(id, nombreUsuario, direcciones) {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.saldo = 0;
        this.direcciones = direcciones;
        this.estado = 'Activo';
        this.historialCompras = [];
        this.carrito = [];
    }

    //Método que permite cambiar/agregar saldo en los datos del usuario
    agregarSaldo() {
        //Asumimos la existencia de un input en el front de donde obtener el número objetivo
        let inputSaldo = document.getElementById('inputSaldo').value;

        if (inputSaldo > 0 && inputSaldo < 100000) {
        this.saldo += inputSaldo;
        } else {
            alert('Ingrese un número válido (mayor a 0 y menor a 100.000).')
        }
    }

    actualizarDatos() {
        
    }   
}

//Clase para agregar direcciones como propiedad de un usuario
class direccion {
    constructor(calle, altura, piso, departamento, localidad, codigoPostal) {
        this.calle = calle;
        this.altura = altura;
        this.piso = piso;
        this.departamento = departamento;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
    }
}

//Función para aumentar el contador de usuarios en 1 (se aplica en el new usuario)
var aumentarContador = function() {
    contadorUsuarios++
}

//Función que añade una dirección a un array usando DOM (el array es luego agregado a una propiedad del usuario como parámetro en new usuario)
var agregarDirecciones = function() {
    let inputCalle = document.getElementsByClassName('inputCalle');
    let inputAltura = document.getElementsByClassName('inputAltura');
    let inputPiso = document.getElementsByClassName('inputPiso');
    let inputDepartamento = document.getElementsByClassName('inputDepartamento');
    let inputLocalidad = document.getElementsByClassName('inputLocalidad');
    let inputCodigoPostal = document.getElementsByClassName('inputCodigoPostal');

    var dirArray = []

    for(let i = 0; i < inputCalle.length; i++){
        let dir = new direccion(inputCalle[i].value, inputAltura[i].value, inputPiso[i].value, inputDepartamento[i].value, inputLocalidad[i].value, inputCodigoPostal[i].value)

        dirArray.push(dir)
    }

    return dirArray
}

//Ejemplo
var pedrito = new usuario(aumentarContador, inputNombre, agregarDirecciones);
// ----------------------------------
//fdsfdsfds