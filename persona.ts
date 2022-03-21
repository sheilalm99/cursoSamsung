import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

export class Persona {
    Nombre: string;
    Apellidos: string;
    Edad: number;
    Dni: string;
    Cumpleaños: Date;
    ColorFavorito: string;
    Sexo: string;
    Direcciones: Array<Direccion>;
    Mails: Array<Mail>;
    Telefonos: Array<Telefono>;
    Notas: string;

  constructor(nombre:string, apellidos: string, edad:number, dni: string, cumpleaños:Date, colorFavorito:string, sexo: string, direcciones:Array<Direccion>, mails:Array<Mail>, telefonos:Array<Telefono>, notas:string ) {
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
  
    set nombre(nombre: string) {
      this.Nombre = nombre;
    }
  
    set apellidos(apellidos: string) {
      this.Apellidos = apellidos;
    }
  
    set edad(edad: number) {
      this.Edad = edad;
    }
  
    set dni(dni: string) {
      this.Dni = dni;
    }
  
    set cumpleanos(cumpleaños: Date) {
      this.Cumpleaños = cumpleaños;
    }
  
    set colorFavorito(colorFavorito: string) {
      this.ColorFavorito = colorFavorito;
    }
  
    set sexo(sexo: string) {
      this.Sexo = sexo;
    }
  
    set direcciones(direcciones: Array<Direccion>) {
      this.Direcciones = direcciones;
    }
  
    set mails(mails: Array<Mail>) {
      this.Mails = mails;
    }
  
    set telefonos(telefonos: Array<Telefono>) {
      this.Telefonos = telefonos;
    }
  
    set notas(notas: string) {
      this.Notas = notas;
    }
  
    agregarNuevaDireccion(direccion:Direccion) {
      this.Direcciones.push(direccion)
    }
  
    agregarNuevoTelefono(telefono:Telefono) {
      this.Telefonos.push(telefono)
    }
  
    agregarNuevoMail(mail:Mail) {
      this.Mails.push(mail)
    }
  }
  
  