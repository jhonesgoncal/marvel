import { Component, OnInit, Input } from '@angular/core'
import { CharacterItem } from './character-item.model'
import {trigger, state, style, transition, animate} from '@angular/animations'
import { CharacterService } from 'app/mycomics/character.service';

@Component({
  selector: 'mr-characters-item',
  templateUrl: './characters-item.component.html',
  styleUrls: ['./characters-item.component.css'],
  animations:[
    trigger('characterItemAppeared',[
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class CharactersItemComponent implements OnInit {
  
  charactersItemStates = 'ready'
  @Input() myComic : any
  @Input() characterItem: CharacterItem
  constructor(private characterService : CharacterService) { }

  ngOnInit() {
    
  }
  async deleteCharacter(id){
    console.log(id);
    await this.characterService.deleteCharacterMyComic(id).subscribe(response => console.log(response));
    location.reload();
  }

}
