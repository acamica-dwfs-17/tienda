var productos = [];

var form = document.getElementById('cargaProd');
var nom = document.getElementById('nom');
var cod = document.getElementById('cod');
var img = document.getElementById('img');
var precio = document.getElementById('precio');
var stock = document.getElementById('stock');

function crearProducto(nom, cod, img, precio, stock) {
    return {
        nom,
        cod,
        img,
        precio,
        stock
    }
}

function logSubmit(event) {
    event.preventDefault();
    /* log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`; */
    console.log(event);
    nom = document.getElementById('nom').value;
    cod = document.getElementById('cod').value;
    /*     if (!productos.includes(cod)) {
        } */
    img = document.getElementById('img').value;
    precio = document.getElementById('precio').value;
    stock = document.getElementById('stock').value;
    var producto = crearProducto(nom, cod, img, precio, stock);
    console.log(producto);
}

function existe(codigo) {
    //*completar
}



form.addEventListener('submit', logSubmit);