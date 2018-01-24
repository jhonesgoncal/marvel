import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component'

import {ROUTES} from './app.routes';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ComicComponent } from './comics/comic/comic.component' 
import { ComicsService} from './comics/comics.service';
import { BaseService} from './base.service';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { CharactersComponent } from './comic-detail/characters/characters.component';
import { StoriesComponent } from './comic-detail/stories/stories.component';
import { CharactersItemComponent } from './comic-detail/characters-item/characters-item.component';
import { CreatorsComponent } from './comic-detail/creators/creators.component';
import { MycomicsComponent } from './mycomics/mycomics.component';
import { FormMycomicComponent } from './mycomics/form-mycomic/form-mycomic.component';
import { ComicItemComponent } from './comics/comic-item/comic-item.component';
import { MycomicDetailsComponent } from './mycomics/mycomic-details/mycomic-details.component';
import { CharactersMyComicComponent } from './mycomics/characters-my-comic/characters-my-comic.component';
import { CreatorsMyComicComponent } from './mycomics/creators-my-comic/creators-my-comic.component';
import { StoriesMyComicComponent } from './mycomics/stories-my-comic/stories-my-comic.component'
import { MyComicService } from 'app/mycomics/mycomic.service';
import { CharacterService } from 'app/mycomics/character.service';
import { MARVEL_API } from 'app/app.api';
import { CreatorService } from 'app/mycomics/creator.service';
import { StorieService } from 'app/mycomics/storie.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    HeaderComponent,
    AboutComponent,
    ComicComponent,
    ComicDetailComponent,
    CharactersComponent,
    StoriesComponent,
    CharactersItemComponent,
    CreatorsComponent,
    MycomicsComponent,
    FormMycomicComponent,
    ComicItemComponent,
    MycomicDetailsComponent,
    CharactersMyComicComponent,
    CreatorsMyComicComponent,
    StoriesMyComicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ComicsService, BaseService, MyComicService , CharacterService, CreatorService ,StorieService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
