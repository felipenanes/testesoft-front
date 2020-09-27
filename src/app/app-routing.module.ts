import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPessoaComponent } from './pessoa/criar-pessoa.component';
import { DetalhePessoaComponent } from './pessoa/detalhe-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa.component';

const routes: Routes = [
  { path: '', component: ListarPessoaComponent },
  { path: 'detalhe/:id', component: DetalhePessoaComponent },
  { path: 'novo', component: CriarPessoaComponent },
  { path: 'editar/:id', component: CriarPessoaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
