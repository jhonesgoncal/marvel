import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {ComicsComponent} from './comics/comics.component'
import {ComicDetailComponent} from './comic-detail/comic-detail.component'
import {CharactersComponent} from './comic-detail/characters/characters.component'
import {StoriesComponent} from './comic-detail/stories/stories.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'comics/:id', component: ComicDetailComponent,
     children:[
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'characters', component: CharactersComponent},
      {path: 'stories', component: StoriesComponent}
  ]}
]