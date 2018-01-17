import {Comic} from "./comic/comic.model"
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import {CharacterItem} from '../comic-detail/characters-item/character-item.model'
import {BaseService} from './../base.service'
import { Http } from "@angular/http";

@Injectable()
export class ComicsService{
   
    constructor(private baseService : BaseService, private http: Http){}
    
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

    myComics(){
        return this.http.get('http://localhost:9999/comics')
        .map(response => response.json().results)
    }
}