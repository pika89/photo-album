import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {Albums} from '../../models/albums';
import {
  loadAlbumsFailure,
  loadAlbumsSuccess,
  loadPhotos,
  loadPhotosFailure,
  loadPhotosSuccess,
  resetAlbums,
  resetPhotos
} from '../actions/album.actions';
import {Photos} from '../../models/photos';


export const albumsFeatureKey = 'albums';

export interface AlbumsState {
  albums: Albums[];
  photos: Photos[];
  loaded: boolean;
  loading: boolean;
  errors: any;
}

export const initialState: AlbumsState = {
  albums: null,
  photos: null,
  loaded: false,
  loading: false,
  errors: null
};


export const albumsReducer = createReducer(
  initialState,
  on(loadAlbumsSuccess, (state, {data}) => ({...state, albums: data, loading: false, loaded: true})),
  on(loadAlbumsFailure, (state) => ({...state, loading: false, loaded: false})),
  on(loadPhotosSuccess, (state, {data}) => ({...state, photos: data, loading: false, loaded: true})),
  on(loadPhotosFailure, (state) => ({...state, loading: false, loaded: false})),
  on(resetPhotos, (state) => ({...initialState})),
  on(resetAlbums, (state) => ({...initialState}))
);

export function reducer(state: AlbumsState, action: Action) {
  return albumsReducer(state, action);
}


export const adapter: EntityAdapter<Albums[]> = createEntityAdapter<Albums[]>();

export const {selectEntities} = adapter.getSelectors();
