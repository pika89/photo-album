import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import {catchError, map, mergeMap } from 'rxjs/operators';
import { AlbumsService } from '../../services/albums.service';
import { loadAlbums, loadAlbumsSuccess, loadPhotos, loadPhotosSuccess } from '../actions/album.actions';



@Injectable()
export class AlbumsEffects {

  getAlbums = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAlbums),
      mergeMap(() => {
        return this._aService.getALlAlbums()
      }),
      map(albums => loadAlbumsSuccess({ data: albums }))
    );
  });

  getPhotos = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPhotos),
      mergeMap(({id}) => {
        return this._aService.getAlbumPhotos(id)
          .pipe(
            map(res =>
              ({ data: res, id }))
          );
      }),
      map(data => loadPhotosSuccess({ data: data.data }))
    );
  });

  constructor(private actions$: Actions, private _aService: AlbumsService) {}

}
