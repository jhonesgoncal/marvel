import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {MEAT_API} from '././app.api'
import {Observable} from 'rxjs/Observable'
import {Md5} from 'ts-md5/dist/md5'

@Injectable()
export class BaseService{
    constructor(private http: Http){}

    getApi(url){
        return  this.http.get(`${MEAT_API}${url}${this.geraHashEComplementoDaUrl()}`)
                .map(response => response.json().data.results)
    }

    geraHashEComplementoDaUrl():string{
        let ts:number = 	new Date().getTime()
        const APIKEY : string = '113fe8d9f18142601caca4864045c804'
        const PRIVATE_KEY : string = '0f58ef56308890fca54f7c27129208333677efdf'
        let hash = Md5.hashStr(`${ts}${PRIVATE_KEY}${APIKEY}`)

        return `ts=${ts}&apikey=${APIKEY}&hash=${hash}`
   }
}