export class Farmacia {
  responsavelTecnico: string;
  remedios: string[];

  constructor(responsavelTecnico: string, remedios: string[]) {
    this.responsavelTecnico = responsavelTecnico;
    this.remedios = remedios;
  }

  alterarRT(novoRT: string) {
    this.responsavelTecnico = novoRT;
    console.log(
      `O (a) novo (a) Responsável Técnico é ${this.responsavelTecnico}`
    );
  }

  adicionarRemedio(remedio: string) {
    this.remedios.push(remedio);
    console.log(`Lista de remédios: ${this.remedios}`);
  }
}

export class Drogasil extends Farmacia {
  endereco: string;

  constructor(
    responsavelTecnico: string,
    remedios: string[],
    endereco: string
  ) {
    super(responsavelTecnico, remedios);
    this.endereco = endereco;
  }

  mostrarEndereco() {
    console.log(`O endereço da Drogasil é: ${this.endereco}`);
  }
}
