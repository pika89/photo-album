import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Albums } from '../../models/albums';
import { AlbumsService } from '../../services/albums.service';
import { loadAlbums, resetAlbums } from '../../store/actions/album.actions';
import { selectAlbums } from '../../store/selectors/albums.selectors';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Albums[]>;
  searchText: string;
  constructor(private _aService: AlbumsService, private store: Store<{ albums: Albums[] }>, private router: Router) { }

  ngOnInit(): void {
    this.getAlbums();

    this.albums$ = this.store.select(selectAlbums())
  }

  getAlbums() {
    // RESET ENTITIES
    this.store.dispatch(resetAlbums());
    // GET ENTITIES
    this.store.dispatch(loadAlbums());
  }

  details(event){
    this.router.navigateByUrl(`/albums/${event.id}/photos`);
  }

}
