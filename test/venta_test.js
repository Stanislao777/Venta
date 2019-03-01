var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var Venta = require ('../venta.js');
//import Venta from '../venta.js';
var Articulo = require ('../articulo.js');
//import Articulo from "../articulo.js";

describe('TotalProductos', function() {

    it('Venta sin productos deberia ser 0', function() {
        let thisVenta = new Venta();
        expect(thisVenta.total()).equal(0);
    });

    it('total de venta con un articulo deberia devolver el total para ese producto', function () {
        let venta= new Venta();
        let pantalla = new Articulo("Pantalla SMS 17", 100);
        venta.anadir(pantalla, 1);
        expect(venta.total()).equal(100);
    });

});
