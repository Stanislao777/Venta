var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

//var Venta = require ('../venta.js');
import Venta from '../venta.js';


describe('TotalProductos', function() {

    it('Venta sin productos deberia ser 0', function() {
        let thisVenta = new Venta();
        expect(thisVenta.total()).equal(0);
    });



});
