import { Component, OnInit, Injectable, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Movie } from '../../Models/movie';
import { MovieService } from '../../services/movie.service';
import { Table } from '../../Models/table';
import { MatTabGroup } from '@angular/material';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { MovieOverviewComponent } from '../movie-overview/movie-overview.component';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})

export class MovieAddComponent implements OnInit {
  addMovieForm: FormGroup;
  submitted = false;

  constructor(        
    public dialogRef: MatDialogRef<MovieAddComponent>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    ) { }

  ngOnInit() {
    this.addMovieForm = this.formBuilder.group({
      movieName: ['', Validators.required],
      genre: ['', Validators.required],
      length: ['', Validators.required],
      isSeries: ['', [Validators.required]],
      rating: ['', [Validators.pattern("\\d.?\\d{0,1}")]],
      price: ['', [Validators.pattern("\\d*.?\\d{2}")]], //Price with . and 2 numbers after
      languageDub: ['', [Validators.required]],
      languageSub: ['', [Validators.required]],
      release: ['', [Validators.required]],
      FSK: ['', [Validators.pattern("\\d{1,2}")]],
      content: ['', [Validators.required]],
      })
  }
  

get f() {return this.addMovieForm.controls}

  onSubmit() {
    this.submitted = true;

    //stop if form is filled incorectly
    if (this.addMovieForm.invalid) return;

    this.movieService.addMovie(this.addMovieForm.value)
    .pipe(first())
    .subscribe(
        /*data => {
            this.router.navigate(['/addMovie']);
        }*/
    
    )
  }
}