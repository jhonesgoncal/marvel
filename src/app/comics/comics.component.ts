import { Component, OnInit } from '@angular/core'
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { Comic} from './comic/comic.model'
import {ComicsService} from './comics.service'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/from'

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

  constructor(private comicsService: ComicsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(searchTerm => this.comicsService.comics(searchTerm)
      .catch(error=> Observable.from([])))
    .subscribe(comics => this.comics = comics)
    
    this.comicsService.comics().subscribe(comics => this.comics = comics)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden'? 'visible': 'hidden'
  }
}
