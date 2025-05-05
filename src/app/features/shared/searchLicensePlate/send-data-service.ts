import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SoatVehicleResponse } from '../../Soat/models/request/soat-activo';

@Injectable({
  providedIn: 'root'
})
export class SoatDataService {
  private readonly STORAGE_KEY = 'soat_data';
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setData(data: SoatVehicleResponse): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }
  }

  getData(): SoatVehicleResponse | null {
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    }
    return null;
  }

  clearData(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }
}
