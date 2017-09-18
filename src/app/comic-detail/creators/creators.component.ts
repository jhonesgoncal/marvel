import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {ComicsService} from '../../comics/comics.service'
import { Observable } from 'rxjs/Observable'
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mr-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
  animations:[
    trigger('creatorsAppeared',[
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class CreatorsComponent implements OnInit {

  creatorsStates = 'ready'

  creators: any[]
  constructor(private comicsService: ComicsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
      this.comicsService.creatorsOfComic(this.route.parent.snapshot.params['id'])
      .subscribe(creators => this.creators = creators);
  }

}
