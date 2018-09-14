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

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements AfterViewInit, OnInit  {

  customers = [1,2,3,4,5];
  movies: Movie[];
  movieTable: Table[];
  loadedMovies = false;
  //tabGroup = new MatTabGroup();


  //@ViewChild('tabGroup') tabGroup;
  constructor(
    private movieService: MovieService,
    //private tabGroup: MatTabGroup 
    //private tabGroup: MatTabGroup
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //this.tabGroup = {  }
    while(!this.loadedMovies) {
      if(this.tabGroup.selectedIndex=2)
      this.createTable();
    }
  }


  

  createTable() {
    this.movieService.getAllMovies()
        .subscribe(x => this.movies = x);
    this.movies.forEach(function(m, i,) {
      this.movieTable.push(i,m.movieName);
      console.log(this.movieTable[i]);
    });
  }
}
