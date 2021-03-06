import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppSettings } from '../appSettings';
import { Movie } from '../Models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(AppSettings.apiUrl+'movies')
  } 

  getMovieById(id:number): Observable<Movie> {
    return this.http.get<Movie>(AppSettings.apiUrl+`movie/${id}`)
  }

  rent(id:number):Observable<number> {
    return this.http.post<number>(AppSettings.apiUrl+'rent', id, AppSettings.httpOptions);
  }

  checkIfRented(id:number): Observable<boolean> {
    return this.http.get<boolean>(AppSettings.apiUrl+`check/${id}`)
  }

  addMovie(movie:Movie): Observable<Movie> {
    return this.http.post<Movie>(`${AppSettings.apiUrl}addMovie`, movie, AppSettings.httpOptions);
  }

  delete(id:number):Observable<any> {
    return this.http.delete<any>(AppSettings.apiUrl+`deleteMovie/${id}`, AppSettings.httpOptions);
  }

  editMovie(movie:Movie): Observable<any> {
    return this.http.put<any>(AppSettings.apiUrl+`editMovie`,movie,AppSettings.httpOptions);
  }

  searchMovie( keywords:string, category:string, page:number, items:number, sort:string, order:string): Observable<any> {
    return this.http.get<any>(AppSettings.apiUrl+`movies/${keywords}/${category}/${page}/${items}/${sort}/${order}`, AppSettings.httpOptions);
  }
}
