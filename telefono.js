"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this.Tipo = tipo;
        this.Numero = numero;
    }
    get numero() {
        return this.Numero;
    }
    get tipo() {
        return this.Tipo;
    }
    set numero(numero) {
        this.Numero = numero;
    }
    set tipo(tipo) {
        this.Tipo = tipo;
    }
}
exports.Telefono = Telefono;
//# sourceMappingURL=telefono.js.map