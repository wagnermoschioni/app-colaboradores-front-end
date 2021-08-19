import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaboradoresListagemComponent } from './colaboradores-listagem/colaboradores-listagem.component';
import { ColaboradorService } from './colaborador.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ColaboradoresCadastroComponent } from './colaboradores-cadastro/colaboradores-cadastro.component';
import { ColaboradoresHomeComponent } from './colaboradores-home/colaboradores-home.component';
@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresListagemComponent,
    ColaboradoresCadastroComponent,
    ColaboradoresHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ColaboradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
