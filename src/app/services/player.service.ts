import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // playerUrl='api/playerss';
  playerUrl='http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  
  getAllPlayers() {
    return this.httpClient.get<{message:string,players:any}>(`${this.playerUrl}/allPlayers`);
  }
  
  deletePlayer(id: string) {
    return this.httpClient.delete(`${this.playerUrl}/deletePlayer/${id}`);
  }

  addPlayer(player: any,image:File) {
    let formData = new FormData();
    formData.append('name',player.name);
    formData.append('lastName',player.lastName);
    formData.append('discription',player.discription);
    formData.append('image',image);
    return this.httpClient.post(`${this.playerUrl}/addPlayer`, formData);

  }

  editPlayer(player: any) {
    return this.httpClient.put(`${this.playerUrl}/editPlayer/${player._id}`, player);
  }

  getPlayerById(id: string) {
    return this.httpClient.get<{player:any}>(`${this.playerUrl}/displayPlayer/${id}`);
  }
  // addPlayer(player:any){
  //   return this.httpClient.post(this.playerUrl, player);
  // constructor(private httpClient:HttpClient) { } //private : y teb3a player services akahaw
  // getAllPlayers(){
  //    return this.httpClient.get(this.playerUrl);
  //  }
  //  deletePlayer(id:number){
  //    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  //  }
   
}