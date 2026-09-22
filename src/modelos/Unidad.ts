import { Arma } from "../armas/Arma.js";
import { Escudo } from "./Escudo.js";

export abstract class Unidad {
  protected vida: number;

  constructor(vidaInicial: number, protected arma: Arma, protected escudo: Escudo) {
    this.vida = vidaInicial;
  }

  public recibirDaño(dañoBruto: number): void {
    const dañoReal = this.escudo.calcularDaño(dañoBruto);
    this.vida -= dañoReal;
  }

  public estaVivo(): boolean {
    return this.vida > 0;
  }

  public atacar(objetivo: Unidad): void {
    const daño = this.arma.usar();
    objetivo.recibirDaño(daño);
  }
}