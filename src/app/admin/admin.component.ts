import { Component, OnInit, Injectable, ViewChild, AfterViewInit } from '@angular/core';
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



export class AdminComponent implements AfterViewInit, OnInit  {

  customers = [1,2,3,4,5];
  movies: Movie[] = [];
  movieTable: Table[] = [];
  loadedMovies = false;
  users: User[] = [];
  userTable: Table[] = [];
  loadedUsers = false;
  displayedColumns: string[] = ['index','entry'];
  //tabGroup = new MatTabGroup();


  //@ViewChild('tabGroup') tabGroup;
  constructor(
    private movieService: MovieService,
    private userService: UserService,
    //private tabGroup: MatTabGroup 
    //private tabGroup: MatTabGroup
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    /*this.tabGroup = {  }
    while(!this.loadedMovies) {
      if(this.tabGroup.selectedIndex=2)
      this.createTable();
    }*/
    this.createMoviesTable();
  }


  

  createMoviesTable() {
    this.movieService.getAllMovies()
      .subscribe(
          x =>{ this.movies = x;

          this.movies.forEach((m) =>  {
            this.movieTable.push({index: m.id , entry: m.movieName});
            /*console.log(this.movieTable[i].entry)*/});       
          })
  }
}
