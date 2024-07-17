import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  contador: number = 0
  mensajePadre = 'esto viene desde el padre'

  incrementar(){
    this.contador = this.contador + 1
  }

  decrementar(){
    this.contador --;
  }

}
