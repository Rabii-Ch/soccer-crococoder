import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  
  stadiumUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  getAllStadiums() {
    return this.httpClient.get<{message:string,stadiums:any}>(`${this.stadiumUrl}/allStadiums`);
  }
  
  deleteStadium(id: string) {
    return this.httpClient.delete(`${this.stadiumUrl}/deleteStadium/${id}`);
  }

  addStadium(stadium: any) {
    
    return this.httpClient.post(`${this.stadiumUrl}/addStadium`, stadium);

  }

  editStadium(stadium: any) {
    return this.httpClient.put(`${this.stadiumUrl}/editStadium/${stadium._id}`, stadium);
  }
  getStadiumById(id: string) {
    return this.httpClient.get<{stadium:any}>(`${this.stadiumUrl}/displayStadium/${id}`);
  }
}
