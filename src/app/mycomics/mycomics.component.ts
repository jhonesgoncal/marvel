import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'app/comics/comics.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'app/comics/comic/comic.model';
import { AsyncPipe } from '@angular/common/src/pipes';
import { Base64 } from 'js-base64';
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Observable} from "rxjs/Observable";
import { style } from '@angular/core/src/animation/dsl';
import { Response } from '@angular/http/src/static_response';
import { MyComicService } from 'app/mycomics/mycomic.service';
import {NotificationsService} from 'angular4-notify';

@Component({
  selector: 'mr-mycomics',
  templateUrl: './mycomics.component.html',
  styleUrls: ['./mycomics.component.css']
})
export class MycomicsComponent implements OnInit {
  image: any;
  comics: Comic[];
  myComics = true;

  constructor(protected notificationsService: NotificationsService, private comicsService: MyComicService, private fb: FormBuilder, private router : ActivatedRoute) { }

   ngOnInit() {
    let registerComic = document.querySelector("#registerComic-reg");
    this.comicsService.myComics().subscribe(comic => this.comics = comic);
  }

  getImagemRegister(readerEvt, midia){
    let file = readerEvt.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async() => {
        this.image = await reader.result;
        const imagePreview = document.querySelector('.image-preview-reg');
        let img = (<HTMLImageElement>document.querySelector('#imgPreview-reg'));
        img.src = this.image;
        let imgAlt = (<HTMLElement>img);
        imgAlt.classList.remove('hide');
        //img.width = 350;
        //img.style.maxWidth = "520";
        //img.height = 400;
        img.setAttribute("style", "max-width='500'")
        imagePreview.innerHTML = '';
        imagePreview.appendChild(imgAlt);
    };
  }

  registerComic(event){
     const titleComic  = (<HTMLInputElement>document.querySelector('#title-comic-reg')).value;
     const imageComic = (<HTMLInputElement>document.querySelector('#image-comic-reg'));
     const descComic  = (<HTMLInputElement>document.querySelector('#desc-comic-reg')).value;
     const modal = document.querySelector("#exampleModal");
     const extension = imageComic.value.split('.')[1].toLowerCase();
     console.log(this.image)

     const data = {
       title: titleComic,
       description: descComic,
       thumbnail: {
         path: this.image,
         extension: extension
       }
     }

     this.comicsService.registerComic(data).subscribe(response =>
         this.comicsService.myComics().subscribe(comic => this.comics = comic ));
         this.notificationsService.addInfo('Comic registrado com sucesso');
     //location.reload();
     this.closeModal()
  }

  closeModal(){
    const modal = document.querySelector("#exampleModal");
    modal.classList.add('hide');
    const modalBlackdrop = document.querySelector('.modal-backdrop');
    modalBlackdrop.classList.remove('fade');
    modalBlackdrop.classList.remove('in');
    const body = document.querySelector('body');
    
  }

  showModal(){
    const modal = document.querySelector("#exampleModal");
    modal.classList.remove('hide');
    let titleComic  = (<HTMLInputElement>document.querySelector('#title-comic-reg'));
    let imageComic = (<HTMLInputElement>document.querySelector('#image-comic-reg'));
    let descComic  = (<HTMLInputElement>document.querySelector('#desc-comic-reg'));
    const imagePreview = (<HTMLImageElement>document.querySelector('#imgPreview-reg'));

    titleComic.value = '';
    imageComic.value = '';
    descComic.value = '';
    imagePreview.src = '';
  }


}
