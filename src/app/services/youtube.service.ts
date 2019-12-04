import { Injectable, Inject } from '@angular/core';
import { YoutubeDataAPI } from 'youtube-v3-api';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private api = new YoutubeDataAPI(this.key);

  constructor(
    @Inject('API_KEY') private key: string
  ) { }

  public retrieveAllVideos() {
    return from(this.api.searchPlaylistItems('PLC7uEPZt0yFgq-CH4aOU3-2Y6YK2Y-cUL', 40));
  }

  public retrieveVideo(id) {
    return from(this.api.searchVideo(id));
  }

}
