import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Table } from '../Models/table';
import { Movie } from '../Models/movie';
import { Search } from '../Models/search';

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

  category = "Movie Name";
  order = "ASC"
  sort = "Ascending A-Z"
  length = 50;
  page = 1;
  items = 3;
  keyword = "movie";
  pageSizeOptions: number[] = [3,5,10,25];

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

  search: Search;
  movieInfo: Movie;
  movies: Movie[] = [];
  movieTable = new Array<Table>();
  displayedColumns: string[] = ['index','entry','button','delete'];
  constructor(
    // public dialog: MatDialog,
    private movieService: MovieService,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    ) { }


  ngOnInit() {
    this.createMoviesTable();
  }
  

setPageSizeOptions(setPageSizeOptionsInput: string) {
  this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
}
  
createMoviesTable() {
  this.movieService.searchMovie(this.keyword.trim(), this.category.trim(), this.page, this.items, this.sort.trim(), this.order)
    .subscribe(x => {
      this.movies = x;
      this.length = x.length;
    });
  }
}

