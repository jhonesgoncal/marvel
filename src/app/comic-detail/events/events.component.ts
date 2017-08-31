import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {ComicsService} from '../../comics/comics.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mr-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Observable<any[]>
  constructor(private comicsService: ComicsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
      this.events = this.comicsService.eventsOfComic(this.route.parent.snapshot.params['id'])
  }

}
