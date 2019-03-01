

class Venta {
    constructor(){
        this.items = [];
    }
    total() {
        let result = 0;
        this.items.forEach(function (item) {
                result += item[0].cuantoPor(item[1]);
        });
        return result;
    }

    anadir(articulo, cantidad){
        this.items.push([articulo,cantidad]);
    }
}

module.exports = Venta;
