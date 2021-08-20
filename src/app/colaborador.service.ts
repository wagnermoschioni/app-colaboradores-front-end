import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  queryField = new FormControl();
  colaboradoresUrl = 'http://localhost:8080/colaboradores';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.colaboradoresUrl}`);

  }

  filterByName() {
    //implementar com parametros para busca
    //return this.http.get<any[]>(`${this.colaboradoresUrl}`);
  }

  gravarColaborador(colaborador: any) {
    return this.http.post(this.colaboradoresUrl, colaborador);
  }
}
