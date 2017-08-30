import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component'
import {ROUTES} from './app.routes';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ComicComponent } from './comics/comic/comic.component' 
import { ComicsService} from './comics/comics.service';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { CharactersComponent } from './comic-detail/characters/characters.component';
import { StoriesComponent } from './comic-detail/stories/stories.component';
import { CharactersItemComponent } from './comic-detail/characters-item/characters-item.component'


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
    CharactersItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ComicsService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
