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
          .map(response => response.json())
    }

    myComicById(id){
        return this.http.get(`http://localhost:9999/comics/${id}`)
          .map(response => response.json())
    }

    registerComic(data){
        return this.http.post('http://localhost:9999/comics', data)
          .map(response => response.json())
    }
    
    deleteComic(id){
        return this.http.delete(`http://localhost:9999/comics/${id}`)
         .map(response => console.log(`http://localhost:9999/comics/${id}`)) 
    }

    charactersByMyComic(id){
        return this.http.get(`http://localhost:9999/comics/${id}/characters`)
          .map(response => response.json());
    }

    creatorsByMyComic(id){
        return this.http.get(`http://localhost:9999/comics/${id}/creators`)
          .map(response => response.json());
    }

    storiesByMyComic(id){
        return this.http.get(`http://localhost:9999/comics/${id}/stories`)
          .map(response => response.json());
    }

    registerCharacterMyComic(data){
        return this.http.post(`http://localhost:9999/characters`, data)
        .map(response => response.json());
    }
    includeCharacterMyComic(id, data){
        return this.http.patch(`http://localhost:9999/comics/${id}/characters`, data)
        .map(response => response.json());
    }
}
