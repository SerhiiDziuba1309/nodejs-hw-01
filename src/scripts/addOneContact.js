import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = existingContacts.concat(newContact);
    await writeContacts(updatedContacts);
    console.log('One contact successfully added:', newContact);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

addOneContact();
