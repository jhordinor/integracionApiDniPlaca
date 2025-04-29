import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchLicensePlate-la-positiva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchLicensePlate.component.html',
  styleUrls: ['./searchLicensePlate.component.scss'],
  providers: [],
})
export class SearchLicensePlateComponent implements OnInit {
  // Form model
  licensePlate: string = '';
  documentType: string = '1'; // Default to DNI
  documentNumber: string = '';
  secondaryPurposes: boolean = false;
  privacyPolicy: boolean = false;

  // UI state
  errorMessage: string | null = null;
  documentError: string | null = null;
  formError: string | null = null;
  loading: boolean = false;
  maxLength: number = 8; // Default for DNI

  ngOnInit(): void {
    // Initialize component
  }

  // Validate license plate format (X9X-999)
  validateLicensePlate(): void {
    const pattern = /^[A-Z0-9]{3}-[0-9]{3}$/;
    if (!pattern.test(this.licensePlate)) {
      this.errorMessage = 'Formato de placa inválido. Use el formato X9X-999';
    } else {
      this.errorMessage = null;
    }
  }

  // Update maxLength based on document type
  onDocumentTypeChange(): void {
    switch (this.documentType) {
      case '1': // DNI
        this.maxLength = 8;
        break;
      case '2': // RUC
        this.maxLength = 11;
        break;
      case '3': // CE
        this.maxLength = 12;
        break;
    }
    this.validateDocumentNumber();
  }

  // Validate document number based on type
  validateDocumentNumber(): void {
    if (!this.documentNumber) {
      this.documentError = 'El número de documento es requerido';
      return;
    }

    switch (this.documentType) {
      case '1': // DNI
        if (!/^\d{8}$/.test(this.documentNumber)) {
          this.documentError = 'El DNI debe tener 8 dígitos';
        } else {
          this.documentError = null;
        }
        break;
      case '2': // RUC
        if (!/^\d{11}$/.test(this.documentNumber)) {
          this.documentError = 'El RUC debe tener 11 dígitos';
        } else {
          this.documentError = null;
        }
        break;
      case '3': // CE
        if (!/^[A-Z0-9]{12}$/.test(this.documentNumber)) {
          this.documentError = 'El CE debe tener 12 caracteres';
        } else {
          this.documentError = null;
        }
        break;
    }
  }

  // Submit form
  onSubmit(): void {
    this.validateLicensePlate();
    this.validateDocumentNumber();

    if (!this.secondaryPurposes || !this.privacyPolicy) {
      this.formError = 'Debe aceptar los términos y condiciones';
      return;
    }

    if (this.errorMessage || this.documentError) {
      this.formError = 'Por favor, corrija los errores del formulario';
      return;
    }

    this.loading = true;
    // Here you would implement the actual form submission
    // After submission is complete, set this.loading = false
  }
  onLicensePlateInput(event: any): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
    this.licensePlate = input.value;
  }

  isFormComplete(): boolean {
    const isLicensePlateValid = Boolean(this.licensePlate && this.licensePlate.length === 7);
    const isDocumentValid = Boolean(this.documentNumber && !this.documentError);
    
    return Boolean(
      isLicensePlateValid &&
      isDocumentValid &&
      this.secondaryPurposes &&
      this.privacyPolicy &&
      !this.errorMessage
    );
  }
}

