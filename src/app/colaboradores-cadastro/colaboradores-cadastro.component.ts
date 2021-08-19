import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaboradores-cadastro',
  templateUrl: './colaboradores-cadastro.component.html',
  styleUrls: ['./colaboradores-cadastro.component.scss']
})
export class ColaboradoresCadastroComponent implements OnInit {

  colaborador: any;
  colaboradores: Array<any>;
  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.colaborador = {};
    this.colaboradores = [];
  }

  gravarColaborador(frm: FormGroup) {
    this.colaboradorService.gravarColaborador(this.colaborador).subscribe(resp => {
      this.colaboradores.push(resp);
      frm.reset();
    });


  }

}
