/**
 * @overview  Interactive contact type
 */

import { Contact } from '../../types/contact.type';

export type ContactInteractive = Contact & {
  isActive: boolean;
};
