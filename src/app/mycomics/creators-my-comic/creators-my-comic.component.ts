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
  creator : any
  imgCreator  : any

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

  async editCreator(id){
    let nameCreator  = (<HTMLInputElement>document.querySelector('#name-creator-edit'));
    let imgCreator = (<HTMLInputElement>document.querySelector('#imgPreviewCreator-edit'));
    let descCreator  = (<HTMLInputElement>document.querySelector('#desc-creator-edit'));
    let idCreator = (<HTMLInputElement>document.querySelector('#id'));
    await this.creatorService.getCreatorMyComic(id).subscribe(response => {
      nameCreator.value = response.fullName;
      imgCreator.classList.remove('hide');
      imgCreator.src = response.thumbnail.path + '.' + response.thumbnail.extension;
      descCreator.value = response.description;
      idCreator.value = response._id;
      this.creator = response;
    });
    

   
  }

  async updateCreator(creator, event){
    const nameCreator  = (<HTMLInputElement>document.querySelector('#name-creator-edit'));
    const inputImgCreator = (<HTMLInputElement>document.querySelector('#image-creator-edit'));
    const imgCreator = (<HTMLInputElement>document.querySelector('#imgPreviewCreator-edit'));
    const descCreator  = (<HTMLInputElement>document.querySelector('#desc-creator-edit'));
    const modal = document.querySelector("#modalCreator");
    let idCreator = (<HTMLInputElement>document.querySelector('#id'));
    let extension;

    if(this.isUrl(imgCreator.src)){
      this.imgCreator = this.creator.thumbnail.path;
      extension = this.creator.thumbnail.extension;
    }else{
      extension =  inputImgCreator.value.split('.')[1].toLowerCase();
    }
  
    const data = {
      fullName : nameCreator.value,
      description: descCreator.value,
      thumbnail: {
        path: this.imgCreator,
        extension: extension
      }
    }

    this.creatorService.updateCreatorMyComic(idCreator.value, data).subscribe(response => console.log(response));
    location.reload();
  }
  
  getImagemCreator(readerEvt, midia){
    let file = readerEvt.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async() => {
        this.imgCreator = await reader.result;
        const imagePreview = document.querySelector('#image-preview-edit');
        let img = (<HTMLImageElement>document.querySelector('#imgPreviewCreator-edit'));
        img.src = this.imgCreator;
        let imgAlt = (<HTMLElement>img);
        imgAlt.classList.remove('hide');
        img.setAttribute("style", "max-width='500'")
        imagePreview.innerHTML = '';
        imagePreview.appendChild(imgAlt);
    };
  }

  isUrl(value){
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return regex.test(value);
  }

}
