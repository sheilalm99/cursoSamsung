"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.Calle = calle;
        this.Numero = numero;
        this.Piso = piso;
        this.Letra = letra;
        this.CodigoPostal = codigoPostal;
        this.Poblacion = poblacion;
        this.Provincia = provincia;
    }
    get calle() {
        return this.Calle;
    }
    get numero() {
        return this.Numero;
    }
    get piso() {
        return this.Piso;
    }
    get letra() {
        return this.Letra;
    }
    get codigoPosal() {
        return this.CodigoPostal;
    }
    get poblacion() {
        return this.Poblacion;
    }
    get provincia() {
        return this.Provincia;
    }
    set calle(calle) {
        this.Calle = calle;
    }
    set numero(numero) {
        this.Numero = numero;
    }
    set piso(piso) {
        this.Piso = piso;
    }
    set letra(letra) {
        this.Letra = letra;
    }
    set codigoPostal(codigoPostal) {
        this.CodigoPostal = codigoPostal;
    }
    set poblacion(poblacion) {
        this.Poblacion = poblacion;
    }
    set provincia(provincia) {
        this.Provincia = provincia;
    }
}
exports.Direccion = Direccion;
//# sourceMappingURL=direccion.js.map