import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    currentText: number = 0;
    texts: string[] = [
      "SOMOS UN BROKER COMPROMETIDOS CON TU SEGURIDAD Y TU FELICIDAD",
      "CONOCE NUESTROS PLANES Y BENEFICIOS"
    ];
  
    constructor(private router: Router) {}
  
    ngOnInit() {
        setInterval(() => {
          this.currentText = (this.currentText + 1) % this.texts.length;
          //console.log("Current Text Index:", this.currentText); // Verifica en la consola
        }, 5000); // Cambia el texto cada 5 segundos
    }
  
    navigateToHome() {
      this.router.navigate(['']);
    }
  }