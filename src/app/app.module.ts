import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// svg components
import { AsCrossSvgComponent } from './components/svg/as-cross-svg/as-cross.svg.component';
import { AsEmailSvgComponent } from './components/svg/as-email-svg/as-email.svg.component';
import { AsCameraSvgComponent } from './components/svg/as-camera-svg/as-camera.svg.component';
import { AsInfoSvgComponent } from './components/svg/as-info-svg/as-info.svg.component';
import { AsLanguageSvgComponent } from './components/svg/as-language-svg/as-language-svg.component';
import { AsMapSvgComponent } from './components/svg/as-map-svg/as-map.svg.component';
import { AsMenuSvgComponent } from './components/svg/as-menu-svg/as-menu.svg.component';
import { AsPeopleSvgComponent } from './components/svg/as-people-svg/as-people.svg.component';
import { AsSpinnerSvgComponent } from './components/svg/as-spinner-svg/as-spinner.svg.component';

// other components
import { AsMenuItemComponent } from './components/as-menu-item/as-menu-item.component';
import { AsTourListComponent } from './components/as-tour-list/as-tour-list.component';
import { AsToursListComponent } from './components/as-tours-list/as-tours-list.component';
import { AsNavbarComponent } from './components/as-navbar/as-navbar.component';
import { AsMainComponent } from './components/as-main/as-main.component';
import { AsModalComponent } from './components/modals/as-modal/as-modal.component';
import { AsHeaderComponent } from './components/headers/as-title-rolling/as-header.component';
import { AsActionComponent } from './components/sections/as-action/as-action.component';
import { AsEmailComponent } from './components/sections/as-email/as-email.component';
import { AsGalleryComponent } from './components/sections/as-gallery/as-gallery.component';
import { AsInfoComponent } from './components/sections/as-info/as-info.component';
import { AsEmailFormComponent } from './components/sections/as-email/as-email-form/as-email-form.component';
import { AsEmailProcessingComponent } from './components/sections/as-email/as-email-processing/as-email-processing.component';
import { AsEmailSubmissionResultComponent } from './components/sections/as-email/as-email-submission-result/as-email-submission-result.component';
import { AsInfoDetailsComponent } from './components/sections/as-info/as-info-details/as-info-details.component';
import { AsInfoMenuComponent } from './components/sections/as-info/as-info-menu/as-info-menu.component';
import { AsDetailsSvgComponent } from './components/svg/as-details-svg/as-details.svg.component';
import { AsInfoMapComponent } from './components/sections/as-info/as-info-map/as-info-map.component';
import { AsMenuComponent } from './components/as-menu/as-menu.component';
import { AsSideModalComponent } from './components/modals/as-side-modal/as-side-modal.component';
import { LanguageService } from './services/language-service/language.service';
import { TranslationsService } from './services/translations-service/translations.service';
import { AsLanguagesComponent } from './components/sections/as-languages/as-languages.component';
import { AsComboboxComponent } from './components/shared/as-combobox/as-combobox.component';
import { AsAboutUs } from './components/sections/as-about-us/as-about-us.component';
import { AsProfile } from './components/sections/as-about-us/as-profile/as-profile.component';
import { AsPurpose } from './components/sections/as-about-us/as-purpose/as-purpose.component';

@NgModule({
  declarations: [
    AppComponent,
    AsAboutUs,
    AsCameraSvgComponent,
    AsComboboxComponent,
    AsCrossSvgComponent,
    AsDetailsSvgComponent,
    AsEmailSvgComponent,
    AsInfoSvgComponent,
    AsLanguageSvgComponent,
    AsMapSvgComponent,
    AsMenuSvgComponent,
    AsPeopleSvgComponent,
    AsSpinnerSvgComponent,
    AsMenuItemComponent,
    AsTourListComponent,
    AsToursListComponent,
    AsNavbarComponent,
    AsMainComponent,
    AsMenuComponent,
    AsModalComponent,
    AsSideModalComponent,
    AsActionComponent,
    AsHeaderComponent,
    AsEmailComponent,
    AsGalleryComponent,
    AsInfoComponent,
    AsInfoDetailsComponent,
    AsInfoMapComponent,
    AsInfoMenuComponent,
    AsEmailFormComponent,
    AsEmailProcessingComponent,
    AsEmailSubmissionResultComponent,
    AsLanguagesComponent,
    AsProfile,
    AsPurpose,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LanguageService, TranslationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
