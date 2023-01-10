import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

import json from '../../../../configurations/contacts.json';

import { ComboItem } from 'src/app/models/combo-item';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';
import { Profile } from 'src/app/models/profile.dto';
import { COLORS } from 'src/app/enums/colors';
import { Contact } from 'src/app/models/contact.dto';
import { profileImagesFolderPath } from 'src/app/constants/paths';
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
    this._setProfile();
    this._setContacts();
  }

  /**
   * Set profile
   *
   * @returns {void}
   */
  private _setProfile(): void {
    this.profile.profileImgSignature = `${profileImagesFolderPath}/${this.profile.id}/${this.profile.profileImgSignature}`;
  }

  /**
   * Set contacts list
   *
   * @returns {void}
   */
  private _setContacts(): void {
    const contacts = json.contacts;
    contacts.forEach((contact) => {
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
