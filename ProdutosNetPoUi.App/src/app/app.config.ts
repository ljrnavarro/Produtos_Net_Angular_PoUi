// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

// Importar os componentes Standalone
import { ProductListComponent } from './pages/product-list.component'; 
//import { ProductFormComponent } from './pages/product-form/product-form.component'; 

// Definição das rotas
const routes: Routes = [
  { path: 'produtos', component: ProductListComponent },
 // { path: 'produtos/novo', component: ProductFormComponent }, 
 // { path: 'produtos/editar/:id', component: ProductFormComponent }, 
  { path: '', redirectTo: 'produtos', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),   
    provideAnimations()    // Garante que o PO UI funcione corretamente
  ]
};