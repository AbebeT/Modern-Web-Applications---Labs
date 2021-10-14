import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GamesListComponent } from './games-list/games-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GamesListComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"",
        component:WelcomeComponent
  },
  {
    path: "games",
    component: GamesListComponent
  },
  {
    path: "games/:gameId",
    component: GameComponent
  },
  {
    path:"**",
    component: ErrorPageComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
