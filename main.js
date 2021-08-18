const Producto = require("./ProductoConstructor");
const jsonHelper = require("./jsonHelper2");
const productosDeJSON = jsonHelper.leerArchivo("productos");

const TIENDA = {
  productos: productosDeJSON,
  ultimoID: productosDeJSON.length + 1,
  listarTodos: function (array = this.productos) {
    console.table(array);
  },
  filtrarSinDisponibilidad: function () {
    const productosFiltrados = [];
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].Disponible === false) {
        productosFiltrados.push(this.productos[i]);
      }
    }
    return productosFiltrados;
  },
  filtrarSinDisponibilidad2: function () {
    return this.productos.filter((producto) => producto.Disponible === false);
  },
  montoTotalEnStock: function () {
    return this.productos
      .filter((producto) => producto.Stock > 0)
      .reduce(
        (acumulador, producto) => acumulador + producto.Precio * producto.Stock,
        0
      );
  },
  agregarStockANoDisponibles: function (restock) {
    this.productos.forEach((producto) => {
      if (!producto.Disponible) {
        producto.Disponible = true;
        producto.Stock += restock;
      }
    });
    jsonHelper.escribirArchivo("productos", this.productos);
  },
  buscarPorId: function (id) {
    const productoEncontrado = this.productos.find(
      (producto) => producto.Id === id
    );
    return productoEncontrado;
  },
  agregarProductoNuevo: function (
    id,
    tipoProducto,
    marca,
    precio,
    disponibilidad,
    tienda,
    envioGratis,
    stock
  ) {
    this.productos.push(
      new Producto(
        id,
        tipoProducto,
        marca,
        precio,
        disponibilidad,
        tienda,
        envioGratis,
        stock
      )
    );
    jsonHelper.escribirArchivo("productos", this.productos);
  },
};

// TIENDA.listarTodos(TIENDA.montoTotalEnStock());

// 1- Listar todos los productos en forma de tabla.
// 2- Filtrar todos los productos sin disponibilidad.
// 3- Monto total de productos en Stock
// 4- Agregarles 10 unidades de 'Stock' a los productos sin disponibilidad y cambiarles el estado a Disponible
// 9- Buscar producto por ID
// 5- Crear una nueva lista con todas las Zapatillas y mostrarlas por consola.
// 6- Aumentar el precio 10% a todos los productos de tipo Zapatilla (ForEach)
// 7- CyberMonday: setear la propiedad EnvioGratis a true a todos los productos que tengan EnvioGratis en false
// 8- Listar todos los productos con Precio mayor a 20000 y descontarles 40%
// 10- Buscar por productos de la tienda 'Sarkany, Palermo Soho', setearles EnvioGratis en true y aplicar una rebaja de 50%
