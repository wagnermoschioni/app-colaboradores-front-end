import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  queryField = new FormControl();
  colaboradoresUrl = 'http://localhost:8080/colaboradores';

  result$: Observable<any>;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.colaboradoresUrl}`);

  }

  filterByName() {
    //this.result$ = this.http.get(this.colaboradoresUrl)
    //implementar com parametros para busca
    return this.http.get<any[]>(`${this.colaboradoresUrl}` + '/pepe');
  }

  gravarColaborador(colaborador: any) {
    return this.http.post(this.colaboradoresUrl, colaborador);
  }
}
