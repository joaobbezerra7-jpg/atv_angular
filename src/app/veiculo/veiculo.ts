import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Carro } from './carro';

@Component({
  selector: 'app-veiculo',
  imports: [FormsModule],
  templateUrl: './veiculo.html',
  styleUrl: './veiculo.css',
})

export class Veiculo {
  id_produto: number = 0
  descricao_veiculo: string = ''
  valor_servico: number = 0.0
  listaItens : Carro[] = []


  addItem(){
    // console.log(this.descricao_produto, this.valor_unitario)
    // console.log(`Descrição ${this.descricao_produto}, Valor Unitário ${this.valor_unitario} `);
    
    // let item = new Item(this.listaItens.length + 1, this.descricao_produto, this.valor_unitario)

    let carro  = new Carro()
    carro.idProduto = this.listaItens.length + 1
    carro.descricaoCarro = this.descricao_veiculo
    carro.valorServico = this.valor_servico

    this.listaItens.push(carro)

    this.descricao_veiculo=''
    this.valor_servico=0.0
    
  }

  limparForm(){
    this.listaItens  = []
  }



}
