import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { CatalogResponse } from '../models/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private readonly apiUrl = environment.apiUrl; 
  private readonly NAME_CONTROLLER:string ="Catalog";

  constructor(private readonly http: HttpClient) {}

  getDepartments(): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultDepartment`);
  }

  getProvinces(department:string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultProvince/${department}`);
  }
  getDistricts(department: string, province: string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultDistrict/${department}/${province}`);
  }
  getUso(clase:string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultUso/${clase}`);
  }
  getCategories(clase:string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultCategories/${clase}`);
  }
  getClasses(): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultClase`);
  }
  getMarcas(clase:string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/LaPositiva/ConsultMarca/${clase}`);
  }
  getModelo(marca:string,clase:string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/LaPositiva/ConsultModelo?idMarca=${marca}&idClase=${clase}`);
  }
  getVersion(modelo:string,marca:string,clase:string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/ConsultVersion?idModelo=${modelo}&idMarca=${marca}&idClase=${clase}`);
  }

  getMarcasRimac(descMarca:string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/Rimac/ConsultMarca/${descMarca}`);
  }
  getModeloRimac(codMarca:string,descModelo:string): Observable<CatalogResponse[]> {
    return this.http.get<CatalogResponse[]>(`${this.apiUrl}${this.NAME_CONTROLLER}/Rimac/ConsultModelo?idMarca=${codMarca}&idClase=${descModelo}`);
  }
}
