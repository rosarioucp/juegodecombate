import { Unidad } from "./Unidad.js";
import { Arma } from "../armas/Arma.js";
import { Escudo } from "./Escudo.js";

export class Soldado extends Unidad {
  constructor(arma: Arma, escudo: Escudo) {
    super(1, arma, escudo); // Vida 1
  }
}