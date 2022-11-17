import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderBook } from '../model/orderbook';

@Injectable({
  providedIn: 'root'
})
export class OrderbookService {
  private orderbookUrl = `${environment.apiUrl}/orderbook`;

  constructor(private http: HttpClient) {}

  getOrderBook(): Observable<OrderBook> {
    return this.http
      .get<any>(`${this.orderbookUrl}`)
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
