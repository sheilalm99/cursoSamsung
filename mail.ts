
export class Mail {
    Tipo: string;
    Direccion: string;
 

  constructor(tipo:string, direccion:string ) {
    this.Tipo = tipo;
    this.Direccion = direccion;
  }

  get direccion(){
    return this.Direccion;
  }
  get tipo(){
    return this.Tipo;
  }

  set direccion(direccion: string){
    this.Direccion = direccion;
  }
  set tipo(tipo: string) {
    this.Tipo = tipo;
  }

  
}
