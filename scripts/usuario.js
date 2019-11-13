//Clase para registrar usuarios nuevos
class Usuario {
    constructor(id, nombreUsuario, direcciones=[]) {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.saldo = 0;
        this.direcciones = direcciones;
        this.estado = 'Activo';
        this.historialCompras = [];
        this.carrito = [];
    }

    //Método que permite cambiar/agregar saldo en los datos del usuario
    agregarSaldo(nuevoSaldo) {
        if (nuevoSaldo > 0 && nuevoSaldo < 100000) {
            this.saldo += nuevoSaldo;
        } else {
            throw new Error('Ingrese un número válido (mayor a 0 y menor a 100.000).')
        }
    }

    actualizarDatos() {
        //TODO: Permite cambiar algunas propiedades del objeto
    }

    agregarDireccion(direccion) {
        this.direcciones.push(direccion)
    }
}
