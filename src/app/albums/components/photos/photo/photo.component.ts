import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AlbumsService} from 'src/app/albums/services/albums.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(
    private _aService: AlbumsService,
    public dialogRef: MatDialogRef<PhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log(this.data.photos);
  }

  change(data) {
    const index = data.photos.indexOf(data.photo);
    if (index >= 0 && index < data.photos.length - 1) {
      this.data.photo = this.data.photos[index + 1];
    }
  }
}
