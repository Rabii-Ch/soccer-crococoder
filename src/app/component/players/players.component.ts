import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input() x:any;
  playerss: any;
  constructor(private playerService: PlayerService) { } //injecter le service playerService dans le constructeur

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(  //this.playerService.getAllPlayers():appel de fonction | subscribe:s'inscrir le fonction pour le retour des donnees de la base.
      data => {             // data sammineha na7na fiha lvaleur mta3 retour mta3 service
        this.playerss = data;
      }
    );
  }

}
