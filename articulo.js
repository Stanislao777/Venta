class Articulo {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    cuantoPor(cantidad){
        return this.precio*cantidad;
    }
}

module.exports = Articulo;