"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this.Tipo = tipo;
        this.Direccion = direccion;
    }
    get direccion() {
        return this.Direccion;
    }
    get tipo() {
        return this.Tipo;
    }
    set direccion(direccion) {
        this.Direccion = direccion;
    }
    set tipo(tipo) {
        this.Tipo = tipo;
    }
}
exports.Mail = Mail;
//# sourceMappingURL=mail.js.map