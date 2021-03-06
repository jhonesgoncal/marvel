import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {ComicsComponent} from './comics/comics.component'
import {ComicDetailComponent} from './comic-detail/comic-detail.component'
import {CharactersComponent} from './comic-detail/characters/characters.component'
import {StoriesComponent} from './comic-detail/stories/stories.component'
import {CreatorsComponent} from './comic-detail/creators/creators.component'
import { MycomicsComponent } from 'app/mycomics/mycomics.component';
import { FormMycomicComponent } from 'app/mycomics/form-mycomic/form-mycomic.component';
import { MycomicDetailsComponent } from 'app/mycomics/mycomic-details/mycomic-details.component';
import { CharactersMyComicComponent } from 'app/mycomics/characters-my-comic/characters-my-comic.component';
import { CreatorsMyComicComponent } from 'app/mycomics/creators-my-comic/creators-my-comic.component';
import { StoriesMyComicComponent } from 'app/mycomics/stories-my-comic/stories-my-comic.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'mycomics', component: MycomicsComponent},
  {path: 'form', component: FormMycomicComponent},
  {path: 'about', component: AboutComponent},
  {path: 'comics/:id', component: ComicDetailComponent,
     children:[
      {path: '', redirectTo: 'characters', pathMatch: 'full'},
      {path: 'characters', component: CharactersComponent},
      {path: 'creators', component: CreatorsComponent},
      {path: 'stories', component: StoriesComponent}
  ]},
  {path: 'mycomics/:id', component: MycomicDetailsComponent,
     children:[
      {path: '', redirectTo: 'characters', pathMatch: 'full'},
      {path: 'characters', component: CharactersMyComicComponent},
      {path: 'creators', component: CreatorsMyComicComponent},
      {path: 'stories', component: StoriesMyComicComponent}
  ]}
]