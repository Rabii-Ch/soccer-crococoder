import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { StadiumService } from 'src/app/services/stadium.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches:any;
  users:any;
  players:any;
  matchs: any;
  stadiums: any;
  constructor(private matchService:MatchService,
    private playerService:PlayerService,
    private userService:UserService,
    private stadiumService:StadiumService,
    private router:Router) { }

  ngOnInit(){
    
    this.getMatches();
    this.getPlayers();
    this.getUsers();
    this.getStadiums();
    
  }
  //Matches
  getMatches(){
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matchs = data.matches;
      }
    )
  }
  
  deleteMatch(id:string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getMatches();
        this.router.navigate(['admin']);
      }
    )
    this.getMatches();
  }
  editMatch(id:any){
    this.router.navigate([`edit-match/${id}`]);
  }
  displayMatch(id:any){
    this.router.navigate([`display-match/${id}`]);
  }

  //players
  getPlayers(){
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.players = data.players;
      }
    )
  }
  deletePlayer(id:string) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        this.getPlayers();
        this.router.navigate(['admin']);
      }
    )
    this.getPlayers();
  }
  editPlayer(id:any){
    this.router.navigate([`edit-player/${id}`]);
  }
  displayPlayer(id:any){
    this.router.navigate([`display-player/${id}`]);
  }
  
//users
  getUsers(){
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data.users;
      }
    )
  }
  deleteUser(id:string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers();
        this.router.navigate(['admin']);
      }
    )
    this.getUsers();
  }
  editUser(id:any){
    this.router.navigate([`edit-user/${id}`]);
  }
  displayUser(id:any){
    this.router.navigate([`display-user/${id}`]);
  }
//stadium
getStadiums(){
  this.stadiumService.getAllStadiums().subscribe(
    data => {
      console.log('here my stadium', data.stadiums);
      
      this.stadiums = data.stadiums;
    }
  )
}
updateStadiums(gettedStadium:any){
  this.stadiums=gettedStadium;  

}
  

}
