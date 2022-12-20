import { Injectable } from '@angular/core';
import { LANGUAGES_ISO_CODES } from 'src/app/enums/languages';
import { TranslationsService } from '../translations-service/translations.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * Current language ISO code
   */
  private _currentLanguageISOCode: LANGUAGES_ISO_CODES;

  /**
   * Constructor
   *
   * @constructor
   * @ignore
   */
  constructor(private _translationsService: TranslationsService) {
    this.currentLanguageISOCode = LANGUAGES_ISO_CODES.ENGLISH;
  }

  /**
   * _currentLanguageISOCode property getter
   */
  get currentLanguageISOCode(): LANGUAGES_ISO_CODES {
    return this._currentLanguageISOCode;
  }

  /**
   * _currentLanguageISOCode property setter
   */
  set currentLanguageISOCode(value: LANGUAGES_ISO_CODES) {
    if (this._currentLanguageISOCode === value) {
      return;
    }

    this._currentLanguageISOCode = value;
    this._translationsService.setTranslations(this.currentLanguageISOCode);
  }
}
