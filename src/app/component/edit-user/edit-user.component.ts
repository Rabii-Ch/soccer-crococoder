import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any = {};
  signupForm: FormGroup;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(6), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      cPassword: ['', [Validators.minLength(8), Validators.required]]
      // image:['']
    })
    // le module activated route permet de capturer url active et maper pour faire retourner le parametre id
    this.id = this.activated.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      data => {
        this.user = data.user;
        // n'importiou les valeur mil DB ken ki nebdew ne5dmo b reactiv form
        this.signupForm.setValue({
          firstName:  this.user.firstName,
          lastName:  this.user.lastName,
          email:  this.user.email,
          password:  this.user.password
        })

      }
    )
    // this.signupForm = this.formBuilder.group({

    //   firstName: [''],
    //   lastName: [''],
    //   email: [''],
    //   pwd: [''],
    //   confirmPwd: ['']

    // })

  }
  editUser(user: any) {

    user._id = this.id;
    // user.firstName = this.signupForm.get('firstName').value;
    // user.lastName = this.signupForm.get('lastName').value;
    // user.email = this.signupForm.get('email').value;
    // user.pwd = this.signupForm.get('pwd').value;
    // user.confirmPwd = this.signupForm.get('confirmPwd').value;
    console.log('edited user after submit', user);
    this.userService.editUser(user).subscribe(
      () => {
        alert('user updated');
        this.router.navigate(['admin']);
      }
    )
  }

}
