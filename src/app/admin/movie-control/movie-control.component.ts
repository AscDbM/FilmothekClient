import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Movie } from '../../Models/movie';
import { AppSettings } from '../../appSettings';
import { UserService } from '../../services/user.service';
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-movie-control',
  templateUrl: './movie-control.component.html',
  styleUrls: ['./movie-control.component.css']
})
export class MovieControlComponent implements OnInit {

  @Input() movie = new Movie;
  urlId: number;
  imgUrl=AppSettings.imgUrl;
 
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.urlId = +this.route.snapshot.url.toString().slice(10);
    console.log(this.urlId);
    this.getMovie(this.urlId);
  }

  getMovie(id:number) {
    this.movieService.getMovieById(id)
      .subscribe(x => this.movie = x );
  }

  send() {
    console.log(this.movie.id+"\n"+this.movie.fsk+"\n"+this.movie.length)
    this.movieService.editMovie(this.movie)
      .subscribe();
  }
}