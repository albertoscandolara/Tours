import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

import json from '../../../../configurations/contacts.json';

import { TranslationsService } from 'src/app/services/translations-service/translations.service';
import { Profile } from 'src/app/models/profile.dto';
import { COLORS } from 'src/app/enums/colors';
import { Contact } from 'src/app/models/contact.dto';
import { contactLogosFolderPath } from 'src/app/constants/paths';

@Component({
  selector: 'as-profile',
  templateUrl: './as-profile.component.html',
  styleUrls: [
    './styles/as-profile.component.scss',
    './styles/as-profile-light.component.scss',
    './styles/as-profile-dark.component.scss',
  ],
})
export class AsProfile implements OnInit {
  /**
   * Current color
   */
  @Input() color: COLORS = COLORS.DARK;

  /**
   * Current profile
   */
  @Input() profile: Profile;

  /**
   * List of available contacts
   */
  public contacts: Array<Contact | undefined> = [];

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * ngOnInit method
   */
  ngOnInit(): void {
    this._setContacts();
  }

  /**
   * Set contacts list
   *
   * @returns {void}
   */
  private _setContacts(): void {
    const contacts = json.contacts;
    JSON.parse(JSON.stringify(contacts)).forEach((contact: Contact) => {
      const isIncluded: boolean = this.profile.contacts
        .map((c) => c.contactId)
        .includes(contact.id);

      let c: Contact | undefined;
      if (isIncluded) {
        c = contact;
        c.signature = `${contactLogosFolderPath}/${c.signature}`;
      } else {
        c = undefined;
      }
      this.contacts.push(c);
    });
  }
}
