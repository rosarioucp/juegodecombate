import { describe, it, expect } from 'vitest';
import { Pistola } from '../src/armas/Pistola.js';

describe('Pistola', () => {
  it('debe descontar municiones y devolver daño base al usar', () => {
    const pistola = new Pistola();
    const daño = pistola.usar();
    expect(daño).toBe(10);
  });
})