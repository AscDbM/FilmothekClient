import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../Models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  urlId: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.urlId = +this.route.snapshot.url.toString().slice(6)
    //console.log(this.urlId);
    this.getMovie(this.urlId)
  }

  getMovie(id:number) {
    this.movieService.getMovieById(id)
      .subscribe(x => this.movie = x);
  }

  Rent() {
    this.movieService.rent(this.urlId)
      .subscribe();
  }

  Watch(): boolean {
    let permission = false;
    this.movieService.checkIfRented(this.urlId)
      .subscribe(x => permission = x);
    return permission;
  }

}
