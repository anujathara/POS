import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { SpinnerService } from '../broadcast-service/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class SqlService {
  constructor(private http: HttpClient, private spinner: SpinnerService) { }
  // getProductByName(SearchType: number, SearchText: string): Observable<any> {
  //   return this.http.post("http://localhost:5000/getProductByName", {searchType: SearchType, searchText: SearchText}, {responseType: 'json'}).pipe(
  //     catchError(this.handleError('get'))
  //   );
  // }

  getProductList(): Observable<any> {
    this.spinner.spinner(true);
    return this.http.get("http://localhost:5000/getProductList", { responseType: 'json' }).pipe(
      tap(response => this.handleResponse(response)),
      catchError(this.handleError('getProductList', []))
    );
  }

  getMenuItems(): Observable<any> {
    this.spinner.spinner(true);
    return this.http.get("http://localhost:5000/getMenuItems", { responseType: 'json' }).pipe(
      tap(response => this.handleResponse(response)),
      catchError(this.handleError('getMenuItems', []))
    );
  }

  private handleResponse(response?: any): any {
    this.spinner.spinner(false);
    return response;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}