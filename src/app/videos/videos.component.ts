import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  public videos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

}
