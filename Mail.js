"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    // Constructor de la clase Mail
    constructor(tipo, direccion) {
        this.Tipo = tipo;
        this.Direccion = direccion;
    }
    // Getters y setters de la clase Mail
    getTipo() {
        return this.Tipo;
    }
    setTipo(tipo) {
        this.Tipo = tipo;
    }
    getDireccion() {
        return this.Direccion;
    }
    setDireccion(direccion) {
        this.Direccion = direccion;
    }
    // Método toString de la clase Mail
    toString() {
        return "Tipo: " + this.Tipo + " Dirección " + this.Direccion;
    }
}
exports.Mail = Mail;
