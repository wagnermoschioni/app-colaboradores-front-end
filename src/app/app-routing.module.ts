import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradoresCadastroComponent } from './colaboradores-cadastro/colaboradores-cadastro.component';
import { ColaboradoresHomeComponent } from './colaboradores-home/colaboradores-home.component';
import { ColaboradoresListagemComponent } from './colaboradores-listagem/colaboradores-listagem.component';
import { ColaboradoresPesquisaNomeComponent } from './colaboradores-pesquisa-nome/colaboradores-pesquisa-nome.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ColaboradoresHomeComponent },
  { path: 'cadastro', component: ColaboradoresCadastroComponent },
  { path: 'listagem', component: ColaboradoresListagemComponent },
  { path: 'pesquisa', component: ColaboradoresPesquisaNomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
