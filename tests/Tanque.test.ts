import { describe, it, expect } from 'vitest';
import { Tanque } from '../src/modelos/Tanque.js';
import { Rifle } from '../src/armas/Rifle.js';
import { Escudo } from '../src/modelos/Escudo.js';

describe('Tanque', () => {
  it('debe iniciar con vida 2 y resistir un primer impacto leve', () => {
    // Creamos un tanque con un escudo sin reducción para controlar el daño exacto
    const tanque = new Tanque(new Rifle(), new Escudo(0));

    expect(tanque.estaVivo()).toBe(true);

    // Si recibe 1 de daño, su vida baja a 1, por lo que debe seguir vivo
    tanque.recibirDaño(1);
    expect(tanque.estaVivo()).toBe(true);

    // Si recibe otro golpe que agota su vida restante, muere
    tanque.recibirDaño(2);
    expect(tanque.estaVivo()).toBe(false);
  });
});