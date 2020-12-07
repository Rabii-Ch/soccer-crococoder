import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {

@Input() s:any;
@Output() newStadiums: EventEmitter<any> = new EventEmitter();

  constructor(private stadiumService:StadiumService,
    private router:Router) { }

  ngOnInit(): void {
  }
  deleteStadium(id:any){
    this.stadiumService.deleteStadium(id).subscribe(
      ()=>{
        console.log('satdium deleted');
        this.stadiumService.getAllStadiums().subscribe(
          data=>{
            this.newStadiums.emit(data.stadiums)
          }
        )
      }

    )
}
editStadium(id:any){
  this.router.navigate([`edit-stadium/${id}`]);
}

displayStadium(id:any){
  this.router.navigate([`display-stadium/${id}`]);
}
}
