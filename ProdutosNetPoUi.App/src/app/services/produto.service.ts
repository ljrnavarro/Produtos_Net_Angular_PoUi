// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Sua interface
export interface Produto {
  id: number;
  descricao: string;
  preco: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:44320/api/v1/Produto'; // ⚠️ Ajuste a URL base conforme sua API

  constructor(private http: HttpClient) { }

  /** Método para buscar todos os produtos (GET /produtos) */
  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Produto> {    
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }
 
  createProduct(produto: Produto): Observable<Produto> {
       return this.http.post<Produto>(this.apiUrl, produto);
  }

   updateProduct(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}`, produto);
  }
  
  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;   
    return this.http.delete<void>(url);
  }
 
}