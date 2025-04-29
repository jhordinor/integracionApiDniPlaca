import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { inject } from '@angular/core';
import { TabService } from '../../features/soat/la-positiva/components/steps/tab.service';

export const LoaderInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  console.log('intercepta',req)
  const loadService = inject(TabService); 
  loadService.show();
  return next(req).pipe(
    finalize(() => {
        loadService.hide(); 
    })
  );
};
