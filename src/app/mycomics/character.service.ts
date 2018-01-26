import {Comic} from "./../comics/comic/comic.model"
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import {CharacterItem} from '../comic-detail/characters-item/character-item.model'
import { Http } from "@angular/http";
import { MARVEL_API } from "app/app.api";

@Injectable()
export class CharacterService{

    constructor(private http: Http){}

    registerCharacterMyComic(data){
        return this.http.post(`${MARVEL_API}/characters`, data)
        .map(response => response.json());
    }

    deleteCharacterMyComic(id){
        return this.http.delete(`${MARVEL_API}/characters/${id}`)
        .map(response => response.json());
    }
}
