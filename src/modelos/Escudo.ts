// src/modelos/Escudo.ts
export class Escudo {
  constructor(private reduccion: number) {} // Ej: 0.5 para reducir la mitad, o el valor que prefieras

  public calcularDaño(daño: number): number {
    return daño * (1 - this.reduccion);
  }
}