
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule, PoTableModule } from '@po-ui/ng-components';

import { ProdutosListComponent } from '../pages/produtos-list.component';
// import { TestPoComponent } from '../pages/test-po.component';

@NgModule({
  declarations: [ProdutosListComponent],
  imports: [
    PoTableModule,
    CommonModule,
    PoPageModule, // <-- Required for <po-page-default>
    // other PO UI modules like PoTableModule, PoModalModule if needed
  ]
})
export class ProdutosModule {}
