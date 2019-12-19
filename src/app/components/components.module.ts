import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    CardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    SidenavComponent
  ]
})
export class ComponentsModule { }
