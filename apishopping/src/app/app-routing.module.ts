import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { SupportsComponent } from './supports/supports.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'support',
      component: SupportsComponent
    },
    {
      path: '',
      component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }