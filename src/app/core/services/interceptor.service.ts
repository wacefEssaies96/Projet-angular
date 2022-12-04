import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get("skip")){
      return next.handle(req);
    }
    const modifiedReq = req.clone({ 
      headers: req.headers.set('Authorization', 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password"))),
    });
    return next.handle(modifiedReq);
  }
}
