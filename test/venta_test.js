var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Venta from '../venta.js';
import Articulo from '../articulo';

describe('TotalProductos', function() {

    it('Venta sin productos deberia ser 0', function() {
        let thisVenta = new Venta();
        expect(thisVenta.getTotal()).equal(0);
    });

    it('total de venta con un producto deberia devolver al menos una venta', function () {
        let venta= new Venta();
        let pantalla = new Articulo("Pantalla SMS 17'", 100);
        venta.add(pantalla, 1);
        expect(pantalla.total()).equal(100);
    });


});
