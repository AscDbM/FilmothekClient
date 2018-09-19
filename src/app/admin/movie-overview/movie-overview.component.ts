import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Inject } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Movie } from '../../Models/movie';
import { MovieService } from '../../services/movie.service';
import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';
import { Table } from '../../Models/table';
import { MovieAddComponent } from '../movie-add/movie-add.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit, AfterViewInit {

  animal: string;
  name: string;
  movies: Movie[] = [];
  movieTable = new Array<Table>();
  displayedColumns: string[] = ['index','entry'];

  constructor(
    public dialog: MatDialog,
    private movieService: MovieService,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MovieAddComponent, {
      width: '500px',
    });
  }

  ngOnInit() {
    this.createMoviesTable();
    console.log(this.movieTable);
    this.refresh();
  }

  ngAfterViewInit() {
    //this.createMoviesTable();
    this.refresh();
  }
 

  createMoviesTable() {
    this.movieService.getAllMovies()
      .subscribe(x => {
        this.movies = x;
  /*      this.movies.forEach((m,i) =>  {
   *       this.movieTable.push({index: m.id, entry:m.movieName});
   *     });
   *     this.refresh();
   */   })   
  }

  refresh() {
    this.changeDetectorRef.detectChanges();
  }

  goToAdd() {
    this.router.navigateByUrl("addMovie")
  }
}
