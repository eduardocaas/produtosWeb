import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.css']
})
export class DialogProdutoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Produto) { }

  ngOnInit(): void {
  }

}


