import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';
import { Language } from 'src/app/models/language.dto';
import languagesJSON from 'src/app/configurations/languages.json';
import { LanguageService } from 'src/app/services/language-service/language.service';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-languages',
  templateUrl: './as-languages.component.html',
  styleUrls: [
    './styles/as-languages.component.scss',
    './styles/as-languages-light.component.scss',
    './styles/as-languages-dark.component.scss',
    './styles/as-languages-heliotrope.component.scss',
    './styles/as-languages-java.component.scss',
    './styles/as-languages-watermelon.component.scss',
  ],
})
export class AsLanguagesComponent {
  /**
   * Current color
   */
  @Input() color: COLORS = COLORS.DARK;

  /**
   * List of available languages
   */
  public languages: Array<Language> = [];

  /**
   * Constructor
   */
  constructor(
    public languageService: LanguageService,
    public translationsService: TranslationsService
  ) {
    const languagesObj: any = languagesJSON;
    this.languages = languagesObj.languages;
  }

  /**
   * Handle new language choice
   *
   * @param {Language} language language to set
   * @returns {void}
   */
  public onChangeLanguage(language: Language): void {
    this.languageService.currentLanguageISOCode = language.ISOCode;
  }
}
