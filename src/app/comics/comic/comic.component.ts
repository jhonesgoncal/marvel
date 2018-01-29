import { Component, OnInit, Input } from '@angular/core'
import { Comic } from './comic.model'
import {trigger, state, style, transition, animate} from '@angular/animations'
import { ComicsService } from 'app/comics/comics.service';
import { MyComicService } from 'app/mycomics/mycomic.service';
import { NotificationsService } from 'angular4-notify';


@Component({
  selector: 'mr-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
  animations:[
    trigger('comicAppeared',[
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ComicComponent implements OnInit {

  comicState = 'ready'
  image : any
  id : any
  extension: any
  @Input() comic: Comic
  @Input() myComics : boolean
  constructor( private comicsService : MyComicService) { }

  ngOnInit() {
    console.log(this.myComics)
  }

  async deleteComic(id){
    console.log(id);
    await this.comicsService.deleteComic(id).subscribe(response => console.log(response));
    location.reload();
  }
  async editComic(id){
    await this.comicsService.myComicById(id).subscribe(response => this.comic = response);
    let titleComic  = (<HTMLInputElement>document.querySelector('#title-comic-edit'));
    let imageComic = (<HTMLInputElement>document.querySelector('#image-comic-edit'));
    let descComic  = (<HTMLInputElement>document.querySelector('#desc-comic-edit'));
    let idComic  = (<HTMLInputElement>document.querySelector('#id'));
    let img = (<HTMLImageElement>document.querySelector('#imgPreview-edit'));
    let imgAlt = (<HTMLElement>img);
    imgAlt.classList.remove('hide');
    titleComic.value = this.comic.title;
    console.log(this.comic.title)
    descComic.value = this.comic.description;
    img.src = `${this.comic.thumbnail.path }.${this.comic.thumbnail.extension}`;
    idComic.value = id;
  }

  getImagem(readerEvt, midia){
    let file = readerEvt.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async() => {
        this.image = await reader.result;
        const imagePreview = document.querySelector('.image-preview-edit');
        let img = (<HTMLImageElement>document.querySelector('#imgPreview-edit'));
        img.src = this.image;
        let imgAlt = (<HTMLElement>img);
        imgAlt.classList.remove('hide');
        img.setAttribute("style", "max-width='500'")
        imagePreview.innerHTML = '';
        imagePreview.appendChild(imgAlt);
    };
  }

  updateComic(id,event){
    const titleComic  = (<HTMLInputElement>document.querySelector('#title-comic-edit'));
    let inputImageComic = (<HTMLInputElement>document.querySelector('#image-comic-edit'));
    const imageComic = (<HTMLInputElement>document.querySelector('#imgPreview-edit'));
    let idComic  = (<HTMLInputElement>document.querySelector('#id'));
    let extension;
    if(this.isUrl(imageComic.src)){
      this.image = this.comic.thumbnail.path;
      extension = this.comic.thumbnail.extension;
    }else{
      extension =  inputImageComic.value.split('.')[1].toLowerCase();
    }
    
    const descComic  = (<HTMLInputElement>document.querySelector('#desc-comic-edit'));
    const modal = document.querySelector("#exampleModal-edit");
    console.log(this.image)

    const data = {
      title: titleComic.value,
      description: descComic.value,
      thumbnail: {
        path: this.image,
        extension: extension
      }
    }
    console.log(data)
     
    this.comicsService.updateMyComoc(idComic.value,data).subscribe(response => console.log(response));
    
    location.reload();
    
  }

  isUrl(value){
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return regex.test(value);
  }



}
