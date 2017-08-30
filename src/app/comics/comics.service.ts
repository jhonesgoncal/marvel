import {Comic} from "./comic/comic.model"
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'
import {Observable} from 'rxjs/Observable'
import {Md5} from 'ts-md5/dist/md5'
import {CharacterItem} from '../comic-detail/characters-item/character-item.model'

@Injectable()
export class ComicsService{
   
    constructor(private http: Http){}
    

    comics(): Observable<Comic[]>{
        return this.http.get(`${MEAT_API}${this.geraHashEComplementoDaUrl()}`)
        .map(response => response.json().data.results)
    }

    comicById(id: string): Observable<Comic>{
        this.http.get(`${MEAT_API}/${id}${this.geraHashEComplementoDaUrl()}`)
        .map(response => console.log(response.json().data.results))
        return this.http.get(`${MEAT_API}/${id}${this.geraHashEComplementoDaUrl()}`)
        .map(response => response.json().data.results)
  
    }

    storiesOfComic(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/${id}/stories${this.geraHashEComplementoDaUrl()}`)
        .map(response => response.json().data.results)
    }

    characterOfComic(id: string): Observable<CharacterItem[]>{
        return this.http.get(`${MEAT_API}/${id}/character${this.geraHashEComplementoDaUrl()}`)
        .map(response => response.json().data.results)
    }


    geraHashEComplementoDaUrl():string{
         let ts:number = 	new Date().getTime()
         const APIKEY : string = '113fe8d9f18142601caca4864045c804'
         const PRIVATE_KEY : string = '0f58ef56308890fca54f7c27129208333677efdf'
         let hash = Md5.hashStr(`${ts}${PRIVATE_KEY}${APIKEY}`)

         return `?ts=${ts}&apikey=${APIKEY}&hash=${hash}`
    }
}