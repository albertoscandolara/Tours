import { Component } from '@angular/core';
import { Tour } from './models/tour';
import { LanguageService } from './services/language-service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Constructor
   */
  constructor(private _languageService: LanguageService) {}
}
