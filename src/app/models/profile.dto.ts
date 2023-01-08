export interface Profile {
  id: number;
  name: string;
  surname: string;
  profileImgSignature: string;
  contacts: Array<Contact>;
}

interface Contact {
  id: number;
  description: string;
  enabled: boolean;
  link: string;
}
