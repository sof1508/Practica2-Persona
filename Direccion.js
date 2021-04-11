"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    // Constructor de la clase Direccion
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.Calle = calle;
        this.Numero = numero;
        this.Piso = piso;
        this.Letra = letra;
        this.CodigoPostal = codigoPostal;
        this.Poblacion = poblacion;
        this.Provincia = provincia;
    }
    // Getters y setters de la clase Direccion
    getCalle() {
        return this.Calle;
    }
    setCalle(calle) {
        this.Calle = calle;
    }
    getNumero() {
        return this.Numero;
    }
    setNumero(numero) {
        this.Numero = numero;
    }
    getPiso() {
        return this.Piso;
    }
    setPiso(piso) {
        this.Numero = piso;
    }
    getLetra() {
        return this.Letra;
    }
    setLetra(letra) {
        this.Letra = letra;
    }
    getCodigoPostal() {
        return this.CodigoPostal;
    }
    setCodigoPostal(codigoPostal) {
        this.CodigoPostal = codigoPostal;
    }
    getPoblacion() {
        return this.Poblacion;
    }
    setPoblacion(poblacion) {
        this.Poblacion = poblacion;
    }
    getProvincia() {
        return this.Provincia;
    }
    setProvincia(provincia) {
        this.Provincia = provincia;
    }
    // Método toString de la clase Direccion
    toString() {
        return "Calle: " + this.Calle + " nº " + this.Numero + ", " + this.Piso +
            " " + this.Letra + "\nCP: " + this.CodigoPostal + ", " + this.Poblacion + ", " + this.Provincia;
    }
}
exports.Direccion = Direccion;
