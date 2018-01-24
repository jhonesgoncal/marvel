import {Comic} from "./../comics/comic/comic.model"
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import {CharacterItem} from '../comic-detail/characters-item/character-item.model'
import { Http } from "@angular/http";
import { MARVEL_API } from "app/app.api";

@Injectable()
export class StorieService{

    constructor(private http: Http){}

    registerStorieMyComic(data){
        return this.http.post(`${MARVEL_API}/stories`, data)
        .map(response => response.json());
    }

    deleteStorieMyComic(id){
        return this.http.delete(`${MARVEL_API}/stories`, id)
        .map(response => response.json());
    }
}
