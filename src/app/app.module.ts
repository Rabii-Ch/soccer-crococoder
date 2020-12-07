import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServiceComponent } from './component/service/service.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WorldCupComponent } from './component/world-cup/world-cup.component';
import { ScoreComponent } from './component/score/score.component';
import { NewsComponent } from './component/news/news.component';
import { InfoComponent } from './component/info/info.component';
import { VideosComponent } from './component/videos/videos.component';
import { BlogComponent } from './component/blog/blog.component';
import { NewComponent } from './component/new/new.component';
import { MatchesComponent } from './component/matches/matches.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { PlayersComponent } from './component/players/players.component';
import { PlayerComponent } from './component/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPlayersComponent } from './component/admin-players/admin-players.component';
import { AdminMatchesComponent } from './component/admin-matches/admin-matches.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { DisplayMatchComponent } from './component/display-match/display-match.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { SearchComponent } from './component/search/search.component';
import { StadiumComponent } from './component/stadium/stadium.component';
import { AddStadiumComponent } from './component/add-stadium/add-stadium.component';
import { DisplayStadiumComponent } from './component/display-stadium/display-stadium.component';
import { EditStadiumComponent } from './component/edit-stadium/edit-stadium.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServiceComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent,
    WorldCupComponent,
    ScoreComponent,
    NewsComponent,
    InfoComponent,
    VideosComponent,
    BlogComponent,
    NewComponent,
    MatchesComponent,
    AdminComponent,
    UserComponent,
    PlayersComponent,
    PlayerComponent,
    AdminPlayersComponent,
    AdminMatchesComponent,
    AddMatchComponent,
    AddPlayerComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    EditPlayerComponent,
    EditUserComponent,
    DisplayUserComponent,
    DisplayPlayerComponent,
    SearchComponent,
    StadiumComponent,
    AddStadiumComponent,
    DisplayStadiumComponent,
    EditStadiumComponent,
   
   
  ],
  imports: [
    BrowserModule,
   // InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
