import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaboradores-cadastro',
  templateUrl: './colaboradores-cadastro.component.html',
  styleUrls: ['./colaboradores-cadastro.component.scss'],
  providers: [DatePipe]
})
export class ColaboradoresCadastroComponent implements OnInit {
  myDate: Date;
  formData: any;
  colaborador: any;
  colaboradores: Array<any>;
  constructor(private colaboradorService: ColaboradorService,
    private router: Router) { }

  gotoPage() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.myDate = new Date();
    this.colaborador = {};
    this.colaboradores = [];

  }

  isValidDate(c: FormControl): ValidationErrors {
    let result: ValidationErrors = null;
    const isValid = false;
    if (!isValid) {
      result = { invalidDate: 'Invalid date' };
    }
    return result;
  }

  gravarColaborador(frm: FormGroup) {
    this.colaboradorService.gravarColaborador(this.colaborador).subscribe(resp => {
      this.colaboradores.push(resp);
      frm.reset();
    });


  }

}
