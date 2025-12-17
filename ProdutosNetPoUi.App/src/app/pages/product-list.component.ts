import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


import { 
  PoPageDefault, 
  PoTableModule, 
  PoTableColumn, 
  PoPageAction,
  PoNotificationService, 
  PoDialogService,
  PoPageModule,
  PoIconModule,
  PoButtonModule,
  PoTableColumnLabel //
} from '@po-ui/ng-components'; 

import { Produto, ProductService } from '../services/produto.service';

@Component({
  selector: 'app-product-list',
  standalone: true,

  imports: [
    CommonModule,
    PoTableModule,
    PoPageModule,
    PoIconModule,
    PoButtonModule
  ],
  templateUrl: './product-list.component.html',
  
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
      { property: 'descricao', label: 'Descrição', width: '25%' },
      { 
        property: 'preco', 
        label: 'Preço', 
        type: 'currency', 
        format: 'BRL', 
        width: '15%' 
      },
     
      {
    property: 'columnIcon',
      label: 'Actions',
      type: 'icon', 
      width: '55%',        
      icons: [
        {
          icon: 'po-icon-edit', 
          color: 'color-04',
          tooltip: 'Editar Produto',
          value: 'edit',
          action: this.editProduct.bind(this)
        },
        {
          icon: 'po-icon-delete', 
          color: 'color-07',
          tooltip: 'Excluir Produto',
          value: 'delete',
          action: this.confirmDeleteProduct.bind(this)
        }
      ]
    }
    ];
  }

  setupActions(): void {
    this.pageActions = [
        { label: 'Novo Produto', icon: 'po-icon-plus' , action: this.goToNewProduct.bind(this) },
        { label: 'Atualizar Lista', action: this.getProducts.bind(this), icon: 'po-icon-refresh' }
    ];
}

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: Produto[]) => {
        this.products = data.map(p => ({ ...p, imageStatus: !!p.image , columnIcon: ['add', 'edit', 'delete']}));
        this.poNotification.success(`Lista de produtos carregada. Total: ${data.length}`);
      },
      error: (err) => {
        this.poNotification.error('Falha ao carregar produtos. Verifique sua API.');
        console.error('Erro de API:', err);
        this.products = [];
      }
    });
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
    this.productService.deleteProduct(id).subscribe({
        next: () => {
            this.poNotification.success('Produto excluído com sucesso!');
            this.getProducts(); 
        },
        error: (err) => {
            this.poNotification.error('Erro ao excluir produto. Verifique sua API e o console.');
            console.error('Erro de exclusão:', err);
        }
    });
}

  goToNewProduct(): void {
    this.router.navigate(['/produtos/novo']);
  }

  editProduct(item: Produto): void {
    this.router.navigate(['/produtos/editar', item.id]);
  }
}