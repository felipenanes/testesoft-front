import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//external sources
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//internal sources
import { ListarPessoaComponent } from './pessoa/listar-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa.component';
import { CriarPessoaComponent } from './pessoa/criar-pessoa.component';
import { DetalhePessoaComponent } from './pessoa/detalhe-pessoa.component';

//http
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoaComponent,
    EditarPessoaComponent,
    CriarPessoaComponent,
    DetalhePessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
