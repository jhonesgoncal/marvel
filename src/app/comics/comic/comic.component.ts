import { Component, OnInit, Input } from '@angular/core'
import { Comic } from './comic.model'
import {trigger, state, style, transition, animate} from '@angular/animations'
import { ComicsService } from 'app/comics/comics.service';


@Component({
  selector: 'mr-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
  animations:[
    trigger('comicAppeared',[
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ComicComponent implements OnInit {

  comicState = 'ready'

  @Input() comic: Comic
  @Input() myComics : boolean
  constructor(private comicsService : ComicsService) { }

  ngOnInit() {
    console.log(this.myComics)
  }

  async deleteComic(id){
    console.log(id);
    await this.comicsService.deleteComic(id).subscribe(response => console.log(response));
    location.reload();
  }

}
