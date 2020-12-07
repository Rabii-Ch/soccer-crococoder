import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddStadiumComponent } from './component/add-stadium/add-stadium.component';
import { AdminComponent } from './component/admin/admin.component';
import { ContactComponent } from './component/contact/contact.component';
import { DisplayMatchComponent } from './component/display-match/display-match.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { DisplayStadiumComponent } from './component/display-stadium/display-stadium.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { EditStadiumComponent } from './component/edit-stadium/edit-stadium.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MatchesComponent } from './component/matches/matches.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PlayersComponent } from './component/players/players.component';
import { ServiceComponent } from './component/service/service.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  // localhost:4200 : URL de base
  {path:'', component: HomeComponent},
  // localhost:4200/contact => Afficher contact
  {path:'contact', component: ContactComponent},
  // localhost:4200/service => Afficher service
  {path:'service', component: ServiceComponent},

  {path:'login', component: LoginComponent},

  {path:'signup', component: SignUpComponent},

  {path:'matches', component: MatchesComponent},

  {path:'admin', component: AdminComponent},

  {path:'players', component: PlayersComponent},

  {path:'addMatch', component: AddMatchComponent},

  {path:'addPlayer', component: AddPlayerComponent},

  {path:'addStadium', component: AddStadiumComponent},

  {path:'edit-match/:id', component: EditMatchComponent},

  {path:'display-match/:id', component: DisplayMatchComponent},

  {path:'edit-player/:id', component: EditPlayerComponent},

  {path:'display-player/:id', component: DisplayPlayerComponent},

  {path:'edit-user/:id', component: EditUserComponent},

  {path:'display-user/:id', component: DisplayUserComponent},

  {path:'display-stadium/:id', component: DisplayStadiumComponent},

  {path:'edit-stadium/:id', component: EditStadiumComponent},
  
  
  // **: path
  {path:'**', component: NotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
