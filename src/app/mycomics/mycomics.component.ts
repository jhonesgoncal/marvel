import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'app/comics/comics.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'app/comics/comic/comic.model';

@Component({
  selector: 'mr-mycomics',
  templateUrl: './mycomics.component.html',
  styleUrls: ['./mycomics.component.css']
})
export class MycomicsComponent implements OnInit {

  comics: Comic[]
  constructor(private comicsService: ComicsService, private fb: FormBuilder, private router : ActivatedRoute) { }

  ngOnInit() {
    
    if(this.router.snapshot.params['mycomics'] == true){
      this.comicsService.myComics().subscribe(comics => this.comics = comics)
    }
  }

}
