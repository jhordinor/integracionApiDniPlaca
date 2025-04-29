import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';
import { SearchPlateRequest } from '../models/request/search-plate.model';
import { SoatVehicleResponse } from '../models/request/soat-activo';

@Injectable({
  providedIn: 'root'
})
export class SearchPlateService {

  private readonly apiUrl = environment.apiUrl; 
  private readonly NAME_CONTROLLER:string ="SearchPlate";

  constructor(private readonly http: HttpClient) {}

  sendDataHistory(request:SearchPlateRequest): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}${this.NAME_CONTROLLER}/SendDataHistory`,request);
   }

   SearchDateEndSoat(placa:string ): Observable<SoatVehicleResponse>{
    return this.http.get<SoatVehicleResponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/SearchDateEndSoat/${placa}`);
   }
}
