import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('sidenav', { static: false }) nav: ElementRef;

  public isMobile: boolean;
  public openNav: boolean;
  @Output() sideNavOption = new EventEmitter<any>();

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {

    this.breakpointObserver.observe(['(max-width: 700px)']).subscribe(res => {
      this.isMobile = res.matches;
    });

  }

  public openSideNav() {
    this.sideNavOption.emit(true);
  }
}
