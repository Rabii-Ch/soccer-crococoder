import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  login:any={};
  loginForm:FormGroup;


  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router,
    ) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
        email:[''],
        password:[''],
      });
  }
  loginUser(){
    
    console.log('here is my Object',this.login);
    this.userService.login(this.login).subscribe(
      data=>{
        console.log('here data',data.user[0]); 
        if(data)
        {
          location.reload();
          localStorage.setItem('connectedUserFname',data.user[0].firstName);
          localStorage.setItem('connectedUserLname',data.user[0].lastName);
        }
        this.router.navigate(['']);
      }
    )
    
  }
}
