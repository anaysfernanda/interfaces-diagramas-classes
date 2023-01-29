export interface FormatoDeElemento {
  desenhar(): void;
  redimensionar(raio?: number, altura?: number, comprimento?: number): void;
}

export class Retangulo implements FormatoDeElemento {
  altura: number;
  comprimento: number;

  constructor(altura: number, comprimento: number) {
    (this.altura = altura), (this.comprimento = comprimento);
  }

  desenhar(): void {
    let perimetro = 2 * (this.altura + this.comprimento);
    console.log(`Perímetro do retângulo é igual a ${perimetro}`);
  }
  redimensionar(novaAltura: number, novoComprimento: number): void {
    (this.altura = novaAltura), (this.comprimento = novoComprimento);
    let perimetro = 2 * (novaAltura + novoComprimento);
    console.log(`O novo perímetro do retângulo é ${perimetro}`);
  }
}

export class Circulo implements FormatoDeElemento {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }
  desenhar(): void {
    let perimetro = this.raio * 2 * 3.14;
    console.log(`Perímetro do círculo é igual a ${perimetro}`);
  }
  redimensionar(novoRaio: number): void {
    this.raio = novoRaio;
    let perimetro = novoRaio * 2 * 3.14;
    console.log(`O novo perímetro do círculo é ${perimetro}`);
  }
}
