/**
 * @overview  Contact group type
 */

import { Contact } from './contact.type';

export type ContactGroup = {
  abbreviation: string,
  contacts: Contact[]
}
