import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
 // export class ConsultaComponent implements OnInit, OnDestroy {

  consultas = {
    "realizadas" : [
    { "especialidade" : "Cardiologia", "quantidade" : 20},
    { "especialidade" : "Clinica Geral", "quantidade" : 30},
    { "especialidade" : "Dermatologia", "quantidade" : 14},
    { "especialidade" : "Gastroenterologia", "quantidade" : 10},
    { "especialidade" : "Pedriatria", "quantidade" : 13}
    ],
    "marcadas" : [
      { "especialidade" : "Cardiologia", "quantidade" : 19},
      { "especialidade" : "Clinica Geral", "quantidade" : 29},
      { "especialidade" : "Dermatologia", "quantidade" : 13},
      { "especialidade" : "Gastroenterologia", "quantidade" : 9},
      { "especialidade" : "Pedriatria", "quantidade" : 12}
      ]
  }


  consultas2;
  consultaInscricao;
  erro;

  constructor() { }

  // faz a chamada do servico
  // constructor(private consultaService:ConsultaService) {  }

  ngOnInit() {
  //  this.inscricao = this.consultaService.getConsulta();
  //  .subscribe(dados => this.consultas2 = dados, erro => this.erro = true);
  }

  // quando componente deixar de existir na tela
    // quando componente deixar de existir na tela
//    ngOnDestroy(){
  //    this.inscricao.unsubscribe();
    // }


}
