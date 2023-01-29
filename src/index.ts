import { Item, Pedido } from "./atividade_1";
import { Circulo, Retangulo } from "./atividade_2";
import { Drogasil, Farmacia } from "./atividade_4";

//ex. 1
let item1 = new Item(100, "mouse", "sem fio");
let item2 = new Item(5000, "celular", "Iphone");

let pedido = new Pedido([item1, item2]);
pedido.qualValorTotal();

//ex. 2
let circulo = new Circulo(8);
circulo.desenhar();
circulo.redimensionar(10);

let retangulo = new Retangulo(12, 15);
retangulo.desenhar();
retangulo.redimensionar(20, 24);

//ex. 4

let farmacia = new Farmacia("Ana Paula", ["Amoxicilina", "Dipirona"]);
farmacia.adicionarRemedio("Buscopam");
farmacia.alterarRT("Renata");

let drogasil = new Drogasil(
  "Fernando",
  ["Paracetamol", "Tylenol"],
  "Rua Cassimiro de Abreu, n. 1024"
);
console.log(drogasil);
