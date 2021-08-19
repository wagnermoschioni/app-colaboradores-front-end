import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaboradores-listagem',
  templateUrl: './colaboradores-listagem.component.html',
  styleUrls: ['./colaboradores-listagem.component.scss']
})
export class ColaboradoresListagemComponent implements OnInit {
  listaVazia: boolean;
  colaboradores: Array<any>;
  constructor(private colaboradorService: ColaboradorService,
    private router: Router) { }

  gotoPage() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.listar();
  }

  listar() {

    this.colaboradorService.listar().subscribe((dados) => {

      console.log(dados)
      this.colaboradores = dados
      if (this.colaboradores.length === 0) {
        this.listaVazia = true;
      }
    });
  }



}
