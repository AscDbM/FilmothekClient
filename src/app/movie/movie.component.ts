import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../services/movie.service';
import { Movie } from '../Models/movie';
import { AppSettings } from '../appSettings';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie[];
  //m = this.movie[0];
  imgPath=AppSettings.imgLocal;

  constructor(
    private movieService: MovieService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getAllMovies()
      .subscribe(x => this.movie = x);
  }

  navigateToDetails(id:number) {
    this.router.navigateByUrl(`/movie/${id}`)
  }
 

}
