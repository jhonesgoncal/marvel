import {Comic} from "./../comics/comic/comic.model"
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import {CharacterItem} from '../comic-detail/characters-item/character-item.model'
import {BaseService} from './../base.service'
import { Http } from "@angular/http";
import { MARVEL_API } from "app/app.api";

@Injectable()
export class MyComicService{

    constructor(private http: Http){}

    myComics() : Observable<Comic[]> {
        return this.http.get(`${MARVEL_API}/comics`)
          .map(response => response.json())
    }

    myComicById(id) : Observable<Comic> {
        return this.http.get(`${MARVEL_API}/comics/${id}`)
          .map(response => response.json())
    }

    registerComic(data){
        return this.http.post(`${MARVEL_API}/comics`, data)
          .map(response => response.json())
    }
    
    deleteComic(id){
        return this.http.delete(`${MARVEL_API}/comics/${id}`)
         .map(response => console.log(`${MARVEL_API}/comics/${id}`)) 
    }

    charactersByMyComic(id){
        return this.http.get(`${MARVEL_API}/comics/${id}/characters`)
          .map(response => response.json());
    }

    creatorsByMyComic(id){
        return this.http.get(`${MARVEL_API}/comics/${id}/creators`)
          .map(response => response.json());
    }

    storiesByMyComic(id){
        return this.http.get(`${MARVEL_API}/comics/${id}/stories`)
          .map(response => response.json());
    }

    includeCharacterMyComic(id, data){
        return this.http.patch(`${MARVEL_API}/comics/${id}/characters`, data)
        .map(response => response.json());
    }

    includeStorierMyComic(id, data){
        return this.http.patch(`${MARVEL_API}/comics/${id}/stories`, data)
        .map(response => response.json());
    }

    includeCreatorMyComic(id, data){
        return this.http.patch(`${MARVEL_API}/comics/${id}/creators`, data)
        .map(response => response.json());
    }
}
