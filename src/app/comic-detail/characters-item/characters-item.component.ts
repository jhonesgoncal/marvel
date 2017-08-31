import { Component, OnInit, Input } from '@angular/core'
import { CharacterItem } from './character-item.model'

@Component({
  selector: 'mr-characters-item',
  templateUrl: './characters-item.component.html',
  styleUrls: ['./characters-item.component.css']
})
export class CharactersItemComponent implements OnInit {

  @Input() characterItem: CharacterItem
  constructor() { }

  ngOnInit() {
    
  }

}
