import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  // funciona semelhante click, evento ouvivel
  @Output() onfechaMenu = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // dispara evento
  disparaEvento(){
    this.onfechaMenu.emit();
  }

}
