import { Injectable } from '@angular/core';
import { LANGUAGES_ISO_CODES } from 'src/app/enums/languages';
import translationsJSON from 'src/app/configurations/translations.json';
import {
  LanguagesTranslations,
  Translation,
} from 'src/app/models/translations.dto';

@Injectable({
  providedIn: 'root',
})
export class TranslationsService {
  /**
   * Translations dictionary
   */
  private translations: { [k: string]: string } = {};
  /**
   * Constructor
   *
   * @constructor
   * @ignore
   */
  constructor() {}

  /**
   * Set translations for provided language ISO code
   *
   * @param {LANGUAGES_ISO_CODES} ISOCode provided language ISO code
   * @returns {void}
   */
  public setTranslations(ISOCode: LANGUAGES_ISO_CODES): void {
    const translationsObj: any = translationsJSON;
    const translations: Array<Translation> = translationsObj.translations;

    this.translations = {};

    this.translations = Object.fromEntries(
      translations.map(
        ({ key, value }: { key: string; value: LanguagesTranslations }) => [
          key,
          value[ISOCode] ?? key,
        ]
      )
    );
  }

  /**
   * Translate provided sentence
   *
   * @param {string} key sentence to translate
   */
  public translate(key: string): string {
    return this.translations[key] ?? key;
  }
}
