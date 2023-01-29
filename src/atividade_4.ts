export class Farmacia {
  nome: string;
  responsavelTecnico: string;
  remedios: string[];

  constructor(nome: string, responsavelTecnico: string, remedios: string[]) {
    this.nome = nome;
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
  endereco!: string;

  mostrarEndereco() {
    console.log(`O endereço da Drogasil é: ${this.endereco}`);
  }
}
