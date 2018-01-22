import { Component, OnInit, Input } from '@angular/core';
import { Comic } from 'app/comics/comic/comic.model';
import { transition, style, trigger, state, animate } from '@angular/animations';

@Component({
  selector: 'mr-comic-item',
  templateUrl: './comic-item.component.html',
  styleUrls: ['./comic-item.component.css'],
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
export class ComicItemComponent implements OnInit {

  constructor() { }
  @Input() comic: Comic
  ngOnInit() {
  }

}
