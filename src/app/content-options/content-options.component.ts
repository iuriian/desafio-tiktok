import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'content-options',
  templateUrl: './content-options.component.html',
  styleUrls: ['./content-options.component.scss']
})
export class ContentOptionsComponent implements OnInit {

  public option: string;

  constructor() { }

  ngOnInit() {
    this.option = 'discover';
  }

  public selectSection(selected: string) {
    console.log(selected);
    this.option = selected;
  }

}
