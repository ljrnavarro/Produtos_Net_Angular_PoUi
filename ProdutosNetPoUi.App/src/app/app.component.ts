// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Necessário para exibir o conteúdo das rotas
import { PoModule } from '@po-ui/ng-components'; // 👈 CRÍTICO: Importe o módulo raiz do PO UI AQUI!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, // Permite que as rotas configuradas no app.config.ts sejam exibidas
    PoModule      // Carrega o contexto global e os provedores do PO UI
  ],
  // O template do componente raiz precisa apenas exibir o RouterOutlet
  template: '<router-outlet></router-outlet>' 
})
export class AppComponent {
  title = 'po-crud-app';
}