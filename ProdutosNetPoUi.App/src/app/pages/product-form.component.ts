import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  PoPageDefault, // Componente de página standalone
  PoTableModule, // Módulo de tabela
  PoDynamicModule, 
  PoDynamicFormField, 
  PoNotificationService, 
  PoPageAction,
  PoPageModule 
} from '@po-ui/ng-components';
import { ProductService, Produto } from '../services/produto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule, 
    PoDynamicModule, 
    FormsModule,
    PoTableModule,
    PoPageModule
  ],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  
  product: Partial<Produto> = {}; // Objeto que será ligado ao formulário
  isEdit = false;
  
  fields: Array<PoDynamicFormField> = [];

  pageActions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.save.bind(this), icon: 'po-icon-ok' },
    { label: 'Voltar', action: this.back.bind(this), icon: 'po-icon-arrow-left' }
  ];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private poNotification: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.setupFields();
    this.checkIfEditing();
  }

  setupFields(): void {
    this.fields = [
      {
        property: 'descricao',
        label: 'Descrição do Produto',
        required: true,
        minLength: 5,
        maxLength: 50,
        gridColumns: 6
      },
      {
        property: 'preco',
        label: 'Preço',
        type: 'currency',
        format: 'BRL',
        required: true,
        gridColumns: 6
      },
      {
        property: 'image',
        label: 'Imagem (Base64)',
        type: 'text',
        help: 'Cole aqui a string Base64 da imagem do produto (opcional).',
        gridColumns: 12
      }
    ];
  }

  checkIfEditing(): void {
    // Captura o ID da rota (se estiver em modo /editar/:id)
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    if (id) {
        this.isEdit = true;
        this.loadProduct(parseInt(id, 10));
    }
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe({
        next: (product) => {
            this.product = product;
        },
        error: () => {
            this.poNotification.error('Produto não encontrado!');
            this.router.navigate(['/produtos']);
        }
    });
  }

  save(): void {
    // O Dynamic Form só dispara o submit se o formulário for válido.
    if (this.isEdit) {
        // EDIÇÃO (PUT)
        this.productService.updateProduct(this.product as Produto).subscribe({
            next: () => {
                this.poNotification.success('Produto atualizado com sucesso!');
                this.back();
            },
            error: (err) => {
                this.poNotification.error('Erro ao atualizar produto.');
                console.error('Erro de API:', err);
            }
        });
    } else {
        // CRIAÇÃO (POST)
        // Garante que o ID não seja enviado na criação
        delete this.product.id; 
        this.productService.createProduct(this.product as Produto).subscribe({
            next: () => {
                this.poNotification.success('Produto criado com sucesso!');
                this.back();
            },
            error: (err) => {
                this.poNotification.error('Erro ao criar produto.');
                console.error('Erro de API:', err);
            }
        });
    }
  }

  back(): void {
    this.router.navigate(['/produtos']);
  }
}