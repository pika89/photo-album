import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AlbumsEffects} from './store/effects/albums.effects';
import * as fromAlbums from '../albums/store/reducers/albums.reducer';
import {CommonModule} from '@angular/common';
import {AlbumsComponent} from './pages/albums/albums.component';
import {AlbumsRoutingModule} from './albums-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {AlbumsService} from './services/albums.service';
import {PhotosComponent} from './components/photos/photos.component';
import {ScrollingModule} from '@angular/cdk/scrolling'
import {FilterPipe} from '../shared/pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from '../shared/dialog/dialog.component';
import { PhotoComponent } from './components/photos/photo/photo.component';


@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    AlbumsRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    EffectsModule.forFeature([AlbumsEffects]),
    StoreModule.forFeature(fromAlbums.albumsFeatureKey, fromAlbums.reducer),
  ],
  declarations: [AlbumsComponent, PhotosComponent, FilterPipe, PhotoComponent,
  ],
  exports: [FilterPipe],
  entryComponents: [
    DialogComponent
  ],
})
export class AlbumsModule {
}
