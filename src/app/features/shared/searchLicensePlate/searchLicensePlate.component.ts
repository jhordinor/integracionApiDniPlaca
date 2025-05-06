import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";
import { VerficarSoatService } from './verificar-soat.service';
import { VerficarSoatModel } from './verificar-soat.model';
import { SoatDataService } from './send-data-service';
import { MessageSweetService } from '../../../shared/service/message-sweet.service';
import { environment } from '../../../../environments/environment';
import { finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface SoatFormModel {
  plate: FormControl<string | null>;
  documentType: FormControl<string | null>;
  documentNumber: FormControl<string | null>;
  acceptSecondaryPurposes: FormControl<boolean | null>;
  acceptPrivacyPolicy: FormControl<boolean | null>;
}

@Component({
  selector: 'app-searchLicensePlate-la-positiva',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './searchLicensePlate.component.html',
  providers: [VerficarSoatService],
})
export class SearchLicensePlateComponent {
    soatForm!: FormGroup<SoatFormModel>;
    keyCapcha: string = '';

    constructor(private readonly fb: FormBuilder,
        private readonly verficarSoatService: VerficarSoatService,
        private readonly soatDataService: SoatDataService,
        private readonly message: MessageSweetService,
        private readonly router: Router
    ) {
      this.soatDataService.clearData();
      this.initializeForm();
      this.keyCapcha = environment.keyEncrypted || '';
    }

    private initializeForm(): void {
      this.soatForm = this.fb.group<SoatFormModel>({
        plate: new FormControl('', { validators: [Validators.required, Validators.maxLength(7)], nonNullable: true }),
        documentType: new FormControl('1', { validators: [Validators.required], nonNullable: true }),
        documentNumber: new FormControl('', { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(12)], nonNullable: true }),
        acceptSecondaryPurposes: new FormControl(false, { validators: [Validators.requiredTrue], nonNullable: true }),
        acceptPrivacyPolicy: new FormControl(false, { validators: [Validators.requiredTrue], nonNullable: true })
      });
    }


    onPlateInput(event: any): void {
      let value = event.target.value.toUpperCase();
      value = value.replace(/[^A-Z0-9-]/g, '');
      this.soatForm.get('plate')?.setValue(value, { emitEvent: false });
    }

    onDocumentTypeChange(event: any): void {
      const docType = event.target.value;
      const documentControl = this.soatForm.get('documentNumber');
      
      switch(docType) {
        case '1': // DNI
          documentControl?.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
          break;
        case '2': // RUC
          documentControl?.setValidators([Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
          break;
        case '3': // CE
          documentControl?.setValidators([Validators.required, Validators.minLength(9), Validators.maxLength(12)]);
          break;
      }
      documentControl?.updateValueAndValidity();
    }

    onDocumentNumberInput(event: any): void {
      let value = event.target.value.replace(/\D/g, '');
      this.soatForm.get('documentNumber')?.setValue(value, { emitEvent: false });
    }
  
    onSubmit(): void {
      console.log(this.soatForm)
      console.log(this.soatForm.valid)
      if (this.soatForm.valid) {
        const request: VerficarSoatModel = {
          plate: this.soatForm.get('plate')?.value ?? '',
          nroDocumento : this.soatForm.get('documentNumber')?.value ?? '',
        };

        this.verficarSoatService.searchSoat(request).pipe(
          catchError(error => {
            const errorMessage = this.getErrorMessage(error);
            this.message.showWarning(errorMessage);
            return of(null);
          }),
          finalize(() => {
            // Clean up or reset operations if needed
          })
        ).subscribe(response => {
          if (response) {
            this.soatDataService.setData(response);
            this.router.navigate(['/datosSoat']);
          }
        });
      } else {
        this.soatForm.markAllAsTouched();
        if (!this.soatForm.get('acceptSecondaryPurposes')?.value || 
                   !this.soatForm.get('acceptPrivacyPolicy')?.value) {
          this.message.showWarning('Debe aceptar los términos y condiciones para continuar');
        } else {
          this.message.showWarning('Por favor, complete todos los campos requeridos correctamente');
        }
      }
    }

    private getErrorMessage(error: any): string {
      switch(error.status) {
        case 404:
          return `No se encontró la placa ${this.soatForm.get('plate')?.value}`;
        case 400:
          return 'Los datos ingresados no son válidos';
        case 500:
        default:
          return 'Hubo un error inesperado, por favor, inténtelo más tarde';
      }
    }
}
