import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {ComicsService} from '../../comics/comics.service'
import {CharacterItem} from '../characters-item/character-item.model'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mr-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    character: CharacterItem[]
    id : any

  constructor(private comicsService: ComicsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
      this.comicsService
      .characterOfComic(this.route.parent.snapshot.params['id'])
      .subscribe(character => this.character = character)

      this.id = this.route.parent.snapshot.params['id']
  }

  
}
