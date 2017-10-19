import {Comic} from "./comic/comic.model"
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'
import {Observable} from 'rxjs/Observable'
import {Md5} from 'ts-md5/dist/md5'
import {CharacterItem} from '../comic-detail/characters-item/character-item.model'
import {BaseService} from './../base.service'

@Injectable()
export class ComicsService{
   
    constructor(private http: Http, private baseService : BaseService){}
    

    comics(search?: string): Observable<Comic[]>{
        if(search){
            return this.baseService.getApi(`?titleStartsWith=${search}&`)
        }
        return this.baseService.getApi(`?limit=100&`)
    }

    comicById(id: string): Observable<Comic>{
        return this.baseService.getApi(`/${id}?`)
    }

    storiesOfComic(id: string): Observable<any>{
        return this.baseService.getApi(`/${id}/stories?`)
    }

    characterOfComic(id: string): Observable<CharacterItem[]>{
        return this.baseService.getApi(`/${id}/characters?`)
    }

    creatorsOfComic(id: string): Observable<any>{
        return this.baseService.getApi(`/${id}/creators?`)
       
    }

}