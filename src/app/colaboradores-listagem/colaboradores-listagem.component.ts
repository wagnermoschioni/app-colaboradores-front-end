import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaboradores-listagem',
  templateUrl: './colaboradores-listagem.component.html',
  styleUrls: ['./colaboradores-listagem.component.scss']
})
export class ColaboradoresListagemComponent implements OnInit {

  colaboradores: Array<any>;
  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {

    this.colaboradorService.listar().subscribe((dados) => {
      console.log(dados)
      this.colaboradores = dados
    });
  }



}
