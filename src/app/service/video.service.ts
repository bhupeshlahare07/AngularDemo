import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl:string = 'https://projectapi.gerasim.in/api/OnlineLearning/';

  constructor(private http:HttpClient) { }

  getVideoList(){
    return this.http.get(this.apiUrl + 'GetAllVideos');
  }

  saveVideo(obj:VideoModel){
    debugger;
    return this.http.post(this.apiUrl + 'AddNewVideo', obj);
  }

  updateVideo(obj:VideoModel){
    debugger;
    return this.http.put(this.apiUrl + 'UpdateVideo', obj);
  }
  
  deleteVideo(videoId:number){
    debugger;
    return this.http.delete(this.apiUrl + 'DeleteVideo?videoId='+ videoId);
  }
}
