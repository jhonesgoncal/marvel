import {Comic} from "./comic/comic.model"
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'
import {Observable} from 'rxjs/Observable'
import {Md5} from 'ts-md5/dist/md5'
import {CharacterItem} from '../comic-detail/characters-item/character-item.model'
import {BaseService} from './../base.service'
import MarvelWrapper from 'marvel-wrapper'

@Injectable()
export class ComicsService{
   
    constructor(private http: Http, private baseService : BaseService){}
    
    private marvel = this.baseService.marvel();

    comics(search?: string){
        if(search){
            return this.marvel.comic.search(search);
        }
        return this.marvel.comic.getComics();
    }

    comicById(id: string){
        return this.marvel.comic.getComic(id);
    }

    storiesOfComic(id: string){
        return this.marvel.comic.getStories(id);
    }

    characterOfComic(id: string){
        return this.marvel.comic.getCharacters(id);
    }

    creatorsOfComic(id: string){
        return this.marvel.comic.getCreators(id);
       
    }

}