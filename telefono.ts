export class Telefono {
  private Tipo: string;
  private Numero: number;

  constructor(tipo: string, numero: number ) {
    this.Tipo = tipo;
    this.Numero = numero;
  }

  get numero() {
    return this.Numero;
  }

  get tipo() {
    return this.Tipo;
  }

  set numero(numero: number) {
    this.Numero = numero;
  }

  set tipo(tipo: string) {
    this.Tipo = tipo;
  }
}