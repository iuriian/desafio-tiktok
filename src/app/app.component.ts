import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'desafio-tiktok';
  public isMobile: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {

    this.breakpointObserver.observe(['(max-width: 700px)']).subscribe(res => {
      this.isMobile = res.matches;
    });

  }
}
