import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { VerficarSoatModel } from './verificar-soat.model';
import { SoatVehicleResponse } from '../../Soat/models/request/soat-activo';

@Injectable({
  providedIn: 'root'
})
export class VerficarSoatService {
  
  private readonly apiUrl = environment.apiUrl; 
  private readonly NAME_CONTROLLER:string ="SearchPlate";

  constructor(private readonly http: HttpClient) {}

  searchSoat(request:VerficarSoatModel): Observable<SoatVehicleResponse> {
    return this.http.post<SoatVehicleResponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/SearchSoat`,request);
   }
}
