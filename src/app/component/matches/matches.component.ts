import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any;
  
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(  //this.playerService.getAllPlayers():appel de fonction | subscribe:s'inscrir le fonction pour le retour des donnees de la base.
   data=>{
     this.matches = data.matches;
    
  }
  );
}
}
