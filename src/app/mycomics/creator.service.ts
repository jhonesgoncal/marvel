import {Comic} from "./../comics/comic/comic.model"
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import {CharacterItem} from '../comic-detail/characters-item/character-item.model'
import { Http } from "@angular/http";
import { MARVEL_API } from "app/app.api";

@Injectable()
export class CreatorService{

    constructor(private http: Http){}

    registerCreatorMyComic(data){
        return this.http.post(`${MARVEL_API}/creators`, data)
        .map(response => response.json());
    }

    deleteCreatorMyComic(id){
        return this.http.delete(`${MARVEL_API}/creators/${id}`)
        .map(response => response.json());
    }
}
