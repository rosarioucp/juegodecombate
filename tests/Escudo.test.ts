import { describe, it, expect } from 'vitest';
import { Escudo } from '../src/modelos/Escudo.js';

describe('Escudo', () => {
  it('debe reducir el daño recibido según el porcentaje configurado', () => {
    // Supongamos un escudo con 50% de reducción (0.5)
    const escudo = new Escudo(0.5);
    
    const dañoOriginal = 20;
    const dañoReducido = escudo.calcularDaño(dañoOriginal);

    expect(dañoReducido).toBe(10); // 20 * (1 - 0.5) = 10
  });

  it('no debe reducir el daño si la reducción es 0', () => {
    const escudo = new Escudo(0);
    const dañoReducido = escudo.calcularDaño(15);

    expect(dañoReducido).toBe(15);
  });
});