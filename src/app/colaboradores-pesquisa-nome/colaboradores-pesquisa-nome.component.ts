import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaboradores-pesquisa-nome',
  templateUrl: './colaboradores-pesquisa-nome.component.html',
  styleUrls: ['./colaboradores-pesquisa-nome.component.scss']
})
export class ColaboradoresPesquisaNomeComponent implements OnInit {
  colaboradores: Array<any>;
  listaVazia: boolean;
  constructor(private colaboradorService: ColaboradorService) { }


  ngOnInit() {
    this.filterByName();
  }

  filterByName() {
    // this.colaboradorService.filterByName().subscribe((dados) => {
    //   console.log(dados)
    //   this.colaboradores = dados
    //  this.listaVazia = dados.length === 0;
    // });
  }
}
