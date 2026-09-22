import { Arma } from "./Arma.js";

export class Pistola extends Arma {
    constructor() {
        super(5, 10); // 5 municiones, 10 de daño base
    }

    public usar(): number {
        // Multiplicamos el daño por 1 si tiene municiones (true) o por 0 si no tiene (false).

        const dañoAplicado = this.dañoBase * (this.tieneMuniciones() ? 1 : 0);
        
        // Restamos una munición (si ya estaba en 0, seguirá bajando, 
        // pero como la línea de arriba ya dio 0 de daño, no afectará al juego)
        this.municiones--; 

        return dañoAplicado;
    }
}