import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotifyRoutingModule } from './spotify-routing.module';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';


@NgModule({
  declarations: [
    SpotifyComponent,
    PlaylistComponent,
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    SpotifyRoutingModule
  ]
})
export class SpotifyModule { }
