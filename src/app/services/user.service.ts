import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../Models/user';
import { AppSettings } from '../appSettings';
import { Payment } from '../Models/payment';
import { History } from '../Models/history';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(AppSettings.apiUrl+"user");
    //.pipe(catchError(this.handleError('', {}) //implement an error handler
  }

  getUserById(id:number): Observable<User> {
    return this.http.get<User>(AppSettings.apiUrl+"user/"+id);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${AppSettings.apiUrl}register`, user, AppSettings.httpOptions);
  }

  getPayment(): Observable<Payment> {
    return this.http.get<Payment>(`${AppSettings.apiUrl}payment`);
  }

  editPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${AppSettings.apiUrl}addpayment`, payment, AppSettings.httpOptions)
  }

  getHistory(): Observable<History[]> {
    return this.http.get<History[]>(`${AppSettings.apiUrl}history`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${AppSettings.apiUrl}allUsers`);
  }

  delete(id:number): Observable<any> {
    return this.http.delete<any>(`${AppSettings.apiUrl}deleteCustomer/${id}`);
  }

  editUser(user): Observable<User> {
    return this.http.post<User>(AppSettings.apiUrl+"editUser", user, AppSettings.httpOptions);
  }
  

  // /** POST: add a new hero to the server */
  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>((this.heroesUrl), hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.heroId}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }
  
  /* error handerl
  private handleError(???)
  */
}