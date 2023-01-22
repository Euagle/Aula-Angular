import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-lista',
  templateUrl: './renderizando-lista.component.html',
  styleUrls: ['./renderizando-lista.component.css']
})
export class RenderizandoListaComponent {
celulares: Celular[]=[

  {id: 1, nome: "Celular XL", descricao: "um ceular grande", esgotado: false },
  {id: 2, nome: "Celular XR", esgotado: false},
  {id: 3, nome: "Celular Iphone X", descricao: "um ceular médio", esgotado: true}


]

}

