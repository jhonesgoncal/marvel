import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {ComicsService} from '../../comics/comics.service'
import { Observable } from 'rxjs/Observable'
import {trigger, state, style, transition, animate} from '@angular/animations'
import { StorieService } from 'app/mycomics/storie.service';


@Component({
  selector: 'mr-stories-my-comic',
  templateUrl: './stories-my-comic.component.html',
  styleUrls: ['./stories-my-comic.component.css'],
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
export class StoriesMyComicComponent implements OnInit {

  storieStates = 'ready'

  stories: any[] 
  constructor(private comicsService: ComicsService,
              private storieService: StorieService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.comicsService.storiesByMyComic(this.route.parent.snapshot.params['id']).subscribe(storie => this.stories = storie);
  }

  async deleteStorie(id){
    console.log(id);
    await this.storieService.deleteStorieMyComic(id).subscribe(response => console.log(response));
    location.reload();
  }

}
