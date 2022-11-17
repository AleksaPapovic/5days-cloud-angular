import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order';
import { OrderRequest } from '../model/orderRequest';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = `${environment.apiUrl}/order`;

  constructor(private http: HttpClient) {}

  getOrder(id:number): Observable<Order> {
    return this.http
      .get<Order>(`${this.orderUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createOrderTrade(orderRequest: OrderRequest):Observable<Order>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http
    .post<any>(`${this.orderUrl}`,orderRequest,{headers:headers})
    .pipe(catchError(this.handleError));
  }
  
  deleteAll():Observable<String>{
    return this.http
    .delete<any>(`${this.orderUrl}/all`)
    .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }

}
