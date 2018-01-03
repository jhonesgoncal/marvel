import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { ComicsService } from '../comics/comics.service'
import { Comic } from '../comics/comic/comic.model'

@Component({
  selector: 'mr-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  comic : Comic

  constructor(private comicsService : ComicsService, private router : ActivatedRoute) { }

  ngOnInit() {
    this.comicsService.comicById(this.router.snapshot.params['id'])
    .then(response => 
      this.comic = response.data.results[0])
    
  }

  
}
