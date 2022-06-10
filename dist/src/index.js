"use strict";
let lasname = "Santillán";
console.log("hola", lasname);
class Factura {
    constructor(id, nombreproducto, descripcion) {
    }
    showInfo() {
        console.log(`${this.id}`);
    }
}
const emp = new Factura(1, "ruffles", "snack");
class Producto {
}
