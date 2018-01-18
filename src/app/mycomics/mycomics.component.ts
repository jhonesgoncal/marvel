import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'app/comics/comics.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'app/comics/comic/comic.model';
import { AsyncPipe } from '@angular/common/src/pipes';
import { Base64 } from 'js-base64';
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'mr-mycomics',
  templateUrl: './mycomics.component.html',
  styleUrls: ['./mycomics.component.css']
})
export class MycomicsComponent implements OnInit {
  image: any;
  comics: Comic[];
  constructor(private comicsService: ComicsService, private fb: FormBuilder, private router : ActivatedRoute) { }

  ngOnInit() {
    let registerComic = document.querySelector("#registerComic");
    this.comicsService.myComics().subscribe(comic => this.comics = comic);

    registerComic.addEventListener("click", function(event){
      event.preventDefault();
      const titleComic  = (<HTMLInputElement>document.querySelector('#title-comic')).value;
      const imageComic = (<HTMLInputElement>document.querySelector('#image-comic'));
      const descComic  = (<HTMLInputElement>document.querySelector('#desc-comic')).value;
      //const image = Base64.encode(imageComic);
      const extension = imageComic.value.split('.')[1]
      //console.log(this.image)
     
      
    });

  }
  getImagem(readerEvt, midia){
    console.log('change no input file', readerEvt);
    let file = readerEvt.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        image = reader.result;
        midia.binario = btoa(reader.result);
        console.log('base64 do arquivo codificado',midia.binario);
    };
    reader.onerror = function (error) {
        console.log('Erro ao ler a imagem : ', error);
    };
}


}
