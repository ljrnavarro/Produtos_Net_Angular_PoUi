
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule, PoTableModule } from '@po-ui/ng-components';

import { ProductListComponent } from '../pages/product-list.component';
// import { TestPoComponent } from '../pages/test-po.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    PoTableModule,
    CommonModule,
    PoPageModule
  ]
})
export class ProdutosModule {}
