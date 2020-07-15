import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    const authToken=this.authService.getToken();
    console.log(authToken);
    if (authToken == null) {
      return next.handle(request);
    }
    const authRequest = request.clone( {
      headers: request.headers.set('Authorization', 'Bearer ' + authToken )
    });
    console.log(authRequest);

    return next.handle(authRequest)
  }
}
