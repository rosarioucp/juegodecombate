import { Unidad} from "./Unidad.js";
import { Arma } from "../armas/Arma.js";
import { Escudo } from "./Escudo.js";

export class Tanque extends Unidad{
  constructor(arma: Arma, escudo: Escudo) {
    super(2, arma, escudo); // Vida 2
  }
}