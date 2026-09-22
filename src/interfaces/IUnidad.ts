export interface IUnidad {
  disparar(objetivo: IUnidad): void;
  recibirDisparo(dano: number): void;
  estaVivo(): boolean;
}