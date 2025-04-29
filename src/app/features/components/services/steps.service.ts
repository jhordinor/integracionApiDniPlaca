import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PersonResponse } from '../models/person-info.model';
import { DatosPropietarioRequest } from '../models/request/datos-propietario.model';
import { DataVehicleRequest } from '../models/request/datos-vehiculo.model';
import { DatosGeneralesRequest } from '../models/request/datos-generales.model';
import encUtf8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private readonly keyEncrypted = environment.keyEncrypted
  private readonly apiUrl = environment.apiUrl; 
  private readonly NAME_CONTROLLER:string ="Document";

  constructor(private readonly http: HttpClient) {}

  getDataByDni(documentId: string): Observable<PersonResponse> {
    return this.http.post<PersonResponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/dni`, { dni: documentId });
  }
  postDataByDni(dni: string, includeData: boolean = false): Observable<any> {
  return this.http.post(`${this.apiUrl}${this.NAME_CONTROLLER}/dni?includeData=${includeData}`, { dni });
}

  getDataByRuc(documentId:string): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.NAME_CONTROLLER}/ruc`, { ruc: documentId });
  }
  getDataByCE(documentId:string): Observable<PersonResponse> {
    return this.http.post<PersonResponse>(`${this.apiUrl}${this.NAME_CONTROLLER}/ce`, { ce: documentId });
  }

  removeDataClient() {
    if (typeof window !== 'undefined' && localStorage.getItem('data-client')) {
      localStorage.removeItem('data-client')
    }
  }

  removeDataVehicle() {
    if (typeof window !== 'undefined' && localStorage.getItem('data-vehicle')) {
      localStorage.removeItem('data-vehicle')
    }
  }

  removeDataGeneral() {
    if (typeof window !== 'undefined' && localStorage.getItem('data-general')) {
      localStorage.removeItem('data-general')
    }
  }

  setDataClient(data: DatosPropietarioRequest) {
    if (typeof window === 'undefined') return;
    try {
      const dataString = JSON.stringify(data);
      const dataEncrypted = AES.encrypt(dataString, this.keyEncrypted).toString(); 
      localStorage.setItem('data-client', dataEncrypted);
    } catch (error) {
      console.error('Error encrypting data', error);
    }
  }

  getDataClient(): DatosPropietarioRequest | null {
    if (typeof window === 'undefined') return null;
    try {
      const encryptedData: string | null = localStorage.getItem('data-client');
      if (!encryptedData) {
        return null;
      }
      const bytes = AES.decrypt(encryptedData, this.keyEncrypted);
      const decryptedData = bytes.toString(encUtf8);
      return JSON.parse(decryptedData);
    } catch (error) {
      console.error('Error decrypting data', error);
      return null;
    }
  }

  setDataVehicle(data:DataVehicleRequest) {
    if (typeof window === 'undefined') return;
    try {
      const dataString = JSON.stringify(data);
      const dataEncrypted = AES.encrypt(dataString, this.keyEncrypted).toString(); 
      localStorage.setItem('data-vehicle', dataEncrypted);
    } catch (error) {
      console.error('Error encrypting data', error);
    }
  }

  getDataVehicle():DataVehicleRequest | null { 
    if (typeof window === 'undefined') return null;
    try {
      const encryptedData: string | null = localStorage.getItem('data-vehicle');
      if (!encryptedData) {
        return null;
      }
      const bytes = AES.decrypt(encryptedData, this.keyEncrypted);
      const decryptedData = bytes.toString(encUtf8);
      return JSON.parse(decryptedData);
    } catch (error) {
      console.error('Error decrypting data', error);
      return null;
    }
  }

  setDataGeneral(data:DatosGeneralesRequest) {
    if (typeof window === 'undefined') return;
    try {
      const dataString = JSON.stringify(data);
      const dataEncrypted = AES.encrypt(dataString, this.keyEncrypted).toString(); 
      localStorage.setItem('data-general', dataEncrypted);
    } catch (error) {
      console.error('Error encrypting data', error);
    }
  }

  getDataGeneral():DatosGeneralesRequest | null { 
    if (typeof window === 'undefined') return null;
    try {
      const encryptedData: string | null = localStorage.getItem('data-general');
      if (!encryptedData) {
        return null;
      }
      const bytes = AES.decrypt(encryptedData, this.keyEncrypted);
      const decryptedData = bytes.toString(encUtf8);
      return JSON.parse(decryptedData);
    } catch (error) {
      console.error('Error decrypting data', error);
      return null;
    }
  }
}