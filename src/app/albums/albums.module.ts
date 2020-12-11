import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AlbumsEffects } from './store/effects/albums.effects';
import * as fromAlbums from '../albums/store/reducers/albums.reducer';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumsService } from './services/albums.service';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    EffectsModule.forFeature([AlbumsEffects]),
    StoreModule.forFeature(fromAlbums.albumsFeatureKey, fromAlbums.reducer),
  ],
  declarations: [AlbumsComponent],
})
export class AlbumsModule {}
