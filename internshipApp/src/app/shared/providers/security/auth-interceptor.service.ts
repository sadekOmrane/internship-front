import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();
    if(token){
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }
    return next.handle(req);
  }

  }
  export const AuthInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  }
