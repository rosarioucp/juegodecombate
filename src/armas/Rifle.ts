import { Arma } from "./Arma.js";

export class Rifle extends Arma {
    constructor() {
        super(3, 20); // 3 municiones, 20 de daño base
    }

    public usar(): number {
        const dañoAplicado = this.dañoBase * (this.tieneMuniciones() ? 1 : 0);
        this.municiones--;
        return dañoAplicado;
    }
}