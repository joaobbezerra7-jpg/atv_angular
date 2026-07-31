import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { carro } from './carro';

@Component({
  selector: 'app-veiculo',
  imports: [FormsModule],
  templateUrl: './veiculo.html',
  styleUrl: './veiculo.css',
})

export class Veiculo {
  id_produto: number = 0
  descricao_Veiculo: string = ''
  valor_servico: number = 0.0
  listaItens : carro[] = []


  addItem(){
    // console.log(this.descricao_produto, this.valor_unitario)
    // console.log(`Descrição ${this.descricao_produto}, Valor Unitário ${this.valor_unitario} `);
    
    // let item = new Item(this.listaItens.length + 1, this.descricao_produto, this.valor_unitario)

    let carro  = new carro()
    carro.idProduto = this.listaItens.length + 1
    carro.descricaoCarro = this.descricao_Veiculo
    carro.valorUnitario = this.valor_servico

    this.listaItens.push(carro)

    this.descricao_Veiculo=''
    this.valor_servico=0.0
    
  }

  limparForm(){
    this.listaItens  = []
  }



}
