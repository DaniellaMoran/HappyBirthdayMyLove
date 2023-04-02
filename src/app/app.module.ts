import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PlaylistComponent } from './components/pages/playlist/playlist.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorMessageComponent } from './components/features/error-message/error-message.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { DuolingoComponent } from './components/pages/duolingo/duolingo.component';
import { WhatsappComponent } from './components/pages/whatsapp/whatsapp.component';
import { FacetimeComponent } from './components/pages/facetime/facetime.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlaylistComponent,
    GalleryComponent,
    CalendarComponent,
    ErrorMessageComponent,
    SettingsComponent,
    DuolingoComponent,
    WhatsappComponent,
    FacetimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
