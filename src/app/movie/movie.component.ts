import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../Models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie[];
  //m = this.movie[0];

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
