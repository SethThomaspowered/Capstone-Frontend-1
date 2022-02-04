import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    let token = this.token.getToken();
    if (token != null) {
      authReq = this.setHeader(authReq, token); 
      // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }

  private setHeader(authReq: HttpRequest<any>, token: string): HttpRequest<any> {
    authReq = authReq.clone({
      setHeaders: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqd0B1cm1haWwuY29tIiwiZXhwIjoxNjQ0MTQ1MTAwLCJpYXQiOjE2NDM5NzIzMDB9.y6RzwwCiN0d3WRO9WMtlYo0gj8fIZtrzfhUKUwmMGE0`
      }
    });

    return authReq;
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

