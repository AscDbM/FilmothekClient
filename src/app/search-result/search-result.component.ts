import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Table } from '../Models/table';
import { Movie } from '../Models/movie';
import { Search } from '../Models/search';
import { MovieResults } from '../Models/MovieResults';
import {FormControl} from '@angular/forms';

export interface SortList {
  option: string;
  viewOption: string;
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  keyword: string;
  category = "movieName";
  order = "ASC"
  sort = "movieName"
  length = 50;
  page = 1;
  items = 2;
  pageSizeOptions: number[] = [1,3,10,25];
  moviesResults = new MovieResults;
  
  categoryList: SortList[] = [
    {option: "movieName", viewOption: "Movie name"},
    {option: "genre", viewOption: "Genre"},
    {option: "length", viewOption: "Length"},
    {option: "isSeries", viewOption: "First movies/Last series"},
    {option: "rating", viewOption: "Rating"},
    {option: "price", viewOption: "Price"},
    {option: "languageDub", viewOption: "Language Dub"},
    {option: "languageSub", viewOption: "Language Sub"},
    {option: "release", viewOption: "Release date"},
    {option: "fsk", viewOption: "FSK"},
    {option: "content", viewOption: "Description content"}
  ];
  sortList: SortList[] = [
    {option: "movieName", viewOption: "Movie name A-Z"},
    {option: "genre", viewOption: "Genre A-Z"},
    {option: "length", viewOption: "Length"},
    {option: "isSeries", viewOption: "First movies/Last series A-Z"},
    {option: "rating", viewOption: "Rating"},
    {option: "price", viewOption: "Price"},
    {option: "languageDub", viewOption: "Language Dub A-Z"},
    {option: "languageSub", viewOption: "Language Sub A-Z"},
    {option: "release", viewOption: "Release date"},
    {option: "fsk", viewOption: "FSK"}
  ];
  
  myControl = new FormControl();
  search: Search;
  movieInfo: Movie;
  movies: Movie[] = [];
  movieTable = new Array<Table>();
  displayedColumns: string[] = ['name','genre','length','isSeries','rating','languageDub','languageSub','release','FSK','content','price'];
  constructor(
    private movieService: MovieService,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    ) { }


  ngOnInit() {
  }
  

setPageSizeOptions(setPageSizeOptionsInput: string) {
  this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
}
  
createMoviesTable() {
  this.movieService.searchMovie(this.keyword, this.category, this.page, this.items, this.sort, this.order)
    .subscribe(x => {
      this.moviesResults = x;
    });
    // this.movieService.getAllMovies()
    //   .subscribe();
  }
}

