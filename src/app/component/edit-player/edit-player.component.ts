import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  player: any = {};
  playerForm: FormGroup;
  id:any;

  constructor(private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router:Router, private activated:ActivatedRoute) { }

  ngOnInit() {
    //le module activatedRoute permet de snapshoter (capturer)
    // l'UrRL active et mapper pour faire retourner le parametre ID
    this.id = this.activated.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      data=>{
        this.player=data.player;
      }
    )
    this.playerForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      discription: ['']

    });
  }
  editPlayer(){
    this.playerService.editPlayer(this.player).subscribe(
      ()=> {
        alert('player updated succesfully');
        this.router.navigate(['admin']);
    }
    )
  }
}
