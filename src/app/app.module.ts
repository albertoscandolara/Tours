import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// svg components
import { AsEmailSvgComponent } from './components/svg/as-email-svg/as-email.svg.component';
import { AsCameraSvgComponent } from './components/svg/as-camera-svg/as-camera.svg.component';
import { AsInfoSvgComponent } from './components/svg/as-info-svg/as-info.svg.component';

// other components
import { AsMenuItemComponent } from './components/as-menu-item/as-menu-item.component';
import { AsTourListComponent } from './components/as-tour-list/as-tour-list.component';
import { AsToursListComponent } from './components/as-tours-list/as-tours-list.component';
import { AsNavbarComponent } from './components/as-navbar/as-navbar.component';
import { AsMainComponent } from './components/as-main-component/as-main.component';

@NgModule({
  declarations: [
    AppComponent,
    AsCameraSvgComponent,
    AsEmailSvgComponent,
    AsInfoSvgComponent,
    AsMenuItemComponent,
    AsTourListComponent,
    AsToursListComponent,
    AsNavbarComponent,
    AsMainComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
