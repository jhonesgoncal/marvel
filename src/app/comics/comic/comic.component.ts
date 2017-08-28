import { Component, OnInit, Input } from '@angular/core'
import { Comic } from './comic.model'

@Component({
  selector: 'mr-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic: Comic

  constructor() { }

  ngOnInit() {
  }

}
