import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  PoPageDefault, 
  PoTableModule, 
  PoDynamicModule, 
  PoDynamicFormField, 
  PoNotificationService, 
  PoPageAction,
  PoPageModule,
  PoUploadComponent,
  PoFieldModule,
  PoButtonModule
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
    PoPageModule,
    PoFieldModule,
    PoButtonModule
  ],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  
  product: Partial<Produto> = {};
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
      }
      // 🛑 Campo de imagem removido daqui. Será usado o componente po-upload.
    ];
  }

  checkIfEditing(): void {
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

  // 💡 NOVO MÉTODO: Converte o arquivo selecionado em Base64
  handleFileInput(event: any): void {
    const file: File = event.target.files[0];
    
    // ✅ console.log para confirmar o disparo
    console.log('Evento Disparado com Input Nativo! Objeto File recebido:', file);
    
    if (file) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            // Assumindo que a propriedade correta é 'image'
            this.product.image = this.extractBase64(e.target.result as string);
        };
        
        reader.readAsDataURL(file);
    }
}

  // 💡 NOVO MÉTODO: Extrai a string Base64 sem o prefixo do MIME type
  private extractBase64(base64String: string): string {
    const parts = base64String.split(';base64,');
    // Retorna apenas a parte da string Base64 pura
    return parts.length > 1 ? parts[1] : base64String;
  }


  save(): void {
    if (this.isEdit) {
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