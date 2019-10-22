var productos = new Array();
function crearProducto (nom, cod, img, precio, stock){
    return {nom, cod, img, precio, stock}
}

var form = document.getElementById('cargaProd');
var nom;
var cod;
var img;
var precio;
var stock;

function logSubmit(event) {
    event.preventDefault();
    /* log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`; */
    console.log(event);
    nom = document.getElementById('nom').value;
    cod = document.getElementById('cod').value;
    img = document.getElementById('img').value;
    precio = document.getElementById('precio').value;
    stock = document.getElementById('stock').value;
    var producto = crearProducto(nom, cod, img, precio, stock);
    console.log(producto);
}



form.addEventListener('submit', logSubmit);