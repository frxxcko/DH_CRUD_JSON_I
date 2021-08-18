function Producto(
  id,
  tipoProducto,
  marca,
  precio,
  disponibilidad,
  tienda,
  envioGratis,
  stock
) {
  this.Id = id;
  this.Producto = tipoProducto;
  this.Marca = marca;
  this.Precio = precio;
  this.Disponible = disponibilidad;
  this.Tienda = tienda;
  this.EnvioGratis = envioGratis;
  this.Stock = stock;
}

module.exports = Producto;
