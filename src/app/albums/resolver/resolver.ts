import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, first, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import {loadPhotos, resetPhotos } from '../store/actions/album.actions';
import { selectAlbum } from '../store/selectors/albums.selectors';

@Injectable()
export class AlbumResolver implements Resolve<any> {

  id: string;

  constructor(
    private _store: Store
  ) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    this._store.dispatch(resetPhotos());

    const id = route.paramMap.get('id');

    return this.getData(id).pipe(
      map((data) => data));
  }

  getData(id: string) {
    return this._store.pipe(
      select(selectAlbum),
      tap(photos => {
        if (!photos) {
          this._store.dispatch(loadPhotos({ id }));
        }
      }),
      first()
    );
  }

}
