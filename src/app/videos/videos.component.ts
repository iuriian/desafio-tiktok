import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  public videos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit() {

    this.youtubeService.retrieveAllVideos()
      .subscribe((res: any) => {
        // this.videos = res.items;
      });

  }

  executeVideo(item) {
    console.log(item);
    // this.youtubeService.retrieveVideo(item.id)
    //   .subscribe(res => console.log(res));
  }

}
