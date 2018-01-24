import { Component, OnInit } from '@angular/core';
import { Comic } from 'app/comics/comic/comic.model';
import { ComicsService } from 'app/comics/comics.service';
import { ActivatedRoute } from '@angular/router';
import { MyComicService } from 'app/mycomics/mycomic.service';
import { CharacterService } from 'app/mycomics/character.service';
import { StorieService } from 'app/mycomics/storie.service';
import { CreatorService } from 'app/mycomics/creator.service';

@Component({
  selector: 'mr-mycomic-details',
  templateUrl: './mycomic-details.component.html',
  styleUrls: ['./mycomic-details.component.css']
})
export class MycomicDetailsComponent implements OnInit {

  comic : Comic
  myComic = true
  image: any;
  id : any;
  imageCreator: any
  constructor(private comicsService : MyComicService,
              private  characterService : CharacterService, 
              private storieService: StorieService,
              private creatorService : CreatorService,
              private router : ActivatedRoute) { }

  ngOnInit() {
    this.comicsService.myComicById(this.router.snapshot.params['id']).subscribe(comic => this.comic = comic);
  }
  getImagem(readerEvt, midia){
    let file = readerEvt.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async() => {
        this.image = await reader.result;
        const imagePreview = document.querySelector('.image-preview');
        let img = (<HTMLImageElement>document.querySelector('#imgPreview'));
        img.src = this.image;
        let imgAlt = (<HTMLElement>img);
        imgAlt.classList.remove('hide');
        img.setAttribute("style", "max-width='500'")
        imagePreview.innerHTML = '';
        imagePreview.appendChild(imgAlt);
    };
  }

  async registerCharacter(event){
     const nameCharacter  = (<HTMLInputElement>document.querySelector('#name-character')).value;
     const imageCharacter = (<HTMLInputElement>document.querySelector('#image-character'));
     const descCharacter  = (<HTMLInputElement>document.querySelector('#desc-character')).value;
     const modal = document.querySelector("#modalCharacter");
     const extension = imageCharacter.value.split('.')[1].toLowerCase();
     console.log(this.image)

     const data = {
       name: nameCharacter,
       description: descCharacter,
       thumbnail: {
         path: this.image,
         extension: extension
       }
     }
     await this.characterService.registerCharacterMyComic(data).subscribe(character => {
      const dataInclude = {
        character: character._id
      }
      console.log(character._id)
      this.comicsService.includeCharacterMyComic(this.router.snapshot.params['id'], dataInclude).subscribe(response => console.log(response))
     });
      
      this.closeModal()
  }

  async registerStorie(event){
    const titleStorie  = (<HTMLInputElement>document.querySelector('#title-storie')).value;
    const modal = document.querySelector("#modalCharacter");

    const data = {
     title: titleStorie
    }

    await this.storieService.registerStorieMyComic(data).subscribe(storie => {
     const dataInclude = {
       storie: storie._id
     }
     this.comicsService.includeStorierMyComic(this.router.snapshot.params['id'], dataInclude).subscribe(response => console.log(response))
    });
    
     this.closeModal()
 }

 async registerCreator(event){
  const nameCreator  = (<HTMLInputElement>document.querySelector('#name-creator')).value;
  const imgCreator = (<HTMLInputElement>document.querySelector('#image-creator'));
  console.log(imgCreator.value)
  const descCreator  = (<HTMLInputElement>document.querySelector('#desc-creator')).value;
  const modal = document.querySelector("#modalCreator");
  const extension = imgCreator.value.split('.')[1].toLowerCase();
  console.log(extension);

  
  const data = {
    fullName: nameCreator,
    description: descCreator,
    thumbnail: {
      path: this.imageCreator,
      extension: extension
    }
  }
  await this.creatorService.registerCreatorMyComic(data).subscribe(creator => {
   const dataInclude = {
     creator: creator._id
   }
   this.comicsService.includeCreatorMyComic(this.router.snapshot.params['id'], dataInclude).subscribe(response => console.log(response))
   
  });
   
   this.closeModal()
}

getImagemCreator(readerEvt, midia){
  let file = readerEvt.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async() => {
      this.imageCreator = await reader.result;
      const imagePreview = document.querySelector('#image-preview');
      let img = (<HTMLImageElement>document.querySelector('#imgPreviewCreator'));
      img.src = this.imageCreator;
      let imgAlt = (<HTMLElement>img);
      imgAlt.classList.remove('hide');
      img.setAttribute("style", "max-width='500'")
      imagePreview.innerHTML = '';
      imagePreview.appendChild(imgAlt);
  };
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
    let titleComic  = (<HTMLInputElement>document.querySelector('#title-comic'));
    let imageComic = (<HTMLInputElement>document.querySelector('#image-comic'));
    let descComic  = (<HTMLInputElement>document.querySelector('#desc-comic'));
    const imagePreview = (<HTMLImageElement>document.querySelector('#imgPreview'));

    titleComic.value = '';
    imageComic.value = '';
    descComic.value = '';
    imagePreview.src = '';
  }

}
