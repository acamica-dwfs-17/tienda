// ADRIAN
 var productos = [
    {
        codigo: 1234,
        nombre : "manzana",
        cantidad: 2,
        precio: 4,
        img: "salfkadfkl.jpg"
    },
    {
        codigo: 5678,
        nombre : "banana",
        cantidad: 2,
        precio: 4,
        img: "salfkadfkl.jpg"
    },
] 

var objetoActivo = {};

function buscar() {
    objetoActivo = {};
    var encontrado = false;
    var buscador = document.getElementById("codigo");
    var codigoABuscar = parseInt(buscador.value);
    for (let i = 0; i < productos.length; i++) {
        if(productos[i].codigo===codigoABuscar){
            objetoActivo = productos[i];
            encontrado = true;
            buscador.value = "Código";
            break;
        }
    }
    if(!encontrado) {
        alert("Referencia inexistente");
        objetoActivo = {};
        buscador.value = "Código";
    } else {
        mostrarObjetoActivo();
    }
}

var lupa = document.getElementById("lupa");
lupa.addEventListener("click",buscar);







// MARIANO
function mostrarObjetoActivo() {

  var cliente = document.getElementById("campoCliente");

  var section = document.getElementById('resultado');
  var div = document.createElement('div');

  //cliente
  var productoCliente = document.createElement('h6');
  productoCliente.textContent = cliente.value;
  div.appendChild(productoCliente);


  //producto
  var productoNombre = document.createElement('h3');
  productoNombre.textContent = objetoActivo.nombre;
  div.appendChild(productoNombre);

  // lo comento porque no se si van a mandar imagen de producto
  // var productoImagen = document.createElement('img');
  // productoImagen.src = objetoActivo.imagen;
  // productoImagen.style.width = '150px';
  // productoImagen.style.height = '150px';
  // div.appendChild(productoImagen);

  //codigo
  var productoCodigo = document.createElement('h5');
  productoCodigo.textContent = objetoActivo.codigo;
  div.appendChild(productoCodigo);

  //precio
  var productoPrecio = document.createElement('h4');
  productoPrecio.textContent = '$' + objetoActivo.precio;
  div.appendChild(productoPrecio);
  section.appendChild(div);

}




// RAMIRO
var valorCantidad = document.getElementById('cantidad') //Es el input donde se pone la cantidad
var botonAgregar = document.getElementById('agregar') //El botón que agregará la venta en el div derecho, en forma de nuevo div
var tablaCarrito = document.getElementById('carrito') //El div derecho que contendrá a los nuevos divs de cada entrada de venta

var entradaVenta = document.getElementsByClassName('producto') //El div contenedor para cada nueva venta
var campo1 = document.getElementsByClassName('col-info')
var campo1_1 = document.getElementsByClassName('row1')
var campo1_2 = document.getElementsByClassName('row2')
var campo2 = document.getElementsByClassName('col-precio')

var crearDiv = document.createElement('div')
var crearP = document.createElement('p')

valorCantidad.addEventListener('change', function() {
    if (valorCantidad.innerText > objetoActivo.stock) {
        botonAgregar.disabled = true;
    } else if (valorCantidad.innerText <= objetoActivo.stock) {
        botonAgregar.enabled = true;
    }
})

botonAgregar.addEventListener('click', function() {
	crearDiv.className = 'producto'
    tablaCarrito.appendChild(crearDiv)

    crearDiv.className = 'col-info'
    entradaVenta[entradaVenta.length - 2].appendChild(crearDiv)

    crearDiv.className = 'col-precio'
    entradaVenta[entradaVenta.length - 2].appendChild(crearDiv)

    crearDiv.className = 'row1'
    campo1[campo1.length - 2].appendChild(crearDiv)

    crearDiv.className = 'row2'
    campo1[campo1.length - 2].appendChild(crearDiv)

    crearP.className = 'elCodigo'
    crearP.innerText = objetoActivo.codigo
    campo1_1[campo1_1.length - 2].appendChild(crearP)

    crearP.className = 'elCliente'
    crearP.innerText = objetoActivo.cliente
    campo1_1[campo1_1.length - 2].appendChild(crearP)

    crearP.className = 'elProducto'
    crearP.innerText = objetoActivo.nombre
    campo1_2[campo1_2.length - 2].appendChild(crearP)

    crearP.className = 'laCantidad'
    crearP.innerText = valorCantidad
    campo1_2[campo1_2.length - 2].appendChild(crearP)

    crearP.className = 'precio-unitario'
    crearP.innerText = objetoActivo.precio
    campo2[campo2.length - 2].appendChild(crearP)

    crearP.className = 'precio-total'
    crearP.innerText = objetoActivo.precio * valorCantidad
    campo2[campo2.length - 2].appendChild(crearP)
})
