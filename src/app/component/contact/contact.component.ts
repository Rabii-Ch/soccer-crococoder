import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string;
  contact:any={};
  contactForm:FormGroup;


  constructor(private x:FormBuilder) { }

  ngOnInit() {
    this.name='abderrahmen';
    console.log('here is my name',this.name);
    this.contactForm=this.x.group({
        firstName:[''],
        lastName:[''],
        email:[''],
        subject:[''],

      });
  }
  addcontact(){
    alert('hello');
    console.log('here is my Object',this.contact);
    
  }

}
