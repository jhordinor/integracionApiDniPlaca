import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false); // Inicia en 'false'
  loading$ = this.loadingSubject.asObservable(); // Exponer como observable

  // Cambia el estado a true para mostrar el loader
  show(): void {
    console.log('Loader ON'); // Para depuración
    this.loadingSubject.next(true);
  }

  // Cambia el estado a false para ocultar el loader
  hide(): void {
    console.log('Loader OFF'); // Para depuración
    this.loadingSubject.next(false);
  }

}
