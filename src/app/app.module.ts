import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { IconLinkComponent } from './navbar/icon-link/icon-link.component';
import { IconProfileComponent } from './navbar/icon-profile/icon-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardActivityComponent } from './card-activity/card-activity.component';
import { CardCurrentComponent } from './card-activity/card-current/card-current.component';
import { CardWaitinglistComponent } from './card-activity/card-waitinglist/card-waitinglist.component';
import { ImageCurrentComponent } from './card-activity/card-current/image-current/image-current.component';
import { InformationsCurrentComponent } from './card-activity/card-current/informations-current/informations-current.component';
import { ImageWaitinglistComponent } from './card-activity/card-waitinglist/image-waitinglist/image-waitinglist.component';
import { InformationsWaitinglistComponent } from './card-activity/card-waitinglist/informations-waitinglist/informations-waitinglist.component';
import { Button0Component } from './button0/button0.component';
import { Banner0Component } from './banner0/banner0.component';
import { Button1Component } from './button1/button1.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Accordion0Component } from './accordion0/accordion0.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { Banner1Component } from './banner1/banner1.component';
import { CardMagazineComponent } from './card-magazine/card-magazine.component';
import { CardEventsComponent } from './card-magazine/card-events/card-events.component';
import { ImageEventsComponent } from './card-magazine/card-events/image-events/image-events.component';
import { InformationsEventsComponent } from './card-magazine/card-events/informations-events/informations-events.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IconLinkComponent,
    IconProfileComponent,
    CardActivityComponent,
    CardCurrentComponent,
    CardWaitinglistComponent,
    ImageCurrentComponent,
    InformationsCurrentComponent,
    ImageWaitinglistComponent,
    InformationsWaitinglistComponent,
    Button0Component,
    Banner0Component,
    Button1Component,
    AnnouncementsComponent,
    Accordion0Component,
    Banner1Component,
    CardMagazineComponent,
    CardEventsComponent,
    ImageEventsComponent,
    InformationsEventsComponent,
    CarouselComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
