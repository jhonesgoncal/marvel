import { Component, OnInit } from '@angular/core'
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { Comic} from './comic/comic.model'
import {ActivatedRoute} from '@angular/router'
import {ComicsService} from './comics.service'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'mr-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  animations: [
    trigger('toogleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})

export class ComicsComponent implements OnInit {

  searchBarState = "hidden"

  comics: Comic[]

  searchForm: FormGroup
  searchControl: FormControl
  

  constructor(private comicsService: ComicsService, private fb: FormBuilder, private router : ActivatedRoute) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap(searchTerm => Observable.from(this.comicsService.comics(searchTerm).then(response => 
      response.data.results))
      .catch(error=> Promise.reject([])))
      .subscribe(item => this.comics = item)
      
      this.comicsService.comics().then(response => 
        this.comics = response.data.results);
  

    
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden'? 'visible': 'hidden'
  }
}
