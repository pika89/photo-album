import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './pages/albums/albums.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
  },
  {
    path: ':id/photos',
    component: PhotosComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule { }
