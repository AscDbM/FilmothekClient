import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';

import { Movie } from '../Models/movie';
import { MovieService } from '../services/movie.service';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';
import { Table } from '../Models/table';
import { MatTabGroup } from '@angular/material';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit  {


  movies: Movie[] = [];
  movieTable: Table[] = [];
  displayedColumns: string[] = ['index','entry'];

  constructor(
    private movieService: MovieService,
    private userService: UserService,

  ) { }

  ngOnInit() {
   this.createMoviesTable();
   console.log(this.movieTable)
  }
 

  createMoviesTable() {
    this.movieService.getAllMovies()
      .subscribe(
          x =>{ this.movies = x;

          this.movies.forEach((m) =>  {
            this.movieTable.push({index: m.id , entry: m.movieName});
            });       
          })
  }
}
