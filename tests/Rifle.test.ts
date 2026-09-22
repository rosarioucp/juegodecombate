import { describe, it, expect } from 'vitest';
import { Rifle } from '../src/armas/Rifle.js';

describe('Rifle', () => {
  it('debe descontar municiones y devolver daño base al usar', () => {
    const rifle = new Rifle();
    const daño = rifle.usar();
    expect(daño).toBe(20);
  });
});