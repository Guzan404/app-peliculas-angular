
import { Component, OnInit } from '@angular/core';

import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuComponent,RouterOutlet]
})
export class AppComponent  {
  
}

