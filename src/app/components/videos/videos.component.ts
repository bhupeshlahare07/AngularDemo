import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { VideoModel } from '../../model/video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  ngOnInit(): void {
    this.getVideoList();
  }
  videoList: VideoModel[] = [];
  videoObj: VideoModel = new VideoModel();
  videoSrv = inject(VideoService);

  getVideoList() {
    return this.videoSrv.getVideoList().subscribe((result: any) => {
      this.videoList = result.data;
    })
  }

  onSaveVideo() {
    debugger;
    this.videoSrv.saveVideo(this.videoObj).subscribe((result: any) => {
      if(result.result){
        alert('Video saved successfully');
        this.getVideoList();
      }
      else{
        alert(result.message);
      }
    })
  }

  onEditVideo(obj: VideoModel) {
    debugger;
    this.videoObj = obj;
  }

  onUpdateVideo() {
    debugger;
    this.videoSrv.UpdateVideo(this.videoObj).subscribe((result: any) => {
      if(result.result){
        alert('Video updated successfully');
        this.getVideoList();
      }
      else{
        alert(result.message);
      }
    })
  }

}
