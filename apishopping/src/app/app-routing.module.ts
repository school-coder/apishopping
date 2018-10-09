import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { SupportsComponent } from './supports/supports.component';
import { HomeComponent } from './home/home.component';
import { MyusageComponent } from './myusage/myusage.component';
import { AppsComponent } from './apps/apps.component';
import { CheckoutComponent } from './checkout/checkout.component';

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
      path: 'usage/:id',
      component: MyusageComponent
    },
    {
      path: 'checkout',
      component: CheckoutComponent
    },
    {
      path: 'apps',
      component: AppsComponent
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