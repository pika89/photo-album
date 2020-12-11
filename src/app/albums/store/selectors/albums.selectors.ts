import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlbums from '../reducers/albums.reducer'

export const selectAlbumsState = createFeatureSelector<fromAlbums.AlbumsState>(fromAlbums.albumsFeatureKey);

export const selectAlbums = () =>
  createSelector(
    selectAlbumsState,
    albumsState => albumsState.albums
  );

// export const selectAlbum = createSelector(
//   selectAlbumsState,
//   albumState => albumState.currentAlbum
// );
