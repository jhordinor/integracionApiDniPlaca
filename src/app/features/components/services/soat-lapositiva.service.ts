import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { VehicleResponse } from '../models/vehicle.model';
import { CotizacionRequest } from '../models/request/CotizacionRequest.model';
import { PriceQuoteReponse } from '../models/response/price-quote.model';
import { PlacaRequest } from '../models/request/placa.model';
import { CreateOrdenRequest } from '../models/request/CreateOrdenRequest.model';
import { CreateOrdenReponse } from '../models/response/CreateOrden.model';
import { EmitRequest } from '../models/request/emit.model';
import { EmitResponse } from '../models/response/emit.model';

@Injectable({
  providedIn: 'root'
})
export class SoatLaPositivaService {

  private readonly apiUrl = environment.apiUrl; 
  private readonly NAME_CONTROLLER:string ="SoatLaPositiva";

  constructor(private readonly http: HttpClient) {}

  getVehicelByLicensePlate(request:PlacaRequest): Observable<VehicleResponse> {
    return this.http.post<VehicleResponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultPlate`,request);
   }

   getPriceQuote(request:CotizacionRequest): Observable<PriceQuoteReponse> {
    return this.http.post<PriceQuoteReponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultPriceQuote`,request);
   }

   CreateOrder(request:CreateOrdenRequest): Observable<CreateOrdenReponse> {
    return this.http.post<CreateOrdenReponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/CreateOrder`,request);
   }
   Emit(request:EmitRequest): Observable<EmitResponse> {
    return this.http.post<EmitResponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/Emit`,request);
   }
}

