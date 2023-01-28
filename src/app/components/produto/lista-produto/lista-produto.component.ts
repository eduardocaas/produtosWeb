import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { DialogProdutoComponent } from '../dialog-produto/dialog-produto.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  ELEMENT_DATA: Produto[] = [];

  displayedColumns: string[] = ['id', 'nome', 'preco', 'detalhes', 'editar' , 'excluir'];
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  constructor(private service: ProdutoService, private toast: ToastrService, private dialog: MatDialog) {}

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

  excluir(id: number){
    this.service.delete(id).subscribe(data => {
      this.toast.success("Produto deletado com sucesso!" , "Excluir" , {timeOut: 6000});
      this.loadProdutos();
    }, err => {
      this.toast.error(err.error.mensagem , "Erro" , {timeOut: 6000});
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findProduto(id: number): void {
    this.service.findById(id).subscribe(data => {
      this.openDialog(data);
    }, err => {
      this.toast.error(err.error.mensagem , "Erro" , {timeOut: 6000});
    });
  }

  openDialog(produto: Produto): void {
    const dialogRef = this.dialog.open(DialogProdutoComponent, {
      width: '300px',
      data: produto
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadProdutos();
    });
  }

}
