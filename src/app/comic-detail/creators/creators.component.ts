import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {ComicsService} from '../../comics/comics.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mr-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  creators: any[]
  constructor(private comicsService: ComicsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
      this.comicsService.creatorsOfComic(this.route.parent.snapshot.params['id'])
      .subscribe(creators => this.creators = creators);
  }

}
