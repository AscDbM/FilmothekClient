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

  getAllAdmins(): Observable<User[]> {
    return this.http.get<User[]>(`${AppSettings.apiUrl}allAdmins`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${AppSettings.apiUrl}allUsers`);
  }

  delete(id:number): Observable<any> {
    return this.http.delete<any>(`${AppSettings.apiUrl}deleteCustomer/${id}`);
  }

  editUserById(user): Observable<User> {
    return this.http.post<User>(AppSettings.apiUrl+"editUserAdmin", user, AppSettings.httpOptions);
  }
  
  editPw(pw: string): Observable<any> {
    return this.http.post<any>(AppSettings.apiUrl+"editPW",pw, AppSettings.httpOptions);
  }

  getHistoryById(id:number): Observable<History[]> {
    return this.http.get<History[]>(AppSettings.apiUrl+"history/"+id);
  }

  getAdminHistoryById(id:number): Observable<History[]> {
    return this.http.get<History[]>(AppSettings.apiUrl+"adminhistory/"+id);
  }
  
  editAdmin(user:User):Observable<User> {
    return this.http.put<User>(AppSettings.apiUrl+"editAdmin",user,AppSettings.httpOptions)
  }

  createAdmin(user:User):Observable<User> {
    return this.http.post<User>(AppSettings.apiUrl+"createAdmin",user,AppSettings.httpOptions);
  }

  deleteAdmin(id:number):Observable<any> {
    return this.http.delete<any>(AppSettings.apiUrl+"deleteAdmin/"+id);
  }
}