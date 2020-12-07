import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let playerss = [
      {id:1,name:'messi',lastname:'leonel',discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',img:'assets/images/img_1.jpg'},
      {id:2,name:'ronaldo',lastname:'cristiano',discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',img:'assets/images/img_1.jpg'},
      {id:3,name:'zlatan',lastname:'brahimovich',discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',img:'assets/images/img_1.jpg'},
      {id:4,name:'messi',lastname:'leonel',discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',img:'assets/images/img_1.jpg'},
      {id:5,name:'messi',lastname:'leonel',discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',img:'assets/images/img_1.jpg'},
      {id:6,name:'messi',lastname:'leonel',discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',img:'assets/images/img_1.jpg'}
    ];
    let matches=[
      {id:1,scoreOne: 2,playersTeamOne:['Messi','Anas'], scoreTwo:3,playersTeamTwo:['Messi','ali'], teamOne:'FCB',teamTwo:'RM'},
      {id:2,scoreOne: 3,playersTeamOne:['Messi','Anas'], scoreTwo:5,playersTeamTwo:['mohamed','Anas'], teamOne:'JUV',teamTwo:'RM'},
      {id:3,scoreOne: 2,playersTeamOne:['Messi','Anas'], scoreTwo:1,playersTeamTwo:['selim','Anas'], teamOne:'ATM',teamTwo:'RM'},
      {id:4,scoreOne: 0,playersTeamOne:['Messi','Anas'], scoreTwo:3,playersTeamTwo:['Messi','Anas'], teamOne:'LIV',teamTwo:'RM'},
      {id:5,scoreOne: 4,playersTeamOne:['Messi','Anas'], scoreTwo:3,playersTeamTwo:['Messi','Anas'], teamOne:'CA',teamTwo:'EST'}
    ];
   

   return {playerss,matches};

  }
}
