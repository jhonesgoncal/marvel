import { Component, OnInit } from '@angular/core';
import { Comic } from 'app/comics/comic/comic.model';
import { ComicsService } from 'app/comics/comics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mr-mycomic-details',
  templateUrl: './mycomic-details.component.html',
  styleUrls: ['./mycomic-details.component.css']
})
export class MycomicDetailsComponent implements OnInit {

  comic : Comic
  constructor(private comicsService : ComicsService, private router : ActivatedRoute) { }

  ngOnInit() {
    this.comicsService.myComicById(this.router.snapshot.params['id']).subscribe(comic => this.comic = comic);
  }

}
