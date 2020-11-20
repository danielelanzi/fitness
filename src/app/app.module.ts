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
import { ModalAnnouncementsComponent } from './announcements/modal-announcements/modal-announcements.component';

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
    ModalAnnouncementsComponent,
   ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
