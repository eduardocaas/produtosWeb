import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListaProdutoComponent } from './components/produto/lista-produto/lista-produto.component';
import { LerProdutoComponent } from './components/produto/ler-produto/ler-produto.component';
import { NovoProdutoComponent } from './components/produto/novo-produto/novo-produto.component';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    LerProdutoComponent,
    NovoProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
