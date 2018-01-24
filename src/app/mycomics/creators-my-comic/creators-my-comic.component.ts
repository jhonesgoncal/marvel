import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ComicsService } from 'app/comics/comics.service';
import { ActivatedRoute } from '@angular/router';
import { CreatorService } from 'app/mycomics/creator.service';

@Component({
  selector: 'mr-creators-my-comic',
  templateUrl: './creators-my-comic.component.html',
  styleUrls: ['./creators-my-comic.component.css'],
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
export class CreatorsMyComicComponent implements OnInit {

  creatorsStates = 'ready'

  creators: any[]
  constructor(private comicsService: ComicsService,
              private creatorService : CreatorService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.comicsService.creatorsByMyComic(this.route.parent.snapshot.params['id']).subscribe(creator => this.creators = creator);
    console.log(this.creators);
  }
  async deleteCreator(id){
    console.log(id);
    await this.creatorService.deleteCreatorMyComic(id).subscribe(response => console.log(response));
    location.reload();
  }
}
