import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Check for network errors or server unavailability
        if (!navigator.onLine) {
          alert('No Internet Connection.');
        } else if (error.status === 0) {
          alert('JSON Server is down or not reachable.');
        } else {
          alert(`Error: ${error.message}`);
        }
        return throwError(() => error);
      })
    );
  }
}
