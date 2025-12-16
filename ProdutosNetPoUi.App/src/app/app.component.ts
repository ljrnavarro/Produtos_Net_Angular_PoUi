import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 
import { PoModule } from '@po-ui/ng-components'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    PoModule      
  ],
  
  template: '<router-outlet></router-outlet>' 
})
export class AppComponent {
  title = 'po-crud-app';
}