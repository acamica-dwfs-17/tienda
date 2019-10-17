var listaProductos = []



var carrito = {
    items: [],
    existeItem: function(codigo) {
        var existe = false
        this.items.forEach(element => {
            if(element.codigo == codigo)
                existe = true;
        });
        return existe;
    },
    agregarItem: function(codigo, cantidad, precioUnitario) {
        if(!this.existeItem(codigo)) {
            this.items.push({codigo, cantidad, precioUnitario})
        } else {
            for (let index = 0; index < this.items.length; index++) {
                if(this.items[index].codigo==codigo){
                    this.items[index].cantidad+=cantidad
                } 
                
            }
        }
    },
    obtenerTotal: function() {
        var suma = 0
        this.items.forEach(element => {
            suma+=element.precioUnitario*element.cantidad
        });
        return suma
    },
    obtenerCantTotal: function() {
        var suma = 0
        this.items.forEach(element => {
            suma+=element.cantidad
        });
        return suma
    }
    
}

function crearProducto(codigo, nombre, url, stock, precio) {
    return {
        codigo,
        nombre,
        imagen: url,
        stock,
        precio
    }
}


var prod1 = crearProducto('1', 'Remera', '', 5, 950)
var prod2 = crearProducto('2543', 'Pantalon', '', 3, 2541)
var prod3 = crearProducto('454', 'Sweater', '', 10, 1129.99)
var prod4 = crearProducto('66LSv', 'Zapatilla', '', 1, 6756.95)
var prod5 = crearProducto('llL528', 'TV 21 pantalla plana', '', 95, 1275.33)
var prod6 = crearProducto('1265', 'Bicicleta cheta', '', 8425, 23686)
var prod7 = crearProducto('Lk5487', 'Licuadora Recco', '', 2, 8750.25)
var prod8 = crearProducto('pS5987', 'Joystick PS3', '', 3, 456.25)


listaProductos.push(prod1)
listaProductos.push(prod2)
listaProductos.push(prod3)
listaProductos.push(prod4)
listaProductos.push(prod5)
listaProductos.push(prod6)
listaProductos.push(prod7)
listaProductos.push(prod8)

function agregarACarro(e) {
    let codigo = e.target.getAttribute('data-codigo')
    console.log(codigo)
    var prod
    listaProductos.forEach(element => {
        if(element.codigo == codigo) {
            prod = element
        }
    });
    if(prod!=undefined) {
        var cant = parseInt(prompt(`Ingresa la cantidad de ${prod.nombre} a comprar`))
        carrito.agregarItem(prod.codigo, cant, prod.precio)

        console.log(carrito.obtenerCantTotal(), carrito.obtenerTotal())

        document.getElementById('cant').innerHTML  = `${carrito.obtenerCantTotal()}`
        document.getElementById('precio').innerHTML = `$ ${carrito.obtenerTotal()}`
    }
}

function cargarProductos(e) {
    let mainElement = document.getElementsByTagName('main')[0]

    for (const key in listaProductos) {
            const element = listaProductos[key];
    }

    for (let index = 0; index < listaProductos.length; index++) {
        const element = listaProductos[index];
        
    }
    listaProductos.forEach(function(element) {
        let article = document.createElement('article')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')
        let label = document.createElement('label')
        let button = document.createElement('button')

        img.src = element.imagen
        h3.innerHTML = element.nombre
        label.innerHTML = `$ ${element.precio}`
        

        article.appendChild(img)
        article.appendChild(h3)
        article.appendChild(label)
        if(element.stock>=3) {
            button.innerHTML = 'Comprar'
            button.setAttribute('data-codigo', element.codigo)
            button.addEventListener('click', agregarACarro)
            article.appendChild(button)
        }
        

        mainElement.appendChild(article)
    });
}

window.addEventListener('load', cargarProductos)