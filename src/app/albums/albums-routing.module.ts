import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../helpers/auth-guard';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumResolver } from './resolver/resolver';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id/photos',
    component: PhotosComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: AlbumResolver
    }
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
  providers: [AlbumResolver]
})
export class AlbumsRoutingModule { }
