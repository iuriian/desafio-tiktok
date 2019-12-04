import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('fadeButton', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate('2s ease')),
      transition('* => void', animate('0.4s ease'))
    ])
  ]
})
export class FooterComponent implements OnInit {

  public showButton: boolean;

  constructor() { }

  ngOnInit() {
    window.onscroll = () => {
      if (pageYOffset >= 220) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    };
  }

  public scrollTop() {
    document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
