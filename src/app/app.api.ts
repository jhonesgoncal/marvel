
import {Md5} from 'ts-md5/dist/md5'
let ts:number = 	new Date().getTime()
const APIKEY : string = '113fe8d9f18142601caca4864045c804'
const PRIVATE_KEY : string = '0f58ef56308890fca54f7c27129208333677efdf'
let hash = Md5.hashStr(`${ts}${PRIVATE_KEY}${APIKEY}`)


export const MEAT_API = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${APIKEY}&hash=${hash}`
console.log(MEAT_API)


