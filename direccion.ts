export class Direccion {
    Calle: string;
    Numero: number;
    Piso: number | boolean;
    Letra: string | boolean;
    CodigoPostal: number;
    Poblacion: string;
    Provincia: string;

  constructor(calle:string, numero: number , piso: number | boolean, letra:string | boolean, codigoPostal: number, poblacion:string, provincia:string, ) {
    this.Calle = calle;
    this.Numero = numero;
    this.Piso = piso;
    this.Letra = letra;
    this.CodigoPostal = codigoPostal;
    this.Poblacion = poblacion;
    this.Provincia = provincia;
  }

  get calle(){
    return this.Calle;
  }

  get numero(){
    return this.Numero;
  }

  get piso(){
    return this.Piso;
  }

  get letra(){
    return this.Letra;
  }
  
  get codigoPosal(){
    return this.CodigoPostal;
  }

  get poblacion(){
    return this.Poblacion;
  }

  get provincia(){
    return this.Provincia;
  }
 
  set calle(calle: string) {
    this.Calle = calle;
  }

  set numero(numero: number) {
    this.Numero = numero;
  }

  set piso(piso: number | boolean ) {
    this.Piso = piso;
  }

  set letra(letra: string | boolean) {
    this.Letra = letra;
  }

  set codigoPostal(codigoPostal: number) {
    this.CodigoPostal = codigoPostal;
  }

  set poblacion(poblacion: string) {
    this.Poblacion = poblacion;
  }

  set provincia(provincia: string) {
    this.Provincia = provincia;
  }
}