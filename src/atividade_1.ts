export class Pedido {
  public itens: Item[];
  public valorTotal: number;

  constructor(itens: Array<Item>) {
    this.itens = itens;
    this.valorTotal = 0;
  }

  qualValorTotal() {
    let resultado = this.itens.reduce((current, item) => {
      return current + item.valor;
    }, 0);

    console.log(`O valor total é R$" ${resultado}`);
  }
}

export class Item {
  public valor: number;
  public nome: string;
  public descricao: string;

  constructor(valor: number, nome: string, descricao: string) {
    (this.valor = valor), (this.nome = nome), (this.descricao = descricao);
  }
}
