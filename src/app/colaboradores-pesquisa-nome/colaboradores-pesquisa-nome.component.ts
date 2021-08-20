import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaboradores-pesquisa-nome',
  templateUrl: './colaboradores-pesquisa-nome.component.html',
  styleUrls: ['./colaboradores-pesquisa-nome.component.scss']
})
export class ColaboradoresPesquisaNomeComponent implements OnInit {
  colaboradores: Array<any>;
  listaVazia: boolean;
  constructor(private colaboradorService: ColaboradorService,
    private router: Router) { }


  ngOnInit() {
    //  this.filterByName();
  }

  gotoPage() {
    this.router.navigate(['/home']);
  }

  filterByName() {
    //this.colaboradorService.filterByName().subscribe((dados) => {
    //   console.log("Slash", dados)
    //    this.colaboradores = dados
    //    this.listaVazia = dados.length === 0;
    //  });
  }
}
