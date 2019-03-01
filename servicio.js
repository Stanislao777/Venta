class Servicio{
    constructor(nombre, horas){
        this.nombre = nombre;
        this.horas = horas;
    }
     cuantoPor(cantidad){
        return this.horas * cantidad * 1.5;
     }
}

module.exports = Servicio;