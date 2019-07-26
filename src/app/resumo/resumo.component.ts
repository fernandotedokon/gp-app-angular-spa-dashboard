import { Component, OnInit} from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})


export class ResumoComponent implements OnInit {
  // export class ResumoComponent implements OnInit {

  resumo = {
    "consultas" : {
      "consultas_30dias_anteriores" : 87,
      "consultas_30dias_posteriores" : 79,
    },
    "faturamento" : {
      "anterior" : {
        "valor" : 100000,
        "comparativo" : 18
      },
      "previsao" : {
        "valor" : 90000,
        "comparativo" : -10
      }

    }
  }



//  resumo2;

inscricao;


  constructor() {  }

  // faz a chamada do servico
  //constructor(private resumoService:ResumoService) {  }

  ngOnInit() {
  //  this.inscricao = this.resumoService.getResumo();
  //  .subscribe(dados => this.resumo2 = dados);
  }

  // quando componente deixar de existir na tela
//  ngOnDestroy(){
//    this.inscricao.unsubscribe();
//  }


}
