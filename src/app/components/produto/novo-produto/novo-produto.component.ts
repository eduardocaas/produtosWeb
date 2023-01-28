import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: 0
  };

  nome: FormControl = new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
  preco: FormControl = new FormControl(null, [Validators.required, Validators.min(1)]);

  constructor (private service: ProdutoService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.produto).subscribe(data => {
      this.toast.success('Produto criado com sucesso!' , 'Cadastro', {timeOut: 6000});
      this.router.navigate(['/']);
    }, err => {
      this.toast.error(err.error.mensagem, 'Erro' , {timeOut: 6000});
    });
  }

  validaCampos(): boolean {
    return this.nome.valid && this.preco.valid;
  }

  limparCampos(): void {
    this.nome.setValue("");
    this.preco.setValue(0);
  }

  minCampos(): boolean {
    return this.nome.value.length < 1 && this.preco.value < 0.000000001;
  }

  getErrorMessageNome(){
    if(this.nome.hasError('required')){
      return 'Campo obrigatório';
    }
    if(this.nome.hasError('minlength')){
      return 'O nome deve ter no mínimo 2 caracteres';
    }
    if(this.nome.hasError('maxlength')){
      return 'O nome deve ter no máximo 50 caracteres';
    }
    return '';
  }

  getErrorMessagePreco(){
    if(this.preco.hasError('required')){
      return 'Campo obrigatório';
    }
    if(this.preco.hasError('min')){
      return 'O preço deve ser maior que 0';
    }
    return '';
  }

}
