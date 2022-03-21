"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.Nombre = nombre;
        this.Apellidos = apellidos;
        this.Edad = edad;
        this.Dni = dni;
        this.Cumpleaños = cumpleaños;
        this.ColorFavorito = colorFavorito;
        this.Sexo = sexo;
        this.Direcciones = direcciones;
        this.Mails = mails;
        this.Telefonos = telefonos;
        this.Notas = notas;
    }
    get nombre() {
        return this.Nombre;
    }
    get apellidos() {
        return this.Apellidos;
    }
    get edad() {
        return this.Edad;
    }
    get dni() {
        return this.Dni;
    }
    get cumpleanos() {
        return this.Cumpleaños;
    }
    get colorFavorito() {
        return this.ColorFavorito;
    }
    get sexo() {
        return this.Sexo;
    }
    get direcciones() {
        return this.Direcciones;
    }
    get mails() {
        return this.Mails;
    }
    get telefonos() {
        return this.Telefonos;
    }
    get notas() {
        return this.Notas;
    }
    set nombre(nombre) {
        this.Nombre = nombre;
    }
    set apellidos(apellidos) {
        this.Apellidos = apellidos;
    }
    set edad(edad) {
        this.Edad = edad;
    }
    set dni(dni) {
        this.Dni = dni;
    }
    set cumpleanos(cumpleaños) {
        this.Cumpleaños = cumpleaños;
    }
    set colorFavorito(colorFavorito) {
        this.ColorFavorito = colorFavorito;
    }
    set sexo(sexo) {
        this.Sexo = sexo;
    }
    set direcciones(direcciones) {
        this.Direcciones = direcciones;
    }
    set mails(mails) {
        this.Mails = mails;
    }
    set telefonos(telefonos) {
        this.Telefonos = telefonos;
    }
    set notas(notas) {
        this.Notas = notas;
    }
    agregarNuevaDireccion(direccion) {
        this.Direcciones.push(direccion);
    }
    agregarNuevoTelefono(telefono) {
        this.Telefonos.push(telefono);
    }
    agregarNuevoMail(mail) {
        this.Mails.push(mail);
    }
}
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map