import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { SupportsComponent } from './supports/supports.component';


//This is my case 
const routes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'support',
        component: SupportsComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }