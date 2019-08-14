import { Component, Input } from '@angular/core';

@Component({
  selector: 'consulta',
  templateUrl: 'consulta.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ConsultaComponent  {
  @Input() name: string;
}
