import { Component, OnInit } from '@angular/core';
import { CharacterItem } from 'app/comic-detail/characters-item/character-item.model';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from 'app/comics/comics.service';

@Component({
  selector: 'mr-characters-my-comic',
  templateUrl: './characters-my-comic.component.html',
  styleUrls: ['./characters-my-comic.component.css']
})
export class CharactersMyComicComponent implements OnInit {
  myComic = true;
  
  character: CharacterItem[]
  constructor(private comicsService: ComicsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.comicsService.charactersByMyComic(this.route.parent.snapshot.params['id']).subscribe(character => this.character = character);
  }

}
