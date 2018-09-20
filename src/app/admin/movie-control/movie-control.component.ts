import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Movie } from '../../Models/movie';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AppSettings } from '../../appSettings';
import { UserService } from '../../services/user.service';
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-movie-control',
  templateUrl: './movie-control.component.html',
  styleUrls: ['./movie-control.component.css']
})
export class MovieControlComponent implements OnInit {

  //@Input() newMovie = new Movie;
  @Input() movie = this.data;
  urlId: number;
  imgUrl=AppSettings.imgUrl;
 
  constructor(
    public dialogRef: MatDialogRef<MovieControlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
    ) { }

   ngOnInit() {
  //   // this.urlId = +this.route.snapshot.url.toString().slice(10);
  //   // console.log(this.urlId);
  //   this.getMovie(this.movie.id);
   }

  getMovie(id:number) {
    this.movieService.getMovieById(id)
      .subscribe(x => this.movie = x );
  }

  send() {
    // console.log(this.newMovie.id+"\n"+this.newMovie.fsk+"\n"+this.newMovie.length)
    this.movieService.editMovie(this.movie)
      .subscribe();
    this.dialogRef.close();
<<<<<<< HEAD
    this.movieService.getAllMovies()
      .subscribe();
=======
>>>>>>> b63db5ab0a619a182f678528ce8285ab1bdf89e8
  }
  close()  {    
    this.dialogRef.close();
  }
}