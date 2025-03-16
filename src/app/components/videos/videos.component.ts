import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { VideoModel } from '../../model/video';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  ngOnInit(): void {
    this.getVideoList();
  }
  videoList: VideoModel[] = [];
  videoSrv = inject(VideoService);

  getVideoList(){
    return this.videoSrv.getVideoList().subscribe((result:any)=>{
      this.videoList = result.data;
    })
  }

}
