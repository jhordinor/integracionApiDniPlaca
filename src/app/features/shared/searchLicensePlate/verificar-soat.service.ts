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
  
  private apiUrl = environment.apiUrl; 

  constructor(private readonly http: HttpClient) {}

  searchSoat(request:VerficarSoatModel): Observable<SoatVehicleResponse> {
    this.apiUrl = this.apiUrl.replace("{nroDocumento}",request.nroDocumento)
    this.apiUrl = this.apiUrl.replace("{placa}",request.plate)

    return this.http.get<SoatVehicleResponse>(this.apiUrl);
   }
}
