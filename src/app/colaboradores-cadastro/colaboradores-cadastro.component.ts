import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
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
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.myDate = new Date();
    this.colaborador = {};
    this.colaboradores = [];
    console.log(this.datePipe.transform(this.myDate, 'dd/MM/yyyy'));
    console.log("silvio", this.myDate);
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
