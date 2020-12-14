import { NoopScrollStrategy } from '@angular/cdk/overlay';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {Observable, Subject, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import {Photos} from '../../models/photos';
import {AlbumsService} from '../../services/albums.service';
import {selectAlbum} from '../../store/selectors/albums.selectors';
import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnDestroy {
  photos$: Observable<Photos[]>;
  delete$: Subscription;
  toggleView: boolean = false;

  constructor(private _store: Store, private _aService: AlbumsService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.photos$ = this.selectAlbum();
  }

  selectAlbum() {
    return this._store.pipe(
      select(selectAlbum),
      filter(data => !!data)
    );
  }

  changeView() {
    this.toggleView = !this.toggleView;
  }

  deletePhoto(event, id) {
    this.deleteDialog(event, id);
  }

  ngOnDestroy(){
    this.delete$.unsubscribe();
  }

  deleteDialog(event, id): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this data?",
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.delete$ = this._aService.deletePhoto(id).subscribe();
        // DO SOMETHING
      }
    });
  }

  photoDialog(photo, photos): void {
    const dialogRef = this.dialog.open(PhotoComponent, {
      data: {photo: photo, photos: photos},
    });
  }

}
