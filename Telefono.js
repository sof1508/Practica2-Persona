"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    // Constructor de la clase Telefono
    constructor(tipo, numero) {
        this.Tipo = tipo;
        this.Numero = numero;
    }
    // Getters y setters de la clase Telefono
    getTipo() {
        return this.Tipo;
    }
    setTipo(tipo) {
        this.Tipo = tipo;
    }
    getNumero() {
        return this.Numero;
    }
    setNumero(numero) {
        this.Numero = numero;
    }
    // Método toString de la clase Telefono
    toString() {
        return "Tipo: " + this.Tipo + " nº: " + this.Numero;
    }
}
exports.Telefono = Telefono;
