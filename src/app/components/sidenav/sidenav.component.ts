import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() menuNavOption = new EventEmitter<any>();

  constructor() { }

  public closeSideNav() {
    this.menuNavOption.emit('toogle');
  }

}
