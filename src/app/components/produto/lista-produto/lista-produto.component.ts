import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  ELEMENT_DATA: Produto[] = [];

  displayedColumns: string[] = ['id', 'nome', 'preco', 'acoes'];
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.loadProdutos();
    this.dataSource.paginator = this.paginator;
  }

  loadProdutos(): void {
    this.service.findAll().subscribe(data => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource<Produto>(data);
      this.dataSource.paginator = this.paginator;
    }, err => {
      console.log(err);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
