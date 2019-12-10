import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'content-options',
  templateUrl: './content-options.component.html',
  styleUrls: ['./content-options.component.scss'],
  animations: [
    trigger('cardByCard', [
      state('void', style({
        opacity: 0,
        transform: 'perspective(500px) translateZ(-200px)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'perspective(500px) translateZ(0px)'
      })),
      transition(':enter', [
        animate('2s ease', style({
          opacity: 1,
          transform: 'perspective(500px) translateZ(0px)'
        }))
      ]),
      transition(':leave', [
        animate('2s ease', style({
          opacity: 0,
          transform: 'perspective(500px) translateZ(-200px)'
        }))
      ])
    ])
  ]
})
export class ContentOptionsComponent implements OnInit {

  public option: string;
  public discovers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor() { }

  ngOnInit() {
    this.option = 'discover';
  }

  public selectSection(selected: string) {
    this.option = selected;
  }

}
