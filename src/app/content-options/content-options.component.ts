import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'content-options',
  templateUrl: './content-options.component.html',
  styleUrls: ['./content-options.component.scss']
})
export class ContentOptionsComponent implements OnInit {

  public option: string;
  public discovers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  ngOnInit() {
    this.option = 'discover';
  }

  public selectSection(selected: string) {
    this.option = selected;
  }

}
