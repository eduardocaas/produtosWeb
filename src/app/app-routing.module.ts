import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { LerProdutoComponent } from './components/produto/ler-produto/ler-produto.component';
import { ListaProdutoComponent } from './components/produto/lista-produto/lista-produto.component';
import { NovoProdutoComponent } from './components/produto/novo-produto/novo-produto.component';

const routes: Routes = [
  {path: '', component: ListaProdutoComponent},
  {path: 'ler/:id', component: LerProdutoComponent},
  {path: 'novo', component: NovoProdutoComponent},
  {path: 'editar/:id', component: EditarProdutoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
