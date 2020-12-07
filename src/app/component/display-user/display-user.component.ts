import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  user: any = {};
  id:any;

  constructor(
    private userService: UserService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //le module activatedRoute permet de snapshoter (capturer)
    // l'UrRL active et mapper pour faire retourner le parametre ID
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      data=>{
        this.user=data.user;
      }
    )
  }

}
