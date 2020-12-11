import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private url = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) { }

  getALlAlbums() {
   return this.http.get(this.url, {});
  }

}
