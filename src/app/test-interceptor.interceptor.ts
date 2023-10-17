import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'


@Injectable()
export class TestInterceptorInterceptor implements HttpInterceptor {

  constructor() { }



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = "shxnhsxhxhb";
    let mreq = request.clone({
      method: 'POST',
      body: { product: "one plus 11r" },
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })

    })
    console.log("request Intercepted")
    return next.handle(mreq).pipe(
      catchError((e: any) => {
        // console.log(e);
        if (e.status == 404) {
          console.log("Invalid url")
        }
        return throwError("modified error message")
      })
    );
  }
}
