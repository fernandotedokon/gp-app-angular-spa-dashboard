import { Component, OnInit } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit {
  // export class FaturamentoComponent implements OnInit, OnDestroy {

  faturamento = {
    "detalhamento" : [
    { "descricao" : "A vista (especie)" , "valor" : 32.000},
    { "descricao" : "Cheque"            , "valor" : 2.000},
    { "descricao" : "Convenio"          , "valor" : 20.000},
    { "descricao" : "Cartao de Debito"  , "valor" : 28.000},
    { "descricao" : "Cartao de Credito" , "valor" : 18.000}
    ]
  }


//  constructor() { }

//  ngOnInit() {  }


  faturamentoInscricao;


  constructor() {  }

  // faz a chamada do servico
  // constructor(private faturamentoServiceFaturamento:FaturamentoService) {  }

  ngOnInit() {
  //  this.faturamentoInscricao = this.faturamentoService.getFaturamento();
  //  .subscribe(dados => this.faturamento = dados);
  }

  // quando componente deixar de existir na tela
//  ngOnDestroy(){
//    this.faturamentoInscricao.unsubscribe();
//  }


}


