import { createAction, props } from '@ngrx/store';

export const loadAlbums = createAction(
  '[Album] Load Albums'
);

export const loadAlbumsSuccess = createAction(
  '[Album] Load Albums Success',
  props<{ data: any }>()
);

export const loadAlbumsFailure = createAction(
  '[Album] Load Albums Failure',
  props<{ error: any }>()
);
export const resetAlbums = createAction('[Album] Reset Album');


