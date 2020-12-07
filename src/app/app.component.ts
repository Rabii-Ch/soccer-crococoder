import { Component } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calcul(a:number,b:number){
    return a+b;
  }

  min(T){
  
    let minT=T[0];

for (let i = 1; i < T.length; i++) {
  if (T[i] < minT) {
    minT=T[i];
  }
  
}
return minT;  
}

calculChar(ch){
  let j=0;
  let x=0;
  let t;
for (let i = 0; i < ch.length; i++) {
j++;
 if (ch[i]===' ') {
   t[x]=j;
   j=0;
   x++;
 }
  
}

  
}
calculCharLength(T){

  let ch='';
  for (let i = 0; i < T.length; i++) {
    ch+=T[i]+' : '+T[i].length +' ';
    
  }
  document.getElementById('msg').innerHTML=ch;
  
}
}
