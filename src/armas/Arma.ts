export abstract class Arma {
  constructor(protected municiones: number, protected dañoBase: number) {}

  public tieneMuniciones(): boolean {
    return this.municiones > 0;
  }

  // Método abstracto: obliga a las hijas a implementarlo
  public abstract usar(): number;
}