import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../Models/movie';
import { AppSettings } from '../../appSettings';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  urlId: number;
  imgUrl=AppSettings.imgUrl;
  isFullscreen = false;
  isRented = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.urlId = +this.route.snapshot.url.toString().slice(6)
    //console.log(this.urlId);
    this.getMovie(this.urlId);
    this.rentState(this.urlId);
  }

  getMovie(id:number) {
    this.movieService.getMovieById(id)
      .subscribe(x => this.movie = x);
  }

  async rent() {
    console.log(this.urlId);
    await this.movieService.rent(this.urlId)
      .subscribe();
    this.rentState(this.urlId);
  }

  rentState(id:number) {
    this.movieService.checkIfRented(id)
      .subscribe(x => this.isRented = x);
  }

  watch() {
    this.isFullscreen=true;
  }

}
