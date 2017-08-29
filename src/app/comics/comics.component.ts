import { Component, OnInit } from '@angular/core'
import { Comic} from './comic/comic.model'
import {ComicsService} from './comics.service'

@Component({
  selector: 'mr-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})

export class ComicsComponent implements OnInit {

  comics: Comic[];

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.comicsService.comics().subscribe(comics => this.comics = comics)
  }

}
