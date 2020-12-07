import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  match: any = {};
  id:any;

  constructor(
    private matchService: MatchService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //le module activatedRoute permet de snapshoter (capturer)
    // l'UrRL active et mapper pour faire retourner le parametre ID
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data=>{
        this.match=data.match;
      }
    )
  }

}
