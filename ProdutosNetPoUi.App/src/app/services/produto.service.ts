// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Sua interface
export interface Produto {
  id: number;
  descricao: string;
  preco: number;
  imagemBase64: string;
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

  // ... (Outros métodos CRUD virão depois)
}