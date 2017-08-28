import {Comic} from "./comic/comic.model"
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class ComicsService{
    comicsLista: Comic[] = []
    constructor(private http: Http){}

    comics(): Observable<Comic[]>{
        return this.http.get(`${MEAT_API}`)
        .map(response => response.json().data.results)
    }
}