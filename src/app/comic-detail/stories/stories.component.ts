import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {ComicsService} from '../../comics/comics.service'
import { Observable } from 'rxjs/Observable'
import {trigger, state, style, transition, animate} from '@angular/animations'


@Component({
  selector: 'mr-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  animations:[
    trigger('storieAppeared',[
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class StoriesComponent implements OnInit {

  storieStates = 'ready'

  stories: Observable<any[]>
  constructor(private comicsService: ComicsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
      this.comicsService.storiesOfComic(this.route.parent.snapshot.params['id'])
      .subscribe(stories => this.stories = stories)
  }

}
