import { describe, it, expect } from 'vitest';
import { Soldado } from '../src/modelos/Soldado.js';
import { Pistola } from '../src/armas/Pistola.js';
import { Escudo } from '../src/modelos/Escudo.js';

describe('Soldado', () => {
  it('debe iniciar con vida 1 y morir al recibir daño limpio', () => {
    const soldado = new Soldado(new Pistola(), new Escudo(0));
    expect(soldado.estaVivo()).toBe(true);
    
    soldado.recibirDaño(10);
    expect(soldado.estaVivo()).toBe(false);
  });
});