import { Unidad} from "./Unidad.js";
import { Arma } from "../armas/Arma.js";
import { Escudo } from "./Escudo.js";

export class Buque extends Unidad {
  constructor(arma: Arma, escudo: Escudo) {
    super(3, arma, escudo); // Vida 3
  }
}