import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Contacts missing.Nothing to delete.');
      return;
    }
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact successfully deleted.');
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

removeLastContact();
