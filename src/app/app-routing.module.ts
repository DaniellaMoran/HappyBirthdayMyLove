import { DuolingoComponent } from './components/pages/duolingo/duolingo.component';
import { WhatsappComponent } from './components/pages/whatsapp/whatsapp.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../app/components/pages/home-page/home-page.component';
import { PlaylistComponent } from '../app/components/pages/playlist/playlist.component';
import { FacetimeComponent } from './components/pages/facetime/facetime.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'facetime', component: FacetimeComponent },
  { path: 'whatsapp', component: WhatsappComponent },
  { path: 'duolingo', component: DuolingoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
