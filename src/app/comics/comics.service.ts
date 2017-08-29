import {Comic} from "./comic/comic.model"
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'
import {Observable} from 'rxjs/Observable'
import {Md5} from 'ts-md5/dist/md5'

@Injectable()
export class ComicsService{
    ts:number = 	new Date().getTime()
    APIKEY : string = '113fe8d9f18142601caca4864045c804'
    PRIVATE_KEY : string = '0f58ef56308890fca54f7c27129208333677efdf'
    hash = Md5.hashStr(`${this.ts}${this.PRIVATE_KEY}${this.APIKEY}`)
    constructor(private http: Http){}
    

    comics(): Observable<Comic[]>{
        return this.http.get(`${MEAT_API}?ts=${this.ts}&apikey=${this.APIKEY}&hash=${this.hash}`)
        .map(response => response.json().data.results)
    }

    comicById(id: string): Observable<Comic>{
        this.http.get(`${MEAT_API}/${id}?ts=${this.ts}&apikey=${this.APIKEY}&hash=${this.hash}`)
        .map(response => console.log(response.json().data.results))
        return this.http.get(`${MEAT_API}/${id}?ts=${this.ts}&apikey=${this.APIKEY}&hash=${this.hash}`)
        .map(response => response.json().data.results)

  }
}