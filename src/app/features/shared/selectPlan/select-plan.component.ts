import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rimac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'] // Corrige aquí: "styleUrl" -> "styleUrls"
})
export class SelectPlanComponent {
  environment = environment; 
  constructor(
    private readonly router: Router,
  ) {}

  // Navegar a la página de beneficios para Rimac
  viewBenefitsRimac() {
    this.router.navigate(['rimac-ver-beneficios']);
  }

  // Navegar a la página de beneficios para La Positiva
  viewBenefitsPositive() {
    this.router.navigate(['lapositiva-ver-beneficios']);
  }

  // Navegar al flujo de compra para La Positiva
  quotePositive() {
    this.router.navigate(['lapositiva/comprar/soat/datos-vehiculo']);
  }

  // Navegar al flujo de compra para Rimac
  quoteRhyme() {
    this.router.navigate(['rimac/comprar/soat/datos-vehiculo']);
  }
}
