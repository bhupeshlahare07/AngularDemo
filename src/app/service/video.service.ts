import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl:string = 'https://projectapi.gerasim.in/api/OnlineLearning/';

  constructor(private http:HttpClient) { }

  getVideoList(){
    return this.http.get(this.apiUrl + 'GetAllVideos');
  }
}
