import {createAction, props} from '@ngrx/store';

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

export const loadPhotos = createAction(
  '[Photo] Load Photos', props<{ id: string }>()
);

export const loadPhotosSuccess = createAction(
  '[Photo] Load Photos Success',
  props<{ data: any }>()
);

export const loadPhotosFailure = createAction(
  '[Photo] Load Photos Failure',
  props<{ error: any }>()
);
export const resetPhotos = createAction('[Photo] Reset Photo');
export const resetAlbums = createAction('[Album] Reset Album');


