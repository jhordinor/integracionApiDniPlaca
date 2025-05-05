import { Component, signal, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { SoatDataService } from './send-data-service';
import { SoatVehicleResponse } from '../../Soat/models/request/soat-activo';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-verificar-soat',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './view-data-soat.component.html'
})
export class ViewDataSoatComponent implements OnInit {
    soatInfo = signal<SoatVehicleResponse>({} as SoatVehicleResponse);

    constructor(
        private readonly soatDataService: SoatDataService,
        private readonly router: Router
    ) {}
  
    ngOnInit(): void {
        const data = this.soatDataService.getData();
        if (data) {
            this.soatInfo.set(data);
        } else {
            this.router.navigate(['/verificarSoat']);
        }
    }

    back(): void {
        this.soatDataService.clearData();
        this.router.navigate(['/verificarSoat']);
    }
}