import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  colaboradoresUrl = 'http://localhost:8080/colaboradores';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.colaboradoresUrl}`);

  }

  filterByName() {
    //
  }

  gravarColaborador(colaborador: any) {
    return this.http.post(this.colaboradoresUrl, colaborador);
  }
}
