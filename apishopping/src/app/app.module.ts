import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SupportsComponent } from './supports/supports.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PagetitleComponent } from './cores/pagetitle/pagetitle.component';
import { MyusageComponent } from './myusage/myusage.component';
import { AppsComponent } from './apps/apps.component';
import { NgxGaugeModule } from 'ngx-gauge';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    GalleryComponent,
    SupportsComponent,
    CartComponent,
    HomeComponent,
    PagetitleComponent,
    MyusageComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
