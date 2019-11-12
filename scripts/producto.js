const productos = {
  listado: [],
  agregarItem: function(prod) {
    this.listado.push(prod);
  },
  quitarItem: function(cod) {
    let newArr = this.listado.filter(c => c.codigo !== cod);
    this.listado = newArr;
    console.log(this.listado);
  }
};
class Producto {
  constructor(codigo, nombre, categoria, stock, precio, descripcion) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.categoria = categoria;
    this.stock = stock;
    this.precio = precio;
    this.descripcion = descripcion;
  }
}
//EJEMPLOS
// productos.agregarItem( new Producto("1234","Zapatillas1","Calzado",100,4500,"Altas llantas") );
// productos.agregarItem( new Producto("1235","Zapatillas2","Calzado",100,4500,"Altas llantas") );
// productos.agregarItem( new Producto("1236","Zapatillas","Calzado",100,4500,"Altas llantas") );
// productos.agregarItem( new Producto("1237","Zapatillas","Calzado",100,4500,"Altas llantas") );
// productos.agregarItem( new Producto("1238","Zapatillas","Calzado",100,4500,"Altas llantas") );
// productos.agregarItem( new Producto("1239","Zapatillas","Calzado",100,4500,"Altas llantas") );
