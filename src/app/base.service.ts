import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Md5} from 'ts-md5/dist/md5'
import MarvelWrapper from 'marvel-wrapper'

@Injectable()
export class BaseService{
    constructor(private http: Http){}

    marvel(){
        return new MarvelWrapper({
            privateKey: '0f58ef56308890fca54f7c27129208333677efdf',
            publicKey: '113fe8d9f18142601caca4864045c804',
            limit: 100
        });
    }
}