import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SearchPlateRequest } from '../models/request/search-plate.model';
import { SoatVehicleResponse } from '../models/request/soat-activo';

@Injectable({
  providedIn: 'root'
})
export class SearchPlateService {
  private readonly apiUrl = environment.apiUrl;
  private readonly NAME_CONTROLLER = 'SearchPlate';

  constructor(private readonly http: HttpClient) {}

  sendDataHistory(request: SearchPlateRequest): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}${this.NAME_CONTROLLER}/SendDataHistory`, request)
      .pipe(
        catchError(error => {
          console.error('Error in sendDataHistory:', error);
          return throwError(() => error);
        })
      );
  }

  searchDateEndSoat(placa: string): Observable<SoatVehicleResponse> {
    return this.http.get<SoatVehicleResponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/SearchDateEndSoat/${placa}`)
      .pipe(
        catchError(error => {
          console.error('Error in searchDateEndSoat:', error);
          return throwError(() => error);
        })
      );
  }
}
