import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validator/confirmPwd';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: any = {};
  signupForm:FormGroup;
  imagePreviewUser:any;
  constructor(private formBuilder:FormBuilder,
    private userService: UserService,
    private router:Router) { }

  ngOnInit() {
this.signupForm=this.formBuilder.group({
  firstName:['',[Validators.minLength(3), Validators.required]],
  lastName:['',[Validators.minLength(6), Validators.required] ],
  email:['',[Validators.email, Validators.required] ],
  password:['',[Validators.minLength(8), Validators.required] ],
  cPassword:['', Validators.required ],
  image: ['']
  
},
{
validator: MustMatch('password', 'cPassword')
}
)
  }

  addUser(user:any){
    
      console.log('here is user info ', user);
      this.userService.addUser(user, this.signupForm.value.image).subscribe(
        ()=>{ console.log('user added successfully');
        this.router.navigate(['login']);
      }
      )
  }
  onImageSelectedUser(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ image: file }); 
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreviewUser = reader.result as string
    };
    reader.readAsDataURL(file);
    }
    onButtonClicked(){
      alert('Btn clicked');
    }
}
