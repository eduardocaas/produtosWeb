import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http : HttpClient) { }

  public findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produto/lista`);
  }

  public findById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${API_CONFIG.baseUrl}/produto/ler/${id}`);
  }

  public findByNome(nome: string): Observable<Produto> {
    return this.http.get<Produto>(`${API_CONFIG.baseUrl}/produto/lerNome/${nome}`);
  }

  public create(produto: Produto): Observable<any> {
    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/produto/criar` , produto);
  }

  public update(id: number, produto: Produto): Observable<any> {
    return this.http.put<any>(`${API_CONFIG.baseUrl}/produto/atualizar/${id}` , produto);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.baseUrl}/produto/deletar/${id}`);
  }

}
