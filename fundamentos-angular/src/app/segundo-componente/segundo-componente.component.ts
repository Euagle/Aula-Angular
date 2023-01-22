import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
nome = "Gleice";
nascimento= "2001-09-22";
urlImagem="/assets/favicon.ico";
mostrarDataNascimento(){
alert(`A data de nascimento da Gleice é: ${this.nascimento}`)
}
}
