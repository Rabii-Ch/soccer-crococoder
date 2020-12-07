import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


firstName:string;
lastName:string;
actualDate:Date;
  constructor(private router:Router) { }

  ngOnInit() {
    this.firstName = localStorage.getItem('connectedUserFname');
    this.lastName = localStorage.getItem('connectedUserLname');
    this.actualDate=new Date(); 
     }

  goToLogin(){
    this.router.navigate(['login']);
  }
  goToSignUp(){
    this.router.navigate(['signup']);
  }
  logout(){
    localStorage.removeItem('connectedUserFname');
    localStorage.removeItem('connectedUserLname');
    location.reload();
  }


}
