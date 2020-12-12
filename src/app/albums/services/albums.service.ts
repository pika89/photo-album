import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable } from 'rxjs';
import {concatMap, map, mergeMap} from 'rxjs/operators';
import {Albums} from '../models/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {
  }

  getALlAlbums() {
    return this.http.get(this.url + 'albums', {});
  }


}
