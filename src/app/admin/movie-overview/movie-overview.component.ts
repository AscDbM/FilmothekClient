import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Inject } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Movie } from '../../Models/movie';
import { MovieService } from '../../services/movie.service';
import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';
import { Table } from '../../Models/table';
import { MovieAddComponent } from '../movie-add/movie-add.component';
import { MovieControlComponent } from '../movie-control/movie-control.component';

export interface DialogData{
  movieInfo:Movie
}

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit, AfterViewInit {

  movieInfo: Movie;
  movies: Movie[] = [];
  movieTable = new Array<Table>();
  displayedColumns: string[] = ['index','entry','button','delete'];

  constructor(
    public dialog: MatDialog,
    private movieService: MovieService,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  openAdd(): void {
    const dialogRef = this.dialog.open(MovieAddComponent, {
      width: '500px',
    });
  }

  openControl(movie:Movie): void {
    const dialogRef = this.dialog.open(MovieControlComponent, {
      width: '500px',
      data: movie
    });
  }

  delete(id:number) {
    this.movieService.delete(id)
      .subscribe();
    location.reload() 
  }

  ngOnInit() {
    this.createMoviesTable();
    console.log(this.movieTable);
  }

  ngAfterViewInit() {
    //this.createMoviesTable();
  }
 

  createMoviesTable() {
    this.movieService.getAllMovies()
      .subscribe(x => {
        this.movies = x;
  /*      this.movies.forEach((m,i) =>  {
   *       this.movieTable.push({index: m.id, entry:m.movieName});
   *     });
   *     location.reload();
   */   })   
  }

  refresh() {
    location.reload();
  }

  goToAdd() {
    this.router.navigateByUrl("addMovie")
  }
}
