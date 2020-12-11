import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Albums } from '../../models/albums';
import {loadAlbumsFailure, loadAlbumsSuccess, resetAlbums } from '../actions/album.actions';


export const albumsFeatureKey = 'albums';

export interface AlbumsState {
  albums: Albums[];
  loaded: boolean;
  loading: boolean;
  errors: any;
}

export const initialState: AlbumsState = {
  albums: null,
  loaded: false,
  loading: false,
  errors: null
};


export const albumsReducer = createReducer(
  initialState,
  on(loadAlbumsSuccess, (state, { data }) => ({ ...state, albums: data, loading: false, loaded: true })),
  on(loadAlbumsFailure, (state) => ({ ...state, loading: false, loaded: false })),
  on(resetAlbums, (state) => ({ ...initialState }))
);

export function reducer(state: AlbumsState, action: Action) {
  return albumsReducer(state, action);
}

export const adapter: EntityAdapter<Albums[]> = createEntityAdapter<Albums[]>();

export const {  selectEntities } = adapter.getSelectors();
