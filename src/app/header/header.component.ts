import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isMobile: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {

    this.breakpointObserver.observe(['(max-width: 700px)']).subscribe(res => {
      this.isMobile = res.matches;
    });

  }

  public openSideNav() { }

}
