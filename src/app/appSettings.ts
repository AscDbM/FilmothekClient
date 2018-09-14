import { HttpHeaders } from '@angular/common/http';

export class AppSettings {
  public static readonly apiUrl ="http://localhost:60000/api/"
  public static readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  public static readonly imgUrl ="https://angular.io/assets/images/logos/angular/angular.svg";
  public static readonly imgLocal ="./image/favicon.ico";
}