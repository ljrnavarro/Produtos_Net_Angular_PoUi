// src/app/pages/product-list/product-list.component.ts (CORRIGIDO)

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// ✅ CORRETO: Importando os aliases Standalone do PO UI
import { 
  PoPageDefault, // Componente de página standalone
  PoTableModule, // Módulo de tabela
  PoTableColumn, 
  PoPageAction,
  PoNotificationService, 
  PoDialogService,
  PoPageModule
} from '@po-ui/ng-components'; 

// Serviço e Modelo (Ajuste o caminho se necessário)
import { Produto, ProductService } from '../services/produto.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  // O array imports DEVE usar os aliases Standalone
  imports: [
    CommonModule,
    PoTableModule,
    PoPageModule
  ],
  templateUrl: './product-list.component.html',
  // styleUrls: [/* Removido para evitar erro de arquivo não encontrado */]
})
export class ProductListComponent implements OnInit {
  
  products: (Produto & { imageStatus: boolean })[] = []; 
  columns: PoTableColumn[] = [];
  pageActions: PoPageAction[] = [];
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private poNotification: PoNotificationService, 
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.setupColumns();
    this.setupActions();
    this.getProducts(); 
  }
  
  // --- Setup de Configurações ---

  setupColumns(): void {
    this.columns = [
      { property: 'id', label: 'Código', width: '10%' },
      { property: 'descricao', label: 'Descrição', width: '45%' },
      { 
        property: 'preco', 
        label: 'Preço', 
        type: 'currency', 
        format: 'BRL', 
        width: '15%' 
      },
      { 
        property: 'imageStatus',
        label: 'Imagem', 
        type: 'label',
        labels: [
          { value: 'true', label: 'Sim', color: 'color-10', icon: 'po-icon-image' },
          { value: 'false', label: 'Não', color: 'color-07', icon: 'po-icon-not-found' }
        ]
      },
      { 
        property: 'actions', 
        label: 'Ações', 
        type: 'icon', 
        icons: [
        //  { action: this.editProduct.bind(this), icon: 'po-icon-edit', tooltip: 'Editar Produto' },
        //  { action: this.confirmDeleteProduct.bind(this), icon: 'po-icon-delete', tooltip: 'Excluir Produto', color: 'color-07' }
        ]
      }
    ];
  }

  setupActions(): void {
    this.pageActions = [
    //  { label: 'Novo Produto', action: this.goToNewProduct.bind(this), icon: 'po-icon-plus' },
      { label: 'Atualizar Lista', action: this.getProducts.bind(this), icon: 'po-icon-refresh' }
    ];
  }

  // --- Lógica de Chamada da API ---

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: Produto[]) => {
        this.products = data.map(p => ({ ...p, imageStatus: !!p.imagemBase64 }));
        this.poNotification.success(`Lista de produtos carregada. Total: ${data.length}`);
      },
      error: (err) => {
        this.poNotification.error('Falha ao carregar produtos. Verifique sua API.');
        console.error('Erro de API:', err);
        this.products = [];
      }
    });
  }
/*
  // --- Lógica de Navegação/CRUD ---

  goToNewProduct(): void {
    this.router.navigate(['/produtos/novo']);
  }

  editProduct(item: Produto): void {
    this.router.navigate(['/produtos/editar', item.id]);
  }

  confirmDeleteProduct(item: Produto): void {
    this.poDialog.confirm({
      title: 'Confirmação de Exclusão',
      message: `Deseja realmente excluir o produto: ${item.descricao}?`,
      confirm: () => this.deleteProduct(item.id),
      cancel: () => {}
    });
  }

  deleteProduct(id: number): void {
    // ⚠️ Implementar o método deleteProduct no ProductService
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.poNotification.success('Produto excluído com sucesso!');
        this.getProducts();
      },
      error: () => {
        this.poNotification.error('Erro ao excluir produto.');
      }
    });
  }
    */
}