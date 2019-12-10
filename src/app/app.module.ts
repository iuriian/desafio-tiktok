import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { FooterComponent } from './footer/footer.component';
import { CreatorsComponent } from './creators/creators.component';
import { DiscoverComponent } from './discover/discover.component';
import { ContentOptionsComponent } from './content-options/content-options.component';
import { environment } from 'src/environments/environment.prod';

import { MatSidenavModule } from '@angular/material/sidenav';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    FooterComponent,
    CreatorsComponent,
    DiscoverComponent,
    ContentOptionsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  providers: [
    { provide: 'API_KEY', useValue: environment.apiKey }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
